import { useState, useCallback, useRef } from 'react';
import type { ResumeSchema } from '../../types/resume';
import { tryLoadWorkerTheme, renderInWorker, loadSnapshot, isThemeLoaded } from '../services/api.js';
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
    const stale = () => renderId !== renderIdRef.current;

    setThemeError(null);

    // Show loading spinner only on first load of a new theme
    if (isThemeSwitch && !isThemeLoaded(themeName)) {
      setLoading(true);
    }

    // Step 1: Try the Worker
    const workerReady = await tryLoadWorkerTheme(themeName);
    if (stale()) return;

    if (workerReady) {
      try {
        const rendered = await renderInWorker(padResume(resume as unknown as Record<string, unknown>));
        if (stale()) return;
        setHtml(rendered);
        setIsSnapshot(false);
        setLoading(false);
        return;
      } catch {
        // Worker render failed — fall through to snapshot
      }
    }

    // Step 2: Show snapshot
    const snapshot = await loadSnapshot(themeName);
    if (stale()) return;

    if (snapshot) {
      setHtml(snapshot);
      setIsSnapshot(true);
      setLoading(false);
      return;
    }

    // Step 3: Nothing works
    setHtml(null);
    setIsSnapshot(false);
    setThemeError(`Theme "${themeName}" is not available`);
    setLoading(false);
  }, [themeName]);

  return { html, loading, themeError, isSnapshot, renderResume };
}
