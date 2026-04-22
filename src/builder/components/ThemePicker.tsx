import { useState, useEffect, useMemo, useId } from 'react';
import { X } from 'lucide-react';
import { fetchThemes, getThemeCapability } from '../services/api';
import type { NpmTheme } from '../services/api';

interface ThemePickerProps {
  currentTheme: string;
  onSelect: (name: string) => void;
  onClose: () => void;
}

export function ThemePicker({ currentTheme, onSelect, onClose }: ThemePickerProps) {
  const [search, setSearch] = useState('');
  const [themes, setThemes] = useState<NpmTheme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const titleId = useId();

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); };
  }, [onClose]);

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
    <div
      className="theme-picker-overlay"
      onClick={(e) => {
        if ((e.target as HTMLElement).classList.contains('theme-picker-overlay')) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="theme-picker">
        <div className="theme-picker-header">
          <h3 id={titleId}>Choose Theme</h3>
          <button
            className="theme-picker-close"
            onClick={onClose}
            aria-label="Close theme picker"
          ><X size={18} aria-hidden="true" /></button>
        </div>
        <div className="theme-picker-search">
          <input
            type="text"
            className="form-input"
            placeholder="Search themes..."
            value={search}
            onInput={(e) => { setSearch((e.target as HTMLInputElement).value); }}
            aria-label="Search themes"
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
          {!loading && !error && filtered.map((theme) => {
            const capability = getThemeCapability(theme.name);
            const isDisabled = capability === 'server';
            return (
              <button
                key={theme.name}
                className={`theme-picker-card ${theme.name === currentTheme ? 'active' : ''} ${isDisabled ? 'theme-picker-card-disabled' : ''}`}
                onClick={() => { if (!isDisabled) onSelect(theme.name); }}
                disabled={isDisabled}
                aria-pressed={theme.name === currentTheme}
              >
                <div className="theme-picker-name">
                  {theme.displayName}
                  {capability === 'browser' && <span className="theme-badge-instant" title="Instant — renders in browser" aria-label="Renders instantly in browser">⚡</span>}
                  {capability === 'snapshot-only' && <span className="theme-badge-preview" title="Preview only — shows sample data" aria-label="Preview only, shows sample data">👁</span>}
                </div>
                {theme.description && (
                  <div className="theme-picker-desc">{theme.description}</div>
                )}
                <div className="theme-picker-meta">
                  {theme.version ? `v${theme.version}` : ''}
                  {capability === 'snapshot-only' && <span className="theme-meta-note"> (preview only)</span>}
                  {capability === 'server' && <span className="theme-meta-note"> (unavailable)</span>}
                </div>
              </button>
            );
          })}
          {!loading && !error && filtered.length === 0 && (
            <div className="theme-picker-empty">No themes matching &quot;{search}&quot;</div>
          )}
        </div>
      </div>
    </div>
  );
}
