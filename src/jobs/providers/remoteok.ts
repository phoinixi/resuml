import type { JobPosting, Provider } from '../types';
import { stripHtml } from '../normalize';
import { fetchJson } from './http';

interface RemoteOkEntry {
  id?: string;
  slug?: string;
  url?: string;
  company?: string;
  position?: string;
  location?: string;
  description?: string;
  tags?: string[];
  date?: string;
  salary_min?: number;
  salary_max?: number;
  legal?: string;
}

/**
 * RemoteOK feed. Single global JSON endpoint, no auth.
 * Endpoint: remoteok.com/api
 *
 * First element of the response is metadata ("legal"), real postings start
 * at index 1.
 */
export const remoteokProvider: Provider = {
  id: 'remoteok',
  needsAllowlist: false,
  async fetch(_query, { timeoutMs }) {
    const url = 'https://remoteok.com/api';
    const entries = await fetchJson<RemoteOkEntry[]>(url, { timeoutMs });
    return entries
      .filter((e) => e.id && e.position && e.company)
      .map<JobPosting>((e) => {
        const body = stripHtml(e.description ?? '');
        const comp =
          e.salary_min && e.salary_max
            ? `$${e.salary_min}–$${e.salary_max}`
            : undefined;
        return {
          id: `remoteok:${e.id}`,
          source: 'remoteok',
          company: e.company as string,
          title: e.position as string,
          location: e.location,
          remote: true,
          url: e.url ?? `https://remoteok.com/remote-jobs/${e.slug ?? e.id}`,
          body,
          postedAt: e.date,
          tags: e.tags,
          compensation: comp,
        };
      });
  },
};
