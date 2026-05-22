interface Props {
  num: string;
  label: string;
}

export default function SectionEyebrow({ num, label }: Props) {
  return (
    <div className="flex items-center gap-2.5 font-mono text-xxs tracking-widest uppercase text-ink-3 mb-14 lg:mb-20 before:content-[''] before:block before:w-4 before:h-px before:bg-line-2 before:shrink-0">
      <span className="text-accent">{num}</span>
      <span>/</span>
      <span>{label}</span>
    </div>
  );
}
