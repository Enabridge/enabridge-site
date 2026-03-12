import Link from "next/link";

export default function CTABanner({
  headline = "Ready to deploy Agentic AI safely?",
  primaryLabel = "Book a 30-minute Agentic Fit Call",
  primaryHref = "/contact",
  secondaryLabel = "Contact us",
  secondaryHref = "/contact",
}: {
  headline?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
        <div className="rounded-2xl border border-border bg-bg-surface px-8 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {headline}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-text-muted">
            No commitment required. We will assess where Agentic AI fits your workflows and outline a practical path forward.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-accent shadow-lg shadow-primary/20 transition hover:bg-cta-hover hover:shadow-cta-hover/25"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 text-sm font-medium text-text-muted transition hover:border-accent/50 hover:text-accent"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
