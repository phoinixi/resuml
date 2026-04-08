import type { VercelRequest, VercelResponse } from '@vercel/node';

// Inline CORS instead of importing from _lib
function setCors(res: VercelResponse): void {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(_req: VercelRequest, res: VercelResponse): Promise<void> {
  setCors(res);
  try {
    const url = 'https://registry.npmjs.org/-/v1/search?text=jsonresume-theme-&size=10';
    const response = await fetch(url);
    const data = await response.json() as { objects?: Array<{ package: { name: string } }> };
    const themes = (data.objects ?? []).map(o => o.package.name);
    res.status(200).json({ count: themes.length, themes: themes.slice(0, 3) });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
}



