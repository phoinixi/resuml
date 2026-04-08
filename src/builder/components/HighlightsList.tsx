interface HighlightsListProps {
  highlights: readonly string[];
  onUpdate: (v: string[]) => void;
}

export function HighlightsList({ highlights, onUpdate }: HighlightsListProps) {
  return (
    <div className="form-field">
      <label className="form-label">Highlights</label>
      {highlights.map((h, j) => (
        <div className="form-list-item" key={j}>
          <input
            type="text"
            className="form-input form-input-list"
            value={h}
            onInput={(e) => { onUpdate(highlights.map((old, idx) => idx === j ? (e.target as HTMLInputElement).value : old)); }}
          />
          <button className="form-list-remove" onClick={() => { onUpdate(highlights.filter((_, idx) => idx !== j)); }}>×</button>
        </div>
      ))}
      <button className="form-add-btn" onClick={() => { onUpdate([...highlights, '']); }}>+ Add highlight</button>
    </div>
  );
}
