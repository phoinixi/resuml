import en from './en';
import de from './de';
import type { LanguageData } from './en';

export type { LanguageData };

const languages: Record<string, LanguageData> = { en, de };

export function getLanguageData(language: string): LanguageData {
  return languages[language] || languages['en'];
}
