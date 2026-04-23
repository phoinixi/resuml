import { useId } from 'react';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'url';
  /** Optional helper hint shown below the field. */
  hint?: string;
}

export function TextInput({ label, value, onChange, placeholder, type = 'text', hint }: TextInputProps) {
  const id = useId();
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        id={id}
        type={type}
        className="form-input"
        value={value || ''}
        placeholder={placeholder}
        onInput={(e) => { onChange((e.target as HTMLInputElement).value); }}
      />
      {hint && <span className="form-hint">{hint}</span>}
    </div>
  );
}
