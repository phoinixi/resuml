import { useMemo, useEffect } from 'react';
import { X, Target, Briefcase } from 'lucide-react';
import type { AtsResult } from '../../ats/types';
import { groupChecksByCategory } from '../utils/atsGrouping';

interface AtsPanelProps {
  result: AtsResult | null;
  hasJobDescription: boolean;
  onOpenJdModal: () => void;
  onClose: () => void;
}

function scoreColor(score: number): string {
  if (score >= 80) return '#4ade80';
  if (score >= 60) return '#fbbf24';
  if (score >= 40) return '#fb923c';
  return '#ef4444';
}

function fitColor(level: string): string {
  if (level === 'strong') return '#4ade80';
  if (level === 'partial') return '#fbbf24';
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

export function AtsPanel({ result, hasJobDescription, onOpenJdModal, onClose }: AtsPanelProps) {
  const categoryGroups = useMemo(
    () => result ? groupChecksByCategory(result.checks) : {},
    [result],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); };
  }, [onClose]);

  return (
    <aside className="ats-panel" role="complementary" aria-label="ATS analysis">
      <div className="ats-panel-header">
        <span className="ats-panel-title">
          <Target size={16} aria-hidden="true" />
          ATS Score
        </span>
        <button
          className="ats-panel-close"
          onClick={onClose}
          aria-label="Close ATS panel"
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>

      {!hasJobDescription ? (
        <div className="ats-panel-cta">
          <div className="ats-panel-cta-icon" aria-hidden="true">
            <Briefcase size={28} />
          </div>
          <h3 className="ats-panel-cta-title">Add a job description</h3>
          <p className="ats-panel-cta-desc">
            ATS scoring compares your resume against a specific role.
            Add a job description to see keyword match, skill gaps and fit.
          </p>
          <button
            type="button"
            className="ats-panel-cta-btn"
            onClick={onOpenJdModal}
          >
            <Briefcase size={14} aria-hidden="true" />
            Add job description
          </button>
        </div>
      ) : result ? (
        <div className="ats-panel-body">
          <div className="ats-panel-score">
            <div
              className="ats-score-circle"
              style={{ borderColor: scoreColor(result.score) }}
              role="img"
              aria-label={`ATS score ${result.score} out of 100, ${ratingLabel(result.rating)}`}
            >
              <span className="ats-score-number" style={{ color: scoreColor(result.score) }}>{result.score}</span>
              <span className="ats-score-label">/ 100</span>
            </div>
            <span className="ats-rating" style={{ color: scoreColor(result.score) }}>
              {ratingLabel(result.rating)}
            </span>
          </div>

          {result.fitAssessment && (
            <div
              className="ats-fit"
              style={{ borderLeftColor: fitColor(result.fitAssessment.level) }}
              role="status"
            >
              <span className="ats-fit-label" style={{ color: fitColor(result.fitAssessment.level) }}>
                {result.fitAssessment.level === 'strong' ? 'Strong Fit' : result.fitAssessment.level === 'partial' ? 'Partial Fit' : 'Weak Fit'}
              </span>
              <span className="ats-fit-msg">{result.fitAssessment.message}</span>
            </div>
          )}

          {result.keywords && (
            <section className="ats-keywords" aria-label="Keyword match">
              <div className="ats-category-title">Keywords — {result.keywords.matchPercentage}% match</div>
              {result.keywords.missing.length > 0 && (
                <div className="ats-kw-group">
                  <span className="ats-kw-label missing">Required by the job — add to your resume:</span>
                  <div className="ats-kw-tags">
                    {result.keywords.missing.map((kw) => (
                      <span key={kw} className="ats-kw-tag missing">{kw}</span>
                    ))}
                  </div>
                </div>
              )}
              {result.keywords.matched.length > 0 && (
                <div className="ats-kw-group">
                  <span className="ats-kw-label matched">In your resume &amp; the job:</span>
                  <div className="ats-kw-tags">
                    {result.keywords.matched.map((kw) => (
                      <span key={kw} className="ats-kw-tag matched">{kw}</span>
                    ))}
                  </div>
                </div>
              )}
              {result.keywords.extra.length > 0 && (
                <div className="ats-kw-group">
                  <span className="ats-kw-label extra">In your resume — not required by this job:</span>
                  <div className="ats-kw-tags">
                    {result.keywords.extra.map((kw) => (
                      <span key={kw} className="ats-kw-tag extra">{kw}</span>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          <section className="ats-panel-checks" aria-label="Resume checks">
            {Object.entries(categoryGroups).map(([category, checks]) => (
              <div key={category} className="ats-category">
                <div className="ats-category-title">{category}</div>
                {checks.map((check) => (
                  <div key={check.id} className={`ats-check ${check.passed ? 'passed' : 'failed'}`}>
                    <span
                      className={`ats-check-icon ${check.passed ? 'passed' : 'failed'}`}
                      aria-label={check.passed ? 'Passed' : 'Failed'}
                    >{check.passed ? '✓' : '✗'}</span>
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
          </section>

          <div className="ats-panel-footer">
            <button
              type="button"
              className="ats-panel-edit-jd"
              onClick={onOpenJdModal}
            >
              <Briefcase size={13} aria-hidden="true" /> Edit job description
            </button>
          </div>
        </div>
      ) : (
        <div className="ats-panel-empty">
          <span>Analyzing…</span>
        </div>
      )}
    </aside>
  );
}
