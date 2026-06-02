import Link from "next/link";
import { guideNav, mainNav, trustNav } from "@/data/pages";
import { Logo } from "./Logo";

const groups = [
  {
    title: "Main pages",
    links: mainNav
  },
  {
    title: "Guides",
    links: guideNav
  },
  {
    title: "Trust",
    links: trustNav
  }
];

export function Footer() {
  return (
    <footer className="border-t border-softgray bg-warm py-10 text-charcoal">
      <div className="mx-auto grid max-w-site gap-10 px-4 md:grid-cols-[1.2fr_2fr] md:px-6">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-[#55576A]">Start tasks when starting feels impossible. One small step. Real momentum.</p>
          <p className="mt-6 text-sm text-[#55576A]">Gomentum is a productivity support tool, not medical or therapy advice.</p>
          <p className="mt-6 text-sm text-[#55576A]">© 2026 Gomentum. All rights reserved.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-[#0A6F62]">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[#55576A] transition hover:text-[#0A6F62]">{link.label}</Link>
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
