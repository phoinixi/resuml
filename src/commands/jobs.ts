import { readFileSync } from 'fs';
import { parse as yamlParse } from 'yaml';
import { processResumeData } from '../core';
import { loadResumeFiles } from '../utils/loadResume';
import { handleCommandError } from '../utils/errorHandler';
import { searchJobs, scorePosting, buildTailorPrompt } from '../jobs/index';
import type { ProviderId, RankedJob, JobPosting } from '../jobs/index';

const ALL_PROVIDERS: ProviderId[] = [
  'greenhouse',
  'lever',
  'ashby',
  'workable',
  'remoteok',
  'wwr',
  'remotive',
  'hn-whoishiring',
];

interface JobsSearchOptions {
  resume?: string;
  remote?: boolean;
  minScore?: string;
  limit?: string;
  providers?: string;
  timeout?: string;
  json?: boolean;
  location?: string;
}

interface JobsScoreOptions {
  resume?: string;
  posting?: string;
  json?: boolean;
}

interface JobsTailorOptions {
  posting?: string;
  body?: string;
  json?: boolean;
}

function parseProviders(raw?: string): ProviderId[] | undefined {
  if (!raw) return undefined;
  const requested = raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean) as ProviderId[];
  const valid = requested.filter((p) => ALL_PROVIDERS.includes(p));
  return valid.length ? valid : undefined;
}

function tierBadge(grade: string): string {
  return `[${grade}]`;
}

function loadPostingFile(filePath: string): JobPosting {
  const content = readFileSync(filePath, 'utf8');
  const data = (
    filePath.toLowerCase().endsWith('.json')
      ? (JSON.parse(content) as unknown)
      : (yamlParse(content) as unknown)
  ) as {
    company: string;
    title: string;
    body: string;
    url: string;
    location?: string;
    remote?: boolean;
  };
  return {
    id: 'file',
    source: 'greenhouse',
    company: data.company,
    title: data.title,
    body: data.body,
    url: data.url,
    location: data.location,
    remote: data.remote ?? false,
  };
}

async function readStdin(): Promise<string> {
  return new Promise((resolve) => {
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk: string) => {
      data += chunk;
    });
    process.stdin.on('end', () => { resolve(data.trim()); });
  });
}

function formatRanked(jobs: RankedJob[], chalk: typeof import('chalk').default): void {
  if (jobs.length === 0) {
    console.log(chalk.yellow('No jobs cleared the minimum score. Try --min-score 70 to see more matches.'));
    return;
  }
  for (const j of jobs) {
    const scoreColor = j.ats.score >= 80 ? chalk.green : j.ats.score >= 70 ? chalk.cyan : chalk.yellow;
    const remoteTag = j.remote ? chalk.dim(' [remote]') : '';
    console.log(
      `${scoreColor(`${String(j.ats.score).padStart(3)}/100`)}  ${chalk.bold(j.title)} — ${j.company}${remoteTag}`
    );
    const tiers = Object.entries(j.ats.tiers)
      .map(([name, t]) => `${name} ${t.score}${tierBadge(t.grade)}`)
      .join('  ');
    console.log(chalk.dim(`        ${tiers}`));
    console.log(chalk.dim(`        ${j.url}`));
    if (j.ats.knockouts.length > 0) {
      for (const k of j.ats.knockouts) {
        console.log(chalk.red(`        ! knockout: ${k.signal} (${k.evidence})`));
      }
    }
    console.log('');
  }
}

export async function jobsSearchAction(options: JobsSearchOptions): Promise<void> {
  const chalk = (await import('chalk')).default;
  if (!options.json) console.log(chalk.blue('Searching jobs...'));

  try {
    const { yamlContents } = await loadResumeFiles(options.resume);
    const resume = await processResumeData(yamlContents);

    const limit = options.limit ? parseInt(options.limit, 10) : undefined;
    const minScore = options.minScore ? parseInt(options.minScore, 10) : undefined;
    const timeoutMs = options.timeout ? parseInt(options.timeout, 10) : undefined;
    const providers = parseProviders(options.providers);

    const result = await searchJobs(resume, {
      remoteOnly: !!options.remote,
      ...(options.location && { location: options.location }),
      ...(limit !== undefined && { limit }),
      ...(minScore !== undefined && { minScore }),
      ...(timeoutMs !== undefined && { timeoutMs }),
      ...(providers && { providers }),
    });

    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }

    console.log('');
    console.log(chalk.bold('=== Search query (derived from resume) ==='));
    console.log(`  Seniority: ${result.query.seniority} (${result.query.yearsExperience}y experience)`);
    console.log(`  Top skills: ${result.query.skills.slice(0, 8).join(', ')}`);
    if (result.query.city || result.query.countryCode) {
      const loc = [result.query.city, result.query.countryCode].filter(Boolean).join(' ');
      const source = options.location ? ' (from --location flag)' : ' (from CV)';
      console.log(`  Location: ${loc}${source}`);
    }
    if (result.query.remoteOnly) console.log('  Remote-only: yes');
    console.log('');

    console.log(chalk.bold('=== Providers ==='));
    for (const p of result.providers) {
      const status = p.error
        ? chalk.red(`error: ${p.error}`)
        : chalk.green(`${p.postings.length} postings`);
      console.log(`  ${p.providerId.padEnd(16)} ${status} ${chalk.dim(`${p.durationMs}ms`)}`);
    }
    console.log('');

    console.log(
      chalk.bold(
        `=== Top ${result.jobs.length} matches (of ${result.fetchedCount} fetched, ${result.filteredCount} below threshold, ${result.offSpecialtyCount ?? 0} off-specialty, ${result.wrongLocationCount ?? 0} wrong location) ===`
      )
    );
    console.log('');
    formatRanked(result.jobs, chalk);
  } catch (error: unknown) {
    handleCommandError(error, 'jobs search');
  }
}

export async function jobsScoreAction(options: JobsScoreOptions): Promise<void> {
  const chalk = (await import('chalk')).default;
  try {
    const { yamlContents } = await loadResumeFiles(options.resume);
    const resume = await processResumeData(yamlContents);

    if (!options.posting) {
      handleCommandError(new Error('--posting <file> is required'), 'jobs score');
      return;
    }

    const posting = loadPostingFile(options.posting);
    const job = scorePosting(resume, posting);

    if (options.json) {
      console.log(JSON.stringify(job, null, 2));
      return;
    }

    if (!job) {
      console.log(chalk.yellow('Could not score the posting.'));
      return;
    }

    const scoreColor = job.ats.score >= 80 ? chalk.green : job.ats.score >= 70 ? chalk.cyan : chalk.yellow;
    console.log(chalk.bold(`=== Score: ${job.company} — ${job.title} ===`));
    console.log(
      `  Total: ${scoreColor(`${String(job.ats.score).padStart(3)}/100`)}  ${chalk.dim(`[${job.ats.rating}]`)}`
    );
    console.log('');

    for (const [name, tier] of Object.entries(job.ats.tiers)) {
      console.log(`  ${name.padEnd(10)} ${String(tier.score).padStart(3)}  ${tierBadge(tier.grade)}`);
    }
    console.log('');

    const matchTier = job.ats.tiers.match;
    if (matchTier) {
      console.log(chalk.dim('  --- Match checks ---'));
      for (const c of matchTier.checks) {
        const icon =
          c.status === 'pass'
            ? chalk.green('✓')
            : c.status === 'warn'
              ? chalk.yellow('~')
              : c.status === 'fail'
                ? chalk.red('✗')
                : chalk.dim('-');
        console.log(
          `  ${icon} ${c.id.padEnd(22)} ${c.status.padEnd(7)} ${String(c.score).padStart(3)}  ${c.message}`
        );
      }
      console.log('');
    }

    if (job.ats.knockouts.length > 0) {
      for (const k of job.ats.knockouts) {
        console.log(chalk.red(`  ! knockout: ${k.signal} (${k.evidence})`));
      }
      console.log('');
    }

    const rfCheck = matchTier?.checks.find((c) => c.id === 'role-family-match');
    if (rfCheck?.status === 'fail' && job.ats.score <= 45) {
      const detail = rfCheck.message
        .replace('Specialty mismatch: ', '')
        .replace(', resume', '; resume');
      console.log(chalk.red.bold('REJECTED  specialty mismatch'));
      console.log(chalk.red(`         ${detail}`));
    }
  } catch (error: unknown) {
    handleCommandError(error, 'jobs score');
  }
}

export async function jobsTailorAction(options: JobsTailorOptions): Promise<void> {
  try {
    let posting: JobPosting;

    if (options.posting) {
      posting = loadPostingFile(options.posting);
    } else if (options.body === '-') {
      const body = await readStdin();
      posting = {
        id: 'stdin',
        source: 'greenhouse',
        company: 'Unknown',
        title: 'Job Posting',
        body,
        url: '',
        remote: false,
      };
    } else {
      handleCommandError(new Error('--posting <file> or --body - is required'), 'jobs tailor');
      return;
    }

    const prompt = buildTailorPrompt(posting);

    if (options.json) {
      console.log(JSON.stringify({ prompt }, null, 2));
      return;
    }

    console.log(prompt);
  } catch (error: unknown) {
    handleCommandError(error, 'jobs tailor');
  }
}
