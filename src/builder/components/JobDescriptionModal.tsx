import { useEffect, useRef, useState, useId, useCallback } from 'react';
import { X, Briefcase, Sparkles, Link as LinkIcon, Loader2, AlertTriangle } from 'lucide-react';
import { isJdUrl, fetchJdFromUrl } from '../services/fetchJd';

interface JobDescriptionModalProps {
  value: string;
  onSave: (jd: string) => void;
  onClose: () => void;
}

function wordCount(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

export function JobDescriptionModal({ value, onSave, onClose }: JobDescriptionModalProps) {
  const [draft, setDraft] = useState(value);
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const titleId = useId();
  const fieldId = useId();

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const draftIsUrl = isJdUrl(draft);

  const handleFetch = useCallback(async () => {
    const url = draft.trim();
    if (!url) return;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setFetching(true);
    setFetchError(null);
    try {
      const result = await fetchJdFromUrl(url, controller.signal);
      setDraft(result.text);
      textareaRef.current?.focus();
    } catch (err: unknown) {
      if ((err as Error).name === 'AbortError') return;
      const msg = err instanceof Error ? err.message : 'Could not fetch job description';
      setFetchError(msg);
    } finally {
      if (abortRef.current === controller) abortRef.current = null;
      setFetching(false);
    }
  }, [draft]);

  useEffect(() => () => { abortRef.current?.abort(); }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
        if (draftIsUrl && !fetching) {
          void handleFetch();
        } else {
          onSave(draft);
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); };
  }, [draft, draftIsUrl, fetching, onClose, onSave, handleFetch]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains('jd-modal-overlay')) onClose();
  };

  const hasValue = draft.trim().length > 0;
  const hadValue = value.trim().length > 0;

  return (
    <div
      className="jd-modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="jd-modal">
        <div className="jd-modal-header">
          <div className="jd-modal-title-group">
            <Briefcase size={18} aria-hidden="true" />
            <h3 id={titleId} className="jd-modal-title">Job Description</h3>
          </div>
          <button
            className="jd-modal-close"
            onClick={onClose}
            aria-label="Close"
          ><X size={18} aria-hidden="true" /></button>
        </div>

        <div className="jd-modal-body">
          <p className="jd-modal-desc">
            <Sparkles size={14} aria-hidden="true" />
            Paste a job description, or a link to one (LinkedIn, Greenhouse,
            Lever, Indeed, Workable). Runs locally in your browser.
          </p>
          <label htmlFor={fieldId} className="jd-modal-label">
            Paste the job description or URL
          </label>
          <textarea
            ref={textareaRef}
            id={fieldId}
            className="jd-modal-textarea"
            placeholder="Paste the job ad, or a link like https://www.linkedin.com/jobs/view/..."
            value={draft}
            onChange={(e) => { setDraft(e.target.value); setFetchError(null); }}
            rows={14}
            disabled={fetching}
          />
          {draftIsUrl && (
            <div className="jd-modal-url-row">
              <button
                type="button"
                className="jd-modal-fetch-btn"
                onClick={() => { void handleFetch(); }}
                disabled={fetching}
              >
                {fetching ? (
                  <><Loader2 size={14} className="jd-spin" aria-hidden="true" /> Fetching…</>
                ) : (
                  <><LinkIcon size={14} aria-hidden="true" /> Fetch from URL</>
                )}
              </button>
              <span className="jd-modal-url-hint">
                We'll fetch the page and pull out the description text.
              </span>
            </div>
          )}
          {fetchError && (
            <div className="jd-modal-fetch-error" role="alert">
              <AlertTriangle size={14} aria-hidden="true" />
              <span>{fetchError}</span>
            </div>
          )}
          <div className="jd-modal-meta">
            <span>{wordCount(draft)} words</span>
            <span className="jd-modal-hint">
              ⌘/Ctrl + Enter to {draftIsUrl ? 'fetch' : 'save'}
            </span>
          </div>
        </div>

        <div className="jd-modal-footer">
          {hadValue && (
            <button
              type="button"
              className="jd-modal-secondary"
              onClick={() => {
                onSave('');
                onClose();
              }}
            >Remove</button>
          )}
          <button
            type="button"
            className="jd-modal-ghost"
            onClick={onClose}
          >Cancel</button>
          <button
            type="button"
            className="jd-modal-primary"
            onClick={() => { onSave(draft); onClose(); }}
            disabled={(!hasValue && !hadValue) || fetching || draftIsUrl}
            title={draftIsUrl ? 'Fetch the URL first' : undefined}
          >Save</button>
        </div>
      </div>
    </div>
  );
}
