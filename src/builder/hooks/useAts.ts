import { useState, useEffect, useRef } from 'react';
import type { ResumeSchema } from '../../types/resume';
import type { AtsResult } from '../../ats/types';
import { analyzeAts } from '../../ats/index';

/**
 * Runs ATS analysis only when a job description is provided.
 * Without a JD there is no job to tailor for — the panel shows the JD input
 * instead of a decontextualized score.
 */
export function useAts(resume: ResumeSchema | null, jobDescription?: string): AtsResult | null {
  const [result, setResult] = useState<AtsResult | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const jd = jobDescription?.trim();
    if (!resume || !jd) {
      setResult(null);
      return;
    }

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      try {
        const r = analyzeAts(resume, { language: 'en', jobDescription: jd });
        setResult(r);
      } catch {
        setResult(null);
      }
    }, 500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [resume, jobDescription]);

  return result;
}
