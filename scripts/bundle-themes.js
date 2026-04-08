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
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'fs';

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

async function bundleTheme(shortName, packageName) {
  const entryContent = `
    import theme from '${packageName}';
    export const render = theme.render || theme.default?.render;
    export const pdfRenderOptions = theme.pdfRenderOptions || theme.default?.pdfRenderOptions;
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
      outfile: resolve(THEMES_DIR, `${shortName}.js`),
      define: {
        'process.env.NODE_ENV': '"production"',
        'global': 'globalThis',
      },
      // Polyfill Node.js built-ins as no-ops for browser
      alias: {
        'path': resolve(__dirname, 'shims/path.js'),
        'fs': resolve(__dirname, 'shims/fs.js'),
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
  writeFileSync(resolve(shimsDir, 'fs.js'), `
    export const readFileSync = () => '';
    export const existsSync = () => false;
    export default { readFileSync, existsSync };
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
    const success = await bundleTheme(theme.name, theme.packageName);

    if (success) {
      const outFile = resolve(THEMES_DIR, `${theme.name}.js`);
      const stat = existsSync(outFile) ? readFileSync(outFile).length : 0;
      manifest.push({
        name: theme.name,
        displayName: theme.name.charAt(0).toUpperCase() + theme.name.slice(1).replace(/-/g, ' '),
        description: theme.description,
        browserCompatible: true,
        fileSize: stat,
      });
      console.log(`✅ (${(stat / 1024).toFixed(0)}KB)`);
    } else {
      manifest.push({
        name: theme.name,
        displayName: theme.name.charAt(0).toUpperCase() + theme.name.slice(1).replace(/-/g, ' '),
        description: theme.description,
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
