import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { agenticMaturity } from "@/data/content";

export const metadata = { title: "Agentic AI | Enabridge" };

export default function AgenticAIPage() {
  return (
    <>
      <PageHero
        label="Agentic AI"
        title="AI agents that work within your business — not around it."
        description="Agentic AI goes beyond chatbots and copilots. It means AI that can take actions, make decisions within guardrails, and run multi-step workflows across your systems."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            A staged approach to autonomy
          </h2>
          <p className="mt-4 max-w-2xl text-text-muted leading-relaxed">
            We don&apos;t flip a switch and hand over control. Instead, we introduce agents at the right level of
            autonomy for your team&apos;s comfort and your business&apos;s risk tolerance.
          </p>
          <div className="mt-14 space-y-8">
            {agenticMaturity.map((item, i) => (
              <div key={item.stage} className="grid gap-6 md:grid-cols-[200px_1fr] items-start">
                <div>
                  <span className="text-xs font-medium text-premium">Stage {i + 1}</span>
                  <h3 className="mt-1 text-xl font-semibold text-accent">{item.stage}</h3>
                </div>
                <p className="text-text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            What makes Agentic AI different
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Multi-step execution",
                body: "Agents complete workflows that span multiple systems and decisions — not just single-turn responses.",
              },
              {
                title: "Tool use & integrations",
                body: "Agents connect to your existing systems — APIs, databases, SaaS tools — and take actions on your behalf.",
              },
              {
                title: "Human-in-the-loop",
                body: "For high-stakes actions, agents pause and escalate to human approvers before proceeding.",
              },
              {
                title: "Observable & auditable",
                body: "Every action is logged. Every decision has a rationale. Your team can review, replay, and roll back.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-bg-primary p-8">
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="See how Agentic AI can accelerate your business." />
    </>
  );
}
