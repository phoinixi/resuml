import type { ResumeSchema } from '../../types/resume';
import type { CheckResult } from '../types';

type CheckFn = (resume: ResumeSchema, language: string) => CheckResult;

const ISO_DATE = /^\d{4}(-\d{2})?(-\d{2})?$/;

export const conventionalSections: CheckFn = (resume) => {
  const required = ['basics', 'work', 'education'] as const;
  const missing = required.filter((s) => {
    const v = resume[s];
    if (Array.isArray(v)) return v.length === 0;
    return v === undefined;
  });
  const passed = missing.length === 0;
  return {
    id: 'conventional-sections',
    tier: 'parsing',
    weight: 'high',
    status: passed ? 'pass' : 'fail',
    score: Math.round(((required.length - missing.length) / required.length) * 100),
    message: passed
      ? 'All conventional sections present.'
      : `Missing required sections: ${missing.join(', ')}.`,
    hints: passed ? [] : [`Add ${missing.join(', ')} to your YAML.`],
  };
};

export const dateFormatConsistency: CheckFn = (resume) => {
  const all: { date: string; where: string }[] = [];
  for (const w of resume.work || []) {
    if (w.startDate) all.push({ date: w.startDate, where: `work "${w.name || ''}".startDate` });
    if (w.endDate) all.push({ date: w.endDate, where: `work "${w.name || ''}".endDate` });
  }
  for (const e of resume.education || []) {
    if (e.startDate)
      all.push({ date: e.startDate, where: `education "${e.institution || ''}".startDate` });
    if (e.endDate)
      all.push({ date: e.endDate, where: `education "${e.institution || ''}".endDate` });
  }
  if (all.length === 0) {
    return {
      id: 'date-format-consistency',
      tier: 'parsing',
      weight: 'medium',
      status: 'skipped',
      score: 0,
      message: 'No dates to check.',
      hints: [],
    };
  }
  const bad = all.filter((d) => !ISO_DATE.test(d.date));
  const passed = bad.length === 0;
  return {
    id: 'date-format-consistency',
    tier: 'parsing',
    weight: 'medium',
    status: passed ? 'pass' : bad.length <= 1 ? 'warn' : 'fail',
    score: Math.round(((all.length - bad.length) / all.length) * 100),
    message: passed
      ? 'All dates use ISO-8601 format.'
      : `Non-ISO dates: ${bad
          .slice(0, 3)
          .map((b) => `${b.where}=${b.date}`)
          .join('; ')}.`,
    hints: passed ? [] : ['Use YYYY-MM or YYYY-MM-DD for every date field.'],
  };
};

export const contactInBody: CheckFn = (resume) => {
  const b = resume.basics;
  const checks: { ok: boolean; field: string }[] = [
    { ok: !!b?.name, field: 'name' },
    { ok: !!b?.email, field: 'email' },
    { ok: !!b?.phone, field: 'phone' },
    { ok: !!b?.location?.city, field: 'location.city' },
  ];
  const missing = checks.filter((c) => !c.ok).map((c) => c.field);
  const passed = missing.length === 0;
  return {
    id: 'contact-in-body',
    tier: 'parsing',
    weight: 'high',
    status: passed ? 'pass' : 'fail',
    score: Math.round(((checks.length - missing.length) / checks.length) * 100),
    message: passed
      ? 'Contact information present in basics.'
      : `Missing contact fields: ${missing.join(', ')}.`,
    hints: passed ? [] : [`Add ${missing.join(', ')} to basics.`],
  };
};

export const reverseChronOrder: CheckFn = (resume) => {
  const work = resume.work || [];
  if (work.length < 2) {
    return {
      id: 'reverse-chron-order',
      tier: 'parsing',
      weight: 'medium',
      status: 'skipped',
      score: 100,
      message: 'Single or no work entry.',
      hints: [],
    };
  }
  let outOfOrder = 0;
  for (let i = 0; i < work.length - 1; i++) {
    const curr = work[i];
    const next = work[i + 1];
    const a = curr?.startDate || '';
    const b = next?.startDate || '';
    if (a && b && a < b) outOfOrder++;
  }
  const passed = outOfOrder === 0;
  return {
    id: 'reverse-chron-order',
    tier: 'parsing',
    weight: 'medium',
    status: passed ? 'pass' : 'fail',
    score: passed ? 100 : Math.max(0, 100 - outOfOrder * 50),
    message: passed
      ? 'Work entries in reverse-chronological order.'
      : `${outOfOrder} pair(s) out of reverse-chronological order.`,
    hints: passed ? [] : ['Reorder work[] so the most recent role is first.'],
  };
};

export const educationComplete: CheckFn = (resume) => {
  const edu = resume.education || [];
  if (edu.length === 0) {
    return {
      id: 'education-complete',
      tier: 'parsing',
      weight: 'low',
      status: 'fail',
      score: 0,
      message: 'No education entries.',
      hints: ['Add at least one education entry with institution, area, and studyType.'],
    };
  }
  const incomplete = edu.filter((e) => !e.institution || !e.area || !e.studyType);
  const passed = incomplete.length === 0;
  return {
    id: 'education-complete',
    tier: 'parsing',
    weight: 'low',
    status: passed ? 'pass' : 'fail',
    score: Math.round(((edu.length - incomplete.length) / edu.length) * 100),
    message: passed
      ? 'All education entries complete.'
      : `${incomplete.length} education entry(ies) missing institution/area/studyType.`,
    hints: passed ? [] : ['Fill in institution, area and studyType for every education entry.'],
  };
};

export const allParsingChecks = [
  conventionalSections,
  dateFormatConsistency,
  contactInBody,
  reverseChronOrder,
  educationComplete,
];
