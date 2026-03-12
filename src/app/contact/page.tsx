import PageHero from "@/components/PageHero";

export const metadata = { title: "Contact | Enabridge" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Book a 30-minute Agentic Fit Call."
        description="Tell us about your workflows and we will assess where Agentic AI can deliver the most impact — with the least risk."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Calendly placeholder */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
                Schedule a call
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                Pick a time that works for you. We will discuss your current workflows, identify
                quick wins for Agentic AI, and outline a practical path forward.
              </p>
              <div className="mt-8 rounded-xl border border-border bg-bg-surface p-12 text-center">
                <p className="text-sm text-text-muted">Calendly booking widget</p>
                <p className="mt-2 text-xs text-text-muted/60">Integration placeholder</p>
              </div>
            </div>

            {/* Other contact methods */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
                Other ways to reach us
              </h2>
              <div className="mt-8 space-y-8">
                <div className="rounded-xl border border-border bg-bg-surface p-6">
                  <h3 className="text-base font-semibold text-accent">Email</h3>
                  <a
                    href="mailto:hello@enabridge.ai"
                    className="mt-2 block text-sm text-text-muted hover:text-accent transition"
                  >
                    hello@enabridge.ai
                  </a>
                </div>

                <div className="rounded-xl border border-border bg-bg-surface p-6">
                  <h3 className="text-base font-semibold text-accent">LINE Official Account</h3>
                  <p className="mt-2 text-sm text-text-muted">
                    Search for <span className="text-text-primary font-medium">@enabridge</span> on LINE
                  </p>
                  <p className="mt-1 text-xs text-text-muted/60">LINE OA integration placeholder</p>
                </div>

                <div className="rounded-xl border border-border bg-bg-surface p-6">
                  <h3 className="text-base font-semibold text-accent">Send us a message</h3>
                  <form className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm text-text-muted mb-1.5">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-lg border border-border bg-bg-primary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted/40 focus:border-accent focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-text-muted mb-1.5">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-lg border border-border bg-bg-primary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted/40 focus:border-accent focus:outline-none"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm text-text-muted mb-1.5">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-lg border border-border bg-bg-primary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted/40 focus:border-accent focus:outline-none resize-none"
                        placeholder="Tell us about your workflows..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-accent transition hover:bg-cta-hover"
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
