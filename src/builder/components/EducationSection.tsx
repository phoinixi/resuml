import { TextInput } from './TextInput';
import { Section } from './Section';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface EducationSectionProps {
  education: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function EducationSection({ education, update }: EducationSectionProps) {
  return (
    <Section title={`Education (${education.length})`}>
      {education.map((edu, i) => (
        <div key={i} className="form-entry">
          <div className="form-entry-header">
            <span className="form-entry-title">{(edu['institution'] as string) || `Education ${i + 1}`}</span>
            <button className="form-entry-remove" onClick={() => { update(['education'], education.filter((_, idx) => idx !== i)); }}>×</button>
          </div>
          <TextInput label="Institution" value={(edu['institution'] as string | undefined) ?? ''} onChange={(v) => { update(['education', i, 'institution'], v); }} />
          <TextInput label="Area / Major" value={(edu['area'] as string | undefined) ?? ''} onChange={(v) => { update(['education', i, 'area'], v); }} />
          <TextInput label="Degree" value={(edu['studyType'] as string | undefined) ?? ''} onChange={(v) => { update(['education', i, 'studyType'], v); }} />
          <TextInput label="Start Date" value={(edu['startDate'] as string | undefined) ?? ''} onChange={(v) => { update(['education', i, 'startDate'], v); }} />
          <TextInput label="End Date" value={(edu['endDate'] as string | undefined) ?? ''} onChange={(v) => { update(['education', i, 'endDate'], v); }} />
          <TextInput label="Score / GPA" value={(edu['score'] as string | undefined) ?? ''} onChange={(v) => { update(['education', i, 'score'], v); }} />
        </div>
      ))}
      <button className="form-add-entry" onClick={() => { update(['education'], [...education, { institution: '', area: '', studyType: '', startDate: '' }]); }}>
        + Add education
      </button>
    </Section>
  );
}
