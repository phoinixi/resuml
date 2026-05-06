import fs from 'fs';
import { processResumeData } from '../core';
import { loadResumeFiles } from '../utils/loadResume';
import { handleCommandError } from '../utils/errorHandler';
import { analyzeAts } from '../ats/index';
import type { TieredAtsResult } from '../ats/index';
import { loadConfig } from '../utils/config';

interface ValidateCommandOptions {
  resume?: string;
  debug?: boolean;
  ats?: boolean;
  jd?: string;
  atsThreshold?: string;
  format?: string;
  config?: string;
}

function formatAtsReport(
  result: TieredAtsResult,
  debug: boolean,
  chalk: typeof import('chalk').default
): void {
  const scoreColor =
    result.score >= 75 ? chalk.green : result.score >= 60 ? chalk.yellow : chalk.red;
  console.log('');
  console.log(chalk.bold('=== ATS Analysis Report ==='));
  console.log('');
  console.log(
    `  Score: ${scoreColor(chalk.bold(`${result.score}/100`))} (${result.rating.replace('-', ' ')})`
  );
  console.log(`  ${result.summary}`);
  console.log('');

  const tierLabels: Record<string, string> = {
    parsing: 'Parsing',
    recruiter: 'Recruiter',
    match: 'JD Match',
  };

  for (const [tierName, tier] of Object.entries(result.tiers)) {
    const label = tierLabels[tierName] ?? tierName;
    console.log(chalk.bold(`  ${label} (${tier.score}/100, grade ${tier.grade})`));

    for (const check of tier.checks) {
      if (!debug && (check.status === 'pass' || check.status === 'skipped')) continue;
      const icon =
        check.status === 'pass'
          ? chalk.green('v')
          : check.status === 'skipped'
            ? chalk.dim('-')
            : check.status === 'warn'
              ? chalk.yellow('!')
              : chalk.red('x');
      const scoreText = chalk.dim(`[${check.score}]`);
      console.log(`    ${icon} ${check.message} ${scoreText}`);
      for (const hint of check.hints) {
        console.log(chalk.dim(`      -> ${hint}`));
      }
    }
    console.log('');
  }

  if (result.knockouts.length > 0) {
    console.log(chalk.bold('  Knockout Signals'));
    for (const k of result.knockouts) {
      console.log(chalk.red(`    ! ${k.signal}: ${k.evidence}`));
      console.log(chalk.dim(`      -> ${k.recommendation}`));
    }
    console.log('');
  }

  console.log(chalk.dim('==========================='));
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

      const cfg = loadConfig(options.config ? { configPath: options.config } : {});
      const result = analyzeAts(resumeData, {
        language: cfg.locale,
        jobDescription,
        config: cfg,
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
