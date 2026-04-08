
interface PreviewProps {
  html: string | null;
  loading: boolean;
  error: string | null;
}

export function Preview({ html, loading, error }: PreviewProps) {
  if (loading) {
    return (
      <div className="preview-container">
        <div className="preview-loading">
          <div className="spinner" />
          <span>Rendering preview...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="preview-container">
        <div className="preview-error">
          <span className="preview-error-icon">⚠️</span>
          <span>{error}</span>
        </div>
      </div>
    );
  }

  if (!html) {
    return (
      <div className="preview-container">
        <div className="preview-empty">
          <span>Edit your resume to see a live preview</span>
        </div>
      </div>
    );
  }

  return (
    <div className="preview-container">
      <iframe
        className="preview-iframe"
        srcDoc={html}
        sandbox="allow-same-origin"
        title="Resume preview"
      />
    </div>
  );
}
