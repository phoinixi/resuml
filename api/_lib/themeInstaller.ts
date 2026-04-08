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
    main?: string;
    dependencies?: Record<string, string>;
    scripts?: Record<string, string>;
  };
  if (pkgJson.dependencies && Object.keys(pkgJson.dependencies).length > 0) {
    execFileSync('npm', ['install', '--omit=dev', '--ignore-scripts'], {
      timeout: 30_000,
      stdio: 'pipe',
      cwd: pkgDir,
    });
  }

  // Check if the main entry point exists; if not, the theme needs building
  const mainEntry = pkgJson.main ?? 'index.js';
  const mainPath = path.join(pkgDir, mainEntry);
  if (!fs.existsSync(mainPath) && pkgJson.scripts?.['build']) {
    // Install all deps (including devDependencies for the build)
    execFileSync('npm', ['install', '--ignore-scripts'], {
      timeout: 60_000,
      stdio: 'pipe',
      cwd: pkgDir,
    });
    execFileSync('npm', ['run', 'build'], {
      timeout: 60_000,
      stdio: 'pipe',
      env: { ...process.env, NODE_ENV: 'production' },
    });
  }

  return pkgDir;
}

export function loadRenderer(pkgDir: string): (resume: Record<string, unknown>) => string | Promise<string> {
  let mod: Record<string, unknown>;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-assignment
    mod = require(pkgDir) as Record<string, unknown>;
  } catch (_err) {
    const name = path.basename(pkgDir);
    throw new Error(
      `Could not load theme "${name}". It may require a build step not included in the published package.`,
    );
  }
  if (typeof mod['render'] !== 'function') {
    throw new Error(`Theme at "${pkgDir}" does not export a render function`);
  }
  return mod['render'] as (resume: Record<string, unknown>) => string | Promise<string>;
}

/**
 * Pad resume with safe defaults so themes don't crash on missing fields.
 * Only pad basics/location (scalar fields). Do NOT inject empty arrays —
 * themes check `arr[0].prop` which crashes when arr is [] but works when arr is undefined.
 */
function padResume(r: Record<string, unknown>): Record<string, unknown> {
  const basics = (r['basics'] ?? {}) as Record<string, unknown>;
  const location = (basics['location'] ?? {}) as Record<string, unknown>;
  const safe: Record<string, unknown> = {
    ...r,
    basics: {
      name: '', label: '', image: '', email: '', phone: '', url: '', summary: '',
      ...basics,
      location: { address: '', postalCode: '', city: '', countryCode: '', region: '', ...location },
    },
  };
  // Strip empty arrays — themes crash on arr[0].prop when arr is []
  const arraySections = ['work','volunteer','education','awards','certificates','publications','skills','languages','interests','references','projects'];
  for (const key of arraySections) {
    if (Array.isArray(safe[key]) && (safe[key] as unknown[]).length === 0) {
      delete safe[key];
    }
  }
  const safeBasics = safe['basics'] as Record<string, unknown>;
  if (Array.isArray(safeBasics['profiles']) && (safeBasics['profiles'] as unknown[]).length === 0) {
    delete safeBasics['profiles'];
  }
  return safe;
}

export async function renderWithTheme(themeName: string, resume: Record<string, unknown>): Promise<string> {
  const paddedResume = padResume(resume);
  const pkgDir = await ensureInstalled(themeName);
  const render = loadRenderer(pkgDir);
  // Change cwd to theme dir so themes reading files with relative paths work
  const originalCwd = process.cwd();
  process.chdir(pkgDir);
  try {
    return await render(paddedResume);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(
      `Theme "${themeName}" crashed while rendering: ${msg}. ` +
      `This usually means the theme expects resume fields that are missing.`,
    );
  } finally {
    process.chdir(originalCwd);
  }
}
