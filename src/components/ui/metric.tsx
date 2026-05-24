import type { ReactNode } from 'react';

interface Props {
  value: ReactNode;
  label: string;
}

export default function StatItem({ value, label }: Props) {
  return (
    <div className="relative border-t border-line-2 pt-4 before:content-[''] before:absolute before:-top-px before:left-0 before:w-6 before:h-px before:bg-accent before:transition-all before:duration-300 hover:before:w-full">
      <span className="block font-sans text-xl lg:text-2xl font-medium text-ink tracking-tight mb-1.5">
        {value}
      </span>
      <span className="font-mono text-xs text-ink-3 leading-snug">{label}</span>
    </div>
  );
}
