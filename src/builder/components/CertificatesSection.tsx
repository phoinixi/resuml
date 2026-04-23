import { Plus, X } from 'lucide-react';
import { TextInput } from './TextInput';
import { Section } from './Section';
import { SortableList } from './SortableList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface CertificatesSectionProps {
  certificates: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function CertificatesSection({ certificates, update }: CertificatesSectionProps) {
  return (
    <Section title="Certificates" count={certificates.length} hasContent={certificates.length > 0}>
      <SortableList
        items={certificates}
        keyOf={(_, i) => `cert-${i}`}
        onReorder={(next) => { update(['certificates'], next); }}
        ariaLabel="Reorder certificates"
        renderItem={(cert, i, handle) => (
          <div className="form-entry">
            <div className="form-entry-header">
              {handle}
              <span className="form-entry-title">{(cert['name'] as string) || `Certificate ${i + 1}`}</span>
              <button type="button" className="form-entry-remove" aria-label="Remove"
                onClick={() => { update(['certificates'], certificates.filter((_, idx) => idx !== i)); }}
              ><X size={14} aria-hidden="true" /></button>
            </div>
            <TextInput label="Name" value={(cert['name'] as string | undefined) ?? ''}
              onChange={(v) => { update(['certificates', i, 'name'], v); }} />
            <div className="form-row">
              <TextInput label="Date" placeholder="YYYY-MM"
                value={(cert['date'] as string | undefined) ?? ''}
                onChange={(v) => { update(['certificates', i, 'date'], v); }} />
              <TextInput label="Issuer"
                value={(cert['issuer'] as string | undefined) ?? ''}
                onChange={(v) => { update(['certificates', i, 'issuer'], v); }} />
            </div>
            <TextInput label="URL" type="url" placeholder="https://…"
              value={(cert['url'] as string | undefined) ?? ''}
              onChange={(v) => { update(['certificates', i, 'url'], v); }} />
          </div>
        )}
      />
      <button type="button" className="form-add-entry" onClick={() => {
        update(['certificates'], [...certificates, { name: '', date: '', issuer: '' }]);
      }}><Plus size={14} aria-hidden="true" /> Add certificate</button>
    </Section>
  );
}
