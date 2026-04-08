import { useCallback } from 'react';
import type { ResumeSchema } from '../../types/resume';
import { updateAtPath } from '../utils/resumeUpdater';
import { WorkSection } from './WorkSection';
import { EducationSection } from './EducationSection';
import { SkillsSection } from './SkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { Section } from './Section';

interface FormModeProps {
  resume: ResumeSchema | null;
  onChange: (resume: ResumeSchema) => void;
}

export function FormMode({ resume, onChange }: FormModeProps) {
  const update = useCallback(
    (path: ReadonlyArray<string | number>, value: unknown) => {
      if (!resume) return;
      onChange(updateAtPath(resume, path, value));
    },
    [resume, onChange],
  );

  if (!resume) {
    return <div className="form-container"><p className="form-empty">No resume data to edit.</p></div>;
  }

  const basics = resume.basics ?? {};
  const location = basics.location ?? {};

  return (
    <div className="form-container">
      <Section title="Basics" defaultOpen>
        <TextInput label="Name" value={basics.name ?? ''} onChange={(v) => update(['basics', 'name'], v)} />
        <TextInput label="Label / Title" value={basics.label ?? ''} onChange={(v) => update(['basics', 'label'], v)} />
        <TextInput label="Email" value={basics.email ?? ''} onChange={(v) => update(['basics', 'email'], v)} />
        <TextInput label="Phone" value={basics.phone ?? ''} onChange={(v) => update(['basics', 'phone'], v)} />
        <TextInput label="Website" value={basics.url ?? ''} onChange={(v) => update(['basics', 'url'], v)} />
        <TextArea label="Summary" value={basics.summary ?? ''} onChange={(v) => update(['basics', 'summary'], v)} />
        <TextInput label="City" value={location.city ?? ''} onChange={(v) => update(['basics', 'location', 'city'], v)} />
        <TextInput label="Country" value={location.countryCode ?? ''} onChange={(v) => update(['basics', 'location', 'countryCode'], v)} />
      </Section>

      <WorkSection work={resume.work ?? []} update={update} />
      <EducationSection education={resume.education ?? []} update={update} />
      <SkillsSection skills={resume.skills ?? []} update={update} />
      <ProjectsSection projects={resume.projects ?? []} update={update} />
    </div>
  );
}
