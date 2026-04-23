import type { AtsCheck, AtsRating, AtsFitAssessment, AtsKeywordMatch } from './types';

const weightMultiplier: Record<string, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

/**
 * Calculate a weighted ATS score from a set of checks.
 */
export function calculateScore(checks: AtsCheck[]): number {
  if (checks.length === 0) return 0;

  let weightedSum = 0;
  let totalWeight = 0;

  for (const check of checks) {
    const mult = weightMultiplier[check.weight] || 1;
    weightedSum += check.score * mult;
    totalWeight += 100 * mult;
  }

  return totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 100) : 0;
}

/**
 * Calculate a combined score from generic checks and optional JD matching.
 */
export function calculateCombinedScore(genericScore: number, jdMatchPercentage?: number): number {
  if (jdMatchPercentage === undefined) return genericScore;
  return Math.round(genericScore * 0.6 + jdMatchPercentage * 0.4);
}

/**
 * Map a numeric score to a human-readable rating.
 */
export function scoreToRating(score: number): AtsRating {
  if (score >= 90) return 'excellent';
  if (score >= 75) return 'good';
  if (score >= 60) return 'needs-work';
  return 'poor';
}

/**
 * Generate a summary string for a given score and rating.
 */
export function generateSummary(score: number, rating: AtsRating, hasJd: boolean): string {
  const ratingLabel = {
    excellent: 'Excellent',
    good: 'Good',
    'needs-work': 'Needs Work',
    poor: 'Poor',
  }[rating];

  const base = `ATS Score: ${score}/100 (${ratingLabel})`;
  if (hasJd) {
    return `${base}, includes job description keyword matching.`;
  }
  return `${base}, based on resume structure and content best practices.`;
}

/**
 * Assess how well a resume fits a job description based on keyword matching.
 */
export function assessFit(keywords: AtsKeywordMatch): AtsFitAssessment {
  const { matchPercentage, missing } = keywords;
  if (matchPercentage >= 70) {
    return {
      level: 'strong',
      message: 'Strong fit, your resume aligns well with this job description.',
    };
  }
  const topMissing = missing.slice(0, 5).join(', ');
  if (matchPercentage >= 50) {
    return {
      level: 'partial',
      message: `Partial fit, consider emphasizing transferable skills. Key gaps: ${topMissing}.`,
    };
  }
  return {
    level: 'weak',
    message: `Weak fit, this role requires skills not well represented in your resume. Major gaps: ${topMissing}.`,
  };
}
