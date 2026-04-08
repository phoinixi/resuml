interface TextInputProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
}

export function TextInput({ label, value, onChange }: TextInputProps) {
  return (
    <div className="form-field">
      <label className="form-label">{label}</label>
      <input
        type="text"
        className="form-input"
        value={value || ''}
        onInput={(e) => { onChange((e.target as HTMLInputElement).value); }}
      />
    </div>
  );
}
