import type { Skill, SkillMatch } from './types';

/**
 * Tokenize text for skill matching.
 *
 * Splits on whitespace and sentence punctuation, but keeps internal punctuation
 * that's part of a skill name (e.g. "Node.js", "CI/CD", "shadcn/ui", "c#", "c++").
 * Returns normalized lowercase tokens alongside their original form.
 */
export interface Token {
  raw: string;
  norm: string;
  isAllUpper: boolean;  // whether raw has ≥ 2 consecutive uppercase chars (acronym-ish)
}

/**
 * Chars that can appear inside a skill token (letters, digits, plus, hash,
 * dot, slash, hyphen). Anything else is a separator.
 *
 * Char-class check on a single char, constant-time, not ReDoS-susceptible
 * (CodeQL js/polynomial-redos flagged the previous regex-based tokenizer).
 */
function isTokenChar(ch: string): boolean {
  if (ch >= 'a' && ch <= 'z') return true;
  if (ch >= 'A' && ch <= 'Z') return true;
  if (ch >= '0' && ch <= '9') return true;
  return ch === '.' || ch === '/' || ch === '-' || ch === '+' || ch === '#' || ch === '_';
}

function isLetter(ch: string): boolean {
  return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}

function isDigit(ch: string): boolean {
  return ch >= '0' && ch <= '9';
}

/**
 * Strip boundary chars that aren't valid leading/trailing parts of a skill
 * token, e.g. trailing commas, periods followed by space, quotes. Internal
 * punctuation (Node.js, CI/CD, shadcn/ui) is preserved.
 */
function trimTokenBoundary(tok: string): string {
  let start = 0;
  let end = tok.length;
  // Letters, digits, '+' and '#' are valid leading chars; everything else (. / -) gets stripped
  while (start < end) {
    const ch = tok.charAt(start);
    if (isLetter(ch) || isDigit(ch) || ch === '+' || ch === '#') break;
    start++;
  }
  while (end > start) {
    const ch = tok.charAt(end - 1);
    if (isLetter(ch) || isDigit(ch) || ch === '+' || ch === '#') break;
    end--;
  }
  return start === 0 && end === tok.length ? tok : tok.slice(start, end);
}

/**
 * Linear-time tokenizer. Iterates once over the string, accumulating runs of
 * token chars. Avoids regex alternation and unbounded quantifiers to keep
 * worst-case complexity O(n) even on adversarial inputs.
 */
export function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  const len = text.length;
  let i = 0;
  while (i < len) {
    // Skip separators
    while (i < len && !isTokenChar(text.charAt(i))) i++;
    // Accumulate token
    const start = i;
    while (i < len && isTokenChar(text.charAt(i))) i++;
    if (i === start) continue;
    const raw = trimTokenBoundary(text.slice(start, i));
    if (!raw) continue;
    // Require at least one letter or digit or + or #
    let hasCore = false;
    for (let k = 0; k < raw.length; k++) {
      const ch = raw.charAt(k);
      if (isLetter(ch) || isDigit(ch) || ch === '+' || ch === '#') {
        hasCore = true;
        break;
      }
    }
    if (!hasCore) continue;
    // Compute isAllUpper by scanning letters once
    let letterCount = 0;
    let upperCount = 0;
    for (let k = 0; k < raw.length; k++) {
      const ch = raw.charAt(k);
      if (isLetter(ch)) {
        letterCount++;
        if (ch >= 'A' && ch <= 'Z') upperCount++;
      }
    }
    const isAllUpper = letterCount >= 2 && upperCount === letterCount;
    tokens.push({ raw, norm: raw.toLowerCase(), isAllUpper });
  }
  return tokens;
}

/**
 * Normalize a skill label into token strings. Splits on whitespace only,
 * internal punctuation (dots, slashes, hyphens, plus/hash) stays attached to
 * its token. Skill labels come from our own JSON, not user input, so the
 * simple regex split is safe here.
 */
function phraseToTokens(phrase: string): string[] {
  return phrase
    .toLowerCase()
    .split(/\s+/)
    .map((t) => trimTokenBoundary(t))
    .filter(Boolean);
}

interface PhraseCandidate {
  skillIdx: number;
  phraseTokens: string[];  // lowercase, whitespace-split
  requiresCaseMatch: boolean;  // true for all-caps acronyms, avoids "IS"/"IT"/"NO" collisions
}

/**
 * Acronym-shaped phrase: 2–6 uppercase letters, single token. These collide
 * with common English words when matched case-insensitively, so we require the
 * original text to also be in uppercase.
 */
function looksLikeAcronym(phrase: string): boolean {
  const trimmed = phrase.trim();
  if (/\s/.test(trimmed)) return false;
  if (trimmed.length < 2 || trimmed.length > 6) return false;
  const letters = trimmed.replace(/[^a-zA-Z]/g, '');
  return letters.length >= 2 && letters === letters.toUpperCase();
}

/**
 * Indexed skill database for fast longest-match lookup.
 *
 * Strategy: group all skill phrases (canonical + every alias) by their first
 * token. For each first token we get a list of candidate phrases, sorted
 * longest-first so we find the most specific match first (e.g. "React Query"
 * beats "React" when the text contains both words adjacent).
 */
export class SkillIndex {
  private readonly skills: readonly Skill[];
  private readonly byFirstToken: Map<string, PhraseCandidate[]> = new Map();
  private readonly maxPhraseLen: number;

  constructor(skills: readonly Skill[]) {
    this.skills = skills;
    let maxLen = 1;
    skills.forEach((skill, i) => {
      for (const phrase of [skill.canonical, ...skill.aliases]) {
        const tokens = phraseToTokens(phrase);
        const first = tokens[0];
        if (!first) continue;
        maxLen = Math.max(maxLen, tokens.length);
        const list = this.byFirstToken.get(first);
        const entry: PhraseCandidate = {
          skillIdx: i,
          phraseTokens: tokens,
          requiresCaseMatch: looksLikeAcronym(phrase),
        };
        if (list) list.push(entry);
        else this.byFirstToken.set(first, [entry]);
      }
    });
    // Sort each bucket longest-first so we try specific matches before general ones
    for (const list of this.byFirstToken.values()) {
      list.sort((a, b) => b.phraseTokens.length - a.phraseTokens.length);
    }
    this.maxPhraseLen = maxLen;
  }

  /**
   * Scan text for skills. Longest-match wins at each position, e.g. "Next.js"
   * doesn't also fire "Next", and "Google Cloud Platform" doesn't also fire
   * "Google".
   *
   * Returns a list of unique skills with occurrence counts.
   */
  scan(text: string): SkillMatch[] {
    const tokens = tokenize(text);
    const hits = new Map<number, number>();  // skillIdx → occurrences

    let i = 0;
    while (i < tokens.length) {
      const head = tokens[i];
      if (!head) break;
      const bucket = this.byFirstToken.get(head.norm);
      if (!bucket) { i++; continue; }

      let matched = false;
      for (const cand of bucket) {
        const len = cand.phraseTokens.length;
        if (i + len > tokens.length) continue;
        let ok = true;
        for (let k = 0; k < len; k++) {
          const tok = tokens[i + k];
          if (!tok || tok.norm !== cand.phraseTokens[k]) { ok = false; break; }
        }
        if (!ok) continue;
        // Acronym guard: require the original text to be all-caps when the
        // phrase is acronym-shaped (e.g. "ARE" only matches "ARE", not "are")
        if (cand.requiresCaseMatch && !head.isAllUpper) continue;
        hits.set(cand.skillIdx, (hits.get(cand.skillIdx) ?? 0) + 1);
        i += len;
        matched = true;
        break;
      }
      if (!matched) i++;
    }

    const result: SkillMatch[] = [];
    for (const [skillIdx, count] of hits) {
      const skill = this.skills[skillIdx];
      if (!skill) continue;
      result.push({ skill, occurrences: count });
    }
    // Sort: hot skills first, then by frequency, then canonical asc
    result.sort((a, b) => {
      if (a.skill.hot !== b.skill.hot) return a.skill.hot ? -1 : 1;
      if (a.occurrences !== b.occurrences) return b.occurrences - a.occurrences;
      return a.skill.canonical.localeCompare(b.skill.canonical);
    });
    return result;
  }

  get size(): number { return this.skills.length; }
  get maxPhraseTokens(): number { return this.maxPhraseLen; }
}

/** Synchronous constructor (takes preloaded data, used by tests). */
export function buildSkillIndex(skills: readonly Skill[]): SkillIndex {
  return new SkillIndex(skills);
}
