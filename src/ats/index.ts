import type { ResumeSchema } from '../types/resume';
import type {
  TieredAtsResult,
  AtsOptions,
  CheckResult,
  TierResult,
  Tier,
  AtsConfig,
  KnockoutSignal,
} from './types';
import { allParsingChecks } from './checks/parsing';
import { allRecruiterChecks } from './checks/recruiter';
import { allMatchChecks, extractKnockouts } from './checks/match';
import {
  computeTierScore,
  computeTotalScore,
  gradeFromScore,
  scoreToRating,
  generateSummary,
} from './scoring';
import { defaultConfig, effectiveWeight } from '../utils/config';

function applyConfig(checks: CheckResult[], cfg: AtsConfig): CheckResult[] {
  return checks
    .filter((c) => !cfg.disable.includes(c.id))
    .map((c) => ({ ...c, weight: effectiveWeight(c.id, c.weight, cfg) }));
}

function buildTier(_tier: Tier, checks: CheckResult[], cfg: AtsConfig): TierResult {
  const filtered = applyConfig(checks, cfg);
  const score = computeTierScore(filtered);
  return {
    score,
    grade: gradeFromScore(score, cfg.thresholds.grade),
    checks: filtered,
  };
}

export function analyzeAts(resume: ResumeSchema, options: AtsOptions = {}): TieredAtsResult {
  const cfg = options.config ?? defaultConfig;
  const language = options.language ?? cfg.locale;

  const parsingChecks = allParsingChecks
    .map((fn) => fn(resume, language))
    .filter((c) => c.id !== 'pdf-text-extractable' && c.id !== 'pdf-size-under-2.5mb');

  const recruiterChecks = allRecruiterChecks.map((fn) => fn(resume, language, cfg));

  const parsing = buildTier('parsing', parsingChecks, cfg);
  const recruiter = buildTier('recruiter', recruiterChecks, cfg);

  let match: TierResult | undefined;
  let knockouts: KnockoutSignal[] = [];
  if (options.jobDescription) {
    const matchChecks = allMatchChecks.map((fn) =>
      fn(resume, language, { jobDescription: options.jobDescription })
    );
    match = buildTier('match', matchChecks, cfg);
    knockouts = extractKnockouts(resume, options.jobDescription);
  }

  const totalScore = computeTotalScore(
    { parsing: parsing.score, match: match?.score, recruiter: recruiter.score },
    cfg.weights.tiers
  );
  const rating = scoreToRating(totalScore, cfg.thresholds.rating);
  const summary = generateSummary(totalScore, rating, !!options.jobDescription, knockouts.length);

  return {
    score: totalScore,
    rating,
    tiers: match ? { parsing, match, recruiter } : { parsing, recruiter },
    knockouts,
    summary,
  };
}

export type { TieredAtsResult, AtsOptions, CheckResult, TierResult, KnockoutSignal } from './types';
