import { useState, useCallback, useRef } from 'react';
import type { ResumeSchema } from '../../types/resume';

export function useTheme(themeName: string) {
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [themeError, setThemeError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const renderResume = useCallback(async (resume: ResumeSchema) => {
    // Cancel any in-flight request
    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setThemeError(null);

    try {
      const response = await fetch('/api/render', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume, theme: themeName }),
        signal: controller.signal,
      });

      if (!response.ok) {
        const err = await (response.json() as Promise<{ error?: string }>).catch(() => ({ error: 'Render failed' }));
        throw new Error(err.error ?? `Render failed: ${response.status}`);
      }

      const renderedHtml = await response.text();

      if (!controller.signal.aborted) {
        setHtml(renderedHtml);
        setLoading(false);
      }
    } catch (e: unknown) {
      if (e instanceof Error && e.name === 'AbortError') return;
      if (!controller.signal.aborted) {
        setThemeError(e instanceof Error ? e.message : 'Failed to render theme');
        setLoading(false);
      }
    }
  }, [themeName]);

  return { html, loading, themeError, renderResume };
}
