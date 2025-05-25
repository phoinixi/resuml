interface ValidationErrorDetail {
  instancePath?: string;
  message?: string;
  params?: Record<string, unknown>;
  // Add other properties from Ajv error objects if needed
}

interface SchemaValidationError extends Error {
  errors?: ValidationErrorDetail[];
}

/**
 * Handle command errors, displaying useful information to the user
 */
export function handleCommandError(error: unknown, command: string, debug: boolean = false): void {
  const errorMessage = error instanceof Error ? error.message : String(error);
  console.error(`❌ Error during ${command} command: ${errorMessage}`);

  // Handle validation errors from core
  const potentialValidationError = error as SchemaValidationError;
  if (
    potentialValidationError instanceof Error &&
    potentialValidationError.name === 'SchemaValidationError' &&
    Array.isArray(potentialValidationError.errors)
  ) {
    const errors: ValidationErrorDetail[] = potentialValidationError.errors;

    if (debug) {
      // Show detailed errors with all information in debug mode
      console.error('\nValidation failed with the following errors:');
      errors.forEach((err: ValidationErrorDetail, index: number) => {
        const path = err.instancePath || 'root';
        console.error(`${index + 1}. Path: ${path}`);
        console.error(`   Error: ${err.message || 'Unknown validation error'}`);
        if (err.params) {
          console.error(`   Params: ${JSON.stringify(err.params)}`);
        }
      });
    } else {
      // Show a more concise error message in normal mode
      console.error('\nSome validation errors were found:');
      // Show a limited number of errors to avoid overwhelming output
      const maxErrors = 5;
      errors.slice(0, maxErrors).forEach((err: ValidationErrorDetail, index: number) => {
        const path = err.instancePath || 'root';
        console.error(`${index + 1}. Field: ${path}`);
        console.error(`   Error: ${err.message || 'Unknown validation error'}`);
      });

      if (errors.length > maxErrors) {
        console.error(`\n...and ${errors.length - maxErrors} more errors.`);
        console.error('Use the --debug flag for complete error details.');
      }
    }
  }

  // Only exit if not in a test environment where exit might disrupt the test runner
  if (process.env.NODE_ENV !== 'test') {
    process.exit(1);
  }
}
