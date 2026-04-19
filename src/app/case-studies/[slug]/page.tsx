import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { getDictionary, getLocale } from "@/i18n";
import { en } from "@/i18n/en";

export function generateStaticParams() {
  return en.caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dict = getDictionary(await getLocale());
  const cs = dict.caseStudies.find((c) => c.slug === slug);
  return {
    title: cs ? cs.title : dict.caseStudiesPage.detail.label,
    description: cs ? cs.tagline : undefined,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dict = getDictionary(await getLocale());
  const cs = dict.caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      <PageHero
        label={dict.caseStudiesPage.detail.label}
        title={cs.title}
        description={cs.tagline}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="mb-8 inline-block rounded-full bg-primary/15 px-4 py-1.5 text-sm font-medium text-accent">
            {cs.aiStory}
          </p>

          <div className="flex flex-wrap gap-6 mb-16">
            {cs.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-bg-surface px-6 py-5"
              >
                <p className="text-2xl font-semibold text-accent">{stat.value}</p>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {dict.caseStudiesPage.detail.delivery}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">
            {dict.caseStudiesPage.detail.whatWeDelivered}
          </h2>
          <div className="mt-8 space-y-6">
            {cs.details.map((d) => (
              <p
                key={d}
                className="text-text-muted leading-relaxed border-l-2 border-accent/30 pl-5"
              >
                {d}
              </p>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline={dict.caseStudiesPage.detail.ctaHeadline} />
    </>
  );
}
