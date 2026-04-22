import { useState, useCallback, useRef } from 'react';
import type { ResumeSchema } from '../../types/resume';
import { tryLoadWorkerTheme, renderInWorker, loadSnapshot, isThemeLoaded } from '../services/api.js';
import { padResume } from '../utils/padResume.js';

/**
 * Decode HTML entities that themes double-escape through markdown-it +
 * Handlebars. The output goes into a sandboxed iframe so full decoding is safe.
 *
 * Also upgrades hard-coded http:// stylesheet/script URLs to https:// so the
 * browser doesn't block them as Mixed Content when the site is served over
 * HTTPS. Many JSON Resume themes ship with legacy HTTP CDN links (e.g.
 * http://bootswatch.com/.../bootstrap.min.css) that would otherwise render the
 * theme unstyled.
 */
function cleanRenderedHtml(html: string): string {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    // Upgrade insecure CDN references in <link href="..."> and <script src="...">
    .replace(/(<(?:link|script|img)\b[^>]*?\b(?:href|src)=["'])http:\/\//gi, '$1https://');
}

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
        setHtml(cleanRenderedHtml(rendered));
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
      setHtml(cleanRenderedHtml(snapshot));
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
