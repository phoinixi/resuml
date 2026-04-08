import type { ThemeInfo } from '../../src/shared/schemas';

let cachedThemes: ThemeInfo[] | null = null;
let cacheExpires = 0;
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

export async function fetchThemeList(): Promise<ThemeInfo[]> {
  const now = Date.now();
  if (cachedThemes && cacheExpires > now) {
    return cachedThemes;
  }

  const searchUrl = 'https://registry.npmjs.org/-/v1/search?text=jsonresume-theme-&size=250';
  const response = await fetch(searchUrl);

  if (!response.ok) {
    throw new Error(`npm registry returned ${response.status}`);
  }

  const data = await response.json();
  const themes: ThemeInfo[] = [];

  for (const result of data.objects || []) {
    const pkg = result.package;
    const name = pkg.name as string;

    if (!name.startsWith('jsonresume-theme-')) continue;

    const shortName = name.replace('jsonresume-theme-', '');
    themes.push({
      name: shortName,
      displayName: shortName.charAt(0).toUpperCase() + shortName.slice(1).replace(/-/g, ' '),
      description: (pkg.description as string) || '',
      version: (pkg.version as string) || '0.0.0',
      weeklyDownloads: result.score?.detail?.popularity
        ? Math.round(result.score.detail.popularity * 10000)
        : 0,
    });
  }

  themes.sort((a, b) => b.weeklyDownloads - a.weeklyDownloads);

  cachedThemes = themes;
  cacheExpires = now + CACHE_TTL;
  return themes;
}

export function isThemeListCached(): boolean {
  return cachedThemes !== null && cacheExpires > Date.now();
}
