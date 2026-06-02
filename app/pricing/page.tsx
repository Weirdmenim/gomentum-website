import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { PricingCard } from "@/components/PricingCard";
import { TrustCard } from "@/components/TrustCard";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/pricing");

export default function PricingPage() {
  return (
    <>
      <HeroSection eyebrow="Beta access" title="Start small. It is" highlight="free during beta.">
        <p>Gomentum is in private beta. Get full access to help you start tasks, build momentum, and shape what comes next.</p>
      </HeroSection>
      <section className="mx-auto max-w-site px-4 py-16 md:px-6">
        <PricingCard />
      </section>
      <section className="mx-auto max-w-site px-4 py-12 md:px-6">
        <div className="grid gap-5 md:grid-cols-4">
          <TrustCard icon="shield" title="No pressure" text="Use what you need. Skip what you do not." />
          <TrustCard icon="lock" title="No card during beta" text="Beta access should not require payment details." />
          <TrustCard icon="heart" title="Built with care" text="For real people, not productivity robots." />
          <TrustCard icon="users" title="Shape the product" text="Early feedback helps improve Gomentum for everyone." />
        </div>
        <p className="mt-8 text-textgray">Questions? Read the <Link href="/faq" className="text-teal hover:text-amber">FAQ</Link> or <Link href="/contact" className="text-teal hover:text-amber">send us a message</Link>.</p>
      </section>
    </>
  );
}
