import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

/**
 * Find input files based on provided path
 * @param inputPath File, directory, or glob pattern
 * @returns Array of matched file paths
 */
export async function findInputFiles(inputPath?: string): Promise<string[]> {
  if (!inputPath) {
    return [];
  }

  if (inputPath.includes('*')) {
    try {
      const matchedFiles = await glob(inputPath);
      if (matchedFiles.length === 0) {
        throw new Error(`No files found matching pattern: ${inputPath}`);
      }
      return matchedFiles;
    } catch (err) {
      throw new Error(`Error matching files: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  try {
    const stat = await fs.stat(inputPath);
    if (stat.isFile()) {
      return [inputPath];
    } else if (stat.isDirectory()) {
      const pattern = path.join(inputPath, '*.{yaml,yml}');
      try {
        const yamlFiles = await glob(pattern);
        if (yamlFiles.length === 0) {
          throw new Error(`No YAML files found in directory: ${inputPath}`);
        }
        return yamlFiles;
      } catch (err) {
        throw new Error(`No YAML files found in directory: ${inputPath}`);
      }
    }
  } catch (e) {
    if (e instanceof Error && e.message.includes('ENOENT')) {
      throw new Error('Input path not found');
    }
    throw e;
  }

  return [];
}
