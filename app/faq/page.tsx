import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { getPageMetadata } from "@/data/metadata";
import { faqSchema } from "@/data/schema";

export const metadata: Metadata = getPageMetadata("/faq");

export default function FAQPage() {
  return (
    <>
      <HeroSection eyebrow="FAQ" title="Real questions." highlight="Honest answers.">
        <p>Short answers about the product, beta access, privacy, and ADHD-related use.</p>
      </HeroSection>

      <section className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion />
          <p className="mt-6 rounded-2xl bg-cream p-5 text-[#55576A]">
            Gomentum is a productivity support tool. It is not medical advice, diagnosis, or therapy.
          </p>
        </div>
      </section>

      <CTASection title="Still curious? Try one first move." />
      <JsonLd data={faqSchema} />
    </>
  );
}
