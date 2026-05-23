import SectionEyebrow from '@components/ui/section-eyebrow';
import Badge from '@components/ui/badge';
import { WORK_CASES } from '@/data/work';

// Parses **bold** markers into <strong> nodes. No other syntax supported.
function parseBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-ink font-medium">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export default function Work() {
  return (
    /*
      overflow-x-hidden sits on the section, not on the cases wrapper.
      section-inner has at least 24px of horizontal padding, which absorbs
      the 16px translateX on hover — no text cutoff, no scroll, smooth slide.
    */
    <section id="work" className="py-20 overflow-x-hidden">
      <div className="section-inner space-y-8 sm:space-y-14">
        <SectionEyebrow num="03" label="Work" />

        <div className="reveal">
          <h2 className="text-4xl sm:text-5xl xl:text-7xl font-medium leading-none tracking-tighter">
            Four diverse industries,
            <br />
            one <span className="text-accent">engineer.</span>
          </h2>
        </div>

        <div className="border-b border-line">
          {WORK_CASES.map(workCase => (
            /*
              article — positioned parent for the bar + group anchor + hover bg.
              inner div — the grid that translates right on hover.
              translateX never touches layout so text never reflows = no jump.
            */
            <article
              key={workCase.id}
              className="reveal group relative border-t border-line bg-bg transition-colors duration-300 hover:bg-bg-2"
            >
              {/* Accent bar — grows scaleY 0 to 1 from top on hover */}
              <div className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-accent transition-transform duration-400 [transition-timing-function:var(--ease)] group-hover:scale-y-100" />

              {/* Grid — translateX keeps layout intact, text never reflows */}
              <div
                className={[
                  'grid grid-cols-1 lg:grid-cols-[3.75rem_1fr_1.4fr]',
                  'gap-4 lg:gap-8 xl:gap-12',
                  'py-9 lg:py-14',
                  'lg:pr-8',
                  'transition-transform duration-350 [transition-timing-function:var(--ease)]',
                  'lg:group-hover:translate-x-4',
                ].join(' ')}
              >
                {/* Project number */}
                <p className="font-mono text-xs tracking-wide text-accent font-medium lg:pt-1.5">
                  {workCase.pid}
                </p>

                {/* Title block */}
                <div className="min-w-0">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
                    {workCase.title}
                  </h3>
                  <p className="font-mono text-xs text-ink-3 tracking-wide mt-2 leading-relaxed">
                    {workCase.sub}
                  </p>

                  {/*  All tags identical at rest. Tags in accentTags glow coral on hover with a stagger. */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {workCase.tags.map(tag => {
                      const accentIndex = workCase.accentTags.indexOf(tag);
                      const isAccent = accentIndex !== -1;
                      return (
                        <Badge
                          key={tag}
                          label={tag}
                          accentHover={isAccent}
                          hoverDelay={isAccent ? accentIndex * 50 : undefined}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Body paragraphs */}
                <div className="min-w-0 flex flex-col gap-3.5 lg:pt-1.5 text-sm sm:text-base leading-relaxed text-ink-2">
                  {workCase.paragraphs.map((para, i) => (
                    <p key={i} className="wrap-break-word">
                      {parseBold(para)}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
