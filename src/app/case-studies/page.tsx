import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { caseStudies } from "@/data/content";

export const metadata = { title: "Case Studies | Enabridge" };

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="Case Studies"
        title="Real systems, shipped and running in production."
        description="We measure success by what&apos;s live — not by demos or slide decks. Here are systems we&apos;ve built and delivered."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group rounded-xl border border-border bg-bg-surface p-8 transition hover:border-accent/40"
              >
                <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition">
                  {cs.title}
                </h3>
                <p className="mt-3 text-sm text-text-muted">{cs.tagline}</p>
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

      <CTABanner />
    </>
  );
}
