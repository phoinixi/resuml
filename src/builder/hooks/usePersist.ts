import { useEffect, useRef } from 'preact/hooks';

const STORAGE_KEY_YAML = 'resuml:yaml';
const STORAGE_KEY_THEME = 'resuml:theme';

export function usePersist(
  yaml: string,
  themeName: string,
  setYaml: (yaml: string) => void,
  setThemeName: (name: string) => void,
) {
  const initialized = useRef(false);

  // Restore on mount
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // First check URL hash for shared state
    if (window.location.hash.length > 1) {
      try {
        import('../utils/urlCodec').then(({ decompress }) => {
          const hash = window.location.hash.slice(1);
          const result = decompress(hash);
          if (result) {
            setYaml(result.yaml);
            if (result.theme) setThemeName(result.theme);
            // Clear hash after restoring
            history.replaceState(null, '', window.location.pathname);
          }
        }).catch(() => {});
        return;
      } catch {
        // Fall through to localStorage
      }
    }

    // Restore from localStorage
    try {
      const savedYaml = localStorage.getItem(STORAGE_KEY_YAML);
      const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
      if (savedYaml) setYaml(savedYaml);
      if (savedTheme) setThemeName(savedTheme);
    } catch {
      // localStorage might not be available
    }
  }, []);

  // Save on change (debounced)
  const saveTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!initialized.current) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY_YAML, yaml);
        localStorage.setItem(STORAGE_KEY_THEME, themeName);
      } catch {
        // Quota exceeded or not available
      }
    }, 1000);
  }, [yaml, themeName]);
}
