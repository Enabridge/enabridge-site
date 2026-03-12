import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { caseStudies } from "@/data/content";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const cs = caseStudies.find((c) => c.slug === slug);
    return { title: cs ? `${cs.title} | Enabridge` : "Case Study | Enabridge" };
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      <PageHero label="Case Study" title={cs.title} description={cs.tagline} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="flex flex-wrap gap-6 mb-14">
            {cs.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-bg-surface px-6 py-4">
                <p className="text-2xl font-semibold text-accent">{stat.value}</p>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-text-primary">What we delivered</h2>
          <div className="mt-8 space-y-6">
            {cs.details.map((d) => (
              <p key={d} className="text-text-muted leading-relaxed border-l-2 border-accent/30 pl-5">
                {d}
              </p>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Want results like these for your business?" />
    </>
  );
}
