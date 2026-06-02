import type { ReactNode } from "react";
import { ButtonLink } from "./Button";
import { Icon } from "./Icons";

export function HeroSection({ eyebrow, title, highlight, children, primaryHref = "/#first-step-demo", primaryLabel = "Try one first move", secondaryHref = "/how-it-works", secondaryLabel = "See how it works", visual }: { eyebrow?: string; title: string; highlight?: string; children?: ReactNode; primaryHref?: string; primaryLabel?: string; secondaryHref?: string; secondaryLabel?: string; visual?: ReactNode }) {
  return (
    <section className="border-b border-softgray bg-warm text-charcoal">
      <div className={`mx-auto grid max-w-site gap-10 px-4 py-12 md:px-6 lg:py-16 ${visual ? "lg:grid-cols-[1fr_0.85fr]" : ""}`}>
        <div className="max-w-3xl">
          {eyebrow ? <p className="mb-4 text-sm font-semibold text-[#0A6F62]">{eyebrow}</p> : null}
          <h1 className="text-balance text-[2.65rem] font-bold leading-[1.08] tracking-[-0.04em] text-charcoal md:text-6xl lg:text-7xl">
            {title} {highlight ? <span className="text-[#0A6F62]">{highlight}</span> : null}
          </h1>
          <div className="mt-6 max-w-2xl text-lg leading-8 text-[#55576A] md:text-xl">{children}</div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={primaryHref}>{primaryLabel} <Icon name="arrow" className="h-4 w-4" /></ButtonLink>
            <a href={secondaryHref} className="inline-flex min-h-12 items-center justify-center font-semibold text-[#0A6F62] underline-offset-4 hover:underline sm:justify-start">
              {secondaryLabel}
            </a>
          </div>
        </div>
        {visual ? <div className="relative">{visual}</div> : null}
      </div>
    </section>
  );
}
