
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
       * Use `srcDoc` rather than doc.open()/doc.write(): the latter reuses
       * the iframe's window across renders, so themes that register custom
       * elements (stackoverflow's <time-duration>, others) throw on the
       * second write with "already used with this registry". Updating
       * srcDoc navigates the iframe to a fresh document, giving each
       * render a clean CustomElementRegistry.
       */}
      <iframe
        srcDoc={html ?? ''}
        className="preview-iframe"
        sandbox="allow-same-origin allow-scripts"
        title="Resume preview"
        style={{ display: showIframe ? 'block' : 'none' }}
      />
    </div>
  );
}
