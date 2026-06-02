import type { ReactNode } from "react";
import { ButtonLink } from "./Button";
import { Icon } from "./Icons";

export function HeroSection({ eyebrow, title, highlight, children, primaryHref = "/#first-step-demo", primaryLabel = "Try one first move", secondaryHref = "/how-it-works", secondaryLabel = "See how it works", visual }: { eyebrow?: string; title: string; highlight?: string; children?: ReactNode; primaryHref?: string; primaryLabel?: string; secondaryHref?: string; secondaryLabel?: string; visual?: ReactNode }) {
  return (
    <section className="border-b border-softgray/10 bg-charcoal">
      <div className={`mx-auto grid max-w-site gap-10 px-4 py-14 md:px-6 lg:py-20 ${visual ? "lg:grid-cols-[1fr_0.85fr]" : ""}`}>
        <div className="max-w-3xl">
          {eyebrow ? <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-amber">{eyebrow}</p> : null}
          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-warm md:text-7xl">
            {title} {highlight ? <span className="text-amber">{highlight}</span> : null}
          </h1>
          <div className="mt-6 max-w-2xl text-lg text-textgray md:text-xl">{children}</div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink href={primaryHref}>{primaryLabel} <Icon name="arrow" className="h-4 w-4" /></ButtonLink>
            <a href={secondaryHref} className="inline-flex min-h-12 items-center font-semibold text-teal underline-offset-4 hover:text-amber hover:underline">
              {secondaryLabel}
            </a>
          </div>
        </div>
        {visual ? <div className="relative">{visual}</div> : null}
      </div>
    </section>
  );
}
