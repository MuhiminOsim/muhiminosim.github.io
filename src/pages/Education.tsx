import { ArrowUpRight, Award, GraduationCap } from "lucide-react";
import algoexpertLogo from "../assets/algoexpert_logo.png";
import dcLogo from "../assets/DC_logo.png";
import dlaiLogo from "../assets/deeplearning_ai_logo.png";
import icpcLogo from "../assets/icpc_logo.png";
import kuetLogo from "../assets/kuet_logo.png";
import stanfordLogo from "../assets/stanford_logo.png";
import { PageHeader, Reveal, Section } from "../components/ui";
import { certifications, education, honors } from "../data/profile";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const schoolLogos = { kuet: kuetLogo, dc: dcLogo } as const;
const certLogos = {
  stanford: stanfordLogo,
  dlai: dlaiLogo,
  algoexpert: algoexpertLogo,
  icpc: icpcLogo,
} as const;

export default function Education() {
  useDocumentTitle("Education");
  return (
    <>
      <PageHeader eyebrow="Education" title="Education & honors" />

      <Section title="Degrees">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {education.map((d, i) => (
            <Reveal key={d.school} delay={i * 0.05} className="h-full">
              <article className="card flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-line bg-white p-2">
                    {d.logo ? (
                      <img
                        src={schoolLogos[d.logo]}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <GraduationCap className="h-7 w-7 text-[#26469f]" aria-hidden="true" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-muted">{d.period}</p>
                    <h3 className="mt-1 font-serif text-xl font-medium leading-snug">
                      {d.degree} in {d.field}
                    </h3>
                    <a
                      href={d.url}
                      target="_blank"
                      rel="noreferrer"
                      className="link mt-1 inline-block text-sm"
                    >
                      {d.school}
                      <ArrowUpRight className="ml-0.5 inline h-3.5 w-3.5 align-[-2px]" />
                    </a>
                  </div>
                </div>
                <p className="mt-5 inline-flex self-start rounded-lg bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent">
                  {d.grade}
                </p>
                {d.notes.length > 0 && (
                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
                    {d.notes.map((n) => (
                      <li key={n} className="flex gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Certifications & licenses">
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((c) => (
            <Reveal key={c.title} className="h-full">
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="card group flex h-full items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
              >
                <img
                  src={certLogos[c.logo]}
                  alt=""
                  className="h-12 w-12 shrink-0 rounded-lg border border-line bg-white object-contain p-1.5"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-muted">{c.issuer}</p>
                  <p className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-accent">
                    {c.cta} <ArrowUpRight className="h-3 w-3" />
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Honors & awards">
        <ul className="divide-y divide-line">
          {honors.map((h) => (
            <li key={h.title} className="flex gap-4 py-4">
              <Award className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div className="flex-1 sm:flex sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <p className="font-medium">{h.title}</p>
                  <p className="text-sm text-muted">{h.detail}</p>
                </div>
                <p className="mt-1 shrink-0 font-mono text-sm text-muted sm:mt-0">{h.year}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
