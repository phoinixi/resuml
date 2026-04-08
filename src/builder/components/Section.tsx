import { useState, type ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function Section({ title, children, defaultOpen = false }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="form-section">
      <button className="form-section-header" onClick={() => { setOpen(!open); }}>
        <span>{title}</span>
        <span className="form-section-chevron">{open ? '▾' : '▸'}</span>
      </button>
      {open && <div className="form-section-body">{children}</div>}
    </div>
  );
}
