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

export type ThemeCapability = 'browser' | 'snapshot-only' | 'server';

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
let snapshotOnlyNames: Set<string> | null = null;

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

export function getManifestEntry(name: string): BrowserTheme | undefined {
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
  snapshotOnlyNames = new Set(
    manifest.filter((t) => !t.browserCompatible && t.hasSnapshot).map((t) => t.name),
  );

  const names = bundledNames;
  const snaps = snapshotOnlyNames;

  // Sort: browser-compatible first, then snapshot-only, then server-only
  const sorted = npmThemes.sort((a, b) => {
    const aRank = names.has(a.name) ? 0 : snaps.has(a.name) ? 1 : 2;
    const bRank = names.has(b.name) ? 0 : snaps.has(b.name) ? 1 : 2;
    if (aRank !== bRank) return aRank - bRank;
    return b.weeklyDownloads - a.weeklyDownloads;
  });

  themeListCache = sorted;
  return themeListCache;
}

export function isBundledTheme(name: string): boolean {
  return bundledNames?.has(name) ?? false;
}

export function getThemeCapability(name: string): ThemeCapability {
  if (bundledNames?.has(name)) return 'browser';
  if (snapshotOnlyNames?.has(name)) return 'snapshot-only';
  return 'server';
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
//   3. For snapshot-only themes → return snapshot as render result
//   4. Fall back to server /api/render for themes with no bundle or snapshot

const loadedWorkerThemes = new Set<string>();

/** Whether we already have the theme render module ready. */
export function isThemeLoaded(themeName: string): boolean {
  return loadedWorkerThemes.has(themeName) || serverThemeCache.has(themeName);
}

const serverThemeCache = new Map<string, ThemeModule>();

export async function loadTheme(themeName: string): Promise<ThemeModule> {
  // Check if we already have a worker-loaded theme
  if (loadedWorkerThemes.has(themeName)) {
    return { render: (resume) => workerRender(resume) };
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
      return { render: (resume) => workerRender(resume) };
    } catch {
      // Bundle exists but Worker crashed (e.g. dynamic require in theme).
      // Fall through to snapshot if available.
    }
  }

  // Serve snapshot for themes that have one (including bundled themes that crashed)
  if (entry?.hasSnapshot) {
    const snapshotTheme: ThemeModule = {
      render: async () => {
        const snap = await loadSnapshot(themeName);
        if (snap) return snap;
        throw new Error(`Theme "${themeName}" is available as preview only`);
      },
    };
    serverThemeCache.set(themeName, snapshotTheme);
    return snapshotTheme;
  }

  // Theme is in manifest but has no bundle and no snapshot — unavailable
  if (entry) {
    throw new Error(`Theme "${themeName}" is not available`);
  }

  // Theme not in manifest at all — not bundled, no server fallback
  throw new Error(`Theme "${themeName}" is not available. Only bundled themes are supported.`);
}
