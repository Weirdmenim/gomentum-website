import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { HeroSection } from "@/components/HeroSection";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/pricing");

export default function PricingPage() {
  return (
    <>
      <HeroSection eyebrow="Pricing" title="Free beta access. No card" highlight="required.">
        <p>Gomentum is still improving with early users, so the beta path stays simple and low-risk.</p>
      </HeroSection>

      <section className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14">
        <div className="mx-auto max-w-3xl rounded-card border border-softgray bg-white p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0A6F62]">Beta</p>
          <h2 className="mt-3 text-4xl font-bold">$0 during beta</h2>
          <p className="mt-4 text-[#55576A]">Try the product while the team improves task breakdown, dashboard polish, and the full Just Start flow.</p>
          <ul className="mt-6 space-y-3 text-[#55576A]">
            <li>No card required</li>
            <li>Clear notice before any paid plan</li>
            <li>Early feedback helps shape the product</li>
          </ul>
          <div className="mt-7">
            <ButtonLink href="/contact">Join the beta</ButtonLink>
          </div>
          <p className="mt-6 rounded-2xl bg-cream p-4 text-sm text-[#55576A]">
            Future pricing may include a simple Starter plan and a Plus plan, but beta users should be told before anything changes.
          </p>
        </div>
      </section>
    </>
  );
}
