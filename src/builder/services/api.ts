export interface BrowserTheme {
  readonly name: string;
  readonly displayName: string;
  readonly description: string;
  readonly version: string;
  readonly browserCompatible: boolean;
  readonly fileSize: number;
}

export interface NpmTheme {
  readonly name: string;
  readonly displayName: string;
  readonly description: string;
  readonly version: string;
  readonly weeklyDownloads: number;
}

export interface ThemeModule {
  render: (resume: Record<string, unknown>) => string | Promise<string>;
  pdfRenderOptions?: unknown;
}

/** Relative URL used when calling the Vercel serverless API (render/themes). */
function getApiBase(): string {
  if (typeof window === 'undefined') return '';
  const { hostname } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.vercel.app')) {
    return '';
  }
  return 'https://resuml.vercel.app';
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

// ── Theme list ──────────────────────────────────────────────────────────
// Strategy: load manifest.json (fast, lists bundled themes) AND
// /api/themes (full npm registry list). Merge them, bundled themes first.

let themeListCache: NpmTheme[] | null = null;
let bundledNames: Set<string> | null = null;

async function loadManifest(): Promise<BrowserTheme[]> {
  try {
    const r = await fetch(`${getThemesBase()}manifest.json`);
    if (!r.ok) return [];
    return (await r.json() as BrowserTheme[]).filter((t) => t.browserCompatible);
  } catch {
    return [];
  }
}

async function loadNpmThemes(signal?: AbortSignal): Promise<NpmTheme[]> {
  const r = await fetch(`${getApiBase()}/api/themes`, { signal });
  if (!r.ok) throw new Error(`Failed to load themes: ${r.status}`);
  return r.json() as Promise<NpmTheme[]>;
}

export async function fetchThemes(signal?: AbortSignal): Promise<NpmTheme[]> {
  if (themeListCache) return themeListCache;

  // Load both in parallel; manifest is used to mark which are instant
  const [manifest, npmThemes] = await Promise.all([
    loadManifest(),
    loadNpmThemes(signal),
  ]);

  bundledNames = new Set(manifest.map((t) => t.name));
  const names = bundledNames;

  // Merge: put bundled themes first (with ⚡ flag implied), rest after
  const bundledFirst = npmThemes.sort((a, b) => {
    const aB = names.has(a.name) ? 0 : 1;
    const bB = names.has(b.name) ? 0 : 1;
    if (aB !== bB) return aB - bB;
    return b.weeklyDownloads - a.weeklyDownloads;
  });

  themeListCache = bundledFirst;
  return themeListCache;
}

export function isBundledTheme(name: string): boolean {
  return bundledNames?.has(name) ?? false;
}

export function prefetchThemes(): void {
  fetchThemes().catch(() => { /* silent */ });
}

// ── Theme module loading ────────────────────────────────────────────────
// Strategy: try client-side bundle (instant), fall back to server /api/render.

const moduleCache = new Map<string, ThemeModule>();

export function isThemeLoaded(themeName: string): boolean {
  return moduleCache.has(themeName);
}

export async function loadTheme(themeName: string): Promise<ThemeModule> {
  const cached = moduleCache.get(themeName);
  if (cached) return cached;

  // Try browser-bundled version first
  try {
    const url = `${getThemesBase()}${themeName}.js`;
    const mod = await import(url) as ThemeModule;
    if (typeof mod.render === 'function') {
      moduleCache.set(themeName, mod);
      return mod;
    }
  } catch {
    // not bundled — fall through to server
  }

  // Fall back to server render (same API as before)
  const serverTheme: ThemeModule = {
    render: async (resume) => {
      const response = await fetch(`${getApiBase()}/api/render`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume, theme: themeName }),
      });
      if (!response.ok) {
        const err = await (response.json() as Promise<{ error?: string }>).catch(() => ({ error: 'Render failed' }));
        throw new Error(err.error ?? `Render failed: ${response.status}`);
      }
      return response.text();
    },
  };

  // Don't cache server themes — each call is fresh (like before)
  return serverTheme;
}

