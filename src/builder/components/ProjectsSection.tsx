import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { Section } from './Section';
import { HighlightsList } from './HighlightsList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface ProjectsSectionProps {
  projects: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function ProjectsSection({ projects, update }: ProjectsSectionProps) {
  return (
    <Section title={`Projects (${projects.length})`}>
      {projects.map((proj, i) => (
        <div key={i} className="form-entry">
          <div className="form-entry-header">
            <span className="form-entry-title">{(proj['name'] as string) || `Project ${i + 1}`}</span>
            <button className="form-entry-remove" onClick={() => { update(['projects'], projects.filter((_, idx) => idx !== i)); }}>×</button>
          </div>
          <TextInput label="Name" value={(proj['name'] as string | undefined) ?? ''} onChange={(v) => { update(['projects', i, 'name'], v); }} />
          <TextArea label="Description" value={(proj['description'] as string | undefined) ?? ''} onChange={(v) => { update(['projects', i, 'description'], v); }} />
          <TextInput label="URL" value={(proj['url'] as string | undefined) ?? ''} onChange={(v) => { update(['projects', i, 'url'], v); }} />
          <TextInput label="Start Date" value={(proj['startDate'] as string | undefined) ?? ''} onChange={(v) => { update(['projects', i, 'startDate'], v); }} />
          <TextInput label="End Date" value={(proj['endDate'] as string | undefined) ?? ''} onChange={(v) => { update(['projects', i, 'endDate'], v); }} />
          <HighlightsList highlights={(proj['highlights'] as string[] | undefined) ?? []} onUpdate={(h) => { update(['projects', i, 'highlights'], h); }} />
        </div>
      ))}
      <button className="form-add-entry" onClick={() => { update(['projects'], [...projects, { name: '', description: '' }]); }}>
        + Add project
      </button>
    </Section>
  );
}
