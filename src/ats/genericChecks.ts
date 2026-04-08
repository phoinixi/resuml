import type { ResumeSchema } from '../types/resume';
import type { AtsCheck } from './types';
import { getLanguageData } from './i18n/index';

type CheckFn = (resume: ResumeSchema, language: string) => AtsCheck;

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function getFirstWord(text: string): string {
  return text.trim().split(/\s+/)[0]?.toLowerCase().replace(/[^a-zA-ZäöüßÄÖÜàáâãéèêëíìîïóòôõúùûüñç]/g, '') || '';
}

const contactComplete: CheckFn = (resume) => {
  const b = resume.basics;
  const hasName = !!b?.name;
  const hasEmail = !!b?.email;
  const hasPhone = !!b?.phone;
  const hasCity = !!b?.location?.city;
  const fields = [hasName, hasEmail, hasPhone, hasCity];
  const presentCount = fields.filter(Boolean).length;
  const passed = presentCount === fields.length;
  const missing: string[] = [];
  if (!hasName) missing.push('name');
  if (!hasEmail) missing.push('email');
  if (!hasPhone) missing.push('phone');
  if (!hasCity) missing.push('location.city');

  return {
    id: 'contact-complete',
    category: 'contact',
    weight: 'high',
    passed,
    score: Math.round((presentCount / fields.length) * 100),
    message: passed
      ? 'Contact information is complete.'
      : `Missing contact fields: ${missing.join(', ')}.`,
    suggestion: passed ? undefined : `Add the following to your basics section: ${missing.join(', ')}.`,
  };
};

const hasSummary: CheckFn = (resume) => {
  const summary = resume.basics?.summary?.trim();
  if (!summary) {
    return {
      id: 'has-summary',
      category: 'content',
      weight: 'high',
      passed: false,
      score: 0,
      message: 'No professional summary found.',
      suggestion: 'Add a 2-4 sentence professional summary to your basics section highlighting your experience and key skills.',
    };
  }
  const words = wordCount(summary);
  const tooShort = words < 15;
  const tooLong = words > 100;
  const passed = !tooShort && !tooLong;
  let score = 100;
  if (tooShort) score = Math.round((words / 15) * 60);
  if (tooLong) score = Math.max(60, 100 - (words - 100));

  return {
    id: 'has-summary',
    category: 'content',
    weight: 'high',
    passed,
    score,
    message: tooShort
      ? `Summary is too short (${words} words). Aim for 15-100 words.`
      : tooLong
        ? `Summary is too long (${words} words). Aim for 15-100 words.`
        : `Summary length is good (${words} words).`,
    suggestion: tooShort
      ? 'Expand your summary to describe your experience, expertise, and career goals in 15-100 words.'
      : tooLong
        ? 'Shorten your summary to the most impactful 15-100 words. Focus on key achievements and expertise.'
        : undefined,
  };
};

const hasLinkedin: CheckFn = (resume) => {
  const profiles = resume.basics?.profiles || [];
  const linkedin = profiles.find(
    (p) => p.network?.toLowerCase() === 'linkedin' || p.url?.toLowerCase().includes('linkedin.com')
  );
  return {
    id: 'has-linkedin',
    category: 'contact',
    weight: 'medium',
    passed: !!linkedin,
    score: linkedin ? 100 : 0,
    message: linkedin ? 'LinkedIn profile found.' : 'No LinkedIn profile found.',
    suggestion: linkedin ? undefined : 'Add a LinkedIn profile to your basics.profiles section.',
  };
};

const workHighlights: CheckFn = (resume) => {
  const work = resume.work || [];
  if (work.length === 0) {
    return {
      id: 'work-highlights',
      category: 'content',
      weight: 'high',
      passed: false,
      score: 0,
      message: 'No work experience entries found.',
      suggestion: 'Add work experience entries with highlights describing your accomplishments.',
    };
  }
  const minHighlights = 2;
  const entriesWithEnough = work.filter((w) => (w.highlights?.length || 0) >= minHighlights);
  const passed = entriesWithEnough.length === work.length;
  const score = Math.round((entriesWithEnough.length / work.length) * 100);
  const lacking = work
    .filter((w) => (w.highlights?.length || 0) < minHighlights)
    .map((w) => `"${w.position || 'Unknown'} at ${w.name || 'Unknown'}" (${w.highlights?.length || 0} highlights)`);

  return {
    id: 'work-highlights',
    category: 'content',
    weight: 'high',
    passed,
    score,
    message: passed
      ? 'All work entries have sufficient highlights.'
      : `Some work entries need more highlights: ${lacking.join('; ')}.`,
    suggestion: passed
      ? undefined
      : `Add at least ${minHighlights} bullet-point highlights to each work entry describing specific accomplishments.`,
  };
};

const actionVerbs: CheckFn = (resume, language) => {
  const langData = getLanguageData(language);
  const verbs = new Set(langData.actionVerbs);
  const allHighlights: { text: string; source: string }[] = [];

  for (const w of resume.work || []) {
    for (const h of w.highlights || []) {
      allHighlights.push({ text: h, source: `${w.position || ''} at ${w.name || ''}` });
    }
  }
  for (const p of resume.projects || []) {
    for (const h of p.highlights || []) {
      allHighlights.push({ text: h, source: `project "${p.name || ''}"` });
    }
  }
  for (const v of resume.volunteer || []) {
    for (const h of v.highlights || []) {
      allHighlights.push({ text: h, source: `volunteer at ${v.organization || ''}` });
    }
  }

  if (allHighlights.length === 0) {
    return {
      id: 'action-verbs',
      category: 'content',
      weight: 'high',
      passed: false,
      score: 0,
      message: 'No highlights found to check for action verbs.',
      suggestion: 'Add highlights to your work, project, or volunteer entries starting with strong action verbs.',
    };
  }

  const withActionVerb = allHighlights.filter((h) => verbs.has(getFirstWord(h.text)));
  const withoutActionVerb = allHighlights.filter((h) => !verbs.has(getFirstWord(h.text)));
  const passed = withoutActionVerb.length === 0;
  const score = Math.round((withActionVerb.length / allHighlights.length) * 100);

  const examples = withoutActionVerb.slice(0, 3).map(
    (h) => `"${h.text.substring(0, 60)}${h.text.length > 60 ? '...' : ''}" (${h.source})`
  );

  return {
    id: 'action-verbs',
    category: 'content',
    weight: 'high',
    passed,
    score,
    message: passed
      ? 'All highlights start with action verbs.'
      : `${withoutActionVerb.length} of ${allHighlights.length} highlights don't start with an action verb.`,
    suggestion: passed
      ? undefined
      : `Start each highlight with a strong action verb (e.g., "Developed", "Implemented", "Led"). Fix: ${examples.join('; ')}.`,
  };
};

const quantifiedImpact: CheckFn = (resume) => {
  const quantPattern = /\d+%?|\$[\d,]+|[\d,]+\+?\s*(users|clients|customers|people|team|members|projects|applications|servers|services|endpoints|requests|transactions)/i;
  const allHighlights: string[] = [];

  for (const w of resume.work || []) {
    allHighlights.push(...(w.highlights || []));
  }
  for (const p of resume.projects || []) {
    allHighlights.push(...(p.highlights || []));
  }

  if (allHighlights.length === 0) {
    return {
      id: 'quantified-impact',
      category: 'content',
      weight: 'medium',
      passed: false,
      score: 0,
      message: 'No highlights found to check for quantified impact.',
      suggestion: 'Add measurable results to your highlights (e.g., "Reduced load time by 40%", "Managed team of 8").',
    };
  }

  const quantified = allHighlights.filter((h) => quantPattern.test(h));
  const ratio = quantified.length / allHighlights.length;
  // At least 50% of highlights should have numbers
  const passed = ratio >= 0.5;
  const score = Math.min(100, Math.round(ratio * 200)); // 50% = 100 score

  return {
    id: 'quantified-impact',
    category: 'content',
    weight: 'medium',
    passed,
    score,
    message: passed
      ? `${quantified.length} of ${allHighlights.length} highlights include quantified results.`
      : `Only ${quantified.length} of ${allHighlights.length} highlights include numbers or metrics.`,
    suggestion: passed
      ? undefined
      : 'Add specific numbers, percentages, or metrics to your highlights (e.g., "Improved performance by 30%", "Managed $2M budget").',
  };
};

const dateConsistency: CheckFn = (resume) => {
  const work = resume.work || [];
  if (work.length < 2) {
    return {
      id: 'date-consistency',
      category: 'structure',
      weight: 'medium',
      passed: true,
      score: 100,
      message: 'Date consistency check passed (fewer than 2 work entries).',
    };
  }

  const issues: string[] = [];

  // Check that each entry has a startDate
  for (const w of work) {
    if (!w.startDate) {
      issues.push(`"${w.position || 'Unknown'} at ${w.name || 'Unknown'}" is missing a start date.`);
    }
  }

  // Check for gaps > 6 months between consecutive jobs
  const sorted = [...work]
    .filter((w): w is typeof w & { startDate: string } => Boolean(w.startDate))
    .sort((a, b) => (a.startDate > b.startDate ? 1 : -1));

  for (let i = 0; i < sorted.length - 1; i++) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const current = sorted[i]!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const next = sorted[i + 1]!;
    const endDate = current.endDate ?? current.startDate;
    const gapMs = new Date(next.startDate).getTime() - new Date(endDate).getTime();
    const gapMonths = gapMs / (1000 * 60 * 60 * 24 * 30);

    if (gapMonths > 6) {
      issues.push(
        `Gap of ~${Math.round(gapMonths)} months between "${current.name ?? 'Unknown'}" (ended ${endDate}) and "${next.name ?? 'Unknown'}" (started ${next.startDate}).`
      );
    }
  }

  const passed = issues.length === 0;
  return {
    id: 'date-consistency',
    category: 'structure',
    weight: 'medium',
    passed,
    score: passed ? 100 : Math.max(0, 100 - issues.length * 25),
    message: passed
      ? 'Work experience dates are consistent with no major gaps.'
      : `Date issues found: ${issues.join(' ')}`,
    suggestion: passed
      ? undefined
      : 'Ensure all work entries have start dates. If there are employment gaps, consider adding freelance, volunteer, or education entries to fill them.',
  };
};

const skillsPopulated: CheckFn = (resume) => {
  const skills = resume.skills || [];
  const minCategories = 3;
  const categoriesWithKeywords = skills.filter((s) => s.keywords && s.keywords.length > 0);
  const passed = categoriesWithKeywords.length >= minCategories;
  const score = Math.min(100, Math.round((categoriesWithKeywords.length / minCategories) * 100));

  return {
    id: 'skills-populated',
    category: 'structure',
    weight: 'medium',
    passed,
    score,
    message: passed
      ? `${categoriesWithKeywords.length} skill categories with keywords found.`
      : `Only ${categoriesWithKeywords.length} skill categories with keywords found (need at least ${minCategories}).`,
    suggestion: passed
      ? undefined
      : `Add at least ${minCategories} skill categories with specific keywords (e.g., "Languages: TypeScript, Python", "Frameworks: React, Node.js").`,
  };
};

const educationComplete: CheckFn = (resume) => {
  const education = resume.education || [];
  if (education.length === 0) {
    return {
      id: 'education-complete',
      category: 'structure',
      weight: 'low',
      passed: false,
      score: 0,
      message: 'No education entries found.',
      suggestion: 'Add at least one education entry with institution, area, and studyType.',
    };
  }

  const complete = education.filter((e) => e.institution && e.area && e.studyType);
  const passed = complete.length === education.length;
  const score = Math.round((complete.length / education.length) * 100);
  const incomplete = education
    .filter((e) => !e.institution || !e.area || !e.studyType)
    .map((e) => {
      const missing: string[] = [];
      if (!e.institution) missing.push('institution');
      if (!e.area) missing.push('area');
      if (!e.studyType) missing.push('studyType');
      return `"${e.institution || 'Unknown'}" missing: ${missing.join(', ')}`;
    });

  return {
    id: 'education-complete',
    category: 'structure',
    weight: 'low',
    passed,
    score,
    message: passed
      ? 'All education entries are complete.'
      : `Incomplete education entries: ${incomplete.join('; ')}.`,
    suggestion: passed
      ? undefined
      : 'Ensure each education entry has institution, area (field of study), and studyType (degree type).',
  };
};

const noPronouns: CheckFn = (resume, language) => {
  const langData = getLanguageData(language);
  const pronounSet = new Set(langData.pronouns);

  const textBlocks: { text: string; source: string }[] = [];

  if (resume.basics?.summary) {
    textBlocks.push({ text: resume.basics.summary, source: 'summary' });
  }
  for (const w of resume.work || []) {
    if (w.summary) textBlocks.push({ text: w.summary, source: `work summary (${w.name || 'Unknown'})` });
    for (const h of w.highlights || []) {
      textBlocks.push({ text: h, source: `work highlight (${w.name || 'Unknown'})` });
    }
  }
  for (const p of resume.projects || []) {
    if (p.description) textBlocks.push({ text: p.description, source: `project (${p.name || 'Unknown'})` });
    for (const h of p.highlights || []) {
      textBlocks.push({ text: h, source: `project highlight (${p.name || 'Unknown'})` });
    }
  }

  const found: { pronoun: string; source: string }[] = [];
  for (const block of textBlocks) {
    const words = block.text.toLowerCase().split(/\s+/);
    for (const word of words) {
      const clean = word.replace(/[^a-zA-ZäöüßÄÖÜ]/g, '');
      if (pronounSet.has(clean)) {
        found.push({ pronoun: clean, source: block.source });
      }
    }
  }

  const passed = found.length === 0;
  const uniquePronouns = [...new Set(found.map((f) => f.pronoun))];
  const examples = found.slice(0, 3).map((f) => `"${f.pronoun}" in ${f.source}`);

  return {
    id: 'no-pronouns',
    category: 'content',
    weight: 'medium',
    passed,
    score: passed ? 100 : Math.max(0, 100 - found.length * 15),
    message: passed
      ? 'No first-person pronouns found in resume content.'
      : `Found ${found.length} first-person pronoun(s): ${uniquePronouns.join(', ')}.`,
    suggestion: passed
      ? undefined
      : `Remove first-person pronouns from your resume. Instead of "I managed a team", write "Managed a team". Found: ${examples.join('; ')}.`,
  };
};

const sectionCompleteness: CheckFn = (resume) => {
  const required = ['basics', 'work', 'education', 'skills'] as const;
  const present = required.filter((section) => {
    const value = resume[section];
    if (Array.isArray(value)) return value.length > 0;
    return value !== undefined;
  });
  const missing = required.filter((s) => !present.includes(s));
  const passed = missing.length === 0;

  return {
    id: 'section-completeness',
    category: 'structure',
    weight: 'low',
    passed,
    score: Math.round((present.length / required.length) * 100),
    message: passed
      ? 'All essential resume sections are present.'
      : `Missing essential sections: ${missing.join(', ')}.`,
    suggestion: passed ? undefined : `Add the following sections to your resume: ${missing.join(', ')}.`,
  };
};

export const allChecks: CheckFn[] = [
  contactComplete,
  hasSummary,
  hasLinkedin,
  workHighlights,
  actionVerbs,
  quantifiedImpact,
  dateConsistency,
  skillsPopulated,
  educationComplete,
  noPronouns,
  sectionCompleteness,
];

export function runGenericChecks(resume: ResumeSchema, language: string): AtsCheck[] {
  return allChecks.map((check) => check(resume, language));
}
