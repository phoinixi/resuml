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

/**
 * Try to resolve a theme from the Lambda's pre-installed (host) node_modules.
 * These themes are listed as npm dependencies and ship with the deployment —
 * require() is instantaneous, no download or disk usage.
 * Returns the package root directory if found, null otherwise.
 */
function tryHostTheme(pkgName: string): string | null {
  try {
    // Resolve the main entry (avoids `exports` restrictions on ./package.json).
    // Then walk up from the file until we find a package.json — that's the root.
    let dir = path.dirname(require.resolve(pkgName));
    while (true) {
      if (fs.existsSync(path.join(dir, 'package.json'))) {
        return dir;
      }
      const parent = path.dirname(dir);
      if (parent === dir) return null; // reached fs root without finding package.json
      dir = parent;
    }
  } catch {
    return null;
  }
}

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
    const oldest = dirs.shift();
    if (oldest) {
      try { fs.rmSync(oldest.dir, { recursive: true, force: true }); } catch { /* ignore */ }
    }
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
 * Symlink any of the theme's listed dependencies that are already present in
 * the Lambda host node_modules into the theme's own node_modules directory.
 *
 * When npm install runs next, it sees those packages as already satisfied
 * (version check passes) and skips downloading/extracting them. For React-based
 * themes this avoids re-installing react + react-dom + their 80-odd transitive
 * deps (~100MB), keeping /tmp usage well within the 512MB Lambda limit.
 */
function prelinkHostDeps(pkgDir: string, deps: Record<string, string>): void {
  let hostNm: string;
  try {
    // require.resolve('react') → e.g. /var/task/node_modules/react/index.js
    // dirname twice → /var/task/node_modules
    hostNm = path.dirname(path.dirname(require.resolve('react')));
  } catch {
    return; // not resolvable (e.g. local dev without react in scope)
  }

  const themeNm = path.join(pkgDir, 'node_modules');
  fs.mkdirSync(themeNm, { recursive: true });

  for (const depName of Object.keys(deps)) {
    const hostPkgDir = path.join(hostNm, depName);
    const linkTarget = path.join(themeNm, depName);
    if (!fs.existsSync(hostPkgDir) || fs.existsSync(linkTarget)) continue;
    try {
      // Scoped packages (@scope/pkg) need their parent dir to exist first
      fs.mkdirSync(path.dirname(linkTarget), { recursive: true });
      fs.symlinkSync(hostPkgDir, linkTarget);
    } catch { /* ignore */ }
  }
}

/**
 * Download a theme from the npm registry and install its deps
 * into an isolated directory — no pollution of the project's node_modules.
 */
export async function ensureInstalled(themeName: string): Promise<string> {
  const pkgName = toPackageName(themeName);
  const pkgDir = path.join(CACHE_DIR, pkgName);

  // Always fetch metadata first so we can validate the cached version.
  // This one small request (registry metadata, ~5KB) prevents stale-cache bugs
  // where an older cached package version has a different layout than the latest.
  const metaRes = await fetch(`https://registry.npmjs.org/${pkgName}/latest`);
  if (!metaRes.ok) {
    throw new Error(`Theme "${pkgName}" not found on npm (${String(metaRes.status)})`);
  }
  const meta = (await metaRes.json()) as { dist: { tarball: string }; version: string };
  const latestVersion = meta.version;
  const tarballUrl = meta.dist.tarball;

  // Cache hit: exists, same version, main entry file present → use it
  const cachedPkgPath = path.join(pkgDir, 'package.json');
  if (fs.existsSync(cachedPkgPath)) {
    const cachedPkg = JSON.parse(fs.readFileSync(cachedPkgPath, 'utf8')) as { main?: string; version?: string };
    const cachedMain = path.join(pkgDir, cachedPkg.main ?? 'index.js');
    if (cachedPkg.version === latestVersion && fs.existsSync(cachedMain)) {
      // Touch mtime so LRU stays accurate
      const now = new Date();
      try { fs.utimesSync(pkgDir, now, now); } catch { /* ignore */ }
      return pkgDir;
    }
    // Wrong version or broken install — evict
    fs.rmSync(pkgDir, { recursive: true, force: true });
  }

  // Evict oldest cached themes before installing a new one
  evictOldThemes();

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
  try {
    await tarExtract({ file: tarPath, cwd: pkgDir, strip: 1 });
  } finally {
    // Clean up tarball regardless of success/failure
    try { fs.unlinkSync(tarPath); } catch { /* already gone */ }
  }

  // Read package.json from extracted tarball
  const pkgJson = JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf8')) as {
    main?: string;
    dependencies?: Record<string, string>;
  };

  // Fail fast if the theme's main entry wasn't shipped (needs a build step).
  const mainEntry = pkgJson.main ?? 'index.js';
  const mainPath = path.join(pkgDir, mainEntry);
  if (!fs.existsSync(mainPath)) {
    fs.rmSync(pkgDir, { recursive: true, force: true });
    throw new Error(
      `Theme "${pkgName}" does not include a pre-built package. ` +
      `Themes that require a compile step are not supported in the online editor.`,
    );
  }

  // Install prod dependencies if the theme lists any.
  //
  // NOTE: We do NOT try to require() the theme first and skip install if it works.
  // Some themes (e.g. jsonresume-theme-react) use a lazy-loading wrapper index.cjs
  // that defers require('dist/index.cjs') until render() is called. The top-level
  // require() succeeds, but render() later fails because react is not found.
  // Always installing prod deps is the only safe approach.
  const hasDeps = pkgJson.dependencies !== undefined && Object.keys(pkgJson.dependencies).length > 0;
  if (hasDeps) {
    // Pre-link any deps already on the host so npm install skips them
    prelinkHostDeps(pkgDir, pkgJson.dependencies ?? {});
    try {
      execFileSync('npm', ['install', '--omit=dev', '--ignore-scripts', '--legacy-peer-deps', '--cache', '/tmp/.npm-cache', '--no-audit', '--no-fund'], {
        timeout: 55_000,
        stdio: 'pipe',
        cwd: pkgDir,
        env: { ...process.env, HOME: '/tmp', npm_config_cache: '/tmp/.npm-cache' },
      });
    } catch (installErr) {
      // Clean up on failure so the next request retries from scratch
      fs.rmSync(pkgDir, { recursive: true, force: true });
      const msg = installErr instanceof Error ? installErr.message : String(installErr);
      const isNoSpace = msg.includes('ENOSPC') || msg.includes('no space left');
      throw new Error(
        isNoSpace
          ? `Theme "${pkgName}" could not be installed: not enough disk space. Try a lighter theme.`
          : `Theme "${pkgName}" dependency install failed: ${msg.split('\n')[0]}`,
      );
    }
    // Clean download cache to free /tmp space — installed node_modules stay
    cleanNpmCache();
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
    const reason = _err instanceof Error ? _err.message : String(_err);
    throw new Error(
      `Could not load theme "${name}": ${reason}`,
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
  const pkgName = toPackageName(themeName);
  const paddedResume = padResume(resume);

  // Fast path: theme pre-installed as an npm dependency in this deployment
  const hostDir = tryHostTheme(pkgName);
  const pkgDir = hostDir ?? await ensureInstalled(themeName);
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
