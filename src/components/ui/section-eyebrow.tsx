interface Props {
  num: string;
  label: string;
}

export default function SectionEyebrow({ num, label }: Props) {
  return (
    <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm tracking-widest uppercase text-ink-3">
      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
      <span className="text-accent">{num}</span>
      <span>/</span>
      <span>{label}</span>
      <span className="flex shrink-0">
        <span className="w-8 h-px bg-accent" />
        <span className="w-28 h-px bg-line-2" />
      </span>
    </div>
  );
}
