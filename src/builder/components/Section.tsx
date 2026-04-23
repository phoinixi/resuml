import { useState, useId, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface SectionProps {
  title: string;
  /** Shown as a muted badge in the header, usually the count of items. */
  count?: number;
  children: ReactNode;
  /** Force-open on mount regardless of `hasContent`. */
  defaultOpen?: boolean;
  /**
   * Smart default: when true, the section opens on mount to reveal the
   * existing entries. Pass `resume.work.length > 0`, etc. When false (and
   * no defaultOpen), the section stays collapsed with its "Add …" CTA
   * visible only after expanding.
   */
  hasContent?: boolean;
}

export function Section({ title, count, children, defaultOpen = false, hasContent = false }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen || hasContent);
  const bodyId = useId();
  return (
    <div className={`form-section${open ? ' open' : ''}`}>
      <button
        type="button"
        className="form-section-header"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => { setOpen(!open); }}
      >
        <span className="form-section-title">
          {title}
          {typeof count === 'number' && count > 0 && (
            <span className="form-section-count">{count}</span>
          )}
        </span>
        <ChevronDown size={16} className="form-section-chevron" aria-hidden="true" />
      </button>
      {open && <div id={bodyId} className="form-section-body">{children}</div>}
    </div>
  );
}
