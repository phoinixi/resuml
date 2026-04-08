import { TextInput } from './TextInput';
import { Section } from './Section';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface CertificatesSectionProps {
  certificates: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function CertificatesSection({ certificates, update }: CertificatesSectionProps) {
  return (
    <Section title={`Certificates (${certificates.length})`}>
      {certificates.map((cert, i) => (
        <div key={i} className="form-entry">
          <div className="form-entry-header">
            <span className="form-entry-title">{(cert['name'] as string) || `Certificate ${i + 1}`}</span>
            <button className="form-entry-remove" onClick={() => update(['certificates'], certificates.filter((_, idx) => idx !== i))}>×</button>
          </div>
          <TextInput label="Name" value={(cert['name'] as string) ?? ''} onChange={(v) => update(['certificates', i, 'name'], v)} />
          <TextInput label="Date" value={(cert['date'] as string) ?? ''} onChange={(v) => update(['certificates', i, 'date'], v)} />
          <TextInput label="Issuer" value={(cert['issuer'] as string) ?? ''} onChange={(v) => update(['certificates', i, 'issuer'], v)} />
          <TextInput label="URL" value={(cert['url'] as string) ?? ''} onChange={(v) => update(['certificates', i, 'url'], v)} />
        </div>
      ))}
      <button className="form-add-entry" onClick={() => update(['certificates'], [...certificates, { name: '', date: '', issuer: '' }])}>
        + Add certificate
      </button>
    </Section>
  );
}
