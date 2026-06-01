import type { ResumeSchema } from '../types/resume';
import { deriveSearchQuery } from './query';
import { listProviders, getProvider } from './providers/index';
import { applyQueryFilters } from './normalize';
import { rankPostings } from './rank';
import { getSeedCompanies } from './companies';
import type {
  JobPosting,
  ProviderResult,
  SearchOptions,
  SearchResult,
} from './types';

export type {
  JobPosting,
  ProviderId,
  ProviderResult,
  RankedJob,
  SearchOptions,
  SearchQuery,
  SearchResult,
  SeniorityLevel,
} from './types';
export { deriveSearchQuery } from './query';
export { dedupeKey, stripHtml } from './normalize';
export { listProviders, getProvider } from './providers/index';

const DEFAULT_LIMIT = 20;
const DEFAULT_MIN_SCORE = 85;
const DEFAULT_TIMEOUT_MS = 8000;

/**
 * Discover + score job postings against a resume.
 *
 * Pipeline:
 *  1. Derive a SearchQuery from the resume (skills, seniority, location).
 *  2. Fan out to enabled providers in parallel; per-provider errors are
 *     captured in `providers[]` and never bubble out.
 *  3. Apply remote-only filter if requested.
 *  4. Score every survivor via analyzeAts(resume, { jobDescription }), dedupe
 *     by (company, title, location), and sort desc by total ATS score.
 *  5. Drop entries below `minScore`, cap to `limit`.
 */
export async function searchJobs(
  resume: ResumeSchema,
  options: SearchOptions = {}
): Promise<SearchResult> {
  const baseQuery = deriveSearchQuery(resume, { remoteOnly: options.remoteOnly });
  const locationCc = options.location
    ? options.location.split(',').pop()?.trim().toUpperCase()
    : undefined;
  const query =
    locationCc && locationCc.length === 2
      ? { ...baseQuery, countryCode: locationCc }
      : baseQuery;

  const enabled = options.providers
    ? options.providers.map(getProvider).filter((p): p is NonNullable<typeof p> => !!p)
    : listProviders();

  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const limit = options.limit ?? DEFAULT_LIMIT;
  const minScore = options.minScore ?? DEFAULT_MIN_SCORE;
  const extraCompanies = options.extraCompanies ?? {};

  const providerResults: ProviderResult[] = await Promise.all(
    enabled.map(async (provider): Promise<ProviderResult> => {
      const started = Date.now();
      try {
        const companies = provider.needsAllowlist
          ? Array.from(
              new Set([
                ...getSeedCompanies(provider.id),
                ...(extraCompanies[provider.id] ?? []),
              ])
            )
          : undefined;
        const postings = await provider.fetch(query, {
          companies,
          timeoutMs,
        });
        return {
          providerId: provider.id,
          postings,
          durationMs: Date.now() - started,
        };
      } catch (e) {
        return {
          providerId: provider.id,
          postings: [],
          durationMs: Date.now() - started,
          error: e instanceof Error ? e.message : String(e),
        };
      }
    })
  );

  const allPostings: JobPosting[] = providerResults.flatMap((r) => r.postings);
  const fetchedCount = allPostings.length;

  const { postings: filtered, wrongLocationCount } = applyQueryFilters(allPostings, query);
  const ranked = rankPostings(resume, filtered);
  const offSpecialtyCount = ranked.filter((r) =>
    r.ats.tiers.match?.checks.some((c) => c.id === 'role-family-match' && c.status === 'fail')
  ).length;
  const passing = ranked.filter((r) => r.ats.score >= minScore);
  const filteredCount = ranked.length - passing.length;
  const jobs = passing.slice(0, limit);

  return {
    query,
    jobs,
    providers: providerResults,
    filteredCount,
    fetchedCount,
    offSpecialtyCount,
    wrongLocationCount,
  };
}

/**
 * Score a single posting body against a resume. Useful for the MCP
 * `resuml_jobs_score` tool when the agent already has the JD text in hand.
 */
export function scorePosting(
  resume: ResumeSchema,
  posting: Pick<JobPosting, 'body' | 'company' | 'title' | 'location' | 'url' | 'source' | 'id' | 'remote'>
) {
  const ranked = rankPostings(resume, [
    {
      ...posting,
      tags: undefined,
      postedAt: undefined,
      compensation: undefined,
    },
  ]);
  return ranked[0];
}

/**
 * Build a prompt that asks the agent to tailor the resume to a specific
 * posting. The MCP `resuml_jobs_tailor` tool returns this string.
 */
export function buildTailorPrompt(posting: JobPosting): string {
  return [
    `Tailor my resume for the following job posting at ${posting.company}.`,
    '',
    `# ${posting.title}`,
    posting.location ? `Location: ${posting.location}` : '',
    `URL: ${posting.url}`,
    '',
    '## Job description',
    posting.body,
    '',
    'Use the resuml MCP tools:',
    '  1. resuml_validate to confirm the tailored YAML parses.',
    '  2. resuml_ats_check with the job description above. Target score >= 80.',
    '  3. Show the changes you made and the final score.',
  ]
    .filter(Boolean)
    .join('\n');
}
