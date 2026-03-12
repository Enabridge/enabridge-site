import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { deliveryPhases } from "@/data/content";

export const metadata: Metadata = {
  title: "How We Work",
  description: "From opportunity scan to production in weeks. Enabridge follows a structured delivery model designed for speed without sacrificing safety.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        label="How We Work"
        title="From opportunity to production — with guardrails at every step."
        description="Our delivery model is designed for speed without sacrificing safety. Every engagement follows a structured path from discovery to scale."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <div className="space-y-0">
            {deliveryPhases.map((phase, i) => (
              <div
                key={phase.title}
                className="grid gap-8 md:grid-cols-[240px_1fr] items-start border-b border-border py-12 first:pt-0 last:border-0 last:pb-0"
              >
                <div>
                  <span className="text-xs font-medium tracking-wide text-premium">Phase {i + 1}</span>
                  <h3 className="mt-2 text-xl font-semibold text-text-primary">{phase.title}</h3>
                  <p className="mt-1.5 text-sm font-medium text-accent">{phase.timeline}</p>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-muted leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">Deliverables</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            What you get at each stage
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "After the scan", items: ["Process maps", "ROI projections", "Risk assessment", "Prioritized pilot plan"] },
              { title: "After the pilot", items: ["Working agent in production", "Integration documentation", "Audit trail setup", "Team training"] },
              { title: "During scale", items: ["New workflow agents", "Performance dashboards", "Governance reviews", "Continuous improvement"] },
            ].map((col) => (
              <div key={col.title} className="rounded-xl border border-border bg-bg-primary p-8">
                <h3 className="text-lg font-semibold text-accent">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
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

      <CTABanner headline="Ready to start with an Agentic Opportunity Scan?" />
    </>
  );
}
