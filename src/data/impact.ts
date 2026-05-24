export interface CounterSegment {
  kind: 'counter';
  target: number;
  suffix?: string;
}

export interface FromSegment {
  kind: 'from';
  text: string;
}

export interface ArrowSegment {
  kind: 'arrow';
  symbol: '→' | '−';
}

export interface UnitSegment {
  kind: 'unit';
  text: string;
}

export type ValueSegment = CounterSegment | FromSegment | ArrowSegment | UnitSegment;

export type IconType = 'clock' | 'activity' | 'refresh' | 'loader' | 'calendar' | 'users' | 'chart';

export interface ImpactMetric {
  id: string;
  /** Column span in the 6-column desktop grid */
  span: 2 | 3;
  iconType: IconType;
  label: string;
  value: ValueSegment[];
  desc: string;
  src: string;
}

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'solar-perf',
    span: 3,
    iconType: 'activity',
    label: 'Query performance optimization',
    value: [
      { kind: 'from', text: '15 min' },
      { kind: 'arrow', symbol: '→' },
      { kind: 'counter', target: 300, suffix: ' ms' },
    ],
    desc: 'Optimized analytics for 150k+ projects by eliminating N+1 patterns and using precomputed metrics. Reduced maximum request time by 98 percent.',
    src: 'MindPal · Pegasus',
  },
  {
    id: 'resume-checker',
    span: 3,
    iconType: 'users',
    label: 'AI driven resume analysis',
    value: [
      { kind: 'counter', target: 15, suffix: 's' },
      { kind: 'unit', text: 'average analysis time' },
    ],
    desc: 'Engineered a fast analysis feature that parses and scores CVs in seconds to deliver instant tailored growth tips and structural feedback for hundreds of job seekers.',
    src: 'MindPal · Recruitment Platform',
  },
  {
    id: 'polling',
    span: 2,
    iconType: 'activity',
    label: 'Network traffic optimization',
    value: [
      { kind: 'counter', target: 52 },
      { kind: 'unit', text: 'req/min' },
      { kind: 'arrow', symbol: '→' },
      { kind: 'counter', target: 1 },
    ],
    desc: 'Consolidated redundant queries into a single parallel hook with centralized caching, eliminating interface lag and maximizing network efficiency.',
    src: 'MindPal · CloseEasy',
  },
  {
    id: 'inbox',
    span: 2,
    iconType: 'refresh',
    label: 'AI driven talent screening',
    value: [
      { kind: 'from', text: '2 days' },
      { kind: 'arrow', symbol: '→' },
      { kind: 'counter', target: 30, suffix: ' s' },
    ],
    desc: 'Automated full stack candidate analysis including CV parsing, GitHub evaluation, and technical code review. Delivered structured summaries for HR and technical teams.',
    src: 'MindPal · Recruitment Platform',
  },
  {
    id: 'scraper',
    span: 2,
    iconType: 'calendar',
    label: 'Operational workflow automation',
    value: [
      { kind: 'counter', target: 4, suffix: ' hrs' },
      { kind: 'unit', text: 'saved daily' },
    ],
    desc: 'Replaced manual data gathering across 10 plus marketplaces with a Python scraper fleet. Transformed raw competitor data into actionable insights for the company.',
    src: 'LukeStore · Data Collection',
  },
  {
    id: 'automation',
    span: 3,
    iconType: 'loader',
    label: 'High volume social automation',
    value: [
      { kind: 'counter', target: 100, suffix: '+' },
      { kind: 'unit', text: 'daily interactions' },
    ],
    desc: 'Engineered an AI agent managing engagement on a 55 thousand follower account. Operates 24/7 to handle Q and A without human supervision.',
    src: 'MindPal · TikTok Agent',
  },
  {
    id: 'admin',
    span: 3,
    iconType: 'users',
    label: 'Back office pipeline automation',
    value: [
      { kind: 'from', text: 'baseline' },
      { kind: 'arrow', symbol: '→' },
      { kind: 'counter', target: 50, suffix: '%' },
    ],
    desc: 'Developed Django and SQLite tooling to automate logistics and reporting. Reduced administrative workload by half.',
    src: 'LukeStore · Admin Automation',
  },
];
