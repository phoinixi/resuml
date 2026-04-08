import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Download } from 'lucide-react';

interface DownloadOption {
  readonly label: string;
  readonly icon: React.ReactNode;
  readonly onClick: () => void;
  readonly disabled?: boolean;
}

interface DownloadDropdownProps {
  readonly options: readonly DownloadOption[];
}

export function DownloadDropdown({ options }: DownloadDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => { document.removeEventListener('mousedown', handleOutsideClick); };
  }, [open, handleOutsideClick]);

  const handleSelect = useCallback((option: DownloadOption) => {
    setOpen(false);
    option.onClick();
  }, []);

  return (
    <div className="download-dropdown" ref={ref}>
      <button
        className="toolbar-btn"
        onClick={() => { setOpen((prev) => !prev); }}
        title="Download resume"
      >
        <Download size={14} /> Download
      </button>
      {open && (
        <div className="download-dropdown-menu">
          {options.map((option) => (
            <button
              key={option.label}
              className="download-dropdown-item"
              onClick={() => { handleSelect(option); }}
              disabled={option.disabled}
            >
              <span className="download-dropdown-icon">{option.icon}</span>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
