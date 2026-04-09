import { useState, useCallback, useRef } from 'react';
import type { ResumeSchema } from '../../types/resume';
import { getApiBase } from '../services/api.js';

export function useTheme(themeName: string) {
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [themeError, setThemeError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const prevThemeRef = useRef<string | null>(null);

  const renderResume = useCallback(async (resume: ResumeSchema) => {
    // Cancel any in-flight request
    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;

    const isThemeSwitch = prevThemeRef.current !== themeName;
    prevThemeRef.current = themeName;

    // Only show the full loading spinner (and clear the current preview) when switching
    // themes. For content-only updates we silently update in the background so the
    // user doesn't lose their current preview while typing.
    if (isThemeSwitch) {
      setLoading(true);
      setHtml(null);
    }
    setThemeError(null);

    try {
      const response = await fetch(`${getApiBase()}/api/render`, {
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
        // On content-update errors, keep the previous preview — only clear on theme switch
        if (isThemeSwitch) setHtml(null);
        setThemeError(e instanceof Error ? e.message : 'Failed to render theme');
        setLoading(false);
      }
    }
  }, [themeName]);

  return { html, loading, themeError, renderResume };
}
