import { ArrowLeft, ArrowUpRight, Check, Link2 } from "lucide-react";
import { Link } from "react-router-dom";
import ProblemSettingList from "../components/ProblemSettingList";
import { PageHeader, Reveal } from "../components/ui";
import { person } from "../data/profile";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useCopy } from "../lib/clipboard";
import { PROBLEM_SETTING_SOURCE } from "../lib/problemSetting";

export default function ProblemSetting() {
  useDocumentTitle("Problem Setting");
  const { copied, copy } = useCopy();
  const url = `${person.siteUrl}/problem-setting`;

  return (
    <>
      <PageHeader eyebrow="Problem setting & judging" title="Problems I've set">
        Problems I've written for ICPC regional contests in Bangladesh and India, and for national
        and inter-university programming contests in Bangladesh, as a member of the Bangladesh
        Association of Problem Setters (BAPS).
      </PageHeader>

      <Reveal>
        <div className="mb-10 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => copy(url)}
            className="btn-primary"
            aria-live="polite"
          >
            {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
            {copied ? "Link copied" : "Copy link"}
          </button>
          <a href={PROBLEM_SETTING_SOURCE} target="_blank" rel="noreferrer" className="btn-ghost">
            Source on GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link to="/competitive" className="btn-ghost">
            <ArrowLeft className="h-4 w-4" /> Competitive programming
          </Link>
        </div>
      </Reveal>

      <ProblemSettingList />
    </>
  );
}
