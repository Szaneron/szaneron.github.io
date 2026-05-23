export interface WorkCase {
  id: string;
  pid: string;
  title: string;
  sub: string;
  tags: string[];
  accentTags: string[];
  paragraphs: string[];
}

export const WORK_CASES: WorkCase[] = [
  {
    id: 'closeeasy',
    pid: '01',
    title: 'CloseEasy',
    sub: 'Compliance SaaS · Business Closure Workflows',
    tags: ['React', 'TypeScript', 'GraphQL', 'Supabase', 'Gotenberg', 'Vercel', 'Figma'],
    accentTags: ['React', 'GraphQL', 'Supabase', 'Vercel'],
    paragraphs: [
      'This specialized compliance platform digitalizes legal formalities to simplify closing down companies in the UK market through **dynamic workflows** and **automated document generation**.',
      'I drove the frontend architecture and backend as a service integrations, optimizing **client side data fetching** and refactoring complex components to guarantee a highly responsive user experience.',
      'This role elevated my expertise in **managing complex application state and real time database interactions**, giving me a deep understanding of how to build seamless, data heavy user flows.',
    ],
  },
  {
    id: 'solar-design',
    pid: '02',
    title: 'Pegasus',
    sub: 'B2B Solar SaaS · Layout Design and Calculations',
    tags: [
      'Ruby on Rails',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Sidekiq',
      'Python',
      'OpenCV',
      'Figma',
      'Docker',
      'AWS',
    ],
    accentTags: ['Ruby on Rails', 'React', 'Python', 'OpenCV', 'AWS'],
    paragraphs: [
      'This large scale B2B SaaS platform bridges roof geometry and layout specifications with advanced analytics, enabling engineers to design **complex photovoltaic layouts** and automate technical documentation.',
      'Working as a **full stack developer**, I engineered backend pipelines for multi system integrations, automated layout calculations, and computer vision scripts analyzing Google Maps satellite maps, while architecting an **interactive layout playground** and extensive analytical dashboards on the frontend.',
      'This project significantly matured my **product engineering mindset**, mastering the balance between intensive algorithmic complexity and highly dynamic user interfaces through continuous technical iterations.',
    ],
  },
  {
    id: 'ai-recruitment-agents',
    pid: '03',
    title: 'AI Recruitment Agents',
    sub: 'Autonomous AI · Screening and Conversational Bots',
    tags: [
      'Python',
      'Django',
      'LangChain',
      'Playwright',
      'Selenium',
      'TikTok API',
      'OpenAI',
      'Azure',
    ],
    accentTags: ['Python', 'LangChain', 'Selenium', 'OpenAI'],
    paragraphs: [
      'These conversational artificial intelligence systems operate via an **integrated website chatbot** and an **autonomous TikTok agent** to automate screening and mass candidate engagement.',
      'My responsibilities involved developing the core business logic and complex integrations, focusing heavily on **browser automation** and **multilingual live chat automation** to maintain stable operation.',
      'This role advanced my expertise in **modern browser automation in Python** and conversational architectures, mastering how to build complex bots and highly interactive user interfaces.',
    ],
  },
  {
    id: 'ai-recruitment-platform',
    pid: '04',
    title: 'AI Recruitment Platform',
    sub: 'Global HR SaaS · AI powered hiring and ATS',
    tags: ['Python', 'Django', 'PostgreSQL', 'Azure', 'Celery', 'OpenAI', 'Docker'],
    accentTags: ['Python', 'Django', 'OpenAI', 'Azure'],
    paragraphs: [
      'This global platform automates the hiring funnel through **automated CV parsing**, intelligent **job matching**, and thorough **resume analysis** for recruiters and candidates.',
      'I engineered **scalable backend services** and **asynchronous data pipelines**, managing model integration and cloud infrastructure in close collaboration with frontend and product teams.',
      'The experience advanced my command of **distributed systems and heavy background processing**, giving me deep insight into managing large volume data queues during sudden traffic spikes.',
    ],
  },
];
