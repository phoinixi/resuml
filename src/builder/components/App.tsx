import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Editor } from './Editor';
import { FormMode } from './FormMode';
import { Preview } from './Preview';
import { Toolbar } from './Toolbar';
import { AtsPanel } from './AtsPanel';
import { ThemePicker } from './ThemePicker';
import { JobDescriptionModal } from './JobDescriptionModal';
import { useResume } from '../hooks/useResume';
import { useTheme } from '../hooks/useTheme';
import { useAts } from '../hooks/useAts';
import { usePersist } from '../hooks/usePersist';
import { loadFromStorage } from '../services/persist';
import { DEFAULT_YAML } from '../defaults';

/**
 * Read persisted state synchronously before the first render so we never show
 * the default sample ("Jane Smith") flashing in on hard reload. URL-hash
 * sharing is still async (compressed payload needs async unzip) — for that
 * path usePersist's useEffect swaps state after mount.
 */
function readInitialState(): { yaml: string; theme: string; jobDescription: string } {
  if (typeof window === 'undefined') {
    return { yaml: DEFAULT_YAML, theme: 'stackoverflow', jobDescription: '' };
  }
  const stored = loadFromStorage();
  return {
    yaml: stored.yaml ?? DEFAULT_YAML,
    theme: stored.theme ?? 'stackoverflow',
    jobDescription: stored.jobDescription ?? '',
  };
}

export function App() {
  // Sync-read persisted state up front so first paint shows the user's data,
  // not the default template. Shared-URL loading still happens post-mount.
  const [initialState] = useState(readInitialState);

  const [mode, setMode] = useState<'yaml' | 'form'>('form');
  const [showAts, setShowAts] = useState(false);
  const [showJdModal, setShowJdModal] = useState(false);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [themeName, setThemeName] = useState(initialState.theme);
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

  const { yaml, resume, error, setYaml, updateResume } = useResume(initialState.yaml);
  const { html, loading: themeLoading, themeError, renderResume } = useTheme(themeName);
  const [jobDescription, setJobDescription] = useState(initialState.jobDescription);
  const atsResult = useAts(resume, jobDescription);
  const hasJobDescription = jobDescription.trim().length > 0;

  // Persist state (also restores from URL hash async if present)
  usePersist(yaml, themeName, jobDescription, setYaml, setThemeName, setJobDescription);

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

  const handleJdSave = useCallback((jd: string) => {
    const trimmed = jd.trim();
    setJobDescription(trimmed);
    if (trimmed) setShowAts(true);
    else setShowAts(false);
  }, []);

  const handleAtsToggle = useCallback(() => {
    if (!hasJobDescription) {
      setShowJdModal(true);
      return;
    }
    setShowAts((v) => !v);
  }, [hasJobDescription]);

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
        onAtsToggle={handleAtsToggle}
        hasJobDescription={hasJobDescription}
        onJdOpen={() => { setShowJdModal(true); }}
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

      {showJdModal && (
        <JobDescriptionModal
          value={jobDescription}
          onSave={handleJdSave}
          onClose={() => { setShowJdModal(false); }}
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
          role="separator"
          aria-orientation={isMobile ? 'horizontal' : 'vertical'}
        />

        <div className="builder-preview" style={isMobile ? { height: `${100 - splitPos}%` } : { width: `${100 - splitPos}%` }}>
          <Preview html={html} loading={themeLoading} error={themeError} />
        </div>

        {showAts && (
          <div className="builder-ats">
            <AtsPanel
              result={atsResult}
              hasJobDescription={hasJobDescription}
              onOpenJdModal={() => { setShowJdModal(true); }}
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
