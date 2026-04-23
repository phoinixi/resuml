import { Plus, X } from 'lucide-react';
import { TextInput } from './TextInput';
import { Section } from './Section';
import { SortableList } from './SortableList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface EducationSectionProps {
  education: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function EducationSection({ education, update }: EducationSectionProps) {
  return (
    <Section title="Education" count={education.length} hasContent={education.length > 0}>
      <SortableList
        items={education}
        keyOf={(_, i) => `edu-${i}`}
        onReorder={(next) => { update(['education'], next); }}
        ariaLabel="Reorder education"
        renderItem={(edu, i, handle) => (
          <div className="form-entry">
            <div className="form-entry-header">
              {handle}
              <span className="form-entry-title">{(edu['institution'] as string) || `Education ${i + 1}`}</span>
              <button type="button" className="form-entry-remove" aria-label="Remove"
                onClick={() => { update(['education'], education.filter((_, idx) => idx !== i)); }}
              ><X size={14} aria-hidden="true" /></button>
            </div>
            <TextInput label="Institution" placeholder="University name"
              value={(edu['institution'] as string | undefined) ?? ''}
              onChange={(v) => { update(['education', i, 'institution'], v); }} />
            <div className="form-row">
              <TextInput label="Area / Major" value={(edu['area'] as string | undefined) ?? ''}
                onChange={(v) => { update(['education', i, 'area'], v); }} />
              <TextInput label="Degree" placeholder="BSc, MSc, PhD…"
                value={(edu['studyType'] as string | undefined) ?? ''}
                onChange={(v) => { update(['education', i, 'studyType'], v); }} />
            </div>
            <div className="form-row">
              <TextInput label="Start Date" placeholder="YYYY"
                value={(edu['startDate'] as string | undefined) ?? ''}
                onChange={(v) => { update(['education', i, 'startDate'], v); }} />
              <TextInput label="End Date" placeholder="YYYY or blank"
                value={(edu['endDate'] as string | undefined) ?? ''}
                onChange={(v) => { update(['education', i, 'endDate'], v); }} />
            </div>
            <TextInput label="Score / GPA" value={(edu['score'] as string | undefined) ?? ''}
              onChange={(v) => { update(['education', i, 'score'], v); }} />
          </div>
        )}
      />
      <button type="button" className="form-add-entry" onClick={() => {
        update(['education'], [...education, { institution: '', area: '', studyType: '', startDate: '' }]);
      }}><Plus size={14} aria-hidden="true" /> Add education</button>
    </Section>
  );
}
