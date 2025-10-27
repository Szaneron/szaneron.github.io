import {
  Code2,
  Server,
  Database,
  CreditCard,
  Cloud,
  Zap,
  FileCode,
  Box,
  Radio,
  BarChart3,
  Leaf,
  Palette,
  Film,
  Code,
  CodeIcon,
  Terminal,
  SquareTerminal,
  PhoneCall,
  Code2Icon,
  ToolCase,
} from "lucide-react";

/* Github Languages Colors from data/projects.json
Typescript: #06b6d4
Python: #3b82f6
CSS: #7c3aed
JavaScript: #eab308
Other: #e5e7eb
*/

export const techIcons: Record<string, { Icon: any; color: string }> = {
  Python: { Icon: SquareTerminal, color: "text-blue-500" },
  Django: { Icon: CodeIcon, color: "text-emerald-500" },
  DRF: { Icon: CodeIcon, color: "text-red-500" },
  PostgreSQL: { Icon: Database, color: "text-blue-500" },
  Swagger: { Icon: PhoneCall, color: "text-emerald-500" },
  React: { Icon: Code2Icon, color: "text-blue-500" },
  TypeScript: { Icon: FileCode, color: "text-cyan-500" },
  Vite: { Icon: ToolCase, color: "text-purple-500" },
  Tailwind: { Icon: Palette, color: "text-cyan-500" },

  /**********************************************************************/
  //   "Node.js": { Icon: Server, color: "text-green-500" },
  //   Stripe: { Icon: CreditCard, color: "text-purple-500" },
  //   AWS: { Icon: Cloud, color: "text-orange-400" },
  //   "Next.js": { Icon: Zap, color: "text-gray-300" },
  //   Prisma: { Icon: Box, color: "text-gray-500" },
  //   "Socket.io": { Icon: Radio, color: "text-gray-500" },
  //   "Vue.js": { Icon: Code2, color: "text-green-400" },
  //   "D3.js": { Icon: BarChart3, color: "text-orange-500" },
  //   "Express.js": { Icon: Server, color: "text-gray-500" },
  //   MongoDB: { Icon: Leaf, color: "text-green-500" },
  //   FastAPI: { Icon: Zap, color: "text-teal-400" },
  //   Redis: { Icon: Database, color: "text-red-500" },
  //   "Framer Motion": { Icon: Film, color: "text-pink-500" },
  //   Supabase: { Icon: Database, color: "text-green-400" },
};
