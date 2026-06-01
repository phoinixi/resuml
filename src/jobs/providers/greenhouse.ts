import type { JobPosting, Provider } from '../types';
import { looksRemote, stripHtml } from '../normalize';
import { fetchJson } from './http';

interface GreenhouseJob {
  id: number;
  absolute_url: string;
  title: string;
  location?: { name?: string };
  updated_at?: string;
  content?: string;
}

interface GreenhouseResponse {
  jobs?: GreenhouseJob[];
}

/**
 * Greenhouse public board API. One request per company in the allowlist.
 * Endpoint pattern: boards-api.greenhouse.io/v1/boards/{slug}/jobs?content=true
 *
 * `content=true` inlines the JD HTML in the listing response so we avoid
 * N+1 detail fetches.
 */
export const greenhouseProvider: Provider = {
  id: 'greenhouse',
  needsAllowlist: true,
  async fetch(_query, { companies = [], timeoutMs }) {
    const results = await Promise.allSettled(
      companies.map((slug) => fetchCompany(slug, timeoutMs))
    );
    return results.flatMap((r) => (r.status === 'fulfilled' ? r.value : []));
  },
};

async function fetchCompany(slug: string, timeoutMs: number): Promise<JobPosting[]> {
  const url = `https://boards-api.greenhouse.io/v1/boards/${encodeURIComponent(slug)}/jobs?content=true`;
  const data = await fetchJson<GreenhouseResponse>(url, { timeoutMs });
  const jobs = data.jobs ?? [];
  return jobs.map<JobPosting>((j) => {
    const location = j.location?.name;
    const body = stripHtml(j.content ?? '');
    return {
      id: `greenhouse:${slug}:${j.id}`,
      source: 'greenhouse',
      company: slug,
      title: j.title,
      location,
      remote: looksRemote(location, body),
      url: j.absolute_url,
      body,
      postedAt: j.updated_at,
    };
  });
}
