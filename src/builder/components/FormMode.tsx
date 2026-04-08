import { h, Fragment } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import type { ResumeSchema } from '../../types/resume';

interface FormModeProps {
  resume: ResumeSchema | null;
  onChange: (resume: ResumeSchema) => void;
}

function TextInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div class="form-field">
      <label class="form-label">{label}</label>
      <input
        type="text"
        class="form-input"
        value={value || ''}
        onInput={(e) => onChange((e.target as HTMLInputElement).value)}
      />
    </div>
  );
}

function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div class="form-field">
      <label class="form-label">{label}</label>
      <textarea
        class="form-textarea"
        value={value || ''}
        rows={3}
        onInput={(e) => onChange((e.target as HTMLTextAreaElement).value)}
      />
    </div>
  );
}

function Section({ title, children, defaultOpen = false }: { title: string; children: any; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div class="form-section">
      <button class="form-section-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span class="form-section-chevron">{open ? '▾' : '▸'}</span>
      </button>
      {open && <div class="form-section-body">{children}</div>}
    </div>
  );
}

export function FormMode({ resume, onChange }: FormModeProps) {
  if (!resume) {
    return <div class="form-container"><p class="form-empty">No resume data to edit.</p></div>;
  }

  const update = useCallback((path: string[], value: any) => {
    const next = JSON.parse(JSON.stringify(resume));
    let obj: any = next;
    for (let i = 0; i < path.length - 1; i++) {
      if (obj[path[i]] === undefined) {
        obj[path[i]] = typeof path[i + 1] === 'number' ? [] : {};
      }
      obj = obj[path[i]];
    }
    obj[path[path.length - 1]] = value;
    onChange(next);
  }, [resume, onChange]);

  const basics = resume.basics || {};
  const location = basics.location || {};

  return (
    <div class="form-container">
      <Section title="Basics" defaultOpen={true}>
        <TextInput label="Name" value={basics.name || ''} onChange={(v) => update(['basics', 'name'], v)} />
        <TextInput label="Label / Title" value={basics.label || ''} onChange={(v) => update(['basics', 'label'], v)} />
        <TextInput label="Email" value={basics.email || ''} onChange={(v) => update(['basics', 'email'], v)} />
        <TextInput label="Phone" value={basics.phone || ''} onChange={(v) => update(['basics', 'phone'], v)} />
        <TextInput label="Website" value={basics.url || ''} onChange={(v) => update(['basics', 'url'], v)} />
        <TextArea label="Summary" value={basics.summary || ''} onChange={(v) => update(['basics', 'summary'], v)} />
        <TextInput label="City" value={location.city || ''} onChange={(v) => update(['basics', 'location', 'city'], v)} />
        <TextInput label="Country" value={location.countryCode || ''} onChange={(v) => update(['basics', 'location', 'countryCode'], v)} />
      </Section>

      <Section title={`Work Experience (${(resume.work || []).length})`}>
        {(resume.work || []).map((job: any, i: number) => (
          <div key={i} class="form-entry">
            <div class="form-entry-header">
              <span class="form-entry-title">{job.name || job.position || `Job ${i + 1}`}</span>
              <button
                class="form-entry-remove"
                onClick={() => {
                  const next = [...(resume.work || [])];
                  next.splice(i, 1);
                  update(['work'], next);
                }}
              >×</button>
            </div>
            <TextInput label="Company" value={job.name || ''} onChange={(v) => update(['work', i as any, 'name'], v)} />
            <TextInput label="Position" value={job.position || ''} onChange={(v) => update(['work', i as any, 'position'], v)} />
            <TextInput label="Start Date" value={job.startDate || ''} onChange={(v) => update(['work', i as any, 'startDate'], v)} />
            <TextInput label="End Date" value={job.endDate || ''} onChange={(v) => update(['work', i as any, 'endDate'], v)} />
            <TextArea label="Summary" value={job.summary || ''} onChange={(v) => update(['work', i as any, 'summary'], v)} />
            <div class="form-field">
              <label class="form-label">Highlights</label>
              {(job.highlights || []).map((h: string, j: number) => (
                <div class="form-list-item" key={j}>
                  <input
                    type="text"
                    class="form-input form-input-list"
                    value={h}
                    onInput={(e) => {
                      const next = [...(job.highlights || [])];
                      next[j] = (e.target as HTMLInputElement).value;
                      update(['work', i as any, 'highlights'], next);
                    }}
                  />
                  <button class="form-list-remove" onClick={() => {
                    const next = [...(job.highlights || [])];
                    next.splice(j, 1);
                    update(['work', i as any, 'highlights'], next);
                  }}>×</button>
                </div>
              ))}
              <button class="form-add-btn" onClick={() => {
                const next = [...(job.highlights || []), ''];
                update(['work', i as any, 'highlights'], next);
              }}>+ Add highlight</button>
            </div>
          </div>
        ))}
        <button class="form-add-entry" onClick={() => {
          const next = [...(resume.work || []), { name: '', position: '', startDate: '' }];
          update(['work'], next);
        }}>+ Add work experience</button>
      </Section>

      <Section title={`Education (${(resume.education || []).length})`}>
        {(resume.education || []).map((edu: any, i: number) => (
          <div key={i} class="form-entry">
            <div class="form-entry-header">
              <span class="form-entry-title">{edu.institution || `Education ${i + 1}`}</span>
              <button class="form-entry-remove" onClick={() => {
                const next = [...(resume.education || [])];
                next.splice(i, 1);
                update(['education'], next);
              }}>×</button>
            </div>
            <TextInput label="Institution" value={edu.institution || ''} onChange={(v) => update(['education', i as any, 'institution'], v)} />
            <TextInput label="Area / Major" value={edu.area || ''} onChange={(v) => update(['education', i as any, 'area'], v)} />
            <TextInput label="Degree" value={edu.studyType || ''} onChange={(v) => update(['education', i as any, 'studyType'], v)} />
            <TextInput label="Start Date" value={edu.startDate || ''} onChange={(v) => update(['education', i as any, 'startDate'], v)} />
            <TextInput label="End Date" value={edu.endDate || ''} onChange={(v) => update(['education', i as any, 'endDate'], v)} />
            <TextInput label="Score / GPA" value={edu.score || ''} onChange={(v) => update(['education', i as any, 'score'], v)} />
          </div>
        ))}
        <button class="form-add-entry" onClick={() => {
          const next = [...(resume.education || []), { institution: '', area: '', studyType: '', startDate: '' }];
          update(['education'], next);
        }}>+ Add education</button>
      </Section>

      <Section title={`Skills (${(resume.skills || []).length})`}>
        {(resume.skills || []).map((skill: any, i: number) => (
          <div key={i} class="form-entry">
            <div class="form-entry-header">
              <span class="form-entry-title">{skill.name || `Skill ${i + 1}`}</span>
              <button class="form-entry-remove" onClick={() => {
                const next = [...(resume.skills || [])];
                next.splice(i, 1);
                update(['skills'], next);
              }}>×</button>
            </div>
            <TextInput label="Name" value={skill.name || ''} onChange={(v) => update(['skills', i as any, 'name'], v)} />
            <TextInput label="Level" value={skill.level || ''} onChange={(v) => update(['skills', i as any, 'level'], v)} />
            <div class="form-field">
              <label class="form-label">Keywords</label>
              {(skill.keywords || []).map((kw: string, j: number) => (
                <div class="form-list-item" key={j}>
                  <input
                    type="text"
                    class="form-input form-input-list"
                    value={kw}
                    onInput={(e) => {
                      const next = [...(skill.keywords || [])];
                      next[j] = (e.target as HTMLInputElement).value;
                      update(['skills', i as any, 'keywords'], next);
                    }}
                  />
                  <button class="form-list-remove" onClick={() => {
                    const next = [...(skill.keywords || [])];
                    next.splice(j, 1);
                    update(['skills', i as any, 'keywords'], next);
                  }}>×</button>
                </div>
              ))}
              <button class="form-add-btn" onClick={() => {
                const next = [...(skill.keywords || []), ''];
                update(['skills', i as any, 'keywords'], next);
              }}>+ Add keyword</button>
            </div>
          </div>
        ))}
        <button class="form-add-entry" onClick={() => {
          const next = [...(resume.skills || []), { name: '', level: '', keywords: [] }];
          update(['skills'], next);
        }}>+ Add skill</button>
      </Section>

      <Section title={`Projects (${(resume.projects || []).length})`}>
        {(resume.projects || []).map((proj: any, i: number) => (
          <div key={i} class="form-entry">
            <div class="form-entry-header">
              <span class="form-entry-title">{proj.name || `Project ${i + 1}`}</span>
              <button class="form-entry-remove" onClick={() => {
                const next = [...(resume.projects || [])];
                next.splice(i, 1);
                update(['projects'], next);
              }}>×</button>
            </div>
            <TextInput label="Name" value={proj.name || ''} onChange={(v) => update(['projects', i as any, 'name'], v)} />
            <TextArea label="Description" value={proj.description || ''} onChange={(v) => update(['projects', i as any, 'description'], v)} />
            <TextInput label="URL" value={proj.url || ''} onChange={(v) => update(['projects', i as any, 'url'], v)} />
            <TextInput label="Start Date" value={proj.startDate || ''} onChange={(v) => update(['projects', i as any, 'startDate'], v)} />
            <TextInput label="End Date" value={proj.endDate || ''} onChange={(v) => update(['projects', i as any, 'endDate'], v)} />
            <div class="form-field">
              <label class="form-label">Highlights</label>
              {(proj.highlights || []).map((h: string, j: number) => (
                <div class="form-list-item" key={j}>
                  <input type="text" class="form-input form-input-list" value={h}
                    onInput={(e) => {
                      const next = [...(proj.highlights || [])];
                      next[j] = (e.target as HTMLInputElement).value;
                      update(['projects', i as any, 'highlights'], next);
                    }}
                  />
                  <button class="form-list-remove" onClick={() => {
                    const next = [...(proj.highlights || [])];
                    next.splice(j, 1);
                    update(['projects', i as any, 'highlights'], next);
                  }}>×</button>
                </div>
              ))}
              <button class="form-add-btn" onClick={() => {
                const next = [...(proj.highlights || []), ''];
                update(['projects', i as any, 'highlights'], next);
              }}>+ Add highlight</button>
            </div>
          </div>
        ))}
        <button class="form-add-entry" onClick={() => {
          const next = [...(resume.projects || []), { name: '', description: '' }];
          update(['projects'], next);
        }}>+ Add project</button>
      </Section>
    </div>
  );
}
