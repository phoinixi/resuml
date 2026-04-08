import { TextInput } from './TextInput';
import { Section } from './Section';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface LanguagesSectionProps {
  languages: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function LanguagesSection({ languages, update }: LanguagesSectionProps) {
  return (
    <Section title={`Languages (${languages.length})`}>
      {languages.map((lang, i) => (
        <div key={i} className="form-entry">
          <div className="form-entry-header">
            <span className="form-entry-title">{(lang['language'] as string) || `Language ${i + 1}`}</span>
            <button className="form-entry-remove" onClick={() => { update(['languages'], languages.filter((_, idx) => idx !== i)); }}>×</button>
          </div>
          <TextInput label="Language" value={(lang['language'] as string | undefined) ?? ''} onChange={(v) => { update(['languages', i, 'language'], v); }} />
          <TextInput label="Fluency" value={(lang['fluency'] as string | undefined) ?? ''} onChange={(v) => { update(['languages', i, 'fluency'], v); }} />
        </div>
      ))}
      <button className="form-add-entry" onClick={() => { update(['languages'], [...languages, { language: '', fluency: '' }]); }}>
        + Add language
      </button>
    </Section>
  );
}
