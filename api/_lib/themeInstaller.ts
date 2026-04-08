import { execFileSync } from 'child_process';

/** Only alphanumeric, hyphens, dots, underscores — validated upstream by Zod */
const SAFE_NAME = /^[a-zA-Z0-9._-]+$/;

export function toPackageName(theme: string): string {
  if (!SAFE_NAME.test(theme)) {
    throw new Error('Invalid theme name');
  }
  return theme.startsWith('jsonresume-theme-')
    ? theme
    : `jsonresume-theme-${theme}`;
}

export function ensureInstalled(themeName: string): void {
  const pkgName = toPackageName(themeName);
  try {
    require.resolve(pkgName);
  } catch {
    // Use execFileSync (no shell) to prevent command injection
    execFileSync('npm', ['install', '--no-save', pkgName], {
      timeout: 20000,
      stdio: 'pipe',
    });
  }
}

export function loadRenderer(themeName: string): (resume: Record<string, unknown>) => string | Promise<string> {
  const pkgName = toPackageName(themeName);
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-assignment
  const mod = require(pkgName);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (typeof mod.render !== 'function') {
    throw new Error(`Theme "${pkgName}" does not export a render function`);
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
  return mod.render as (resume: Record<string, unknown>) => string | Promise<string>;
}

export async function renderWithTheme(themeName: string, resume: Record<string, unknown>): Promise<string> {
  ensureInstalled(themeName);
  const render = loadRenderer(themeName);
  return await render(resume);
}
