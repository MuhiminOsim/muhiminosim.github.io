import { useState } from "react";
import PublicationItem from "../components/PublicationItem";
import { PageHeader, Reveal, Section } from "../components/ui";
import { publications, service, socials } from "../data/profile";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const filters = [
  { key: "all", label: "All" },
  { key: "preprint", label: "Preprints" },
  { key: "conference", label: "Conference" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export default function Publications() {
  useDocumentTitle("Publications");
  const [filter, setFilter] = useState<FilterKey>("all");
  const shown = publications.filter((p) => filter === "all" || p.type === filter);
  const orcid = socials.find((s) => s.kind === "orcid")!;

  return (
    <>
      <PageHeader eyebrow="Publications" title="Papers, preprints & service">
        Also listed on{" "}
        <a href={orcid.href} target="_blank" rel="noreferrer" className="link">
          ORCID ({orcid.handle})
        </a>
        .
      </PageHeader>

      <Section
        title="Publications"
        aside={
          <div
            role="tablist"
            aria-label="Filter publications"
            className="flex gap-1 rounded-full border border-line bg-surface p-0.5"
          >
            {filters.map((f) => {
              const count =
                f.key === "all"
                  ? publications.length
                  : publications.filter((p) => p.type === f.key).length;
              return (
                <button
                  key={f.key}
                  role="tab"
                  type="button"
                  aria-selected={filter === f.key}
                  onClick={() => setFilter(f.key)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    filter === f.key ? "bg-ink text-bg" : "text-muted hover:text-ink"
                  }`}
                >
                  {f.label} <span className="opacity-60">{count}</span>
                </button>
              );
            })}
          </div>
        }
      >
        <div className="space-y-4">
          {shown.map((p) => (
            <Reveal key={p.id}>
              <PublicationItem pub={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Talks & peer review">
        <ul className="divide-y divide-line">
          {service.map((s) => (
            <li
              key={s.title}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <span className="w-12 shrink-0 font-mono text-sm text-muted">{s.year}</span>
              <div>
                <p className="font-medium">{s.title}</p>
                <p className="text-sm text-muted">{s.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
