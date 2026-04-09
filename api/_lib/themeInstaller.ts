import { execFileSync } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { createRequire } from 'module';
import { extract as tarExtract } from 'tar';

const require = createRequire(import.meta.url);

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

/** Keep at most this many cached theme dirs to stay within Lambda /tmp limits */
const MAX_CACHED_THEMES = 4;

/**
 * Evict the oldest installed theme dirs (by mtime) when we have too many cached.
 * Runs before each new install to prevent /tmp from filling up.
 */
function evictOldThemes(): void {
  if (!fs.existsSync(CACHE_DIR)) return;

  const dirs = fs.readdirSync(CACHE_DIR)
    .map(name => {
      const dir = path.join(CACHE_DIR, name);
      try {
        const stat = fs.statSync(dir);
        return stat.isDirectory() ? { dir, mtime: stat.mtimeMs } : null;
      } catch { return null; }
    })
    .filter((e): e is { dir: string; mtime: number } => e !== null)
    .sort((a, b) => a.mtime - b.mtime); // oldest first

  while (dirs.length >= MAX_CACHED_THEMES) {
    const oldest = dirs.shift()!;
    try { fs.rmSync(oldest.dir, { recursive: true, force: true }); } catch { /* ignore */ }
  }
}

/**
 * Clean up the npm download cache to reclaim /tmp space after an install.
 */
function cleanNpmCache(): void {
  try {
    execFileSync('npm', ['cache', 'clean', '--force', '--cache', '/tmp/.npm-cache'], {
      stdio: 'pipe',
      env: { HOME: '/tmp' },
      timeout: 15_000,
    });
  } catch { /* non-fatal */ }
}

/**
 * Download a theme from the npm registry and install its deps
 * into an isolated directory — no pollution of the project's node_modules.
 */
export async function ensureInstalled(themeName: string): Promise<string> {
  const pkgName = toPackageName(themeName);
  const pkgDir = path.join(CACHE_DIR, pkgName);

  if (fs.existsSync(path.join(pkgDir, 'package.json'))) {
    // Touch the dir so mtime stays current (used for LRU eviction)
    const now = new Date();
    try { fs.utimesSync(pkgDir, now, now); } catch { /* ignore */ }
    return pkgDir;
  }

  // Evict oldest cached themes before installing a new one
  evictOldThemes();

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
  await tarExtract({ file: tarPath, cwd: pkgDir, strip: 1 });
  fs.unlinkSync(tarPath);

  // Install prod dependencies (ignore lifecycle scripts for security)
  const pkgJson = JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf8')) as {
    main?: string;
    dependencies?: Record<string, string>;
    scripts?: Record<string, string>;
  };
  if (pkgJson.dependencies && Object.keys(pkgJson.dependencies).length > 0) {
    execFileSync('npm', ['install', '--omit=dev', '--ignore-scripts', '--legacy-peer-deps', '--cache', '/tmp/.npm-cache', '--no-audit', '--no-fund'], {
      timeout: 60_000,
      stdio: 'pipe',
      cwd: pkgDir,
      env: { ...process.env, HOME: '/tmp', npm_config_cache: '/tmp/.npm-cache' },
    });
    // Clean download cache to free /tmp space — installed node_modules stay
    cleanNpmCache();
  }

  // Check if the main entry point exists; themes that only ship source and need a
  // build step are not supported in the online editor (build takes too long in Lambda).
  const mainEntry = pkgJson.main ?? 'index.js';
  const mainPath = path.join(pkgDir, mainEntry);
  if (!fs.existsSync(mainPath)) {
    // Clean up so the next request doesn't find a broken install
    fs.rmSync(pkgDir, { recursive: true, force: true });
    throw new Error(
      `Theme "${pkgName}" does not include a pre-built package. ` +
      `Themes that require a compile step are not supported in the online editor.`,
    );
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
 * Returns a Proxy-wrapped array that:
 * - Supports .map/.forEach/.filter on empty arrays (no crash)
 * - Returns a safe empty-string object for out-of-bounds index access (prevents arr[0].prop crash)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createSafeArray(arr: unknown[]): unknown[] {
  return new Proxy(arr, {
    get(target, prop, receiver): unknown {
      const val = Reflect.get(target, prop, receiver) as unknown;
      if (val !== undefined) return val;
      if (typeof prop === 'string' && /^\d+$/u.test(prop)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new Proxy({} as any, { get: (_: any, p: string | symbol) => typeof p === 'symbol' ? undefined : '' });
      }
      return val;
    },
  });
}

/**
 * Pad resume with safe defaults so themes don't crash on missing fields.
 * All array sections are wrapped in createSafeArray so that:
 * - theme.work.map(fn) works on empty data
 * - theme.work[0].position returns '' instead of crashing
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
  const arraySections = ['work','volunteer','education','awards','certificates','publications','skills','languages','interests','references','projects'];
  for (const key of arraySections) {
    safe[key] = createSafeArray(Array.isArray(safe[key]) ? (safe[key] as unknown[]) : []);
  }
  const safeBasics = safe['basics'] as Record<string, unknown>;
  safeBasics['profiles'] = createSafeArray(Array.isArray(safeBasics['profiles']) ? (safeBasics['profiles'] as unknown[]) : []);
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
