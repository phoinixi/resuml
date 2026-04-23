/**
 * Quick bundler: takes a theme already in node_modules and bundles it
 * for the browser as an ESM module.
 *
 * Shims Node.js builtins (fs, path, url, crypto) so themes that
 * reference them at import time still bundle, the shims are no-ops
 * or minimal polyfills that cover what Handlebars-based themes need.
 */
const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const THEMES_DIR = path.resolve(__dirname, '../docs/themes');
const SHIMS_DIR = path.resolve(__dirname, '_shims');
fs.mkdirSync(THEMES_DIR, { recursive: true });
fs.mkdirSync(SHIMS_DIR, { recursive: true });

// Write browser shims for Node built-ins
fs.writeFileSync(path.join(SHIMS_DIR, 'fs.js'), `
  export function readFileSync() { return ''; }
  export function writeFileSync() {}
  export function existsSync() { return false; }
  export function mkdirSync() {}
  export default { readFileSync, writeFileSync, existsSync, mkdirSync };
`);
fs.writeFileSync(path.join(SHIMS_DIR, 'path.js'), `
  export function join(...p) { return p.join('/'); }
  export function resolve(...p) { return p.join('/'); }
  export function dirname(p) { return p.replace(/\\/[^/]*$/, ''); }
  export function basename(p) { return p.replace(/.*\\//, ''); }
  export function extname(p) { const m = p.match(/\\.[^.]+$/); return m ? m[0] : ''; }
  export const sep = '/';
  export default { join, resolve, dirname, basename, extname, sep };
`);
fs.writeFileSync(path.join(SHIMS_DIR, 'url.js'), `
  export function fileURLToPath(u) { return u.replace('file://', ''); }
  export function pathToFileURL(p) { return 'file://' + p; }
  export class URL { constructor(u) { this.href = u; } }
  export default { fileURLToPath, pathToFileURL, URL };
`);
fs.writeFileSync(path.join(SHIMS_DIR, 'crypto.js'), `
  export function randomUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
  export function createHash() {
    return { update() { return this; }, digest() { return 'stub'; } };
  }
  export default { randomUUID, createHash };
`);

// Themes to bundle (must already be in node_modules)
const themes = [
  'stackoverflow',
];

async function bundleTheme(name) {
  const pkg = `jsonresume-theme-${name}`;
  const entryCode = `
    var theme = require("${pkg}");
    export var render = theme.render;
    export var pdfRenderOptions = theme.pdfRenderOptions;
  `;
  
  const entryFile = path.join(THEMES_DIR, `_entry_${name}.js`);
  fs.writeFileSync(entryFile, entryCode);

  try {
    await esbuild.build({
      entryPoints: [entryFile],
      bundle: true,
      minify: true,
      format: 'esm',
      target: 'es2022',
      platform: 'browser',
      outfile: path.join(THEMES_DIR, `${name}.js`),
      define: {
        'process.env.NODE_ENV': '"production"',
        'global': 'globalThis',
      },
      alias: {
        'fs': path.join(SHIMS_DIR, 'fs.js'),
        'path': path.join(SHIMS_DIR, 'path.js'),
        'url': path.join(SHIMS_DIR, 'url.js'),
        'node:crypto': path.join(SHIMS_DIR, 'crypto.js'),
        'crypto': path.join(SHIMS_DIR, 'crypto.js'),
        'node:fs': path.join(SHIMS_DIR, 'fs.js'),
        'node:path': path.join(SHIMS_DIR, 'path.js'),
        'node:url': path.join(SHIMS_DIR, 'url.js'),
      },
      logLevel: 'warning',
    });
    
    fs.unlinkSync(entryFile);
    const size = fs.statSync(path.join(THEMES_DIR, `${name}.js`)).size;
    console.log(`OK ${name}: ${(size / 1024).toFixed(0)}KB`);
    return { name, ok: true, size };
  } catch (err) {
    fs.unlinkSync(entryFile);
    console.error(`FAIL ${name}: ${err.message}`);
    return { name, ok: false };
  }
}

async function main() {
  const results = [];
  for (const t of themes) {
    results.push(await bundleTheme(t));
  }

  // Write manifest
  const manifest = results.map(r => ({
    name: r.name,
    displayName: r.name.charAt(0).toUpperCase() + r.name.slice(1).replace(/-/g, ' '),
    description: '',
    browserCompatible: r.ok,
    fileSize: r.size || 0,
  }));
  fs.writeFileSync(path.join(THEMES_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));

  // Cleanup shims
  fs.rmSync(SHIMS_DIR, { recursive: true, force: true });

  console.log(`\nManifest written with ${results.filter(r => r.ok).length}/${results.length} themes`);
}

main();
