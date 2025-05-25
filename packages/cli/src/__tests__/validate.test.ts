import { validateAction } from '../commands/validate';
import { loadResumeFiles } from '../utils/loadResume';
import { processResumeData } from '@yamlr/core';
import { handleCommandError } from '../utils/errorHandler';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mock dependencies
vi.mock('../utils/loadResume');
vi.mock('@yamlr/core');
vi.mock('../utils/errorHandler');
vi.mock('chalk', () => ({
  __esModule: true,
  default: {
    green: vi.fn((text) => text),
    blue: vi.fn((text) => text),
    red: vi.fn((text) => text),
    yellow: vi.fn((text) => text),
  },
}));

// Type the mocks
const mockLoadResumeFiles = loadResumeFiles as import('vitest').MockedFunction<
  typeof loadResumeFiles
>;
const mockProcessResumeData = processResumeData as import('vitest').MockedFunction<
  typeof processResumeData
>;
const mockHandleCommandError = handleCommandError as import('vitest').MockedFunction<
  typeof handleCommandError
>;

describe('validate command', () => {
  const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => undefined);
  const _mockConsoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
  const _mockProcessExit = vi
    .spyOn(process, 'exit')
    .mockImplementation((() => undefined) as () => never);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should validate valid resume data', async () => {
    const mockResume = {
      basics: { name: 'John Doe' },
      work: [{ company: 'Acme' }],
      education: [{ institution: 'University' }],
    };

    mockLoadResumeFiles.mockResolvedValue({
      files: ['resume.yaml'],
      yamlContents: ['name: John Doe'],
    });
    mockProcessResumeData.mockResolvedValue(mockResume);

    await validateAction({ input: 'resume.yaml' });

    expect(mockLoadResumeFiles).toHaveBeenCalledWith('resume.yaml');
    expect(mockProcessResumeData).toHaveBeenCalledWith(['name: John Doe']);
    expect(mockConsoleLog).toHaveBeenCalledWith(
      expect.stringContaining('✓ Resume data is valid against the schema!')
    );
  });

  it('should handle validation errors', async () => {
    const mockError = new Error('Validation failed');
    mockLoadResumeFiles.mockResolvedValue({
      files: ['resume.yaml'],
      yamlContents: ['invalid: yaml'],
    });
    mockProcessResumeData.mockRejectedValue(mockError);

    await validateAction({ input: 'resume.yaml' });

    expect(mockHandleCommandError).toHaveBeenCalledWith(mockError, 'validate', undefined);
  });

  it('should show detailed errors in debug mode', async () => {
    const mockError = new Error('Validation failed');
    mockLoadResumeFiles.mockResolvedValue({
      files: ['resume.yaml'],
      yamlContents: ['invalid: yaml'],
    });
    mockProcessResumeData.mockRejectedValue(mockError);

    await validateAction({ input: 'resume.yaml', debug: true });

    expect(mockHandleCommandError).toHaveBeenCalledWith(mockError, 'validate', true);
  });
});
