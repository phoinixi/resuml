/**
 * Wrapper for the theme-render Web Worker.
 * Provides a promise-based API for loading themes and rendering resumes
 * off the main thread.
 */

interface WorkerThemeLoadedMsg { type: 'themeLoaded'; theme: string }
interface WorkerThemeErrorMsg { type: 'themeError'; theme: string; error: string }
interface WorkerHtmlMsg { type: 'html'; id: number; html: string }
interface WorkerRenderErrorMsg { type: 'renderError'; id: number; error: string }
type WorkerOutMsg = WorkerThemeLoadedMsg | WorkerThemeErrorMsg | WorkerHtmlMsg | WorkerRenderErrorMsg;

let worker: Worker | null = null;
let renderIdCounter = 0;
const pendingRenders = new Map<number, { resolve: (html: string) => void; reject: (err: Error) => void }>();
let pendingThemeLoad: { resolve: () => void; reject: (err: Error) => void } | null = null;
let workerUrl: string | null = null;

function getWorker(): Worker {
  if (worker) return worker;

  // Build the worker from the source inline, avoids needing a separate bundle step.
  // The real theme-render logic runs via dynamic import() inside the worker.
  const workerCode = `
    // Polyfill process for theme bundles that reference it at runtime
    if (typeof globalThis.process === 'undefined') {
      globalThis.process = {
        env: { NODE_ENV: 'production' },
        browser: true,
        platform: 'browser',
        version: 'v20.0.0',
        versions: {},
        stdout: { write: function() {} },
        stderr: { write: function() {} },
        cwd: function() { return '/'; },
        chdir: function() {},
        nextTick: function(fn) { Promise.resolve().then(fn); },
        argv: [],
        pid: 1,
        title: 'browser',
      };
    }
    // Polyfill global for packages that expect it
    if (typeof globalThis.global === 'undefined') {
      globalThis.global = globalThis;
    }

    let currentTheme = null;

    self.onmessage = async (e) => {
      const msg = e.data;

      if (msg.type === 'loadTheme') {
        const { theme, url } = msg;
        try {
          const mod = await import(url);
          const render = mod.render ?? (mod.default && mod.default.render);
          if (typeof render !== 'function') {
            throw new Error('Theme module has no render function');
          }
          currentTheme = { render };
          self.postMessage({ type: 'themeLoaded', theme });
        } catch (err) {
          currentTheme = null;
          self.postMessage({ type: 'themeError', theme, error: err.message || 'Failed to load theme' });
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
        } catch (err) {
          self.postMessage({ type: 'renderError', id, error: err.message || 'Render failed' });
        }
      }
    };
  `;

  if (!workerUrl) {
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    workerUrl = URL.createObjectURL(blob);
  }

  worker = new Worker(workerUrl, { type: 'module' });

  worker.onmessage = (e: MessageEvent<WorkerOutMsg>) => {
    const msg = e.data;

    if (msg.type === 'themeLoaded') {
      pendingThemeLoad?.resolve();
      pendingThemeLoad = null;
      return;
    }
    if (msg.type === 'themeError') {
      pendingThemeLoad?.reject(new Error(msg.error));
      pendingThemeLoad = null;
      return;
    }
    if (msg.type === 'html') {
      const pending = pendingRenders.get(msg.id);
      if (pending) {
        pending.resolve(msg.html);
        pendingRenders.delete(msg.id);
      }
      return;
    }
    // msg.type === 'renderError'
    const pendingErr = pendingRenders.get(msg.id);
    if (pendingErr) {
      pendingErr.reject(new Error(msg.error));
      pendingRenders.delete(msg.id);
    }
  };

  worker.onerror = (e) => {
    // Reject all pending operations
    pendingThemeLoad?.reject(new Error(e.message));
    pendingThemeLoad = null;
    for (const [, pending] of pendingRenders) {
      pending.reject(new Error(e.message));
    }
    pendingRenders.clear();
  };

  return worker;
}

/** Load a theme module in the worker by URL. */
export function workerLoadTheme(theme: string, url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    pendingThemeLoad?.reject(new Error('Superseded by new theme load'));
    pendingThemeLoad = { resolve, reject };
    getWorker().postMessage({ type: 'loadTheme', theme, url });
  });
}

/** Render a resume in the worker. Returns the HTML string. */
export function workerRender(resume: Record<string, unknown>): Promise<string> {
  const id = ++renderIdCounter;
  return new Promise((resolve, reject) => {
    pendingRenders.set(id, { resolve, reject });
    getWorker().postMessage({ type: 'render', resume, id });
  });
}

/** Terminate the worker (e.g. on cleanup). */
export function terminateWorker(): void {
  if (worker) {
    worker.terminate();
    worker = null;
  }
  if (workerUrl) {
    URL.revokeObjectURL(workerUrl);
    workerUrl = null;
  }
  pendingThemeLoad = null;
  pendingRenders.clear();
}
