#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { validateAction } from './commands/validate';
import { toJsonAction } from './commands/tojson';
import { renderAction } from './commands/render';
import { devAction } from './commands/dev';
import { initAction } from './commands/init';
import { pdfAction } from './commands/pdf';
import { themesAction } from './commands/themes';

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
  .option('-t, --theme <name>', 'Theme name (e.g., stackoverflow, react).')
  .option('-o, --output <file>', 'Output HTML file path (defaults to resume.html).')
  .option('--language <code>', 'Language code for localization.', 'en')
  .option('--debug', 'Show detailed validation and processing information.')
  .action(renderAction);

// Dev Command
program
  .command('dev')
  .description('Start development server with hot-reload.')
  .option('-r, --resume <path>', 'Input YAML file, directory, or glob pattern.')
  .option('-t, --theme <name>', 'Theme name (e.g., stackoverflow, react).')
  .option('--port <number>', 'Port for development server.', '3000')
  .option('--language <code>', 'Language code for localization.', 'en')
  .option('--debug', 'Show detailed validation and processing information.')
  .action(devAction);

// Init Command
program
  .command('init')
  .description('Scaffold a starter resume.yaml file with all sections.')
  .option('-o, --output <file>', 'Output YAML file path.', 'resume.yaml')
  .action(initAction);

// PDF Command
program
  .command('pdf')
  .description('Export resume as PDF using Puppeteer.')
  .option('-r, --resume <path>', 'Input YAML file, directory, or glob pattern.')
  .option('-t, --theme <name>', 'Theme name (e.g., stackoverflow, react).')
  .option('-o, --output <file>', 'Output PDF file path.', 'resume.pdf')
  .option('--language <code>', 'Language code for localization.', 'en')
  .option('--format <size>', 'Page format: A4 or Letter.', 'A4')
  .option('--margin <values>', 'Page margins (e.g., "10mm" or "10mm,15mm,10mm,15mm").')
  .option('--debug', 'Show detailed validation and processing information.')
  .action(pdfAction);

// Themes Command
program
  .command('themes')
  .description('List available JSON Resume themes and install them.')
  .option('--install <name>', 'Install a theme by name (e.g., stackoverflow, elegant).')
  .action(themesAction);

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

export { processResumeData } from './core';
export { loadResumeFiles } from './utils/loadResume';
export { loadTheme } from './utils/themeLoader';
export * as themeRender from './utils/themeRender';
