// ── Projects ──────────────────────────────────────────────────────────────

export interface ProjectLink {
  github?: string;
  live?: string;
  demo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  /** "production" = section 03 "In production"; "lab" = section 05 "Lab" */
  status: 'production' | 'lab';
  year: number;
  links?: ProjectLink;
  highlights?: string[];
}

// ── Stack / Skills ────────────────────────────────────────────────────────

export interface StackItem {
  name: string;
  /** Years of experience, displayed in the mono .yrs badge */
  years?: number;
}

export interface StackColumn {
  id: string;
  /** Lucide icon component name (e.g. "Server", "Globe", "Database") */
  iconName: string;
  label: string;
  items: StackItem[];
}

// ── Experience / Timeline ─────────────────────────────────────────────────

export interface TimelineEntry {
  id: string;
  company: string;
  role: string;
  period: {
    from: string;
    /** ISO month-year string or "present" */
    to: string;
  };
  location: string;
  description: string;
  highlights: string[];
}

// ── Impact metrics ────────────────────────────────────────────────────────

export interface ImpactMetric {
  id: string;
  prefix?: string;
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  iconName: string;
}

// ── Navigation ────────────────────────────────────────────────────────────

export interface NavLink {
  /** Matches the section element's id attribute */
  id: string;
  label: string;
  /** Zero-padded section number displayed in eyebrow, e.g. "01" */
  index: string;
}
