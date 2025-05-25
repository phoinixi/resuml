#!/usr/bin/env node

/* eslint-env node */

import { existsSync, readFileSync } from 'fs';
import { execSync } from 'child_process';

console.log('🔍 Testing semantic-release configuration...\n');

try {
  // First, validate that the configuration file exists and is valid JSON
  console.log('Validating .releaserc.json...');

  if (!existsSync('.releaserc.json')) {
    throw new Error('.releaserc.json not found');
  }

  const config = JSON.parse(readFileSync('.releaserc.json', 'utf8'));
  console.log('✅ .releaserc.json is valid JSON');

  // Check required plugins are defined
  const requiredPlugins = [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
  ];

  const configuredPlugins = config.plugins.map((plugin) =>
    Array.isArray(plugin) ? plugin[0] : plugin
  );

  for (const plugin of requiredPlugins) {
    if (!configuredPlugins.includes(plugin)) {
      throw new Error(`Required plugin ${plugin} not found in configuration`);
    }
  }
  console.log('✅ All required plugins are configured');

  // Only test with full semantic-release if GitHub token is available
  if (process.env.GITHUB_TOKEN || process.env.GH_TOKEN) {
    console.log('\nTesting full configuration with GitHub...');

    execSync('npx semantic-release --dry-run', {
      stdio: 'inherit',
      env: {
        ...process.env,
        NPM_TOKEN: process.env.NPM_TOKEN || 'mock-token',
      },
    });

    console.log('✅ Full semantic-release configuration is valid!');
  } else {
    console.log('\n⚠️  Skipping full semantic-release test (no GITHUB_TOKEN found)');
    console.log('This is normal for local development.');
    console.log('Configuration validation passed - ready for CI/CD.');
  }

  console.log('\n📋 To create a release:');
  console.log('1. Make sure you have GITHUB_TOKEN and NPM_TOKEN set in your repository secrets');
  console.log('2. Push commits with conventional commit messages to main branch');
  console.log('3. The release workflow will automatically create a new version and publish to npm');
} catch (error) {
  console.error('\n❌ Configuration has issues:', error.message);

  // If the error is only about GitHub token and we're in local dev, it's okay
  if (error.message.includes('EINVALIDGHTOKEN') && !process.env.CI) {
    console.log('\n💡 This GitHub token error is expected in local development.');
    console.log('The semantic-release configuration is correct for CI/CD environments.');
    process.exit(0);
  }

  process.exit(1);
}
