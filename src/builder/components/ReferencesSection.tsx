import { Plus, X } from 'lucide-react';
import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { Section } from './Section';
import { SortableList } from './SortableList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface ReferencesSectionProps {
  references: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function ReferencesSection({ references, update }: ReferencesSectionProps) {
  return (
    <Section title="References" count={references.length} hasContent={references.length > 0}>
      <SortableList
        items={references}
        keyOf={(_, i) => `ref-${i}`}
        onReorder={(next) => { update(['references'], next); }}
        ariaLabel="Reorder references"
        renderItem={(ref, i, handle) => (
          <div className="form-entry">
            <div className="form-entry-header">
              {handle}
              <span className="form-entry-title">{(ref['name'] as string) || `Reference ${i + 1}`}</span>
              <button type="button" className="form-entry-remove" aria-label="Remove"
                onClick={() => { update(['references'], references.filter((_, idx) => idx !== i)); }}
              ><X size={14} aria-hidden="true" /></button>
            </div>
            <TextInput label="Name" value={(ref['name'] as string | undefined) ?? ''}
              onChange={(v) => { update(['references', i, 'name'], v); }} />
            <TextArea label="Reference" rows={4}
              value={(ref['reference'] as string | undefined) ?? ''}
              onChange={(v) => { update(['references', i, 'reference'], v); }} />
          </div>
        )}
      />
      <button type="button" className="form-add-entry" onClick={() => {
        update(['references'], [...references, { name: '', reference: '' }]);
      }}><Plus size={14} aria-hidden="true" /> Add reference</button>
    </Section>
  );
}
