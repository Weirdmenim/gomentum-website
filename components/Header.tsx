"use client";

import { useState } from "react";
import Link from "next/link";
import { guideNav, mainNav, trustNav } from "@/data/pages";
import { ButtonLink } from "./Button";
import { Icon } from "./Icons";
import { Logo } from "./Logo";

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className="rounded-full px-3 py-2 text-sm font-semibold text-charcoal/75 transition hover:bg-cream hover:text-[#0A6F62]"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-softgray bg-warm/95 text-charcoal backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Logo />
        <nav className="hidden flex-1 items-center justify-center gap-1 xl:flex" aria-label="Primary navigation">
          {mainNav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
        <div className="hidden items-center gap-3 xl:flex">
          <ButtonLink href="/#first-step-demo" className="min-h-11 px-4 py-2 text-sm">Try one first move</ButtonLink>
        </div>
        <button
          className="grid h-12 w-12 place-items-center rounded-button border border-softgray bg-white text-charcoal xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-softgray bg-warm px-4 py-4 xl:hidden">
          <nav className="mx-auto grid max-w-site gap-5" aria-label="Mobile navigation">
            <div>
              <p className="px-3 text-xs font-bold uppercase tracking-[0.16em] text-[#0A6F62]">Main pages</p>
              <div className="mt-2 grid gap-1 sm:grid-cols-2">
                {mainNav.map((item) => (
                  <NavLink key={item.href} href={item.href} label={item.label} onClick={() => setOpen(false)} />
                ))}
              </div>
            </div>
            <div>
              <p className="px-3 text-xs font-bold uppercase tracking-[0.16em] text-[#0A6F62]">Guides</p>
              <div className="mt-2 grid gap-1 sm:grid-cols-2">
                {guideNav.map((item) => (
                  <NavLink key={item.href} href={item.href} label={item.label} onClick={() => setOpen(false)} />
                ))}
              </div>
            </div>
            <div>
              <p className="px-3 text-xs font-bold uppercase tracking-[0.16em] text-[#0A6F62]">Trust</p>
              <div className="mt-2 grid gap-1 sm:grid-cols-3">
                {trustNav.map((item) => (
                  <NavLink key={item.href} href={item.href} label={item.label} onClick={() => setOpen(false)} />
                ))}
              </div>
            </div>
            <ButtonLink href="/#first-step-demo" className="mt-1" onClick={() => setOpen(false)}>Try one first move</ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
