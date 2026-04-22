import { useEffect, useRef, useState, useId } from 'react';
import { X, Briefcase, Sparkles } from 'lucide-react';

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
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const titleId = useId();
  const fieldId = useId();

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
        onSave(draft);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); };
  }, [draft, onClose, onSave]);

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
            Paste a job description to unlock tailored feedback — keyword match,
            skill gaps and fit assessment. Runs locally in your browser.
          </p>
          <label htmlFor={fieldId} className="jd-modal-label">
            Paste the job description
          </label>
          <textarea
            ref={textareaRef}
            id={fieldId}
            className="jd-modal-textarea"
            placeholder="e.g. We're looking for a Senior Engineer with 5+ years of…"
            value={draft}
            onChange={(e) => { setDraft(e.target.value); }}
            rows={14}
          />
          <div className="jd-modal-meta">
            <span>{wordCount(draft)} words</span>
            <span className="jd-modal-hint">⌘/Ctrl + Enter to save</span>
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
            disabled={!hasValue && !hadValue}
          >Save</button>
        </div>
      </div>
    </div>
  );
}
