import type { JobPosting, Provider } from '../types';
import { stripHtml } from '../normalize';
import { fetchJson } from './http';

interface RemotiveJob {
  id: number;
  url: string;
  title: string;
  company_name: string;
  category?: string;
  tags?: string[];
  job_type?: string;
  publication_date?: string;
  candidate_required_location?: string;
  salary?: string;
  description?: string;
}

interface RemotiveResponse {
  jobs?: RemotiveJob[];
}

/**
 * Remotive feed. Single global JSON endpoint, no auth.
 * Endpoint: remotive.com/api/remote-jobs
 */
export const remotiveProvider: Provider = {
  id: 'remotive',
  needsAllowlist: false,
  async fetch(_query, { timeoutMs }) {
    const url = 'https://remotive.com/api/remote-jobs';
    const data = await fetchJson<RemotiveResponse>(url, { timeoutMs });
    const jobs = data.jobs ?? [];
    return jobs.map<JobPosting>((j) => ({
      id: `remotive:${j.id}`,
      source: 'remotive',
      company: j.company_name,
      title: j.title,
      location: j.candidate_required_location,
      remote: true,
      url: j.url,
      body: stripHtml(j.description ?? ''),
      postedAt: j.publication_date,
      tags: j.tags,
      compensation: j.salary,
    }));
  },
};
