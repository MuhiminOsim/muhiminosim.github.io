import { useEffect } from "react";
import { person } from "../data/profile";

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} · ${person.name}`
      : `${person.name}: ML Researcher & Software Engineer`;
  }, [title]);
}
