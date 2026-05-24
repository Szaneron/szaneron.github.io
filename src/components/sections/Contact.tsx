import { useState, useEffect, type ReactNode, type FormEvent } from 'react';
import {
  MapPin,
  Calendar,
  CalendarPlus,
  FileText,
  Download,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Loader2,
  MoveRight,
} from 'lucide-react';
import { getCalApi } from '@calcom/embed-react';
import SectionEyebrow from '@components/ui/section-eyebrow';
import Toast from '@components/ui/toast';
import { AUTHOR } from '@/data/author';
import { WEB3FORMS_ENDPOINT, WEB3FORMS_PUBLIC_KEY } from '@/config/web3forms';

// Cal.com namespace for the intro call popup
const CAL_NAMESPACE = 'intro-call';

// Constants
const SUBJECTS = [
  { key: 'A', label: 'Job proposal' },
  { key: 'B', label: 'Collaboration' },
  { key: 'C', label: 'Saying hi' },
  { key: 'D', label: 'Other' },
] as const;

const MSG_MAX = 800;

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// Brand icon SVGs
const IconGithub = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconLinkedin = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Social data
const SOCIALS = [
  {
    href: AUTHOR.github,
    icon: <IconGithub className="w-4 h-4" />,
    label: 'GitHub',
    value: '/szaneron',
  },
  {
    href: AUTHOR.linkedin,
    icon: <IconLinkedin className="w-4 h-4" />,
    label: 'LinkedIn',
    value: 'in/armin-bolen',
  },
] as const;

// Sub-components
function SocialRow({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-3.5 p-4 text-ink border-b border-line overflow-hidden transition-all duration-250 hover:bg-bg-3 hover:pl-5"
    >
      {/* Accent bar */}
      <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />

      {/* Icon container */}
      <span className="w-8 h-8 inline-flex items-center justify-center border border-line-2 rounded shrink-0 text-ink-2 transition-colors duration-250 group-hover:text-accent group-hover:border-accent">
        {icon}
      </span>

      {/* Label + value */}
      <span className="flex-1 flex flex-col gap-0.5 min-w-0">
        <span className="font-mono text-xxs text-ink-3 uppercase tracking-[0.12em]">{label}</span>
        <span className="text-sm font-medium tracking-tight truncate transition-colors duration-250 group-hover:text-accent">
          {value}
        </span>
      </span>

      {/* External link icon */}
      <ExternalLink className="w-3.5 h-3.5 text-ink-3 shrink-0 transition-all duration-250 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

// Success screen — replaces the form body after a successful submission
function FormSuccess({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-8 py-16 text-center">
      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
        <CheckCircle className="w-7 h-7 text-accent" />
      </div>

      {/* Copy */}
      <div className="flex flex-col gap-2">
        <p className="font-mono text-xs text-accent uppercase tracking-[0.14em]">
          // Transmission received
        </p>
        <h3 className="text-2xl font-medium tracking-tight">Message sent</h3>
        <p className="text-sm text-ink-2 max-w-[28ch] mx-auto leading-relaxed">
          I'll get back to you within 24 hours.
        </p>
      </div>

      {/* Reset action */}
      <button
        type="button"
        onClick={onReset}
        className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 border border-ink bg-ink text-bg rounded-full font-mono text-xs font-medium tracking-wide overflow-hidden transition-colors duration-300 hover:border-accent cursor-pointer"
      >
        <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-(--ease)" />
        <span className="relative z-10 inline-flex items-center gap-2.5">
          Send another
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-1" />
        </span>
      </button>
    </div>
  );
}

// Main component
export default function Contact() {
  const [subject, setSubject] = useState<string>('Job proposal');
  const [msgLen, setMsgLen] = useState(0);
  const [txId, setTxId] = useState('0001');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [cvLoading, setCvLoading] = useState(false);
  const [cvError, setCvError] = useState(false);
  const [cvSuccess, setCvSuccess] = useState(false);

  // Fetch-on-demand CV download — no direct <a href> in HTML so crawlers
  // cannot discover or index the PDF. Always fetches from the external R2 URL.
  const handleCvDownload = async () => {
    if (cvLoading) return;
    setCvLoading(true);
    setCvError(false);
    setCvSuccess(false);
    try {
      const res = await fetch(AUTHOR.cvUrl);
      if (!res.ok) throw new Error(`CV fetch failed: ${res.status}`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = AUTHOR.cvFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setCvSuccess(true);
    } catch {
      setCvError(true);
    } finally {
      setCvLoading(false);
    }
  };

  const year = new Date().getFullYear();

  // Always shows author's timezone (Europe/Warsaw), not the visitor's
  const warsawGmt =
    new Intl.DateTimeFormat('en', {
      timeZone: 'Europe/Warsaw',
      timeZoneName: 'shortOffset',
    })
      .formatToParts(new Date())
      .find(p => p.type === 'timeZoneName')?.value ?? 'GMT+1';

  // Randomise transmission ID on mount
  useEffect(() => {
    setTxId(String(Math.floor(1000 + Math.random() * 8999)));
  }, []);

  // Cal.com popup — initialise once with design-system colours
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      // Map portfolio design tokens to Cal.com CSS variables
      const vars: Record<string, string> = {
        'cal-brand': '#ff6b3d',
        'cal-brand-emphasis': '#c84a22',
        'cal-brand-text': '#0a0a0a',
        'cal-bg': '#0a0a0a',
        'cal-bg-emphasis': '#111111',
        'cal-bg-subtle': '#111111',
        'cal-text': '#f5f5f4',
        'cal-text-emphasis': '#f5f5f4',
        'cal-text-subtle': '#8a8783',
        'cal-border': '#1f1f1f',
        'cal-border-emphasis': '#2a2a2a',
        'cal-border-subtle': '#1f1f1f',
        'cal-border-booker': '#2a2a2a',
      };
      cal('ui', {
        theme: 'dark',
        cssVarsPerTheme: { dark: vars, light: vars },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
      // Preload popup iframe in the background so it opens without a spinner
      cal('preload', { calLink: AUTHOR.calUrl.replace('https://cal.com/', '') });
    })();
  }, []);

  // Called by the "Send another" button in the success screen.
  // The form DOM was already reset in handleSubmit, so we only flip the status.
  const resetForm = () => {
    setStatus('idle');
    setErrorMsg('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Build the email subject from the selected topic
    const rawTopic = (formData.get('topic') as string) || 'New message';
    formData.set('subject', `Portfolio Contact: ${rawTopic}`);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
      });

      const data = (await res.json()) as { success: boolean; message?: string };

      if (data.success) {
        // Reset controlled state before transitioning to success screen
        form.reset();
        setSubject('Job proposal');
        setMsgLen(0);
        setStatus('success');
      } else {
        setErrorMsg(data.message ?? 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';

  return (
    <section id="contact" className="section-pad">
      <div className="section-inner space-y-8 sm:space-y-14">
        <SectionEyebrow num="07" label="Contact" />

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-end">
          <h2 className="reveal text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium leading-none tracking-tighter">
            Let's build something
            <br />
            worth <span className="text-accent">shipping.</span>
          </h2>

          <p className="reveal font-mono text-xs sm:text-sm leading-relaxed text-ink-3 lg:justify-self-end lg:max-w-xs">
            Open to mid full stack roles, contract work, and partnerships. Start a transmission
            below and I will get back to you.
          </p>
        </div>

        {/* Grid: form + sidebar */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 lg:gap-4">
          {/* ----------------------------------------------------------------
              Form card
          ---------------------------------------------------------------- */}
          <form
            id="contact-form"
            noValidate
            onSubmit={handleSubmit}
            className="relative bg-bg-2 border border-line p-8 flex flex-col overflow-hidden"
          >
            {/* Web3Forms — access key (public by design, never the email itself) */}
            <input type="hidden" name="access_key" value={WEB3FORMS_PUBLIC_KEY ?? ''} />
            <input type="hidden" name="from_name" value="szaneron.github.io" />

            {/* Honeypot — invisible bot trap: real users never see or touch this field;
                automated form-fillers often do, which Web3Forms uses to reject spam. */}
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Orange accent strip at top */}
            <span
              className="absolute top-0 left-0 right-0 h-0.5 pointer-events-none"
              style={{
                background:
                  'linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent) 80px, var(--color-line-2) 80px, var(--color-line-2) 100%)',
              }}
            />

            {/* Form header — always visible */}
            <div className="flex justify-between items-center gap-3 flex-wrap pb-6 sm:pb-8 mb-6 sm:mb-8 border-b border-dashed border-line-2 font-mono text-xs uppercase tracking-[0.14em]">
              <span className="flex items-center gap-2.5 text-ink-2">
                <span className="relative inline-flex shrink-0">
                  {!isSuccess && (
                    <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-accent opacity-60" />
                  )}
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {isSuccess ? 'Transmission Sent' : 'New Transmission'}
              </span>
              <span className="text-ink-3 text-xs tracking-[0.06em]">
                // {year}-CT-{txId}
              </span>
            </div>

            {/* -----------------------------------------------------------------
                Body: success screen OR form fields
            ----------------------------------------------------------------- */}
            {isSuccess ? (
              <FormSuccess onReset={resetForm} />
            ) : (
              <>
                {/* Row: 01 Name + 02 Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-6">
                  <label className="flex flex-col">
                    <span className="flex items-center gap-2.5 font-mono text-xs text-ink-3 uppercase tracking-widest mb-2">
                      <span className="text-accent font-medium">01</span>
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      disabled={isLoading}
                      placeholder="How should I address you?"
                      className="w-full bg-transparent text-ink text-sm border-0 border-b border-line-2 rounded-none px-0.5 py-3 outline-none transition-colors duration-250 placeholder:text-muted hover:border-ink-3 focus:border-accent appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </label>

                  <label className="flex flex-col">
                    <span className="flex items-center gap-2.5 font-mono text-xs text-ink-3 uppercase tracking-widest mb-2">
                      <span className="text-accent font-medium">02</span>
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      disabled={isLoading}
                      placeholder="Where should I reply?"
                      className="w-full bg-transparent text-ink text-sm border-0 border-b border-line-2 rounded-none px-0.5 py-3 outline-none transition-colors duration-250 placeholder:text-muted hover:border-ink-3 focus:border-accent appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </label>
                </div>

                {/* 03 Subject chips */}
                <fieldset className="border-0 p-0 m-0 mb-6" disabled={isLoading}>
                  <legend className="flex items-center gap-2.5 font-mono text-xs text-ink-3 uppercase tracking-widest mb-5">
                    <span className="text-accent font-medium">03</span>
                    What's this about?
                  </legend>
                  <div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-2"
                    role="radiogroup"
                    aria-label="Subject"
                  >
                    {SUBJECTS.map(({ key, label }) => (
                      <label key={key} className="group relative cursor-pointer select-none">
                        <input
                          type="radio"
                          name="topic"
                          value={label}
                          checked={subject === label}
                          onChange={() => setSubject(label)}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <span
                          className={[
                            'flex items-center gap-3 p-2.5 border rounded-sm text-sm font-medium whitespace-nowrap transition-all duration-200',
                            subject === label
                              ? 'border-accent text-ink bg-accent/6'
                              : 'bg-bg border-line-2 text-ink-2 group-hover:border-line-3 group-hover:text-ink-2 group-hover:bg-bg-2',
                          ].join(' ')}
                        >
                          <span
                            className={[
                              'font-mono text-xs w-4 h-4 inline-flex items-center justify-center border rounded-sm shrink-0 transition-all duration-200',
                              subject === label
                                ? 'bg-accent text-bg border-accent'
                                : 'text-ink-3 border-line-2 group-hover:border-line-3 group-hover:text-ink-2',
                            ].join(' ')}
                          >
                            {key}
                          </span>
                          {label}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* 04 Message */}
                <label className="flex flex-col">
                  <span className="flex items-center gap-2.5 font-mono text-xs text-ink-3 uppercase tracking-widest mb-2">
                    <span className="text-accent font-medium">04</span>
                    Message
                    <span
                      className={[
                        'ml-auto font-mono text-xs normal-case transition-colors duration-250',
                        msgLen > MSG_MAX * 0.85 ? 'text-accent' : 'text-ink-3',
                      ].join(' ')}
                    >
                      {msgLen} / {MSG_MAX}
                    </span>
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    maxLength={MSG_MAX}
                    required
                    disabled={isLoading}
                    placeholder="What is on your mind? Share the core details and objectives."
                    onChange={e => setMsgLen(e.target.value.length)}
                    className="scrollbar-theme w-full bg-transparent text-ink text-sm border-0 border-b border-line-2 rounded-none px-0.5 py-3 outline-none resize-none leading-relaxed transition-colors duration-250 placeholder:text-muted hover:border-ink-3 focus:border-accent min-h-36 appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </label>

                {/* Form footer */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-dashed border-line-2 flex justify-between items-center gap-4 flex-wrap">
                  {/* Left: status label + inline error */}
                  <div className="flex flex-col gap-1.5">
                    <span className="flex items-center gap-2.5 leading-none font-mono text-xs text-ink-3 tracking-[0.02em] uppercase">
                      <span className="relative inline-flex shrink-0">
                        <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-accent opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                      </span>
                      Replies within a day
                    </span>
                    {status === 'error' && (
                      <span className="flex items-center gap-1.5 font-mono text-xs text-red-400">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errorMsg}
                      </span>
                    )}
                  </div>

                  {/* Right: submit button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative inline-flex items-center px-6 py-2.5 border border-ink bg-ink text-bg rounded-full font-mono text-sm font-medium tracking-wide cursor-pointer overflow-hidden transition-colors duration-300 hover:border-accent disabled:opacity-60 disabled:pointer-events-none"
                  >
                    <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-(--ease)" />
                    <span className="relative z-10 inline-flex items-center gap-3">
                      {isLoading ? (
                        <>
                          <span>Sending…</span>
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          <span>Send message</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </>
            )}
          </form>

          {/* ----------------------------------------------------------------
              Sidebar
          ---------------------------------------------------------------- */}
          <aside className="flex flex-col gap-4">
            {/* CV card */}
            <div
              className="group relative flex flex-col p-4 border border-accent/35 overflow-hidden transition-all duration-300 hover:border-accent"
              style={{
                background:
                  'linear-gradient(150deg, rgba(255,107,61,0.14) 0%, rgba(255,107,61,0.05) 50%, var(--color-bg-2) 100%)',
              }}
            >
              {/* Solid accent top strip */}
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-accent pointer-events-none" />

              {/* Glow orb — bottom-right */}
              <span
                className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-110"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,107,61,0.18) 0%, rgba(255,107,61,0) 65%)',
                }}
              />

              {/* Header row */}
              <div className="flex justify-between items-center gap-3 font-mono uppercase tracking-[0.14em] mb-4">
                <span className="inline-flex items-center gap-2 px-2.5 py-1.5 border border-accent rounded-sm text-accent font-medium text-xs">
                  <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                  Pinned
                </span>
                <span className="text-ink-3 text-xs tracking-[0.06em]">
                  {AUTHOR.cvFormat.toUpperCase()} · {AUTHOR.cvPageInfo} · {AUTHOR.cvVersion} /{' '}
                  {AUTHOR.cvYear}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-3 mb-4 relative z-10">
                <span className="text-xs text-accent tracking-wider flex items-center gap-3 font-mono">
                  <MoveRight className="w-3.5 h-3.5 shrink-0" /> The fastest path
                </span>

                <span className="text-2xl font-medium leading-tight tracking-tight text-ink">
                  Download CV
                </span>
                <span className="text-sm leading-relaxed text-ink-2">
                  Full commercial history and technical stack overview.
                </span>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center gap-3.5 pt-4 border-t border-accent/20 relative z-10">
                <span className="inline-flex items-center gap-2 font-mono text-xs text-ink-3">
                  <FileText className="w-3.5 h-3.5 shrink-0" />
                  {AUTHOR.cvFileName}
                </span>
                <button
                  type="button"
                  onClick={handleCvDownload}
                  disabled={cvLoading || !AUTHOR.cvUrl}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-accent text-bg font-mono text-xs font-medium tracking-[0.06em] uppercase transition-colors duration-250 group-hover:bg-ink disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {cvLoading ? 'Loading…' : cvError ? 'Retry' : 'Download'}
                  {cvLoading ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Download className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-y-px" />
                  )}
                </button>
              </div>
            </div>

            {/* Call booking card — data-cal-* lets Cal's own popup handle the UI */}
            <button
              type="button"
              data-cal-namespace={CAL_NAMESPACE}
              data-cal-link={AUTHOR.calUrl.replace('https://cal.com/', '')}
              data-cal-config='{"layout":"month_view"}'
              className="group relative flex-1 flex flex-col gap-3 p-4 bg-bg-2 border border-line transition-all duration-250 hover:border-ink-3 hover:bg-bg-3 text-left cursor-pointer"
            >
              {/* Eyebrow row */}
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-accent shrink-0" />
                <span className="font-mono text-xs text-ink-3 uppercase tracking-wider">
                  Prefer to talk?
                </span>
              </div>
              <span className="text-2xl font-medium leading-tight tracking-tight max-w-[18ch]">
                Book a 20 min intro call
              </span>
              <span className="font-mono text-xs text-ink-3 tracking-wider">
                Mon–Fri · CET afternoons
              </span>

              {/* Corner icon */}
              <CalendarPlus className="absolute top-8 right-8 w-4 h-4 text-ink-3 transition-all duration-250 group-hover:text-accent" />
            </button>

            {/* Socials */}
            <div className="flex flex-col bg-bg-2 border border-line">
              {SOCIALS.map(({ href, icon, label, value }) => (
                <SocialRow key={label} href={href} icon={icon} label={label} value={value} />
              ))}

              {/* Location */}
              <div className="relative flex items-center gap-3.5 p-4 text-ink">
                <span className="w-8 h-8 inline-flex items-center justify-center border border-line-2 rounded shrink-0 text-ink-2">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="flex-1 flex flex-col gap-0.5 min-w-0">
                  <span className="font-mono text-xxs text-ink-3 uppercase tracking-[0.12em]">
                    Location
                  </span>
                  <span className="text-sm font-medium tracking-tight">
                    {AUTHOR.location} · {warsawGmt}
                  </span>
                </span>
                {/* Status pulse */}
                <span className="w-2 h-2 rounded-full bg-accent shrink-0 status-pulse" />
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Toast
        open={cvError}
        onClose={() => setCvError(false)}
        variant="error"
        title="Download failed"
        message="Could not fetch CV — check your connection."
      />
      <Toast
        open={cvSuccess}
        onClose={() => setCvSuccess(false)}
        variant="success"
        title="Download success"
        message="CV saved to your downloads folder."
      />
    </section>
  );
}
