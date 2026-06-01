const DEFAULT_UA = 'resuml-jobs/1.0 (+https://github.com/phoinixi/resuml)';

export interface FetchOptions {
  timeoutMs: number;
  accept?: string;
}

export async function fetchText(url: string, opts: FetchOptions): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort();
  }, opts.timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': DEFAULT_UA,
        Accept: opts.accept ?? 'application/json, text/plain;q=0.9, */*;q=0.5',
      },
    });
    if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchJson<T>(url: string, opts: FetchOptions): Promise<T> {
  const text = await fetchText(url, { ...opts, accept: 'application/json' });
  return JSON.parse(text) as T;
}
