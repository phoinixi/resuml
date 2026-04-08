import { build } from 'esbuild';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

await build({
  entryPoints: [resolve(__dirname, '../src/builder/index.tsx')],
  bundle: true,
  minify: true,
  treeShaking: true,
  format: 'esm',
  target: 'es2022',
  outfile: resolve(__dirname, '../docs/app/main.js'),
  jsx: 'automatic',
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  loader: {
    '.ts': 'ts',
    '.tsx': 'tsx',
  },
});

console.log('✅ Builder built to docs/app/main.js');
