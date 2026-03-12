import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">Enabridge</p>
            <p className="mt-4 max-w-xs text-sm text-text-muted leading-relaxed">
              Agentic AI that accelerates business execution — with human oversight and production-grade reliability.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-text-secondary uppercase mb-5">Solutions</p>
            <div className="flex flex-col gap-3">
              <Link href="/solutions/customer-operations" className="text-sm text-text-muted hover:text-accent transition">Customer Operations</Link>
              <Link href="/solutions/finance-reconciliation" className="text-sm text-text-muted hover:text-accent transition">Finance Reconciliation</Link>
              <Link href="/solutions/compliance-risk" className="text-sm text-text-muted hover:text-accent transition">Compliance & Risk</Link>
              <Link href="/solutions/internal-execution" className="text-sm text-text-muted hover:text-accent transition">Internal Execution</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-text-secondary uppercase mb-5">Company</p>
            <div className="flex flex-col gap-3">
              <Link href="/agentic-ai" className="text-sm text-text-muted hover:text-accent transition">Agentic AI</Link>
              <Link href="/case-studies" className="text-sm text-text-muted hover:text-accent transition">Case Studies</Link>
              <Link href="/how-we-work" className="text-sm text-text-muted hover:text-accent transition">How We Work</Link>
              <Link href="/trust-governance" className="text-sm text-text-muted hover:text-accent transition">Trust & Governance</Link>
              <Link href="/company" className="text-sm text-text-muted hover:text-accent transition">About</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-text-secondary uppercase mb-5">Contact</p>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="text-sm text-text-muted hover:text-accent transition">Book a Fit Call</Link>
              <a href="mailto:hello@enabridge.ai" className="text-sm text-text-muted hover:text-accent transition">hello@enabridge.ai</a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-text-muted">&copy; {new Date().getFullYear()} Enabridge. All rights reserved.</p>
          <p className="text-xs text-text-muted/60">Bangkok, Thailand</p>
        </div>
      </div>
    </footer>
  );
}
