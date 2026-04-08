import { useState, useEffect, useRef } from 'react';
import type { ResumeSchema } from '../../types/resume';
import type { AtsResult } from '../../ats/types';
import { analyzeAts } from '../../ats/index';

export function useAts(resume: ResumeSchema | null): AtsResult | null {
  const [result, setResult] = useState<AtsResult | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!resume) {
      setResult(null);
      return;
    }

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      try {
        const r = analyzeAts(resume, { language: 'en' });
        setResult(r);
      } catch {
        setResult(null);
      }
    }, 500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [resume]);

  return result;
}
