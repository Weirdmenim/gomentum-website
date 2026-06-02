import type { ReactNode } from "react";
import { ButtonLink } from "./Button";
import { Icon } from "./Icons";

export function HeroSection({ eyebrow, title, highlight, children, primaryHref = "/#first-step-demo", primaryLabel = "Start One Small Step", secondaryHref = "/how-it-works", secondaryLabel = "See How It Works", visual }: { eyebrow?: string; title: string; highlight?: string; children?: ReactNode; primaryHref?: string; primaryLabel?: string; secondaryHref?: string; secondaryLabel?: string; visual?: ReactNode }) {
  return (
    <section className="noise-overlay surface-grid border-b border-softgray/10 bg-charcoal">
      <div className="relative mx-auto grid max-w-site gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1fr_0.9fr] lg:py-24">
        <div className="max-w-3xl">
          {eyebrow ? <p className="mb-4 inline-flex rounded-full border border-amber/40 px-3 py-1 text-sm font-bold uppercase tracking-[0.16em] text-amber">{eyebrow}</p> : null}
          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-warm md:text-7xl">
            {title} {highlight ? <span className="text-amber">{highlight}</span> : null}
          </h1>
          <div className="mt-6 max-w-2xl text-lg text-textgray md:text-xl">{children}</div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref}>{primaryLabel} <Icon name="arrow" className="h-4 w-4" /></ButtonLink>
            <ButtonLink href={secondaryHref} variant="secondary">{secondaryLabel}</ButtonLink>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-textgray">
            <span>No full task system</span>
            <span>No pressure</span>
            <span>Just one first move</span>
          </div>
        </div>
        {visual ? <div className="relative">{visual}</div> : null}
      </div>
    </section>
  );
}
