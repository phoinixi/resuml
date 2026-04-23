import { useEffect, useRef } from 'react';
import { loadFromStorage, saveToStorage, loadFromUrlHash } from '../services/persist';

export function usePersist(
  yaml: string,
  themeName: string,
  jobDescription: string,
  setYaml: (yaml: string) => void,
  setThemeName: (name: string) => void,
  setJobDescription: (jd: string) => void,
) {
  const initialized = useRef(false);
  const saveTimer = useRef<number | null>(null);

  // Restore on mount
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    loadFromUrlHash()
      .then((result) => {
        if (result) {
          setYaml(result.yaml);
          if (result.theme) setThemeName(result.theme);
          // URL-shared resumes don't carry JD, fall through to localStorage
          const stored = loadFromStorage();
          if (stored.jobDescription) setJobDescription(stored.jobDescription);
          return;
        }
        const stored = loadFromStorage();
        if (stored.yaml) setYaml(stored.yaml);
        if (stored.theme) setThemeName(stored.theme);
        if (stored.jobDescription) setJobDescription(stored.jobDescription);
      })
      .catch(() => {
        const stored = loadFromStorage();
        if (stored.yaml) setYaml(stored.yaml);
        if (stored.theme) setThemeName(stored.theme);
        if (stored.jobDescription) setJobDescription(stored.jobDescription);
      });
  }, []);

  // Save on change (debounced)
  useEffect(() => {
    if (!initialized.current) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => {
      saveToStorage(yaml, themeName, jobDescription);
    }, 1000);
  }, [yaml, themeName, jobDescription]);
}
