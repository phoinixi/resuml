import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { ProviderId } from './types';

type CompaniesFile = Partial<Record<ProviderId, string[]>> & { _comment?: string };

const currentDir = path.dirname(fileURLToPath(import.meta.url));

const CANDIDATE_PATHS = [
  path.resolve(currentDir, '../../data/jobs/companies.json'),
  path.resolve(currentDir, '../data/jobs/companies.json'),
];

let cached: CompaniesFile | null = null;

function loadCompaniesFile(): CompaniesFile {
  if (cached) return cached;
  for (const p of CANDIDATE_PATHS) {
    if (fs.existsSync(p)) {
      cached = JSON.parse(fs.readFileSync(p, 'utf-8')) as CompaniesFile;
      return cached;
    }
  }
  cached = {};
  return cached;
}

export function getSeedCompanies(provider: ProviderId): string[] {
  const file = loadCompaniesFile();
  return file[provider] ?? [];
}
