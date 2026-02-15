import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { main } from '../cli';

// Set NODE_ENV to test
process.env.NODE_ENV = 'test';

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

// Mock loadResumeFiles
vi.mock('../utils/loadResume', () => ({
  loadResumeFiles: vi
    .fn()
    .mockResolvedValue({ files: ['mock.yaml'], yamlContents: ['basics:\n  name: Test'] }),
}));

// Mock core processResumeData
vi.mock('../core', async (importOriginal) => {
  const actualCore = (await importOriginal()) as typeof import('../core');
  return {
    ...actualCore,
    processResumeData: vi.fn().mockResolvedValue({ basics: { name: 'Test User' } }),
  };
});

// Mock theme loading
vi.mock('../utils/themeLoader', () => ({
  loadTheme: vi.fn().mockResolvedValue({
    name: 'test-theme',
    render: vi.fn().mockReturnValue('<html>Test</html>'),
  }),
}));

// Mock fs
vi.mock('fs', async (importOriginal) => {
  const actual = (await importOriginal()) as typeof import('fs');
  return {
    ...actual,
    readFileSync: vi.fn((p) => {
      if (typeof p === 'string' && p.endsWith('package.json')) {
        return JSON.stringify({ version: '2.0.0-test' });
      }
      return '{}';
    }),
    writeFileSync: vi.fn(),
    existsSync: vi.fn((p) => {
      if (typeof p === 'string' && p.endsWith('package.json')) return true;
      return false;
    }),
    mkdirSync: vi.fn(),
  };
});

// Mock path
vi.mock('path', async (importOriginal) => {
  const actual = (await importOriginal()) as typeof import('path');
  return {
    ...actual,
    join: (...args: string[]) => args.join('/'),
    resolve: (...args: string[]) => args.join('/'),
    dirname: (p: string) => {
      const lastSlash = p.lastIndexOf('/');
      if (lastSlash <= 0) return lastSlash === 0 ? '/' : '.';
      return p.substring(0, lastSlash);
    },
    extname: (p: string) => {
      const lastDot = p.lastIndexOf('.');
      return lastDot > -1 && lastDot > p.lastIndexOf('/') ? p.substring(lastDot) : '';
    },
  };
});

// Mock process
const mockExit = vi.fn();
vi.mock('process', () => ({
  cwd: () => '/test',
  exit: mockExit,
  env: process.env,
  stdout: process.stdout,
  stderr: process.stderr,
}));

describe('pdf command', () => {
  const originalConsoleLog = console.log;
  const originalConsoleError = console.error;

  beforeEach(() => {
    vi.clearAllMocks();
    console.log = vi.fn();
    console.error = vi.fn();
  });

  afterEach(() => {
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
  });

  it('should require --theme option', async () => {
    // pdfAction throws before try-catch when --theme is missing,
    // and cli.ts rethrows in test mode
    await expect(
      main(['node', 'resuml', 'pdf', '--resume', 'dummy.yaml'])
    ).rejects.toThrow('--theme option is required');
  });

  it('should show graceful error when puppeteer is missing', async () => {
    // Puppeteer is not installed in dev deps, so import will fail
    await main([
      'node',
      'resuml',
      'pdf',
      '--resume',
      'dummy.yaml',
      '--theme',
      'test-theme',
    ]);

    // Should get an error about puppeteer not being installed
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Puppeteer is required')
    );
  });

  it('should accept format option', async () => {
    // Just verifying the command parses correctly - will still fail on puppeteer
    await main([
      'node',
      'resuml',
      'pdf',
      '--resume',
      'dummy.yaml',
      '--theme',
      'test-theme',
      '--format',
      'Letter',
    ]);

    // It'll error on puppeteer, but the options parsing succeeded
    expect(console.error).toHaveBeenCalled();
    expect(mockExit).not.toHaveBeenCalled();
  });

  it('should accept margin option', async () => {
    await main([
      'node',
      'resuml',
      'pdf',
      '--resume',
      'dummy.yaml',
      '--theme',
      'test-theme',
      '--margin',
      '15mm,20mm,15mm,20mm',
    ]);

    expect(console.error).toHaveBeenCalled();
    expect(mockExit).not.toHaveBeenCalled();
  });
});
