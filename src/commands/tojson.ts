import fs from 'fs';
import { processResumeData } from '../core';
import { loadResumeFiles } from '../utils/loadResume';
import { handleCommandError } from '../utils/errorHandler';

interface ToJsonOptions {
  resume?: string;
  output: string;
  debug?: boolean;
}

export async function toJsonAction(options: ToJsonOptions): Promise<void> {
  const chalk = (await import('chalk')).default;
  console.log(chalk.blue('Starting resuml tojson...'));

  try {
    const inputPath = options.resume;
    const { yamlContents } = await loadResumeFiles(inputPath);

    console.log(chalk.blue('Processing and validating data...'));
    const resumeData = await processResumeData(yamlContents);
    console.log(chalk.green('Processing and validation successful!'));

    // Generate JSON output
    const jsonOutput = JSON.stringify(resumeData, null, 2);
    fs.writeFileSync(options.output, jsonOutput, 'utf8');
    console.log(chalk.green(`Successfully wrote output to ${options.output}`));
  } catch (error: unknown) {
    handleCommandError(error, 'tojson', options.debug);
  }
}
