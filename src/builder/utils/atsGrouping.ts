import type { AtsCheck } from '../../ats/types';

export function groupChecksByCategory(
  checks: ReadonlyArray<AtsCheck>,
): Record<string, AtsCheck[]> {
  return checks.reduce<Record<string, AtsCheck[]>>((groups, check) => {
    const existing = groups[check.category];
    return {
      ...groups,
      [check.category]: existing ? [...existing, check] : [check],
    };
  }, {});
}
