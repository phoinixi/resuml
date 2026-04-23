import { Plus, X } from 'lucide-react';
import { TextInput } from './TextInput';
import { Section } from './Section';
import { KeywordsList } from './KeywordsList';
import { SortableList } from './SortableList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface InterestsSectionProps {
  interests: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function InterestsSection({ interests, update }: InterestsSectionProps) {
  return (
    <Section title="Interests" count={interests.length} hasContent={interests.length > 0}>
      <SortableList
        items={interests}
        keyOf={(_, i) => `interest-${i}`}
        onReorder={(next) => { update(['interests'], next); }}
        ariaLabel="Reorder interests"
        renderItem={(interest, i, handle) => (
          <div className="form-entry">
            <div className="form-entry-header">
              {handle}
              <span className="form-entry-title">{(interest['name'] as string) || `Interest ${i + 1}`}</span>
              <button type="button" className="form-entry-remove" aria-label="Remove"
                onClick={() => { update(['interests'], interests.filter((_, idx) => idx !== i)); }}
              ><X size={14} aria-hidden="true" /></button>
            </div>
            <TextInput label="Name" value={(interest['name'] as string | undefined) ?? ''}
              onChange={(v) => { update(['interests', i, 'name'], v); }} />
            <KeywordsList
              keywords={(interest['keywords'] as string[] | undefined) ?? []}
              onUpdate={(kw) => { update(['interests', i, 'keywords'], kw); }}
            />
          </div>
        )}
      />
      <button type="button" className="form-add-entry" onClick={() => {
        update(['interests'], [...interests, { name: '', keywords: [] }]);
      }}><Plus size={14} aria-hidden="true" /> Add interest</button>
    </Section>
  );
}
