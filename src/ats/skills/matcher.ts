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

const LEADING_TRAILING_PUNCT = /^[^\w+#]+|[^\w+#]+$/g;

export function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  // Split on whitespace + sentence punctuation (comma, period followed by space, etc.)
  // but preserve punctuation inside tokens.
  const raw = text.split(/\s+|(?<=[.,;:!?])\s+|(?<=\S)\s+(?=\S)/).filter(Boolean);
  for (const chunk of raw) {
    // Further split on external punctuation boundaries but keep internal
    const pieces = chunk.split(/[()[\]{}"'“”‘’`]+/);
    for (const p of pieces) {
      if (!p) continue;
      const cleaned = p.replace(LEADING_TRAILING_PUNCT, '');
      if (!cleaned) continue;
      if (cleaned.length < 1) continue;
      // Drop tokens that have any junk-only content
      if (!/[a-zA-Z0-9+#]/.test(cleaned)) continue;
      // Count letters to decide if this is acronym-shaped (all caps)
      const letters = cleaned.replace(/[^a-zA-Z]/g, '');
      const isAllUpper = letters.length >= 2 && letters === letters.toUpperCase();
      tokens.push({ raw: cleaned, norm: cleaned.toLowerCase(), isAllUpper });
    }
  }
  return tokens;
}

/**
 * Normalize a skill label into token strings. Splits on whitespace only — internal
 * punctuation (dots, slashes, hyphens, plus/hash) stays attached to its token.
 */
function phraseToTokens(phrase: string): string[] {
  return phrase
    .toLowerCase()
    .split(/\s+/)
    .map((t) => t.replace(LEADING_TRAILING_PUNCT, ''))
    .filter(Boolean);
}

interface PhraseCandidate {
  skillIdx: number;
  phraseTokens: string[];  // lowercase, whitespace-split
  requiresCaseMatch: boolean;  // true for all-caps acronyms — avoids "IS"/"IT"/"NO" collisions
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
        if (tokens.length === 0) continue;
        maxLen = Math.max(maxLen, tokens.length);
        const first = tokens[0]!;
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
   * Scan text for skills. Longest-match wins at each position — e.g. "Next.js"
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
      const first = tokens[i]!.norm;
      const bucket = this.byFirstToken.get(first);
      if (!bucket) { i++; continue; }

      let matched = false;
      for (const cand of bucket) {
        const len = cand.phraseTokens.length;
        if (i + len > tokens.length) continue;
        let ok = true;
        for (let k = 0; k < len; k++) {
          if (tokens[i + k]!.norm !== cand.phraseTokens[k]) { ok = false; break; }
        }
        if (!ok) continue;
        // Acronym guard: require the original text to be all-caps when the
        // phrase is acronym-shaped (e.g. "ARE" only matches "ARE", not "are")
        if (cand.requiresCaseMatch && !tokens[i]!.isAllUpper) continue;
        hits.set(cand.skillIdx, (hits.get(cand.skillIdx) ?? 0) + 1);
        i += len;
        matched = true;
        break;
      }
      if (!matched) i++;
    }

    const result: SkillMatch[] = [];
    for (const [skillIdx, count] of hits) {
      result.push({ skill: this.skills[skillIdx]!, occurrences: count });
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

/** Synchronous constructor (takes preloaded data — used by tests). */
export function buildSkillIndex(skills: readonly Skill[]): SkillIndex {
  return new SkillIndex(skills);
}
