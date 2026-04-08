import type { ResumeSchema } from '../types/resume';
import type { AtsKeywordMatch } from './types';
import { getLanguageData } from './i18n/index';

/**
 * Tokenize text into normalized words, removing stop words and short tokens.
 */
function tokenize(text: string, stopWords: Set<string>): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9äöüßÄÖÜàáâãéèêëíìîïóòôõúùûüñç\s-]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 2 && !stopWords.has(word));
}

/**
 * Simple stemmer: strips common suffixes for rough normalization.
 * This avoids the heavy `natural` dependency while still providing useful matching.
 */
function simpleStem(word: string, language: string): string {
  if (language === 'de') {
    return word
      .replace(/(ung|heit|keit|schaft|lich|isch|iert|ieren|tion|ment)$/, '')
      .replace(/(en|er|es|em|te|st)$/, '');
  }
  // English
  return word
    .replace(/(ment|ness|tion|sion|ance|ence|ity|ing|ous|ive|able|ible|ful|less)$/, '')
    .replace(/(ies)$/, 'y')
    .replace(/(es|ed|s)$/, '');
}

/**
 * Extract all text content from a resume.
 */
function extractResumeText(resume: ResumeSchema): string {
  const parts: string[] = [];

  if (resume.basics?.summary) parts.push(resume.basics.summary);
  if (resume.basics?.label) parts.push(resume.basics.label);

  for (const w of resume.work || []) {
    if (w.position) parts.push(w.position);
    if (w.summary) parts.push(w.summary);
    parts.push(...(w.highlights || []));
  }
  for (const s of resume.skills || []) {
    if (s.name) parts.push(s.name);
    parts.push(...(s.keywords || []));
  }
  for (const p of resume.projects || []) {
    if (p.name) parts.push(p.name);
    if (p.description) parts.push(p.description);
    parts.push(...(p.highlights || []));
  }
  for (const e of resume.education || []) {
    if (e.area) parts.push(e.area);
    if (e.studyType) parts.push(e.studyType);
    parts.push(...(e.courses || []));
  }
  for (const c of resume.certificates || []) {
    if (c.name) parts.push(c.name);
  }

  return parts.join(' ');
}

/**
 * Build a TF (term frequency) map from tokenized text.
 */
function buildTfMap(tokens: string[]): Map<string, number> {
  const tf = new Map<string, number>();
  for (const token of tokens) {
    tf.set(token, (tf.get(token) || 0) + 1);
  }
  return tf;
}

/**
 * Extract the most important keywords from a job description using TF-based ranking.
 * Words that appear more frequently (and aren't stop words) are considered more important.
 */
function extractKeywords(text: string, language: string, maxKeywords: number = 30): string[] {
  const langData = getLanguageData(language);
  const stopWords = new Set(langData.stopWords);
  const tokens = tokenize(text, stopWords);
  const stemmed = tokens.map((t) => simpleStem(t, language));
  const tf = buildTfMap(stemmed);

  // Keep a mapping from stem → original token (first occurrence)
  const stemToOriginal = new Map<string, string>();
  for (let i = 0; i < tokens.length; i++) {
    const stem = stemmed[i] ?? '';
    if (!stemToOriginal.has(stem)) {
      stemToOriginal.set(stem, tokens[i] ?? '');
    }
  }

  // Sort by frequency, take top N
  return [...tf.entries()]
    .filter(([stem]) => stem.length > 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([stem]) => stemToOriginal.get(stem) || stem);
}

/**
 * Match job description keywords against resume content.
 * Uses stemmed matching for fuzzy equivalence.
 */
export function matchJobDescription(
  resume: ResumeSchema,
  jobDescription: string,
  language: string = 'en'
): AtsKeywordMatch {
  const langData = getLanguageData(language);
  const stopWords = new Set(langData.stopWords);

  // Extract keywords from JD
  const jdKeywords = extractKeywords(jobDescription, language);

  // Build stemmed set from resume content
  const resumeText = extractResumeText(resume);
  const resumeTokens = tokenize(resumeText, stopWords);
  const resumeStems = new Set(resumeTokens.map((t) => simpleStem(t, language)));

  // Also include raw tokens for exact matching (handles acronyms, tool names)
  const resumeTokenSet = new Set(resumeTokens);

  // Match
  const matched: string[] = [];
  const missing: string[] = [];

  for (const keyword of jdKeywords) {
    const stem = simpleStem(keyword, language);
    if (resumeStems.has(stem) || resumeTokenSet.has(keyword.toLowerCase())) {
      matched.push(keyword);
    } else {
      missing.push(keyword);
    }
  }

  const matchPercentage = jdKeywords.length > 0
    ? Math.round((matched.length / jdKeywords.length) * 100)
    : 0;

  return { matched, missing, matchPercentage };
}
