#!/usr/bin/env node
/* eslint-env node */

// Use CommonJS for compatibility with older Node.js versions
import('../dist/index.cjs').catch((err) => {
  console.error('Error starting yamlr CLI:', err);
  process.exit(1);
});
