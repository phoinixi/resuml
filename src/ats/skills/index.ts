// eslint-disable-next-line @typescript-eslint/no-require-imports
import skillsData from '../../../data/skills/skills.json';
import { buildSkillIndex, SkillIndex, tokenize } from './matcher';
import type { Skill, SkillMatch, SkillType } from './types';

export type { Skill, SkillMatch, SkillType };
export { SkillIndex, tokenize };

let cached: SkillIndex | null = null;

/**
 * Bundled ATS skill taxonomy: ~1.9k skills from O*NET (US DOL, public domain)
 * plus a curated emerging-tech allowlist. Used for keyword extraction from
 * job descriptions and resumes.
 */
export function getSkillIndex(): SkillIndex {
  if (!cached) cached = buildSkillIndex((skillsData as { skills: Skill[] }).skills);
  return cached;
}

/** Reset for tests. */
export function _resetSkillIndexCache(): void {
  cached = null;
}
