import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCors, setSecurityHeaders } from './_lib/cors.js';

/**
 * Fetches a job posting URL and extracts its description text, so users can
 * paste a link to a LinkedIn / Indeed / Greenhouse / Lever job instead of
 * copying the whole description by hand.
 *
 * Privacy notes:
 *   - This is the one place the app hits a server for the user's workflow.
 *     No resume data is involved. Only the URL the user pastes.
 *   - No logs or persistence. The URL is fetched once and the text is
 *     returned straight to the browser.
 *
 * SSRF hardening: only http/https, and the URL host must resolve to a
 * public (non-loopback, non-private) address range as a string check on
 * the hostname. Vercel functions already run outside the VPC, but we
 * still refuse obvious internal targets.
 */

const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15';

const MAX_BYTES = 2_000_000; // 2 MB cap on fetched HTML
const FETCH_TIMEOUT_MS = 12_000;

interface FetchJdResult {
  text: string;
  title?: string;
  source: string;
  warning?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  setCors(res, 'GET,POST');
  setSecurityHeaders(res);

  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const rawUrl =
    req.method === 'POST'
      ? (req.body as { url?: unknown })?.url
      : (req.query['url'] as string | undefined);

  if (typeof rawUrl !== 'string' || !rawUrl.trim()) {
    res.status(400).json({ error: 'Missing "url" parameter' });
    return;
  }

  let parsed: URL;
  try {
    parsed = new URL(rawUrl.trim());
  } catch {
    res.status(400).json({ error: 'Not a valid URL' });
    return;
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    res.status(400).json({ error: 'Only http:// and https:// URLs are supported' });
    return;
  }
  if (isInternalHostname(parsed.hostname)) {
    res.status(400).json({ error: 'Refusing to fetch internal/private hosts' });
    return;
  }

  const normalized = normalizeJobUrl(parsed);

  try {
    let result: FetchJdResult;
    try {
      result = await fetchAndExtract(normalized);
    } catch (fastErr: unknown) {
      // The static fetch returned a SPA shell (Gem, Ashby, Workday, some
      // SmartRecruiters widgets). Fall back to a headless-browser fetch so
      // JS-rendered pages still work.
      if (shouldTryHeadless(fastErr)) {
        result = await fetchWithHeadless(normalized);
      } else {
        throw fastErr;
      }
    }
    res.setHeader('Cache-Control', 'public, max-age=600');
    res.status(200).json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch URL';
    res.status(502).json({ error: message, source: normalized.toString() });
  }
}

const SPA_ERROR_MARKER = '__SPA__';

function shouldTryHeadless(err: unknown): boolean {
  if (!(err instanceof Error)) return false;
  return err.message.includes(SPA_ERROR_MARKER);
}

/**
 * Rewrite job-board URLs to their canonical public form.
 * LinkedIn: `.../jobs/collections/recommended/?currentJobId=X` becomes
 * `/jobs/view/X`, which works without authentication in most cases.
 */
function normalizeJobUrl(url: URL): URL {
  const host = url.hostname.replace(/^www\./, '');
  if (host.endsWith('linkedin.com')) {
    const id = url.searchParams.get('currentJobId');
    if (id && /^\d+$/.test(id)) {
      return new URL(`https://www.linkedin.com/jobs/view/${id}`);
    }
  }
  return url;
}

function isInternalHostname(host: string): boolean {
  const h = host.toLowerCase();
  if (h === 'localhost' || h.endsWith('.local') || h.endsWith('.internal')) return true;
  if (h === '127.0.0.1' || h === '::1' || h === '0.0.0.0') return true;
  // Block obvious private IPv4 ranges by prefix
  if (/^10\./.test(h) || /^192\.168\./.test(h)) return true;
  if (/^172\.(1[6-9]|2\d|3[01])\./.test(h)) return true;
  // Link-local
  if (/^169\.254\./.test(h)) return true;
  return false;
}

async function fetchAndExtract(url: URL): Promise<FetchJdResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => { controller.abort(); }, FETCH_TIMEOUT_MS);

  let html: string;
  try {
    const r = await fetch(url.toString(), {
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        'User-Agent': USER_AGENT,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });
    if (!r.ok) {
      throw new Error(`Upstream returned ${r.status}. The page may require a login or was moved.`);
    }
    const buffer = await r.arrayBuffer();
    if (buffer.byteLength > MAX_BYTES) {
      throw new Error('Page is too large to process');
    }
    html = new TextDecoder('utf-8').decode(buffer);
  } finally {
    clearTimeout(timer);
  }

  const extracted = extractJobDescription(html, url);
  if (!extracted.text || extracted.text.split(/\s+/).length < 20) {
    // Very short HTML with no structured content is almost certainly a
    // JS-rendered SPA shell. Tag the error so the caller knows to retry
    // with a headless browser.
    const looksLikeSpa = html.length < 20_000 && !/application\/ld\+json/i.test(html);
    if (looksLikeSpa) {
      throw new Error(`${SPA_ERROR_MARKER} SPA shell detected`);
    }
    const host = url.hostname.replace(/^www\./, '');
    const hint = host.endsWith('linkedin.com')
      ? 'LinkedIn likely showed a login or anti-bot page. Open the job in an incognito window, copy the description, and paste it here.'
      : 'The page did not return a readable job description. Paste the description text here instead.';
    throw new Error(hint);
  }
  return { ...extracted, source: url.toString() };
}

/**
 * Fallback path for SPAs: boot a headless Chromium, navigate to the URL,
 * wait for the page to settle, then extract rendered text. Heavier (cold
 * starts a browser process) so it's only used when the static fetch hits
 * an empty SPA shell.
 */
async function fetchWithHeadless(url: URL): Promise<FetchJdResult> {
  const [{ default: chromium }, { chromium: playwright }] = await Promise.all([
    import('@sparticuz/chromium'),
    import('playwright-core'),
  ]);

  const browser = await playwright.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true,
  });
  try {
    const page = await browser.newPage({ userAgent: USER_AGENT });
    await page.goto(url.toString(), { waitUntil: 'networkidle', timeout: 20_000 });
    // Give late-mounting React/Svelte apps one more tick to commit.
    await page.waitForTimeout(800);
    const html = await page.content();
    const extracted = extractJobDescription(html, url);
    if (!extracted.text || extracted.text.split(/\s+/).length < 20) {
      // Last-resort: pull visible text directly from the live DOM so we
      // aren't bound by the static selectors.
      const bodyText: string = await page.evaluate(() => {
        const el = (document.querySelector('main, article') ?? document.body) as HTMLElement | null;
        return (el?.innerText ?? '').trim();
      });
      if (bodyText.split(/\s+/).length >= 20) {
        return { text: bodyText, title: extracted.title, source: url.toString() };
      }
      throw new Error(
        'The page rendered, but did not contain readable job description text. Paste the description here instead.',
      );
    }
    return { ...extracted, source: url.toString() };
  } finally {
    await browser.close().catch(() => { /* best effort */ });
  }
}

/**
 * Pull the most job-description-shaped text out of an HTML page.
 *  1. First look for site-specific selectors (LinkedIn, Greenhouse, Lever, Workable, Indeed).
 *  2. Fall back to <main>, <article>, or the body.
 *  3. Strip script/style, convert tags to whitespace, decode entities,
 *     collapse whitespace.
 */
function extractJobDescription(html: string, url: URL): { text: string; title?: string } {
  const title = extractTitle(html);
  const host = url.hostname.replace(/^www\./, '');

  const candidates: RegExp[] = [];

  if (host.endsWith('linkedin.com')) {
    candidates.push(
      /<div[^>]+class="[^"]*show-more-less-html__markup[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
      /<section[^>]+class="[^"]*description[^"]*"[^>]*>([\s\S]*?)<\/section>/i,
    );
  }
  if (host.endsWith('greenhouse.io') || host.endsWith('boards.greenhouse.io')) {
    candidates.push(/<div[^>]+id=["']content["'][^>]*>([\s\S]*?)<\/div>/i);
  }
  if (host.endsWith('lever.co') || host.endsWith('jobs.lever.co')) {
    candidates.push(/<div[^>]+class="[^"]*posting-page[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
  }
  if (host.endsWith('indeed.com')) {
    candidates.push(/<div[^>]+id=["']jobDescriptionText["'][^>]*>([\s\S]*?)<\/div>/i);
  }
  if (host.endsWith('workable.com') || host.endsWith('apply.workable.com')) {
    candidates.push(/<section[^>]+data-ui=["']job-description["'][^>]*>([\s\S]*?)<\/section>/i);
  }

  // Generic fallbacks
  candidates.push(
    /<main\b[^>]*>([\s\S]*?)<\/main>/i,
    /<article\b[^>]*>([\s\S]*?)<\/article>/i,
  );

  for (const re of candidates) {
    const m = re.exec(html);
    if (m?.[1]) {
      const text = htmlToText(m[1]);
      if (text.split(/\s+/).length >= 20) return { text, title };
    }
  }

  // Last resort: og:description or the whole body, minus nav/footer.
  const og = /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i.exec(html);
  if (og?.[1]) {
    const ogText = decodeEntities(og[1]).trim();
    if (ogText.split(/\s+/).length >= 20) return { text: ogText, title };
  }

  const body = /<body\b[^>]*>([\s\S]*?)<\/body>/i.exec(html);
  if (body?.[1]) {
    let b = body[1];
    b = b.replace(/<(nav|header|footer|aside)\b[\s\S]*?<\/\1>/gi, ' ');
    return { text: htmlToText(b), title };
  }

  return { text: htmlToText(html), title };
}

function extractTitle(html: string): string | undefined {
  const m = /<title>([\s\S]*?)<\/title>/i.exec(html);
  if (!m?.[1]) return undefined;
  const t = decodeEntities(m[1]).replace(/\s+/g, ' ').trim();
  return t || undefined;
}

function htmlToText(fragment: string): string {
  return decodeEntities(
    fragment
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, ' ')
      // Add newlines around block-level tags so paragraphs survive.
      .replace(/<\/(p|div|li|h[1-6]|section|article|header|footer|main|br)\s*>/gi, '\n')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/[\t\r\f\v ]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .split('\n')
    .map((line) => line.trim())
    .join('\n')
    .trim();
}

function decodeEntities(s: string): string {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&#x2F;/gi, '/')
    .replace(/&#(\d+);/g, (_, d: string) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h: string) => String.fromCodePoint(parseInt(h, 16)));
}
