import type { JobPosting, SearchQuery } from './types';
import { isRemoteEligible } from './geo';

/**
 * Strip HTML to plain text. Naive but sufficient for ATS scoring — the
 * scorer only needs prose for skill extraction, not exact whitespace.
 */
export function stripHtml(input: string): string {
  if (!input) return '';
  const noScript = input.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, ' ');
  const noTags = noScript.replace(/<[^>]+>/g, ' ');
  const decoded = noTags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(parseInt(code, 10)));
  return decoded.replace(/\s+/g, ' ').trim();
}

const REMOTE_PATTERNS = /\b(remote|anywhere|distributed|wfh|work[\s-]from[\s-]home)\b/i;

export function looksRemote(location?: string, body?: string): boolean {
  if (location && REMOTE_PATTERNS.test(location)) return true;
  if (body && REMOTE_PATTERNS.test(body.slice(0, 500))) return true;
  return false;
}

/**
 * Stable dedupe key — same (company, title, location) from two providers
 * collapses to one entry.
 */
export function dedupeKey(posting: Pick<JobPosting, 'company' | 'title' | 'location'>): string {
  const norm = (s?: string) =>
    (s ?? '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, '-');
  return `${norm(posting.company)}::${norm(posting.title)}::${norm(posting.location)}`;
}

function extractLocationCountryCode(location: string | undefined): string | null {
  if (!location) return null;
  const parts = location.split(',');
  const last = parts[parts.length - 1]?.trim().toUpperCase();
  return last && last.length === 2 ? last : null;
}

/**
 * Filter postings against the derived query. Remote-only requires both that the
 * posting is remote AND that the candidate's country is plausibly eligible for
 * its remote scope (a "Remote, US" role is dropped for an EU-based candidate).
 * On-site postings with a clearly different country code are also dropped when
 * the candidate's countryCode is known.
 * We do not filter by skills here — the ATS scorer owns relevance.
 */
export function applyQueryFilters(
  postings: JobPosting[],
  query: SearchQuery
): { postings: JobPosting[]; wrongLocationCount: number } {
  let result = postings;

  if (query.remoteOnly) {
    result = result.filter((p) => p.remote && isRemoteEligible(p.location, p.body, query.countryCode));
  }

  let wrongLocationCount = 0;
  if (query.countryCode) {
    const before = result.length;
    result = result.filter((p) => {
      if (p.remote) return true;
      const loc = extractLocationCountryCode(p.location);
      return !loc || loc === query.countryCode;
    });
    wrongLocationCount = before - result.length;
  }

  return { postings: result, wrongLocationCount };
}
