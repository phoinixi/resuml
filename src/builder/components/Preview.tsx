
import { AlertTriangle } from 'lucide-react';

interface PreviewProps {
  html: string | null;
  loading: boolean;
  error: string | null;
}

export function Preview({ html, loading, error }: PreviewProps) {
  const showSpinner = loading;
  const showIframe = !!html && !showSpinner;
  // Suppress error while loading so the user sees a spinner during the
  // render attempt instead of the previous/incoming error flashing.
  const showError = !!error && !loading;

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

      {!html && !loading && !error && (
        <div className="preview-empty">
          <span>Edit your resume to see a live preview</span>
        </div>
      )}

      {/*
       * `srcDoc` (not doc.open/doc.write): each change navigates the iframe
       * to a fresh document, which also gives us a clean
       * CustomElementRegistry (stackoverflow registers <time-duration>).
       *
       * `sandbox="allow-scripts"` — NOT `allow-same-origin`. Themes run
       * arbitrary render code against user-controlled resume data (which
       * can come from a share-link URL hash), so the iframe must be
       * treated as untrusted. Without `allow-same-origin` the iframe
       * lives at a null origin and can't read the parent's localStorage,
       * cookies, or DOM. Scripts inside still run (themes need that for
       * web components / inline JS) but in an isolated origin — a
       * malicious shared resume can't exfiltrate the user's stored data.
       */}
      <iframe
        srcDoc={html ?? ''}
        className="preview-iframe"
        sandbox="allow-scripts"
        title="Resume preview"
        style={{ display: showIframe ? 'block' : 'none' }}
      />
    </div>
  );
}
