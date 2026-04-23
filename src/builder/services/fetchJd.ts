/**
 * Detect whether a string is a plain URL the user pasted in, vs. an actual
 * job description. A single-line value starting with http(s) is treated as a
 * URL; anything with multiple lines or surrounding prose is left as text.
 */
export function isJdUrl(input: string): boolean {
  const trimmed = input.trim();
  if (!trimmed) return false;
  if (trimmed.includes('\n')) return false;
  if (!/^https?:\/\//i.test(trimmed)) return false;
  try {
    const u = new URL(trimmed);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

export interface FetchedJd {
  text: string;
  title?: string;
  source: string;
}

function getApiBase(): string {
  if (typeof window === 'undefined') return '';
  const { hostname } = window.location;
  if (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname.endsWith('.vercel.app') ||
    hostname === 'resuml.app' ||
    hostname.endsWith('.resuml.app')
  ) {
    return '';
  }
  return 'https://resuml.app';
}

export async function fetchJdFromUrl(url: string, signal?: AbortSignal): Promise<FetchedJd> {
  const r = await fetch(`${getApiBase()}/api/fetch-jd`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
    signal,
  });
  const data = (await r.json()) as { text?: string; title?: string; source?: string; error?: string };
  if (!r.ok) throw new Error(data.error ?? `Fetch failed (${r.status})`);
  if (!data.text) throw new Error('No job description text returned');
  return { text: data.text, title: data.title, source: data.source ?? url };
}
