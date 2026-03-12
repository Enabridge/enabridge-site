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
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="rounded-2xl border border-border bg-bg-surface px-8 py-14 text-center sm:px-16">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {headline}
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-accent transition hover:bg-cta-hover"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-medium text-text-muted transition hover:border-accent hover:text-accent"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
