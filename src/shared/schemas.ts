import { z } from 'zod';

// ── Theme name ──────────────────────────────────────────────────────────
export const ThemeNameSchema = z
  .string()
  .min(1)
  .max(100)
  .regex(/^[a-zA-Z0-9._-]+$/, 'Invalid theme name');

export type ThemeName = z.infer<typeof ThemeNameSchema>;

// ── Render request / response ───────────────────────────────────────────
export const RenderRequestSchema = z.object({
  resume: z.record(z.string(), z.unknown()),
  theme: ThemeNameSchema,
});

export type RenderRequest = z.infer<typeof RenderRequestSchema>;

// Render returns raw HTML string (not JSON), so no Zod schema needed

// ── PDF request ─────────────────────────────────────────────────────────
export const PdfMarginSchema = z.object({
  top: z.string().default('10mm'),
  right: z.string().default('10mm'),
  bottom: z.string().default('10mm'),
  left: z.string().default('10mm'),
});

export type PdfMargin = z.infer<typeof PdfMarginSchema>;

export const PdfRequestSchema = z.object({
  resume: z.record(z.string(), z.unknown()),
  theme: ThemeNameSchema,
  format: z.enum(['A4', 'Letter']).default('A4'),
  margin: PdfMarginSchema.optional(),
});

export type PdfRequest = z.infer<typeof PdfRequestSchema>;

// ── Theme info (returned by /api/themes) ────────────────────────────────
export const ThemeInfoSchema = z.object({
  name: z.string(),
  displayName: z.string(),
  description: z.string(),
  version: z.string(),
  weeklyDownloads: z.number(),
});

export type ThemeInfo = z.infer<typeof ThemeInfoSchema>;

export const ThemeListResponseSchema = z.array(ThemeInfoSchema);

// ── Error response ──────────────────────────────────────────────────────
export const ApiErrorSchema = z.object({
  error: z.string(),
});

export type ApiError = z.infer<typeof ApiErrorSchema>;
