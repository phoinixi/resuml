import fs from 'fs';
import { processResumeData } from '../core';
import { loadResumeFiles } from '../utils/loadResume';
import { handleCommandError } from '../utils/errorHandler';
import { analyzeAts } from '../ats/index';
import type { AtsResult, AtsCheck } from '../ats/index';

interface ValidateCommandOptions {
  resume?: string;
  debug?: boolean;
  ats?: boolean;
  jd?: string;
  atsThreshold?: string;
  format?: string;
}

function formatAtsReport(result: AtsResult, debug: boolean, chalk: typeof import('chalk').default): void {
  const scoreColor = result.score >= 75 ? chalk.green : result.score >= 60 ? chalk.yellow : chalk.red;
  console.log('');
  console.log(chalk.bold('═══ ATS Analysis Report ═══'));
  console.log('');
  console.log(`  Score: ${scoreColor(chalk.bold(`${result.score}/100`))} (${result.rating.replace('-', ' ')})`);
  console.log(`  ${result.summary}`);
  console.log('');

  // Group checks by category
  const categories: Record<string, AtsCheck[]> = {};
  for (const check of result.checks) {
    if (!categories[check.category]) categories[check.category] = [];
    categories[check.category].push(check);
  }

  const categoryLabels: Record<string, string> = {
    contact: 'Contact Information',
    content: 'Content Quality',
    structure: 'Resume Structure',
    keywords: 'Keywords',
  };

  for (const [cat, checks] of Object.entries(categories)) {
    const label = categoryLabels[cat] || cat;
    console.log(chalk.bold(`  ${label}`));

    for (const check of checks) {
      if (!debug && check.passed) continue; // In normal mode, only show failures
      const icon = check.passed ? chalk.green('✓') : chalk.red('✗');
      const scoreText = chalk.dim(`[${check.score}]`);
      console.log(`    ${icon} ${check.message} ${scoreText}`);
      if (!check.passed && check.suggestion) {
        console.log(chalk.dim(`      → ${check.suggestion}`));
      }
    }
    console.log('');
  }

  // JD keyword section
  if (result.keywords) {
    console.log(chalk.bold('  Job Description Match'));
    const kw = result.keywords;
    const matchColor = kw.matchPercentage >= 70 ? chalk.green : kw.matchPercentage >= 50 ? chalk.yellow : chalk.red;
    console.log(`    Match: ${matchColor(`${kw.matchPercentage}%`)} (${kw.matched.length}/${kw.matched.length + kw.missing.length} keywords)`);
    if (kw.matched.length > 0) {
      console.log(chalk.green(`    ✓ Matched: ${kw.matched.join(', ')}`));
    }
    if (kw.missing.length > 0) {
      console.log(chalk.red(`    ✗ Missing: ${kw.missing.join(', ')}`));
      console.log(chalk.dim('      → Consider incorporating these keywords into your resume where relevant.'));
    }
    console.log('');
  }

  console.log(chalk.dim('═══════════════════════════'));
}

export async function validateAction(options: ValidateCommandOptions): Promise<void> {
  const chalk = (await import('chalk')).default;
  console.log(chalk.blue('Starting resuml validate...'));

  try {
    const inputPath = options.resume;
    const { yamlContents } = await loadResumeFiles(inputPath);

    console.log(chalk.blue('Validating resume data...'));

    let resumeData;
    try {
      resumeData = await processResumeData(yamlContents);
      console.log(chalk.green('✓ Resume data is valid against the schema!'));
    } catch (error: unknown) {
      handleCommandError(error, 'validate', options.debug);
      return;
    }

    // Run ATS analysis if requested
    if (options.ats) {
      console.log(chalk.blue('Running ATS analysis...'));

      let jobDescription: string | undefined;
      if (options.jd) {
        try {
          jobDescription = fs.readFileSync(options.jd, 'utf8');
        } catch {
          console.error(chalk.red(`Failed to read job description file: ${options.jd}`));
          return;
        }
      }

      const result = analyzeAts(resumeData, {
        language: 'en',
        jobDescription,
      });

      if (options.format === 'json') {
        console.log(JSON.stringify(result, null, 2));
      } else {
        formatAtsReport(result, !!options.debug, chalk);
      }

      // Check threshold
      const threshold = options.atsThreshold ? parseInt(options.atsThreshold, 10) : undefined;
      if (threshold !== undefined && result.score < threshold) {
        console.error(chalk.red(`\nATS score ${result.score} is below threshold ${threshold}.`));
        process.exit(1);
      }
    }
  } catch (error: unknown) {
    handleCommandError(error, 'validate', options.debug);
  }
}
