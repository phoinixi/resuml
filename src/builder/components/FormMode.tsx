import { useCallback } from 'react';
import type { ResumeSchema } from '../../types/resume';
import { updateAtPath } from '../utils/resumeUpdater';
import { ProfilesSection } from './ProfilesSection';
import { WorkSection } from './WorkSection';
import { VolunteerSection } from './VolunteerSection';
import { EducationSection } from './EducationSection';
import { AwardsSection } from './AwardsSection';
import { CertificatesSection } from './CertificatesSection';
import { PublicationsSection } from './PublicationsSection';
import { SkillsSection } from './SkillsSection';
import { LanguagesSection } from './LanguagesSection';
import { InterestsSection } from './InterestsSection';
import { ReferencesSection } from './ReferencesSection';
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
        <TextInput label="Name" placeholder="Full name" value={basics.name ?? ''}
          onChange={(v) => { update(['basics', 'name'], v); }} />
        <TextInput label="Label / Title" placeholder="e.g. Senior Software Engineer"
          value={basics.label ?? ''}
          onChange={(v) => { update(['basics', 'label'], v); }} />
        <div className="form-row">
          <TextInput label="Email" type="email" placeholder="you@example.com"
            value={basics.email ?? ''}
            onChange={(v) => { update(['basics', 'email'], v); }} />
          <TextInput label="Phone" type="tel" placeholder="+1 …"
            value={basics.phone ?? ''}
            onChange={(v) => { update(['basics', 'phone'], v); }} />
        </div>
        <TextInput label="Website" type="url" placeholder="https://…"
          value={basics.url ?? ''}
          onChange={(v) => { update(['basics', 'url'], v); }} />
        <TextArea label="Summary" rows={5}
          placeholder="2–4 sentences that position you for the role you want."
          hint="Lead with your title and years of experience. Mirror terminology from the target job."
          value={basics.summary ?? ''}
          onChange={(v) => { update(['basics', 'summary'], v); }} />
        <div className="form-row">
          <TextInput label="City" value={location.city ?? ''}
            onChange={(v) => { update(['basics', 'location', 'city'], v); }} />
          <TextInput label="Country" placeholder="ISO code, e.g. US"
            value={location.countryCode ?? ''}
            onChange={(v) => { update(['basics', 'location', 'countryCode'], v); }} />
        </div>
        <ProfilesSection profiles={(basics.profiles ?? []) as Record<string, unknown>[]} update={update} />
      </Section>

      <WorkSection work={resume.work ?? []} update={update} />
      <VolunteerSection volunteer={(resume.volunteer ?? []) as Record<string, unknown>[]} update={update} />
      <EducationSection education={resume.education ?? []} update={update} />
      <AwardsSection awards={(resume.awards ?? []) as Record<string, unknown>[]} update={update} />
      <CertificatesSection certificates={(resume.certificates ?? []) as Record<string, unknown>[]} update={update} />
      <PublicationsSection publications={(resume.publications ?? []) as Record<string, unknown>[]} update={update} />
      <SkillsSection skills={resume.skills ?? []} update={update} />
      <LanguagesSection languages={(resume.languages ?? []) as Record<string, unknown>[]} update={update} />
      <InterestsSection interests={(resume.interests ?? []) as Record<string, unknown>[]} update={update} />
      <ReferencesSection references={(resume.references ?? []) as Record<string, unknown>[]} update={update} />
      <ProjectsSection projects={resume.projects ?? []} update={update} />
    </div>
  );
}
