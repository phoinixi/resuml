import type { JobPosting, Provider, SearchQuery } from '../types';
import { looksRemote, stripHtml } from '../normalize';
import { fetchJson } from './http';

interface AlgoliaHit {
  objectID: string;
  author?: string;
  comment_text?: string;
  story_id?: number;
  created_at?: string;
  parent_id?: number;
}

interface AlgoliaResponse {
  hits: AlgoliaHit[];
}

interface AlgoliaStoryHit {
  objectID: string;
  story_id?: number;
  story_title?: string;
  title?: string;
  created_at?: string;
}

/**
 * Hacker News "Who is hiring?" threads, queried via the Algolia HN search API.
 * No allowlist needed; we find the latest monthly thread and pull top-level
 * comments, ranked by query relevance via Algolia's own text scoring.
 */
export const hnWhoisHiringProvider: Provider = {
  id: 'hn-whoishiring',
  needsAllowlist: false,
  async fetch(query, { timeoutMs }) {
    const storyId = await findLatestThread(timeoutMs);
    if (!storyId) return [];
    return fetchPostings(storyId, query, timeoutMs);
  },
};

async function findLatestThread(timeoutMs: number): Promise<number | null> {
  const url =
    'https://hn.algolia.com/api/v1/search?tags=story,author_whoishiring&query=who%20is%20hiring&restrictSearchableAttributes=title&hitsPerPage=5';
  const data = await fetchJson<{ hits: AlgoliaStoryHit[] }>(url, { timeoutMs });
  for (const hit of data.hits) {
    const title = (hit.story_title ?? hit.title ?? '').toLowerCase();
    if (title.includes('who is hiring')) {
      return hit.story_id ?? Number(hit.objectID);
    }
  }
  return null;
}

async function fetchPostings(
  storyId: number,
  query: SearchQuery,
  timeoutMs: number
): Promise<JobPosting[]> {
  const q = encodeURIComponent(query.terms.slice(0, 3).join(' ') || 'remote');
  const url = `https://hn.algolia.com/api/v1/search?tags=comment,story_${storyId}&hitsPerPage=40&query=${q}`;
  const data = await fetchJson<AlgoliaResponse>(url, { timeoutMs });
  return data.hits
    .filter((h) => typeof h.comment_text === 'string' && h.comment_text.length > 80)
    .map<JobPosting>((h) => {
      const body = stripHtml(h.comment_text as string);
      const { company, title, location } = parseHeader(body);
      return {
        id: `hn-whoishiring:${h.objectID}`,
        source: 'hn-whoishiring',
        company,
        title,
        location,
        remote: looksRemote(location, body),
        url: `https://news.ycombinator.com/item?id=${h.objectID}`,
        body,
        postedAt: h.created_at,
      };
    });
}

/**
 * HN "Who is hiring?" comments conventionally start with a header line like:
 *   "Acme (San Francisco, CA / Remote) | Senior Engineer | ..."
 * We parse what we can; falling back to defaults when the format isn't met.
 */
function parseHeader(body: string): { company: string; title: string; location?: string } {
  const firstLine = body.split('\n')[0] ?? body.slice(0, 200);
  const segments = firstLine.split('|').map((s) => s.trim());
  const head = segments[0] ?? '';
  const locMatch = /\(([^)]+)\)/.exec(head);
  const company = head.replace(/\s*\([^)]+\)/, '').trim() || 'HN posting';
  const location = locMatch ? locMatch[1] : undefined;
  const title = segments[1] ?? segments[2] ?? 'See description';
  return { company, title, location };
}

export const __test__ = { parseHeader };
