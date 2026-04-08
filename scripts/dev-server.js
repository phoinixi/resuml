/**
 * Local dev server for the resuml builder.
 * - Watches & rebuilds the frontend with esbuild
 * - Serves docs/ statically
 * - Handles /api/render, /api/themes locally (same logic as Vercel functions)
 *
 * Usage: node scripts/dev-server.js [--port 3000]
 */
import http from 'node:http';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { build } from 'esbuild';

const require = createRequire(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.resolve(ROOT, 'docs');
const PORT = parseInt(process.argv.includes('--port') ? process.argv[process.argv.indexOf('--port') + 1] : '3000', 10);

// ── MIME types ──────────────────────────────────────────────────────
const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.map': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

// ── Theme helpers (CDN-based: fetch tarball + extract + install deps) ──
const SAFE_NAME = /^[a-zA-Z0-9._-]+$/;
const THEME_CACHE_DIR = path.join(os.tmpdir(), 'resuml-themes');

function toPackageName(theme) {
  if (!SAFE_NAME.test(theme)) throw new Error('Invalid theme name');
  return theme.startsWith('jsonresume-theme-') ? theme : `jsonresume-theme-${theme}`;
}

async function ensureThemeInstalled(theme) {
  const pkg = toPackageName(theme);
  const pkgDir = path.join(THEME_CACHE_DIR, pkg);

  if (fs.existsSync(path.join(pkgDir, 'package.json'))) {
    return pkgDir;
  }

  console.log(`📦 Downloading ${pkg} from npm registry...`);

  // Fetch tarball URL
  const metaRes = await fetch(`https://registry.npmjs.org/${pkg}/latest`);
  if (!metaRes.ok) throw new Error(`Theme "${pkg}" not found on npm (${metaRes.status})`);
  const meta = await metaRes.json();
  const tarballUrl = meta.dist.tarball;

  // Download and extract
  const tarRes = await fetch(tarballUrl);
  const buf = Buffer.from(await tarRes.arrayBuffer());
  fs.mkdirSync(pkgDir, { recursive: true });
  const tarPath = path.join(THEME_CACHE_DIR, `${pkg}.tgz`);
  fs.writeFileSync(tarPath, buf);
  execFileSync('tar', ['xzf', tarPath, '-C', pkgDir, '--strip-components=1'], { timeout: 10_000 });
  fs.unlinkSync(tarPath);

  // Install prod deps (ignore lifecycle scripts for security)
  const pkgJson = JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf8'));
  if (pkgJson.dependencies && Object.keys(pkgJson.dependencies).length > 0) {
    console.log(`   Installing dependencies for ${pkg}...`);
    execFileSync('npm', ['install', '--omit=dev', '--ignore-scripts', '--prefix', pkgDir], {
      timeout: 30_000,
      stdio: 'pipe',
    });
  }

  console.log(`   ✅ ${pkg} ready`);
  return pkgDir;
}

async function renderWithTheme(themeName, resume) {
  const pkgDir = await ensureThemeInstalled(themeName);

  // Clear require cache for this dir so hot-reload works
  for (const key of Object.keys(require.cache)) {
    if (key.startsWith(pkgDir)) delete require.cache[key];
  }

  const mod = require(pkgDir);
  if (typeof mod.render !== 'function') {
    throw new Error(`Theme "${toPackageName(themeName)}" does not export a render function`);
  }
  const result = mod.render(resume);
  return result instanceof Promise ? await result : result;
}

// ── Theme registry (mirrors api/_lib/themeRegistry.ts) ──────────────
let cachedThemes = null;
let cacheExpires = 0;

async function fetchThemeList() {
  const now = Date.now();
  if (cachedThemes && cacheExpires > now) return cachedThemes;

  const res = await fetch('https://registry.npmjs.org/-/v1/search?text=jsonresume-theme-&size=250');
  if (!res.ok) throw new Error(`npm registry returned ${res.status}`);

  const data = await res.json();
  const themes = [];
  for (const result of data.objects || []) {
    const pkg = result.package;
    const name = pkg.name;
    if (!name.startsWith('jsonresume-theme-')) continue;
    const shortName = name.replace('jsonresume-theme-', '');
    themes.push({
      name: shortName,
      displayName: shortName.charAt(0).toUpperCase() + shortName.slice(1).replace(/-/g, ' '),
      description: pkg.description || '',
      version: pkg.version || '0.0.0',
      weeklyDownloads: result.score?.detail?.popularity
        ? Math.round(result.score.detail.popularity * 10000)
        : 0,
    });
  }
  themes.sort((a, b) => b.weeklyDownloads - a.weeklyDownloads);
  cachedThemes = themes;
  cacheExpires = now + 3600_000;
  return themes;
}

// ── Parse JSON body ─────────────────────────────────────────────────
function readBody(req, maxBytes = 512 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > maxBytes) { req.destroy(); reject(new Error('Body too large')); return; }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try { resolve(JSON.parse(Buffer.concat(chunks).toString())); }
      catch { reject(new Error('Invalid JSON')); }
    });
    req.on('error', reject);
  });
}

// ── API route handlers ──────────────────────────────────────────────
async function handleApiRender(req, res) {
  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }
  if (req.method !== 'POST') { jsonError(res, 405, 'Method not allowed'); return; }

  let body;
  try { body = await readBody(req); } catch (e) { jsonError(res, 400, e.message); return; }

  const { resume, theme } = body;
  if (!resume || typeof resume !== 'object') { jsonError(res, 400, 'resume is required'); return; }
  if (!theme || typeof theme !== 'string' || !SAFE_NAME.test(theme)) { jsonError(res, 400, 'Invalid theme name'); return; }

  try {
    console.log(`🎨 Rendering with theme: ${theme}`);
    const html = await renderWithTheme(theme, resume);
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    });
    res.end(html);
  } catch (e) {
    console.error('Render error:', e.message);
    jsonError(res, 500, e.message);
  }
}

async function handleApiThemes(_req, res) {
  try {
    const themes = await fetchThemeList();
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    });
    res.end(JSON.stringify(themes));
  } catch (e) {
    jsonError(res, 500, e.message);
  }
}

function jsonError(res, status, message) {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(JSON.stringify({ error: message }));
}

// ── Static file serving ─────────────────────────────────────────────
function serveStatic(req, res) {
  let filePath = path.join(DOCS_DIR, req.url === '/' ? 'index.html' : req.url);

  // SPA fallback: if file doesn't exist and no extension, serve index.html
  if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    filePath = path.join(DOCS_DIR, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  const ext = path.extname(filePath);
  const mime = MIME[ext] || 'application/octet-stream';
  const content = fs.readFileSync(filePath);

  res.writeHead(200, { 'Content-Type': mime });
  res.end(content);
}

// ── esbuild watch ───────────────────────────────────────────────────
async function startBuildWatch() {
  const ctx = await build({
    entryPoints: [path.resolve(ROOT, 'src/builder/index.tsx')],
    bundle: true,
    sourcemap: true,
    format: 'esm',
    target: 'es2022',
    outfile: path.resolve(DOCS_DIR, 'app/main.js'),
    jsx: 'automatic',
    define: { 'process.env.NODE_ENV': '"development"' },
    loader: { '.ts': 'ts', '.tsx': 'tsx' },
    logLevel: 'info',
    // Don't minify in dev for better debugging
  });

  // Watch for changes (esbuild >= 0.17)
  if (typeof ctx.watch === 'function') {
    await ctx.watch();
    console.log('👀 Watching for frontend changes...');
  } else {
    // Fallback: just build once
    console.log('✅ Frontend built (watch not available, rebuild on save manually)');
  }

  return ctx;
}

// ── HTTP server ─────────────────────────────────────────────────────
async function main() {
  // Build frontend first
  await startBuildWatch();

  const server = http.createServer(async (req, res) => {
    // CORS preflight
    if (req.method === 'OPTIONS') {
      res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      });
      res.end();
      return;
    }

    const url = new URL(req.url, `http://localhost:${PORT}`);

    try {
      if (url.pathname === '/api/render') {
        await handleApiRender(req, res);
      } else if (url.pathname === '/api/themes') {
        await handleApiThemes(req, res);
      } else {
        serveStatic(req, res);
      }
    } catch (e) {
      console.error('Server error:', e);
      if (!res.headersSent) {
        jsonError(res, 500, 'Internal server error');
      }
    }
  });

  server.listen(PORT, () => {
    console.log('');
    console.log(`  🚀 resuml builder running at:`);
    console.log(`     http://localhost:${PORT}`);
    console.log('');
    console.log('  API endpoints:');
    console.log(`     POST http://localhost:${PORT}/api/render`);
    console.log(`     GET  http://localhost:${PORT}/api/themes`);
    console.log('');
  });
}

main().catch((err) => {
  console.error('Failed to start dev server:', err);
  process.exit(1);
});

// Prevent theme crashes from killing the server
process.on('uncaughtException', (err) => {
  console.error('⚠️  Uncaught exception (server still running):', err.message);
});
