import Link from "next/link";

export function CTA({ secondary = true }: { secondary?: boolean }) {
  return (
    <div className="cta-row">
      <Link className="button primary" href="/#demo">Start One Small Step</Link>
      {secondary && <Link className="button secondary" href="/how-it-works">See How It Works</Link>}
    </div>
  );
}

export function CTABox() {
  return (
    <section className="cta-box">
      <h2>Start with one small step.</h2>
      <p>Type one task into Gomentum and get a tiny first move you can begin in three minutes.</p>
      <CTA />
    </section>
  );
}
