import { useState, useEffect, useMemo, useId } from 'react';
import { X, AlertTriangle, Zap, Eye, Download } from 'lucide-react';
import { fetchThemes, getThemeCapability } from '../services/api';
import type { NpmTheme } from '../services/api';

interface ThemePickerProps {
  currentTheme: string;
  onSelect: (name: string) => void;
  onClose: () => void;
}

function formatDownloads(n: number): string {
  if (!n || n < 1) return '';
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 10_000) return `${Math.round(n / 1000)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export function ThemePicker({ currentTheme, onSelect, onClose }: ThemePickerProps) {
  const [search, setSearch] = useState('');
  const [themes, setThemes] = useState<NpmTheme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showBroken, setShowBroken] = useState(false);
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
    const q = search.toLowerCase();
    return themes.filter((t) => {
      if (!showBroken) {
        const cap = getThemeCapability(t.name);
        if (cap === 'broken' || cap === 'snapshot-only' || cap === 'unavailable') return false;
      }
      if (!q) return true;
      return (
        t.name.toLowerCase().includes(q) ||
        t.displayName.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
      );
    });
  }, [themes, search, showBroken]);

  const hiddenCount = themes.length - filtered.length;

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
          <label className="theme-picker-toggle">
            <input
              type="checkbox"
              checked={showBroken}
              onChange={(e) => { setShowBroken(e.target.checked); }}
            />
            <span>Show all ({hiddenCount} hidden — don't render cleanly)</span>
          </label>
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
            const isDisabled = capability === 'unavailable';
            const downloads = formatDownloads(theme.weeklyDownloads);
            const title = [
              theme.description,
              theme.weeklyDownloads ? `${theme.weeklyDownloads.toLocaleString()} weekly npm downloads` : null,
              theme.version ? `v${theme.version}` : null,
            ].filter(Boolean).join(' • ');
            return (
              <div
                key={theme.name}
                role="button"
                tabIndex={isDisabled ? -1 : 0}
                className={`theme-picker-card ${theme.name === currentTheme ? 'active' : ''} ${isDisabled ? 'theme-picker-card-disabled' : ''} ${capability === 'broken' ? 'theme-picker-card-broken' : ''}`}
                onClick={() => { if (!isDisabled) onSelect(theme.name); }}
                onKeyDown={(e) => {
                  if (isDisabled) return;
                  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(theme.name); }
                }}
                aria-pressed={theme.name === currentTheme}
                aria-disabled={isDisabled}
                title={title}
              >
                <span className="theme-picker-thumb">
                  <img
                    src={`themes/${theme.name}.thumb.jpg`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                </span>
                <span className="theme-picker-footer">
                  <span className="theme-picker-name">
                    <span className="theme-picker-name-text">{theme.displayName}</span>
                    {capability === 'browser' && (
                      <Zap size={12} className="theme-badge-instant" aria-label="Renders instantly in browser" />
                    )}
                    {capability === 'broken' && (
                      <AlertTriangle size={12} className="theme-badge-broken" aria-label="Known to fail at render" />
                    )}
                    {capability === 'snapshot-only' && (
                      <Eye size={12} className="theme-badge-preview" aria-label="Preview only — thumbnail in picker, no live render" />
                    )}
                  </span>
                  <span className="theme-picker-downloads" title={`${theme.weeklyDownloads.toLocaleString()} weekly npm downloads`}>
                    <Download size={10} aria-hidden="true" /> {downloads || '—'}/wk
                  </span>
                </span>
              </div>
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
