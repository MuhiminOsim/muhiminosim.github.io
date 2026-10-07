import { ArrowUpRight, Check, Copy, Download, Mail, MapPin } from "lucide-react";
import SocialIcon from "../components/SocialIcon";
import { PageHeader, Reveal, Section } from "../components/ui";
import { person, socials } from "../data/profile";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useCopy } from "../lib/clipboard";

export default function Contact() {
  useDocumentTitle("Contact");
  const { copied, copy } = useCopy();
  const others = socials.filter((s) => s.kind !== "email");

  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's talk">
        I'm open to research collaborations, Ph.D. opportunities, and conversations about
        event-based vision, efficient deep learning, or competitive programming.
      </PageHeader>

      <Reveal>
        <div className="card flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <p className="eyebrow">Email</p>
            <a
              href={`mailto:${person.email}`}
              className="mt-2 block break-all font-serif text-2xl font-medium hover:text-accent sm:text-3xl"
            >
              {person.email}
            </a>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="h-4 w-4" aria-hidden="true" /> {person.location} (UTC+6)
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${person.email}`} className="btn-primary">
              <Mail className="h-4 w-4" /> Write to me
            </a>
            <button
              type="button"
              onClick={() => copy(person.email)}
              className="btn-ghost"
              aria-live="polite"
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? "Copied" : "Copy address"}
            </button>
            {person.cvUrl && (
              <a href={person.cvUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                <Download className="h-4 w-4" /> CV
              </a>
            )}
          </div>
        </div>
      </Reveal>

      <Section title="Elsewhere">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <li key={s.kind}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="card group flex items-center gap-4 p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-bg text-ink">
                  <SocialIcon kind={s.kind} className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium">{s.label}</span>
                  {s.handle && (
                    <span className="block truncate text-sm text-muted">{s.handle}</span>
                  )}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <p className="text-sm text-muted">References available on request.</p>
    </>
  );
}
