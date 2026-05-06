export type Tier = 'parsing' | 'match' | 'recruiter';
export type AtsCheckWeight = 'high' | 'medium' | 'low';
export type AtsRating = 'excellent' | 'good' | 'needs-work' | 'poor';
export type CheckStatus = 'pass' | 'warn' | 'fail' | 'skipped';
export type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

export interface CheckResult {
  id: string;
  tier: Tier;
  status: CheckStatus;
  score: number; // 0-100
  weight: AtsCheckWeight;
  message: string;
  hints: string[]; // 1-3 actionable lines, may reference YAML paths
}

export interface TierResult {
  score: number; // 0-100
  grade: Grade;
  checks: CheckResult[];
}

export interface KnockoutSignal {
  signal: string;
  evidence: string;
  recommendation: string;
}

export interface TieredAtsResult {
  score: number; // 0-100 weighted total
  rating: AtsRating;
  tiers: {
    parsing: TierResult;
    match?: TierResult;
    recruiter: TierResult;
  };
  knockouts: KnockoutSignal[];
  summary: string;
}

export interface RubricEntry {
  id: string;
  tier: Tier;
  weight: AtsCheckWeight;
  description: string;
  evidenceLevel: 'evidence' | 'convention';
  source?: string; // URL or doc reference
}

export interface AtsOptions {
  language?: string;
  jobDescription?: string;
  threshold?: number;
  config?: AtsConfig;
}

export interface AtsConfig {
  weights: {
    tiers: { parsing: number; match: number; recruiter: number };
    checks: Record<string, AtsCheckWeight>;
  };
  thresholds: {
    rating: { excellent: number; good: number; needsWork: number };
    grade: { A: number; B: number; C: number; D: number };
    seniorYoeCutoff: number;
    wordCount: { min: number; max: number; seniorMax: number };
    bulletsPerRole: { min: number; max: number; seniorMax: number };
  };
  disable: string[];
  locale: string;
}
