import { useState, useCallback, useRef } from 'react';
import type { ResumeSchema } from '../../types/resume';
import { loadTheme, isThemeLoaded } from '../services/api.js';

export function useTheme(themeName: string) {
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [themeError, setThemeError] = useState<string | null>(null);
  const renderIdRef = useRef(0);
  const prevThemeRef = useRef<string | null>(null);

  const renderResume = useCallback(async (resume: ResumeSchema) => {
    const renderId = ++renderIdRef.current;

    const isThemeSwitch = prevThemeRef.current !== themeName;
    prevThemeRef.current = themeName;

    // Only show the full loading spinner (and clear the current preview) when
    // switching to a theme for the first time. Once the module is cached, theme
    // switches are instant and need no spinner. Content-only updates are silent.
    if (isThemeSwitch && !isThemeLoaded(themeName)) {
      setLoading(true);
      setHtml(null);
    }
    setThemeError(null);

    try {
      const mod = await loadTheme(themeName);
      if (renderId !== renderIdRef.current) return; // superseded by newer call

      const rendered = mod.render(resume as unknown as Record<string, unknown>);
      if (renderId !== renderIdRef.current) return;

      setHtml(rendered);
      setLoading(false);
    } catch (e: unknown) {
      if (renderId !== renderIdRef.current) return;
      if (isThemeSwitch) setHtml(null);
      setThemeError(e instanceof Error ? e.message : 'Failed to render theme');
      setLoading(false);
    }
  }, [themeName]);

  return { html, loading, themeError, renderResume };
}
