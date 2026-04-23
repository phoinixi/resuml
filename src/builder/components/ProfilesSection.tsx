import { Plus, X } from 'lucide-react';
import { TextInput } from './TextInput';
import { SortableList } from './SortableList';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface ProfilesSectionProps {
  profiles: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function ProfilesSection({ profiles, update }: ProfilesSectionProps) {
  return (
    <div className="form-field">
      <label className="form-label">Profiles</label>
      <SortableList
        items={profiles}
        keyOf={(_, i) => `profile-${i}`}
        onReorder={(next) => { update(['basics', 'profiles'], next); }}
        ariaLabel="Reorder profiles"
        renderItem={(profile, i, handle) => (
          <div className="form-entry">
            <div className="form-entry-header">
              {handle}
              <span className="form-entry-title">{(profile['network'] as string) || `Profile ${i + 1}`}</span>
              <button type="button" className="form-entry-remove" aria-label="Remove"
                onClick={() => { update(['basics', 'profiles'], profiles.filter((_, idx) => idx !== i)); }}
              ><X size={14} aria-hidden="true" /></button>
            </div>
            <TextInput label="Network" placeholder="LinkedIn, GitHub, …"
              value={(profile['network'] as string | undefined) ?? ''}
              onChange={(v) => { update(['basics', 'profiles', i, 'network'], v); }} />
            <TextInput label="Username" value={(profile['username'] as string | undefined) ?? ''}
              onChange={(v) => { update(['basics', 'profiles', i, 'username'], v); }} />
            <TextInput label="URL" type="url" placeholder="https://…"
              value={(profile['url'] as string | undefined) ?? ''}
              onChange={(v) => { update(['basics', 'profiles', i, 'url'], v); }} />
          </div>
        )}
      />
      <button type="button" className="form-add-btn" onClick={() => {
        update(['basics', 'profiles'], [...profiles, { network: '', username: '', url: '' }]);
      }}><Plus size={12} aria-hidden="true" /> Add profile</button>
    </div>
  );
}
