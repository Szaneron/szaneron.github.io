export interface TimelineHighlight {
  bold: string;
  rest: string;
}

export interface TimelineEntry {
  id: string;
  period: string;
  isCurrent?: boolean;
  company: string;
  role?: string;
  stack?: string;
  summary?: string;
  highlights?: TimelineHighlight[];
}

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'mindpal',
    period: '05 / 2024 — present',
    isCurrent: true,
    company: 'MindPal',
    role: 'Full-Stack Developer',
    stack: 'Python · Django · Ruby on Rails · React · TypeScript  · PostgreSQL · Azure · AWS',
    summary:
      'Taking complete engineering ownership across multiple production applications, designing backend architectures, optimizing database configurations, and crafting highly responsive client side user interfaces.',
    highlights: [
      {
        bold: 'CloseEasy',
        rest: ' legal technology platform built with multi step compliance workflows and automated document generation pipelines.',
      },
      {
        bold: 'Solar Design Platform',
        rest: ' large scale engineering application featuring heavy mathematical layout calculations and complex analytical dashboards.',
      },
      {
        bold: 'AI Recruitment Agents',
        rest: ' autonomous screening systems operating via multilingual website chats and automated social media communication bots.',
      },
      {
        bold: 'AI Recruitment Platform',
        rest: ' global hiring software providing advanced resume parsing algorithms and intelligent job matching infrastructure.',
      },
    ],
  },
  {
    id: 'lukestore',
    period: '01 / 2023 — 05 / 2024',
    company: 'LukeStore',
    role: 'Software Developer & IT',
    stack: 'Python · Django · PostgreSQL',
    summary:
      'Engineered core business automation systems and data integration pipelines beneath a large scale retail operation to eliminate repetitive manual processes.',
    highlights: [
      {
        bold: 'Marketplace Web Scrapers',
        rest: ' custom python scripts executing automated data extraction pipelines across ten independent online marketplaces.',
      },
      {
        bold: 'Django Warehouse Tracker',
        rest: ' central inventory web application improving real time coordination and task management for logistics teams.',
      },
      {
        bold: 'Back Office Automation',
        rest: ' scheduled background jobs handling financial reporting, logistics label printing, and instant stock updates.',
      },
    ],
  },
  {
    id: 'self-taught',
    period: 'before 2023',
    company: 'Academic Studies and Independent Engineering',
    stack: 'Python · Django · PostgreSQL · Git · Docker',
    summary:
      'Acquired formal engineering foundations through structured technical education while building independent full stack applications to master software design patterns in real world scenarios.',
    highlights: [
      {
        bold: 'Personal Projects',
        rest: ' designed and launched independent web products to practice clean code principles, API design, and deployment pipelines.',
      },
      {
        bold: 'Bachelor of Engineering',
        rest: ' completed a degree at the University of Rzeszow specializing in Web Applications, relational databases, and software architecture.',
      },
      {
        bold: 'Technical College',
        rest: ' graduated from an Information Technology program establishing core computing foundations and system network basics.',
      },
    ],
  },
];
