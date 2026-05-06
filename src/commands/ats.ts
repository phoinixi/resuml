import yaml from 'yaml';
import chalk from 'chalk';
import { getRubricEntry, listRubricMarkdown } from '../ats/rubric';
import { loadConfig } from '../utils/config';

export function atsExplain(id?: string): void {
  if (!id) {
    console.log(listRubricMarkdown());
    return;
  }
  const entry = getRubricEntry(id);
  if (!entry) {
    console.error(chalk.red(`Unknown rubric id: ${id}`));
    process.exit(1);
    return;
  }
  console.log(chalk.bold(entry.id));
  console.log(`  Tier:        ${entry.tier}`);
  console.log(`  Weight:      ${entry.weight}`);
  console.log(`  Evidence:    ${entry.evidenceLevel}`);
  console.log(`  Description: ${entry.description}`);
  if (entry.source) console.log(`  Source:      ${entry.source}`);
}

export function atsConfigPrint(opts: { config?: string }): void {
  const cfg = loadConfig(opts.config ? { configPath: opts.config } : {});
  console.log(yaml.stringify({ ats: cfg }));
}
