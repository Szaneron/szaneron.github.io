import type { TimelineEntry, ImpactMetric } from '@/types';

// Section 04 — Timeline
export const timeline: TimelineEntry[] = [
  {
    id: 'job-1',
    company: '— TODO: Company Name —',
    role: 'Full-stack Developer',
    period: { from: '2024-01', to: 'present' },
    location: 'Warsaw, PL · Remote',
    description: 'TODO: brief description of the role and context.',
    highlights: [
      'TODO: measurable achievement 1',
      'TODO: measurable achievement 2',
      'TODO: measurable achievement 3',
    ],
  },
  {
    id: 'job-2',
    company: '— TODO: Company Name —',
    role: 'Junior .NET Developer',
    period: { from: '2022-07', to: '2023-12' },
    location: 'Warsaw, PL',
    description: 'TODO: brief description of the role and context.',
    highlights: ['TODO: measurable achievement 1', 'TODO: measurable achievement 2'],
  },
];

// Section 02 — Impact metrics (animated counters)
export const impactMetrics: ImpactMetric[] = [
  {
    id: 'response-time',
    value: 300,
    suffix: ' ms',
    label: 'p99 API response time',
    iconName: 'Zap',
  },
  {
    id: 'projects',
    value: 5,
    suffix: '+',
    label: 'Shipped projects',
    iconName: 'Package',
  },
  {
    id: 'uptime',
    value: 99.9,
    suffix: '%',
    decimals: 1,
    label: 'Uptime SLA',
    iconName: 'Activity',
  },
  {
    id: 'experience',
    value: 4,
    suffix: ' yrs',
    label: 'Professional experience',
    iconName: 'Calendar',
  },
];
