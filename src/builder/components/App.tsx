import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Editor } from './Editor';
import { FormMode } from './FormMode';
import { Preview } from './Preview';
import { Toolbar } from './Toolbar';
import { AtsPanel } from './AtsPanel';
import { ThemePicker } from './ThemePicker';
import { useResume } from '../hooks/useResume';
import { useTheme } from '../hooks/useTheme';
import { useAts } from '../hooks/useAts';
import { usePersist } from '../hooks/usePersist';
import { DEFAULT_YAML } from '../defaults';

export function App() {
  const [mode, setMode] = useState<'yaml' | 'form'>('yaml');
  const [showAts, setShowAts] = useState(false);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [themeName, setThemeName] = useState('stackoverflow');
  const [splitPos, setSplitPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { yaml, resume, error, setYaml, updateResume } = useResume(DEFAULT_YAML);
  const { html, loading: themeLoading, themeError, renderResume } = useTheme(themeName);
  const atsResult = useAts(resume);

  // Persist state
  usePersist(yaml, themeName, setYaml, setThemeName);

  // Re-render when resume or theme changes
  useEffect(() => {
    if (resume && !error) {
      renderResume(resume);
    }
  }, [resume, error, renderResume]);

  const handleThemeSelect = useCallback((name: string) => {
    setThemeName(name);
    setShowThemePicker(false);
  }, []);

  // Split pane drag
  const handleDragStart = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;

    setDragging(true);

    const onMove = (ev: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const pct = ((ev.clientX - rect.left) / rect.width) * 100;
      setSplitPos(Math.min(80, Math.max(20, pct)));
    };
    const onUp = () => {
      setDragging(false);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }, []);

  return (
    <>
      <Toolbar
        mode={mode}
        onModeChange={setMode}
        themeName={themeName}
        onThemePickerToggle={() => setShowThemePicker(!showThemePicker)}
        showAts={showAts}
        onAtsToggle={() => setShowAts(!showAts)}
        yaml={yaml}
        resume={resume}
        onImport={setYaml}
      />

      {showThemePicker && (
        <ThemePicker
          currentTheme={themeName}
          onSelect={handleThemeSelect}
          onClose={() => setShowThemePicker(false)}
        />
      )}

      <div className={`builder-main${dragging ? ' dragging' : ''}`} ref={containerRef}>
        <div className="builder-editor" style={{ width: `${splitPos}%` }}>
          {mode === 'yaml' ? (
            <Editor yaml={yaml} onChange={setYaml} error={error} />
          ) : (
            <FormMode resume={resume} onChange={updateResume} />
          )}
        </div>

        <div className="builder-divider" onMouseDown={handleDragStart} title="Drag to resize" />

        <div className="builder-preview" style={{ width: `${100 - splitPos}%` }}>
          <Preview html={html} loading={themeLoading} error={themeError} />
        </div>

        {showAts && (
          <div className="builder-ats">
            <AtsPanel result={atsResult} onClose={() => setShowAts(false)} />
          </div>
        )}
      </div>
    </>
  );
}
