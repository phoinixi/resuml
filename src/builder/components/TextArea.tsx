import { useId } from 'react';

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  hint?: string;
}

export function TextArea({ label, value, onChange, placeholder, rows = 3, hint }: TextAreaProps) {
  const id = useId();
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">{label}</label>
      <textarea
        id={id}
        className="form-textarea"
        value={value || ''}
        rows={rows}
        placeholder={placeholder}
        onInput={(e) => { onChange((e.target as HTMLTextAreaElement).value); }}
      />
      {hint && <span className="form-hint">{hint}</span>}
    </div>
  );
}
