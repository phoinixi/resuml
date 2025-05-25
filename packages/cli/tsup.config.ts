import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  target: 'es2022',
  sourcemap: true,
  clean: true,
  dts: true,
  shims: true,
  platform: 'node',
  noExternal: ['@resuml/core'],
  esbuildOptions: (options) => {
    options.tsconfig = './tsconfig.json';
  },
});
