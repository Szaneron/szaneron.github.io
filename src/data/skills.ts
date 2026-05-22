import type { StackColumn } from "@/types";

// Section 06 — Stack
// Each column maps to one visual block in the Stack section.
// iconName → Lucide component name imported in the section component.

export const stackColumns: StackColumn[] = [
  {
    id: "backend",
    iconName: "Server",
    label: "Backend",
    items: [
      { name: "C# / .NET", years: 4 },
      { name: "ASP.NET Core", years: 4 },
      { name: "Entity Framework", years: 3 },
      { name: "SignalR", years: 2 },
      { name: "HangFire", years: 2 },
      { name: "Python", years: 2 },
    ],
  },
  {
    id: "frontend",
    iconName: "Globe",
    label: "Frontend",
    items: [
      { name: "TypeScript", years: 3 },
      { name: "React", years: 3 },
      { name: "Tailwind CSS", years: 2 },
      { name: "Vite", years: 2 },
    ],
  },
  {
    id: "data",
    iconName: "Database",
    label: "Data",
    items: [
      { name: "SQL Server", years: 4 },
      { name: "PostgreSQL", years: 2 },
      { name: "SQLite", years: 2 },
      { name: "Redis", years: 1 },
    ],
  },
  {
    id: "infra",
    iconName: "Container",
    label: "Infra",
    items: [
      { name: "Docker", years: 3 },
      { name: "GitHub Actions", years: 2 },
      { name: "Linux / VPS", years: 3 },
      { name: "Nginx", years: 2 },
    ],
  },
];
