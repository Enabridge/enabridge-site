import type { Metadata } from "next";
import Link from "next/link";
import { contactInfo } from "@/data/content";
import { getDictionary, getLocale } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.metadata.openbridge.title,
    description: dict.metadata.openbridge.description,
  };
}

export default async function OpenBridgePage() {
  const dict = getDictionary(await getLocale());
  const ob = dict.openbridge;
  const ctaHint = ob.hero.ctaHint.replace("{line}", contactInfo.line.id);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-40">
          <div className="inline-flex items-center gap-3 rounded-full border border-accent/40 bg-primary/15 px-5 py-2.5 text-sm font-semibold text-accent shadow-lg shadow-primary/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            {ob.hero.badge}
          </div>
          <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight text-text-primary sm:text-5xl lg:text-[3.5rem]">
            {ob.hero.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted">
            {ob.hero.subtitle1}
          </p>
          <p className="mt-4 max-w-2xl text-text-muted leading-relaxed">
            {ob.hero.subtitle2}
          </p>
          <div className="mt-12">
            <a
              href={contactInfo.line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-accent shadow-lg shadow-primary/20 transition hover:bg-cta-hover hover:shadow-cta-hover/25"
            >
              {ob.hero.ctaPrimary}
            </a>
            <p className="mt-4 text-xs text-text-muted">{ctaHint}</p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {ob.problem.label}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {ob.problem.title}
          </h2>
          <p className="mt-6 max-w-2xl text-text-muted leading-relaxed">
            {ob.problem.body1}
          </p>
          <p className="mt-4 max-w-2xl text-text-muted leading-relaxed">
            {ob.problem.body2}
          </p>
          <p className="mt-4 max-w-2xl text-text-muted leading-relaxed">
            {ob.problem.body3}
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {ob.vision.label}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {ob.vision.title}
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border md:grid-cols-4">
            {ob.vision.metrics.map((item) => (
              <div key={item.label} className="bg-bg-surface p-8 text-center">
                <p className="text-2xl font-semibold text-accent">
                  {item.metric}
                </p>
                <p className="mt-2 text-sm text-text-muted">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-text-muted/80">
            {ob.vision.footnote}
          </p>
        </div>
      </section>

      {/* Compound */}
      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {ob.compound.label}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {ob.compound.title}
          </h2>
          <div className="mt-14 space-y-0">
            {ob.compound.rows.map((row) => (
              <div
                key={row.layer}
                className="grid gap-4 border-b border-border py-6 first:pt-0 last:border-0 last:pb-0 md:grid-cols-[180px_1fr_1fr]"
              >
                <p className="text-sm font-semibold text-accent">{row.layer}</p>
                <p className="text-sm text-text-muted">{row.what}</p>
                <p className="text-sm text-text-secondary">{row.who}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-text-muted leading-relaxed">
            {ob.compound.body}
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {ob.team.label}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {ob.team.title}
          </h2>
          <p className="mt-6 max-w-2xl text-text-muted leading-relaxed">
            {ob.team.subtitle}
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ob.team.roles.map((agent) => (
              <div
                key={agent.name}
                className="rounded-xl border border-border bg-bg-surface p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-base font-semibold text-accent">
                  {agent.letter}
                </div>
                <h3 className="mt-4 text-base font-semibold text-text-primary">
                  {agent.name}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{agent.job}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {ob.status.label}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {ob.status.title}
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-bg-primary p-8">
              <h3 className="text-base font-semibold text-accent">
                {ob.status.readyTodayTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {ob.status.readyToday.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-bg-primary p-8">
              <h3 className="text-base font-semibold text-accent">
                {ob.status.inProgressTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {ob.status.inProgress.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-premium" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-bg-primary p-8">
              <h3 className="text-base font-semibold text-accent">
                {ob.status.firstMoverTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {ob.status.firstMover.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-logo-mark" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 max-w-2xl text-sm text-text-muted/80">
            {ob.status.footnote}
          </p>
        </div>
      </section>

      {/* Built by Enabridge */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {ob.builtBy.label}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {ob.builtBy.title}
          </h2>
          <p className="mt-6 max-w-2xl text-text-muted leading-relaxed">
            {ob.builtBy.body1}
          </p>
          <p className="mt-4 max-w-2xl text-text-muted leading-relaxed">
            {ob.builtBy.body2}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border border-accent/40 bg-white/5 px-6 py-3 text-sm font-semibold text-accent transition hover:border-accent/70 hover:bg-primary/15 hover:text-white"
            >
              {ob.builtBy.seeCaseStudies}
            </Link>
            <Link
              href="/company"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text-muted transition hover:border-accent/50 hover:text-accent"
            >
              {ob.builtBy.meetFounder}
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <div className="rounded-2xl border border-border bg-bg-surface px-8 py-16 text-center sm:px-16">
            <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
              {ob.finalCta.label}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              {ob.finalCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-text-muted">
              {ob.finalCta.body}
            </p>
            <div className="mt-10">
              <a
                href={contactInfo.line.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-accent shadow-lg shadow-primary/20 transition hover:bg-cta-hover hover:shadow-cta-hover/25"
              >
                {ob.finalCta.cta}
              </a>
              <p className="mt-4 text-xs text-text-muted">{ctaHint}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
