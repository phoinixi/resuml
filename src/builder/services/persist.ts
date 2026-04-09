const STORAGE_KEY_YAML = 'resuml:yaml';
const STORAGE_KEY_THEME = 'resuml:theme';

/** Strip stray HTML tags (e.g. <p>, </p>) that may have leaked into YAML values. */
function stripHtmlTags(yaml: string): string {
  return yaml.replace(/<\/?(?:p|br|div|span)(?:\s[^>]*)?\/?>/gi, '');
}

export function loadFromStorage(): { yaml: string | null; theme: string | null } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_YAML);
    return {
      yaml: raw ? stripHtmlTags(raw) : null,
      theme: localStorage.getItem(STORAGE_KEY_THEME),
    };
  } catch {
    return { yaml: null, theme: null };
  }
}

export function saveToStorage(yaml: string, theme: string): void {
  try {
    localStorage.setItem(STORAGE_KEY_YAML, yaml);
    localStorage.setItem(STORAGE_KEY_THEME, theme);
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
