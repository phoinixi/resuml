import React, { useRef, useCallback, useMemo } from 'react';
import { Target, FolderOpen, Link, Palette, FileText, FileJson, FileDown } from 'lucide-react';
import type { ResumeSchema } from '../../types/resume';
import { exportYaml, exportJson, exportPdf, copyShareUrl, readFile } from '../services/fileOps';
import { DownloadDropdown } from './DownloadDropdown';

interface ToolbarProps {
  mode: 'yaml' | 'form';
  onModeChange: (mode: 'yaml' | 'form') => void;
  themeName: string;
  onThemePickerToggle: () => void;
  showAts: boolean;
  onAtsToggle: () => void;
  yaml: string;
  resume: ResumeSchema | null;
  html: string | null;
  onImport: (yaml: string) => void;
}

export function Toolbar({
  mode, onModeChange, themeName, onThemePickerToggle,
  showAts, onAtsToggle, yaml, resume, html, onImport,
}: ToolbarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const shareRef = useRef<HTMLButtonElement>(null);

  const handleImport = useCallback(() => fileInputRef.current?.click(), []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    void readFile(file).then((content) => {
      onImport(content);
      e.target.value = '';
    });
  }, [onImport]);

  const handleExportYaml = useCallback(() => { exportYaml(yaml); }, [yaml]);

  const handleExportJson = useCallback(() => {
    if (resume) exportJson(resume as unknown as Record<string, unknown>);
  }, [resume]);

  const handleExportPdf = useCallback(() => {
    if (html) exportPdf(html);
  }, [html]);

  const downloadOptions = useMemo(() => [
    { label: 'YAML', icon: <FileText size={14} />, onClick: handleExportYaml },
    { label: 'JSON', icon: <FileJson size={14} />, onClick: handleExportJson, disabled: !resume },
    { label: 'PDF', icon: <FileDown size={14} />, onClick: handleExportPdf, disabled: !html },
  ], [handleExportYaml, handleExportJson, handleExportPdf, html]);

  const handleShare = useCallback(() => {
    void copyShareUrl(yaml, themeName).then(() => {
      const btn = shareRef.current;
      if (btn) {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Share'; }, 1500);
      }
    }).catch(() => {
      // clipboard unavailable
    });
  }, [yaml, themeName]);

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <span className="toolbar-brand">resuml</span>
        <div className="toolbar-mode-toggle">
          <button
            className={`toolbar-mode-btn ${mode === 'form' ? 'active' : ''}`}
            onClick={() => { onModeChange('form'); }}
          >Editor</button>
          <button
            className={`toolbar-mode-btn ${mode === 'yaml' ? 'active' : ''}`}
            onClick={() => { onModeChange('yaml'); }}
          >YAML</button>
        </div>
      </div>

      <div className="toolbar-center">
        <button className="toolbar-theme-btn" onClick={onThemePickerToggle}>
          <Palette size={14} /> {themeName}
        </button>
      </div>

      <div className="toolbar-right">
        <button
          className={`toolbar-btn ${showAts ? 'active' : ''}`}
          onClick={onAtsToggle}
          title="ATS Score"
        ><Target size={14} /> ATS</button>
        <button className="toolbar-btn" onClick={handleImport} title="Import YAML"><FolderOpen size={14} /> Import</button>
        <DownloadDropdown options={downloadOptions} />
        <button
          className="toolbar-btn toolbar-share-btn"
          ref={shareRef}
          onClick={handleShare}
          title="Copy share link"
        ><Link size={14} /> Share</button>
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
