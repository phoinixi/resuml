interface TextAreaProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
}

export function TextArea({ label, value, onChange }: TextAreaProps) {
  return (
    <div className="form-field">
      <label className="form-label">{label}</label>
      <textarea
        className="form-textarea"
        value={value || ''}
        rows={3}
        onInput={(e) => { onChange((e.target as HTMLTextAreaElement).value); }}
      />
    </div>
  );
}
