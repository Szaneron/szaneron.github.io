import SectionEyebrow from '@components/ui/section-eyebrow';
import ImpactCell from '@components/ui/impact-cell';
import { IMPACT_METRICS } from '@/data/impact';

export default function Impact() {
  return (
    <section id="impact" className="py-20">
      <div className="section-inner space-y-8 sm:space-y-14">
        <SectionEyebrow num="02" label="Impact" />

        {/* Head */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <h2 className="text-4xl sm:text-5xl xl:text-7xl font-medium leading-none tracking-tighter">
            Engineering decisions
            <br />
            with <span className="text-accent">receipts.</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm leading-relaxed text-ink-3 md:justify-self-end md:max-w-xs">
            Every entry below is a real before and after comparison from shipped work. Measured in
            the same environment under identical load. The exact kind of technical impact I deliver
            in any role.
          </p>
        </div>

        {/* Metric grid — 6-col desktop · 2-col tablet · 1-col mobile*/}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 divide-y divide-line sm:divide-y-0 sm:gap-px sm:bg-line border-y border-line">
          {IMPACT_METRICS.map(({ id, ...cell }) => (
            <ImpactCell key={id} {...cell} />
          ))}
        </div>
      </div>
    </section>
  );
}
