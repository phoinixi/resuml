import fs from 'fs';
import path from 'node:path';
import { processResumeData } from '../core';
import { loadResumeFiles } from '../utils/loadResume';
import { loadTheme } from '../utils/themeLoader';
import { handleCommandError } from '../utils/errorHandler';
import chalk from 'chalk';

interface RenderCommandOptions {
  resume?: string;
  theme?: string;
  output?: string;
  language: string;
  debug?: boolean;
}

export async function renderAction(options: RenderCommandOptions): Promise<void> {
  if (!options.theme) {
    throw new Error(
      '--theme option is required. Please specify a theme name (e.g., stackoverflow, react).'
    );
  }

  console.log(chalk.blue('Starting resuml render...'));

  try {
    const inputPath = options.resume;
    const { yamlContents } = await loadResumeFiles(inputPath);

    console.log(chalk.blue('Processing and validating resume data...'));
    const resumeData = await processResumeData(yamlContents);
    console.log(chalk.green('Resume data processing and validation successful!'));

    const theme = await loadTheme(options.theme);

    const htmlOutput = await theme.render(resumeData, {
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
