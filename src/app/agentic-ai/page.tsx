import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { getDictionary, getLocale } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.metadata.agenticAi.title,
    description: dict.metadata.agenticAi.description,
  };
}

export default async function AgenticAIPage() {
  const dict = getDictionary(await getLocale());

  return (
    <>
      <PageHero
        label={dict.agenticAi.hero.label}
        title={dict.agenticAi.hero.title}
        description={dict.agenticAi.hero.description}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="eyebrow text-xs text-premium">
            {dict.agenticAi.maturity.label}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {dict.agenticAi.maturity.title}
          </h2>
          <p className="mt-5 max-w-2xl text-text-muted leading-relaxed">
            {dict.agenticAi.maturity.intro}
          </p>
          <div className="mt-14 space-y-0">
            {dict.agenticAi.maturityStages.map((item, i) => (
              <div
                key={item.stage}
                className="grid gap-6 md:grid-cols-[200px_1fr] items-start border-b border-border py-10 first:pt-0 last:border-0 last:pb-0"
              >
                <div>
                  <span className="text-xs font-medium tracking-wide text-premium">
                    {dict.agenticAi.maturity.stagePrefix} {i + 1}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-accent">
                    {item.stage}
                  </h3>
                </div>
                <p className="text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="eyebrow text-xs text-premium">
            {dict.agenticAi.capabilities.label}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {dict.agenticAi.capabilities.title}
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {dict.agenticAi.capabilities.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-bg-primary p-8"
              >
                <h3 className="text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="eyebrow text-xs text-premium">
            {dict.agenticAi.product.label}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {dict.agenticAi.product.title}
          </h2>
          <p className="mt-6 max-w-2xl text-text-muted leading-relaxed">
            {dict.agenticAi.product.body}
          </p>
          <div className="mt-8">
            <Link
              href="/openbridge"
              className="inline-flex items-center justify-center rounded-lg border border-primary/40 bg-primary/5 px-7 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-cta-fg"
            >
              {dict.agenticAi.product.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="eyebrow text-xs text-premium">
            {dict.agenticAi.consulting.label}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {dict.agenticAi.consulting.title}
          </h2>
          <p className="mt-6 max-w-2xl text-text-muted leading-relaxed">
            {dict.agenticAi.consulting.body}
          </p>
        </div>
      </section>

      <CTABanner headline={dict.agenticAi.ctaHeadline} />
    </>
  );
}
