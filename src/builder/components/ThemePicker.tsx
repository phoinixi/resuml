import { h } from 'preact';
import { useState, useEffect, useMemo } from 'preact/hooks';

interface ThemePickerProps {
  currentTheme: string;
  onSelect: (name: string) => void;
  onClose: () => void;
}

interface ThemeMeta {
  name: string;
  displayName: string;
  description?: string;
  browserCompatible: boolean;
}

// Built-in themes that we list. browserCompatible will be updated from manifest.
const BUILTIN_THEMES: ThemeMeta[] = [
  { name: 'stackoverflow', displayName: 'Stack Overflow', description: 'Popular developer-focused theme with dark mode', browserCompatible: true },
  { name: 'elegant', displayName: 'Elegant', description: 'Clean and professional', browserCompatible: false },
  { name: 'even', displayName: 'Even', description: 'Simple and balanced layout', browserCompatible: false },
  { name: 'kendall', displayName: 'Kendall', description: 'Modern and minimal', browserCompatible: false },
  { name: 'flat', displayName: 'Flat', description: 'Flat design aesthetic', browserCompatible: false },
  { name: 'macchiato', displayName: 'Macchiato', description: 'Warm, coffee-inspired tones', browserCompatible: false },
  { name: 'class', displayName: 'Class', description: 'Classic resume style', browserCompatible: false },
  { name: 'paper', displayName: 'Paper', description: 'Clean paper-like look', browserCompatible: false },
  { name: 'spartan', displayName: 'Spartan', description: 'Minimalist with strong typography', browserCompatible: false },
  { name: 'short', displayName: 'Short', description: 'Compact single-page layout', browserCompatible: false },
];

export function ThemePicker({ currentTheme, onSelect, onClose }: ThemePickerProps) {
  const [search, setSearch] = useState('');
  const [themes, setThemes] = useState<ThemeMeta[]>(BUILTIN_THEMES);

  // Try to load manifest from bundled themes
  useEffect(() => {
    fetch('./themes/manifest.json')
      .then((r) => r.ok ? r.json() : null)
      .then((manifest: ThemeMeta[] | null) => {
        if (manifest && Array.isArray(manifest) && manifest.length > 0) {
          // Merge: manifest themes override built-in, then append any
          // built-in themes not in manifest
          const manifestMap = new Map(manifest.map(t => [t.name, t]));
          const merged: ThemeMeta[] = [];

          // First add all manifest themes (in order)
          for (const mt of manifest) {
            merged.push(mt);
          }

          // Then add built-in themes not in manifest
          for (const bt of BUILTIN_THEMES) {
            if (!manifestMap.has(bt.name)) {
              merged.push(bt);
            }
          }

          setThemes(merged);
        }
      })
      .catch(() => { /* Keep built-in list */ });
  }, []);

  const filtered = useMemo(() => {
    if (!search) return themes;
    const q = search.toLowerCase();
    return themes.filter((t) =>
      t.name.toLowerCase().includes(q) ||
      t.displayName.toLowerCase().includes(q) ||
      (t.description || '').toLowerCase().includes(q)
    );
  }, [themes, search]);

  return (
    <div class="theme-picker-overlay" onClick={(e) => {
      if ((e.target as HTMLElement).classList.contains('theme-picker-overlay')) onClose();
    }}>
      <div class="theme-picker">
        <div class="theme-picker-header">
          <h3>Choose Theme</h3>
          <button class="theme-picker-close" onClick={onClose}>×</button>
        </div>
        <div class="theme-picker-search">
          <input
            type="text"
            class="form-input"
            placeholder="Search themes..."
            value={search}
            onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
        </div>
        <div class="theme-picker-grid">
          {filtered.map((theme) => (
            <button
              key={theme.name}
              class={`theme-picker-card ${theme.name === currentTheme ? 'active' : ''}`}
              onClick={() => onSelect(theme.name)}
            >
              <div class="theme-picker-name">{theme.displayName}</div>
              {theme.description && (
                <div class="theme-picker-desc">{theme.description}</div>
              )}
              {!theme.browserCompatible && (
                <div class="theme-picker-cli">Uses built-in renderer</div>
              )}
            </button>
          ))}
          {filtered.length === 0 && (
            <div class="theme-picker-empty">No themes matching "{search}"</div>
          )}
        </div>
      </div>
    </div>
  );
}
