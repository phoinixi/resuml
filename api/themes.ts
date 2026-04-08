import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCors, setSecurityHeaders } from './_lib/cors.js';
import { fetchThemeList, isThemeListCached } from './_lib/themeRegistry.js';

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  setCors(res, 'GET');
  setSecurityHeaders(res);

  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'GET') { res.status(405).json({ error: 'Method not allowed' }); return; }

  try {
    const isCached = isThemeListCached();
    const themes = await fetchThemeList();

    res.setHeader('X-Cache', isCached ? 'HIT' : 'MISS');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).json(themes);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to fetch themes';
    res.status(500).json({ error: message });
  }
}
