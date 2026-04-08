import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PdfRequestSchema } from '../src/shared/schemas.js';
import { setCors, setSecurityHeaders } from './_lib/cors.js';
import { getClientIp, isRateLimited } from './_lib/rateLimit.js';
import { renderWithTheme } from './_lib/themeInstaller.js';

const MAX_BODY_SIZE = 512 * 1024; // 512 KB

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  setCors(res, 'POST');
  setSecurityHeaders(res);

  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  const contentLength = parseInt(req.headers['content-length'] ?? '0', 10);
  if (contentLength > MAX_BODY_SIZE) {
    res.status(413).json({ error: 'Request body too large' });
    return;
  }

  const ip = getClientIp(req.headers, req.socket.remoteAddress);
  if (isRateLimited(ip)) {
    res.status(429).json({ error: 'Rate limit exceeded. Try again in a minute.' });
    return;
  }

  const parsed = PdfRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues[0]?.message ?? 'Invalid request' });
    return;
  }

  const { resume, theme, format, margin } = parsed.data;

  try {
    const html = await renderWithTheme(theme, resume);

    const { chromium } = await import('playwright-core');
    const browser = await chromium.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'networkidle' });

      const pdfMargin = margin ?? { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' };

      const pdfBuffer = await page.pdf({
        format,
        margin: pdfMargin,
        printBackground: true,
        preferCSSPageSize: true,
      });

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"');
      res.status(200).send(Buffer.from(pdfBuffer));
    } finally {
      await browser.close();
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'PDF generation failed';
    res.status(500).json({ error: message });
  }
}
