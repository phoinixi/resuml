
import { useMemo, useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import type { AtsResult } from '../../ats/types';
import { groupChecksByCategory } from '../utils/atsGrouping';

interface AtsPanelProps {
  result: AtsResult | null;
  jobDescription: string;
  onJobDescriptionChange: (jd: string) => void;
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

export function AtsPanel({ result, jobDescription, onJobDescriptionChange, onClose }: AtsPanelProps) {
  const [jdExpanded, setJdExpanded] = useState(!!jobDescription);
  const categoryGroups = useMemo(
    () => result ? groupChecksByCategory(result.checks) : {},
    [result],
  );

  if (!result) {
    return (
      <div className="ats-panel">
        <div className="ats-panel-header">
          <span>ATS Score</span>
          <button className="ats-panel-close" onClick={onClose}><X size={16} /></button>
        </div>
        <div className="ats-panel-empty">
          <span>Edit your resume to see the ATS score</span>
        </div>
      </div>
    );
  }

  return (
    <div className="ats-panel">
      <div className="ats-panel-header">
        <span>ATS Score</span>
        <button className="ats-panel-close" onClick={onClose}><X size={16} /></button>
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

      {/* Job Description input */}
      <div className="ats-jd-section">
        <button className="ats-jd-toggle" onClick={() => { setJdExpanded(!jdExpanded); }}>
          <span>{jobDescription ? 'Job Description ✓' : 'Match Against Job'}</span>
          {jdExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {jdExpanded && (
          <div className="ats-jd-input">
            {!jobDescription && (
              <p className="ats-jd-hint">
                Paste a job description to see how well your resume matches — keywords, skill gaps, and fit level.
              </p>
            )}
            <textarea
              className="ats-jd-textarea"
              placeholder="Paste the full job description here..."
              value={jobDescription}
              onChange={(e) => { onJobDescriptionChange(e.target.value); }}
              rows={5}
            />
            {jobDescription && (
              <button className="ats-jd-clear" onClick={() => { onJobDescriptionChange(''); }}>Clear</button>
            )}
          </div>
        )}
      </div>

      {/* Fit Assessment */}
      {result.fitAssessment && (
        <div className="ats-fit" style={{ borderLeftColor: fitColor(result.fitAssessment.level) }}>
          <span className="ats-fit-label" style={{ color: fitColor(result.fitAssessment.level) }}>
            {result.fitAssessment.level === 'strong' ? 'Strong Fit' : result.fitAssessment.level === 'partial' ? 'Partial Fit' : 'Weak Fit'}
          </span>
          <span className="ats-fit-msg">{result.fitAssessment.message}</span>
        </div>
      )}

      <div className="ats-panel-checks">
        {Object.entries(categoryGroups).map(([category, checks]) => (
          <div key={category} className="ats-category">
            <div className="ats-category-title">{category}</div>
            {checks.map((check) => (
              <div key={check.id} className={`ats-check ${check.passed ? 'passed' : 'failed'}`}>
                <span className={`ats-check-icon ${check.passed ? 'passed' : 'failed'}`}>{check.passed ? '✓' : '✗'}</span>
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
        </div>
      )}
    </div>
  );
}
