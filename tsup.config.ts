import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: [
      'src/index.ts',
      'src/cli.ts',
      'src/mcp/server.ts',
      'src/ats/index.ts',
      'src/skills/index.ts',
      'src/types/index.ts',
      'src/jobs/index.ts',
    ],
    format: ['esm'],
    target: 'es2022',
    sourcemap: true,
    clean: true,
    dts: true,
    platform: 'node',
    outDir: 'dist',
    external: ['playwright', '@modelcontextprotocol/sdk'],
  },
]);
