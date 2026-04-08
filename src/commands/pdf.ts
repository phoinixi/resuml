import fs from 'fs';
import path from 'node:path';
import { processResumeData } from '../core';
import { loadResumeFiles } from '../utils/loadResume';
import { loadTheme } from '../utils/themeLoader';
import { handleCommandError } from '../utils/errorHandler';
import chalk from 'chalk';

interface PdfCommandOptions {
  resume?: string;
  theme?: string;
  output?: string;
  language: string;
  format: string;
  margin?: string;
  debug?: boolean;
}

interface PlaywrightBrowser {
  newPage(): Promise<PlaywrightPage>;
  close(): Promise<void>;
}

interface PlaywrightPage {
  setContent(html: string, options?: { waitUntil?: string }): Promise<void>;
  pdf(options?: Record<string, unknown>): Promise<Buffer>;
}

interface PlaywrightBrowserType {
  launch(options?: Record<string, unknown>): Promise<PlaywrightBrowser>;
}

async function loadPlaywright(): Promise<PlaywrightBrowserType> {
  try {
    const { chromium } = await import('playwright');
    return chromium;
  } catch {
    throw new Error(
      `Playwright is required for PDF export but is not installed.\n` +
        `Install it with: ${chalk.cyan('npm install playwright')}`
    );
  }
}

function parseMargin(margin?: string): Record<string, string> {
  const defaultMargin = { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' };
  if (!margin) return defaultMargin;

  const parts = margin.split(',').map((s) => s.trim());
  if (parts.length === 1 && parts[0]) {
    return { top: parts[0], right: parts[0], bottom: parts[0], left: parts[0] };
  }
  if (parts.length === 2 && parts[0] && parts[1]) {
    return { top: parts[0], right: parts[1], bottom: parts[0], left: parts[1] };
  }
  if (parts.length === 4 && parts[0] && parts[1] && parts[2] && parts[3]) {
    return { top: parts[0], right: parts[1], bottom: parts[2], left: parts[3] };
  }
  return defaultMargin;
}

export async function pdfAction(options: PdfCommandOptions): Promise<void> {
  if (!options.theme) {
    throw new Error(
      '--theme option is required. Please specify a theme name (e.g., stackoverflow, react).'
    );
  }

  console.log(chalk.blue('Starting resuml PDF export...'));

  try {
    // Load and process resume data
    const inputPath = options.resume;
    const { yamlContents } = await loadResumeFiles(inputPath);

    console.log(chalk.blue('Processing and validating resume data...'));
    const resumeData = await processResumeData(yamlContents);
    console.log(chalk.green('Resume data processing and validation successful!'));

    // Render HTML using theme
    const theme = await loadTheme(options.theme);
    const htmlOutput = await theme.render(resumeData, {
      locale: options.language,
    });

    // Load playwright
    console.log(chalk.blue('Loading Playwright...'));
    const chromium = await loadPlaywright();

    // Convert HTML to PDF
    const outputPath = options.output || 'resume.pdf';
    const format = options.format === 'Letter' ? 'Letter' : 'A4';
    const margin = parseMargin(options.margin);

    console.log(chalk.blue(`Generating PDF (${format} format)...`));

    const browser = await chromium.launch({ headless: true });
    try {
      const page = await browser.newPage();
      await page.setContent(htmlOutput, { waitUntil: 'networkidle' });

      const pdfBuffer = await page.pdf({
        format,
        margin,
        printBackground: true,
        preferCSSPageSize: true,
      });

      fs.mkdirSync(path.dirname(path.resolve(outputPath)), { recursive: true });
      fs.writeFileSync(outputPath, pdfBuffer);

      console.log(chalk.green(`✅ Successfully generated ${outputPath}`));
    } finally {
      await browser.close();
    }
  } catch (error: unknown) {
    handleCommandError(error, 'pdf', options.debug);
  }
}
