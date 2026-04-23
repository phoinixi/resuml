/**
 * Pad resume with safe defaults so themes don't crash on missing fields.
 * Ensures all expected sections exist as arrays and all basics fields exist.
 * Ported from api/_lib/themeInstaller.ts.
 */
export function padResume(r: Record<string, unknown>): Record<string, unknown> {
  const basics = (r['basics'] ?? {}) as Record<string, unknown>;
  const location = (basics['location'] ?? {}) as Record<string, unknown>;
  const meta = (r['meta'] ?? {}) as Record<string, unknown>;
  const palette = (meta['palette'] ?? {}) as Record<string, unknown>;
  const safe: Record<string, unknown> = {
    ...r,
    basics: {
      name: '', label: '', image: '', email: '', phone: '', url: '', summary: '',
      ...basics,
      location: { address: '', postalCode: '', city: '', countryCode: '', region: '', ...location },
    },
    // Some themes (e.g. material) assume `meta.palette.primary` exists and
    // crash with "Cannot set properties of undefined" when it doesn't.
    // Supply the full shape so themes can mutate without guards.
    meta: { ...meta, palette: { primary: '', secondary: '', ...palette } },
  };
  const arraySections = [
    'work', 'volunteer', 'education', 'awards', 'certificates',
    'publications', 'skills', 'languages', 'interests', 'references', 'projects',
  ];
  for (const key of arraySections) {
    if (!Array.isArray(safe[key])) safe[key] = [];
  }
  const safeBasics = safe['basics'] as Record<string, unknown>;
  if (!Array.isArray(safeBasics['profiles'])) safeBasics['profiles'] = [];
  return safe;
}
