import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { trustGovernance } from "@/data/content";

export const metadata = { title: "Trust & Governance | Enabridge" };

export default function TrustGovernancePage() {
  return (
    <>
      <PageHero
        label="Trust & Governance"
        title="Safety is not a feature — it is the architecture."
        description="Every agent we deploy is built with operational safety as a first-class concern. Governance is not an afterthought — it is how we design."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustGovernance.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-bg-surface p-8">
                <h3 className="text-lg font-semibold text-accent">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Our governance principles
          </h2>
          <div className="mt-10 space-y-8">
            {[
              { title: "Least privilege by default", body: "Agents start with minimal permissions and earn broader access through demonstrated reliability." },
              { title: "Transparency over black boxes", body: "Every agent decision can be inspected, explained, and replayed by your team." },
              { title: "Fail safe, not fail silent", body: "When agents encounter ambiguity, they pause and escalate rather than guessing." },
              { title: "Continuous monitoring", body: "Performance, accuracy, and safety metrics are tracked in real time with alerting." },
            ].map((p) => (
              <div key={p.title} className="border-b border-border pb-8 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold text-text-primary">{p.title}</h3>
                <p className="mt-2 text-text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
