export type LabStatus = 'active' | 'experimental' | 'completed';

export interface LabProject {
  id: string;
  year: number;
  title: string;
  status: LabStatus;
  statusLabel: string;
  desc: string;
  stack: string[];
}

export const LAB_PROJECTS: LabProject[] = [
  {
    id: 'lifehub',
    year: 2026,
    title: 'LifeHub',
    status: 'active',
    statusLabel: 'Web application',
    desc: 'A full stack personal operating system utilizing a modular event driven architecture to manage complex recurring finances cash flows and personal productivity data engines.',
    stack: ['Python', 'Django', 'React', 'TypeScript', 'PostgreSQL', 'Modular'],
  },
  {
    id: 'mind-cli',
    year: 2026,
    title: 'Mind CLI',
    status: 'completed',
    statusLabel: 'Terminal tool',
    desc: 'A command line automation tool integrating management APIs to provide automatic branch tracking, time overlap protection, and interactive productivity heatmaps.',
    stack: ['Python', 'CLI Architecture', 'Click', 'Git', 'Terminal UI', 'Automation'],
  },
  {
    id: 'ranks-engine',
    year: 2025,
    title: 'Ranks Engine',
    status: 'completed',
    statusLabel: 'Game bot',
    desc: 'An autonomous game automation system leveraging real time computer vision and optical character recognition to execute complex live combat loops and concurrent multi instance logic.',
    stack: ['Python', 'OpenCV', 'PyTesseract', 'Automation', 'Bot'],
  },
];
