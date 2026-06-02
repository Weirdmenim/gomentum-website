import Link from "next/link";
import { navLinks } from "@/data/site";

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="nav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Gomentum home"><span aria-hidden="true">✦</span> Gomentum</Link>
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>
        <Link className="nav-cta" href="/#demo">Start One Small Step</Link>
      </nav>
    </header>
  );
}
