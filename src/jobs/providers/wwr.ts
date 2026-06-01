import type { JobPosting, Provider } from '../types';
import { stripHtml } from '../normalize';
import { fetchText } from './http';

const WWR_CATEGORIES = [
  'programming',
  'design',
  'devops',
  'management',
  'product',
  'customer-support',
  'sales-and-marketing',
];

/**
 * We Work Remotely RSS feeds, one per category. Minimal regex-based XML parse:
 * the feed format is stable and we only extract well-bounded fields.
 */
export const wwrProvider: Provider = {
  id: 'wwr',
  needsAllowlist: false,
  async fetch(_query, { timeoutMs }) {
    const results = await Promise.allSettled(
      WWR_CATEGORIES.map((cat) => fetchCategory(cat, timeoutMs))
    );
    return results.flatMap((r) => (r.status === 'fulfilled' ? r.value : []));
  },
};

async function fetchCategory(category: string, timeoutMs: number): Promise<JobPosting[]> {
  const url = `https://weworkremotely.com/categories/remote-${category}-jobs.rss`;
  const xml = await fetchText(url, { timeoutMs, accept: 'application/rss+xml, application/xml' });
  return parseRss(xml, category);
}

const ITEM_RE = /<item>([\s\S]*?)<\/item>/g;
const CDATA_RE = /<!\[CDATA\[([\s\S]*?)\]\]>/;

function pickTag(block: string, tag: string): string | undefined {
  const re = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`);
  const m = re.exec(block);
  if (!m) return undefined;
  const raw = m[1] ?? '';
  const cdata = CDATA_RE.exec(raw);
  return (cdata && cdata[1] !== undefined ? cdata[1] : raw).trim();
}

function parseRss(xml: string, category: string): JobPosting[] {
  const items: JobPosting[] = [];
  let match: RegExpExecArray | null;
  while ((match = ITEM_RE.exec(xml)) !== null) {
    const block = match[1] ?? '';
    const title = pickTag(block, 'title') ?? '';
    const link = pickTag(block, 'link') ?? '';
    const guid = pickTag(block, 'guid') ?? link;
    const pubDate = pickTag(block, 'pubDate');
    const descriptionHtml = pickTag(block, 'description') ?? '';
    const body = stripHtml(descriptionHtml);
    const segments = title.split(':').map((s) => s.trim());
    const companyRaw = segments[0] ?? '';
    const titleRest = segments.slice(1);
    const company = companyRaw || 'Unknown';
    const cleanTitle = titleRest.length ? titleRest.join(': ') : title;
    items.push({
      id: `wwr:${guid}`,
      source: 'wwr',
      company,
      title: cleanTitle,
      location: 'Remote',
      remote: true,
      url: link,
      body,
      postedAt: pubDate ? new Date(pubDate).toISOString() : undefined,
      tags: [category],
    });
  }
  return items;
}

export const __test__ = { parseRss };
