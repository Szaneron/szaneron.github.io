import { useState, useEffect } from "react";
import { useActiveSection } from "@hooks/useActiveSection";
import type { NavLink } from "@/types";

const NAV_LINKS: NavLink[] = [
  { id: "about",    label: "About",    index: "01" },
  { id: "work",     label: "Work",     index: "03" },
  { id: "timeline", label: "Timeline", index: "04" },
  { id: "stack",    label: "Stack",    index: "06" },
];

const SECTION_IDS = [...NAV_LINKS.map((l) => l.id), "contact"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "flex items-center justify-between",
        "px-(--pad-x) py-5",
        "border-b border-transparent",
        "transition-[background-color,border-color] duration-300",
        scrolled ? "topbar-scrolled" : "bg-transparent",
      ].join(" ")}
      style={{ backdropFilter: "blur(14px) saturate(140%)" }}
    >
      {/* ── Left: name + status ── */}
      <div className="flex items-center gap-4">
        <a
          href="#hero"
          className="font-medium text-sm text-ink tracking-tight hover:text-ink-2 transition-colors duration-250"
        >
          Armin Boleń
        </a>

        {/* "Available for work" — hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent status-pulse shrink-0" />
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-3">
            Available for work
          </span>
        </div>
      </div>

      {/* ── Center: section links — hidden below md ── */}
      <nav className="hidden md:flex items-center gap-0.5" aria-label="Page sections">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={[
              "px-3.5 py-2 rounded font-mono text-xs tracking-wide",
              "transition-colors duration-250",
              activeId === link.id
                ? "text-ink bg-bg-3"
                : "text-ink-3 hover:text-ink hover:bg-bg-3",
            ].join(" ")}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* ── Right: contact CTA ── */}
      <a
        href="#contact"
        className={[
          "px-4 py-2 rounded-full font-mono text-xs",
          "border transition-all duration-250",
          activeId === "contact"
            ? "bg-accent border-accent text-bg"
            : "border-line-3 text-ink hover:bg-accent hover:border-accent hover:text-bg",
        ].join(" ")}
      >
        Contact
      </a>
    </header>
  );
}
