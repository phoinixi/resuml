import { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';

interface PreviewProps {
  html: string | null;
  loading: boolean;
  error: string | null;
}

export function Preview({ html, loading, error }: PreviewProps) {
  // Themes commonly pull external CSS (bootstrap, fonts, octicons) from a
  // CDN. The iframe's `display` flips to block the moment srcDoc is set,
  // but external stylesheets need extra network time to load, so on first
  // visit the user would see a flash of unstyled content on a white bg for
  // a second or two, which reads as "the app is broken". Keep the spinner
  // up until the iframe's `load` event fires: browsers wait to dispatch
  // that event until all sub-resources (stylesheets, images) are done.
  const [iframeReady, setIframeReady] = useState(false);

  useEffect(() => {
    setIframeReady(false);
    // Fallback: if a CDN resource hangs, reveal the iframe anyway after 3s
    // instead of trapping the user on a spinner forever.
    if (!html) return undefined;
    const timer = window.setTimeout(() => { setIframeReady(true); }, 3000);
    return () => { clearTimeout(timer); };
  }, [html]);

  const iframeStillLoading = !!html && !iframeReady;
  const showSpinner = loading || iframeStillLoading;
  const showIframe = !!html && !loading && iframeReady;
  const showError = !!error && !loading;
  const showEmpty = !html && !loading && !error;

  return (
    <div className="preview-container">
      {showSpinner && (
        <div className="preview-loading">
          <div className="spinner" />
          <span>Rendering preview...</span>
        </div>
      )}

      {showError && (
        <div className="preview-error">
          <AlertTriangle size={16} className="preview-error-icon" />
          <span>{error}</span>
        </div>
      )}

      {showEmpty && (
        <div className="preview-empty">
          <span>Edit your resume to see a live preview</span>
        </div>
      )}

      {/*
       * `srcDoc` (not doc.open/doc.write): each change navigates the iframe
       * to a fresh document, which also gives us a clean
       * CustomElementRegistry (stackoverflow registers <time-duration>).
       *
       * `sandbox="allow-scripts"`, NOT `allow-same-origin`. Themes run
       * arbitrary render code against user-controlled resume data (which
       * can come from a share-link URL hash), so the iframe must be
       * treated as untrusted. Without `allow-same-origin` the iframe
       * lives at a null origin and can't read the parent's localStorage,
       * cookies, or DOM. Scripts inside still run (themes need that for
       * web components / inline JS) but in an isolated origin, a
       * malicious shared resume can't exfiltrate the user's stored data.
       *
       * The iframe stays in the DOM with `display: none` while it's
       * loading so the browser still fires `load` when its sub-resources
       * finish. Flipping display to `block` then reveals ready content
       * without a flash of unstyled markup.
       */}
      <iframe
        srcDoc={html ?? ''}
        className="preview-iframe"
        sandbox="allow-scripts"
        title="Resume preview"
        onLoad={() => { setIframeReady(true); }}
        style={{ display: showIframe ? 'block' : 'none' }}
      />
    </div>
  );
}
