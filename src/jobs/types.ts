import type { TieredAtsResult } from '../ats/index';

export type ProviderId =
  | 'greenhouse'
  | 'lever'
  | 'ashby'
  | 'workable'
  | 'remoteok'
  | 'wwr'
  | 'remotive'
  | 'hn-whoishiring';

export type SeniorityLevel = 'intern' | 'junior' | 'mid' | 'senior' | 'staff' | 'principal';

export interface SearchQuery {
  /** Top skills extracted from the resume, ranked desc by relevance. */
  skills: string[];
  /** Heuristic seniority derived from work history. */
  seniority: SeniorityLevel;
  /** Total years of professional experience. */
  yearsExperience: number;
  /** Roles the candidate has held (used for title matching). */
  titles: string[];
  /** Candidate's home city if available. */
  city?: string;
  /** Candidate's country (ISO 3166-1 alpha-2) if available. */
  countryCode?: string;
  /** Whether to restrict to remote-friendly postings. */
  remoteOnly: boolean;
  /** Free-text query terms for providers that accept keyword search. */
  terms: string[];
}

export interface SearchOptions {
  /** Restrict the source set. Defaults to all bundled providers. */
  providers?: ProviderId[];
  /** Cap on results returned after ranking. Default 20. */
  limit?: number;
  /** Drop postings below this total ATS score after ranking. Default 60. */
  minScore?: number;
  /** Filter to remote postings only. Overrides resume-derived value when set. */
  remoteOnly?: boolean;
  /** Override candidate location as "City, CC" (e.g. "Zurich, CH"). Overrides resume-derived countryCode. */
  location?: string;
  /** Per-provider timeout in ms. Default 8000. */
  timeoutMs?: number;
  /** Extra company slugs to query for allowlist-based providers. */
  extraCompanies?: Partial<Record<ProviderId, string[]>>;
}

export interface JobPosting {
  /** Stable id within source. */
  id: string;
  /** Provider that surfaced this posting. */
  source: ProviderId;
  company: string;
  title: string;
  /** Free-form location string from the provider. */
  location?: string;
  remote: boolean;
  /** Posting URL. */
  url: string;
  /** Body text used for ATS scoring. HTML stripped. */
  body: string;
  /** ISO date if provided by source. */
  postedAt?: string;
  /** Salary string if provider exposes one. Not normalized. */
  compensation?: string;
  /** Tags / keywords if exposed (RemoteOK, Remotive). */
  tags?: string[];
}

export interface RankedJob extends JobPosting {
  /** Result of analyzeAts(resume, { jobDescription: body }). */
  ats: TieredAtsResult;
  /** Hash key used for cross-provider dedupe. */
  dedupeKey: string;
}

export interface ProviderResult {
  providerId: ProviderId;
  /** Postings normalized to JobPosting. */
  postings: JobPosting[];
  /** Error message if the provider failed. Postings still returns []. */
  error?: string;
  /** Milliseconds spent fetching + normalizing. */
  durationMs: number;
}

export interface Provider {
  id: ProviderId;
  /**
   * Whether this provider requires a company allowlist (true) or returns
   * a single global feed (false).
   */
  needsAllowlist: boolean;
  /**
   * Fetch postings. Implementations must catch their own errors and return
   * an empty array on failure — the orchestrator never re-throws.
   */
  fetch(
    query: SearchQuery,
    options: { companies?: string[]; timeoutMs: number }
  ): Promise<JobPosting[]>;
}

export interface SearchResult {
  query: SearchQuery;
  /** Sorted desc by total ATS score. */
  jobs: RankedJob[];
  /** Per-provider stats for observability. */
  providers: ProviderResult[];
  /** Postings dropped because total score < minScore. */
  filteredCount: number;
  /** Total postings fetched before dedupe. */
  fetchedCount: number;
  /** Ranked postings where role-family-match status is fail. */
  offSpecialtyCount?: number;
  /** Postings dropped by the on-site country filter. */
  wrongLocationCount?: number;
}
