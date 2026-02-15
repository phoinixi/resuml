import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { main } from '../cli';

// Set NODE_ENV to test
process.env.NODE_ENV = 'test';

// We need to mock readline for the interactive prompts
vi.mock('readline', () => ({
  default: {
    createInterface: vi.fn(() => ({
      question: vi.fn((_prompt: string, cb: (answer: string) => void) => {
        // Auto-answer with defaults (empty string triggers default)
        cb('');
      }),
      close: vi.fn(),
    })),
  },
  createInterface: vi.fn(() => ({
    question: vi.fn((_prompt: string, cb: (answer: string) => void) => {
      cb('');
    }),
    close: vi.fn(),
  })),
}));

// Mock chalk
vi.mock('chalk', () => ({
  __esModule: true,
  default: {
    blue: (text: string) => text,
    green: (text: string) => text,
    red: (text: string) => text,
    yellow: (text: string) => text,
    cyan: (text: string) => text,
  },
}));

describe('init command', () => {
  let tmpDir: string;
  const originalConsoleLog = console.log;
  const originalConsoleError = console.error;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'resuml-test-'));
    console.log = vi.fn();
    console.error = vi.fn();
  });

  afterEach(() => {
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
    // Cleanup
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('should create a resume.yaml file with default output', async () => {
    const outputPath = path.join(tmpDir, 'resume.yaml');
    await main(['node', 'resuml', 'init', '--output', outputPath]);

    expect(fs.existsSync(outputPath)).toBe(true);
    const content = fs.readFileSync(outputPath, 'utf8');
    expect(content).toContain('basics:');
    expect(content).toContain('name:');
    expect(content).toContain('work:');
    expect(content).toContain('education:');
    expect(content).toContain('skills:');
  });

  it('should create file at custom output path', async () => {
    const outputPath = path.join(tmpDir, 'subdir', 'my-resume.yaml');
    await main(['node', 'resuml', 'init', '--output', outputPath]);

    expect(fs.existsSync(outputPath)).toBe(true);
    const content = fs.readFileSync(outputPath, 'utf8');
    expect(content).toContain('basics:');
  });

  it('should abort when file exists and user declines overwrite', async () => {
    const outputPath = path.join(tmpDir, 'resume.yaml');
    fs.writeFileSync(outputPath, 'existing content', 'utf8');

    // readline mock returns '' which defaults to 'N' for overwrite prompt
    await main(['node', 'resuml', 'init', '--output', outputPath]);

    // File should still have original content (not overwritten)
    const content = fs.readFileSync(outputPath, 'utf8');
    expect(content).toBe('existing content');
  });

  it('should include default values (John Doe) when no input provided', async () => {
    const outputPath = path.join(tmpDir, 'resume.yaml');
    await main(['node', 'resuml', 'init', '--output', outputPath]);

    const content = fs.readFileSync(outputPath, 'utf8');
    expect(content).toContain('John Doe');
    expect(content).toContain('john@example.com');
    expect(content).toContain('Software Engineer');
  });
});
