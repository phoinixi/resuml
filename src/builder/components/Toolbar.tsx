import React, { useRef, useCallback } from 'react';
import type { ResumeSchema } from '../../types/resume';
import { exportYaml, exportJson, printHtml, copyShareUrl, readFile } from '../services/fileOps';

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
  const shareRef = useRef<HTMLButtonElement>(null);

  const handleImport = useCallback(() => fileInputRef.current?.click(), []);

  const handleFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const content = await readFile(file);
    onImport(content);
    e.target.value = '';
  }, [onImport]);

  const handleExportYaml = useCallback(() => exportYaml(yaml), [yaml]);

  const handleExportJson = useCallback(() => {
    if (resume) exportJson(resume as unknown as Record<string, unknown>);
  }, [resume]);

  const handlePrint = useCallback(() => {
    if (previewHtml) printHtml(previewHtml);
  }, [previewHtml]);

  const handleShare = useCallback(async () => {
    try {
      await copyShareUrl(yaml, themeName);
      const btn = shareRef.current;
      if (btn) {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = '🔗 Share'; }, 1500);
      }
    } catch {
      // clipboard unavailable
    }
  }, [yaml, themeName]);

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <span className="toolbar-brand">resuml</span>
        <div className="toolbar-mode-toggle">
          <button
            className={`toolbar-mode-btn ${mode === 'yaml' ? 'active' : ''}`}
            onClick={() => onModeChange('yaml')}
          >YAML</button>
          <button
            className={`toolbar-mode-btn ${mode === 'form' ? 'active' : ''}`}
            onClick={() => onModeChange('form')}
          >Form</button>
        </div>
      </div>

      <div className="toolbar-center">
        <button className="toolbar-theme-btn" onClick={onThemePickerToggle}>
          🎨 {themeName}
        </button>
      </div>

      <div className="toolbar-right">
        <button
          className={`toolbar-btn ${showAts ? 'active' : ''}`}
          onClick={onAtsToggle}
          title="ATS Score"
        >🎯 ATS</button>
        <button className="toolbar-btn" onClick={handleImport} title="Import YAML">📂 Import</button>
        <button className="toolbar-btn" onClick={handleExportYaml} title="Export YAML">💾 YAML</button>
        <button className="toolbar-btn" onClick={handleExportJson} title="Export JSON">📋 JSON</button>
        <button className="toolbar-btn" onClick={handlePrint} title="Print / Save as PDF">🖨️ PDF</button>
        <button
          className="toolbar-btn toolbar-share-btn"
          ref={shareRef}
          onClick={handleShare}
          title="Copy share link"
        >🔗 Share</button>
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
