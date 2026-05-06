import type { CheckResult, AtsRating, Grade, AtsConfig } from './types';

const weightMultiplier: Record<'high' | 'medium' | 'low', number> = {
  high: 3,
  medium: 2,
  low: 1,
};

export function gradeFromScore(score: number, t: AtsConfig['thresholds']['grade']): Grade {
  if (score >= t.A) return 'A';
  if (score >= t.B) return 'B';
  if (score >= t.C) return 'C';
  if (score >= t.D) return 'D';
  return 'F';
}

export function computeTierScore(checks: CheckResult[]): number {
  const active = checks.filter((c) => c.status !== 'skipped');
  if (active.length === 0) return 0;
  let weighted = 0;
  let total = 0;
  for (const c of active) {
    const m = weightMultiplier[c.weight];
    weighted += c.score * m;
    total += 100 * m;
  }
  return total > 0 ? Math.round((weighted / total) * 100) : 0;
}

export function computeTotalScore(
  tiers: { parsing: number; match?: number; recruiter: number },
  weights: AtsConfig['weights']['tiers'],
): number {
  if (tiers.match === undefined) {
    const sum = weights.parsing + weights.recruiter;
    const wp = weights.parsing / sum;
    const wr = weights.recruiter / sum;
    return Math.round(tiers.parsing * (sum === 50 ? 0.4 : wp) + tiers.recruiter * (sum === 50 ? 0.6 : wr));
  }
  const sum = weights.parsing + weights.match + weights.recruiter;
  return Math.round(
    (tiers.parsing * weights.parsing + tiers.match * weights.match + tiers.recruiter * weights.recruiter) / sum,
  );
}

export function scoreToRating(score: number, t: AtsConfig['thresholds']['rating']): AtsRating {
  if (score >= t.excellent) return 'excellent';
  if (score >= t.good) return 'good';
  if (score >= t.needsWork) return 'needs-work';
  return 'poor';
}

export function generateSummary(score: number, rating: AtsRating, hasJd: boolean, knockouts: number): string {
  const ratingLabel = { excellent: 'Excellent', good: 'Good', 'needs-work': 'Needs Work', poor: 'Poor' }[rating];
  const knockoutNote = knockouts > 0 ? ` ${knockouts} knockout signal${knockouts === 1 ? '' : 's'} flagged.` : '';
  return `ATS ${score}/100 (${ratingLabel}).${hasJd ? ' Includes JD match.' : ''}${knockoutNote}`;
}
