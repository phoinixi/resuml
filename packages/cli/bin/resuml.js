#!/usr/bin/env node
/* eslint-env node */

import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = join(__dirname, '../dist/index.cjs');

async function startCli() {
  try {
    if (existsSync(distPath)) {
      await import(distPath);
    } else {
      throw new Error('CLI not built. Please run "npm run build" first.');
    }
  } catch (err) {
    console.error('Error starting resuml CLI:', err);
    process.exit(1);
  }
}

startCli();
