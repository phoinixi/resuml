import type { JobPosting, Provider } from '../types';
import { looksRemote, stripHtml } from '../normalize';
import { fetchJson } from './http';

interface LeverPosting {
  id: string;
  text: string;
  hostedUrl: string;
  applyUrl?: string;
  categories?: { location?: string; team?: string; commitment?: string };
  createdAt?: number;
  descriptionPlain?: string;
  description?: string;
  lists?: Array<{ text?: string; content?: string }>;
  additionalPlain?: string;
}

/**
 * Lever public postings API. One request per company.
 * Endpoint: api.lever.co/v0/postings/{slug}?mode=json
 */
export const leverProvider: Provider = {
  id: 'lever',
  needsAllowlist: true,
  async fetch(_query, { companies = [], timeoutMs }) {
    const results = await Promise.allSettled(
      companies.map((slug) => fetchCompany(slug, timeoutMs))
    );
    return results.flatMap((r) => (r.status === 'fulfilled' ? r.value : []));
  },
};

function assembleBody(p: LeverPosting): string {
  const parts: string[] = [];
  if (p.descriptionPlain) parts.push(p.descriptionPlain);
  else if (p.description) parts.push(stripHtml(p.description));
  for (const list of p.lists ?? []) {
    if (list.text) parts.push(list.text);
    if (list.content) parts.push(stripHtml(list.content));
  }
  if (p.additionalPlain) parts.push(p.additionalPlain);
  return parts.join('\n\n');
}

async function fetchCompany(slug: string, timeoutMs: number): Promise<JobPosting[]> {
  const url = `https://api.lever.co/v0/postings/${encodeURIComponent(slug)}?mode=json`;
  const data = await fetchJson<LeverPosting[]>(url, { timeoutMs });
  return data.map<JobPosting>((p) => {
    const location = p.categories?.location;
    const body = assembleBody(p);
    return {
      id: `lever:${slug}:${p.id}`,
      source: 'lever',
      company: slug,
      title: p.text,
      location,
      remote: looksRemote(location, body),
      url: p.hostedUrl,
      body,
      postedAt: p.createdAt ? new Date(p.createdAt).toISOString() : undefined,
    };
  });
}
