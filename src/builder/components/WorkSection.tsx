import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { Section } from './Section';
import { HighlightsList } from './HighlightsList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface WorkSectionProps {
  work: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function WorkSection({ work, update }: WorkSectionProps) {
  return (
    <Section title={`Work Experience (${work.length})`}>
      {work.map((job, i) => (
        <div key={i} className="form-entry">
          <div className="form-entry-header">
            <span className="form-entry-title">{(job['name'] as string) || (job['position'] as string) || `Job ${i + 1}`}</span>
            <button className="form-entry-remove" onClick={() => update(['work'], work.filter((_, idx) => idx !== i))}>×</button>
          </div>
          <TextInput label="Company" value={(job['name'] as string) ?? ''} onChange={(v) => update(['work', i, 'name'], v)} />
          <TextInput label="Position" value={(job['position'] as string) ?? ''} onChange={(v) => update(['work', i, 'position'], v)} />
          <TextInput label="Start Date" value={(job['startDate'] as string) ?? ''} onChange={(v) => update(['work', i, 'startDate'], v)} />
          <TextInput label="End Date" value={(job['endDate'] as string) ?? ''} onChange={(v) => update(['work', i, 'endDate'], v)} />
          <TextArea label="Summary" value={(job['summary'] as string) ?? ''} onChange={(v) => update(['work', i, 'summary'], v)} />
          <HighlightsList highlights={(job['highlights'] as string[]) ?? []} onUpdate={(h) => update(['work', i, 'highlights'], h)} />
        </div>
      ))}
      <button className="form-add-entry" onClick={() => update(['work'], [...work, { name: '', position: '', startDate: '' }])}>
        + Add work experience
      </button>
    </Section>
  );
}
