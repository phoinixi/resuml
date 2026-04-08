import { h } from 'preact';

interface PreviewProps {
  html: string | null;
  loading: boolean;
  error: string | null;
}

export function Preview({ html, loading, error }: PreviewProps) {
  if (loading) {
    return (
      <div class="preview-container">
        <div class="preview-loading">
          <div class="spinner" />
          <span>Rendering preview...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div class="preview-container">
        <div class="preview-error">
          <span class="preview-error-icon">⚠️</span>
          <span>{error}</span>
        </div>
      </div>
    );
  }

  if (!html) {
    return (
      <div class="preview-container">
        <div class="preview-empty">
          <span>Edit your resume to see a live preview</span>
        </div>
      </div>
    );
  }

  return (
    <div class="preview-container">
      <iframe
        class="preview-iframe"
        srcDoc={html}
        sandbox="allow-same-origin"
        title="Resume preview"
      />
    </div>
  );
}
