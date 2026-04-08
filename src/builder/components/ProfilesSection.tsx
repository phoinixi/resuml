import { TextInput } from './TextInput';

type UpdateFn = (path: ReadonlyArray<string | number>, value: unknown) => void;

interface ProfilesSectionProps {
  profiles: readonly Record<string, unknown>[];
  update: UpdateFn;
}

export function ProfilesSection({ profiles, update }: ProfilesSectionProps) {
  return (
    <div className="form-field">
      <label className="form-label">Profiles</label>
      {profiles.map((profile, i) => (
        <div key={i} className="form-entry">
          <div className="form-entry-header">
            <span className="form-entry-title">{(profile['network'] as string) || `Profile ${i + 1}`}</span>
            <button className="form-entry-remove" onClick={() => { update(['basics', 'profiles'], profiles.filter((_, idx) => idx !== i)); }}>×</button>
          </div>
          <TextInput label="Network" value={(profile['network'] as string | undefined) ?? ''} onChange={(v) => { update(['basics', 'profiles', i, 'network'], v); }} />
          <TextInput label="Username" value={(profile['username'] as string | undefined) ?? ''} onChange={(v) => { update(['basics', 'profiles', i, 'username'], v); }} />
          <TextInput label="URL" value={(profile['url'] as string | undefined) ?? ''} onChange={(v) => { update(['basics', 'profiles', i, 'url'], v); }} />
        </div>
      ))}
      <button className="form-add-btn" onClick={() => { update(['basics', 'profiles'], [...profiles, { network: '', username: '', url: '' }]); }}>
        + Add profile
      </button>
    </div>
  );
}
