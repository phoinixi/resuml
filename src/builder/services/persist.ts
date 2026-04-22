const STORAGE_KEY_YAML = 'resuml:yaml';
const STORAGE_KEY_THEME = 'resuml:theme';
const STORAGE_KEY_JD = 'resuml:jobDescription';

/** Strip stray HTML tags (e.g. <p>, </p>) that may have leaked into YAML values. */
function stripHtmlTags(yaml: string): string {
  return yaml.replace(/<\/?(?:p|br|div|span)(?:\s[^>]*)?\/?>/gi, '');
}

export function loadFromStorage(): { yaml: string | null; theme: string | null; jobDescription: string | null } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_YAML);
    return {
      yaml: raw ? stripHtmlTags(raw) : null,
      theme: localStorage.getItem(STORAGE_KEY_THEME),
      jobDescription: localStorage.getItem(STORAGE_KEY_JD),
    };
  } catch {
    return { yaml: null, theme: null, jobDescription: null };
  }
}

export function saveToStorage(yaml: string, theme: string, jobDescription: string): void {
  try {
    localStorage.setItem(STORAGE_KEY_YAML, yaml);
    localStorage.setItem(STORAGE_KEY_THEME, theme);
    // Empty JD → remove the key rather than storing '' (keeps storage tidy)
    if (jobDescription) localStorage.setItem(STORAGE_KEY_JD, jobDescription);
    else localStorage.removeItem(STORAGE_KEY_JD);
  } catch {
    // Quota exceeded or not available
  }
}

export async function loadFromUrlHash(): Promise<{ yaml: string; theme: string } | null> {
  if (window.location.hash.length <= 1) return null;
  try {
    const { decompress } = await import('../utils/urlCodec');
    const hash = window.location.hash.slice(1);
    const result = decompress(hash);
    if (result) {
      history.replaceState(null, '', window.location.pathname);
      return { ...result, yaml: stripHtmlTags(result.yaml) };
    }
  } catch {
    // Invalid hash
  }
  return null;
}
