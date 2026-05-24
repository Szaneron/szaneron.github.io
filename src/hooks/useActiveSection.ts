import { useEffect, useState } from 'react';

/**
 * Sets up IntersectionObserver for every `.reveal` element on the page.
 * Adds class `.in` on first viewport crossing, then unobserves.
 * If the element has `data-stagger`, sets CSS `--i` on each direct child
 * so the stagger delay works via `transition-delay: calc(var(--i, 0) * 60ms)`.
 *
 * Call once in App — runs after initial render when all sections are in the DOM.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;

          if (el.hasAttribute('data-stagger')) {
            Array.from(el.children).forEach((child, i) => {
              (child as HTMLElement).style.setProperty('--i', String(i));
            });
          }

          el.classList.add('in');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    document.querySelectorAll<HTMLElement>('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

/**
 * Returns the id of the section currently most visible in the viewport.
 * Used by Navigation to highlight the active link.
 *
 * @param sectionIds - ordered list of section element ids to track
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        // Pick the entry that is intersecting and has the largest ratio
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(',')]);

  return activeId;
}
