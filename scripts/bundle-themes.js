/**
 * Theme Bundling Script
 *
 * Discovers jsonresume-theme packages from npm, installs them,
 * and bundles each into a browser-compatible ES module.
 *
 * Output:
 *   docs/themes/{name}.js       — bundled theme module
 *   docs/themes/manifest.json   — theme metadata registry
 *
 * Usage:
 *   node scripts/bundle-themes.js              # Bundle popular themes
 *   node scripts/bundle-themes.js --all        # Discover + bundle all from npm
 *   node scripts/bundle-themes.js --themes elegant,even,kendall  # Specific themes
 */

import { build } from 'esbuild';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { mkdirSync, writeFileSync, existsSync, readFileSync, readdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const THEMES_DIR = resolve(__dirname, '../docs/themes');

// Popular themes that are known to work in the browser
const POPULAR_THEMES = [
  'stackoverflow',
  'elegant',
  'even',
  'kendall',
  'flat',
  'macchiato',
  'class',
  'paper',
  'spartan',
  'short',
  'caffeine',
  'onepage',
  'kwan',
  'autumn',
  'relaxed',
  'compact',
];

async function discoverThemes() {
  const themes = [];
  let from = 0;
  const size = 250;

  console.log('🔍 Discovering themes from npm...');

  // npm search API has pagination, fetch up to 1000
  for (let page = 0; page < 4; page++) {
    const url = `https://registry.npmjs.org/-/v1/search?text=jsonresume-theme&size=${size}&from=${from}`;
    const res = await fetch(url);
    if (!res.ok) break;
    const data = await res.json();

    for (const pkg of data.objects) {
      const name = pkg.package.name;
      if (!name.startsWith('jsonresume-theme-')) continue;
      const shortName = name.replace('jsonresume-theme-', '');

      // Skip themes with 0 downloads or very old
      if (pkg.score?.detail?.popularity === 0) continue;

      themes.push({
        name: shortName,
        packageName: name,
        description: pkg.package.description || '',
        version: pkg.package.version,
      });
    }

    if (data.objects.length < size) break;
    from += size;
  }

  console.log(`   Found ${themes.length} themes`);
  return themes;
}

/** Recursively collect text files from a theme directory for embedding in the fs shim. */
function collectThemeFiles(themeDir) {
  const files = {};
  const dirs = {};

  function walk(dir, relPrefix = '') {
    let entries;
    try { entries = readdirSync(dir, { withFileTypes: true }); }
    catch { return; }

    const childNames = [];
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      childNames.push(entry.name);
      const full = join(dir, entry.name);
      const rel = relPrefix ? `${relPrefix}/${entry.name}` : entry.name;

      if (entry.isDirectory()) {
        walk(full, rel);
      } else {
        const ext = (entry.name.split('.').pop() || '').toLowerCase();
        if (['css', 'hbs', 'html', 'json', 'txt', 'handlebars', 'mustache'].includes(ext)) {
          try { files[rel] = readFileSync(full, 'utf-8'); }
          catch { /* skip unreadable */ }
        }
      }
    }
    dirs[relPrefix || '.'] = childNames;
  }

  walk(themeDir);
  return { files, dirs };
}

/** Generate an fs shim that embeds the theme's files so readFileSync/readdirSync work at runtime. */
function generateThemeFsShim(themeFiles) {
  const { files, dirs } = themeFiles;
  return `
const __files = ${JSON.stringify(files)};
const __dirs = ${JSON.stringify(dirs)};

function matchFile(path) {
  const clean = path.replace(/\\/+/g, '/').replace(/^\\/+/, '');
  if (__files[clean] !== undefined) return __files[clean];
  for (const key of Object.keys(__files)) {
    if (clean.endsWith('/' + key) || clean.endsWith(key)) return __files[key];
  }
  return undefined;
}

function matchDir(path) {
  const clean = path.replace(/\\/+/g, '/').replace(/^\\/+/, '');
  if (__dirs[clean] !== undefined) return __dirs[clean];
  for (const key of Object.keys(__dirs)) {
    if (clean.endsWith('/' + key) || clean.endsWith(key)) return __dirs[key];
  }
  return undefined;
}

export const readFileSync = (path, encoding) => {
  const r = matchFile(path);
  return r !== undefined ? r : '';
};

export const readdirSync = (path) => {
  const r = matchDir(path);
  return r !== undefined ? r : [];
};

export const existsSync = (path) => {
  return matchFile(path) !== undefined || matchDir(path) !== undefined;
};

export default { readFileSync, readdirSync, existsSync };
`;
}

async function bundleTheme(shortName, packageName, shimsDir) {
  // Generate a theme-specific fs shim with embedded file contents so that
  // readFileSync / readdirSync return real CSS, templates, and partials at runtime.
  const themeDir = resolve(__dirname, `../node_modules/${packageName}`);
  const themeFiles = collectThemeFiles(themeDir);
  writeFileSync(resolve(shimsDir, 'fs.js'), generateThemeFsShim(themeFiles));

  const entryContent = `
    import * as themeNs from '${packageName}';
    const _t = themeNs.default ?? themeNs;
    export const render = _t.render ?? themeNs.render;
    export const pdfRenderOptions = _t.pdfRenderOptions ?? themeNs.pdfRenderOptions;
  `;

  const entryFile = resolve(THEMES_DIR, `_entry_${shortName}.js`);
  writeFileSync(entryFile, entryContent);

  try {
    await build({
      entryPoints: [entryFile],
      bundle: true,
      minify: true,
      format: 'esm',
      target: 'es2022',
      platform: 'browser',
      // Use 'require' condition so packages like underscore/lodash resolve to their
      // CJS/UMD builds (which export a callable function) instead of their ESM builds
      // (which export a namespace object that breaks _(collection) call syntax).
      conditions: ['browser', 'require', 'default'],
      // Prefer the CJS 'main' field over the ESM 'module' field for packages
      // that don't use the exports map (older packages).
      mainFields: ['browser', 'main'],
      outfile: resolve(THEMES_DIR, `${shortName}.js`),
      define: {
        'process.env.NODE_ENV': '"production"',
        'global': 'globalThis',
        '__dirname': '"/"',
        '__filename': '"/index.js"',
        'process.browser': 'true',
        'process.platform': '"browser"',
        'process.version': '"v18.0.0"',
      },
      // Polyfill Node.js built-ins as no-ops for browser
      alias: {
        'path': resolve(__dirname, 'shims/path.js'),
        'fs': resolve(__dirname, 'shims/fs.js'),
        'url': resolve(__dirname, 'shims/url.js'),
        'node:url': resolve(__dirname, 'shims/url.js'),
        'node:crypto': resolve(__dirname, 'shims/crypto.js'),
        'assert': resolve(__dirname, 'shims/assert.js'),
      },
      logLevel: 'silent',
    });

    // Clean up entry file
    execSync(`rm -f "${entryFile}"`);
    return true;
  } catch (e) {
    execSync(`rm -f "${entryFile}"`);
    return false;
  }
}

async function main() {
  const args = process.argv.slice(2);
  const doAll = args.includes('--all');
  const themesArg = args.find(a => a.startsWith('--themes='));
  const specificThemes = themesArg ? themesArg.split('=')[1].split(',') : null;

  mkdirSync(THEMES_DIR, { recursive: true });

  // Create shims directory
  const shimsDir = resolve(__dirname, 'shims');
  mkdirSync(shimsDir, { recursive: true });
  writeFileSync(resolve(shimsDir, 'path.js'), `
    export const join = (...parts) => parts.join('/');
    export const resolve = (...parts) => parts.join('/');
    export const dirname = (p) => p.split('/').slice(0, -1).join('/');
    export const basename = (p) => p.split('/').pop();
    export const extname = (p) => { const m = p.match(/\\.[^.]+$/); return m ? m[0] : ''; };
    export default { join, resolve, dirname, basename, extname };
  `);
  // fs shim is generated per-theme in bundleTheme() with embedded file contents
  writeFileSync(resolve(shimsDir, 'url.js'), `
    export const URL = globalThis.URL;
    export const URLSearchParams = globalThis.URLSearchParams;
    export const fileURLToPath = (u) => u.replace(/^file:\\/\\//, '');
    export const pathToFileURL = (p) => new globalThis.URL('file://' + p);
    export const format = (u) => (typeof u === 'string' ? u : u.href);
    export const parse = (u) => new globalThis.URL(u);
    export default { URL, URLSearchParams, fileURLToPath, pathToFileURL, format, parse };
  `);
  writeFileSync(resolve(shimsDir, 'crypto.js'), `
    export const createHash = () => ({ update: function() { return this; }, digest: () => '' });
    export const randomBytes = (n) => new Uint8Array(n);
    export const createHmac = () => ({ update: function() { return this; }, digest: () => '' });
    export default { createHash, randomBytes, createHmac };
  `);
  writeFileSync(resolve(shimsDir, 'assert.js'), `
    const assert = (v, msg) => { if (!v) throw new Error(msg || 'Assertion failed'); };
    assert.ok = assert;
    assert.strictEqual = (a, b) => { if (a !== b) throw new Error('Not equal'); };
    assert.deepStrictEqual = () => {};
    assert.fail = (msg) => { throw new Error(msg); };
    export default assert;
    export const ok = assert;
    export const strictEqual = assert.strictEqual;
  `);

  let themes;
  if (specificThemes) {
    themes = specificThemes.map(name => ({
      name,
      packageName: `jsonresume-theme-${name}`,
      description: '',
      version: '',
    }));
  } else if (doAll) {
    themes = await discoverThemes();
  } else {
    themes = POPULAR_THEMES.map(name => ({
      name,
      packageName: `jsonresume-theme-${name}`,
      description: '',
      version: '',
    }));
  }

  console.log(`📦 Bundling ${themes.length} themes...\n`);

  const manifest = [];

  for (const theme of themes) {
    process.stdout.write(`  ${theme.name}... `);

    // Install the theme
    try {
      execSync(`npm install --no-save ${theme.packageName} 2>/dev/null`, {
        cwd: resolve(__dirname, '..'),
        timeout: 30000,
      });
    } catch {
      console.log('❌ install failed');
      continue;
    }

    // Try to get description from installed package
    try {
      const pkgPath = resolve(__dirname, `../node_modules/${theme.packageName}/package.json`);
      if (existsSync(pkgPath)) {
        const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
        theme.description = theme.description || pkg.description || '';
        theme.version = theme.version || pkg.version || '';
      }
    } catch {}

    // Bundle it
    const success = await bundleTheme(theme.name, theme.packageName, shimsDir);

    if (success) {
      const outFile = resolve(THEMES_DIR, `${theme.name}.js`);
      const stat = existsSync(outFile) ? readFileSync(outFile).length : 0;
      manifest.push({
        name: theme.name,
        displayName: theme.name.charAt(0).toUpperCase() + theme.name.slice(1).replace(/-/g, ' '),
        description: theme.description,
        version: theme.version || '',
        browserCompatible: true,
        fileSize: stat,
      });
      console.log(`✅ (${(stat / 1024).toFixed(0)}KB)`);
    } else {
      manifest.push({
        name: theme.name,
        displayName: theme.name.charAt(0).toUpperCase() + theme.name.slice(1).replace(/-/g, ' '),
        description: theme.description,
        version: theme.version || '',
        browserCompatible: false,
        fileSize: 0,
      });
      console.log('⚠️  browser incompatible');
    }
  }

  // Write manifest
  writeFileSync(resolve(THEMES_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));

  const successful = manifest.filter(t => t.browserCompatible).length;
  console.log(`\n✅ Done! ${successful}/${manifest.length} themes bundled for the browser`);
  console.log(`📁 Output: docs/themes/`);

  // Clean up shims
  execSync(`rm -rf "${shimsDir}"`);
}

main().catch(console.error);
