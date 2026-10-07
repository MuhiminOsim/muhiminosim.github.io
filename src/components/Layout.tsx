import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { person, socials } from "../data/profile";
import SocialIcon from "./SocialIcon";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/competitive", label: "Competitive" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
        scrolled || open ? "border-line bg-bg/85" : "border-transparent bg-bg/60"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-ink focus:px-3 focus:py-1.5 focus:text-bg"
      >
        Skip to content
      </a>
      <nav
        className="container-page flex h-16 items-center justify-between gap-4"
        aria-label="Main"
      >
        <Link to="/" onClick={() => setOpen(false)} className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-serif text-sm font-semibold text-bg transition-transform group-hover:rotate-[-6deg]">
            MI
          </span>
          <span className="font-serif text-lg font-medium tracking-tight">{person.shortName}</span>
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-accent-soft"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    {item.label}
                  </>
                )}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={person.blogUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-0.5 rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-ink"
            >
              Blog <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full border border-line bg-surface p-2 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line xl:hidden"
          >
            <ul className="container-page grid gap-1 py-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-2.5 text-base ${
                        isActive ? "bg-accent-soft text-accent" : "text-ink hover:bg-surface"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href={person.blogUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 rounded-xl px-3 py-2.5 text-base text-ink hover:bg-surface"
                >
                  Blog <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  const shown = socials.filter((s) =>
    ["email", "github", "linkedin", "orcid", "codeforces", "x", "blog"].includes(s.kind),
  );
  return (
    <footer className="mt-20 border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-lg">{person.name}</p>
          <p className="mt-1 text-sm text-muted">
            {person.location} · Last updated {person.lastUpdated}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {shown.map((s) => (
            <li key={s.kind}>
              <a
                href={s.href}
                target={s.kind === "email" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-ink/30 hover:text-ink"
              >
                <SocialIcon kind={s.kind} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          onClick={() => window.scrollTo({ top: 0 })}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-30 grid h-10 w-10 place-items-center rounded-full border border-line bg-surface shadow-md transition-transform hover:-translate-y-0.5"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <motion.main
        id="main"
        key={pathname}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="container-page flex-1"
      >
        <Outlet />
      </motion.main>
      <Footer />
      <BackToTop />
    </div>
  );
}
