'use client';

import { Check } from 'lucide-react';

export function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label
      className="flex cursor-pointer items-center justify-between rounded-xl border border-[var(--fn-border)] bg-[var(--fn-surface)] px-4 py-3 transition-all hover:bg-[var(--fn-surface-muted)] group"
    >
      <span className="text-[var(--fn-text)] font-medium">{label}</span>
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-lg border-2 transition-all duration-200 ${
          checked 
            ? 'border-[var(--fn-primary)] bg-[var(--fn-primary)]' 
            : 'border-[var(--fn-border)] bg-[var(--fn-surface)] group-hover:border-[var(--fn-primary-muted)]'
        }`}
      >
        {checked && (
          <Check size={16} className="text-white animate-checkmark" />
        )}
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
    </label>
  );
}
