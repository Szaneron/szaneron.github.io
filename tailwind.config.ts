import type { Config } from "tailwindcss";

// Tailwind v4 — theme configuration lives in src/index.css (@theme block).
// This file is kept minimal; content paths are auto-detected by @tailwindcss/vite.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
} satisfies Config;
