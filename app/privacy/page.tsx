import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/privacy");

export default function PrivacyPage() {
  return (
    <>
      <HeroSection eyebrow="Privacy" title="Plain-English privacy for a product that handles" highlight="personal tasks.">
        <p>This page is a practical placeholder for the final reviewed privacy policy. Replace with legal-approved copy before launch.</p>
      </HeroSection>
      <section className="mx-auto max-w-3xl px-4 py-16 text-textgray md:px-6">
        <SectionHeader title="Privacy principles" />
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-warm">Task inputs should stay private.</h2>
            <p className="mt-2">Users may type sensitive task details. The product should collect only what it needs, explain what happens to inputs, and avoid unnecessary sharing.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-warm">The website demo is local-rule-based.</h2>
            <p className="mt-2">The public first-step demo in this build does not connect to live AI. It uses local example rules to show the concept safely.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-warm">Users should control their data.</h2>
            <p className="mt-2">The product roadmap should include clear export, deletion, and account-control flows before wider launch.</p>
          </section>
        </div>
      </section>
    </>
  );
}
