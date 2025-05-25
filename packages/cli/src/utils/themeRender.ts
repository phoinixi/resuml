import type { Resume } from '@ryaml/core';

interface ThemeConfig {
  sections?: {
    order?: string[];
    exclude?: string[];
  };
  layout?: {
    style?: string;
  };
  styling?: Record<string, string | number>;
  labels?: Record<string, string>;
}

/**
 * Render a resume using the specified theme
 * @param themeName Name of the theme to use
 * @param resumeData Resume data to render
 * @param themeConfig Theme configuration
 * @param inlineCss Optional CSS to include in the HTML
 * @param language Language code for localization
 * @returns Object containing the rendered HTML
 */
export async function renderTheme(
  themeName: string,
  resumeData: Resume,
  themeConfig: ThemeConfig = {},
  inlineCss?: string,
  language: string = 'en'
): Promise<{ htmlOutput: string }> {
  try {
    if (themeName.startsWith('jsonresume-')) {
      return await renderJsonResumeTheme(themeName, resumeData, inlineCss);
    } else {
      return await renderRyamlTheme(themeName, resumeData, themeConfig, inlineCss, language);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error rendering theme: ${error.message}`);
    }
    throw new Error('Unknown error rendering theme');
  }
}

/**
 * Renders a JSON Resume theme
 */
async function renderJsonResumeTheme(
  themeName: string,
  resumeData: Resume,
  inlineCss?: string
): Promise<{ htmlOutput: string }> {
  // Handle both formats: with and without 'jsonresume-' prefix
  let themePackageName;
  if (themeName.startsWith('jsonresume-theme-')) {
    // User provided full name (jsonresume-theme-stackoverflow)
    themePackageName = themeName;
  } else if (themeName.startsWith('jsonresume-')) {
    // User provided short name (jsonresume-stackoverflow)
    themePackageName = `jsonresume-theme-${themeName.replace('jsonresume-', '')}`;
  } else {
    // User provided just the name (stackoverflow)
    themePackageName = `jsonresume-theme-${themeName}`;
  }

  // Convert ryaml data to jsonresume format if needed
  const jsonResumeData = resumeData; // In real implementation, convert if necessary

  // Dynamically import the theme
  const themePackage = await import(themePackageName);
  const renderedHTML = themePackage.default.render(jsonResumeData);

  return {
    htmlOutput: injectCss(renderedHTML, inlineCss),
  };
}

/**
 * Renders a ryaml theme
 */
async function renderRyamlTheme(
  themeName: string,
  resumeData: Resume,
  themeConfig: ThemeConfig,
  inlineCss?: string,
  language: string = 'en'
): Promise<{ htmlOutput: string }> {
  if (themeName === 'default') {
    throw new Error('No default theme available. Please specify a specific theme name.');
  }

  const themePackageName = `@ryaml/theme-${themeName}`;

  // Dynamically import the theme (better than require)
  const themePackage = await import(themePackageName);
  const renderedHTML = themePackage.default.render(resumeData, themeConfig, language);

  return {
    htmlOutput: injectCss(renderedHTML, inlineCss),
  };
}

/**
 * Injects CSS into HTML content
 * @param html HTML content
 * @param css CSS to inject
 * @returns HTML with injected CSS
 */
export function injectCss(html: string, css?: string): string {
  if (!css) return html;
  return html.replace('</head>', `<style>${css}</style></head>`);
}
