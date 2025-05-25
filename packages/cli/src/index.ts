#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { validateAction } from './commands/validate';
import { toJsonAction } from './commands/tojson';
import { renderAction } from './commands/render';
import { devAction } from './commands/dev';

// Get the directory name equivalent to __dirname in CommonJS
const currentDir = path.dirname(fileURLToPath(import.meta.url));

function getCliVersion(): string {
  const packageJsonPath = path.resolve(currentDir, '../package.json');
  if (fs.existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      return packageJson.version || '0.0.0';
    } catch {
      return '0.0.0';
    }
  }
  return '0.0.0';
}

export const program = new Command();

program
  .name('resuml')
  .description('CLI tool for managing resuml resume files.')
  .version(getCliVersion());

// Validate Command
program
  .command('validate')
  .description('Validates resume data against the schema.')
  .option('-r, --resume <path>', 'Input YAML file, directory, or glob pattern.')
  .option('--debug', 'Show detailed validation errors.')
  .action(validateAction);

// ToJSON Command
program
  .command('tojson')
  .description('Converts YAML resume data to JSON format.')
  .option('-r, --resume <path>', 'Input YAML file, directory, or glob pattern.')
  .option('-o, --output <file>', 'Output JSON file path.', 'resume.json')
  .option('--debug', 'Show detailed validation and processing information.')
  .action(toJsonAction);

// Render Command
program
  .command('render')
  .description('Renders the resume data using a specified theme.')
  .option('-r, --resume <path>', 'Input YAML file, directory, or glob pattern.')
  .option(
    '-t, --theme <name>',
    'Theme name (e.g., jsonresume-theme-elegant, jsonresume-theme-even, jsonresume-theme-classy).'
  )
  .option('--theme-config <path>', 'Path to a themeConfig.yaml file for theme customization.')
  .option('-o, --output <file>', 'Output HTML file path (defaults to resume.html).')
  .option('--language <code>', 'Language code for localization.', 'en')
  .option('--debug', 'Show detailed validation and processing information.')
  .action(renderAction);

// Dev Command
program
  .command('dev')
  .description('Start development server with hot-reload.')
  .option('-r, --resume <path>', 'Input YAML file, directory, or glob pattern.')
  .option(
    '-t, --theme <name>',
    'Theme name (e.g., jsonresume-theme-elegant, jsonresume-theme-even, jsonresume-theme-classy).'
  )
  .option('--theme-config <path>', 'Path to a themeConfig.yaml file for theme customization.')
  .option('--port <number>', 'Port for development server.', '3000')
  .option('--language <code>', 'Language code for localization.', 'en')
  .option('--debug', 'Show detailed validation and processing information.')
  .action(devAction);

// Parse Arguments - only execute when not in test environment
if (process.env.NODE_ENV !== 'test') {
  (async () => {
    try {
      await program.parseAsync(process.argv);
    } catch (e: unknown) {
      console.error('Command line error:', (e as Error)?.message);
      process.exit(1);
    }
  })();
}
