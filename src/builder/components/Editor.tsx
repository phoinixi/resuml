import { useEffect, useRef } from 'react';
import { EditorView, keymap, lineNumbers, highlightActiveLine, highlightActiveLineGutter } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { yaml as yamlLang } from '@codemirror/lang-yaml';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import { syntaxHighlighting, HighlightStyle, bracketMatching } from '@codemirror/language';
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search';
import { tags } from '@lezer/highlight';

interface EditorProps {
  yaml: string;
  onChange: (yaml: string) => void;
  error: string | null;
}

// Dark syntax highlighting for YAML
const darkHighlight = HighlightStyle.define([
  { tag: tags.keyword, color: '#c792ea' },
  { tag: tags.atom, color: '#f78c6c' },
  { tag: tags.number, color: '#f78c6c' },
  { tag: tags.definition(tags.variableName), color: '#82aaff' },
  { tag: tags.variableName, color: '#82aaff' },
  { tag: tags.function(tags.variableName), color: '#82aaff' },
  { tag: tags.string, color: '#c3e88d' },
  { tag: tags.special(tags.string), color: '#c3e88d' },
  { tag: tags.comment, color: '#637777', fontStyle: 'italic' },
  { tag: tags.meta, color: '#ffcb6b' },
  { tag: tags.propertyName, color: '#ffcb6b' },
  { tag: tags.operator, color: '#89ddff' },
  { tag: tags.punctuation, color: '#89ddff' },
  { tag: tags.bracket, color: '#89ddff' },
  { tag: tags.tagName, color: '#f07178' },
  { tag: tags.attributeName, color: '#ffcb6b' },
  { tag: tags.bool, color: '#f78c6c' },
  { tag: tags.null, color: '#f78c6c' },
]);

const theme = EditorView.theme({
  '&': {
    height: '100%',
    fontSize: '13.5px',
    backgroundColor: '#0d1117',
  },
  '.cm-scroller': {
    fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace",
    overflow: 'auto',
  },
  '.cm-content': {
    caretColor: '#58a6ff',
    padding: '12px 0',
    color: '#c9d1d9',
  },
  '.cm-gutters': {
    backgroundColor: '#0d1117',
    color: '#6e7681',
    border: 'none',
    paddingRight: '8px',
  },
  '.cm-activeLineGutter': {
    backgroundColor: '#161b22',
    color: '#c9d1d9',
  },
  '.cm-activeLine': {
    backgroundColor: '#161b2280',
  },
  '.cm-selectionBackground': {
    backgroundColor: '#264f7840 !important',
  },
  '&.cm-focused .cm-selectionBackground': {
    backgroundColor: '#264f7860 !important',
  },
  '.cm-cursor': {
    borderLeftColor: '#58a6ff',
    borderLeftWidth: '2px',
  },
  '.cm-matchingBracket': {
    backgroundColor: '#264f7840',
    outline: '1px solid #58a6ff40',
  },
});

export function Editor({ yaml, onChange, error }: EditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const isExternalUpdate = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateListener = EditorView.updateListener.of((update) => {
      if (update.docChanged && !isExternalUpdate.current) {
        onChange(update.state.doc.toString());
      }
    });

    const state = EditorState.create({
      doc: yaml,
      extensions: [
        lineNumbers(),
        highlightActiveLine(),
        highlightActiveLineGutter(),
        history(),
        bracketMatching(),
        highlightSelectionMatches(),
        yamlLang(),
        syntaxHighlighting(darkHighlight),
        keymap.of([...defaultKeymap, ...historyKeymap, ...searchKeymap]),
        updateListener,
        theme,
        EditorView.lineWrapping,
      ],
    });

    const view = new EditorView({
      state,
      parent: containerRef.current,
    });

    viewRef.current = view;

    return () => {
      view.destroy();
      viewRef.current = null;
    };
  }, []); // Mount once

  // Sync external yaml changes (e.g., from form mode or import)
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    const currentDoc = view.state.doc.toString();
    if (currentDoc !== yaml) {
      isExternalUpdate.current = true;
      view.dispatch({
        changes: { from: 0, to: currentDoc.length, insert: yaml },
      });
      isExternalUpdate.current = false;
    }
  }, [yaml]);

  return (
    <div className="editor-container">
      <div className="editor-header">
        <span className="editor-title">resume.yaml</span>
        {error && <span className="editor-error" title={error}>YAML Error</span>}
      </div>
      <div className="editor-body" ref={containerRef} />
    </div>
  );
}
