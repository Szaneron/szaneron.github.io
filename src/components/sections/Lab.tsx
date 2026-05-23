import SectionEyebrow from '@components/ui/section-eyebrow';
import { LAB_PROJECTS, type LabProject } from '@/data/lab';

function StatusBadge({ status, label }: { status: LabProject['status']; label: string }) {
  const dotClass =
    status === 'active'
      ? 'bg-accent status-pulse'
      : status === 'completed'
        ? 'bg-green-600'
        : 'bg-ink-3';

  return (
    <span className={`inline-flex items-center gap-3`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotClass}`} />
      {label}
    </span>
  );
}

export default function Lab() {
  return (
    <section id="lab" className="py-20">
      <div className="section-inner space-y-8 sm:space-y-14">
        <SectionEyebrow num="05" label="Lab" />

        {/* Header - two columns on lg, stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          <div className="reveal">
            <h2 className="text-4xl sm:text-5xl xl:text-7xl font-medium leading-none tracking-tighter">
              What I build when
              <br />
              nobody <span className="text-accent">assigned it.</span>
            </h2>
          </div>

          <p className="reveal font-mono text-xs sm:text-sm leading-relaxed text-ink-3 lg:justify-self-end lg:max-w-xs">
            Personal systems engineered to eliminate daily workflow friction. Every project
            represents a standalone production utility built from scratch to automate operations and
            maintain active continuous usage.
          </p>
        </div>

        {/* Card grid */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 border-y border-line">
          {LAB_PROJECTS.map((project, i) => (
            <article
              key={project.id}
              className={`group bg-bg flex flex-col p-8 transition-colors duration-300 hover:bg-bg-2 border-line${i < LAB_PROJECTS.length - 1 ? ' border-b md:border-b-0 md:border-r' : ''}`}
            >
              {/* Meta row */}
              <div className="flex justify-between items-start font-mono text-xs tracking-widest uppercase text-ink-3 mb-7">
                <span>{project.year}</span>

                <StatusBadge status={project.status} label={project.statusLabel} />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl xl:text-4xl font-medium leading-tight tracking-tight mb-3.5 transition-colors duration-300 group-hover:text-accent">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-ink-2 flex-1">{project.desc}</p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mt-8 font-mono text-xs">
                {project.stack.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 border border-line-2 rounded-full text-ink-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
