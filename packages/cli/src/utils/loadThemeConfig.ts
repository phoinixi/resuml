import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

export interface LoadedThemeConfig {
  sections?: {
    order?: string[];
    exclude?: string[];
  };
  layout?: {
    style?: string;
  };
  styling?: Record<string, string | number>;
  labels?: Record<string, string>;
}

/**
 * Load theme configuration from a JSON or YAML file
 * @param configPath Path to the theme configuration file
 * @returns Parsed theme configuration object
 * @throws Error if the file cannot be loaded or parsed
 */
export function loadThemeConfig(configPath?: string): LoadedThemeConfig {
  if (!configPath) {
    return {};
  }

  try {
    const extension = path.extname(configPath).toLowerCase();
    const content = fs.readFileSync(configPath, 'utf8');
    let config: LoadedThemeConfig;

    if (extension === '.json') {
      config = JSON.parse(content);
    } else if (extension === '.yaml' || extension === '.yml') {
      config = YAML.parse(content) || {};
    } else {
      throw new Error(`Unsupported config file extension: ${extension}`);
    }

    // Validate config structure
    if (config.sections && typeof config.sections !== 'object') {
      throw new Error('Invalid sections configuration');
    }
    if (config.layout && typeof config.layout !== 'object') {
      throw new Error('Invalid layout configuration');
    }
    if (config.styling && typeof config.styling !== 'object') {
      throw new Error('Invalid styling configuration');
    }
    if (config.labels && typeof config.labels !== 'object') {
      throw new Error('Invalid labels configuration');
    }

    return config;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error loading theme config: ${error.message}`);
    }
    throw new Error('Unknown error loading theme config');
  }
}
