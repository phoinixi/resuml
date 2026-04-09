/**
 * Web Worker for off-thread theme rendering.
 *
 * Messages IN:
 *   { type: 'loadTheme', theme: string, url: string }   — import the bundled theme module
 *   { type: 'render',    resume: object, id: number }    — render resume with loaded theme
 *
 * Messages OUT:
 *   { type: 'themeLoaded', theme: string }
 *   { type: 'themeError',  theme: string, error: string }
 *   { type: 'html',        id: number, html: string }
 *   { type: 'renderError', id: number, error: string }
 */

interface ThemeModule {
  render: (resume: Record<string, unknown>) => string | Promise<string>;
}

let currentTheme: ThemeModule | null = null;
let currentThemeName = '';

self.onmessage = async (e: MessageEvent) => {
  const msg = e.data;

  if (msg.type === 'loadTheme') {
    const { theme, url } = msg;
    try {
      const mod = await import(/* @vite-ignore */ url) as ThemeModule;
      if (typeof mod.render !== 'function') {
        throw new Error('Theme module has no render function');
      }
      currentTheme = mod;
      currentThemeName = theme;
      self.postMessage({ type: 'themeLoaded', theme });
    } catch (err: unknown) {
      currentTheme = null;
      currentThemeName = '';
      self.postMessage({
        type: 'themeError',
        theme,
        error: err instanceof Error ? err.message : 'Failed to load theme',
      });
    }
    return;
  }

  if (msg.type === 'render') {
    const { resume, id } = msg;
    if (!currentTheme) {
      self.postMessage({ type: 'renderError', id, error: 'No theme loaded' });
      return;
    }
    try {
      const result = currentTheme.render(resume);
      const html = typeof result === 'string' ? result : await result;
      self.postMessage({ type: 'html', id, html });
    } catch (err: unknown) {
      self.postMessage({
        type: 'renderError',
        id,
        error: err instanceof Error ? err.message : 'Render failed',
      });
    }
    return;
  }
};
