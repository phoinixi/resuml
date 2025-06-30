import fs from 'fs';
import path from 'node:path';
import puppeteer from 'puppeteer';
import { processResumeData } from '../core';
import { loadResumeFiles } from '../utils/loadResume';
import { loadTheme } from '../utils/themeLoader';
import { handleCommandError } from '../utils/errorHandler';
import chalk from 'chalk';

interface RenderCommandOptions {
  resume?: string;
  theme?: string;
  output?: string;
  format: 'html' | 'pdf';
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

    const defaultExtension = options.format || 'html';
    const defaultFilename = `resume.${defaultExtension}`;
    const outputPath = options.output || defaultFilename;

    if (options.format === 'pdf') {
      console.log(chalk.blue(`Generating PDF output at ${outputPath}...`));
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      const page = await browser.newPage();
      await page.setContent(htmlOutput, { waitUntil: 'networkidle0' });
      const pdfBuffer = await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: {
          top: '1cm',
          right: '1cm',
          bottom: '1cm',
          left: '1cm',
        },
      });
      await browser.close();
      fs.writeFileSync(outputPath, pdfBuffer);
      console.log(chalk.green(`Successfully wrote PDF output to ${outputPath}`));
    } else {
      console.log(chalk.blue(`Writing HTML output to ${outputPath}...`));
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, htmlOutput, 'utf8');
      console.log(chalk.green(`Successfully wrote HTML output to ${outputPath}`));
    }
  } catch (error: unknown) {
    handleCommandError(error, 'render', options.debug);
  }
}
