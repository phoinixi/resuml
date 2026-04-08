import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCors } from './_lib/cors';
import { fetchThemeList } from './_lib/themeRegistry';

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  setCors(res, 'GET');
  try {
    const themes = await fetchThemeList();
    res.status(200).json({ count: themes.length, first: themes[0]?.name });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
}
