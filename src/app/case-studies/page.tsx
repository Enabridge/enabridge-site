import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { getDictionary, getLocale } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.metadata.caseStudies.title,
    description: dict.metadata.caseStudies.description,
  };
}

export default async function CaseStudiesPage() {
  const dict = getDictionary(await getLocale());
  const caseStudies = dict.caseStudies;

  return (
    <>
      <PageHero
        label={dict.caseStudiesPage.hero.label}
        title={dict.caseStudiesPage.hero.title}
        description={dict.caseStudiesPage.hero.description}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group rounded-xl border border-border bg-bg-surface p-8 transition hover:border-accent/40 hover:bg-bg-elevated"
              >
                <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition">
                  {cs.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {cs.tagline}
                </p>
                <p className="mt-4 inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-accent">
                  {cs.aiStory}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {cs.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg bg-bg-primary px-3 py-2"
                    >
                      <p className="text-sm font-semibold text-accent">
                        {stat.value}
                      </p>
                      <p className="text-xs text-text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline={dict.caseStudiesPage.ctaHeadline} />
    </>
  );
}
