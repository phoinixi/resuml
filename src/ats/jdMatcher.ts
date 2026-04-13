import type { ResumeSchema } from '../types/resume';
import type { AtsKeywordMatch } from './types';
import { getLanguageData } from './i18n/index';

/**
 * Tokenize text into normalized words, removing stop words and short tokens.
 */
function tokenize(text: string, stopWords: Set<string>): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9äöüßÄÖÜàáâãéèêëíìîïóòôõúùûüñç\s/+-]/g, ' ')
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
 * Split JD into sections and identify which sections contain requirements/qualifications.
 * Words from requirement sections get a boost to prioritize technical skills over marketing fluff.
 */
function splitJdSections(text: string): { requirementText: string; otherText: string } {
  const lines = text.split('\n');
  const reqPatterns = /^(required|requirements?|minimum|preferred|qualifications?|must[\s-]have|nice[\s-]to[\s-]have|what you.?ll|what we.?re looking|skills|technical|you.?ll need|responsibilities)/i;

  let inReqSection = false;
  const reqLines: string[] = [];
  const otherLines: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    // Detect section headers
    if (reqPatterns.test(trimmed.replace(/[:#*-]/g, '').trim())) {
      inReqSection = true;
    } else if (/^(about|summary|who we are|our (company|team|mission)|description|overview|benefits|perks|compensation|salary)/i.test(trimmed.replace(/[:#*-]/g, '').trim())) {
      inReqSection = false;
    }

    if (inReqSection) {
      reqLines.push(line);
    } else {
      otherLines.push(line);
    }
  }

  return {
    requirementText: reqLines.join('\n'),
    otherText: otherLines.join('\n'),
  };
}

/**
 * Detect multi-word technical terms (e.g. "machine learning", "computer vision", "data pipelines").
 * These are more valuable than individual words and should be matched as units.
 */
function extractCompoundTerms(text: string): string[] {
  const patterns = [
    /\b(machine\s+learning)\b/gi,
    /\b(deep\s+learning)\b/gi,
    /\b(computer\s+vision)\b/gi,
    /\b(natural\s+language\s+processing)\b/gi,
    /\b(data\s+pipelines?)\b/gi,
    /\b(data\s+models?)\b/gi,
    /\b(data\s+engineering)\b/gi,
    /\b(data\s+structures?)\b/gi,
    /\b(data\s+quality)\b/gi,
    /\b(data\s+flows?)\b/gi,
    /\b(data\s+orchestration)\b/gi,
    /\b(data\s+warehou\w+)\b/gi,
    /\b(synthetic\s+data)\b/gi,
    /\b(ci\s*\/?\s*cd)\b/gi,
    /\b(rest\s+api)\b/gi,
    /\b(open\s+source)\b/gi,
    /\b(human[\s-]+in[\s-]+the[\s-]+loop)\b/gi,
    /\b(self[\s-]+service)\b/gi,
    /\b(agentic\s+workflows?)\b/gi,
    /\b(distributed\s+systems?)\b/gi,
    /\b(cloud\s+infrastructure)\b/gi,
    /\b(micro\s*services?)\b/gi,
    /\b(full[\s-]+stack)\b/gi,
    /\b(front[\s-]*end)\b/gi,
    /\b(back[\s-]*end)\b/gi,
    /\b(sql\s*\/?\s*nosql)\b/gi,
  ];

  const found: string[] = [];
  for (const pattern of patterns) {
    const matches = text.matchAll(pattern);
    for (const m of matches) {
      const term = m[1]?.toLowerCase().replace(/\s+/g, ' ').trim();
      if (term && !found.includes(term)) {
        found.push(term);
      }
    }
  }
  return found;
}

/**
 * Detect likely company names, product names, and brand mentions.
 * These are proper nouns in the JD intro — not skills to match against.
 */
function extractBrandNames(text: string): Set<string> {
  const brands = new Set<string>();

  // Common patterns: "at <Company>", "<Company> is", "about <Company>"
  // Also match well-known tech company names and product names
  const brandPatterns = [
    /\bat\s+([A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+)*)/g,
    /(?:^|\.\s+)([A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+)*)\s+(?:is|are|was|has|Inc|Corp|Ltd|GmbH)/g,
    /\b(?:join(?:ing)?|about)\s+([A-Z][a-zA-Z]+)/g,
  ];

  for (const pattern of brandPatterns) {
    const matches = text.matchAll(pattern);
    for (const m of matches) {
      const name = m[1]?.toLowerCase();
      if (name) {
        // Add individual words from brand names
        for (const word of name.split(/\s+/)) {
          if (word.length > 2) brands.add(word);
        }
      }
    }
  }

  // Well-known tech companies & products that are always noise in JDs
  const knownBrands = [
    'apple', 'google', 'meta', 'facebook', 'amazon', 'microsoft', 'netflix',
    'uber', 'airbnb', 'twitter', 'linkedin', 'spotify', 'stripe', 'shopify',
    'iphone', 'ipad', 'mac', 'macbook', 'airpods', 'android', 'windows',
    'alexa', 'siri', 'cortana', 'gmail', 'chrome', 'safari', 'firefox',
  ];
  for (const b of knownBrands) brands.add(b);

  return brands;
}

/**
 * Extract the most important keywords from a job description.
 *
 * Strategy:
 * 1. Extract multi-word technical terms first (highest value)
 * 2. Parse sections — boost words from requirements/qualifications sections
 * 3. Filter out company names, product names, and generic filler words
 * 4. Rank by weighted frequency, prefer technical terms
 */
function extractKeywords(text: string, language: string, maxKeywords: number = 30): string[] {
  const langData = getLanguageData(language);
  const stopWords = new Set(langData.stopWords);

  // Step 1: Extract compound terms (these bypass TF ranking)
  const compoundTerms = extractCompoundTerms(text);

  // Step 2: Detect brand/company/product names to exclude
  const brandNames = extractBrandNames(text);

  // Step 3: Section-aware tokenization
  const { requirementText, otherText } = splitJdSections(text);
  const reqTokens = tokenize(requirementText, stopWords).filter((t) => !brandNames.has(t));
  const otherTokens = tokenize(otherText, stopWords).filter((t) => !brandNames.has(t));

  // Boost requirement tokens (count them 3x)
  const allTokens = [...reqTokens, ...reqTokens, ...reqTokens, ...otherTokens];
  const stemmed = allTokens.map((t) => simpleStem(t, language));
  const tf = buildTfMap(stemmed);

  // Keep a mapping from stem → original token (first occurrence)
  const stemToOriginal = new Map<string, string>();
  for (let i = 0; i < allTokens.length; i++) {
    const stem = stemmed[i] ?? '';
    if (!stemToOriginal.has(stem)) {
      stemToOriginal.set(stem, allTokens[i] ?? '');
    }
  }

  // Step 3: Filter out words that are already part of compound terms
  const compoundsFlat = compoundTerms.join(' ').split(/\s+/);
  const compoundWordSet = new Set(compoundsFlat);

  // Sort by frequency, filter noise, take top N
  const singleKeywords = [...tf.entries()]
    .filter(([stem]) => stem.length > 2)
    .filter(([stem]) => {
      const original = stemToOriginal.get(stem) || stem;
      // Skip if this word is only meaningful as part of a compound term
      if (compoundWordSet.has(original) && !reqTokens.includes(original)) {
        return false;
      }
      return true;
    })
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords - compoundTerms.length)
    .map(([stem]) => stemToOriginal.get(stem) || stem);

  // Compound terms go first, then single keywords (deduplicated)
  const seen = new Set<string>();
  const keywords: string[] = [];
  for (const term of [...compoundTerms, ...singleKeywords]) {
    if (!seen.has(term)) {
      seen.add(term);
      keywords.push(term);
    }
  }

  return keywords.slice(0, maxKeywords);
}

/**
 * Match job description keywords against resume content.
 * Uses stemmed matching for fuzzy equivalence.
 * Compound terms are matched by checking if all component words exist in the resume.
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
    // For compound terms, check if all component words match
    if (keyword.includes(' ')) {
      const parts = keyword.split(/\s+/);
      const allPartsMatch = parts.every((part) => {
        const stem = simpleStem(part, language);
        return resumeStems.has(stem) || resumeTokenSet.has(part.toLowerCase());
      });
      if (allPartsMatch) {
        matched.push(keyword);
      } else {
        missing.push(keyword);
      }
    } else {
      const stem = simpleStem(keyword, language);
      if (resumeStems.has(stem) || resumeTokenSet.has(keyword.toLowerCase())) {
        matched.push(keyword);
      } else {
        missing.push(keyword);
      }
    }
  }

  const matchPercentage = jdKeywords.length > 0
    ? Math.round((matched.length / jdKeywords.length) * 100)
    : 0;

  return { matched, missing, matchPercentage };
}
