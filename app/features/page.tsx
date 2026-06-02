import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { StatusPill } from "@/components/StatusPill";
import { features } from "@/data/features";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/features");

export default function FeaturesPage() {
  return (
    <>
      <HeroSection eyebrow="Features" title="Small tools for the moment before" highlight="action.">
        <p>Gomentum keeps the product focused: one task, one first move, one gentle start.</p>
      </HeroSection>

      <section className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">What Gomentum helps with</h2>
          <div className="mt-7 space-y-3">
            {features.slice(0, 6).map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-softgray bg-white p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="mt-2 leading-7 text-[#55576A]">{feature.description}</p>
                  </div>
                  <StatusPill status={feature.status} />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-2xl bg-cream p-5 text-[#55576A]">
            Feature labels are shown here, not on every page, so the homepage can stay calm while the product remains honest about beta status.
          </p>
        </div>
      </section>

      <CTASection title="Try the first-step demo before signing up." />
    </>
  );
}
