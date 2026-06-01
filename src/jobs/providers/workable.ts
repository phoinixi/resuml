import type { JobPosting, Provider } from '../types';
import { looksRemote, stripHtml } from '../normalize';
import { fetchJson } from './http';

interface WorkableJob {
  id: string;
  shortcode?: string;
  title: string;
  city?: string;
  country?: string;
  state?: string;
  remote?: boolean;
  url?: string;
  application_url?: string;
  description?: string;
  requirements?: string;
  benefits?: string;
  published_on?: string;
}

interface WorkableResponse {
  jobs?: WorkableJob[];
  results?: WorkableJob[];
}

/**
 * Workable public widget API.
 * Endpoint: apply.workable.com/api/v1/widget/accounts/{slug}
 */
export const workableProvider: Provider = {
  id: 'workable',
  needsAllowlist: true,
  async fetch(_query, { companies = [], timeoutMs }) {
    const results = await Promise.allSettled(
      companies.map((slug) => fetchCompany(slug, timeoutMs))
    );
    return results.flatMap((r) => (r.status === 'fulfilled' ? r.value : []));
  },
};

function locationFor(j: WorkableJob): string | undefined {
  const parts = [j.city, j.state, j.country].filter(Boolean) as string[];
  return parts.length ? parts.join(', ') : undefined;
}

async function fetchCompany(slug: string, timeoutMs: number): Promise<JobPosting[]> {
  const url = `https://apply.workable.com/api/v1/widget/accounts/${encodeURIComponent(slug)}`;
  const data = await fetchJson<WorkableResponse>(url, { timeoutMs });
  const jobs = data.jobs ?? data.results ?? [];
  return jobs.map<JobPosting>((j) => {
    const location = locationFor(j);
    const bodyParts = [j.description, j.requirements, j.benefits]
      .filter(Boolean)
      .map((s) => stripHtml(s as string));
    const body = bodyParts.join('\n\n');
    const postingUrl = j.url ?? j.application_url ?? `https://apply.workable.com/${slug}/j/${j.shortcode ?? j.id}/`;
    return {
      id: `workable:${slug}:${j.id}`,
      source: 'workable',
      company: slug,
      title: j.title,
      location,
      remote: j.remote ?? looksRemote(location, body),
      url: postingUrl,
      body,
      postedAt: j.published_on,
    };
  });
}
