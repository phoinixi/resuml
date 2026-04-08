import type { ResumeSchema } from '../types/resume';
import type { AtsResult, AtsOptions } from './types';
import { runGenericChecks } from './genericChecks';
import { matchJobDescription } from './jdMatcher';
import { calculateScore, calculateCombinedScore, scoreToRating, generateSummary } from './scoring';

/**
 * Run ATS analysis on a resume.
 *
 * Performs deterministic, offline checks:
 * 1. Generic best-practice checks (contact, content, structure)
 * 2. Optional job-description keyword matching
 *
 * @param resume - Validated resume data
 * @param options - ATS analysis options
 * @returns Full ATS analysis result with score, checks, and suggestions
 */
export function analyzeAts(resume: ResumeSchema, options: AtsOptions = {}): AtsResult {
  const language = options.language || 'en';

  // Run generic checks
  const checks = runGenericChecks(resume, language);
  const genericScore = calculateScore(checks);

  // Run JD matching if provided
  let keywords;
  if (options.jobDescription) {
    keywords = matchJobDescription(resume, options.jobDescription, language);
  }

  // Calculate combined score
  const finalScore = calculateCombinedScore(genericScore, keywords?.matchPercentage);
  const rating = scoreToRating(finalScore);
  const summary = generateSummary(finalScore, rating, !!keywords);

  return {
    score: finalScore,
    rating,
    checks,
    keywords,
    summary,
  };
}

export type { AtsResult, AtsOptions, AtsCheck, AtsKeywordMatch } from './types';
