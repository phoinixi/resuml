import { Plus, X } from 'lucide-react';
import { SortableList } from './SortableList';

interface KeywordsListProps {
  keywords: readonly string[];
  onUpdate: (v: string[]) => void;
}

export function KeywordsList({ keywords, onUpdate }: KeywordsListProps) {
  return (
    <div className="form-field">
      <label className="form-label">Keywords</label>
      <SortableList
        items={keywords}
        keyOf={(_, i) => `kw-${i}`}
        onReorder={(next) => { onUpdate([...next]); }}
        ariaLabel="Reorder keywords"
        renderItem={(kw, j, handle) => (
          <div className="form-list-item">
            {handle}
            <input
              type="text"
              className="form-input form-input-list"
              value={kw}
              placeholder="e.g. TypeScript"
              onInput={(e) => { onUpdate(keywords.map((old, idx) => (idx === j ? (e.target as HTMLInputElement).value : old))); }}
            />
            <button type="button" className="form-list-remove" aria-label="Remove"
              onClick={() => { onUpdate(keywords.filter((_, idx) => idx !== j)); }}
            ><X size={14} aria-hidden="true" /></button>
          </div>
        )}
      />
      <button type="button" className="form-add-btn" onClick={() => { onUpdate([...keywords, '']); }}>
        <Plus size={12} aria-hidden="true" /> Add keyword
      </button>
    </div>
  );
}
