import { createHash } from 'crypto';

const store = new Map<string, { value: string; expires: number }>();
const MAX_ENTRIES = 200;

export function cacheKey(theme: string, resumeJson: string): string {
  return createHash('sha256').update(`${theme}:${resumeJson}`).digest('hex');
}

export function getCached(key: string): string | null {
  const entry = store.get(key);
  if (!entry) return null;
  if (entry.expires < Date.now()) {
    store.delete(key);
    return null;
  }
  return entry.value;
}

export function setCached(key: string, value: string, ttlMs: number): void {
  store.set(key, { value, expires: Date.now() + ttlMs });
  evictExpired();
}

function evictExpired(): void {
  if (store.size <= MAX_ENTRIES) return;
  const now = Date.now();
  for (const [k, v] of store) {
    if (v.expires < now) store.delete(k);
  }
}
