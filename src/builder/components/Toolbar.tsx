import { h } from 'preact';
import { useRef, useCallback } from 'preact/hooks';
import type { ResumeSchema } from '../../types/resume';
import { stringify as yamlStringify } from 'yaml';

interface ToolbarProps {
  mode: 'yaml' | 'form';
  onModeChange: (mode: 'yaml' | 'form') => void;
  themeName: string;
  onThemePickerToggle: () => void;
  showAts: boolean;
  onAtsToggle: () => void;
  yaml: string;
  resume: ResumeSchema | null;
  onImport: (yaml: string) => void;
  previewHtml: string | null;
}

export function Toolbar({
  mode, onModeChange, themeName, onThemePickerToggle,
  showAts, onAtsToggle, yaml, resume, onImport, previewHtml,
}: ToolbarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImport = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback((e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onImport(reader.result);
      }
    };
    reader.readAsText(file);
    // Reset so same file can be imported again
    (e.target as HTMLInputElement).value = '';
  }, [onImport]);

  const handleExportYaml = useCallback(() => {
    const blob = new Blob([yaml], { type: 'text/yaml' });
    downloadBlob(blob, 'resume.yaml');
  }, [yaml]);

  const handleExportJson = useCallback(() => {
    if (!resume) return;
    const blob = new Blob([JSON.stringify(resume, null, 2)], { type: 'application/json' });
    downloadBlob(blob, 'resume.json');
  }, [resume]);

  const handlePrint = useCallback(() => {
    if (!previewHtml) return;
    const win = window.open('', '_blank');
    if (!win) return;
    win.document.write(previewHtml);
    win.document.close();
    // Wait for styles/images to load
    win.onload = () => {
      win.print();
    };
  }, [previewHtml]);

  const handleShare = useCallback(async () => {
    try {
      const { compress } = await import('../utils/urlCodec');
      const hash = compress(yaml, themeName);
      const url = `${window.location.origin}${window.location.pathname}#${hash}`;
      await navigator.clipboard.writeText(url);
      // Brief visual feedback
      const btn = document.querySelector('.toolbar-share-btn');
      if (btn) {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = '🔗 Share'; }, 1500);
      }
    } catch {
      // Fallback: just copy URL as-is
    }
  }, [yaml, themeName]);

  return (
    <div class="toolbar">
      <div class="toolbar-left">
        <span class="toolbar-brand">resuml</span>
        <div class="toolbar-mode-toggle">
          <button
            class={`toolbar-mode-btn ${mode === 'yaml' ? 'active' : ''}`}
            onClick={() => onModeChange('yaml')}
          >YAML</button>
          <button
            class={`toolbar-mode-btn ${mode === 'form' ? 'active' : ''}`}
            onClick={() => onModeChange('form')}
          >Form</button>
        </div>
      </div>

      <div class="toolbar-center">
        <button class="toolbar-theme-btn" onClick={onThemePickerToggle}>
          🎨 {themeName}
        </button>
      </div>

      <div class="toolbar-right">
        <button
          class={`toolbar-btn ${showAts ? 'active' : ''}`}
          onClick={onAtsToggle}
          title="ATS Score"
        >🎯 ATS</button>
        <button class="toolbar-btn" onClick={handleImport} title="Import YAML">📂 Import</button>
        <button class="toolbar-btn" onClick={handleExportYaml} title="Export YAML">💾 YAML</button>
        <button class="toolbar-btn" onClick={handleExportJson} title="Export JSON">📋 JSON</button>
        <button class="toolbar-btn" onClick={handlePrint} title="Print / Save as PDF">🖨️ PDF</button>
        <button class="toolbar-btn toolbar-share-btn" onClick={handleShare} title="Copy share link">🔗 Share</button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".yaml,.yml,.json"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
