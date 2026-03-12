import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Company",
  description: "Enabridge bridges the gap between AI capability and business readiness. We focus on practical, production-grade Agentic AI.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        label="Company"
        title="We build AI agents that businesses can actually trust."
        description="Enabridge was founded to bridge the gap between AI capability and business readiness. We focus on practical, production-grade Agentic AI."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">Our mission</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Close the gap between AI hype and production reality
              </h2>
              <p className="mt-6 text-text-muted leading-relaxed">
                We believe AI should accelerate business execution without creating new risks. Too many
                companies are stuck between the hype of AI demos and the reality of deploying agents in
                production environments where mistakes have real consequences.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                Enabridge exists to close that gap. We design and integrate Agentic AI that is
                observable, controllable, and aligned with your business processes from day one.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">Principles</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                What we stand for
              </h2>
              <ul className="mt-8 space-y-5">
                {[
                  "Business outcomes over technology showcases",
                  "Human oversight as a design principle, not a constraint",
                  "Incremental delivery that builds trust over time",
                  "Production-grade engineering from the first sprint",
                  "Transparency in how agents think and act",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-muted leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">Capabilities</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Our expertise
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Agentic AI & LLM Systems", body: "Design and integration of AI agents with tool use, multi-step reasoning, and human-in-the-loop workflows." },
              { title: "Full-Stack Engineering", body: "End-to-end delivery from mobile apps and web platforms to backend APIs and infrastructure." },
              { title: "Compliance & FinTech", body: "Proven delivery in regulated domains including blockchain compliance, KYC, and digital payments." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-bg-primary p-8">
                <h3 className="text-lg font-semibold text-accent">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Let&apos;s talk about what Agentic AI can do for your business." />
    </>
  );
}
