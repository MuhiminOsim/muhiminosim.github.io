import { ArrowRight, ArrowUpRight, Gavel, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import baps from "../assets/baps.png";
import icpc from "../assets/icpc_logo.png";
import sgipc from "../assets/SGIPC_logo.png";
import toph from "../assets/toph_logo.png";
import ProblemSettingList from "../components/ProblemSettingList";
import SocialIcon from "../components/SocialIcon";
import { PageHeader, Reveal, Section } from "../components/ui";
import { contests, leadership, problemSetting, ratings } from "../data/profile";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { PROBLEM_SETTING_SOURCE } from "../lib/problemSetting";

const settingLogos = [icpc, icpc, baps, toph];

export default function Competitive() {
  useDocumentTitle("Competitive Programming");
  return (
    <>
      <PageHeader eyebrow="Competitive programming" title="Solving and setting problems">
        I've solved more than 2,500 algorithmic problems in C/C++. I now write and judge problems
        for ICPC regionals and national contests in Bangladesh.
      </PageHeader>

      <Section title="Ratings">
        <div className="grid gap-4 sm:grid-cols-3">
          {ratings.map((r, i) => (
            <Reveal key={r.site} delay={i * 0.05}>
              <a
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="card group block p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
              >
                <div className="flex items-center justify-between text-muted">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-ink">
                    <SocialIcon kind={r.kind} className="h-4 w-4" /> {r.site}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-colors group-hover:text-accent" />
                </div>
                <p className="mt-5 font-serif text-5xl font-medium tracking-tight">{r.rating}</p>
                <p className="mt-1 text-sm text-muted">{r.title} · max rating</p>
                <p className="mt-4 inline-flex rounded-md bg-accent-soft px-2 py-1 text-xs font-medium text-accent">
                  {r.percentile}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Problem setting & judging">
        <div className="grid gap-4 sm:grid-cols-2">
          {problemSetting.items.map((p, i) => (
            <Reveal key={p.title}>
              <div className="card flex h-full items-center gap-4 p-5">
                <img
                  src={settingLogos[i]}
                  alt=""
                  className="h-11 w-11 shrink-0 rounded-lg bg-white object-contain p-1"
                />
                <div>
                  <p className="font-medium">{p.title}</p>
                  <p className="text-sm text-muted">{p.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        title="Problems I've set"
        aside={
          <span className="flex flex-wrap gap-4">
            <Link to="/problem-setting" className="link inline-flex items-center gap-1">
              Open as a page <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={PROBLEM_SETTING_SOURCE}
              target="_blank"
              rel="noreferrer"
              className="link inline-flex items-center gap-1"
            >
              Source on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </span>
        }
      >
        <ProblemSettingList />
      </Section>

      <Section title="Contest results">
        <ul className="divide-y divide-line">
          {contests.map((c) => (
            <li key={c.name} className="flex gap-4 py-4">
              <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div className="flex-1">
                <p className="font-medium">{c.name}</p>
                <p className="text-sm text-muted">
                  {c.result}
                  {c.link && (
                    <>
                      {" · "}
                      <a href={c.link} target="_blank" rel="noreferrer" className="link">
                        standings
                      </a>
                    </>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Training & mentorship">
        <ul className="space-y-3">
          {leadership.map((l, i) => (
            <li key={l.org} className="flex items-center gap-4">
              {i === 0 ? (
                <img src={sgipc} alt="" className="h-9 w-9 rounded-full bg-white object-contain" />
              ) : (
                <span className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface">
                  <Gavel className="h-4 w-4 text-muted" aria-hidden="true" />
                </span>
              )}
              <p>
                <span className="font-medium">{l.title}</span>
                <span className="text-muted">, {l.org}</span>
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
