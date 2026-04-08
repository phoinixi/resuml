import { useState, useEffect, useMemo } from 'react';
import { fetchThemes } from '../services/api';
import type { ThemeInfo } from '../../shared/schemas';

interface ThemePickerProps {
  currentTheme: string;
  onSelect: (name: string) => void;
  onClose: () => void;
}

export function ThemePicker({ currentTheme, onSelect, onClose }: ThemePickerProps) {
  const [search, setSearch] = useState('');
  const [themes, setThemes] = useState<ThemeInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetchThemes(controller.signal)
      .then((data) => {
        setThemes(data);
        setLoading(false);
      })
      .catch((e: unknown) => {
        if (e instanceof Error && e.name === 'AbortError') return;
        setError(e instanceof Error ? e.message : 'Failed to load themes');
        setLoading(false);
      });

    return () => { controller.abort(); };
  }, []);

  const filtered = useMemo(() => {
    if (!search) return themes;
    const q = search.toLowerCase();
    return themes.filter((t) =>
      t.name.toLowerCase().includes(q) ||
      t.displayName.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q)
    );
  }, [themes, search]);

  return (
    <div className="theme-picker-overlay" onClick={(e) => {
      if ((e.target as HTMLElement).classList.contains('theme-picker-overlay')) onClose();
    }}>
      <div className="theme-picker">
        <div className="theme-picker-header">
          <h3>Choose Theme</h3>
          <button className="theme-picker-close" onClick={onClose}>×</button>
        </div>
        <div className="theme-picker-search">
          <input
            type="text"
            className="form-input"
            placeholder="Search themes..."
            value={search}
            onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
            autoFocus
          />
        </div>
        <div className="theme-picker-grid">
          {loading && (
            <div className="theme-picker-empty">Loading themes...</div>
          )}
          {error && (
            <div className="theme-picker-empty">Error: {error}</div>
          )}
          {!loading && !error && filtered.map((theme) => (
            <button
              key={theme.name}
              className={`theme-picker-card ${theme.name === currentTheme ? 'active' : ''}`}
              onClick={() => onSelect(theme.name)}
            >
              <div className="theme-picker-name">{theme.displayName}</div>
              {theme.description && (
                <div className="theme-picker-desc">{theme.description}</div>
              )}
              <div className="theme-picker-meta">v{theme.version}</div>
            </button>
          ))}
          {!loading && !error && filtered.length === 0 && (
            <div className="theme-picker-empty">No themes matching "{search}"</div>
          )}
        </div>
      </div>
    </div>
  );
}
