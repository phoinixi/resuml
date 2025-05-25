import fs from 'fs/promises';
import YAML from 'yaml';
import { findInputFiles } from './fileUtils';

/**
 * Load and parse resume files
 */
export async function loadResumeFiles(
  inputPath?: string
): Promise<{ files: string[]; yamlContents: string[] }> {
  const files = await findInputFiles(inputPath);
  if (files.length === 0) {
    throw new Error('No resume files found');
  }

  const yamlContents: string[] = [];

  for (const file of files) {
    try {
      const content = await fs.readFile(file, 'utf-8');
      const parsed = YAML.parse(content);
      if (parsed && typeof parsed === 'object') {
        yamlContents.push(content);
      }
    } catch (error) {
      throw new Error(`Failed to parse ${file}: ${(error as Error).message}`);
    }
  }

  if (yamlContents.length === 0) {
    throw new Error('No valid data found in any of the input files');
  }

  return { files, yamlContents };
}
