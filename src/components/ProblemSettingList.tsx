import { ArrowUpRight, FileText } from "lucide-react";
import { Fragment, useState } from "react";
import { contestCount, problemCount, useProblemSetting, type Inline } from "../lib/problemSetting";

function InlineText({ parts }: { parts: Inline[] }) {
  return (
    <>
      {parts.map((p, i) =>
        typeof p === "string" ? (
          <Fragment key={i}>{p}</Fragment>
        ) : (
          <a key={i} href={p.href} target="_blank" rel="noreferrer" className="link">
            {p.text}
          </a>
        ),
      )}
    </>
  );
}

export default function ProblemSettingList() {
  const { sections, live } = useProblemSetting();
  const [active, setActive] = useState(0);
  const section = sections[Math.min(active, sections.length - 1)];

  if (!section) return null;

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">
          <span className="font-medium text-ink">{problemCount(sections)} problems</span> across{" "}
          <span className="font-medium text-ink">{contestCount(sections)} contests</span>
          <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider">
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${live ? "bg-emerald-500" : "bg-muted/50"}`}
            />
            {live ? "synced from GitHub" : "snapshot"}
          </span>
        </p>
        {sections.length > 1 && (
          <div
            role="tablist"
            aria-label="Contest type"
            className="flex flex-wrap gap-1 rounded-full border border-line bg-surface p-0.5"
          >
            {sections.map((s, i) => (
              <button
                key={s.title}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  i === active ? "bg-ink text-bg" : "text-muted hover:text-ink"
                }`}
              >
                {s.title.replace(/\s*Problem Setting$/i, "").replace(/\s*Contests?\b/gi, "")}
                <span className="ml-1 opacity-60">
                  {s.contests.reduce((n, c) => n + c.problems.length, 0)}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {section.intro.map((p, i) => (
        <p key={i} className="mb-2 max-w-[65ch] text-sm leading-relaxed text-muted">
          <InlineText parts={p} />
        </p>
      ))}

      <ol className="divide-y divide-line">
        {section.contests.map((c) => (
          <li key={c.name + c.href} className="grid py-4 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
            <span className="hidden font-mono text-sm text-muted sm:block">{c.year ?? "—"}</span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group font-medium transition-colors hover:text-accent"
                  >
                    {c.name}
                    <ArrowUpRight
                      className="ml-1 inline h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <span className="font-medium">{c.name}</span>
                )}
                {c.platform && (
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    {c.platform}
                  </span>
                )}
              </div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {c.problems.map((p) => (
                  <li
                    key={p.name}
                    className="inline-flex items-center overflow-hidden rounded-lg border border-line bg-surface text-sm"
                  >
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 transition-colors hover:bg-accent-soft hover:text-accent"
                      >
                        {p.name}
                      </a>
                    ) : (
                      <span className="px-3 py-1.5">{p.name}</span>
                    )}
                    {p.statement && (
                      <a
                        href={p.statement}
                        target="_blank"
                        rel="noreferrer"
                        title={`${p.name}: problem statement (PDF)`}
                        aria-label={`${p.name}: problem statement (PDF)`}
                        className="grid place-items-center self-stretch border-l border-line px-2.5 text-muted transition-colors hover:bg-accent-soft hover:text-accent"
                      >
                        <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      {section.notes.map((p, i) => (
        <p key={i} className="mt-4 max-w-[65ch] text-sm leading-relaxed text-muted">
          <InlineText parts={p} />
        </p>
      ))}
    </div>
  );
}
