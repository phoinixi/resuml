import { TextInput } from './TextInput';
import { Section } from './Section';
import { KeywordsList } from './KeywordsList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface SkillsSectionProps {
  skills: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function SkillsSection({ skills, update }: SkillsSectionProps) {
  return (
    <Section title={`Skills (${skills.length})`}>
      {skills.map((skill, i) => (
        <div key={i} className="form-entry">
          <div className="form-entry-header">
            <span className="form-entry-title">{(skill['name'] as string) || `Skill ${i + 1}`}</span>
            <button className="form-entry-remove" onClick={() => update(['skills'], skills.filter((_, idx) => idx !== i))}>×</button>
          </div>
          <TextInput label="Name" value={(skill['name'] as string) ?? ''} onChange={(v) => update(['skills', i, 'name'], v)} />
          <TextInput label="Level" value={(skill['level'] as string) ?? ''} onChange={(v) => update(['skills', i, 'level'], v)} />
          <KeywordsList keywords={(skill['keywords'] as string[]) ?? []} onUpdate={(kw) => update(['skills', i, 'keywords'], kw)} />
        </div>
      ))}
      <button className="form-add-entry" onClick={() => update(['skills'], [...skills, { name: '', level: '', keywords: [] }])}>
        + Add skill
      </button>
    </Section>
  );
}
