import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { solutions } from "@/data/content";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Agentic AI applied to real business workflows — customer operations, finance reconciliation, compliance, and internal execution.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Solutions"
        title="Agentic AI applied to real business workflows."
        description="We focus on domains where AI agents deliver measurable impact — reducing manual effort, accelerating execution, and maintaining compliance."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group rounded-xl border border-border bg-bg-surface p-8 transition hover:border-accent/40 hover:bg-bg-elevated"
              >
                <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{s.tagline}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.useCases.slice(0, 3).map((uc) => (
                    <li key={uc} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {uc}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
