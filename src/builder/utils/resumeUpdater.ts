import type { ResumeSchema } from '../../types/resume';

/**
 * Immutably updates a nested value in a resume object at the given path.
 * Returns a new ResumeSchema with the updated value.
 */
export function updateAtPath(
  resume: ResumeSchema,
  path: ReadonlyArray<string | number>,
  value: unknown,
): ResumeSchema {
  const next = JSON.parse(JSON.stringify(resume)) as Record<string, unknown>;

  const keys = path.slice(0, -1);
  const lastKey = path[path.length - 1] as string | number;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
  const target = keys.reduce<any>((obj, key) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (obj[key] === undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      obj[key] = typeof key === 'number' ? [] : {};
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
    return obj[key];
  }, next);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  target[lastKey] = value;

  return next as ResumeSchema;
}
