import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">Enabridge</p>
            <p className="mt-4 text-sm text-text-muted leading-relaxed">
              Agentic AI that accelerates business execution — safely.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wider text-text-muted uppercase mb-4">Solutions</p>
            <div className="flex flex-col gap-3">
              <Link href="/solutions/customer-operations" className="text-sm text-text-muted hover:text-accent transition">Customer Operations</Link>
              <Link href="/solutions/finance-reconciliation" className="text-sm text-text-muted hover:text-accent transition">Finance Reconciliation</Link>
              <Link href="/solutions/compliance-risk" className="text-sm text-text-muted hover:text-accent transition">Compliance & Risk</Link>
              <Link href="/solutions/internal-execution" className="text-sm text-text-muted hover:text-accent transition">Internal Execution</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wider text-text-muted uppercase mb-4">Company</p>
            <div className="flex flex-col gap-3">
              <Link href="/agentic-ai" className="text-sm text-text-muted hover:text-accent transition">Agentic AI</Link>
              <Link href="/case-studies" className="text-sm text-text-muted hover:text-accent transition">Case Studies</Link>
              <Link href="/how-we-work" className="text-sm text-text-muted hover:text-accent transition">How We Work</Link>
              <Link href="/trust-governance" className="text-sm text-text-muted hover:text-accent transition">Trust & Governance</Link>
              <Link href="/company" className="text-sm text-text-muted hover:text-accent transition">About</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wider text-text-muted uppercase mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="text-sm text-text-muted hover:text-accent transition">Book a Fit Call</Link>
              <a href="mailto:hello@enabridge.ai" className="text-sm text-text-muted hover:text-accent transition">hello@enabridge.ai</a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="text-xs text-text-muted">&copy; {new Date().getFullYear()} Enabridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
