import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { getDictionary, getLocale } from "@/i18n";

export default async function Home() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  const services = dict.services.items;
  const caseStudies = dict.caseStudies;
  const whyEnabridge = dict.whyEnabridge;
  const trainingCredentials = dict.trainingCredentials;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-40">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {dict.home.hero.label}
          </p>
          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-text-primary sm:text-5xl lg:text-[3.5rem]">
            {dict.home.hero.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted">
            {dict.home.hero.description}
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-accent shadow-lg shadow-primary/20 transition hover:bg-cta-hover hover:shadow-cta-hover/25"
            >
              {dict.home.hero.ctaPrimary}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-medium text-text-muted transition hover:border-accent/50 hover:text-accent"
            >
              {dict.home.hero.ctaSecondary}
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap gap-3">
            {dict.home.trustChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-border bg-bg-surface/80 px-4 py-2 text-xs font-medium tracking-wide text-text-secondary"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {dict.home.whatWeDo.label}
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {dict.home.whatWeDo.title}
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-border bg-bg-primary p-8 transition hover:border-accent/40 hover:bg-bg-elevated"
              >
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {s.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proven delivery */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {dict.home.shipped.label}
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {dict.home.shipped.title}
          </h2>
          <p className="mt-4 max-w-2xl text-text-muted leading-relaxed">
            {dict.home.shipped.subtitle}
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group rounded-xl border border-border bg-bg-surface p-8 transition hover:border-accent/40 hover:bg-bg-elevated"
              >
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition">
                  {cs.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {cs.tagline}
                </p>
                <p className="mt-3 inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-accent">
                  {cs.aiStory}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
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

      {/* Training track record */}
      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {dict.home.training.label}
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {dict.home.training.title}
          </h2>
          <p className="mt-4 max-w-2xl text-text-muted leading-relaxed">
            {dict.home.training.subtitle}
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trainingCredentials.map((cred) => (
              <div
                key={cred.name}
                className="rounded-xl border border-border bg-bg-primary px-5 py-6"
              >
                <h3 className="text-sm font-semibold text-accent">
                  {cred.name}
                </h3>
                <p className="mt-1 text-xs text-text-muted">{cred.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OpenBridge teaser */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {dict.home.openbridgeTeaser.label}
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {dict.home.openbridgeTeaser.title}
          </h2>
          <p className="mt-6 max-w-2xl text-text-muted leading-relaxed">
            {dict.home.openbridgeTeaser.description}
          </p>
          <div className="mt-8">
            <Link
              href="/openbridge"
              className="inline-flex items-center justify-center rounded-full border border-accent/40 bg-white/5 px-7 py-3 text-sm font-semibold text-accent transition hover:border-accent/70 hover:bg-primary/15 hover:text-white"
            >
              {dict.home.openbridgeTeaser.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Enabridge */}
      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {dict.home.whyEnabridge.label}
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {dict.home.whyEnabridge.title}
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {whyEnabridge.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-bg-primary p-8"
              >
                <h3 className="text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
