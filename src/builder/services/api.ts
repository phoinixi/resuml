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
}

export type ThemeCapability = 'browser' | 'snapshot-only' | 'unavailable';

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

  bundledNames = new Set(manifest.filter((t) => t.browserCompatible).map((t) => t.name));
  snapshotOnlyNames = new Set(
    manifest.filter((t) => !t.browserCompatible && t.hasSnapshot).map((t) => t.name),
  );

  const names = bundledNames;
  const snaps = snapshotOnlyNames;

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
// Simple: Worker → snapshot fallback. No server. No race conditions.

const loadedWorkerThemes = new Set<string>();

export function isThemeLoaded(themeName: string): boolean {
  return loadedWorkerThemes.has(themeName);
}

/**
 * Try to load a theme in the Worker. Returns true if the Worker is ready
 * to render this theme, false if it failed (caller should use snapshot).
 */
export async function tryLoadWorkerTheme(themeName: string): Promise<boolean> {
  if (loadedWorkerThemes.has(themeName)) return true;

  const entry = getManifestEntry(themeName);
  if (!entry?.browserCompatible) return false;

  try {
    const url = `${getThemesBase()}${themeName}.js`;
    await workerLoadTheme(themeName, url);
    loadedWorkerThemes.add(themeName);
    return true;
  } catch {
    return false;
  }
}

/** Render resume via the Worker. Only call if tryLoadWorkerTheme returned true. */
export function renderInWorker(resume: Record<string, unknown>): Promise<string> {
  return workerRender(resume);
}
