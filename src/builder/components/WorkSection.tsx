import { Plus, X } from 'lucide-react';
import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { Section } from './Section';
import { HighlightsList } from './HighlightsList';
import { SortableList } from './SortableList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface WorkSectionProps {
  work: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function WorkSection({ work, update }: WorkSectionProps) {
  const handleAdd = () => {
    update(['work'], [...work, { name: '', position: '', startDate: '' }]);
  };
  return (
    <Section title="Work Experience" count={work.length} hasContent={work.length > 0}>
      <SortableList
        items={work}
        keyOf={(_, i) => `work-${i}`}
        onReorder={(next) => { update(['work'], next); }}
        ariaLabel="Reorder work experience"
        renderItem={(job, i, handle) => (
          <div className="form-entry">
            <div className="form-entry-header">
              {handle}
              <span className="form-entry-title">
                {(job['name'] as string) || (job['position'] as string) || `Job ${i + 1}`}
              </span>
              <button
                type="button"
                className="form-entry-remove"
                aria-label="Remove entry"
                onClick={() => { update(['work'], work.filter((_, idx) => idx !== i)); }}
              ><X size={14} aria-hidden="true" /></button>
            </div>
            <TextInput label="Company" placeholder="e.g. Acme Corp"
              value={(job['name'] as string | undefined) ?? ''}
              onChange={(v) => { update(['work', i, 'name'], v); }} />
            <TextInput label="Position" placeholder="e.g. Senior Engineer"
              value={(job['position'] as string | undefined) ?? ''}
              onChange={(v) => { update(['work', i, 'position'], v); }} />
            <div className="form-row">
              <TextInput label="Start Date" placeholder="YYYY-MM"
                value={(job['startDate'] as string | undefined) ?? ''}
                onChange={(v) => { update(['work', i, 'startDate'], v); }} />
              <TextInput label="End Date" placeholder="YYYY-MM or blank"
                value={(job['endDate'] as string | undefined) ?? ''}
                onChange={(v) => { update(['work', i, 'endDate'], v); }} />
            </div>
            <TextArea label="Summary" placeholder="What the team/role was about"
              value={(job['summary'] as string | undefined) ?? ''}
              onChange={(v) => { update(['work', i, 'summary'], v); }} />
            <HighlightsList
              highlights={(job['highlights'] as string[] | undefined) ?? []}
              onUpdate={(h) => { update(['work', i, 'highlights'], h); }}
            />
          </div>
        )}
      />
      <button type="button" className="form-add-entry" onClick={handleAdd}>
        <Plus size={14} aria-hidden="true" /> Add work experience
      </button>
    </Section>
  );
}
