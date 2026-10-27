import { ArrowUpRight, FolderGit2, Globe } from "lucide-react";
import { SiGithub, SiGoogleplay } from "react-icons/si";
import { Chip, PageHeader, Reveal, Section } from "../components/ui";
import { personalProjects, projects, repositories, socials } from "../data/profile";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Projects() {
  useDocumentTitle("Projects");
  const github = socials.find((s) => s.kind === "github")!;
  return (
    <>
      <PageHeader eyebrow="Projects" title="Real-time vision, in people's pockets">
        Production Android apps from Kite Games Studio where I designed the vision, rendering and ML
        pipelines, along with my own personal, academic and open-source work.
      </PageHeader>

      <Section title="Apps I built at Kite Games Studio Ltd.">
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05} className="h-full">
              <article className="card group flex h-full flex-col p-6 transition-shadow hover:shadow-lg">
                <p className="eyebrow">{p.tagline}</p>
                <h3 className="mt-2 font-serif text-2xl font-medium leading-tight">{p.name}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-md bg-accent-soft px-2 py-1 text-xs font-medium text-accent"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 flex-1 space-y-2.5 text-sm leading-relaxed text-muted">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <SiGoogleplay className="h-3.5 w-3.5" aria-hidden="true" /> Google Play
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        title="Personal Projects"
        aside={
          <a
            href={github.href}
            target="_blank"
            rel="noreferrer"
            className="link inline-flex items-center gap-1.5"
          >
            <SiGithub className="h-3.5 w-3.5" aria-hidden="true" /> All repositories
          </a>
        }
      >
        <div className="mb-6 space-y-4">
          {personalProjects.map((p) => (
            <Reveal key={p.name}>
              <article className="card grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr]">
                <div className="flex flex-col">
                  <p className="eyebrow">Personal project · {p.tagline}</p>
                  <h3 className="mt-2 font-serif text-2xl font-medium leading-tight sm:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary mt-6 self-start"
                  >
                    <Globe className="h-4 w-4" aria-hidden="true" /> Visit{" "}
                    {new URL(p.href).hostname}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
                <ul className="space-y-2.5 text-sm leading-relaxed lg:border-l lg:border-line lg:pl-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repositories.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.03} className="h-full">
              <a
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="card group flex h-full flex-col p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <FolderGit2 className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <ArrowUpRight
                    className="h-4 w-4 text-muted transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 break-words font-mono text-sm font-medium">{r.name}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{r.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {r.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
