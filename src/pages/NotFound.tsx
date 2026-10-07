import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found");
  return (
    <section className="flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-5xl font-medium tracking-tight">
        This page doesn't exist.
      </h1>
      <p className="mt-4 max-w-md text-muted">The link may be broken or the page may have moved.</p>
      <Link to="/" className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" /> Back home
      </Link>
    </section>
  );
}
