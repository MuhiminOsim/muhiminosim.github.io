import { ArrowUpRight, MapPin } from "lucide-react";
import bdoiLogo from "../assets/bdio_logo.svg";
import ikpcLogo from "../assets/ikpc_logo.jpg";
import kgsLogo from "../assets/KGS_logo.png";
import seuLogo from "../assets/SEU_logo.png";
import sgipcLogo from "../assets/SGIPC_logo.png";
import { Chip, PageHeader, Reveal, Section } from "../components/ui";
import { experience, leadership, volunteering } from "../data/profile";

const logos: Record<string, string> = {
  kgs: kgsLogo,
  seu: seuLogo,
  sgipc: sgipcLogo,
  ikpc: ikpcLogo,
  bdoi: bdoiLogo,
};

function OrgMark({ logo, name }: { logo?: string; name: string }) {
  return (
    <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white">
      {logo && logos[logo] ? (
        <img src={logos[logo]} alt="" className="h-full w-full object-contain p-1" />
      ) : (
        <span className="font-serif text-lg font-semibold text-[#26469f]">
          {name
            .split(/\s+/)
            .filter((w) => /^[A-Z]/.test(w))
            .slice(0, 2)
            .map((w) => w[0])
            .join("")}
        </span>
      )}
    </div>
  );
}
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function ExperiencePage() {
  useDocumentTitle("Experience");
  return (
    <>
      <PageHeader eyebrow="Experience" title="Shipping vision systems & teaching">
        Over four years of R&D engineering on real-time computer vision, GPU rendering and on-device
        ML for apps with more than 50 million users, alongside university teaching.
      </PageHeader>

      <Section title="Work">
        <div className="space-y-6">
          {experience.map((e, i) => (
            <Reveal key={e.org} delay={i * 0.05}>
              <article className="card overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <OrgMark logo={e.logo} name={e.org} />
                      <div>
                        <h3 className="font-serif text-2xl font-medium">{e.role}</h3>
                        <p className="mt-1 text-[0.95rem]">
                          {e.orgUrl ? (
                            <a
                              href={e.orgUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="link inline-flex items-center gap-0.5"
                            >
                              {e.org} <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          ) : (
                            e.org
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-muted sm:text-right">
                      <p className="font-mono">
                        {e.period}
                        {e.current && (
                          <span className="ml-2 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] uppercase text-emerald-700 dark:text-emerald-300">
                            current
                          </span>
                        )}
                      </p>
                      <p className="mt-1 inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {e.location}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 max-w-[65ch] text-muted">{e.summary}</p>

                  {e.metrics && (
                    <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
                      {e.metrics.map((m) => (
                        <div key={m.label} className="bg-bg p-4">
                          <dt className="sr-only">{m.label}</dt>
                          <dd className="font-serif text-2xl font-medium text-accent">{m.value}</dd>
                          <dd className="text-xs text-muted">{m.label}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {e.points.length > 0 && (
                    <ul className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2">
                      {e.points.map((p) => (
                        <li key={p.text} className="text-[0.95rem] leading-relaxed">
                          {p.title && (
                            <span className="block text-sm font-semibold">{p.title}</span>
                          )}
                          <span className={p.title ? "text-muted" : ""}>{p.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Volunteering">
        <div className="space-y-4">
          {volunteering.map((v) => (
            <Reveal key={v.org}>
              <a
                href={v.href}
                target="_blank"
                rel="noreferrer"
                className="card group flex gap-4 p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
              >
                <OrgMark logo={v.logo} name={v.org} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <p className="font-medium">{v.role}</p>
                    <p className="shrink-0 font-mono text-xs text-muted">{v.period}</p>
                  </div>
                  <p className="text-sm text-accent">
                    {v.org} <ArrowUpRight className="inline h-3 w-3" aria-hidden="true" />
                  </p>
                  <p className="mt-1.5 text-sm text-muted">
                    {v.text} <span className="whitespace-nowrap">· {v.place}</span>
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Leadership & mentorship">
        <div className="grid gap-4 sm:grid-cols-3">
          {leadership.map((l) => (
            <Reveal key={l.org}>
              <div className="card h-full p-5">
                <p className="font-medium">{l.title}</p>
                <p className="mt-1 text-sm text-muted">{l.org}</p>
                {l.detail && <p className="mt-2 text-xs text-muted">{l.detail}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
