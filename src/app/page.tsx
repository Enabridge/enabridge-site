import Link from "next/link";
import {
  trustChips,
  agenticMaturity,
  deliveryPhases,
  whyEnabridge,
  caseStudies,
  trustGovernance,
} from "@/data/content";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-40">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            Agentic AI for Business
          </p>
          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-text-primary sm:text-5xl lg:text-[3.5rem]">
            Agentic AI that accelerates execution — without increasing operational risk.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted">
            We design and integrate AI agents that run real workflows across your systems.
            Measurable business impact with human oversight and production-grade engineering.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-accent shadow-lg shadow-primary/20 transition hover:bg-cta-hover hover:shadow-cta-hover/25"
            >
              Book a 30-minute Agentic Fit Call
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-medium text-text-muted transition hover:border-accent/50 hover:text-accent"
            >
              See our proven deliveries
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap gap-3">
            {trustChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-border bg-bg-surface/80 px-4 py-2 text-xs font-medium tracking-wide text-text-secondary"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Agentic AI maturity */}
      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            What we mean by Agentic AI
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Staged maturity — not a switch you flip overnight.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {agenticMaturity.map((item, i) => (
              <div key={item.stage} className="rounded-xl border border-border bg-bg-primary p-8">
                <span className="text-xs font-medium tracking-wide text-premium">Stage {i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-accent">{item.stage}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productized delivery */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            Productized delivery
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            From opportunity scan to production in weeks — not months.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {deliveryPhases.map((phase) => (
              <div key={phase.title} className="rounded-xl border border-border bg-bg-surface p-8">
                <span className="text-xs font-medium tracking-wide text-premium">{phase.timeline}</span>
                <h3 className="mt-3 text-lg font-semibold text-text-primary">{phase.title}</h3>
                <ul className="mt-5 space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Enabridge */}
      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            Why Enabridge
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Business outcomes first. Technology second.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {whyEnabridge.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-bg-primary p-8">
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            Proven delivery
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Real systems, shipped and running in production.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group rounded-xl border border-border bg-bg-surface p-8 transition hover:border-accent/40 hover:bg-bg-elevated"
              >
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition">
                  {cs.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{cs.tagline}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {cs.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-bg-primary px-3 py-2">
                      <p className="text-sm font-semibold text-accent">{stat.value}</p>
                      <p className="text-xs text-text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Governance */}
      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            Trust & Governance
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Safety is not a feature — it is the architecture.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustGovernance.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-bg-primary p-7">
                <h3 className="text-base font-semibold text-accent">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner />
    </>
  );
}
