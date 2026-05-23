import {
  Activity,
  Calendar,
  MoveRight,
  Clock,
  Loader,
  RefreshCw,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';
import Counter from '@components/ui/counter';
import type { IconType, ImpactMetric, ValueSegment } from '@/data/impact';

//  Icon map

const ICONS: Record<IconType, LucideIcon> = {
  clock: Clock,
  activity: Activity,
  refresh: RefreshCw,
  loader: Loader,
  calendar: Calendar,
  users: Users,
  chart: TrendingUp,
};

//  Value segment renderer

function renderValue(segments: ValueSegment[]) {
  return segments.map((seg, i) => {
    switch (seg.kind) {
      case 'counter':
        return (
          <span
            key={i}
            className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-none tracking-tighter"
          >
            <Counter target={seg.target} suffix={seg.suffix} />
          </span>
        );
      case 'from':
        return (
          <span key={i} className="text-sm font-mono text-ink-3 tracking-normal">
            {seg.text}
          </span>
        );
      case 'arrow': {
        const ArrowIcon = MoveRight;
        return (
          <ArrowIcon
            key={i}
            className="w-7 h-7 sm:w-8 sm:h-8 text-accent self-center translate-y-3 mx-2 shrink-0"
          />
        );
      }
      case 'unit':
        return (
          <span
            key={i}
            className="text-xs sm:text-sm font-mono text-ink-2 tracking-normal self-end pb-1"
          >
            {seg.text}
          </span>
        );
    }
  });
}

//  Component

type Props = Omit<ImpactMetric, 'id'>;

export default function ImpactCell({ span, iconType, label, value, desc, src }: Props) {
  const Icon = ICONS[iconType];
  const colSpan = span === 3 ? 'lg:col-span-3' : 'lg:col-span-2';

  return (
    <div
      className={[
        'group relative bg-bg flex flex-col justify-between overflow-hidden',
        'transition-colors duration-300 hover:bg-bg-2',
        'p-6 sm:p-7 lg:p-8 xl:p-10',
        'md:min-h-64 lg:min-h-72',
        colSpan,
      ].join(' ')}
    >
      {/* Accent hairline — grows from left on hover */}
      <div className="absolute top-0 left-0 h-0.5 w-0 bg-accent transition-[width] duration-500 group-hover:w-full" />

      {/* Label */}
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-3 transition-colors duration-300 group-hover:text-accent">
        <Icon className="w-3.5 h-3.5 shrink-0 text-accent opacity-85" />
        <span>{label}</span>
      </div>

      {/* Value */}
      <div className="flex items-baseline flex-wrap gap-2 my-5 sm:my-6">{renderValue(value)}</div>

      {/* Description + source */}
      <div>
        <p className="text-sm text-ink-2 leading-relaxed max-w-sm">{desc}</p>
        <p className="font-mono text-xs tracking-widest text-ink-3 mt-3 sm:mt-4">{src}</p>
      </div>
    </div>
  );
}
