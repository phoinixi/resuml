import { useState, useCallback, useRef } from 'react';
import { parse, stringify } from 'yaml';
import type { ResumeSchema } from '../../types/resume';

export function useResume(initialYaml: string) {
  const [yaml, setYamlRaw] = useState(initialYaml);
  const [resume, setResume] = useState<ResumeSchema | null>(() => {
    try { return parse(initialYaml) as ResumeSchema; }
    catch { return null; }
  });
  const [error, setError] = useState<string | null>(null);
  const debounceRef = useRef<number | null>(null);

  const setYaml = useCallback((newYaml: string) => {
    setYamlRaw(newYaml);
    // Debounce parsing
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      try {
        const parsed = parse(newYaml) as ResumeSchema | null;
        if (parsed !== null) {
          setResume(parsed);
          setError(null);
        } else {
          setError('YAML did not parse to an object');
        }
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : 'Invalid YAML');
      }
    }, 300);
  }, []);

  // Called from form mode to update the resume object directly
  const updateResume = useCallback((newResume: ResumeSchema) => {
    setResume(newResume);
    setError(null);
    try {
      const newYaml = stringify(newResume, { indent: 2, lineWidth: 0 });
      setYamlRaw(newYaml);
    } catch {
      // Ignore stringify errors
    }
  }, []);

  return { yaml, resume, error, setYaml, updateResume };
}
