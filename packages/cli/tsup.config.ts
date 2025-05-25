import { defineConfig } from 'tsup';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  target: 'es2022',
  sourcemap: true,
  clean: true,
  dts: true,
  shims: true,
  platform: 'node',
  noExternal: ['@resuml/core'],
  esbuildPlugins: [
    {
      name: 'resolve-core',
      setup(build) {
        build.onResolve({ filter: /^@resuml\/core$/ }, () => ({
          path: path.resolve(__dirname, '../core/src/index.ts'),
        }));
      },
    },
  ],
});
