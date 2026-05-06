import type { ResumeSchema } from '../../types/resume';

export function computeYoeYears(work: ResumeSchema['work']): number {
  const ranges = (work || [])
    .filter((w) => w.startDate)
    .map((w) => {
      const s = new Date(w.startDate!).getTime();
      const e = w.endDate ? new Date(w.endDate).getTime() : Date.now();
      return [s, e] as [number, number];
    })
    .sort((a, b) => a[0] - b[0]);
  if (ranges.length === 0) return 0;
  const merged: [number, number][] = [ranges[0]!];
  for (let i = 1; i < ranges.length; i++) {
    const last = merged[merged.length - 1]!;
    const curr = ranges[i]!;
    if (curr[0] <= last[1]) last[1] = Math.max(last[1], curr[1]);
    else merged.push(curr);
  }
  const ms = merged.reduce((sum, [s, e]) => sum + (e - s), 0);
  return ms / (1000 * 60 * 60 * 24 * 365.25);
}
