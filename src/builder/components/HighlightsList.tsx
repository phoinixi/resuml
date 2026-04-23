import { Plus, X } from 'lucide-react';
import { SortableList } from './SortableList';

interface HighlightsListProps {
  highlights: readonly string[];
  onUpdate: (v: string[]) => void;
}

// Check if a highlight starts with a strong action verb (partial overlap with
// src/ats/i18n/en.ts — kept short here for an inline in-editor hint).
const ACTION_VERB_HINT = /^(Led|Led\s|Built|Designed|Developed|Shipped|Launched|Owned|Drove|Grew|Reduced|Improved|Increased|Mentored|Managed|Automated|Implemented|Refactored|Scaled|Architected|Optimized|Optimised|Migrated|Coordinated|Delivered|Created|Partnered|Established|Raised|Standardi[sz]ed|Spearheaded|Introduced|Rolled)/;
const METRIC_HINT = /\d/;

export function HighlightsList({ highlights, onUpdate }: HighlightsListProps) {
  const setAt = (j: number, v: string) => {
    onUpdate(highlights.map((old, idx) => (idx === j ? v : old)));
  };
  const removeAt = (j: number) => {
    onUpdate(highlights.filter((_, idx) => idx !== j));
  };
  return (
    <div className="form-field">
      <label className="form-label">Highlights</label>
      <SortableList
        items={highlights}
        keyOf={(_, i) => `hl-${i}`}
        onReorder={(next) => { onUpdate([...next]); }}
        ariaLabel="Reorder highlights"
        renderItem={(h, j, handle) => {
          const weakStart = h.trim().length > 0 && !ACTION_VERB_HINT.test(h.trim());
          const noMetric = h.trim().length > 8 && !METRIC_HINT.test(h);
          return (
            <div className="form-list-item">
              {handle}
              <input
                type="text"
                className="form-input form-input-list"
                value={h}
                placeholder="e.g. Reduced API latency by 40% by adding caching"
                onInput={(e) => { setAt(j, (e.target as HTMLInputElement).value); }}
              />
              <button
                type="button"
                className="form-list-remove"
                aria-label="Remove highlight"
                onClick={() => { removeAt(j); }}
              ><X size={14} aria-hidden="true" /></button>
              {(weakStart || noMetric) && (
                <span className="form-field-hints">
                  {weakStart && <span className="form-field-hint">starts weak — try an action verb</span>}
                  {noMetric && <span className="form-field-hint">consider adding a metric</span>}
                </span>
              )}
            </div>
          );
        }}
      />
      <button type="button" className="form-add-btn" onClick={() => { onUpdate([...highlights, '']); }}>
        <Plus size={12} aria-hidden="true" /> Add highlight
      </button>
    </div>
  );
}
