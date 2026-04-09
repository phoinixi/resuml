
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
      {loading && !isSnapshot && (
        <div className="preview-loading">
          <div className="spinner" />
          <span>Rendering preview...</span>
        </div>
      )}

      {loading && isSnapshot && (
        <div className="preview-snapshot-badge">
          <div className="spinner-small" />
          <span>Loading theme...</span>
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
        style={{ display: html ? 'block' : 'none' }}
      />
    </div>
  );
}
