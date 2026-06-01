import type { JobPosting, Provider } from '../types';
import { looksRemote, stripHtml } from '../normalize';
import { fetchJson } from './http';

interface AshbyJob {
  id: string;
  title: string;
  locationName?: string;
  isRemote?: boolean;
  jobUrl?: string;
  descriptionHtml?: string;
  descriptionPlain?: string;
  publishedDate?: string;
}

interface AshbyResponse {
  jobs?: AshbyJob[];
  apiVersion?: string;
}

/**
 * Ashby public board API.
 * Endpoint: api.ashbyhq.com/posting-api/job-board/{slug}?includeCompensation=true
 */
export const ashbyProvider: Provider = {
  id: 'ashby',
  needsAllowlist: true,
  async fetch(_query, { companies = [], timeoutMs }) {
    const results = await Promise.allSettled(
      companies.map((slug) => fetchCompany(slug, timeoutMs))
    );
    return results.flatMap((r) => (r.status === 'fulfilled' ? r.value : []));
  },
};

async function fetchCompany(slug: string, timeoutMs: number): Promise<JobPosting[]> {
  const url = `https://api.ashbyhq.com/posting-api/job-board/${encodeURIComponent(slug)}?includeCompensation=true`;
  const data = await fetchJson<AshbyResponse>(url, { timeoutMs });
  const jobs = data.jobs ?? [];
  return jobs.map<JobPosting>((j) => {
    const location = j.locationName;
    const body = j.descriptionPlain ?? stripHtml(j.descriptionHtml ?? '');
    return {
      id: `ashby:${slug}:${j.id}`,
      source: 'ashby',
      company: slug,
      title: j.title,
      location,
      remote: j.isRemote ?? looksRemote(location, body),
      url: j.jobUrl ?? `https://jobs.ashbyhq.com/${slug}/${j.id}`,
      body,
      postedAt: j.publishedDate,
    };
  });
}
