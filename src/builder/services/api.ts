import { ThemeListResponseSchema } from '../../shared/schemas';
import type { ThemeInfo, RenderRequest } from '../../shared/schemas';

const THEME_CACHE_TTL = 30 * 60 * 1000; // 30 minutes
let themeCacheData: ThemeInfo[] | null = null;
let themeCacheTime = 0;
let themeCachePromise: Promise<ThemeInfo[]> | null = null;

export function fetchThemes(signal?: AbortSignal): Promise<ThemeInfo[]> {
  if (themeCacheData && Date.now() - themeCacheTime < THEME_CACHE_TTL) {
    return Promise.resolve(themeCacheData);
  }

  if (themeCachePromise) return themeCachePromise;

  themeCachePromise = fetch('/api/themes', { signal })
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load themes: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const parsed = ThemeListResponseSchema.parse(data);
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
  const response = await fetch('/api/render', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
    signal,
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({ error: 'Render failed' }));
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
    const err = await response.json().catch(() => ({ error: 'PDF generation failed' }));
    throw new Error(err.error || `PDF failed: ${response.status}`);
  }

  return response.blob();
}
