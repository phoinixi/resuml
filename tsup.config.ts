import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts', 'src/api.ts', 'src/mcp/server.ts'],
    format: ['esm'],
    target: 'es2022',
    sourcemap: true,
    clean: true,
    dts: true,
    platform: 'node',
    outDir: 'dist',
    external: ['playwright', 'playwright-core', '@modelcontextprotocol/sdk'],
  },
]);
