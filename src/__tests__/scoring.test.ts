import { describe, it, expect } from 'vitest';
import { gradeFromScore, computeTierScore, computeTotalScore, scoreToRating } from '../ats/scoring';
import { defaultConfig } from '../utils/config';
import type { CheckResult } from '../ats/types';

const mk = (
  id: string,
  score: number,
  weight: CheckResult['weight'],
  status: CheckResult['status'] = 'pass'
): CheckResult => ({
  id,
  tier: 'parsing',
  score,
  weight,
  status,
  message: '',
  hints: [],
});

describe('gradeFromScore', () => {
  it.each([
    [95, 'A'],
    [90, 'A'],
    [89, 'B'],
    [80, 'B'],
    [79, 'C'],
    [70, 'C'],
    [69, 'D'],
    [60, 'D'],
    [59, 'F'],
    [0, 'F'],
  ])('maps %d → %s', (score, grade) => {
    expect(gradeFromScore(score, defaultConfig.thresholds.grade)).toBe(grade);
  });
});

describe('computeTierScore', () => {
  it('computes weighted average ignoring skipped checks', () => {
    const checks = [mk('a', 100, 'high'), mk('b', 50, 'medium'), mk('c', 0, 'low', 'skipped')];
    // weighted: (100*3 + 50*2) / (100*3 + 100*2) = 400/500 = 80
    expect(computeTierScore(checks)).toBe(80);
  });

  it('returns 0 for an empty tier', () => {
    expect(computeTierScore([])).toBe(0);
  });
});

describe('computeTotalScore', () => {
  it('blends parsing 30 / match 50 / recruiter 20 when JD present', () => {
    const total = computeTotalScore(
      { parsing: 90, match: 60, recruiter: 80 },
      defaultConfig.weights.tiers
    );
    // 90*0.3 + 60*0.5 + 80*0.2 = 27 + 30 + 16 = 73
    expect(total).toBe(73);
  });

  it('blends parsing 40 / recruiter 60 when no match tier', () => {
    const total = computeTotalScore({ parsing: 90, recruiter: 80 }, defaultConfig.weights.tiers);
    // 90*0.4 + 80*0.6 = 36 + 48 = 84
    expect(total).toBe(84);
  });
});

describe('scoreToRating', () => {
  it.each([
    [95, 'excellent'],
    [80, 'good'],
    [65, 'needs-work'],
    [50, 'poor'],
  ])('%d → %s', (s, r) => {
    expect(scoreToRating(s, defaultConfig.thresholds.rating)).toBe(r);
  });
});
