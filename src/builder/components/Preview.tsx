
import { useRef, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

interface PreviewProps {
  html: string | null;
  loading: boolean;
  error: string | null;
  isSnapshot?: boolean;
}

export function Preview({ html, loading, error, isSnapshot }: PreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const previousHtmlRef = useRef<string | null>(null);

  // Show loading spinner only when there's no content to display yet
  const showSpinner = loading && !html;
  // Persistent warning when the preview is a pre-rendered sample rather than
  // the user's actual resume. Many themes can't run client-side so we fall
  // back to a snapshot — which is a SAMPLE resume, not theirs. Make this
  // obvious so users don't think they've just lost their data.
  const showSnapshotWarning = isSnapshot && !!html;
  const showIframe = !!html && !showSpinner;

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    if (!html) {
      previousHtmlRef.current = null;
      const doc = iframe.contentDocument;
      if (doc) {
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        doc.open(); doc.write(''); doc.close();
      }
      return;
    }

    if (html === previousHtmlRef.current) return;
    previousHtmlRef.current = html;

    const doc = iframe.contentDocument;
    if (doc) {
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      doc.open(); doc.write(html); doc.close();
    }
  }, [html]);

  return (
    <div className="preview-container">
      {showSpinner && (
        <div className="preview-loading">
          <div className="spinner" />
          <span>Rendering preview...</span>
        </div>
      )}

      {showSnapshotWarning && (
        <div className="preview-snapshot-banner" role="status">
          <AlertTriangle size={14} aria-hidden="true" />
          <span>
            <strong>Preview shows sample data.</strong> This theme can't render
            in-browser — your actual resume will appear on PDF export. Pick a
            browser-compatible theme for a live preview.
          </span>
        </div>
      )}

      {error && (
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

      <iframe
        ref={iframeRef}
        className="preview-iframe"
        sandbox="allow-same-origin allow-scripts"
        title="Resume preview"
        style={{ display: showIframe ? 'block' : 'none' }}
      />
    </div>
  );
}
