// Placeholder for core logic

import { parse } from 'yaml';
import merge from 'lodash.merge';
import { validate } from '@jsonresume/schema';
import type { Resume } from './types/resume';

export type { Resume };

/**
 * Merges and validates resume data objects against the JSON Resume schema.
 * @param yamlContents - An array of YAML strings containing resume data.
 * @returns The merged and validated resume data.
 * @throws Error if validation fails.
 */
export async function processResumeData(yamlContents: string[]): Promise<Resume> {
  if (yamlContents.length === 0) {
    throw new Error('No YAML content provided for processing.');
  }

  // Parse YAML content and filter out invalid objects
  const dataObjects = yamlContents
    .map((content) => {
      try {
        return parse(content);
      } catch (error) {
        console.warn('Failed to parse YAML content:', error);
        return null;
      }
    })
    .filter((data): data is Partial<Resume> => typeof data === 'object' && data !== null);

  if (dataObjects.length === 0) {
    throw new Error('No valid YAML content found after parsing.');
  }

  // Custom array merge to ensure arrays are concatenated
  const customizer = (objValue: unknown, srcValue: unknown) => {
    if (Array.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
    return undefined; // Let lodash handle it
  };

  // Merge data: Concatenate arrays, deep merge objects
  const mergedData = dataObjects.reduce((acc, data) => merge(acc, data, customizer), {}) as Resume;

  // Validate using the official JSON Resume validator
  return new Promise((resolve, reject) => {
    validate(mergedData, (errors, isValid) => {
      if (!isValid) {
        reject(
          new Error(`Resume data failed schema validation: ${JSON.stringify(errors, null, 2)}`)
        );
      } else {
        resolve(mergedData);
      }
    });
  });
}
