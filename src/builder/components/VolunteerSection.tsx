import { Plus, X } from 'lucide-react';
import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { Section } from './Section';
import { HighlightsList } from './HighlightsList';
import { SortableList } from './SortableList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface VolunteerSectionProps {
  volunteer: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function VolunteerSection({ volunteer, update }: VolunteerSectionProps) {
  return (
    <Section title="Volunteer" count={volunteer.length} hasContent={volunteer.length > 0}>
      <SortableList
        items={volunteer}
        keyOf={(_, i) => `vol-${i}`}
        onReorder={(next) => { update(['volunteer'], next); }}
        ariaLabel="Reorder volunteer entries"
        renderItem={(entry, i, handle) => (
          <div className="form-entry">
            <div className="form-entry-header">
              {handle}
              <span className="form-entry-title">{(entry['organization'] as string) || `Volunteer ${i + 1}`}</span>
              <button type="button" className="form-entry-remove" aria-label="Remove"
                onClick={() => { update(['volunteer'], volunteer.filter((_, idx) => idx !== i)); }}
              ><X size={14} aria-hidden="true" /></button>
            </div>
            <TextInput label="Organization" value={(entry['organization'] as string | undefined) ?? ''}
              onChange={(v) => { update(['volunteer', i, 'organization'], v); }} />
            <TextInput label="Position" value={(entry['position'] as string | undefined) ?? ''}
              onChange={(v) => { update(['volunteer', i, 'position'], v); }} />
            <TextInput label="URL" type="url" placeholder="https://…"
              value={(entry['url'] as string | undefined) ?? ''}
              onChange={(v) => { update(['volunteer', i, 'url'], v); }} />
            <div className="form-row">
              <TextInput label="Start Date" placeholder="YYYY-MM"
                value={(entry['startDate'] as string | undefined) ?? ''}
                onChange={(v) => { update(['volunteer', i, 'startDate'], v); }} />
              <TextInput label="End Date" placeholder="YYYY-MM or blank"
                value={(entry['endDate'] as string | undefined) ?? ''}
                onChange={(v) => { update(['volunteer', i, 'endDate'], v); }} />
            </div>
            <TextArea label="Summary"
              value={(entry['summary'] as string | undefined) ?? ''}
              onChange={(v) => { update(['volunteer', i, 'summary'], v); }} />
            <HighlightsList
              highlights={(entry['highlights'] as string[] | undefined) ?? []}
              onUpdate={(h) => { update(['volunteer', i, 'highlights'], h); }}
            />
          </div>
        )}
      />
      <button type="button" className="form-add-entry" onClick={() => {
        update(['volunteer'], [...volunteer, { organization: '', position: '', startDate: '' }]);
      }}><Plus size={14} aria-hidden="true" /> Add volunteer</button>
    </Section>
  );
}
