import { execFileSync } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';

/** Only alphanumeric, hyphens, dots, underscores — validated upstream by Zod */
const SAFE_NAME = /^[a-zA-Z0-9._-]+$/;

const CACHE_DIR = path.join(os.tmpdir(), 'resuml-themes');

export function toPackageName(theme: string): string {
  if (!SAFE_NAME.test(theme)) {
    throw new Error('Invalid theme name');
  }
  return theme.startsWith('jsonresume-theme-')
    ? theme
    : `jsonresume-theme-${theme}`;
}

/**
 * Download a theme from the npm registry and install its deps
 * into an isolated directory — no pollution of the project's node_modules.
 */
export async function ensureInstalled(themeName: string): Promise<string> {
  const pkgName = toPackageName(themeName);
  const pkgDir = path.join(CACHE_DIR, pkgName);

  if (fs.existsSync(path.join(pkgDir, 'package.json'))) {
    return pkgDir;
  }

  // Fetch tarball URL from the npm registry
  const metaRes = await fetch(`https://registry.npmjs.org/${pkgName}/latest`);
  if (!metaRes.ok) {
    throw new Error(`Theme "${pkgName}" not found on npm (${String(metaRes.status)})`);
  }
  const meta = (await metaRes.json()) as { dist: { tarball: string } };
  const tarballUrl = meta.dist.tarball;

  // Download tarball
  const tarRes = await fetch(tarballUrl);
  if (!tarRes.ok) {
    throw new Error(`Failed to download theme tarball (${String(tarRes.status)})`);
  }
  const buf = Buffer.from(await tarRes.arrayBuffer());

  // Extract to cache dir
  fs.mkdirSync(pkgDir, { recursive: true });
  const tarPath = path.join(CACHE_DIR, `${pkgName}.tgz`);
  fs.writeFileSync(tarPath, buf);
  execFileSync('tar', ['xzf', tarPath, '-C', pkgDir, '--strip-components=1'], {
    timeout: 10_000,
  });
  fs.unlinkSync(tarPath);

  // Install prod dependencies (ignore lifecycle scripts for security)
  const pkgJson = JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf8')) as {
    dependencies?: Record<string, string>;
  };
  if (pkgJson.dependencies && Object.keys(pkgJson.dependencies).length > 0) {
    execFileSync('npm', ['install', '--omit=dev', '--ignore-scripts', '--prefix', pkgDir], {
      timeout: 30_000,
      stdio: 'pipe',
    });
  }

  return pkgDir;
}

export function loadRenderer(pkgDir: string): (resume: Record<string, unknown>) => string | Promise<string> {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-assignment
  const mod = require(pkgDir);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (typeof mod.render !== 'function') {
    throw new Error(`Theme at "${pkgDir}" does not export a render function`);
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
  return mod.render as (resume: Record<string, unknown>) => string | Promise<string>;
}

export async function renderWithTheme(themeName: string, resume: Record<string, unknown>): Promise<string> {
  const pkgDir = await ensureInstalled(themeName);
  const render = loadRenderer(pkgDir);
  return await render(resume);
}
