import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="pb-10 pt-12 sm:pb-14 sm:pt-20">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {children && (
          <div className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{children}</div>
        )}
      </Reveal>
    </header>
  );
}

export function Section({
  title,
  aside,
  children,
  className = "",
}: {
  title: string;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-8 sm:py-10 ${className}`}>
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-3">
        <h2 className="font-serif text-2xl font-medium tracking-tight">{title}</h2>
        {aside && <div className="text-sm text-muted">{aside}</div>}
      </div>
      {children}
    </section>
  );
}

export function Chip({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "accent";
}) {
  const cls =
    tone === "accent"
      ? "bg-accent-soft text-accent border-transparent"
      : "bg-bg text-muted border-line";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${cls}`}
    >
      {children}
    </span>
  );
}

const statusStyles: Record<string, string> = {
  ongoing: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  "under review": "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  published: "bg-accent-soft text-accent",
  preprint: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  conference: "bg-accent-soft text-accent",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider ${statusStyles[status] ?? "bg-bg text-muted"}`}
    >
      {status === "ongoing" && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {status}
    </span>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}
