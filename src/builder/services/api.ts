import type { ThemeInfo } from '../../shared/schemas';

interface RenderRequest {
  readonly resume: Record<string, unknown>;
  readonly theme: string;
}

interface ErrorBody {
  readonly error: string;
}

/**
 * When running on localhost or Vercel itself, use relative URLs.
 * When served from GitHub Pages / custom domain, proxy to Vercel.
 */
export function getApiBase(): string {
  if (typeof window === 'undefined') return '';
  const { hostname } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.vercel.app')) {
    return '';
  }
  return 'https://resuml.vercel.app';
}
const THEME_CACHE_TTL = 30 * 60 * 1000; // 30 minutes
let themeCacheData: ThemeInfo[] | null = null;
let themeCacheTime = 0;
let themeCachePromise: Promise<ThemeInfo[]> | null = null;

export function fetchThemes(signal?: AbortSignal): Promise<ThemeInfo[]> {
  if (themeCacheData && Date.now() - themeCacheTime < THEME_CACHE_TTL) {
    return Promise.resolve(themeCacheData);
  }

  if (themeCachePromise) return themeCachePromise;

  themeCachePromise = fetch(`${getApiBase()}/api/themes`, { signal })
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load themes: ${response.status}`);
      return response.json();
    })
    .then((data: unknown) => {
      const parsed = data as ThemeInfo[];
      themeCacheData = parsed;
      themeCacheTime = Date.now();
      themeCachePromise = null;
      return parsed;
    })
    .catch((e: unknown) => {
      themeCachePromise = null;
      throw e;
    });

  return themeCachePromise;
}

export function prefetchThemes(): void {
  fetchThemes().catch(() => { /* silent prefetch */ });
}

export async function renderResume(
  request: RenderRequest,
  signal?: AbortSignal,
): Promise<string> {
  const response = await fetch(`${getApiBase()}/api/render`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
    signal,
  });

  if (!response.ok) {
    const err: ErrorBody = await (response.json() as Promise<ErrorBody>).catch(() => ({ error: 'Render failed' }));
    throw new Error(err.error || `Render failed: ${response.status}`);
  }

  return response.text();
}

export async function downloadPdf(
  resume: Record<string, unknown>,
  theme: string,
  format: 'A4' | 'Letter' = 'A4',
): Promise<Blob> {
  const response = await fetch('/api/pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ resume, theme, format }),
  });

  if (!response.ok) {
    const err: ErrorBody = await (response.json() as Promise<ErrorBody>).catch(() => ({ error: 'PDF generation failed' }));
    throw new Error(err.error || `PDF failed: ${response.status}`);
  }

  return response.blob();
}
