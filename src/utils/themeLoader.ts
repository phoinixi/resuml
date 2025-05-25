import { execSync } from 'child_process';

/**
 * Install a theme package using npm
 * @param packageName The npm package name to install
 */
async function installTheme(packageName: string): Promise<void> {
  try {
    execSync(`npm install ${packageName}`, {
      stdio: ['inherit', 'pipe', 'pipe'],
      encoding: 'utf8',
    });
  } catch (error) {
    throw new Error(`Failed to install ${packageName}: ${(error as Error).message}`);
  }
}

/**
 * Load a theme module by name
 * @param themeName The name of the theme to load
 * @returns The loaded theme module
 */
export async function loadTheme(themeName: string) {
  let jsonResumeThemeName: string;
  let nativeThemeName: string;

  try {
    // Try loading as a JSON Resume theme
    jsonResumeThemeName = themeName.startsWith('jsonresume-theme-')
      ? themeName
      : `jsonresume-theme-${themeName}`;

    try {
      return (await import(jsonResumeThemeName)).default;
    } catch (jsonResumeError) {
      // If not found as JSON Resume theme, try as native theme
      nativeThemeName = `@resuml/theme-${themeName}`;
      try {
        return (await import(nativeThemeName)).default;
      } catch (nativeError) {
        // Both attempts failed - auto-install the theme
        console.log(`📦 Theme ${jsonResumeThemeName} not found. Installing...`);
        try {
          await installTheme(jsonResumeThemeName);
          console.log(`✅ Successfully installed ${jsonResumeThemeName}`);
          // Try importing again after installation
          return (await import(jsonResumeThemeName)).default;
        } catch (installError) {
          throw new Error(
            `Failed to auto-install theme ${jsonResumeThemeName}: ${
              (installError as Error).message
            }`
          );
        }
      }
    }
  } catch (error) {
    // Re-throw if it's already our custom error
    if (error instanceof Error && error.message.includes('Failed to auto-install')) {
      throw error;
    }
    throw new Error(`Theme package ${themeName} not found`);
  }
}
