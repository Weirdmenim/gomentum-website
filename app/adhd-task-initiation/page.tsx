import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/adhd-task-initiation");

const points = [
  "Start with one visible action, not a full plan.",
  "Keep the tone gentle and non-shaming.",
  "Use short starts so the task feels less threatening."
];

export default function ADHDTaskInitiationPage() {
  return (
    <>
      <HeroSection eyebrow="ADHD-style overwhelm" title="Support for starting tasks, without" highlight="pressure.">
        <p>Gomentum is built for people who know what they need to do but still feel stuck at the starting line.</p>
      </HeroSection>

      <section className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-card bg-cream p-6">
            <h2 className="text-3xl font-bold">A clear note first.</h2>
            <p className="mt-3 text-[#55576A]">
              Gomentum is not a medical, therapy, or diagnostic tool. It is a productivity support product designed to make the first step easier.
            </p>
          </div>
          <h2 className="mt-10 text-3xl font-bold md:text-4xl">What the site and product aim to reduce</h2>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="rounded-2xl border border-softgray bg-white p-5 text-[#55576A]">{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Try one small, clear action." label="Try one first move" />
    </>
  );
}
