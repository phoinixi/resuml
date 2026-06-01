import type { Provider, ProviderId } from '../types';
import { greenhouseProvider } from './greenhouse';
import { leverProvider } from './lever';
import { ashbyProvider } from './ashby';
import { workableProvider } from './workable';
import { remoteokProvider } from './remoteok';
import { remotiveProvider } from './remotive';
import { wwrProvider } from './wwr';
import { hnWhoisHiringProvider } from './hn-whoishiring';

const PROVIDERS: Provider[] = [
  greenhouseProvider,
  leverProvider,
  ashbyProvider,
  workableProvider,
  remoteokProvider,
  remotiveProvider,
  wwrProvider,
  hnWhoisHiringProvider,
];

export function listProviders(): Provider[] {
  return PROVIDERS;
}

export function getProvider(id: ProviderId): Provider | undefined {
  return PROVIDERS.find((p) => p.id === id);
}
