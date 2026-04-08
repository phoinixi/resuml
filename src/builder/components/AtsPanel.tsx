import { h } from 'preact';
import type { AtsResult } from '../../ats/types';

interface AtsPanelProps {
  result: AtsResult | null;
  onClose: () => void;
}

function scoreColor(score: number): string {
  if (score >= 80) return '#4ade80';
  if (score >= 60) return '#fbbf24';
  if (score >= 40) return '#fb923c';
  return '#ef4444';
}

function ratingLabel(rating: string): string {
  switch (rating) {
    case 'excellent': return 'Excellent';
    case 'good': return 'Good';
    case 'needs-work': return 'Needs Work';
    case 'poor': return 'Poor';
    default: return rating;
  }
}

export function AtsPanel({ result, onClose }: AtsPanelProps) {
  if (!result) {
    return (
      <div class="ats-panel">
        <div class="ats-panel-header">
          <span>ATS Score</span>
          <button class="ats-panel-close" onClick={onClose}>×</button>
        </div>
        <div class="ats-panel-empty">
          <span>Edit your resume to see the ATS score</span>
        </div>
      </div>
    );
  }

  const categoryGroups: Record<string, typeof result.checks> = {};
  for (const check of result.checks) {
    if (!categoryGroups[check.category]) categoryGroups[check.category] = [];
    categoryGroups[check.category].push(check);
  }

  return (
    <div class="ats-panel">
      <div class="ats-panel-header">
        <span>ATS Score</span>
        <button class="ats-panel-close" onClick={onClose}>×</button>
      </div>

      <div class="ats-panel-score">
        <div class="ats-score-circle" style={{ borderColor: scoreColor(result.score) }}>
          <span class="ats-score-number" style={{ color: scoreColor(result.score) }}>{result.score}</span>
          <span class="ats-score-label">/ 100</span>
        </div>
        <span class="ats-rating" style={{ color: scoreColor(result.score) }}>
          {ratingLabel(result.rating)}
        </span>
      </div>

      <div class="ats-panel-checks">
        {Object.entries(categoryGroups).map(([category, checks]) => (
          <div key={category} class="ats-category">
            <div class="ats-category-title">{category}</div>
            {checks.map((check) => (
              <div key={check.id} class={`ats-check ${check.passed ? 'passed' : 'failed'}`}>
                <span class="ats-check-icon">{check.passed ? '✓' : '✗'}</span>
                <div class="ats-check-content">
                  <span class="ats-check-msg">{check.message}</span>
                  {check.suggestion && (
                    <span class="ats-check-suggestion">{check.suggestion}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {result.keywords && (
        <div class="ats-keywords">
          <div class="ats-category-title">Keywords ({result.keywords.matchPercentage}% match)</div>
          {result.keywords.matched.length > 0 && (
            <div class="ats-kw-group">
              <span class="ats-kw-label matched">Matched:</span>
              <div class="ats-kw-tags">
                {result.keywords.matched.map((kw) => (
                  <span key={kw} class="ats-kw-tag matched">{kw}</span>
                ))}
              </div>
            </div>
          )}
          {result.keywords.missing.length > 0 && (
            <div class="ats-kw-group">
              <span class="ats-kw-label missing">Missing:</span>
              <div class="ats-kw-tags">
                {result.keywords.missing.map((kw) => (
                  <span key={kw} class="ats-kw-tag missing">{kw}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
