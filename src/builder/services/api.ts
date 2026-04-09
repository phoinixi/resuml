import { workerLoadTheme, workerRender } from './themeWorker.js';

export interface BrowserTheme {
  readonly name: string;
  readonly displayName: string;
  readonly description: string;
  readonly version: string;
  readonly browserCompatible: boolean;
  readonly hasSnapshot: boolean;
  readonly hasCss: boolean;
  readonly fileSize: number;
  readonly cssSize: number;
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
 * Resolves relative to docs/app/main.js so it works on any deployment.
 */
function getThemesBase(): string {
  try {
    return new URL('../themes/', import.meta.url).href;
  } catch {
    return '/themes/';
  }
}

// ── Theme list ──────────────────────────────────────────────────────

let themeListCache: NpmTheme[] | null = null;
let manifestCache: BrowserTheme[] | null = null;
let bundledNames: Set<string> | null = null;

async function loadManifest(): Promise<BrowserTheme[]> {
  if (manifestCache) return manifestCache;
  try {
    const r = await fetch(`${getThemesBase()}manifest.json`);
    if (!r.ok) return [];
    manifestCache = (await r.json() as BrowserTheme[]);
    return manifestCache;
  } catch {
    return [];
  }
}

function getManifestEntry(name: string): BrowserTheme | undefined {
  return manifestCache?.find((t) => t.name === name);
}

async function loadNpmThemes(signal?: AbortSignal): Promise<NpmTheme[]> {
  const r = await fetch(`${getApiBase()}/api/themes`, { signal });
  if (!r.ok) throw new Error(`Failed to load themes: ${r.status}`);
  return r.json() as Promise<NpmTheme[]>;
}

export async function fetchThemes(signal?: AbortSignal): Promise<NpmTheme[]> {
  if (themeListCache) return themeListCache;

  const [manifest, npmThemes] = await Promise.all([
    loadManifest(),
    loadNpmThemes(signal),
  ]);

  bundledNames = new Set(manifest.filter((t) => t.browserCompatible).map((t) => t.name));
  const names = bundledNames;

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

// ── Snapshot loading ────────────────────────────────────────────────

const snapshotCache = new Map<string, string>();

/** Load a pre-rendered snapshot for instant theme preview. */
export async function loadSnapshot(themeName: string): Promise<string | null> {
  const cached = snapshotCache.get(themeName);
  if (cached) return cached;

  // Check manifest to see if snapshot exists
  const manifest = await loadManifest();
  const entry = manifest.find((t) => t.name === themeName);
  if (!entry?.hasSnapshot) return null;

  try {
    const url = `${getThemesBase()}${themeName}.snapshot.html`;
    const r = await fetch(url);
    if (!r.ok) return null;
    const html = await r.text();
    snapshotCache.set(themeName, html);
    return html;
  } catch {
    return null;
  }
}

// ── Theme module loading ────────────────────────────────────────────
// Strategy:
//   1. If snapshot available → show it instantly while loading the render module
//   2. Load bundled .js in Web Worker (off main thread)
//   3. Fall back to server /api/render for non-bundled themes

const loadedWorkerThemes = new Set<string>();

/** Whether we already have the theme render module ready (worker or server). */
export function isThemeLoaded(themeName: string): boolean {
  return loadedWorkerThemes.has(themeName) || serverThemeCache.has(themeName);
}

const serverThemeCache = new Map<string, ThemeModule>();

export async function loadTheme(themeName: string): Promise<ThemeModule> {
  // Check if we already have a worker-loaded theme
  if (loadedWorkerThemes.has(themeName)) {
    return { render: (resume) => workerRender(resume as Record<string, unknown>) };
  }

  // Check if server fallback is cached
  const serverCached = serverThemeCache.get(themeName);
  if (serverCached) return serverCached;

  // Try loading bundled theme in Web Worker
  const entry = getManifestEntry(themeName);
  if (entry?.browserCompatible) {
    try {
      const url = `${getThemesBase()}${themeName}.js`;
      await workerLoadTheme(themeName, url);
      loadedWorkerThemes.add(themeName);
      return { render: (resume) => workerRender(resume as Record<string, unknown>) };
    } catch {
      // Worker load failed — fall through to server
    }
  }

  // Fall back to server render
  const serverTheme: ThemeModule = {
    render: async (resume) => {
      const signal = AbortSignal.timeout(30_000);
      const response = await fetch(`${getApiBase()}/api/render`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume, theme: themeName }),
        signal,
      });
      if (!response.ok) {
        const err = await (response.json() as Promise<{ error?: string }>).catch(() => ({ error: 'Render failed' }));
        throw new Error(err.error ?? `Render failed: ${response.status}`);
      }
      return response.text();
    },
  };

  serverThemeCache.set(themeName, serverTheme);
  return serverTheme;
}
