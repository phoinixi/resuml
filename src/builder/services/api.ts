import { ThemeListResponseSchema } from '../../shared/schemas';
import type { ThemeInfo, RenderRequest } from '../../shared/schemas';

export async function fetchThemes(signal?: AbortSignal): Promise<ThemeInfo[]> {
  const response = await fetch('/api/themes', { signal });
  if (!response.ok) {
    throw new Error(`Failed to load themes: ${response.status}`);
  }
  const data = await response.json();
  return ThemeListResponseSchema.parse(data);
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
