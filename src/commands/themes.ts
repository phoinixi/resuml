import chalk from 'chalk';
import { execSync } from 'child_process';
import { createRequire } from 'module';

interface ThemesCommandOptions {
  install?: string;
}

// Popular/known compatible jsonresume themes
const KNOWN_THEMES = [
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

function isThemeInstalled(pkg: string): boolean {
  try {
    const require = createRequire(process.cwd() + '/');
    require.resolve(pkg);
    return true;
  } catch {
    return false;
  }
}

function getInstalledVersion(pkg: string): string | null {
  try {
    const require = createRequire(process.cwd() + '/');
    const pkgJson = require(`${pkg}/package.json`);
    return pkgJson.version || null;
  } catch {
    return null;
  }
}

function listThemes(): void {
  console.log(chalk.blue('\n📦 Compatible JSON Resume Themes\n'));

  const nameWidth = 16;
  const pkgWidth = 38;

  // Header
  console.log(
    `  ${'Status'.padEnd(10)}${'Name'.padEnd(nameWidth)}${'Package'.padEnd(pkgWidth)}Description`
  );
  console.log(`  ${'─'.repeat(10)}${'─'.repeat(nameWidth)}${'─'.repeat(pkgWidth)}${'─'.repeat(30)}`);

  for (const theme of KNOWN_THEMES) {
    const installed = isThemeInstalled(theme.pkg);
    const version = installed ? getInstalledVersion(theme.pkg) : null;
    const status = installed
      ? chalk.green(`✓ ${version || 'yes'}`.padEnd(10))
      : chalk.yellow('not installed'.substring(0, 10).padEnd(10));

    console.log(
      `  ${status}${theme.name.padEnd(nameWidth)}${chalk.blue(theme.pkg.padEnd(pkgWidth))}${theme.description}`
    );
  }

  console.log(chalk.blue('\nInstall a theme:'));
  console.log(`  ${chalk.cyan('resuml themes --install <name>')}`);
  console.log(`  ${chalk.cyan('resuml themes --install stackoverflow')}\n`);
  console.log(
    chalk.blue('Browse all themes: ') +
      'https://www.npmjs.com/search?q=jsonresume-theme\n'
  );
}

function installTheme(name: string): void {
  // Check if it's a known short name
  const known = KNOWN_THEMES.find((t) => t.name === name);
  const pkg = known ? known.pkg : name.startsWith('jsonresume-theme-') ? name : `jsonresume-theme-${name}`;

  console.log(chalk.blue(`\n📦 Installing ${pkg}...\n`));

  try {
    execSync(`npm install ${pkg}`, { stdio: 'inherit' });
    console.log(chalk.green(`\n✅ Successfully installed ${pkg}`));
    console.log(chalk.blue(`\nUse it with: ${chalk.cyan(`resuml render --theme ${known?.name || name}`)}\n`));
  } catch {
    console.error(chalk.red(`\n❌ Failed to install ${pkg}`));
    console.error(chalk.yellow(`Make sure the package exists: https://www.npmjs.com/package/${pkg}\n`));
  }
}

export async function themesAction(options: ThemesCommandOptions): Promise<void> {
  if (options.install) {
    installTheme(options.install);
  } else {
    listThemes();
  }
}
