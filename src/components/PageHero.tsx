export default function PageHero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <p className="eyebrow text-xs text-premium">
          {label}
        </p>
        <h1 className="display-serif mt-5 max-w-3xl text-4xl leading-[1.12] text-text-primary sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
          {description}
        </p>
      </div>
    </section>
  );
}
