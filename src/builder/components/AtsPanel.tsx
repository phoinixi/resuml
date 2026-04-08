
import { useMemo } from 'react';
import type { AtsResult } from '../../ats/types';
import { groupChecksByCategory } from '../utils/atsGrouping';

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
      <div className="ats-panel">
        <div className="ats-panel-header">
          <span>ATS Score</span>
          <button className="ats-panel-close" onClick={onClose}>×</button>
        </div>
        <div className="ats-panel-empty">
          <span>Edit your resume to see the ATS score</span>
        </div>
      </div>
    );
  }

  const categoryGroups = useMemo(
    () => groupChecksByCategory(result.checks),
    [result.checks],
  );

  return (
    <div className="ats-panel">
      <div className="ats-panel-header">
        <span>ATS Score</span>
        <button className="ats-panel-close" onClick={onClose}>×</button>
      </div>

      <div className="ats-panel-score">
        <div className="ats-score-circle" style={{ borderColor: scoreColor(result.score) }}>
          <span className="ats-score-number" style={{ color: scoreColor(result.score) }}>{result.score}</span>
          <span className="ats-score-label">/ 100</span>
        </div>
        <span className="ats-rating" style={{ color: scoreColor(result.score) }}>
          {ratingLabel(result.rating)}
        </span>
      </div>

      <div className="ats-panel-checks">
        {Object.entries(categoryGroups).map(([category, checks]) => (
          <div key={category} className="ats-category">
            <div className="ats-category-title">{category}</div>
            {checks.map((check) => (
              <div key={check.id} className={`ats-check ${check.passed ? 'passed' : 'failed'}`}>
                <span className="ats-check-icon">{check.passed ? '✓' : '✗'}</span>
                <div className="ats-check-content">
                  <span className="ats-check-msg">{check.message}</span>
                  {check.suggestion && (
                    <span className="ats-check-suggestion">{check.suggestion}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {result.keywords && (
        <div className="ats-keywords">
          <div className="ats-category-title">Keywords ({result.keywords.matchPercentage}% match)</div>
          {result.keywords.matched.length > 0 && (
            <div className="ats-kw-group">
              <span className="ats-kw-label matched">Matched:</span>
              <div className="ats-kw-tags">
                {result.keywords.matched.map((kw) => (
                  <span key={kw} className="ats-kw-tag matched">{kw}</span>
                ))}
              </div>
            </div>
          )}
          {result.keywords.missing.length > 0 && (
            <div className="ats-kw-group">
              <span className="ats-kw-label missing">Missing:</span>
              <div className="ats-kw-tags">
                {result.keywords.missing.map((kw) => (
                  <span key={kw} className="ats-kw-tag missing">{kw}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
