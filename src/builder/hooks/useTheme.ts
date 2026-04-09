import { useState, useCallback, useRef } from 'react';
import type { ResumeSchema } from '../../types/resume';
import { loadTheme, loadSnapshot, isThemeLoaded, getThemeCapability } from '../services/api.js';
import { padResume } from '../utils/padResume.js';

export function useTheme(themeName: string) {
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [themeError, setThemeError] = useState<string | null>(null);
  const [isSnapshot, setIsSnapshot] = useState(false);
  const renderIdRef = useRef(0);
  const prevThemeRef = useRef<string | null>(null);

  const renderResume = useCallback(async (resume: ResumeSchema) => {
    const renderId = ++renderIdRef.current;
    const isThemeSwitch = prevThemeRef.current !== themeName;
    prevThemeRef.current = themeName;

    setThemeError(null);

    // On theme switch: show snapshot instantly while loading the real render module
    if (isThemeSwitch) {
      if (!isThemeLoaded(themeName)) {
        setLoading(true);

        // Try to show snapshot immediately (non-blocking)
        loadSnapshot(themeName).then((snapshot) => {
          if (renderId !== renderIdRef.current) return;
          if (snapshot) {
            setHtml(snapshot);
            setIsSnapshot(true);
          } else {
            setHtml(null);
          }
        }).catch(() => { /* ignore */ });
      }
    }

    try {
      const mod = await loadTheme(themeName);
      if (renderId !== renderIdRef.current) return;

      const result = mod.render(padResume(resume as unknown as Record<string, unknown>));
      const rendered = typeof result === 'string' ? result : await result;
      if (renderId !== renderIdRef.current) return;

      setHtml(rendered);
      // For snapshot-only themes, keep the snapshot indicator permanently
      const capability = getThemeCapability(themeName);
      setIsSnapshot(capability === 'snapshot-only');
      setLoading(false);
    } catch (e: unknown) {
      if (renderId !== renderIdRef.current) return;
      if (isThemeSwitch) setHtml(null);
      setIsSnapshot(false);
      setThemeError(e instanceof Error ? e.message : 'Failed to render theme');
      setLoading(false);
    }
  }, [themeName]);

  return { html, loading, themeError, isSnapshot, renderResume };
}
