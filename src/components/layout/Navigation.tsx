import { useState, useEffect } from 'react';
import { cn } from '@lib/utils';
import { buttonVariants } from '@components/ui/button';
import { MoveUpRight } from 'lucide-react';
import { AUTHOR } from '@data/constants';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'impact', label: 'Impact' },
  { id: 'work', label: 'Work' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'lab', label: 'Lab' },
  { id: 'stack', label: 'Stack' },
];

const MOBILE_LINKS = [...NAV_LINKS, { id: 'contact', label: 'Contact', cta: true }] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close when viewport grows past mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* Top bar */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'h-16 flex items-center justify-between',
          'px-6 sm:px-10 xl:px-20',
          'border-b transition-[background-color,border-color] duration-300',
          scrolled || menuOpen ? 'bg-bg border-line' : 'bg-bg/70 border-transparent',
        )}
        style={{ backdropFilter: 'blur(14px) saturate(140%)' }}
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={close}
            className="font-mono text-sm font-medium text-ink hover:text-ink-2 transition-colors duration-250"
          >
            {AUTHOR.fullName}
          </a>
          {/* Status — desktop only */}
          <div className="hidden md:flex items-center gap-2">
            <span className="ml-2 w-1.5 h-1.5 rounded-full bg-accent status-pulse shrink-0" />
            <span className="font-mono text-xs text-ink-3 uppercase tracking-widest">
              {AUTHOR.status}
            </span>
          </div>
        </div>

        {/* Desktop nav + CTA */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Site sections">
          {NAV_LINKS.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="px-3.5 py-2 rounded-full font-mono text-xs text-ink-3 hover:text-ink hover:bg-bg-3 transition-colors duration-250"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              'ml-2.5',
              buttonVariants({ variant: 'solid', radius: 'pill', size: 'sm' }),
            )}
          >
            Contact
          </a>
        </nav>

        {/* Mobile hamburger — 3 bars, bar 2 shorter + right-aligned */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden flex flex-col justify-center gap-1 w-11 h-11 -mr-1.5 rounded-full"
        >
          <span
            className={cn(
              'block w-5 h-0.5 bg-ink rounded-full transition-all duration-300 origin-center',
              menuOpen && 'rotate-45 translate-y-1.5',
            )}
          />
          <span
            className={cn(
              'block w-5 h-0.5 bg-ink rounded-full ml-1.5 transition-all duration-300',
              menuOpen && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'block w-5 h-0.5 bg-ink rounded-full transition-all duration-300 origin-center',
              menuOpen && '-rotate-45 -translate-y-1.5',
            )}
          />
        </button>
      </header>

      {/* Mobile overlay — fades in, flex-col so footer pins to bottom */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-hidden={!menuOpen}
        className={cn(
          'fixed inset-0 z-40 md:hidden flex flex-col',
          'bg-bg/95 transition-all duration-300',
          menuOpen
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none',
        )}
        style={{ backdropFilter: 'blur(20px) saturate(140%)' }}
      >
        {/* Scrollable nav links */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-6 sm:px-10 pt-24 pb-8">
          <nav className="flex flex-col">
            {MOBILE_LINKS.map((link, i) => {
              const isCta = 'cta' in link && link.cta;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={close}
                  style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : '0ms' }}
                  className={cn(
                    'mn-link font-medium flex items-baseline gap-4',
                    'py-5 border-b border-line',
                    'active:pl-2',
                    isCta ? 'text-accent border-b-0' : 'text-ink hover:text-ink-2',
                    menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
                  )}
                >
                  <span className="font-mono text-base text-accent shrink-0 w-7">0{i + 1}</span>
                  <span>{link.label}</span>
                  {isCta && <MoveUpRight className="-ml-1" />}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Status footer — always visible at the bottom */}
        <div className="shrink-0 px-6 sm:px-10 py-5 border-t border-line flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent status-pulse shrink-0" />
          <span className="font-mono text-xs text-ink-3 uppercase tracking-widest">
            {AUTHOR.status}
          </span>
        </div>
      </div>
    </>
  );
}
