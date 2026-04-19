import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { getDictionary, getLocale } from "@/i18n";
import { en } from "@/i18n/en";

export function generateStaticParams() {
  return en.services.items.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dict = getDictionary(await getLocale());
  const service = dict.services.items.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.tagline };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dict = getDictionary(await getLocale());
  const service = dict.services.items.find((s) => s.slug === slug);
  if (!service) notFound();

  const ctaHeadline = dict.services.detail.ctaPattern.replace(
    "{service}",
    service.title,
  );

  return (
    <>
      <PageHero
        label={dict.services.listHero.label}
        title={service.title}
        description={service.tagline}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {dict.services.detail.whatWeDeliver}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {dict.services.detail.howThisWorks}
          </h2>
          <ul className="mt-10 space-y-5">
            {service.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 text-text-muted leading-relaxed"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner headline={ctaHeadline} />
    </>
  );
}
