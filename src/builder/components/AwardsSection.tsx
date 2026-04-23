import { Plus, X } from 'lucide-react';
import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { Section } from './Section';
import { SortableList } from './SortableList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface AwardsSectionProps {
  awards: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function AwardsSection({ awards, update }: AwardsSectionProps) {
  return (
    <Section title="Awards" count={awards.length} hasContent={awards.length > 0}>
      <SortableList
        items={awards}
        keyOf={(_, i) => `award-${i}`}
        onReorder={(next) => { update(['awards'], next); }}
        ariaLabel="Reorder awards"
        renderItem={(award, i, handle) => (
          <div className="form-entry">
            <div className="form-entry-header">
              {handle}
              <span className="form-entry-title">{(award['title'] as string) || `Award ${i + 1}`}</span>
              <button type="button" className="form-entry-remove" aria-label="Remove"
                onClick={() => { update(['awards'], awards.filter((_, idx) => idx !== i)); }}
              ><X size={14} aria-hidden="true" /></button>
            </div>
            <TextInput label="Title" value={(award['title'] as string | undefined) ?? ''}
              onChange={(v) => { update(['awards', i, 'title'], v); }} />
            <div className="form-row">
              <TextInput label="Date" placeholder="YYYY"
                value={(award['date'] as string | undefined) ?? ''}
                onChange={(v) => { update(['awards', i, 'date'], v); }} />
              <TextInput label="Awarder"
                value={(award['awarder'] as string | undefined) ?? ''}
                onChange={(v) => { update(['awards', i, 'awarder'], v); }} />
            </div>
            <TextArea label="Summary"
              value={(award['summary'] as string | undefined) ?? ''}
              onChange={(v) => { update(['awards', i, 'summary'], v); }} />
          </div>
        )}
      />
      <button type="button" className="form-add-entry" onClick={() => {
        update(['awards'], [...awards, { title: '', date: '', awarder: '' }]);
      }}><Plus size={14} aria-hidden="true" /> Add award</button>
    </Section>
  );
}
