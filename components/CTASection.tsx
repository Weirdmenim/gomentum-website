import Link from "next/link";
import { ButtonLink } from "./Button";
import { Icon } from "./Icons";

export function CTASection({
  title = "Ready to take one small step?",
  text = "You do not need motivation. You just need a first move.",
  href,
  label,
  primaryHref,
  primaryLabel,
  secondaryHref = "/how-it-works",
  secondaryLabel = "See how it works"
}: {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const ctaHref = primaryHref || href || "/#first-step-demo";
  const ctaLabel = primaryLabel || label || "Try one first move";

  return (
    <section className="bg-warm px-4 py-12 text-charcoal md:px-6">
      <div className="mx-auto max-w-site rounded-panel border border-softgray bg-cream p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
        <div>
          <h2 className="text-balance text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-[#55576A]">{text}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#55576A]">
            <span>Free during beta</span><span aria-hidden="true">•</span><span>No card required</span><span aria-hidden="true">•</span><span>No pressure</span>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0">
          <ButtonLink href={ctaHref} className="w-full sm:w-auto">{ctaLabel} <Icon name="arrow" className="h-4 w-4" /></ButtonLink>
          <Link href={secondaryHref} className="inline-flex min-h-12 items-center justify-center font-semibold text-[#0A6F62] underline-offset-4 hover:underline">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
