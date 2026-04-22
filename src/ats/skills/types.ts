export type SkillType =
  | 'language'
  | 'framework'
  | 'library'
  | 'tool'
  | 'platform'
  | 'database'
  | 'practice';

export interface Skill {
  id: string;
  canonical: string;
  aliases: string[];
  type: SkillType;
  hot: boolean;
  sources?: string[];
}

export interface SkillMatch {
  skill: Skill;
  occurrences: number;
}
