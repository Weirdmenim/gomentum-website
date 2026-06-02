import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link className="brand" href="/"><span aria-hidden="true">✦</span> Gomentum</Link>
        <p>Start tasks when starting feels impossible. One small step. Real momentum.</p>
        <p className="small">Gomentum is a productivity support tool, not medical or therapy advice.</p>
      </div>
      <div className="footer-grid">
        <div>
          <h2>Product</h2>
          <Link href="/product">Product</Link>
          <Link href="/features">Features</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/use-cases">Use Cases</Link>
        </div>
        <div>
          <h2>Resources</h2>
          <Link href="/resources">Resources</Link>
          <Link href="/resources/task-paralysis">Task paralysis</Link>
          <Link href="/resources/brain-dump-productivity">Brain dump productivity</Link>
          <Link href="/task-paralysis-guide">Task paralysis guide</Link>
        </div>
        <div>
          <h2>Trust</h2>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/accessibility">Accessibility</Link>
          <Link href="/evidence">Evidence & QA</Link>
        </div>
      </div>
    </footer>
  );
}
