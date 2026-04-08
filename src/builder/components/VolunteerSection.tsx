import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { Section } from './Section';
import { HighlightsList } from './HighlightsList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface VolunteerSectionProps {
  volunteer: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function VolunteerSection({ volunteer, update }: VolunteerSectionProps) {
  return (
    <Section title={`Volunteer (${volunteer.length})`}>
      {volunteer.map((entry, i) => (
        <div key={i} className="form-entry">
          <div className="form-entry-header">
            <span className="form-entry-title">{(entry['organization'] as string) || `Volunteer ${i + 1}`}</span>
            <button className="form-entry-remove" onClick={() => update(['volunteer'], volunteer.filter((_, idx) => idx !== i))}>×</button>
          </div>
          <TextInput label="Organization" value={(entry['organization'] as string) ?? ''} onChange={(v) => update(['volunteer', i, 'organization'], v)} />
          <TextInput label="Position" value={(entry['position'] as string) ?? ''} onChange={(v) => update(['volunteer', i, 'position'], v)} />
          <TextInput label="URL" value={(entry['url'] as string) ?? ''} onChange={(v) => update(['volunteer', i, 'url'], v)} />
          <TextInput label="Start Date" value={(entry['startDate'] as string) ?? ''} onChange={(v) => update(['volunteer', i, 'startDate'], v)} />
          <TextInput label="End Date" value={(entry['endDate'] as string) ?? ''} onChange={(v) => update(['volunteer', i, 'endDate'], v)} />
          <TextArea label="Summary" value={(entry['summary'] as string) ?? ''} onChange={(v) => update(['volunteer', i, 'summary'], v)} />
          <HighlightsList highlights={(entry['highlights'] as string[]) ?? []} onUpdate={(h) => update(['volunteer', i, 'highlights'], h)} />
        </div>
      ))}
      <button className="form-add-entry" onClick={() => update(['volunteer'], [...volunteer, { organization: '', position: '', startDate: '' }])}>
        + Add volunteer
      </button>
    </Section>
  );
}
