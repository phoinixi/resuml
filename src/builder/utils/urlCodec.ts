import pako from 'pako';

export function compress(yaml: string, theme: string): string {
  const payload = JSON.stringify({ y: yaml, t: theme });
  const compressed = pako.deflate(new TextEncoder().encode(payload));
  return btoa(String.fromCharCode(...compressed));
}

export function decompress(hash: string): { yaml: string; theme: string } | null {
  try {
    const binary = atob(hash);
    const bytes = new Uint8Array(Array.from(binary, (c) => c.charCodeAt(0)));
    const decompressed = pako.inflate(bytes);
    const text = new TextDecoder().decode(decompressed);
    const { y, t } = JSON.parse(text) as { y: string; t: string };
    return { yaml: y, theme: t };
  } catch {
    return null;
  }
}
