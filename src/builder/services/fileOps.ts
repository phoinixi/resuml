export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function exportYaml(yaml: string): void {
  const blob = new Blob([yaml], { type: 'text/yaml' });
  downloadBlob(blob, 'resume.yaml');
}

export function exportJson(resume: Record<string, unknown>): void {
  const blob = new Blob([JSON.stringify(resume, null, 2)], { type: 'application/json' });
  downloadBlob(blob, 'resume.json');
}

export async function exportPdf(
  resume: Record<string, unknown>,
  theme: string,
): Promise<void> {
  const { downloadPdf } = await import('./api');
  const blob = await downloadPdf(resume, theme);
  downloadBlob(blob, 'resume.pdf');
}

export async function copyShareUrl(yaml: string, themeName: string): Promise<void> {
  const { compress } = await import('../utils/urlCodec');
  const hash = compress(yaml, themeName);
  const url = `${window.location.origin}${window.location.pathname}#${hash}`;
  await navigator.clipboard.writeText(url);
}

export function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') resolve(reader.result);
      else reject(new Error('Failed to read file'));
    };
    reader.onerror = () => { reject(reader.error ?? new Error('Failed to read file')); };
    reader.readAsText(file);
  });
}
