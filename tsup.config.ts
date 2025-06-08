import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts', 'src/api.ts'],
    format: ['cjs'],
    target: 'es2022',
    sourcemap: true,
    clean: true,
    dts: false,
    shims: true,
    platform: 'node',
    outDir: 'dist',
  },
]);
