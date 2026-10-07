import { ArrowRight, ArrowUpRight, Download, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import portrait from "../assets/muhiminul.png";
import PublicationItem from "../components/PublicationItem";
import SocialIcon from "../components/SocialIcon";
import { Chip, Reveal, Section, Stat } from "../components/ui";
import {
  currently,
  highlights,
  person,
  publications,
  researchInterests,
  skills,
  socials,
} from "../data/profile";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const explore = [
  {
    to: "/research",
    title: "Research",
    text: "Spiking–Mamba hybrids for event cameras, robustness benchmarks, and ML for healthcare.",
  },
  {
    to: "/publications",
    title: "Publications",
    text: "A preprint under review at ICLR 2027, an IEEE conference paper, and peer review.",
  },
  {
    to: "/experience",
    title: "Experience",
    text: "R&D engineering in real-time CV and GPU rendering, plus university teaching.",
  },
  {
    to: "/projects",
    title: "Projects",
    text: "Real-time Android vision apps, plus Stock Alpha Terminal, a quant analysis web app for the DSE.",
  },
  {
    to: "/competitive",
    title: "Competitive programming",
    text: "Codeforces Candidate Master, CodeChef 5★, and ICPC regional problem setter.",
  },
  {
    to: "/education",
    title: "Education",
    text: "M.Sc. at Jahangirnagar University and B.Sc. at KUET with four Dean's Awards.",
  },
];

const heroSocials = ["github", "linkedin", "orcid", "codeforces"] as const;

export default function Home() {
  useDocumentTitle();

  return (
    <>
      {/* Hero */}
      <section className="relative grid items-center gap-10 pb-12 pt-12 sm:pt-20 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-[420px] opacity-60 [background-image:radial-gradient(rgb(var(--line))_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]"
        />
        <Reveal>
          <p className="eyebrow">{person.roles.join(" · ")}</p>
          <h1 className="mt-4 font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight sm:text-6xl">
            {person.name}
          </h1>
          <p className="mt-5 max-w-xl font-serif text-xl italic leading-snug text-muted sm:text-2xl">
            {person.headline}
          </p>
          <p className="mt-6 flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="h-4 w-4" aria-hidden="true" /> {person.location}
            <span className="mx-1.5 text-line">|</span>
            <span>
              a.k.a. <span className="text-ink">{person.nickname}</span>
            </span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/research" className="btn-primary">
              Explore my research <ArrowRight className="h-4 w-4" />
            </Link>
            {person.cvUrl && (
              <a href={person.cvUrl} className="btn-ghost" target="_blank" rel="noreferrer">
                <Download className="h-4 w-4" /> Download CV
              </a>
            )}
            <Link to="/contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>

          <ul className="mt-8 flex gap-2">
            {heroSocials.map((kind) => {
              const s = socials.find((x) => x.kind === kind)!;
              return (
                <li key={kind}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-ink/30 hover:text-ink"
                  >
                    <SocialIcon kind={kind} />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto w-full max-w-[320px] lg:max-w-[360px]">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full border border-dashed border-accent/40"
            />
            <div className="aspect-square overflow-hidden rounded-full bg-accent-soft shadow-xl ring-1 ring-line">
              <img
                src={portrait}
                alt={`Portrait of ${person.name}`}
                width={400}
                height={400}
                className="h-full w-full scale-[1.06] object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Highlights */}
      <Reveal>
        <div className="card grid grid-cols-2 gap-6 p-6 sm:p-8 md:grid-cols-4">
          {highlights.map((h) => (
            <Stat key={h.label} {...h} />
          ))}
        </div>
      </Reveal>

      {/* About + Currently */}
      <div className="grid gap-8 pt-6 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <Section title="About">
          <Reveal>
            <p className="max-w-[65ch] text-[1.05rem] leading-relaxed text-ink/90">
              {person.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {researchInterests.map((i) => (
                <Chip key={i} tone="accent">
                  {i}
                </Chip>
              ))}
            </div>
          </Reveal>
        </Section>
        <Section title="Currently">
          <Reveal>
            <ul className="space-y-4">
              {currently.map((c) => (
                <li
                  key={c.label}
                  className="grid grid-cols-[6.5rem_1fr] gap-3 text-sm leading-relaxed"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {c.label}
                  </span>
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      </div>

      {/* Featured publication */}
      <Section
        title="Featured publication"
        aside={
          <Link to="/publications" className="link inline-flex items-center gap-1">
            All publications <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        }
      >
        <Reveal>
          <PublicationItem pub={publications[0]} />
        </Reveal>
      </Section>

      {/* Explore */}
      <Section title="Explore">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {explore.map((e, i) => (
            <Reveal key={e.to} delay={i * 0.04}>
              <Link
                to={e.to}
                className="card group flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-xl font-medium">{e.title}</h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{e.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Toolbox">
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((g) => (
            <Reveal key={g.group}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                {g.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
