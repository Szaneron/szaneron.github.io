import { twMerge } from 'tailwind-merge';

type ClassValue = string | number | boolean | undefined | null | ClassValue[];

function cx(...values: ClassValue[]): string {
  const out: string[] = [];
  for (const v of values) {
    if (!v && v !== 0) continue;
    if (typeof v === 'string' || typeof v === 'number') out.push(String(v));
    else if (Array.isArray(v)) {
      const r = cx(...v);
      if (r) out.push(r);
    }
  }
  return out.join(' ');
}

/** Merge Tailwind classes without conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(cx(...inputs));
}
