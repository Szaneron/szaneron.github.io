import { Copyright } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="section-inner py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs tracking-widest text-muted uppercase inline-flex items-center gap-1.5">
          <Copyright className="h-4 w-4 shrink-0" />
          <span> · Armin Boleń · {year} · Built in Poland</span>
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          Available for new challenges
        </span>
      </div>
    </footer>
  );
}
