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

  const parsingChecks = allParsingChecks.map((fn) => fn(resume, language));

  const recruiterChecks = allRecruiterChecks.map((fn) => fn(resume, language, cfg));

  const parsing = buildTier('parsing', parsingChecks, cfg);
  const recruiter = buildTier('recruiter', recruiterChecks, cfg);

  let match: TierResult | undefined;
  let knockouts: KnockoutSignal[] = [];
  let roleMismatch = false;
  if (options.jobDescription) {
    const matchChecks = allMatchChecks.map((fn) =>
      fn(resume, language, { jobDescription: options.jobDescription, jobTitle: options.jobTitle })
    );
    match = buildTier('match', matchChecks, cfg);
    roleMismatch = matchChecks.some(
      (c) => c.id === 'role-family-match' && c.status === 'fail'
    );
    knockouts = extractKnockouts(resume, options.jobDescription);
  }

  let totalScore = computeTotalScore(
    { parsing: parsing.score, match: match?.score, recruiter: recruiter.score },
    cfg.weights.tiers
  );

  // A confident occupation mismatch is decisive: resume hygiene (parsing +
  // recruiter tiers, ~50% of the weight by default) cannot lift a wrong-role
  // posting into a passing score. Cap it so the total reflects fit, not polish.
  const capped = roleMismatch && totalScore > ROLE_MISMATCH_CAP;
  if (capped) totalScore = ROLE_MISMATCH_CAP;

  const rating = scoreToRating(totalScore, cfg.thresholds.rating);
  let summary = generateSummary(totalScore, rating, !!options.jobDescription, knockouts.length);
  if (capped) summary += ' Score capped: resume role family does not match this posting.';

  return {
    score: totalScore,
    rating,
    tiers: match ? { parsing, match, recruiter } : { parsing, recruiter },
    knockouts,
    summary,
  };
}

/** Ceiling applied to the total when the resume and JD are different occupations. */
const ROLE_MISMATCH_CAP = 45;

export type { TieredAtsResult, AtsOptions, CheckResult, TierResult, KnockoutSignal } from './types';
