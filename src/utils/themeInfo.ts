import { createRequire } from 'module';

export interface ThemeInfo {
  name: string;
  pkg: string;
  description: string;
}

export const KNOWN_THEMES: ThemeInfo[] = [
  { name: 'stackoverflow', pkg: 'jsonresume-theme-stackoverflow', description: 'Stack Overflow inspired theme' },
  { name: 'elegant', pkg: 'jsonresume-theme-elegant', description: 'Elegant and professional' },
  { name: 'react', pkg: 'jsonresume-theme-react', description: 'Built with React components' },
  { name: 'even', pkg: 'jsonresume-theme-even', description: 'Clean and minimal' },
  { name: 'kendall', pkg: 'jsonresume-theme-kendall', description: 'Simple and clean layout' },
  { name: 'macchiato', pkg: 'jsonresume-theme-macchiato', description: 'Beautiful and modern' },
  { name: 'flat', pkg: 'jsonresume-theme-flat', description: 'Flat design theme' },
  { name: 'class', pkg: 'jsonresume-theme-class', description: 'Classic professional look' },
  { name: 'short', pkg: 'jsonresume-theme-short', description: 'Compact single-page resume' },
  { name: 'spartan', pkg: 'jsonresume-theme-spartan', description: 'Minimalist Spartan design' },
  { name: 'paper', pkg: 'jsonresume-theme-paper', description: 'Paper-like clean design' },
  { name: 'onepage', pkg: 'jsonresume-theme-onepage', description: 'One page resume layout' },
];

export function isThemeInstalled(pkg: string): boolean {
  try {
    const req = createRequire(process.cwd() + '/');
    req.resolve(pkg);
    return true;
  } catch {
    return false;
  }
}

export function getInstalledVersion(pkg: string): string | null {
  try {
    const req = createRequire(process.cwd() + '/');
    const pkgJson = req(`${pkg}/package.json`) as { version?: string };
    return pkgJson.version ?? null;
  } catch {
    return null;
  }
}
