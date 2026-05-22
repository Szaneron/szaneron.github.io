export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="section-inner py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[11px] tracking-widest uppercase text-muted">
          Armin Boleń · {year}
        </span>
        <span className="font-mono text-[11px] text-muted">
          Built with React + Tailwind
        </span>
      </div>
    </footer>
  );
}
