import { Plus, X } from 'lucide-react';
import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { Section } from './Section';
import { HighlightsList } from './HighlightsList';
import { SortableList } from './SortableList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface ProjectsSectionProps {
  projects: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function ProjectsSection({ projects, update }: ProjectsSectionProps) {
  return (
    <Section title="Projects" count={projects.length} hasContent={projects.length > 0}>
      <SortableList
        items={projects}
        keyOf={(_, i) => `proj-${i}`}
        onReorder={(next) => { update(['projects'], next); }}
        ariaLabel="Reorder projects"
        renderItem={(proj, i, handle) => (
          <div className="form-entry">
            <div className="form-entry-header">
              {handle}
              <span className="form-entry-title">{(proj['name'] as string) || `Project ${i + 1}`}</span>
              <button type="button" className="form-entry-remove" aria-label="Remove"
                onClick={() => { update(['projects'], projects.filter((_, idx) => idx !== i)); }}
              ><X size={14} aria-hidden="true" /></button>
            </div>
            <TextInput label="Name" value={(proj['name'] as string | undefined) ?? ''}
              onChange={(v) => { update(['projects', i, 'name'], v); }} />
            <TextArea label="Description"
              value={(proj['description'] as string | undefined) ?? ''}
              onChange={(v) => { update(['projects', i, 'description'], v); }} />
            <TextInput label="URL" type="url" placeholder="https://…"
              value={(proj['url'] as string | undefined) ?? ''}
              onChange={(v) => { update(['projects', i, 'url'], v); }} />
            <div className="form-row">
              <TextInput label="Start Date" placeholder="YYYY-MM"
                value={(proj['startDate'] as string | undefined) ?? ''}
                onChange={(v) => { update(['projects', i, 'startDate'], v); }} />
              <TextInput label="End Date" placeholder="YYYY-MM or blank"
                value={(proj['endDate'] as string | undefined) ?? ''}
                onChange={(v) => { update(['projects', i, 'endDate'], v); }} />
            </div>
            <HighlightsList
              highlights={(proj['highlights'] as string[] | undefined) ?? []}
              onUpdate={(h) => { update(['projects', i, 'highlights'], h); }}
            />
          </div>
        )}
      />
      <button type="button" className="form-add-entry" onClick={() => {
        update(['projects'], [...projects, { name: '', description: '' }]);
      }}><Plus size={14} aria-hidden="true" /> Add project</button>
    </Section>
  );
}
