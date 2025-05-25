import { findInputFiles } from '../utils/fileUtils';
import fsPromises from 'fs/promises';
import { glob } from 'glob';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mock dependencies
vi.mock('fs/promises');
vi.mock('glob');

const mockedFs = fsPromises as import('vitest').Mocked<typeof fsPromises>;
const mockedGlob = glob as import('vitest').MockedFunction<typeof glob>;

describe('findInputFiles', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return empty array when no input path provided', async () => {
    const result = await findInputFiles();
    expect(result).toEqual([]);
  });

  it('should handle glob patterns', async () => {
    mockedGlob.mockResolvedValue(['file1.yaml', 'file2.yaml']);
    const result = await findInputFiles('*.yaml');
    expect(mockedGlob).toHaveBeenCalledWith('*.yaml');
    expect(result).toEqual(['file1.yaml', 'file2.yaml']);
  });

  it('should throw error when glob pattern returns no files', async () => {
    mockedGlob.mockResolvedValue([]);
    await expect(findInputFiles('*.yaml')).rejects.toThrow('No files found matching pattern');
  });

  it('should handle single file input', async () => {
    // @ts-expect-error: Bypassing complex type for fs.stat mock value
    mockedFs.stat.mockResolvedValue({
      isFile: () => true,
      isDirectory: () => false,
    });
    const result = await findInputFiles('resume.yaml');
    expect(mockedFs.stat).toHaveBeenCalledWith('resume.yaml');
    expect(result).toEqual(['resume.yaml']);
  });

  it('should handle directory input', async () => {
    // @ts-expect-error: Bypassing complex type for fs.stat mock value
    mockedFs.stat.mockResolvedValue({
      isFile: () => false,
      isDirectory: () => true,
    });
    mockedGlob.mockResolvedValue(['dir/file1.yaml', 'dir/file2.yml']);
    const result = await findInputFiles('dir');
    expect(mockedFs.stat).toHaveBeenCalledWith('dir');
    expect(mockedGlob).toHaveBeenCalled();
    expect(result).toEqual(['dir/file1.yaml', 'dir/file2.yml']);
  });

  it('should throw error when directory has no YAML files', async () => {
    // @ts-expect-error: Bypassing complex type for fs.stat mock value
    mockedFs.stat.mockResolvedValue({
      isFile: () => false,
      isDirectory: () => true,
    });
    mockedGlob.mockResolvedValue([]);
    await expect(findInputFiles('dir')).rejects.toThrow('No YAML files found in directory: dir');
  });

  it('should throw error when input path not found', async () => {
    // Assuming Vitest's auto-mocking provides fsPromises.stat as a mock function
    mockedFs.stat.mockRejectedValue(new Error('ENOENT: no such file or directory'));
    await expect(findInputFiles('nonexistent')).rejects.toThrow('Input path not found');
  });
});
