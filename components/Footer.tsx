import Link from "next/link";
import { Logo } from "./Logo";

const groups = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Features", href: "/features" },
      { label: "For You", href: "/use-cases" },
      { label: "Pricing", href: "/pricing" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Task Paralysis Guide", href: "/task-paralysis-guide" },
      { label: "Resources", href: "/resources" },
      { label: "FAQ", href: "/faq" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-softgray/10 bg-offblack py-12">
      <div className="mx-auto grid max-w-site gap-10 px-4 md:grid-cols-[1.4fr_2fr] md:px-6">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-textgray">Start tasks when starting feels impossible. One small step. Real momentum.</p>
          <p className="mt-6 text-sm text-textgray">Gomentum is a productivity support tool, not medical or therapy advice.</p>
          <p className="mt-6 text-sm text-textgray">© 2026 Gomentum. All rights reserved.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-teal">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-textgray transition hover:text-amber">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
