#!/usr/bin/env node

/* eslint-env node */

import { execSync } from 'child_process';

console.log('🔍 Testing semantic-release configuration in dry-run mode...\n');

try {
  // Run semantic-release in dry-run mode
  execSync('npx semantic-release --dry-run', {
    stdio: 'inherit',
    env: {
      ...process.env,
      GITHUB_TOKEN: 'mock-token',
      NPM_TOKEN: 'mock-token',
    },
  });

  console.log('\n✅ Semantic-release configuration is valid!');
  console.log('\nTo create a release:');
  console.log('1. Make sure you have GITHUB_TOKEN and NPM_TOKEN set in your repository secrets');
  console.log('2. Push commits with conventional commit messages to main branch');
  console.log('3. The release workflow will automatically create a new version and publish to npm');
} catch (error) {
  console.error('\n❌ Semantic-release configuration has issues:', error.message);
  process.exit(1);
}
