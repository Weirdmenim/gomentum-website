import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/accessibility");

export default function AccessibilityPage() {
  const checks = [
    "Semantic HTML landmarks and one H1 per page",
    "Keyboard-accessible navigation and accordions",
    "Visible focus states for links, buttons, inputs, selects, and summaries",
    "Body text uses at least 16px",
    "Primary buttons use Charcoal text on Amber for contrast",
    "Forms use visible labels and readable error messages",
    "No flashing, strobing, or aggressive motion",
    "Mobile tap targets are at least 44px where practical",
    "Privacy and non-medical notes are readable, not hidden"
  ];
  return (
    <>
      <HeroSection eyebrow="Accessibility" title="Built for clarity, calm, and" highlight="access.">
        <p>Gomentum’s audience includes people with cognitive, attention, and sensory differences. Accessibility is part of the product strategy.</p>
      </HeroSection>
      <section className="mx-auto max-w-site px-4 py-16 md:px-6">
        <SectionHeader eyebrow="WCAG-minded checklist" title="Implementation checks included in this build." />
        <div className="grid gap-4 md:grid-cols-3">
          {checks.map((check) => (
            <div key={check} className="card-border rounded-card bg-white/[0.04] p-5 text-textgray">{check}</div>
          ))}
        </div>
      </section>
    </>
  );
}
