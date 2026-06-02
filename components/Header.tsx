"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/data/pages";
import { ButtonLink } from "./Button";
import { Icon } from "./Icons";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-softgray/10 bg-offblack/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-site items-center justify-between px-4 py-4 md:px-6">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-warm/90 transition hover:text-amber">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="px-3 py-2 text-sm font-semibold text-warm/90 hover:text-amber">Log in</Link>
          <ButtonLink href="/#first-step-demo" className="min-h-11 px-4 py-2 text-sm">Start One Small Step</ButtonLink>
        </div>
        <button
          className="grid h-12 w-12 place-items-center rounded-button border border-softgray/15 bg-white/5 text-warm lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-softgray/10 bg-offblack px-4 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-site gap-2" aria-label="Mobile navigation">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-button px-4 py-3 font-semibold text-warm hover:bg-white/10" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/faq" className="rounded-button px-4 py-3 font-semibold text-warm hover:bg-white/10" onClick={() => setOpen(false)}>FAQ</Link>
            <Link href="/contact" className="rounded-button px-4 py-3 font-semibold text-warm hover:bg-white/10" onClick={() => setOpen(false)}>Contact</Link>
            <ButtonLink href="/#first-step-demo" className="mt-2" onClick={() => setOpen(false)}>Start One Small Step</ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
