import { processResumeData } from '../core';
import { loadResumeFiles } from '../utils/loadResume';
import { handleCommandError } from '../utils/errorHandler';

interface ValidateCommandOptions {
  resume?: string;
  debug?: boolean;
}

export async function validateAction(options: ValidateCommandOptions): Promise<void> {
  const chalk = (await import('chalk')).default;
  console.log(chalk.blue('Starting resuml validate...'));

  try {
    const inputPath = options.resume;
    const { yamlContents } = await loadResumeFiles(inputPath);

    console.log(chalk.blue('Validating resume data...'));

    try {
      await processResumeData(yamlContents);
      console.log(chalk.green('✓ Resume data is valid against the schema!'));
    } catch (error: unknown) {
      // Let the error handler deal with it
      handleCommandError(error, 'validate', options.debug);
      return; // Exit after error handling
    }
  } catch (error: unknown) {
    handleCommandError(error, 'validate', options.debug);
  }
}
