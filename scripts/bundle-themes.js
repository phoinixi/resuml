/**
 * Theme Bundling Script
 *
 * Bundles jsonresume-theme packages for the browser with:
 *   - Per-theme fs shim with embedded assets (CSS, templates, etc.)
 *   - CSS extraction (separate .css files)
 *   - Build-time snapshots (pre-rendered HTML for instant preview)
 *   - Node.js built-in shims (buffer, stream, util, events, os, etc.)
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

// File extensions to embed in the fs shim
const TEXT_EXTS = new Set([
  'css', 'hbs', 'html', 'json', 'txt', 'handlebars', 'mustache', 'template',
  'pug', 'jade', 'ejs', 'svg', 'less', 'scss',
]);

// Sample resume for generating snapshots
const SAMPLE_RESUME = {
  basics: {
    name: 'Jane Smith',
    label: 'Senior Software Engineer',
    image: '',
    email: 'jane@example.com',
    phone: '+1-555-987-6543',
    url: 'https://janesmith.dev',
    summary: 'Full-stack engineer with 8+ years of experience building scalable web applications. Passionate about clean architecture, performance optimization, and mentoring teams.',
    location: { address: '', postalCode: '', city: 'San Francisco', countryCode: 'US', region: 'California' },
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
  volunteer: [],
  awards: [],
  certificates: [],
  publications: [],
  languages: [],
  interests: [],
  references: [],
};

/**
 * Pad resume with safe defaults so themes don't crash on missing fields.
 * Ported from api/_lib/themeInstaller.ts.
 */
function padResume(r) {
  const basics = r.basics ?? {};
  const location = basics.location ?? {};
  const meta = r.meta ?? {};
  const palette = meta.palette ?? {};
  const safe = {
    ...r,
    basics: {
      name: '', label: '', image: '', email: '', phone: '', url: '', summary: '',
      ...basics,
      location: { address: '', postalCode: '', city: '', countryCode: '', region: '', ...location },
    },
    // Guard against themes like material that read meta.palette.primary without
    // defensive checks.
    meta: { ...meta, palette: { primary: '', secondary: '', ...palette } },
  };
  const arraySections = ['work','volunteer','education','awards','certificates','publications','skills','languages','interests','references','projects'];
  for (const key of arraySections) {
    safe[key] = Array.isArray(safe[key]) ? safe[key] : [];
  }
  const safeBasics = safe.basics;
  safeBasics.profiles = Array.isArray(safeBasics.profiles) ? safeBasics.profiles : [];
  return safe;
}

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
        if (TEXT_EXTS.has(ext)) {
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
    `var __files = ${JSON.stringify(files)};`,
    `var __dirs = ${JSON.stringify(dirs)};`,
    '',
    'function normalizePath(p) {',
    '  return String(p).replace(/[\\\\]+/g, "/").replace(/^\\/+/, "");',
    '}',
    '',
    'function matchFile(p) {',
    '  var clean = normalizePath(p);',
    '  if (__files[clean] !== undefined) return __files[clean];',
    '  var keys = Object.keys(__files);',
    '  for (var i = 0; i < keys.length; i++) {',
    '    if (clean.endsWith("/" + keys[i]) || clean === keys[i]) return __files[keys[i]];',
    '  }',
    '  return undefined;',
    '}',
    '',
    'function matchDir(p) {',
    '  var clean = normalizePath(p);',
    '  // Root ("/"/".") after stripping leading slash is "" — look up "." which',
    '  // the collector uses for the top-level directory listing.',
    '  if (clean === "" || clean === ".") {',
    '    if (__dirs["."] !== undefined) return __dirs["."];',
    '  }',
    '  if (__dirs[clean] !== undefined) return __dirs[clean];',
    '  var keys = Object.keys(__dirs);',
    '  for (var i = 0; i < keys.length; i++) {',
    '    if (clean.endsWith("/" + keys[i]) || clean === keys[i]) return __dirs[keys[i]];',
    '  }',
    '  return undefined;',
    '}',
    '',
    'export var readFileSync = function(p, encoding) {',
    '  var r = matchFile(p);',
    '  if (r !== undefined) return r;',
    '  return typeof encoding === "string" ? "" : "";',
    '};',
    '',
    'export var readdirSync = function(p, opts) {',
    '  var r = matchDir(p);',
    '  if (r === undefined) r = [];',
    '  if (opts && opts.withFileTypes) {',
    '    return r.map(function(name) {',
    '      var childPath = normalizePath(p) + "/" + name;',
    '      var isDir = matchDir(childPath) !== undefined;',
    '      return { name: name, isFile: function() { return !isDir; }, isDirectory: function() { return isDir; } };',
    '    });',
    '  }',
    '  return r;',
    '};',
    '',
    'export var existsSync = function(p) { return matchFile(p) !== undefined || matchDir(p) !== undefined; };',
    'export var writeFileSync = function() {};',
    'export var mkdirSync = function() {};',
    'export var statSync = function() { return { isFile: function() { return true; }, isDirectory: function() { return false; }, size: 0, mtime: new Date() }; };',
    'export var lstatSync = statSync;',
    'export var unlinkSync = function() {};',
    'export var rmdirSync = function() {};',
    'export var createReadStream = function() { return { pipe: function(d) { return d; }, on: function() { return this; } }; };',
    'export var createWriteStream = function() { return { write: function() {}, end: function() {}, on: function() { return this; } }; };',
    'export default { readFileSync: readFileSync, readdirSync: readdirSync, existsSync: existsSync, writeFileSync: writeFileSync, mkdirSync: mkdirSync, statSync: statSync, lstatSync: lstatSync, unlinkSync: unlinkSync, rmdirSync: rmdirSync, createReadStream: createReadStream, createWriteStream: createWriteStream };',
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

    const paddedResume = padResume(SAMPLE_RESUME);
    const result = render(paddedResume);
    // render() may return a string or a Promise
    if (typeof result === 'string') {
      writeFileSync(resolve(THEMES_DIR, `${shortName}.snapshot.html`), result);
      extractCss(result, shortName);
      return result;
    }
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

/**
 * esbuild plugin that fixes legacy CJS patterns that break under ESM's
 * implicit strict mode. Specifically: top-level implicit-global assignments
 * like `COURSES_COLUMNS = 3;` (onepage, several older themes) which throw
 * `ReferenceError` in strict mode. Rewrite them to `var` declarations.
 *
 * Scope: applied to any .js file inside jsonresume-theme-* packages. Keep the
 * regex conservative — only match top-level (start-of-line) SCREAMING_SNAKE
 * identifier assignments. This misses camelCase globals but avoids rewriting
 * legitimate property assignments inside functions.
 */
/**
 * Known-bad CJS patterns in specific dependencies. Applied via esbuild onLoad.
 * Keep patches minimal and scoped — a regex that's too broad breaks working
 * themes that happen to match.
 */
const LEGACY_PATCHES = [
  // swag 0.7.x branches on `typeof window` and, in a browser, assigns to
  // `window.Swag` instead of `module.exports`. After ESM bundling, the theme
  // then gets `undefined` from `require('swag')`. Force the module-exports
  // branch by hiding `window` only for this file.
  {
    filter: /node_modules\/swag\/lib\/swag\.js$/,
    transform: (src) => src.replace(
      /typeof\s+window\s*!==\s*["']undefined["']\s*&&\s*window\s*!==\s*null/g,
      'false',
    ),
  },
  // onepage uses implicit globals inside its render function: `splitCourses`,
  // `columnIndex`. Declare them up-front so strict mode doesn't reject them.
  {
    filter: /node_modules\/jsonresume-theme-onepage\/[^/]*\.js$/,
    transform: (src) => {
      // Only insert declarations once at top of render() body
      return src.replace(
        /(function\s+render\s*\([^)]*\)\s*\{)/,
        '$1\n  var splitCourses, columnIndex;\n',
      );
    },
  },
  // jsonresume-theme-react tries to assign `window` and `document` which are
  // read-only in the browser (we're already in a browser — no need to
  // polyfill). Guard the assignments so they don't throw. It also uses a
  // pattern not covered by the generic rewrite:
  //     const modulePath = path.join(__dirname, 'dist/index.cjs');
  //     require(modulePath);
  // Inline the variable so esbuild can statically bundle dist/index.cjs.
  {
    filter: /node_modules\/jsonresume-theme-react\/index\.cjs$/,
    transform: (src) => src
      .replace(
        /global\.window\s*=\s*global\.window\s*\|\|\s*\{[^}]*\};?/g,
        'try { if (typeof window === "undefined") globalThis.window = {}; } catch (_) {}',
      )
      .replace(
        /global\.document\s*=\s*global\.document\s*\|\|\s*\{[\s\S]*?\};/g,
        'try { if (typeof document === "undefined") globalThis.document = { createElement: () => ({}), addEventListener: () => {} }; } catch (_) {}',
      )
      .replace(
        /const\s+modulePath\s*=\s*path\.join\(\s*__dirname\s*,\s*['"]([^'"]+)['"]\s*\);([\s\S]*?)require\(modulePath\)/,
        (_, rel, middle) => `const modulePath = './${rel}';${middle}require('./${rel}')`,
      ),
  },
];

/**
 * esbuild plugin that fixes legacy CJS patterns that break under ESM's
 * implicit strict mode. Two layers:
 *   1. Targeted LEGACY_PATCHES for known bad packages (swag, specific themes).
 *   2. Generic: rewrite top-level `SCREAMING_SNAKE = ...` assignments to
 *      `var SCREAMING_SNAKE = ...` so implicit globals work under strict.
 */
function legacyThemeGlobalsPlugin() {
  return {
    name: 'legacy-theme-globals',
    setup(build) {
      build.onLoad({ filter: /\.c?js$/ }, async (args) => {
        const { readFile } = await import('node:fs/promises');
        const isThemePkg = /node_modules\/jsonresume-theme-[^/]+\/[^/]*\.js$/.test(args.path);
        const matchingPatches = LEGACY_PATCHES.filter((p) => p.filter.test(args.path));
        if (!isThemePkg && matchingPatches.length === 0) return null;

        const original = await readFile(args.path, 'utf8');
        let contents = original;

        // 1. Generic rewrite for theme packages: a line-leading `ident = expr`
        // (where `ident` is not a JS keyword) becomes `var ident = expr`. ESM
        // modules are strict-mode-only and throw `ReferenceError` on implicit
        // global assignments — themes that skip `var` (e.g. onepage's
        // `COURSES_COLUMNS = 3` at module scope, riga's `w = resume.work[i]`
        // inside a for-loop) die at runtime without this.
        //
        // Property-chain assignments (`foo.bar = x`) don't match — the dot
        // breaks the identifier before we reach `=`. The `(?!=)` guard skips
        // `==` comparisons.
        if (isThemePkg) {
          const RESERVED = new Set([
            'var', 'let', 'const', 'function', 'return', 'if', 'else', 'for',
            'while', 'do', 'switch', 'case', 'default', 'break', 'continue',
            'throw', 'try', 'catch', 'finally', 'new', 'delete', 'typeof',
            'void', 'in', 'of', 'instanceof', 'class', 'extends', 'super',
            'this', 'import', 'export', 'from', 'as', 'async', 'await',
            'yield', 'true', 'false', 'null', 'undefined', 'debugger',
          ]);
          contents = contents.replace(
            /^([ \t]*)([a-zA-Z_$][\w$]*)\s*=(?!=)/gm,
            (match, indent, name, offset, full) => {
              if (RESERVED.has(name)) return match;
              // Skip expression-context assignments (not a new statement):
              //   - `var a, b,\n    c = ...`  (multi-var continuation)
              //   - `foo(\n  bar = 1\n)`      (argument expression)
              //   - `[\n  x = 1\n]`           (array element assignment)
              //   - `a ?\n  b = 1 :\n  c = 2` (ternary branch)
              //   - `a ||\n  b = 1`           (short-circuit)
              // A new statement context, on the other hand, lives after
              // `{` `}` `;` — in those cases the rewrite is correct.
              const before = full.slice(0, offset).replace(/\s+$/, '');
              const prevChar = before.charAt(before.length - 1);
              if (prevChar === ',' || prevChar === '(' || prevChar === '[' ||
                  prevChar === '?' || prevChar === ':') return match;
              const prev2 = before.slice(-2);
              if (prev2 === '||' || prev2 === '&&' || prev2 === '=>') return match;
              // Inside `for (` init clause — rare but valid (var isn't allowed
              // there unless at the very start, and esbuild will handle the
              // already-correct `for (var i = 0; ...)` form).
              const lineStart = full.lastIndexOf('\n', offset - 1) + 1;
              const lineBefore = full.slice(lineStart, offset);
              if (/\bfor\s*\(\s*$/.test(lineBefore)) return match;
              return `${indent}var ${name} =`;
            }
          );
        }

        // 2. Targeted source patches (layered on top of the generic rewrite)
        for (const patch of matchingPatches) contents = patch.transform(contents);

        // 3. Resolve dynamic requires statically so esbuild can bundle them.
        // Two common patterns in themes:
        //   a) const HELPERS = join(__dirname, 'theme/hbs-helpers');
        //      require(join(HELPERS, 'file.js'))
        //   b) require(path.join(__dirname, 'dist/index.cjs'))
        // esbuild leaves computed requires as runtime calls, which our
        // browser shim rejects. Rewrite to static relative paths.
        if (isThemePkg) {
          // Pattern (b): inline `require((path.)?join(__dirname, 'literal'))`
          contents = contents.replace(
            /require\(\s*(?:\w+\.)?join\(\s*__dirname\s*,\s*['"]([^'"]+)['"]\s*\)\s*\)/g,
            (_, rel) => `require(${JSON.stringify('./' + rel)})`,
          );
          // Pattern (a): resolve via tracked join-constants.
          const joinConsts = {};
          for (const m of contents.matchAll(
            /\b(?:const|var|let)\s+(\w+)\s*=\s*(?:\w+\.)?join\(\s*__dirname\s*,\s*['"]([^'"]+)['"]\s*\)/g
          )) {
            joinConsts[m[1]] = m[2];
          }
          if (Object.keys(joinConsts).length > 0) {
            contents = contents.replace(
              /require\(\s*(?:\w+\.)?join\(\s*(\w+)\s*,\s*['"]([^'"]+)['"]\s*\)\s*\)/g,
              (match, name, file) => {
                const prefix = joinConsts[name];
                if (prefix === undefined) return match;
                const rel = `./${prefix}/${file}`.replace(/\/+/g, '/');
                return `require(${JSON.stringify(rel)})`;
              }
            );
          }
        }

        return contents !== original ? { contents, loader: 'js' } : null;
      });
    },
  };
}

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
      // Runtime prelude prepended to every bundled theme:
      // - `require.extensions` is a Node CJS API that handlebars-wax uses
      //   unconditionally (to intercept .handlebars/.hbs during require).
      //   In browser ESM, `require` is undefined, so we stub it.
      // - We deliberately do NOT alias `window = globalThis`. Legacy CJS
      //   packages like `swag` branch on `typeof window` — if window is
      //   defined they assign `window.Swag = Swag = {}` and skip setting
      //   `module.exports`, leaving the theme with `Swag.registerHelpers`
      //   undefined. We want the module-exports branch in workers.
      banner: {
        js: [
          // `require.extensions` is read by handlebars-wax at module load; no
          // ESM equivalent, so we provide a stub.
          'var require = globalThis.require || (function(){ var r = function(){ throw new Error("require not available in browser"); }; r.extensions = {}; r.cache = {}; return r; })();',
          'if (!require.extensions) require.extensions = {};',
          // Runtime process shim: `process.env.X` literal access is handled
          // by esbuild's `define`, but dynamic access like `process.cwd()` or
          // `process.stdout.write` needs an actual object at runtime.
          'if (typeof globalThis.process === "undefined") globalThis.process = { env: { NODE_ENV: "production" }, browser: true, platform: "browser", version: "v20.0.0", versions: { node: "20.0.0", v8: "11.3.0" }, stdout: { write: function(){} }, stderr: { write: function(){} }, cwd: function(){ return "/"; }, chdir: function(){}, nextTick: function(fn){ Promise.resolve().then(fn); }, argv: [], pid: 1, title: "browser" };',
        ].join(''),
      },
      define: {
        'process.env.NODE_ENV': '"production"',
        'process.env.LANG': '""',
        'global': 'globalThis',
        '__dirname': '"/"',
        '__filename': '"/index.js"',
        'process.browser': 'true',
        'process.platform': '"browser"',
        'process.version': '"v20.0.0"',
        'process.versions': '{}',
        'process.stdout': 'false',
        'process.stderr': 'false',
      },
      alias: {
        'path': resolve(shimsDir, 'path.js'),
        'fs': resolve(shimsDir, 'fs.js'),
        'url': resolve(shimsDir, 'url.js'),
        'assert': resolve(shimsDir, 'assert.js'),
        'buffer': resolve(shimsDir, 'buffer.js'),
        'stream': resolve(shimsDir, 'stream.js'),
        'util': resolve(shimsDir, 'util.js'),
        'events': resolve(shimsDir, 'events.js'),
        'os': resolve(shimsDir, 'os.js'),
        // node: prefixed variants
        'node:fs': resolve(shimsDir, 'fs.js'),
        'node:path': resolve(shimsDir, 'path.js'),
        'node:url': resolve(shimsDir, 'url.js'),
        'node:crypto': resolve(shimsDir, 'crypto.js'),
        'node:buffer': resolve(shimsDir, 'buffer.js'),
        'node:stream': resolve(shimsDir, 'stream.js'),
        'node:util': resolve(shimsDir, 'util.js'),
        'node:events': resolve(shimsDir, 'events.js'),
        'node:os': resolve(shimsDir, 'os.js'),
        'node:assert': resolve(shimsDir, 'assert.js'),
        // Glob shims for themes that use glob-based partial loading
        'glob': resolve(shimsDir, 'glob.js'),
        'globby': resolve(shimsDir, 'globby.js'),
        'require-glob': resolve(shimsDir, 'require-glob.js'),
        'fast-glob': resolve(shimsDir, 'globby.js'),
      },
      plugins: [legacyThemeGlobalsPlugin()],
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

// ── Shim file writers ────────────────────────────────────────────────

function writeShims(shimsDir) {
  writeFileSync(resolve(shimsDir, 'path.js'), [
    'export var join = function() { return [].slice.call(arguments).join("/"); };',
    'export var resolve = function() { return [].slice.call(arguments).join("/"); };',
    'export var dirname = function(p) { return p.split("/").slice(0, -1).join("/"); };',
    'export var basename = function(p, ext) { var b = p.split("/").pop() || ""; return ext && b.endsWith(ext) ? b.slice(0, -ext.length) : b; };',
    'export var extname = function(p) { var m = p.match(/\\.[^.]+$/); return m ? m[0] : ""; };',
    'export var sep = "/";',
    'export var isAbsolute = function(p) { return p.charAt(0) === "/"; };',
    'export var normalize = function(p) { return p; };',
    'export var relative = function(from, to) { return to; };',
    'export var parse = function(p) { return { root: "", dir: dirname(p), base: basename(p), ext: extname(p), name: basename(p, extname(p)) }; };',
    'export default { join: join, resolve: resolve, dirname: dirname, basename: basename, extname: extname, sep: sep, isAbsolute: isAbsolute, normalize: normalize, relative: relative, parse: parse };',
  ].join('\n'));

  // fs shim is generated per-theme in bundleTheme()

  writeFileSync(resolve(shimsDir, 'url.js'), [
    'export var URL = globalThis.URL;',
    'export var URLSearchParams = globalThis.URLSearchParams;',
    'export var fileURLToPath = function(u) { return u.replace(/^file:\\/\\//, ""); };',
    'export var pathToFileURL = function(p) { return new globalThis.URL("file://" + p); };',
    'export var format = function(u) { return typeof u === "string" ? u : u.href; };',
    'export var parse = function(u) { return new globalThis.URL(u); };',
    'export default { URL: URL, URLSearchParams: URLSearchParams, fileURLToPath: fileURLToPath, pathToFileURL: pathToFileURL, format: format, parse: parse };',
  ].join('\n'));

  writeFileSync(resolve(shimsDir, 'crypto.js'), [
    'export var createHash = function() { return { update: function() { return this; }, digest: function() { return ""; } }; };',
    'export var randomBytes = function(n) { return new Uint8Array(n); };',
    'export var createHmac = function() { return { update: function() { return this; }, digest: function() { return ""; } }; };',
    'export default { createHash: createHash, randomBytes: randomBytes, createHmac: createHmac };',
  ].join('\n'));

  writeFileSync(resolve(shimsDir, 'assert.js'), [
    'var assert = function(v, msg) { if (!v) throw new Error(msg || "Assertion failed"); };',
    'assert.ok = assert;',
    'assert.strictEqual = function(a, b) { if (a !== b) throw new Error("Not equal"); };',
    'assert.deepStrictEqual = function() {};',
    'assert.fail = function(msg) { throw new Error(msg); };',
    'export default assert;',
    'export var ok = assert;',
    'export var strictEqual = assert.strictEqual;',
  ].join('\n'));

  writeFileSync(resolve(shimsDir, 'buffer.js'), [
    'var _enc = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;',
    'var _dec = typeof TextDecoder !== "undefined" ? new TextDecoder() : null;',
    '',
    'function BufferShim(arg) {',
    '  if (typeof arg === "number") return new Uint8Array(arg);',
    '  if (arg instanceof Uint8Array) return arg;',
    '  if (arg instanceof ArrayBuffer) return new Uint8Array(arg);',
    '  return new Uint8Array(0);',
    '}',
    '',
    'BufferShim.from = function(data, encoding) {',
    '  if (typeof data === "string") {',
    '    if (encoding === "base64") {',
    '      var bin = atob(data);',
    '      var bytes = new Uint8Array(bin.length);',
    '      for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);',
    '      return bytes;',
    '    }',
    '    return _enc ? _enc.encode(data) : new Uint8Array(0);',
    '  }',
    '  if (Array.isArray(data)) return new Uint8Array(data);',
    '  if (data instanceof ArrayBuffer) return new Uint8Array(data);',
    '  if (data instanceof Uint8Array) return new Uint8Array(data);',
    '  return new Uint8Array(0);',
    '};',
    'BufferShim.alloc = function(size) { return new Uint8Array(size); };',
    'BufferShim.allocUnsafe = function(size) { return new Uint8Array(size); };',
    'BufferShim.isBuffer = function(obj) { return obj instanceof Uint8Array; };',
    'BufferShim.isEncoding = function() { return true; };',
    'BufferShim.byteLength = function(str) { return _enc ? _enc.encode(str).length : str.length; };',
    'BufferShim.concat = function(list) {',
    '  var total = 0;',
    '  for (var i = 0; i < list.length; i++) total += list[i].length;',
    '  var result = new Uint8Array(total);',
    '  var offset = 0;',
    '  for (var j = 0; j < list.length; j++) { result.set(list[j], offset); offset += list[j].length; }',
    '  return result;',
    '};',
    '',
    'export var Buffer = BufferShim;',
    'export var SlowBuffer = BufferShim;',
    'export var INSPECT_MAX_BYTES = 50;',
    'export var kMaxLength = 2147483647;',
    'export default { Buffer: BufferShim, SlowBuffer: BufferShim, INSPECT_MAX_BYTES: 50, kMaxLength: 2147483647 };',
  ].join('\n'));

  writeFileSync(resolve(shimsDir, 'stream.js'), [
    'function EventBase() { this._e = {}; }',
    'EventBase.prototype.on = function(ev, fn) { (this._e[ev] = this._e[ev] || []).push(fn); return this; };',
    'EventBase.prototype.addListener = EventBase.prototype.on;',
    'EventBase.prototype.once = function(ev, fn) { var self = this; var w = function() { self.removeListener(ev, w); fn.apply(null, arguments); }; return this.on(ev, w); };',
    'EventBase.prototype.emit = function(ev) { var args = [].slice.call(arguments, 1); (this._e[ev] || []).forEach(function(fn) { fn.apply(null, args); }); return true; };',
    'EventBase.prototype.removeListener = function(ev, fn) { var l = this._e[ev]; if (l) this._e[ev] = l.filter(function(f) { return f !== fn; }); return this; };',
    'EventBase.prototype.off = EventBase.prototype.removeListener;',
    'EventBase.prototype.removeAllListeners = function(ev) { if (ev) delete this._e[ev]; else this._e = {}; return this; };',
    'EventBase.prototype.setMaxListeners = function() { return this; };',
    'EventBase.prototype.listeners = function(ev) { return this._e[ev] || []; };',
    '',
    'function Readable() { EventBase.call(this); } Readable.prototype = Object.create(EventBase.prototype);',
    'Readable.prototype.read = function() { return null; };',
    'Readable.prototype.pipe = function(d) { return d; };',
    'Readable.prototype.unpipe = function() { return this; };',
    'Readable.prototype.destroy = function() { return this; };',
    '',
    'function Writable() { EventBase.call(this); } Writable.prototype = Object.create(EventBase.prototype);',
    'Writable.prototype.write = function() { return true; };',
    'Writable.prototype.end = function() { return this; };',
    'Writable.prototype.destroy = function() { return this; };',
    '',
    'function Transform() { EventBase.call(this); } Transform.prototype = Object.create(EventBase.prototype);',
    'Transform.prototype.write = function() { return true; };',
    'Transform.prototype.end = function() { return this; };',
    'Transform.prototype.pipe = function(d) { return d; };',
    'Transform.prototype.destroy = function() { return this; };',
    '',
    'function PassThrough() { Transform.call(this); } PassThrough.prototype = Object.create(Transform.prototype);',
    'function Duplex() { EventBase.call(this); } Duplex.prototype = Object.create(EventBase.prototype);',
    'Duplex.prototype.write = function() { return true; };',
    'Duplex.prototype.end = function() { return this; };',
    'Duplex.prototype.read = function() { return null; };',
    'Duplex.prototype.pipe = function(d) { return d; };',
    'Duplex.prototype.destroy = function() { return this; };',
    '',
    'function Stream() { EventBase.call(this); } Stream.prototype = Object.create(EventBase.prototype);',
    'Stream.prototype.pipe = function(d) { return d; };',
    'Stream.Readable = Readable; Stream.Writable = Writable; Stream.Transform = Transform;',
    'Stream.PassThrough = PassThrough; Stream.Duplex = Duplex; Stream.Stream = Stream;',
    '',
    'export { Readable, Writable, Transform, PassThrough, Duplex, Stream };',
    'export default Stream;',
  ].join('\n'));

  writeFileSync(resolve(shimsDir, 'util.js'), [
    'export var inherits = function(ctor, superCtor) { ctor.super_ = superCtor; Object.setPrototypeOf(ctor.prototype, superCtor.prototype); };',
    'export var deprecate = function(fn) { return fn; };',
    'export var promisify = function(fn) { return function() { var args = [].slice.call(arguments); return new Promise(function(ok, fail) { args.push(function(err, res) { err ? fail(err) : ok(res); }); fn.apply(null, args); }); }; };',
    'export var inspect = function(obj) { try { return JSON.stringify(obj); } catch(e) { return String(obj); } };',
    'export var format = function(f) { if (typeof f !== "string") return [].map.call(arguments, function(a) { return inspect(a); }).join(" "); var i = 1; var args = arguments; return f.replace(/%[sdj%]/g, function(m) { if (m === "%%") return "%"; if (i >= args.length) return m; var v = args[i++]; if (m === "%s") return String(v); if (m === "%d") return Number(v); if (m === "%j") try { return JSON.stringify(v); } catch(e) { return "[Circular]"; } return m; }); };',
    'export var debuglog = function() { return function() {}; };',
    'export var isArray = Array.isArray;',
    'export var isBoolean = function(v) { return typeof v === "boolean"; };',
    'export var isNull = function(v) { return v === null; };',
    'export var isNumber = function(v) { return typeof v === "number"; };',
    'export var isString = function(v) { return typeof v === "string"; };',
    'export var isUndefined = function(v) { return v === undefined; };',
    'export var isObject = function(v) { return typeof v === "object" && v !== null; };',
    'export var isFunction = function(v) { return typeof v === "function"; };',
    'export var isRegExp = function(v) { return v instanceof RegExp; };',
    'export var isDate = function(v) { return v instanceof Date; };',
    'export var isError = function(v) { return v instanceof Error; };',
    'export var isPrimitive = function(v) { return v === null || typeof v !== "object" && typeof v !== "function"; };',
    'export var TextEncoder = globalThis.TextEncoder;',
    'export var TextDecoder = globalThis.TextDecoder;',
    'export var types = { isAnyArrayBuffer: function() { return false; }, isTypedArray: function(v) { return ArrayBuffer.isView(v); } };',
    'export default { inherits: inherits, deprecate: deprecate, promisify: promisify, inspect: inspect, format: format, debuglog: debuglog, isArray: isArray, isBoolean: isBoolean, isNull: isNull, isNumber: isNumber, isString: isString, isUndefined: isUndefined, isObject: isObject, isFunction: isFunction, isRegExp: isRegExp, isDate: isDate, isError: isError, isPrimitive: isPrimitive, TextEncoder: TextEncoder, TextDecoder: TextDecoder, types: types };',
  ].join('\n'));

  writeFileSync(resolve(shimsDir, 'events.js'), [
    'function EventEmitter() { this._events = {}; this._maxListeners = 10; }',
    'EventEmitter.prototype.on = function(ev, fn) { (this._events[ev] = this._events[ev] || []).push(fn); return this; };',
    'EventEmitter.prototype.addListener = EventEmitter.prototype.on;',
    'EventEmitter.prototype.once = function(ev, fn) { var self = this; var w = function() { self.removeListener(ev, w); fn.apply(null, arguments); }; return this.on(ev, w); };',
    'EventEmitter.prototype.emit = function(ev) { var args = [].slice.call(arguments, 1); (this._events[ev] || []).forEach(function(fn) { fn.apply(null, args); }); return true; };',
    'EventEmitter.prototype.removeListener = function(ev, fn) { var l = this._events[ev]; if (l) this._events[ev] = l.filter(function(f) { return f !== fn; }); return this; };',
    'EventEmitter.prototype.off = EventEmitter.prototype.removeListener;',
    'EventEmitter.prototype.removeAllListeners = function(ev) { if (ev) delete this._events[ev]; else this._events = {}; return this; };',
    'EventEmitter.prototype.setMaxListeners = function(n) { this._maxListeners = n; return this; };',
    'EventEmitter.prototype.getMaxListeners = function() { return this._maxListeners; };',
    'EventEmitter.prototype.listeners = function(ev) { return this._events[ev] || []; };',
    'EventEmitter.prototype.listenerCount = function(ev) { return (this._events[ev] || []).length; };',
    'EventEmitter.prototype.prependListener = EventEmitter.prototype.on;',
    'EventEmitter.prototype.prependOnceListener = EventEmitter.prototype.once;',
    'EventEmitter.prototype.eventNames = function() { return Object.keys(this._events); };',
    'EventEmitter.EventEmitter = EventEmitter;',
    'EventEmitter.defaultMaxListeners = 10;',
    'export { EventEmitter };',
    'export default EventEmitter;',
  ].join('\n'));

  writeFileSync(resolve(shimsDir, 'os.js'), [
    'export var platform = function() { return "browser"; };',
    'export var tmpdir = function() { return "/tmp"; };',
    'export var homedir = function() { return "/"; };',
    'export var hostname = function() { return "localhost"; };',
    'export var type = function() { return "Browser"; };',
    'export var arch = function() { return "wasm"; };',
    'export var release = function() { return "0.0.0"; };',
    'export var EOL = "\\n";',
    'export var endianness = function() { return "LE"; };',
    'export var cpus = function() { return []; };',
    'export var totalmem = function() { return 0; };',
    'export var freemem = function() { return 0; };',
    'export var networkInterfaces = function() { return {}; };',
    'export var userInfo = function() { return { username: "browser", uid: 0, gid: 0, shell: "", homedir: "/" }; };',
    'export default { platform: platform, tmpdir: tmpdir, homedir: homedir, hostname: hostname, type: type, arch: arch, release: release, EOL: EOL, endianness: endianness, cpus: cpus, totalmem: totalmem, freemem: freemem, networkInterfaces: networkInterfaces, userInfo: userInfo };',
  ].join('\n'));

  // glob/globby/require-glob shims — these use the fs shim's embedded file list
  writeFileSync(resolve(shimsDir, 'glob.js'), [
    'import { readdirSync, readFileSync, existsSync } from "fs";',
    '',
    '// Minimal glob pattern matching against embedded file list',
    'function collapseSlashes(p) { return String(p).replace(/\\/+/g, "/"); }',
    'function minimatch(filepath, pattern) {',
    '  filepath = collapseSlashes(filepath);',
    '  pattern = collapseSlashes(pattern);',
    '  // Step 1: expand `{a,b,c}` alternatives into placeholders BEFORE',
    '  // escaping — otherwise the escape step turns `{hbs,js}` into',
    '  // `\\{hbs,js\\}` and the alternation regex no longer sees braces.',
    '  var alts = [];',
    '  pattern = pattern.replace(/\\{([^}]+)\\}/g, function(_, list) {',
    '    alts.push("(" + list.split(",").join("|") + ")");',
    '    return "___ALT" + (alts.length - 1) + "___";',
    '  });',
    '  // Step 2: handle globstars. `**/` matches zero or more full path',
    '  // segments (so `a/**/b` matches `a/b`, `a/x/b`, `a/x/y/b`). Lone `**`',
    '  // (no trailing slash) matches any chars including `/`.',
    '  pattern = pattern.replace(/\\*\\*\\//g, "___GLOBSTAR_SEG___");',
    '  pattern = pattern.replace(/\\*\\*/g, "___GLOBSTAR___");',
    '  // Step 3: escape remaining regex metachars (but not *, ?, /)',
    '  var re = pattern',
    '    .replace(/[.+^$()|[\\]\\\\]/g, "\\\\$&")',
    '    .replace(/\\*/g, "[^/]*")',
    '    .replace(/\\?/g, "[^/]");',
    '  re = re.replace(/___GLOBSTAR_SEG___/g, "(?:.*/)?");',
    '  re = re.replace(/___GLOBSTAR___/g, ".*");',
    '  // Step 4: restore alternations',
    '  re = re.replace(/___ALT(\\d+)___/g, function(_, i) { return alts[Number(i)]; });',
    '  try { return new RegExp("^" + re + "$").test(filepath); }',
    '  catch (e) { return false; }',
    '}',
    '',
    'function joinPath(dir, name) {',
    '  if (!dir || dir === "/") return "/" + name;',
    '  if (dir.charAt(dir.length - 1) === "/") return dir + name;',
    '  return dir + "/" + name;',
    '}',
    'function getAllPaths(dir) {',
    '  var results = [];',
    '  try {',
    '    var entries = readdirSync(dir);',
    '    for (var i = 0; i < entries.length; i++) {',
    '      var full = joinPath(dir, entries[i]);',
    '      results.push(full);',
    '      var sub = getAllPaths(full);',
    '      for (var j = 0; j < sub.length; j++) results.push(sub[j]);',
    '    }',
    '  } catch(e) {}',
    '  return results;',
    '}',
    '',
    'export function sync(pattern, opts) {',
    '  var cwd = (opts && opts.cwd) || "/";',
    '  var allPaths = getAllPaths(cwd);',
    '  return allPaths.filter(function(p) { return minimatch(p, pattern); });',
    '}',
    '',
    'export function globSync(pattern, opts) { return sync(pattern, opts); }',
    '',
    'export default function glob(pattern, opts, cb) {',
    '  if (typeof opts === "function") { cb = opts; opts = {}; }',
    '  try { var r = sync(pattern, opts); if (cb) cb(null, r); return Promise.resolve(r); }',
    '  catch(e) { if (cb) cb(e); return Promise.reject(e); }',
    '};',
    'glob.sync = sync;',
    'glob.globSync = sync;',
  ].join('\n'));

  writeFileSync(resolve(shimsDir, 'globby.js'), [
    'import { sync as globSync } from "glob";',
    'export function globby(patterns, opts) {',
    '  var pats = Array.isArray(patterns) ? patterns : [patterns];',
    '  var results = [];',
    '  for (var i = 0; i < pats.length; i++) {',
    '    var matches = globSync(pats[i], opts);',
    '    for (var j = 0; j < matches.length; j++) {',
    '      if (results.indexOf(matches[j]) === -1) results.push(matches[j]);',
    '    }',
    '  }',
    '  return Promise.resolve(results);',
    '}',
    'export function globbySync(patterns, opts) {',
    '  var pats = Array.isArray(patterns) ? patterns : [patterns];',
    '  var results = [];',
    '  for (var i = 0; i < pats.length; i++) {',
    '    var matches = globSync(pats[i], opts);',
    '    for (var j = 0; j < matches.length; j++) {',
    '      if (results.indexOf(matches[j]) === -1) results.push(matches[j]);',
    '    }',
    '  }',
    '  return results;',
    '}',
    'export default globby;',
  ].join('\n'));

  // require-glob: export as a function with a `.sync` PROPERTY. Consumers do
  // `var requireGlob = require('require-glob'); requireGlob.sync(pattern)` —
  // the property must survive esbuild's CJS/ESM interop. Default-only export
  // would strip `.sync`, so we use a proxy-like object pattern: default is
  // the function, and the function has `.sync` set before export.
  writeFileSync(resolve(shimsDir, 'require-glob.js'), [
    'import { sync as globSync } from "glob";',
    'import { readFileSync } from "fs";',
    '',
    'function requireGlob(pattern, opts) {',
    '  var cwd = (opts && opts.cwd) || "/";',
    '  var matches = globSync(pattern, { cwd: cwd });',
    '  var result = {};',
    '  for (var i = 0; i < matches.length; i++) {',
    '    var name = matches[i].replace(/.*\\//, "").replace(/\\.[^.]+$/, "");',
    '    try {',
    '      var content = readFileSync(matches[i], "utf-8");',
    '      result[name] = content;',
    '    } catch(e) {}',
    '  }',
    '  return result;',
    '}',
    'requireGlob.sync = requireGlob;',
    '// Named export preserves `.sync` through esbuild\'s CJS interop —',
    '// consumers that `require(\'require-glob\')` receive the function itself.',
    'export { requireGlob as default };',
    'export { requireGlob };',
    'export var sync = requireGlob;',
  ].join('\n'));
}

// ── Main ─────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const doAll = args.includes('--all');
  const themesArg = args.find(a => a.startsWith('--themes='));
  const specificThemes = themesArg ? themesArg.split('=')[1].split(',') : null;

  mkdirSync(THEMES_DIR, { recursive: true });

  // Create shims directory and write all shims
  const shimsDir = resolve(__dirname, 'shims');
  mkdirSync(shimsDir, { recursive: true });
  writeShims(shimsDir);

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
      execSync(`npm install --no-save --prefer-offline ${theme.packageName} 2>/dev/null`, {
        cwd: resolve(__dirname, '..'),
        timeout: 60000,
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
