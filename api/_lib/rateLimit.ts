const RATE_LIMIT = 60;
const RATE_WINDOW = 60 * 1000; // 1 minute

const buckets = new Map<string, { count: number; windowStart: number }>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = buckets.get(ip);
  if (!entry || now - entry.windowStart > RATE_WINDOW) {
    buckets.set(ip, { count: 1, windowStart: now });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export function getClientIp(headers: Record<string, string | string[] | undefined>, remoteAddress?: string): string {
  const forwarded = headers['x-forwarded-for'];
  if (typeof forwarded === 'string') return forwarded.split(',')[0]?.trim() ?? 'unknown';
  return remoteAddress || 'unknown';
}
