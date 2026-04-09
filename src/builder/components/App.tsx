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
  const [mode, setMode] = useState<'yaml' | 'form'>('form');
  const [showAts, setShowAts] = useState(false);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [themeName, setThemeName] = useState('stackoverflow');
  const [splitPos, setSplitPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e: MediaQueryListEvent) => { setIsMobile(e.matches); };
    mq.addEventListener('change', handler);
    return () => { mq.removeEventListener('change', handler); };
  }, []);

  const { yaml, resume, error, setYaml, updateResume } = useResume(DEFAULT_YAML);
  const { html, loading: themeLoading, themeError, renderResume } = useTheme(themeName);
  const atsResult = useAts(resume);

  // Persist state
  usePersist(yaml, themeName, setYaml, setThemeName);

  // Re-render when resume or theme changes
  useEffect(() => {
    if (resume && !error) {
      void renderResume(resume);
    }
  }, [resume, error, renderResume]);

  const handleThemeSelect = useCallback((name: string) => {
    setThemeName(name);
    setShowThemePicker(false);
  }, []);

  // Split pane drag — shared logic for mouse and touch
  const startDrag = useCallback((mobile: boolean) => {
    const container = containerRef.current;
    if (!container) return;
    setDragging(true);

    const calcPct = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const raw = mobile
        ? ((clientY - rect.top) / rect.height) * 100
        : ((clientX - rect.left) / rect.width) * 100;
      return Math.min(80, Math.max(20, raw));
    };

    const onMouseMove = (ev: MouseEvent) => { setSplitPos(calcPct(ev.clientX, ev.clientY)); };
    const onMouseUp = () => {
      setDragging(false);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    const onTouchMove = (ev: TouchEvent) => {
      const t = ev.touches[0];
      if (t) setSplitPos(calcPct(t.clientX, t.clientY));
    };
    const onTouchEnd = () => {
      setDragging(false);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };

    if (mobile) {
      document.addEventListener('touchmove', onTouchMove, { passive: true });
      document.addEventListener('touchend', onTouchEnd);
    } else {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  }, []);

  const handleDragStart = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    startDrag(isMobile);
  }, [isMobile, startDrag]);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    startDrag(true);
  }, [startDrag]);

  return (
    <>
      <Toolbar
        mode={mode}
        onModeChange={setMode}
        themeName={themeName}
        onThemePickerToggle={() => {
          setShowThemePicker(!showThemePicker);
        }}
        showAts={showAts}
        onAtsToggle={() => {
          setShowAts(!showAts);
        }}
        yaml={yaml}
        resume={resume}
        html={html}
        onImport={setYaml}
      />

      {showThemePicker && (
        <ThemePicker
          currentTheme={themeName}
          onSelect={handleThemeSelect}
          onClose={() => {
            setShowThemePicker(false);
          }}
        />
      )}

      <div className={`builder-main${dragging ? ' dragging' : ''}`} ref={containerRef}>
        <div className="builder-editor" style={isMobile ? { height: `${splitPos}%` } : { width: `${splitPos}%` }}>
          {mode === 'yaml' ? (
            <Editor yaml={yaml} onChange={setYaml} error={error} />
          ) : (
            <FormMode resume={resume} onChange={updateResume} />
          )}
        </div>

        <div
          className="builder-divider"
          onMouseDown={handleDragStart}
          onTouchStart={handleTouchStart}
          title="Drag to resize"
        />

        <div className="builder-preview" style={isMobile ? { height: `${100 - splitPos}%` } : { width: `${100 - splitPos}%` }}>
          <Preview html={html} loading={themeLoading} error={themeError} />
        </div>

        {showAts && (
          <div className="builder-ats">
            <AtsPanel
              result={atsResult}
              onClose={() => {
                setShowAts(false);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
