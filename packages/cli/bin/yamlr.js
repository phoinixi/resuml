#!/usr/bin/env node
/* eslint-env node */

import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Try to import from dist first (production), fallback to source (development/testing)
const distPath = join(__dirname, '../dist/index.cjs');
const srcPath = join(__dirname, '../src/index.ts');

async function startCli() {
  try {
    // First try to use built version if available
    if (existsSync(distPath)) {
      await import(distPath);
    } else {
      // Fallback to source for development/testing
      console.log('Running from source (development mode)');

      // Check if we can use tsx to run TypeScript directly
      try {
        const { execSync } = await import('child_process');
        // Try to run with tsx (TypeScript runner)
        execSync(`npx tsx "${srcPath}" ${process.argv.slice(2).join(' ')}`, {
          stdio: 'inherit',
          cwd: join(__dirname, '..'),
        });
      } catch (tsxError) {
        // If tsx fails, try ts-node
        try {
          const { execSync } = await import('child_process');
          execSync(`npx ts-node --esm "${srcPath}" ${process.argv.slice(2).join(' ')}`, {
            stdio: 'inherit',
            cwd: join(__dirname, '..'),
          });
        } catch (tsNodeError) {
          throw new Error(
            `Could not run CLI from source. Please build the project first with 'npm run build' or install tsx/ts-node.`
          );
        }
      }
    }
  } catch (err) {
    console.error('Error starting yamlr CLI:', err);
    process.exit(1);
  }
}

startCli();
