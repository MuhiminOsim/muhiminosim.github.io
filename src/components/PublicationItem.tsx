import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, ExternalLink, Quote } from "lucide-react";
import { Fragment, useState } from "react";
import { selfAuthor, type Publication } from "../data/profile";
import { useCopy } from "../lib/clipboard";
import { StatusBadge } from "./ui";

export default function PublicationItem({ pub }: { pub: Publication }) {
  const [showBib, setShowBib] = useState(false);
  const { copied, copy } = useCopy();

  return (
    <article className="card p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge status={pub.type} />
        <span className="font-mono text-xs text-muted">{pub.year}</span>
        {pub.note && <span className="text-xs text-muted">· {pub.note}</span>}
      </div>

      <h3 className="mt-3 font-serif text-xl font-medium leading-snug sm:text-[1.35rem]">
        {pub.title}
      </h3>

      <p className="mt-2 text-sm">
        {pub.authors.map((a, i) => (
          <Fragment key={a}>
            {a === selfAuthor ? (
              <strong className="font-semibold text-ink underline decoration-accent/50 underline-offset-2">
                {a}
              </strong>
            ) : (
              <span className="text-muted">{a}</span>
            )}
            {i < pub.authors.length - 1 && <span className="text-muted">, </span>}
          </Fragment>
        ))}
      </p>
      <p className="mt-1 text-sm italic text-muted">{pub.venue}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {pub.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs font-medium transition-colors hover:border-accent/50 hover:text-accent"
          >
            {l.label} <ExternalLink className="h-3 w-3" />
          </a>
        ))}
        <button
          type="button"
          onClick={() => setShowBib((s) => !s)}
          aria-expanded={showBib}
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs font-medium transition-colors hover:border-accent/50 hover:text-accent"
        >
          <Quote className="h-3 w-3" /> {showBib ? "Hide" : "Cite"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {showBib && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="relative mt-4 rounded-xl border border-line bg-bg">
              <button
                type="button"
                onClick={() => copy(pub.bibtex)}
                className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-md border border-line bg-surface px-2 py-1 text-xs"
              >
                {copied ? (
                  <Check className="h-3 w-3 text-emerald-600" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
                {copied ? "Copied" : "Copy BibTeX"}
              </button>
              <pre className="overflow-x-auto p-4 pr-28 font-mono text-[12px] leading-relaxed text-muted">
                {pub.bibtex}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
