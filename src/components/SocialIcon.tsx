import { Mail, PenLine } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import {
  SiCodechef,
  SiCodeforces,
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinktree,
  SiOrcid,
  SiStackoverflow,
  SiX,
  SiYoutube,
} from "react-icons/si";
import type { SocialKind } from "../data/profile";

function AtCoderIcon({ className }: { className?: string }) {
  // Simple monogram; AtCoder has no icon in common icon sets.
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="currentColor"
        fontFamily="Inter, sans-serif"
      >
        A
      </text>
    </svg>
  );
}

export default function SocialIcon({
  kind,
  className = "h-4 w-4",
}: {
  kind: SocialKind;
  className?: string;
}) {
  switch (kind) {
    case "email":
      return <Mail className={className} aria-hidden="true" />;
    case "github":
      return <SiGithub className={className} aria-hidden="true" />;
    case "linkedin":
      return <FaLinkedin className={className} aria-hidden="true" />;
    case "orcid":
      return <SiOrcid className={className} aria-hidden="true" />;
    case "codeforces":
      return <SiCodeforces className={className} aria-hidden="true" />;
    case "codechef":
      return <SiCodechef className={className} aria-hidden="true" />;
    case "atcoder":
      return <AtCoderIcon className={className} />;
    case "youtube":
      return <SiYoutube className={className} aria-hidden="true" />;
    case "x":
      return <SiX className={className} aria-hidden="true" />;
    case "facebook":
      return <SiFacebook className={className} aria-hidden="true" />;
    case "stackoverflow":
      return <SiStackoverflow className={className} aria-hidden="true" />;
    case "instagram":
      return <SiInstagram className={className} aria-hidden="true" />;
    case "discord":
      return <SiDiscord className={className} aria-hidden="true" />;
    case "linktree":
      return <SiLinktree className={className} aria-hidden="true" />;
    case "blog":
      return <PenLine className={className} aria-hidden="true" />;
  }
}
