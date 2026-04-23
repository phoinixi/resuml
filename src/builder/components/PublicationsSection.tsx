import { Plus, X } from 'lucide-react';
import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { Section } from './Section';
import { SortableList } from './SortableList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface PublicationsSectionProps {
  publications: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function PublicationsSection({ publications, update }: PublicationsSectionProps) {
  return (
    <Section title="Publications" count={publications.length} hasContent={publications.length > 0}>
      <SortableList
        items={publications}
        keyOf={(_, i) => `pub-${i}`}
        onReorder={(next) => { update(['publications'], next); }}
        ariaLabel="Reorder publications"
        renderItem={(pub, i, handle) => (
          <div className="form-entry">
            <div className="form-entry-header">
              {handle}
              <span className="form-entry-title">{(pub['name'] as string) || `Publication ${i + 1}`}</span>
              <button type="button" className="form-entry-remove" aria-label="Remove"
                onClick={() => { update(['publications'], publications.filter((_, idx) => idx !== i)); }}
              ><X size={14} aria-hidden="true" /></button>
            </div>
            <TextInput label="Name" value={(pub['name'] as string | undefined) ?? ''}
              onChange={(v) => { update(['publications', i, 'name'], v); }} />
            <div className="form-row">
              <TextInput label="Publisher"
                value={(pub['publisher'] as string | undefined) ?? ''}
                onChange={(v) => { update(['publications', i, 'publisher'], v); }} />
              <TextInput label="Release Date" placeholder="YYYY-MM"
                value={(pub['releaseDate'] as string | undefined) ?? ''}
                onChange={(v) => { update(['publications', i, 'releaseDate'], v); }} />
            </div>
            <TextInput label="URL" type="url" placeholder="https://…"
              value={(pub['url'] as string | undefined) ?? ''}
              onChange={(v) => { update(['publications', i, 'url'], v); }} />
            <TextArea label="Summary"
              value={(pub['summary'] as string | undefined) ?? ''}
              onChange={(v) => { update(['publications', i, 'summary'], v); }} />
          </div>
        )}
      />
      <button type="button" className="form-add-entry" onClick={() => {
        update(['publications'], [...publications, { name: '', publisher: '', releaseDate: '' }]);
      }}><Plus size={14} aria-hidden="true" /> Add publication</button>
    </Section>
  );
}
