#!/usr/bin/env node
/* eslint-env node */

const { existsSync } = require('fs');
const { join } = require('path');
const distPath = join(__dirname, '../dist/index.js');

function startCli() {
  try {
    if (existsSync(distPath)) {
      require(distPath);
    } else {
      throw new Error('CLI not built. Please run "npm run build" first.');
    }
  } catch (err) {
    console.error('Error starting resuml CLI:', err);
    process.exit(1);
  }
}

startCli();
