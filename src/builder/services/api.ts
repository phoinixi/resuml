export interface BrowserTheme {
  readonly name: string;
  readonly displayName: string;
  readonly description: string;
  readonly version: string;
  readonly browserCompatible: boolean;
  readonly fileSize: number;
}

export interface ThemeModule {
  render: (resume: Record<string, unknown>) => string;
  pdfRenderOptions?: unknown;
}

/**
 * Returns the base URL for the bundled theme assets.
 * Resolves relative to docs/app/main.js so it works on any deployment:
 *   localhost  → http://localhost:3000/themes/
 *   Vercel     → https://resuml.vercel.app/themes/
 *   GitHub Pgs → https://phoinixi.github.io/resuml/themes/
 */
function getThemesBase(): string {
  try {
    return new URL('../themes/', import.meta.url).href;
  } catch {
    return '/themes/';
  }
}

// ── Theme list (manifest.json) ──────────────────────────────────────

let manifestCache: BrowserTheme[] | null = null;

export function fetchThemes(signal?: AbortSignal): Promise<BrowserTheme[]> {
  if (manifestCache) return Promise.resolve(manifestCache);

  return fetch(`${getThemesBase()}manifest.json`, { signal })
    .then((r) => {
      if (!r.ok) throw new Error(`Failed to load themes: ${r.status}`);
      return r.json() as Promise<BrowserTheme[]>;
    })
    .then((data) => {
      manifestCache = data.filter((t) => t.browserCompatible);
      return manifestCache;
    });
}

export function prefetchThemes(): void {
  fetchThemes().catch(() => { /* silent */ });
}

// ── Theme module loading ────────────────────────────────────────────

const moduleCache = new Map<string, ThemeModule>();

export function isThemeLoaded(themeName: string): boolean {
  return moduleCache.has(themeName);
}

export async function loadTheme(themeName: string): Promise<ThemeModule> {
  const cached = moduleCache.get(themeName);
  if (cached) return cached;

  const url = `${getThemesBase()}${themeName}.js`;
  // Dynamic import — esbuild leaves variable-string imports as-is in ESM output
  const mod = await import(url) as ThemeModule;
  moduleCache.set(themeName, mod);
  return mod;
}

