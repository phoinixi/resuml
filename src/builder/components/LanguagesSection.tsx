import { Plus, X } from 'lucide-react';
import { TextInput } from './TextInput';
import { Section } from './Section';
import { SortableList } from './SortableList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface LanguagesSectionProps {
  languages: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function LanguagesSection({ languages, update }: LanguagesSectionProps) {
  return (
    <Section title="Languages" count={languages.length} hasContent={languages.length > 0}>
      <SortableList
        items={languages}
        keyOf={(_, i) => `lang-${i}`}
        onReorder={(next) => { update(['languages'], next); }}
        ariaLabel="Reorder languages"
        renderItem={(lang, i, handle) => (
          <div className="form-entry">
            <div className="form-entry-header">
              {handle}
              <span className="form-entry-title">{(lang['language'] as string) || `Language ${i + 1}`}</span>
              <button type="button" className="form-entry-remove" aria-label="Remove"
                onClick={() => { update(['languages'], languages.filter((_, idx) => idx !== i)); }}
              ><X size={14} aria-hidden="true" /></button>
            </div>
            <div className="form-row">
              <TextInput label="Language" placeholder="e.g. English"
                value={(lang['language'] as string | undefined) ?? ''}
                onChange={(v) => { update(['languages', i, 'language'], v); }} />
              <TextInput label="Fluency" placeholder="Native, Fluent, …"
                value={(lang['fluency'] as string | undefined) ?? ''}
                onChange={(v) => { update(['languages', i, 'fluency'], v); }} />
            </div>
          </div>
        )}
      />
      <button type="button" className="form-add-entry" onClick={() => {
        update(['languages'], [...languages, { language: '', fluency: '' }]);
      }}><Plus size={14} aria-hidden="true" /> Add language</button>
    </Section>
  );
}
