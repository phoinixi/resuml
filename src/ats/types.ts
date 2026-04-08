export type AtsCheckCategory = 'contact' | 'content' | 'structure' | 'keywords';
export type AtsCheckWeight = 'high' | 'medium' | 'low';
export type AtsRating = 'excellent' | 'good' | 'needs-work' | 'poor';

export interface AtsCheck {
  id: string;
  category: AtsCheckCategory;
  weight: AtsCheckWeight;
  passed: boolean;
  score: number; // 0-100
  message: string;
  suggestion?: string;
}

export interface AtsKeywordMatch {
  matched: string[];
  missing: string[];
  matchPercentage: number;
}

export interface AtsResult {
  score: number; // 0-100
  rating: AtsRating;
  checks: AtsCheck[];
  keywords?: AtsKeywordMatch;
  summary: string;
}

export interface AtsOptions {
  language?: string;
  jobDescription?: string;
  threshold?: number;
}
