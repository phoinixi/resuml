import React, { useRef, useCallback, useMemo } from 'react';
import { Target, FolderOpen, Link, Palette, FileText, FileJson, FileDown, Briefcase, Check } from 'lucide-react';
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
  hasJobDescription: boolean;
  onJdOpen: () => void;
  yaml: string;
  resume: ResumeSchema | null;
  html: string | null;
  onImport: (yaml: string) => void;
}

export function Toolbar({
  mode, onModeChange, themeName, onThemePickerToggle,
  showAts, onAtsToggle, hasJobDescription, onJdOpen,
  yaml, resume, html, onImport,
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
  ], [handleExportYaml, handleExportJson, handleExportPdf, html, resume]);

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
    <div className="toolbar" role="toolbar" aria-label="Resume builder actions">
      <div className="toolbar-left">
        <a
          className="toolbar-brand"
          href="/about"
          title="About resuml — your data stays in your browser"
        >resuml</a>
        <div className="toolbar-mode-toggle" role="radiogroup" aria-label="Edit mode">
          <button
            className={`toolbar-mode-btn ${mode === 'form' ? 'active' : ''}`}
            onClick={() => { onModeChange('form'); }}
            role="radio"
            aria-checked={mode === 'form'}
          >Editor</button>
          <button
            className={`toolbar-mode-btn ${mode === 'yaml' ? 'active' : ''}`}
            onClick={() => { onModeChange('yaml'); }}
            role="radio"
            aria-checked={mode === 'yaml'}
          >YAML</button>
        </div>
      </div>

      <div className="toolbar-center">
        <button
          className="toolbar-theme-btn"
          onClick={onThemePickerToggle}
          aria-label={`Change theme (current: ${themeName})`}
        >
          <Palette size={14} aria-hidden="true" /> {themeName}
        </button>
      </div>

      <div className="toolbar-right">
        <button
          className={`toolbar-btn toolbar-jd-btn ${hasJobDescription ? 'has-value' : 'primary'}`}
          onClick={onJdOpen}
          title={hasJobDescription ? 'Edit job description' : 'Add a job description to enable ATS matching'}
          aria-label={hasJobDescription ? 'Edit job description' : 'Add job description'}
        >
          {hasJobDescription ? (
            <><Check size={14} aria-hidden="true" /> Job Description</>
          ) : (
            <><Briefcase size={14} aria-hidden="true" /> Add Job Description</>
          )}
        </button>
        <button
          className={`toolbar-btn ${showAts ? 'active' : ''}`}
          onClick={onAtsToggle}
          title={hasJobDescription ? 'Toggle ATS match panel' : 'Add a job description to enable ATS'}
          aria-label="Toggle ATS panel"
          aria-pressed={showAts}
          disabled={!hasJobDescription}
        ><Target size={14} aria-hidden="true" /> ATS</button>
        <button
          className="toolbar-btn"
          onClick={handleImport}
          title="Import YAML"
          aria-label="Import YAML file"
        ><FolderOpen size={14} aria-hidden="true" /> Import</button>
        <DownloadDropdown options={downloadOptions} />
        <button
          className="toolbar-btn toolbar-share-btn"
          ref={shareRef}
          onClick={handleShare}
          title="Copy share link"
          aria-label="Copy share link to clipboard"
        ><Link size={14} aria-hidden="true" /> Share</button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".yaml,.yml,.json"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>
    </div>
  );
}
