import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
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
 * sharing is still async (compressed payload needs async unzip), for that
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
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 640);
  /** Desktop-only: 'split' | 'editor' | 'preview'. Collapses one side fully. */
  const [focus, setFocus] = useState<'split' | 'editor' | 'preview'>('split');
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
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

  // Split pane drag: unified pointer events via setPointerCapture. One
  // listener chain handles mouse, touch, and stylus. Browsers with
  // PointerEvent support (all modern) deliver pointermove reliably even
  // when the pointer leaves the divider element, the capture binds
  // delivery to the original target.
  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const divider = dividerRef.current;
    if (!container || !divider) return;
    // Ignore right-click / middle-click / touch drags that aren't primary
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    e.preventDefault();
    divider.setPointerCapture(e.pointerId);
    setDragging(true);

    const onMove = (ev: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const raw = isMobile
        ? ((ev.clientY - rect.top) / rect.height) * 100
        : ((ev.clientX - rect.left) / rect.width) * 100;
      setSplitPos(Math.min(85, Math.max(15, raw)));
    };
    const onUp = (ev: PointerEvent) => {
      setDragging(false);
      divider.releasePointerCapture(ev.pointerId);
      divider.removeEventListener('pointermove', onMove);
      divider.removeEventListener('pointerup', onUp);
      divider.removeEventListener('pointercancel', onUp);
    };
    divider.addEventListener('pointermove', onMove);
    divider.addEventListener('pointerup', onUp);
    divider.addEventListener('pointercancel', onUp);
  }, [isMobile]);

  const handleDividerDouble = useCallback(() => {
    // Double-click / double-tap the divider to reset to 50/50.
    setSplitPos(50);
  }, []);

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

      <div
        className={`builder-main${dragging ? ' dragging' : ''} focus-${focus}`}
        ref={containerRef}
      >
        <div
          className="builder-editor"
          style={
            focus === 'editor' ? { flex: '1 1 0', width: '100%' } :
            focus === 'preview' ? { flex: '0 0 0', display: 'none' } :
            isMobile
              ? { flex: `${splitPos} 1 0`, width: '100%' }
              : { flex: `${splitPos} 1 0`, width: 'auto' }
          }
        >
          {mode === 'yaml' ? (
            <Editor yaml={yaml} onChange={setYaml} error={error} />
          ) : (
            <FormMode resume={resume} onChange={updateResume} />
          )}
          {!isMobile && focus !== 'editor' && (
            <button
              type="button"
              className="builder-focus-toggle builder-focus-editor"
              onClick={() => { setFocus('editor'); }}
              title="Expand editor"
              aria-label="Expand editor"
            >
              <Maximize2 size={14} aria-hidden="true" />
            </button>
          )}
          {!isMobile && focus === 'editor' && (
            <button
              type="button"
              className="builder-focus-toggle builder-focus-editor"
              onClick={() => { setFocus('split'); }}
              title="Back to split view"
              aria-label="Back to split view"
            >
              <Minimize2 size={14} aria-hidden="true" />
            </button>
          )}
        </div>

        {focus === 'split' && (
          <div
            ref={dividerRef}
            className="builder-divider"
            onPointerDown={handlePointerDown}
            onDoubleClick={handleDividerDouble}
            title="Drag to resize · Double-click to reset"
            role="separator"
            aria-orientation={isMobile ? 'horizontal' : 'vertical'}
            aria-valuenow={Math.round(splitPos)}
            aria-valuemin={15}
            aria-valuemax={85}
          />
        )}

        <div
          className="builder-preview"
          style={
            focus === 'preview' ? { flex: '1 1 0', width: '100%' } :
            focus === 'editor' ? { flex: '0 0 0', display: 'none' } :
            isMobile
              ? { flex: `${100 - splitPos} 1 0`, width: '100%' }
              : { flex: `${100 - splitPos} 1 0`, width: 'auto' }
          }
        >
          <Preview html={html} loading={themeLoading} error={themeError} />
          {!isMobile && focus !== 'preview' && (
            <button
              type="button"
              className="builder-focus-toggle builder-focus-preview"
              onClick={() => { setFocus('preview'); }}
              title="Expand preview"
              aria-label="Expand preview"
            >
              <Maximize2 size={14} aria-hidden="true" />
            </button>
          )}
          {!isMobile && focus === 'preview' && (
            <button
              type="button"
              className="builder-focus-toggle builder-focus-preview"
              onClick={() => { setFocus('split'); }}
              title="Back to split view"
              aria-label="Back to split view"
            >
              <Minimize2 size={14} aria-hidden="true" />
            </button>
          )}
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
