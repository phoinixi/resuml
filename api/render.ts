import type { VercelRequest, VercelResponse } from '@vercel/node';
import { RenderRequestSchema } from '../src/shared/schemas';
import { setCors, setSecurityHeaders } from './_lib/cors';
import { getClientIp, isRateLimited } from './_lib/rateLimit';
import { cacheKey, getCached, setCached } from './_lib/cache';
import { renderWithTheme } from './_lib/themeInstaller';

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const MAX_BODY_SIZE = 512 * 1024; // 512 KB

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  setCors(res, 'POST');
  setSecurityHeaders(res);

  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  // Body size guard
  const contentLength = parseInt(req.headers['content-length'] ?? '0', 10);
  if (contentLength > MAX_BODY_SIZE) {
    res.status(413).json({ error: 'Request body too large' });
    return;
  }

  const ip = getClientIp(req.headers, req.socket?.remoteAddress);
  if (isRateLimited(ip)) {
    res.status(429).json({ error: 'Rate limit exceeded. Try again in a minute.' });
    return;
  }

  const parsed = RenderRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues[0]?.message ?? 'Invalid request' });
    return;
  }

  const { resume, theme } = parsed.data;

  try {
    const resumeJson = JSON.stringify(resume);
    const key = cacheKey(theme, resumeJson);

    const cached = getCached(key);
    if (cached !== null) {
      res.setHeader('X-Cache', 'HIT');
      res.status(200).send(cached);
      return;
    }

    const html = renderWithTheme(theme, resume);

    setCached(key, html, CACHE_TTL);

    res.setHeader('X-Cache', 'MISS');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Render failed';
    res.status(500).json({ error: message });
  }
}
