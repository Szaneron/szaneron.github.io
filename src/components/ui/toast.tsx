import { useEffect, useRef, useState } from 'react';
import { AlertCircle, CheckCircle, X } from 'lucide-react';

export type ToastVariant = 'error' | 'success';

export interface ToastProps {
  open: boolean;
  onClose: () => void;
  variant?: ToastVariant;
  title: string;
  message?: string;
  /** Auto-dismiss delay in ms. Default: 5000 */
  duration?: number;
}

const VARIANTS = {
  error: {
    Icon: AlertCircle,
    strip: 'bg-red-400',
    iconClass: 'text-red-400',
  },
  success: {
    Icon: CheckCircle,
    strip: 'bg-accent',
    iconClass: 'text-accent',
  },
} as const;

export default function Toast({
  open,
  onClose,
  variant = 'error',
  title,
  message,
  duration = 3000,
}: ToastProps) {
  const { Icon, strip, iconClass } = VARIANTS[variant];

  // Keep a stable ref so the timeout always calls the latest onClose
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Increment key each time the toast opens → remounts the progress bar → restarts animation
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    if (!open) return;
    setProgressKey(k => k + 1);
    const t = setTimeout(() => onCloseRef.current(), duration);
    return () => clearTimeout(t);
  }, [open, duration]);

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={[
        'fixed bottom-4 left-4 right-4 z-50 overflow-hidden',
        'sm:bottom-6 sm:left-auto sm:right-6 sm:w-100',
        'flex items-start gap-3 p-4',
        'bg-bg-2 border border-line',
        'shadow-[0_8px_32px_rgba(0,0,0,0.5)]',
        'transition-all duration-300',
        open
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-2 pointer-events-none',
      ].join(' ')}
    >
      {/* Coloured left accent strip */}
      <span className={`absolute left-0 top-0 bottom-0 w-0.5 ${strip}`} />

      {/* Text block — icon sits inline with title so they're pixel-perfect aligned */}
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <Icon className={`w-4 h-4 ${iconClass} shrink-0`} />
          <span className="font-mono text-xs text-ink font-medium uppercase tracking-widest leading-none">
            {title}
          </span>
        </div>
        {/* pl-6 = icon(16px) + gap-2(8px) — aligns message under the title text */}
        {message && (
          <span className="font-mono text-xs text-ink-3 leading-relaxed pl-6">{message}</span>
        )}
      </div>

      {/* Close button — self-start keeps it pinned to the title row */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss notification"
        className="shrink-0 self-start text-ink-3 hover:text-ink transition-colors duration-200 cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      {/* Auto-dismiss progress bar — remounts on each open via key to restart animation */}
      <span
        key={progressKey}
        className={`absolute bottom-0 left-0 h-0.5 toast-progress ${strip}`}
        style={{ animationDuration: `${duration}ms` }}
      />
    </div>
  );
}
