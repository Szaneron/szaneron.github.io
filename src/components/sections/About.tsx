import { AUTHOR } from '@/data/constants';
import SectionEyebrow from '@components/ui/section-eyebrow';

const FACTS = [
  { k: 'Based', v: AUTHOR.location, sub: 'remote-first' },
  {
    k: 'Current',
    v: AUTHOR.currentCompany,
    sub: `${AUTHOR.title}\nsince ${AUTHOR.currentCompanySince}`,
  },
  { k: 'Focus', v: 'Python · React', sub: 'backend + frontend' },
  { k: 'Open to', v: 'Mid roles', sub: 'full-time\nb2b · partnership' },
] as const;

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="section-inner space-y-8 sm:space-y-14">
        <SectionEyebrow num="01" label="About" />

        {/* About grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          <h2 className="lg:col-span-2 text-4xl sm:text-5xl xl:text-7xl font-medium leading-none tracking-tighter">
            Code that's
            <br />
            built to <span className="text-accent">last.</span>
          </h2>

          <div className="lg:col-span-3 flex flex-col gap-5 text-base sm:text-lg text-ink-2 leading-relaxed">
            <p>
              I started in <strong className="text-ink font-medium">Python and Django</strong> and
              grew heavily into <strong className="text-ink font-medium">Ruby on Rails</strong> and{' '}
              <strong className="text-ink font-medium">React with TypeScript</strong>. Today I work
              across the entire stack by designing data models, writing the services that move data,
              and building the intuitive interfaces that users interact with every day.
            </p>
            <p>
              I believe the best engineers are{' '}
              <strong className="text-ink font-medium">generalists with depth</strong>. I prefer to
              understand exactly why a query is slow before I tune it, or why a component re-renders
              before I attempt to memoize it. Without that deep context, you are simply moving
              complexity around rather than solving it.
            </p>
            <p>
              Beyond client projects, I build{' '}
              <strong className="text-ink font-medium">internal tools and automations</strong> to
              optimize my own workflow through CLIs, agents, scrapers, and dashboards. If a process
              can be repeated, I prefer to automate it so it runs itself.
            </p>
          </div>
        </div>

        {/* Facts bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-line">
          {FACTS.map(({ k, v, sub }, i) => (
            <div
              key={k}
              className={`px-5 py-7 sm:px-6 sm:py-8 border-line${i < 2 ? ' border-b lg:border-b-0' : ''}${i % 2 === 0 ? ' border-r' : i === 1 ? ' lg:border-r' : ''}`}
            >
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-2">{k}</p>
              <p className="text-xl sm:text-2xl font-medium tracking-tight">{v}</p>
              <p className="font-mono text-xs text-ink-3 mt-1 whitespace-pre-line">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
