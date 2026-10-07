import { ExternalLink, Users } from "lucide-react";
import { Chip, PageHeader, Reveal, Section, StatusBadge } from "../components/ui";
import { research, researchInterests } from "../data/profile";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Research() {
  useDocumentTitle("Research");
  return (
    <>
      <PageHeader eyebrow="Research" title="Efficient, robust vision for event cameras">
        Event cameras report changes in brightness as sparse, asynchronous spikes instead of frames.
        I study models built for that kind of signal: spiking neural networks and state-space models
        that stay small, work at any resolution, and hold up against real sensor imperfections.
      </PageHeader>

      <Section title="Interests">
        <div className="flex flex-wrap gap-2">
          {researchInterests.map((i) => (
            <Chip key={i} tone="accent">
              {i}
            </Chip>
          ))}
        </div>
      </Section>

      <Section title="Projects" aside={`${research.length} projects`}>
        <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
          {research.map((r, i) => (
            <li key={r.title} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-bg sm:-left-[39px] ${
                  r.status === "ongoing" ? "bg-emerald-500" : "bg-accent"
                }`}
              />
              <Reveal delay={i * 0.05}>
                <article className="card p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <StatusBadge status={r.status} />
                    <span className="font-mono text-xs text-muted">{r.period}</span>
                    <span className="text-xs text-muted">· {r.role}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-medium leading-snug sm:text-2xl">
                    {r.title}
                  </h3>
                  <p className="mt-2 flex items-start gap-2 text-sm text-muted">
                    <Users className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {r.people}
                  </p>
                  <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed">
                    {r.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  {r.links && (
                    <div className="mt-5 flex gap-2">
                      {r.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link inline-flex items-center gap-1 text-sm"
                        >
                          {l.label} <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
