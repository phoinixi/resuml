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
  /**
   * True when the bundled theme renders a sample resume successfully in a
   * blob-worker probe (see scripts/enrich-themes-manifest.mjs). Themes that
   * are bundled but fail at render (e.g. missing Handlebars helpers) are
   * marked false and filtered to the bottom of the picker.
   */
  readonly renderOk?: boolean;
  readonly npmWeeklyDownloads?: number;
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
}

export type ThemeCapability = 'browser' | 'broken' | 'snapshot-only' | 'unavailable';

function getApiBase(): string {
  if (typeof window === 'undefined') return '';
  const { hostname } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.vercel.app')) {
    return '';
  }
  return 'https://resuml.vercel.app';
}

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

  // Tier ranking (lower = better, sorted first):
  //   0: bundled + passes render probe (show first, users will have a good time)
  //   1: bundled but render probe failed (still shows something via error UI)
  //   2: snapshot-only (thumbnail available, can't render live)
  //   3: unavailable
  const rendersOk = new Set(
    manifest.filter((t) => t.browserCompatible && t.renderOk !== false).map((t) => t.name),
  );
  bundledNames = new Set(manifest.filter((t) => t.browserCompatible).map((t) => t.name));
  snapshotOnlyNames = new Set(
    manifest.filter((t) => !t.browserCompatible && t.hasSnapshot).map((t) => t.name),
  );

  // Merge real npm weekly downloads from the manifest (scripts/enrich-themes-
  // manifest.mjs) over the server-side /api/themes response, which today
  // returns a placeholder (10000 for every theme).
  const downloadsByName = new Map<string, number>();
  for (const t of manifest) {
    if (typeof t.npmWeeklyDownloads === 'number') {
      downloadsByName.set(t.name, t.npmWeeklyDownloads);
    }
  }
  const merged: NpmTheme[] = npmThemes.map((t) => {
    const manifestDownloads = downloadsByName.get(t.name);
    return manifestDownloads !== undefined
      ? { ...t, weeklyDownloads: manifestDownloads }
      : t;
  });

  const tier = (name: string): number => {
    if (rendersOk.has(name)) return 0;
    if (bundledNames?.has(name)) return 1;
    if (snapshotOnlyNames?.has(name)) return 2;
    return 3;
  };

  const sorted = merged.sort((a, b) => {
    const ta = tier(a.name);
    const tb = tier(b.name);
    if (ta !== tb) return ta - tb;
    return b.weeklyDownloads - a.weeklyDownloads;
  });

  themeListCache = sorted;
  return themeListCache;
}

export function isBundledTheme(name: string): boolean {
  return bundledNames?.has(name) ?? false;
}

export function getThemeCapability(name: string): ThemeCapability {
  const entry = manifestCache?.find((t) => t.name === name);
  if (entry?.browserCompatible) {
    return entry.renderOk === false ? 'broken' : 'browser';
  }
  if (snapshotOnlyNames?.has(name)) return 'snapshot-only';
  return 'unavailable';
}

export function prefetchThemes(): void {
  fetchThemes().catch(() => { /* silent */ });
}

// ── Snapshot loading ────────────────────────────────────────────────

const snapshotCache = new Map<string, string>();

export async function loadSnapshot(themeName: string): Promise<string | null> {
  const cached = snapshotCache.get(themeName);
  if (cached) return cached;

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
// Simple: Worker → error-state fallback. No server. No race conditions.

/**
 * Tracks which theme the Worker *currently* has as its active render
 * function. On a theme switch, we MUST call workerLoadTheme again to
 * replace the worker's `currentTheme` — otherwise renders go through the
 * previously-active theme's render() even though our UI shows the new
 * theme's name. Dynamic import in the worker is cached by the browser,
 * so re-calling is cheap when the module has been loaded before.
 */
let activeWorkerTheme: string | null = null;
const attemptedThemes = new Set<string>();

export function isThemeLoaded(themeName: string): boolean {
  return activeWorkerTheme === themeName;
}

/**
 * Ensure the Worker has `themeName` as its active render function.
 * Returns true on success, false if the theme isn't browser-renderable.
 */
export async function tryLoadWorkerTheme(themeName: string): Promise<boolean> {
  // Already the active theme — nothing to do.
  if (activeWorkerTheme === themeName) return true;

  // Ensure the manifest cache is populated before reading from it. Without
  // this, the very first render (before the user opens the ThemePicker)
  // couldn't see `browserCompatible` / `renderOk` flags and short-circuited
  // to the "can't render" state even for working themes like stackoverflow.
  await loadManifest();

  const entry = getManifestEntry(themeName);
  if (!entry?.browserCompatible) return false;
  // Pre-flight flag from enrich-themes-manifest.mjs — themes we've already
  // observed throwing at render time. Skip the worker round-trip and surface
  // the error state directly.
  if (entry.renderOk === false) return false;

  try {
    const url = `${getThemesBase()}${themeName}.js`;
    await workerLoadTheme(themeName, url);
    activeWorkerTheme = themeName;
    attemptedThemes.add(themeName);
    return true;
  } catch {
    return false;
  }
}

/** Render resume via the Worker. Only call if tryLoadWorkerTheme returned true. */
export function renderInWorker(resume: Record<string, unknown>): Promise<string> {
  return workerRender(resume);
}
