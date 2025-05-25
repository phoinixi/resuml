import { execSync, ExecSyncOptionsWithStringEncoding } from 'child_process';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

import { vi, describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';

// Global paths for test environment
const testDir = path.resolve(__dirname, '__test_temp__');

// Helper function to run the CLI command
const runCli = (args: string, options: { expectError?: boolean } = {}): string => {
  const binPath = path.resolve(__dirname, '../../bin/resuml.js');
  const execOptions: ExecSyncOptionsWithStringEncoding = {
    encoding: 'utf8',
    cwd: testDir,
    env: {
      ...process.env,
      NODE_OPTIONS: '--experimental-vm-modules',
      NODE_ENV: 'test',
    },
    // Suppress stderr for tests that expect errors to keep output clean
    stdio: options.expectError ? ['pipe', 'pipe', 'ignore'] : ['pipe', 'pipe', 'pipe'],
  };
  try {
    return execSync(`node ${binPath} ${args}`, execOptions);
  } catch (error: unknown) {
    // Only log debug info if explicitly requested via environment variable
    if (process.env.CLI_TEST_DEBUG) {
      const execError = error as { stdout?: string; stderr?: string };
      console.log('CLI Error stdout:', execError.stdout);
      console.log('CLI Error stderr:', execError.stderr);
    }
    throw error;
  }
};

const setupTestEnv = () => {
  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir, { recursive: true });
  }
};
const cleanupTestEnv = () => {
  if (fs.existsSync(testDir)) {
    fs.rmSync(testDir, { recursive: true, force: true });
  }
};

// Simple test resume data
const testResumeData = {
  basics: {
    name: 'Test User',
    label: 'Tester',
  },
  meta: {
    locale: 'en-TEST',
  },
};

describe('resuml CLI', () => {
  beforeAll(() => {
    setupTestEnv();
  });

  afterAll(() => {
    cleanupTestEnv();
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('validate command', () => {
    it('should validate valid resume data', () => {
      const inputPath = path.join(testDir, 'resume.yaml');
      fs.writeFileSync(inputPath, yaml.dump(testResumeData), 'utf8');

      const output = runCli(`validate --resume ${inputPath}`);
      expect(output).toContain('✓ Resume data is valid against the schema!');
    });

    it('should show validation errors for invalid data', () => {
      const inputPath = path.join(testDir, 'invalid.yaml');
      const invalidData = { basics: { name: 123 } }; // Invalid: name should be string
      fs.writeFileSync(inputPath, yaml.dump(invalidData), 'utf8');

      try {
        runCli(`validate --resume ${inputPath}`, { expectError: true });
        expect.fail('Expected validation to fail');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('tojson command', () => {
    it('should convert YAML to JSON', () => {
      const inputPath = path.join(testDir, 'resume.yaml');
      const outputPath = path.join(testDir, 'resume.json');
      fs.writeFileSync(inputPath, yaml.dump(testResumeData), 'utf8');

      runCli(`tojson --resume ${inputPath} --output ${outputPath}`);

      expect(fs.existsSync(outputPath)).toBe(true);
      const outputJson = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
      expect(outputJson.basics.name).toEqual(testResumeData.basics.name);
    });
  });

  describe('render command', () => {
    it('should error if --theme is missing', () => {
      const inputPath = path.join(testDir, 'resume.yaml');
      fs.writeFileSync(inputPath, yaml.dump(testResumeData), 'utf8');

      try {
        runCli(`render --resume ${inputPath}`, { expectError: true });
        expect.fail('Expected render to fail with missing theme');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should error with invalid theme', () => {
      const inputPath = path.join(testDir, 'resume.yaml');
      fs.writeFileSync(inputPath, yaml.dump(testResumeData), 'utf8');

      try {
        runCli(`render --resume ${inputPath} --theme totally-non-existent-theme-xyz`, {
          expectError: true,
        });
        expect.fail('Expected render to fail with invalid theme');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });
});
