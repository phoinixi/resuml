import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { Section } from './Section';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface AwardsSectionProps {
  awards: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function AwardsSection({ awards, update }: AwardsSectionProps) {
  return (
    <Section title={`Awards (${awards.length})`}>
      {awards.map((award, i) => (
        <div key={i} className="form-entry">
          <div className="form-entry-header">
            <span className="form-entry-title">{(award['title'] as string) || `Award ${i + 1}`}</span>
            <button className="form-entry-remove" onClick={() => { update(['awards'], awards.filter((_, idx) => idx !== i)); }}>×</button>
          </div>
          <TextInput label="Title" value={(award['title'] as string | undefined) ?? ''} onChange={(v) => { update(['awards', i, 'title'], v); }} />
          <TextInput label="Date" value={(award['date'] as string | undefined) ?? ''} onChange={(v) => { update(['awards', i, 'date'], v); }} />
          <TextInput label="Awarder" value={(award['awarder'] as string | undefined) ?? ''} onChange={(v) => { update(['awards', i, 'awarder'], v); }} />
          <TextArea label="Summary" value={(award['summary'] as string | undefined) ?? ''} onChange={(v) => { update(['awards', i, 'summary'], v); }} />
        </div>
      ))}
      <button className="form-add-entry" onClick={() => { update(['awards'], [...awards, { title: '', date: '', awarder: '' }]); }}>
        + Add award
      </button>
    </Section>
  );
}
