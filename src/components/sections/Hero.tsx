import { AUTHOR } from '@/data/constants';
import Metric from '@components/ui/metric';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-20">
      <div className="section-inner space-y-8 sm:space-y-14">
        {/* Meta row */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-5 font-mono text-xs text-ink-3">
          <span>
            <span className="text-accent text-sm">{AUTHOR.title}</span> · {AUTHOR.location}
          </span>
          <span>
            2026 · <strong className="text-ink font-medium">portfolio</strong>
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-medium leading-none tracking-tighter">
          Building scalable <span className="inline sm:block sm:pl-[1.2em]">systems that</span>
          <span className="block">
            ship<span className="text-accent">.</span> end to end
            <span className="text-accent">.</span>
          </span>
        </h1>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 xl:gap-20 items-end">
          {/* Intro text */}
          <p className="text-lg sm:text-xl lg:text-2xl text-ink-2 leading-snug tracking-tight">
            I'm <strong className="text-ink font-medium">{AUTHOR.name}</strong>, a full-stack
            developer with 3+ years of experience in building and scaling production web
            applications. I bridge the gap between backend architecture and frontend interface,
            taking features from the initial data model to the final user interaction.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            <Metric
              value={
                <>
                  <span className="text-accent">3+</span> yrs
                </>
              }
              label="shipping production systems"
            />
            <Metric value="Python · Ruby · TS" label="primary languages" />
            <Metric
              value={
                <>
                  <span className="text-accent">E2E</span> ownership
                </>
              }
              label="model → API → UI"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
