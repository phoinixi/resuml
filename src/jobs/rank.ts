import type { ResumeSchema } from '../types/resume';
import { analyzeAts } from '../ats/index';
import { loadConfig } from '../utils/config';
import type { JobPosting, RankedJob } from './types';
import { dedupeKey } from './normalize';

/**
 * Score every posting with the existing ATS engine and sort desc by total.
 * Pure: no IO, no mutation of inputs.
 */
export function rankPostings(resume: ResumeSchema, postings: JobPosting[]): RankedJob[] {
  const cfg = loadConfig();
  const seen = new Map<string, RankedJob>();
  for (const posting of postings) {
    const key = dedupeKey(posting);
    const ats = analyzeAts(resume, {
      jobDescription: posting.body,
      jobTitle: posting.title,
      language: cfg.locale,
      config: cfg,
    });
    const ranked: RankedJob = { ...posting, ats, dedupeKey: key };
    const existing = seen.get(key);
    if (!existing || ranked.ats.score > existing.ats.score) {
      seen.set(key, ranked);
    }
  }
  return Array.from(seen.values()).sort((a, b) => b.ats.score - a.ats.score);
}
