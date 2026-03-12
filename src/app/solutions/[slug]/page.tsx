import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { solutions } from "@/data/content";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const solution = solutions.find((s) => s.slug === slug);
    return {
      title: solution ? solution.title : "Solution",
      description: solution ? solution.tagline : undefined,
    };
  });
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  return (
    <>
      <PageHero label="Solution" title={solution.title} description={solution.tagline} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">Use cases</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">
            What agents handle
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {solution.useCases.map((uc) => (
              <div key={uc} className="rounded-xl border border-border bg-bg-surface p-6">
                <p className="text-sm leading-relaxed text-text-muted">{uc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline={`Ready to bring Agentic AI to ${solution.title.toLowerCase()}?`} />
    </>
  );
}
