export * from './core';
export * from './utils/loadResume';
export * from './utils/themeLoader';

/**
 * Node.js API: Only load theme from node_modules, do not auto-install
 */
export async function loadTheme(themeName: string) {
  return (await import('./utils/themeLoader')).loadTheme(themeName, { autoInstall: false });
}
