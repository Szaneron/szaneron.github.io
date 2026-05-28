import { Fragment } from 'react';
import SectionEyebrow from '@components/ui/section-eyebrow';
import { TIMELINE_ENTRIES } from '@/data/timeline';

export default function Timeline() {
  return (
    <section id="timeline" className="py-20">
      <div className="section-inner space-y-8 sm:space-y-14">
        <SectionEyebrow num="04" label="Timeline" />

        <div className="reveal">
          <h2 className="text-4xl sm:text-5xl xl:text-7xl font-medium leading-none tracking-tighter">
            Two roles.
            <br />
            Real <span className="text-accent">commits.</span>
          </h2>
        </div>

        {/* Fragment per entry keeps period + card as direct grid children */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] lg:gap-x-8 xl:gap-x-12">
          {TIMELINE_ENTRIES.map((entry, i) => {
            const isLast = i === TIMELINE_ENTRIES.length - 1;
            return (
              <Fragment key={entry.id}>
                {/* Period */}
                <div
                  className={`reveal border-t border-line pt-7 pb-3 sm:pt-8 sm:pb-8 font-mono text-sm text-ink-2 tracking-wide flex flex-col gap-1.5${isLast ? ' pb-0!' : ''}`}
                >
                  <span>{entry.period}</span>
                  {entry.isCurrent && (
                    <span className="inline-flex items-center gap-3 text-accent text-xs uppercase tracking-widest">
                      {/* status-pulse reuses the global keyframe from index.css */}
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 status-pulse" />
                      Current
                    </span>
                  )}
                </div>

                {/* Card — mobile: no top border (period acts as row opener) */}
                <div
                  className={`reveal pt-1 pb-7 sm:pt-8 sm:pb-8 lg:border-t lg:border-line${isLast ? ' pb-0!' : ''}`}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
                    {entry.company}
                    {entry.role && (
                      <>
                        {' '}
                        - <span className="text-accent">{entry.role}</span>
                      </>
                    )}
                  </h3>

                  {entry.stack && (
                    <p className="font-mono text-xs text-ink-3 tracking-wide mt-2.5">
                      {entry.stack}
                    </p>
                  )}

                  {entry.summary && (
                    <p className="mt-5 text-sm sm:text-base leading-relaxed text-ink-2 max-w-[64ch]">
                      {entry.summary}
                    </p>
                  )}

                  {entry.highlights && (
                    <ul className="mt-6 flex flex-col font-mono text-xs">
                      {entry.highlights.map((h, j) => (
                        <li
                          key={j}
                          className={[
                            'relative pl-6 py-2.5 text-ink-2',
                            j > 0 ? 'border-t border-dashed border-line-2' : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                        >
                          {/* "+" is absolutely positioned so it never shifts the text */}
                          <span
                            className="absolute left-0 top-2.5 text-accent font-medium select-none"
                            aria-hidden="true"
                          >
                            +
                          </span>
                          <strong className="text-ink font-medium">{h.bold}</strong>
                          {h.rest}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
