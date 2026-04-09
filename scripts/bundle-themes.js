/**
 * Theme Bundling Script
 *
 * Bundles jsonresume-theme packages for the browser with:
 *   - CSS extraction (separate .css files)
 *   - Build-time snapshots (pre-rendered HTML for instant preview)
 *   - Per-theme fs shim with embedded assets
 *
 * Output:
 *   docs/themes/{name}.js           — bundled render module
 *   docs/themes/{name}.css          — extracted CSS (if any)
 *   docs/themes/{name}.snapshot.html— pre-rendered HTML with sample data
 *   docs/themes/manifest.json       — theme metadata registry
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
import { createRequire } from 'module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
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

// Sample resume for generating snapshots
const SAMPLE_RESUME = {
  basics: {
    name: 'Jane Smith',
    label: 'Senior Software Engineer',
    email: 'jane@example.com',
    phone: '+1-555-987-6543',
    url: 'https://janesmith.dev',
    summary: 'Full-stack engineer with 8+ years of experience building scalable web applications. Passionate about clean architecture, performance optimization, and mentoring teams.',
    location: { city: 'San Francisco', countryCode: 'US', region: 'California' },
    profiles: [
      { network: 'LinkedIn', username: 'janesmith', url: 'https://linkedin.com/in/janesmith' },
      { network: 'GitHub', username: 'janesmith', url: 'https://github.com/janesmith' },
    ],
  },
  work: [
    {
      name: 'Tech Corp',
      position: 'Senior Software Engineer',
      url: 'https://techcorp.com',
      startDate: '2020-03-01',
      summary: 'Lead engineer for the platform team, owning core API infrastructure.',
      highlights: [
        'Reduced API latency by 45% through caching and query optimization',
        'Designed microservices architecture serving 2M daily requests',
        'Mentored 4 junior engineers through technical growth plans',
      ],
    },
    {
      name: 'StartupXYZ',
      position: 'Full Stack Developer',
      startDate: '2017-06-01',
      endDate: '2020-02-28',
      summary: 'Built customer-facing web applications from prototype to production.',
      highlights: [
        'Built real-time dashboard used by 15,000+ daily active users',
        'Implemented CI/CD pipeline reducing deploy time from 2 hours to 8 minutes',
      ],
    },
  ],
  education: [
    {
      institution: 'University of Technology',
      area: 'Computer Science',
      studyType: 'Bachelor of Science',
      startDate: '2013-09-01',
      endDate: '2017-05-15',
      score: '3.8',
    },
  ],
  skills: [
    { name: 'Languages', level: 'Expert', keywords: ['TypeScript', 'JavaScript', 'Python', 'Go'] },
    { name: 'Frontend', level: 'Expert', keywords: ['React', 'Next.js', 'HTML/CSS', 'Tailwind'] },
    { name: 'Backend & Cloud', level: 'Advanced', keywords: ['Node.js', 'PostgreSQL', 'AWS', 'Docker'] },
  ],
  projects: [
    {
      name: 'Open Source CLI Tool',
      description: 'Developer productivity tool with 2,000+ GitHub stars',
      url: 'https://github.com/janesmith/cli-tool',
      startDate: '2022-01-01',
      highlights: ['Published to npm with 5,000+ weekly downloads'],
    },
  ],
  // Provide empty arrays for sections themes might iterate over
  volunteer: [],
  awards: [],
  certificates: [],
  publications: [],
  languages: [],
  interests: [],
  references: [],
};

// ── Theme file collection ────────────────────────────────────────────

/** Recursively collect text files from a theme directory for the fs shim. */
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
        if (['css', 'hbs', 'html', 'json', 'txt', 'handlebars', 'mustache', 'template'].includes(ext)) {
          try { files[rel] = readFileSync(full, 'utf-8'); }
          catch { /* skip */ }
        }
      }
    }
    dirs[relPrefix || '.'] = childNames;
  }

  walk(themeDir);
  return { files, dirs };
}

/** Generate an fs shim that embeds the theme's files. */
function generateThemeFsShim(themeFiles) {
  const { files, dirs } = themeFiles;
  const lines = [
    `const __files = ${JSON.stringify(files)};`,
    `const __dirs = ${JSON.stringify(dirs)};`,
    '',
    'function normalizePath(p) {',
    '  return p.replace(/[\\\\]+/g, "/").replace(/^\\/+/, "");',
    '}',
    '',
    'function matchFile(p) {',
    '  var clean = normalizePath(p);',
    '  if (__files[clean] !== undefined) return __files[clean];',
    '  var keys = Object.keys(__files);',
    '  for (var i = 0; i < keys.length; i++) {',
    '    if (clean.endsWith("/" + keys[i]) || clean.endsWith(keys[i])) return __files[keys[i]];',
    '  }',
    '  return undefined;',
    '}',
    '',
    'function matchDir(p) {',
    '  var clean = normalizePath(p);',
    '  if (__dirs[clean] !== undefined) return __dirs[clean];',
    '  var keys = Object.keys(__dirs);',
    '  for (var i = 0; i < keys.length; i++) {',
    '    if (clean.endsWith("/" + keys[i]) || clean.endsWith(keys[i])) return __dirs[keys[i]];',
    '  }',
    '  return undefined;',
    '}',
    '',
    'export var readFileSync = function(p) { var r = matchFile(p); return r !== undefined ? r : ""; };',
    'export var readdirSync = function(p) { var r = matchDir(p); return r !== undefined ? r : []; };',
    'export var existsSync = function(p) { return matchFile(p) !== undefined || matchDir(p) !== undefined; };',
    'export var writeFileSync = function() {};',
    'export var mkdirSync = function() {};',
    'export default { readFileSync: readFileSync, readdirSync: readdirSync, existsSync: existsSync, writeFileSync: writeFileSync, mkdirSync: mkdirSync };',
  ];
  return lines.join('\n');
}

// ── CSS extraction ───────────────────────────────────────────────────

/** Extract <style> blocks from rendered HTML and write to a .css file. */
function extractCss(html, shortName) {
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let css = '';
  let match;
  while ((match = styleRegex.exec(html)) !== null) {
    css += match[1] + '\n';
  }
  if (css.trim()) {
    writeFileSync(resolve(THEMES_DIR, `${shortName}.css`), css.trim());
    return true;
  }
  return false;
}

// ── Snapshot generation ──────────────────────────────────────────────

/** Render a theme with sample data in Node.js and save as snapshot. */
function generateSnapshot(shortName, packageName) {
  try {
    // Clear require cache to get a fresh instance
    const pkgPath = require.resolve(packageName);
    delete require.cache[pkgPath];

    const theme = require(packageName);
    const render = theme.render || (theme.default && theme.default.render);
    if (typeof render !== 'function') return null;

    const result = render(SAMPLE_RESUME);
    // render() may return a string or a Promise
    if (typeof result === 'string') {
      writeFileSync(resolve(THEMES_DIR, `${shortName}.snapshot.html`), result);
      extractCss(result, shortName);
      return result;
    }
    // If it's a promise, we need to await it
    if (result && typeof result.then === 'function') {
      return result.then((html) => {
        if (typeof html === 'string') {
          writeFileSync(resolve(THEMES_DIR, `${shortName}.snapshot.html`), html);
          extractCss(html, shortName);
          return html;
        }
        return null;
      }).catch(() => null);
    }
    return null;
  } catch (e) {
    console.log(`    (snapshot failed: ${e.message})`);
    return null;
  }
}

// ── npm discovery ────────────────────────────────────────────────────

async function discoverThemes() {
  const themes = [];
  let from = 0;
  const size = 250;

  console.log('🔍 Discovering themes from npm...');

  for (let page = 0; page < 4; page++) {
    const url = `https://registry.npmjs.org/-/v1/search?text=jsonresume-theme&size=${size}&from=${from}`;
    const res = await fetch(url);
    if (!res.ok) break;
    const data = await res.json();

    for (const pkg of data.objects) {
      const name = pkg.package.name;
      if (!name.startsWith('jsonresume-theme-')) continue;
      const shortName = name.replace('jsonresume-theme-', '');
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

// ── esbuild bundling ─────────────────────────────────────────────────

async function bundleTheme(shortName, packageName, shimsDir) {
  const themeDir = resolve(__dirname, `../node_modules/${packageName}`);

  // Generate per-theme fs shim with embedded files
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
      conditions: ['browser', 'require', 'default'],
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
      alias: {
        'path': resolve(shimsDir, 'path.js'),
        'fs': resolve(shimsDir, 'fs.js'),
        'url': resolve(shimsDir, 'url.js'),
        'node:url': resolve(shimsDir, 'url.js'),
        'node:crypto': resolve(shimsDir, 'crypto.js'),
        'assert': resolve(shimsDir, 'assert.js'),
      },
      logLevel: 'silent',
    });

    execSync(`rm -f "${entryFile}"`);
    return true;
  } catch (e) {
    console.log(`    (bundle error: ${e.message})`);
    execSync(`rm -f "${entryFile}"`);
    return false;
  }
}

// ── Main ─────────────────────────────────────────────────────────────

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
    export const sep = '/';
    export default { join, resolve, dirname, basename, extname, sep };
  `);
  // fs shim is generated per-theme in bundleTheme()
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

    // Read package metadata
    try {
      const pkgPath = resolve(__dirname, `../node_modules/${theme.packageName}/package.json`);
      if (existsSync(pkgPath)) {
        const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
        theme.description = theme.description || pkg.description || '';
        theme.version = theme.version || pkg.version || '';
      }
    } catch {}

    // Step 1: Generate snapshot (pre-render in Node.js)
    let hasSnapshot = false;
    let hasCss = false;
    const snapshotResult = generateSnapshot(theme.name, theme.packageName);
    // Handle promise if async render
    if (snapshotResult && typeof snapshotResult.then === 'function') {
      const html = await snapshotResult;
      hasSnapshot = !!html;
      hasCss = existsSync(resolve(THEMES_DIR, `${theme.name}.css`));
    } else {
      hasSnapshot = !!snapshotResult;
      hasCss = existsSync(resolve(THEMES_DIR, `${theme.name}.css`));
    }

    // Step 2: Bundle for browser
    const success = await bundleTheme(theme.name, theme.packageName, shimsDir);

    if (success) {
      const outFile = resolve(THEMES_DIR, `${theme.name}.js`);
      const stat = existsSync(outFile) ? readFileSync(outFile).length : 0;
      const cssFile = resolve(THEMES_DIR, `${theme.name}.css`);
      const cssSize = hasCss && existsSync(cssFile) ? readFileSync(cssFile).length : 0;

      manifest.push({
        name: theme.name,
        displayName: theme.name.charAt(0).toUpperCase() + theme.name.slice(1).replace(/-/g, ' '),
        description: theme.description,
        version: theme.version || '',
        browserCompatible: true,
        hasSnapshot,
        hasCss,
        fileSize: stat,
        cssSize,
      });

      const parts = [`✅ (${(stat / 1024).toFixed(0)}KB`];
      if (hasCss) parts.push(`css:${(cssSize / 1024).toFixed(0)}KB`);
      if (hasSnapshot) parts.push('snapshot');
      console.log(parts.join(', ') + ')');
    } else {
      // Bundle failed — still useful if we have a snapshot (server fallback)
      manifest.push({
        name: theme.name,
        displayName: theme.name.charAt(0).toUpperCase() + theme.name.slice(1).replace(/-/g, ' '),
        description: theme.description,
        version: theme.version || '',
        browserCompatible: false,
        hasSnapshot,
        hasCss: false,
        fileSize: 0,
        cssSize: 0,
      });
      const note = hasSnapshot ? '⚠️  browser incompatible (has snapshot)' : '⚠️  browser incompatible';
      console.log(note);
    }
  }

  // Write manifest
  writeFileSync(resolve(THEMES_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));

  const successful = manifest.filter(t => t.browserCompatible).length;
  const snapshots = manifest.filter(t => t.hasSnapshot).length;
  console.log(`\n✅ Done! ${successful}/${manifest.length} themes bundled, ${snapshots} snapshots generated`);
  console.log(`📁 Output: docs/themes/`);

  // Clean up shims
  execSync(`rm -rf "${shimsDir}"`);
}

main().catch(console.error);
