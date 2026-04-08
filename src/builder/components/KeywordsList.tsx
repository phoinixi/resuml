interface KeywordsListProps {
  keywords: readonly string[];
  onUpdate: (v: string[]) => void;
}

export function KeywordsList({ keywords, onUpdate }: KeywordsListProps) {
  return (
    <div className="form-field">
      <label className="form-label">Keywords</label>
      {keywords.map((kw, j) => (
        <div className="form-list-item" key={j}>
          <input
            type="text"
            className="form-input form-input-list"
            value={kw}
            onInput={(e) => { onUpdate(keywords.map((old, idx) => idx === j ? (e.target as HTMLInputElement).value : old)); }}
          />
          <button className="form-list-remove" onClick={() => { onUpdate(keywords.filter((_, idx) => idx !== j)); }}>×</button>
        </div>
      ))}
      <button className="form-add-btn" onClick={() => { onUpdate([...keywords, '']); }}>+ Add keyword</button>
    </div>
  );
}
