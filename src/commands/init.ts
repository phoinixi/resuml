import fs from 'fs';
import path from 'path';
import readline from 'readline';
import chalk from 'chalk';
import { generateResumeYaml } from '../utils/resumeTemplate';

interface InitCommandOptions {
  output?: string;
}

function createReadlineInterface(): readline.Interface {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function ask(rl: readline.Interface, question: string, defaultValue?: string): Promise<string> {
  const prompt = defaultValue ? `${question} (${defaultValue}): ` : `${question}: `;
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer.trim() || defaultValue || '');
    });
  });
}

export async function initAction(options: InitCommandOptions): Promise<void> {
  const outputPath = options.output || 'resume.yaml';
  const fullPath = path.resolve(outputPath);

  const rl = createReadlineInterface();

  try {
    // Check if file already exists
    if (fs.existsSync(fullPath)) {
      const overwrite = await ask(
        rl,
        `${chalk.yellow('⚠')}  ${outputPath} already exists. Overwrite? (y/N)`,
        'N'
      );
      if (overwrite.toLowerCase() !== 'y') {
        console.log(chalk.blue('Aborted. No files were changed.'));
        return;
      }
    }

    console.log(chalk.blue('\n📝 Let\'s set up your resume!\n'));

    const name = await ask(rl, 'Your full name', 'John Doe');
    const email = await ask(rl, 'Email address', 'john@example.com');
    const label = await ask(rl, 'Professional title/label', 'Software Engineer');

    const yaml = generateResumeYaml(name, email, label);

    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, yaml, 'utf8');

    console.log(chalk.green(`\n✅ Created ${outputPath}`));
    console.log(chalk.blue('\nNext steps:'));
    console.log(`  1. Edit ${outputPath} to fill in your details`);
    console.log('  2. Run ' + chalk.cyan('resuml validate --resume ' + outputPath));
    console.log('  3. Run ' + chalk.cyan('resuml render --resume ' + outputPath + ' --theme stackoverflow'));
  } finally {
    rl.close();
  }
}
