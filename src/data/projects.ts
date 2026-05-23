import type { Project } from '@/types';

// ── Section 03 — "In production" ──────────────────────────────────────────
// Real, shipped work. Max ~4 cases.

export const productionProjects: Project[] = [
  {
    id: 'lifehub',
    title: 'LifeHub',
    description:
      'All-in-one personal productivity platform — habit tracking, finance management, and task planning in a single dashboard.',
    tags: ['.NET 8', 'React', 'PostgreSQL', 'Docker'],
    status: 'production',
    year: 2024,
    links: {
      github: 'https://github.com/szaneron/LifeHub',
    },
    highlights: [
      'Modular architecture with clean separation of domain, application, and infrastructure layers',
      'Real-time dashboard updates via SignalR',
      'JWT-based auth with refresh token rotation',
    ],
  },
  {
    id: 'shopdex',
    title: 'ShopDex',
    description:
      'E-commerce price aggregator that tracks product prices across multiple stores and notifies users on drops.',
    tags: ['ASP.NET Core', 'React', 'MSSQL', 'HangFire'],
    status: 'production',
    year: 2023,
    links: {
      github: 'https://github.com/szaneron/ShopDex',
    },
    highlights: [
      'Background scraping pipeline with exponential back-off and per-store rate limiting',
      'Price history stored as time-series; chart rendered client-side without a charting library',
      'Email + browser push notifications with configurable thresholds',
    ],
  },
  {
    id: 'battlewind',
    title: 'BattleWind',
    description:
      'Multiplayer turn-based strategy game inspired by Battleship — real-time matches over WebSocket.',
    tags: ['ASP.NET Core', 'SignalR', 'React', 'TypeScript'],
    status: 'production',
    year: 2023,
    links: {
      github: 'https://github.com/szaneron/BattleWind',
    },
    highlights: [
      'Stateful game sessions managed server-side; client is thin render layer',
      'Matchmaking queue with ELO-style pairing',
      'Graceful reconnect handling — mid-game browser refresh preserves state',
    ],
  },
];

// ── Section 05 — "Lab" ────────────────────────────────────────────────────
// Side projects: experiments, tools, things built out of curiosity.

export const labProjects: Project[] = [
  {
    id: 'alphafarm',
    title: 'AlphaFarm',
    description:
      'Algorithmic trading research sandbox — backtest strategies against historical data with pluggable signal modules.',
    tags: ['Python', 'FastAPI', 'React', 'Pandas'],
    status: 'lab',
    year: 2024,
    links: {
      github: 'https://github.com/szaneron/AlphaFarm',
    },
  },
  {
    id: 'internet-forum',
    title: 'Internet Forum',
    description:
      'Minimal threaded discussion board with nested replies, markdown rendering, and per-thread RSS feeds.',
    tags: ['.NET', 'Razor Pages', 'SQLite'],
    status: 'lab',
    year: 2022,
    links: {
      github: 'https://github.com/szaneron/InternetForum',
    },
  },
];
