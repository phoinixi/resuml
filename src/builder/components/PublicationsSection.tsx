import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { Section } from './Section';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface PublicationsSectionProps {
  publications: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function PublicationsSection({ publications, update }: PublicationsSectionProps) {
  return (
    <Section title={`Publications (${publications.length})`}>
      {publications.map((pub, i) => (
        <div key={i} className="form-entry">
          <div className="form-entry-header">
            <span className="form-entry-title">{(pub['name'] as string) || `Publication ${i + 1}`}</span>
            <button className="form-entry-remove" onClick={() => update(['publications'], publications.filter((_, idx) => idx !== i))}>×</button>
          </div>
          <TextInput label="Name" value={(pub['name'] as string) ?? ''} onChange={(v) => update(['publications', i, 'name'], v)} />
          <TextInput label="Publisher" value={(pub['publisher'] as string) ?? ''} onChange={(v) => update(['publications', i, 'publisher'], v)} />
          <TextInput label="Release Date" value={(pub['releaseDate'] as string) ?? ''} onChange={(v) => update(['publications', i, 'releaseDate'], v)} />
          <TextInput label="URL" value={(pub['url'] as string) ?? ''} onChange={(v) => update(['publications', i, 'url'], v)} />
          <TextArea label="Summary" value={(pub['summary'] as string) ?? ''} onChange={(v) => update(['publications', i, 'summary'], v)} />
        </div>
      ))}
      <button className="form-add-entry" onClick={() => update(['publications'], [...publications, { name: '', publisher: '', releaseDate: '' }])}>
        + Add publication
      </button>
    </Section>
  );
}
