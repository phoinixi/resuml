import fs from 'fs';
import path from 'node:path';
import { processResumeData } from '@yamlr/core';
import { loadResumeFiles } from '../utils/loadResume';
import { loadThemeConfig } from '../utils/loadThemeConfig';
import { loadTheme } from '../utils/themeLoader';
import { handleCommandError } from '../utils/errorHandler';
import chalk from 'chalk';

interface RenderCommandOptions {
  input?: string;
  resume?: string;
  theme?: string;
  themeConfig?: string;
  output?: string;
  language: string;
  debug?: boolean;
}

export async function renderAction(options: RenderCommandOptions): Promise<void> {
  if (!options.theme) {
    throw new Error(
      '--theme option is required. Please specify a theme name (e.g., jsonresume-theme-stackoverflow, jsonresume-theme-react, jsonresume-theme-elegant).'
    );
  }

  console.log(chalk.blue('Starting yamlr render...'));

  try {
    const inputPath = options.resume || options.input;
    const { yamlContents } = await loadResumeFiles(inputPath);

    console.log(chalk.blue('Processing and validating resume data...'));
    const resumeData = await processResumeData(yamlContents);
    console.log(chalk.green('Resume data processing and validation successful!'));

    const userThemeConfig = loadThemeConfig(options.themeConfig);
    const theme = await loadTheme(options.theme);

    const htmlOutput = await theme.render(resumeData, {
      ...userThemeConfig,
      locale: options.language,
    });

    // Default output path if not specified
    const outputHtmlPath = options.output || 'resume.html';

    console.log(chalk.blue(`Writing HTML output to ${outputHtmlPath}...`));
    fs.mkdirSync(path.dirname(outputHtmlPath), { recursive: true });
    fs.writeFileSync(outputHtmlPath, htmlOutput, 'utf8');
    console.log(chalk.green(`Successfully wrote HTML output to ${outputHtmlPath}`));
  } catch (error: unknown) {
    handleCommandError(error, 'render', options.debug);
  }
}
