import { TextInput } from './TextInput';
import { Section } from './Section';
import { KeywordsList } from './KeywordsList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface InterestsSectionProps {
  interests: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function InterestsSection({ interests, update }: InterestsSectionProps) {
  return (
    <Section title={`Interests (${interests.length})`}>
      {interests.map((interest, i) => (
        <div key={i} className="form-entry">
          <div className="form-entry-header">
            <span className="form-entry-title">{(interest['name'] as string) || `Interest ${i + 1}`}</span>
            <button className="form-entry-remove" onClick={() => update(['interests'], interests.filter((_, idx) => idx !== i))}>×</button>
          </div>
          <TextInput label="Name" value={(interest['name'] as string) ?? ''} onChange={(v) => update(['interests', i, 'name'], v)} />
          <KeywordsList keywords={(interest['keywords'] as string[]) ?? []} onUpdate={(kw) => update(['interests', i, 'keywords'], kw)} />
        </div>
      ))}
      <button className="form-add-entry" onClick={() => update(['interests'], [...interests, { name: '', keywords: [] }])}>
        + Add interest
      </button>
    </Section>
  );
}
