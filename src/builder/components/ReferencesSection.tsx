import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { Section } from './Section';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface ReferencesSectionProps {
  references: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function ReferencesSection({ references, update }: ReferencesSectionProps) {
  return (
    <Section title={`References (${references.length})`}>
      {references.map((ref, i) => (
        <div key={i} className="form-entry">
          <div className="form-entry-header">
            <span className="form-entry-title">{(ref['name'] as string) || `Reference ${i + 1}`}</span>
            <button className="form-entry-remove" onClick={() => update(['references'], references.filter((_, idx) => idx !== i))}>×</button>
          </div>
          <TextInput label="Name" value={(ref['name'] as string) ?? ''} onChange={(v) => update(['references', i, 'name'], v)} />
          <TextArea label="Reference" value={(ref['reference'] as string) ?? ''} onChange={(v) => update(['references', i, 'reference'], v)} />
        </div>
      ))}
      <button className="form-add-entry" onClick={() => update(['references'], [...references, { name: '', reference: '' }])}>
        + Add reference
      </button>
    </Section>
  );
}
