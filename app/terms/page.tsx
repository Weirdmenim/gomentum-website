import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/terms");

export default function TermsPage() {
  return (
    <>
      <HeroSection eyebrow="Terms" title="Basic terms for the" highlight="Gomentum beta.">
        <p>This is a website-ready terms placeholder. Replace with legal-approved terms before public launch.</p>
      </HeroSection>
      <section className="mx-auto max-w-3xl px-4 py-16 text-textgray md:px-6">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-warm">Use of the website</h2>
            <p className="mt-2">The website explains Gomentum and provides a static first-step demo. It should not be treated as medical, legal, financial, or emergency advice.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-warm">Beta product status</h2>
            <p className="mt-2">Gomentum is presented as a beta-stage product. Some features may be live, improving, or planned for later versions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-warm">No medical claims</h2>
            <p className="mt-2">Gomentum supports task initiation and productivity. It does not diagnose, treat, cure, or replace professional care.</p>
          </section>
        </div>
      </section>
    </>
  );
}
