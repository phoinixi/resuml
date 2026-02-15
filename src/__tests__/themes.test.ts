import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { themesAction } from '../commands/themes';

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

// Mock child_process
vi.mock('child_process', () => ({
  execSync: vi.fn(),
}));

describe('themes command', () => {
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

  it('should list available themes', async () => {
    await themesAction({});

    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Compatible JSON Resume Themes'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('stackoverflow'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('elegant'));
  });

  it('should install a theme by short name', async () => {
    const { execSync } = await import('child_process');
    await themesAction({ install: 'stackoverflow' });

    expect(execSync).toHaveBeenCalledWith(
      'npm install jsonresume-theme-stackoverflow',
      expect.any(Object)
    );
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Successfully installed'));
  });

  it('should install a theme by full package name', async () => {
    const { execSync } = await import('child_process');
    await themesAction({ install: 'jsonresume-theme-custom' });

    expect(execSync).toHaveBeenCalledWith(
      'npm install jsonresume-theme-custom',
      expect.any(Object)
    );
  });

  it('should handle install failure gracefully', async () => {
    const { execSync } = await import('child_process');
    (execSync as ReturnType<typeof vi.fn>).mockImplementation(() => {
      throw new Error('npm install failed');
    });

    await themesAction({ install: 'nonexistent-theme' });

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining('Failed to install'));
  });
});
