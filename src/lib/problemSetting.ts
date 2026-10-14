import { useEffect, useState } from "react";
import snapshot from "../data/problem-setting.md?raw";

/**
 * Problem-setting history, parsed from
 * MuhiminOsim/Competitive-Programming/Problem Setting/Problem-Setting-and-Judging.md.
 *
 * A snapshot is bundled at build time (scripts/fetch-problem-setting.mjs); the page then refetches
 * the file from GitHub so new problems show up without a redeploy.
 */

export const PROBLEM_SETTING_SOURCE =
  "https://github.com/MuhiminOsim/Competitive-Programming/blob/master/Problem%20Setting/Problem-Setting-and-Judging.md";
const RAW_URL =
  "https://raw.githubusercontent.com/MuhiminOsim/Competitive-Programming/master/Problem%20Setting/Problem-Setting-and-Judging.md";

/** Inline text split into plain strings and links. */
export type Inline = string | { text: string; href: string };

export type SetProblem = { name: string; href?: string; statement?: string };

export type SetContest = {
  name: string;
  href?: string;
  year?: number;
  platform?: string;
  problems: SetProblem[];
};

export type SetSection = {
  title: string;
  intro: Inline[][];
  contests: SetContest[];
  notes: Inline[][];
};

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function parseInline(text: string): Inline[] {
  const out: Inline[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    if (m.index! > last) out.push(text.slice(last, m.index));
    out.push({ text: m[1], href: m[2] });
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const ACRONYMS = new Set([
  "ICPC",
  "IUPC",
  "NCPC",
  "KUET",
  "UIU",
  "JU",
  "NSUCEC",
  "NHSPC",
  "RUET",
  "AUST",
  "CSE",
  "MIAKI",
]);

/** "ICPC DHAKA 2025 ONLINE PRELIMINARY" -> "ICPC Dhaka 2025 Online Preliminary". */
function tidyName(name: string): string {
  if (name !== name.toUpperCase()) return name;
  return name
    .split(" ")
    .map((w) =>
      w
        .split("-")
        .map((p) => (ACRONYMS.has(p) || !/[A-Z]/.test(p) ? p : p[0] + p.slice(1).toLowerCase()))
        .join("-"),
    )
    .join(" ")
    .replace(/\bBy\b/g, "by");
}

const PLATFORMS: [RegExp, string][] = [
  [/bapsoj\.org/, "BAPS OJ"],
  [/codedrills\.io/, "CodeDrills"],
  [/codemarshal\.org/, "CodeMarshal"],
  [/toph\.co/, "Toph"],
];

function platformOf(href?: string) {
  return href ? PLATFORMS.find(([re]) => re.test(href))?.[1] : undefined;
}

export function parseProblemSetting(md: string): SetSection[] {
  const sections: SetSection[] = [];
  let section: SetSection | undefined;
  let contest: SetContest | undefined;

  for (const raw of md.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;

    if (line.startsWith("## ")) {
      section = {
        title: line.slice(3).replace(/:$/, "").trim(),
        intro: [],
        contests: [],
        notes: [],
      };
      sections.push(section);
      contest = undefined;
      continue;
    }
    if (!section) continue;

    const heading = line.match(/^#{3,6}\s+(.*)$/);
    if (heading) {
      const text = heading[1];
      const link = [...text.matchAll(LINK)][0];
      const name = text.replace(/\s*\(\s*\[[^\]]*\]\([^)]*\)\s*\)\s*/g, "").trim();
      const href = link?.[2];
      contest = {
        name: tidyName(name),
        href,
        year: Number(name.match(/\b(20\d\d)\b/)?.[1]) || undefined,
        platform: platformOf(href),
        problems: [],
      };
      section.contests.push(contest);
      continue;
    }

    const item = line.match(/^\d+\.\s+(.*)$/);
    if (item && contest) {
      const links = [...item[1].matchAll(LINK)];
      const main = links[0];
      const drive = links.find((l) => /drive link/i.test(l[1]));
      contest.problems.push({
        name: main ? main[1] : item[1],
        href: main && main !== drive ? main[2] : undefined,
        statement: drive?.[2],
      });
      continue;
    }

    // Free text: before any contest it's the intro, after contests it's a closing note.
    (section.contests.length ? section.notes : section.intro).push(parseInline(line));
  }

  return sections.filter((s) => s.contests.length || s.intro.length);
}

export function problemCount(sections: SetSection[]) {
  return sections.reduce((n, s) => n + s.contests.reduce((m, c) => m + c.problems.length, 0), 0);
}

export function contestCount(sections: SetSection[]) {
  return sections.reduce((n, s) => n + s.contests.length, 0);
}

const initial = parseProblemSetting(snapshot);

/** Bundled snapshot first, then the live file from GitHub if it parses to something non-empty. */
export function useProblemSetting() {
  const [sections, setSections] = useState(initial);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(RAW_URL, { signal: ctrl.signal, cache: "no-cache" })
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error(String(r.status)))))
      .then((md) => {
        const parsed = parseProblemSetting(md);
        if (problemCount(parsed) > 0) {
          setSections(parsed);
          setLive(true);
        }
      })
      .catch(() => {
        /* keep the bundled snapshot */
      });
    return () => ctrl.abort();
  }, []);

  return { sections, live };
}
