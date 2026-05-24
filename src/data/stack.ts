import { Code2, Package, Server } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface StackItem {
  name: string;
  tag: string;
}

export interface StackColumn {
  id: string;
  Icon: LucideIcon;
  label: string;
  items: StackItem[];
}

export const STACK_COLUMNS: StackColumn[] = [
  {
    id: 'languages',
    Icon: Code2,
    label: 'Languages',
    items: [
      { name: 'Python', tag: '4y+' },
      { name: 'Ruby', tag: '2y' },
      { name: 'TypeScript', tag: '2y' },
      { name: 'JavaScript', tag: '3y+' },
      { name: 'SQL', tag: '3y+' },
    ],
  },
  {
    id: 'frameworks',
    Icon: Package,
    label: 'Frameworks & Tools',
    items: [
      { name: 'Django', tag: 'core' },
      { name: 'Ruby on Rails', tag: 'prod' },
      { name: 'React', tag: 'prod' },
      { name: 'Celery', tag: 'async' },
      { name: 'Sidekiq', tag: 'async' },
      { name: 'OpenCV', tag: 'vision' },
      { name: 'LangChain', tag: 'ai architecture' },
      { name: 'OpenAI API', tag: 'ai models' },
      { name: 'Playwright', tag: 'e2e automation' },
      { name: 'Stripe API', tag: 'payments' },
    ],
  },
  {
    id: 'infra',
    Icon: Server,
    label: 'Infrastructure & Storage',
    items: [
      { name: 'PostgreSQL', tag: 'primary' },
      { name: 'Supabase', tag: 'baas' },
      { name: 'Redis', tag: 'cache queue' },
      { name: 'MongoDB', tag: 'doc store' },
      { name: 'Docker', tag: 'always' },
      { name: 'GitHub Actions', tag: 'ci/cd' },
      { name: 'AWS S3', tag: 'storage' },
      { name: 'Azure', tag: 'deploy' },
    ],
  },
];
