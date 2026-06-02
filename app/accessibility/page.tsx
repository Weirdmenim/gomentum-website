import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/accessibility");

const checks = [
  "Readable body text and calm spacing",
  "Keyboard-visible focus styles",
  "Clear labels on forms and inputs",
  "No flashing or strobing motion",
  "Mobile-first layouts and large tap targets",
  "Plain language for errors and trust notes"
];

export default function AccessibilityPage() {
  return (
    <>
      <HeroSection eyebrow="Accessibility" title="Built for clarity, calm, and" highlight="access.">
        <p>Gomentum should feel usable for tired, distracted, overwhelmed, and keyboard-only users.</p>
      </HeroSection>

      <section className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Current accessibility commitments</h2>
          <ul className="mt-7 space-y-3">
            {checks.map((check) => (
              <li key={check} className="rounded-2xl border border-softgray bg-white p-5 text-[#55576A]">{check}</li>
            ))}
          </ul>
          <p className="mt-6 rounded-2xl bg-cream p-5 text-[#55576A]">
            Final submission evidence should include Lighthouse, WAVE, keyboard navigation, and mobile screenshots.
          </p>
        </div>
      </section>
    </>
  );
}
