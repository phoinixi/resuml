import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(_req: VercelRequest, res: VercelResponse): Promise<void> {
  try {
    const url = 'https://registry.npmjs.org/-/v1/search?text=jsonresume-theme-&size=5';
    const response = await fetch(url);
    const data = await response.json() as { objects?: unknown[] };
    res.status(200).json({ count: data.objects?.length });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
}

