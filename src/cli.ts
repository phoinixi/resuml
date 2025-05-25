import { program } from './index';

/**
 * Main CLI execution function.
 * Parses arguments and runs the corresponding command.
 * Intended for use in tests or as a programmatic entry point if needed.
 */
export async function main(argv?: string[]): Promise<void> {
  // If argv is not provided, process.argv will be used by commander by default.
  // Commander handles its own error output for parsing errors.
  // We mock process.exit in tests to prevent test runner termination.
  try {
    await program.parseAsync(argv || process.argv);
  } catch (error) {
    // This catch is for unexpected errors during parseAsync,
    // though Commander usually handles errors and calls process.exit.
    // In a test environment with process.exit mocked, this might catch issues.
    if (process.env.NODE_ENV !== 'test') {
      console.error('CLI execution failed:', error);
      process.exit(1);
    } else {
      // In test mode, rethrow to allow tests to catch it if necessary
      throw error;
    }
  }
}
