import { Plus, X } from 'lucide-react';
import { TextInput } from './TextInput';
import { Section } from './Section';
import { KeywordsList } from './KeywordsList';
import { SortableList } from './SortableList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface SkillsSectionProps {
  skills: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function SkillsSection({ skills, update }: SkillsSectionProps) {
  return (
    <Section title="Skills" count={skills.length} hasContent={skills.length > 0}>
      <SortableList
        items={skills}
        keyOf={(_, i) => `skill-${i}`}
        onReorder={(next) => { update(['skills'], next); }}
        ariaLabel="Reorder skill groups"
        renderItem={(skill, i, handle) => (
          <div className="form-entry">
            <div className="form-entry-header">
              {handle}
              <span className="form-entry-title">{(skill['name'] as string) || `Skill ${i + 1}`}</span>
              <button type="button" className="form-entry-remove" aria-label="Remove"
                onClick={() => { update(['skills'], skills.filter((_, idx) => idx !== i)); }}
              ><X size={14} aria-hidden="true" /></button>
            </div>
            <div className="form-row">
              <TextInput label="Name" placeholder="e.g. Frontend"
                value={(skill['name'] as string | undefined) ?? ''}
                onChange={(v) => { update(['skills', i, 'name'], v); }} />
              <TextInput label="Level" placeholder="Expert, Advanced, …"
                value={(skill['level'] as string | undefined) ?? ''}
                onChange={(v) => { update(['skills', i, 'level'], v); }} />
            </div>
            <KeywordsList
              keywords={(skill['keywords'] as string[] | undefined) ?? []}
              onUpdate={(kw) => { update(['skills', i, 'keywords'], kw); }}
            />
          </div>
        )}
      />
      <button type="button" className="form-add-entry" onClick={() => {
        update(['skills'], [...skills, { name: '', level: '', keywords: [] }]);
      }}><Plus size={14} aria-hidden="true" /> Add skill group</button>
    </Section>
  );
}
