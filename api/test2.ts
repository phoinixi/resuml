import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCors } from './_lib/cors';

export default async function handler(_req: VercelRequest, res: VercelResponse): Promise<void> {
  setCors(res, 'GET');
  res.status(200).json({ ok: true, origin: process.env['ALLOWED_ORIGIN'] });
}


