import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { main } from '../cli';
import { loadTheme } from '../utils/themeLoader';
import { loadResumeFiles } from '../utils/loadResume';
import { processResumeData } from '@yamlr/core';

// Set NODE_ENV to test for consistent behavior of main() error handling
process.env.NODE_ENV = 'test';

// Mock chalk to return plain text
vi.mock('chalk', () => ({
  __esModule: true,
  default: {
    blue: (text: string) => text,
    green: (text: string) => text,
    red: (text: string) => text,
    yellow: (text: string) => text,
    // Add any other chalk colors/styles if used by the code under test
  },
}));

// Mock loadResumeFiles to prevent "No resume files found" error
vi.mock('../utils/loadResume', () => ({
  loadResumeFiles: vi
    .fn()
    .mockResolvedValue({ files: ['mock.yaml'], yamlContents: ['key: value'] }),
}));

// Mock the theme loading
vi.mock('../utils/themeLoader', () => ({
  loadTheme: vi.fn(),
}));

// Mock @yamlr/core processResumeData
vi.mock('@yamlr/core', async (importOriginal) => {
  const actualCore = (await importOriginal()) as typeof import('@yamlr/core');
  return {
    ...actualCore,
    processResumeData: vi.fn().mockResolvedValue({ basics: { name: 'Mocked Resume' } }),
  };
});

// Mock the file system
vi.mock('fs', async (importOriginal) => {
  const actual = (await importOriginal()) as typeof import('fs');
  return {
    ...actual,
    readFileSync: vi.fn((path, _encoding) => {
      if (typeof path === 'string' && path.endsWith('package.json')) {
        return JSON.stringify({ version: '1.2.3-test' });
      }
      return '{}';
    }),
    writeFileSync: vi.fn(),
    existsSync: vi.fn((path) => {
      if (typeof path === 'string' && path.endsWith('package.json')) {
        return true;
      }
      return false;
    }),
    mkdirSync: vi.fn(),
  };
});

// Mock the path module
vi.mock('path', async (importOriginal) => {
  const actual = (await importOriginal()) as typeof import('path');
  return {
    ...actual,
    join: (...args: string[]) => args.join('/'),
    resolve: (...args: string[]) => args.join('/'),
    dirname: (p: string) => {
      if (p === '/') return '/';
      const lastSlash = p.lastIndexOf('/');
      if (lastSlash === -1) return '.';
      if (lastSlash === 0) return '/';
      return p.substring(0, lastSlash);
    },
    extname: (p: string) => {
      const lastDot = p.lastIndexOf('.');
      return lastDot > -1 && lastDot > p.lastIndexOf('/') ? p.substring(lastDot) : '';
    },
  };
});

// Mock the process - exit can be a simple vi.fn() now
const mockExit = vi.fn();
vi.mock('process', () => ({
  cwd: () => '/test',
  exit: mockExit,
  env: process.env,
  stdout: process.stdout,
  stderr: process.stderr,
}));

describe('CLI', () => {
  // Suppress console output for all tests to keep output clean
  const originalConsoleError = console.error;
  const originalConsoleLog = console.log;

  beforeEach(() => {
    vi.clearAllMocks(); // This clears mockExit as well if it's a simple vi.fn()
    (loadTheme as import('vitest').MockedFunction<typeof loadTheme>).mockReset();
    (loadResumeFiles as import('vitest').MockedFunction<typeof loadResumeFiles>).mockResolvedValue({
      files: ['mock.yaml'],
      yamlContents: ['key: value'],
    });
    (
      processResumeData as import('vitest').MockedFunction<typeof processResumeData>
    ).mockResolvedValue({ basics: { name: 'Default Mocked Resume' } });

    // Suppress console output unless CLI_TEST_DEBUG is set
    if (!process.env.CLI_TEST_DEBUG) {
      console.error = vi.fn();
      console.log = vi.fn();
    }
  });

  afterEach(() => {
    // Restore console functions
    console.error = originalConsoleError;
    console.log = originalConsoleLog;
  });

  it('should handle theme loading error', async () => {
    (loadTheme as import('vitest').MockedFunction<typeof loadTheme>).mockImplementation(
      async () => {
        throw new Error('Theme not found');
      }
    );

    await main(['node', 'ryaml', 'render', '--resume', 'dummy.yaml', '--theme', 'test-theme']);

    // Verify error was logged (console.error is mocked in beforeEach)
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('❌ Error during render command: Theme not found')
    );
    // Assert that process.exit was NOT called by errorHandler (because NODE_ENV=test)
    expect(mockExit).not.toHaveBeenCalled();
  });

  it('should handle successful theme loading', async () => {
    const mockTheme = {
      name: 'test-theme',
      render: vi.fn().mockReturnValue('<html>Test</html>'),
    };
    (loadTheme as import('vitest').MockedFunction<typeof loadTheme>).mockResolvedValue(mockTheme);

    await main(['node', 'ryaml', 'render', '--resume', 'dummy.yaml', '--theme', 'test-theme']);

    // Verify success message was logged (console.log is mocked in beforeEach)
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Successfully wrote HTML output to resume.html')
    );
    // Assert that process.exit was NOT called
    expect(mockExit).not.toHaveBeenCalled();
  });
});
