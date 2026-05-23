import { useEffect, useRef } from 'react';

interface Props {
  target: number;
  suffix?: string;
  duration?: number;
}

/**
 * Animates from 0 to `target` using cubic-out easing.
 * Fires once when the element crosses 50% of the viewport.
 * Size is inherited from the parent - wrap in a sized element.
 */
export default function Counter({ target, suffix = '', duration = 1400 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const easeOut = (t: number) => 1 - (1 - t) ** 3;
    const fmt = (v: number) =>
      Math.round(v)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          el.textContent = fmt(easeOut(t) * target);
          if (t < 1) requestAnimationFrame(tick);
          else el.textContent = fmt(target);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
}
