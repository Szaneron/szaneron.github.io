interface BadgeProps {
  label: string;
  accentHover?: boolean;
  hoverDelay?: number;
}

export default function Badge({ label, accentHover = false, hoverDelay }: BadgeProps) {
  return (
    <span
      style={
        accentHover && hoverDelay !== undefined ? { transitionDelay: `${hoverDelay}ms` } : undefined
      }
      className={[
        'px-2.5 py-1 font-mono text-xs border border-line-2 rounded-full text-ink-2',
        'transition-colors duration-300',
        accentHover ? 'group-hover:border-accent/60 group-hover:text-accent' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label}
    </span>
  );
}
