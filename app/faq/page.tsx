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
        <p>Answers about Gomentum, beta access, privacy, ADHD-related use, AI task breakdown, and pricing.</p>
      </HeroSection>
      <section className="mx-auto max-w-site px-4 py-16 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold text-warm">Frequently asked questions</h2>
            <p className="mt-4 text-textgray">The goal is to remove doubt without hiding the beta-stage reality of the product.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>
      <section className="mx-auto max-w-site px-4 py-10 md:px-6">
        <div className="rounded-panel bg-cream p-6 text-charcoal md:p-8">
          <h2 className="text-2xl font-bold">Important note</h2>
          <p className="mt-2">Gomentum is a productivity support tool, not medical or therapeutic advice. If you need care, support, or urgent help, contact a qualified professional or local emergency service.</p>
        </div>
      </section>
      <CTASection title="Still curious? Try one first move." />
      <JsonLd data={faqSchema} />
    </>
  );
}
