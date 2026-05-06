import type { ResumeSchema } from '../../types/resume';

export function computeYoeYears(work: ResumeSchema['work']): number {
  const ranges = (work || [])
    .filter((w) => w.startDate)
    .map((w) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const s = new Date(w.startDate!).getTime();
      const e = w.endDate ? new Date(w.endDate).getTime() : Date.now();
      return [s, e] as [number, number];
    })
    .sort((a, b) => a[0] - b[0]);
  if (ranges.length === 0) return 0;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const merged: [number, number][] = [ranges[0]!];
  for (let i = 1; i < ranges.length; i++) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const last = merged[merged.length - 1]!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const curr = ranges[i]!;
    if (curr[0] <= last[1]) last[1] = Math.max(last[1], curr[1]);
    else merged.push(curr);
  }
  const ms = merged.reduce((sum, [s, e]) => sum + (e - s), 0);
  return ms / (1000 * 60 * 60 * 24 * 365.25);
}
