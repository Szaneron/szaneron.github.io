import { ChevronRight } from 'lucide-react';
import SectionEyebrow from '@components/ui/section-eyebrow';
import { STACK_COLUMNS, type StackItem } from '@/data/stack';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

function SkillRow({ name, tag }: StackItem) {
  return (
    <div className="group relative flex items-center justify-between py-3 border-b border-dashed border-line overflow-hidden cursor-default">
      <ChevronRight
        aria-hidden="true"
        strokeWidth={1.6}
        style={{ transition: `opacity 150ms linear, transform 450ms ${EASE}` }}
        className="absolute left-0 top-0 bottom-0 my-auto w-5 h-5 text-accent shrink-0 opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0"
      />

      <span
        style={{ transition: `color 200ms ${EASE}, padding-left 450ms ${EASE}` }}
        className="font-medium tracking-tight text-lg sm:text-xl text-ink group-hover:text-accent group-hover:pl-6"
      >
        {name}
      </span>

      <span className="font-mono text-xxs text-ink-3 shrink-0 ml-3">{tag}</span>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-20">
      <div className="section-inner space-y-8 sm:space-y-14">
        <SectionEyebrow num="06" label="Stack" />

        {/*  Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          <div className="reveal">
            <h2 className="text-4xl sm:text-5xl xl:text-7xl font-medium leading-none tracking-tighter">
              Tools, in the order
              <br />I <span className="text-accent">reach for them.</span>
            </h2>
          </div>

          <p className="reveal font-mono text-xs sm:text-sm leading-relaxed text-ink-3 lg:justify-self-end lg:max-w-xs">
            Core production stack validated through real world product engineering and live
            deployment.
          </p>
        </div>

        {/*  Skill columns — stack on mobile, 3-col on md+ */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-14">
          {STACK_COLUMNS.map(({ id, Icon, label, items }) => (
            <div key={id} className="flex flex-col">
              <div className="flex items-center justify-between pb-4 border-b border-line-2 font-mono text-xxs tracking-[0.14em] uppercase text-ink-3">
                <span className="flex items-center gap-2.5">
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.6}
                    className="w-4 h-4 text-accent shrink-0"
                  />
                  {label}
                </span>
                <span className="text-accent tabular-nums">
                  {String(items.length).padStart(2, '0')}
                </span>
              </div>

              {/* Rows */}
              <div className="flex flex-col">
                {items.map(item => (
                  <SkillRow key={item.name} name={item.name} tag={item.tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
