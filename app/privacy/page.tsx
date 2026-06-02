import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/privacy");

const principles = [
  ["Task inputs should stay private", "A product like Gomentum may handle personal tasks, so the privacy message must be clear and easy to find."],
  ["The public demo is limited", "The website demo is a page preview, not a full AI workflow. It should not collect private task data."],
  ["Users should stay in control", "Future product data should be exportable, deletable, and handled with clear consent."],
  ["Plain language matters", "Privacy content should be readable without legal stress or hidden meaning."]
];

export default function PrivacyPage() {
  return (
    <>
      <HeroSection eyebrow="Privacy" title="Plain-English privacy for personal" highlight="tasks.">
        <p>A calm privacy page for a product that may handle thoughts, tasks, and unfinished work.</p>
      </HeroSection>

      <section className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14">
        <div className="mx-auto max-w-3xl space-y-4">
          {principles.map(([title, text]) => (
            <section key={title} className="rounded-2xl border border-softgray bg-white p-5">
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="mt-2 text-[#55576A]">{text}</p>
            </section>
          ))}
          <p className="rounded-2xl bg-cream p-5 text-sm text-[#55576A]">
            Placeholder note: this page should be reviewed and replaced with founder-approved policy copy before a full public launch.
          </p>
        </div>
      </section>
    </>
  );
}
