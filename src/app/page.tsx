const capabilities = [
  {
    title: "Fast SME onboarding",
    description:
      "Turn business context, SOPs, and team workflows into usable agent setups without a long implementation cycle.",
  },
  {
    title: "Stable by default",
    description:
      "Workflow-first design, clear boundaries, and observable execution instead of fragile magic demos.",
  },
  {
    title: "Security-aware foundations",
    description:
      "Permissioned tools, auditability, and practical controls for businesses that need trust before autonomy.",
  },
];

const principles = [
  "Built for SMEs, not only companies with large platform teams.",
  "Designed around reliability, maintainability, and predictable operations.",
  "Focused on practical AI agents that help teams work, not hype-heavy automation theatre.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-8 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium tracking-[0.18em] text-zinc-500 uppercase">
                Enabridge
              </p>
            </div>
            <a
              href="mailto:hello@enabridge.ai"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              Contact
            </a>
          </header>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-medium tracking-[0.18em] text-zinc-500 uppercase">
                AI agent platform onboarding for SMEs
              </p>
              <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
                Help every SME get an AI agent team without enterprise-level friction.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
                Enabridge gives companies a practical path from interest to implementation —
                onboarding AI agents with clear workflows, stable foundations, and security-aware
                operations from day one.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:hello@enabridge.ai?subject=Enabridge%20demo"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  Request a demo
                </a>
                <a
                  href="#approach"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
                >
                  See the approach
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
              <p className="text-sm font-medium text-zinc-500">What Enabridge optimizes for</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-zinc-700 sm:text-base">
                <li>• Faster onboarding from business process to working agent flow</li>
                <li>• Lower operational overhead for smaller teams</li>
                <li>• Stronger trust through guardrails, visibility, and clear controls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_minmax(0,1.2fr)]">
          <div>
            <p className="text-sm font-medium tracking-[0.18em] text-zinc-500 uppercase">
              Why this approach
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Minimal surface. Serious engineering.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-zinc-600 sm:text-lg">
            <p>
              Most companies do not need more AI hype. They need a straightforward way to deploy
              useful agents that fit their business processes, stay understandable, and do not turn
              into an operational burden.
            </p>
            <p>
              Enabridge is aimed at that middle ground: practical agent systems with enough control
              to be trusted and enough flexibility to create real business leverage.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="rounded-3xl border border-zinc-200 bg-white p-6">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium tracking-[0.18em] text-zinc-500 uppercase">
              Platform principles
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Built for real adoption, not just impressive demos.
            </h2>
          </div>
          <div>
            <ul className="space-y-5 text-base leading-8 text-zinc-600 sm:text-lg">
              {principles.map((item) => (
                <li key={item} className="border-b border-zinc-200 pb-5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="rounded-[2rem] bg-zinc-950 px-8 py-12 text-white sm:px-12 sm:py-16">
            <p className="text-sm font-medium tracking-[0.18em] text-zinc-400 uppercase">
              Next step
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              If you want AI agents in your business, start with a platform designed to be usable.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              Enabridge helps SMEs onboard AI agent capabilities with a practical architecture that
              can evolve over time instead of collapsing under complexity.
            </p>
            <div className="mt-8">
              <a
                href="mailto:hello@enabridge.ai?subject=Talk%20to%20Enabridge"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
              >
                Talk to Enabridge
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
