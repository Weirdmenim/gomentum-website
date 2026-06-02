import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { HeroSection } from "@/components/HeroSection";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/contact");

export default function ContactPage() {
  return (
    <>
      <HeroSection eyebrow="Contact" title="Questions, feedback, or beta" highlight="access.">
        <p>Send one clear message. Keep it simple. The form is intentionally short.</p>
      </HeroSection>

      <section className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14">
        <div className="mx-auto grid max-w-site gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-card bg-cream p-6">
            <h2 className="text-2xl font-bold">Use this page for</h2>
            <ul className="mt-5 space-y-3 text-[#55576A]">
              <li>Beta access</li>
              <li>Product feedback</li>
              <li>Support questions</li>
              <li>Partnership notes</li>
            </ul>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
