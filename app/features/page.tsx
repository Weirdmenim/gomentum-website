import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroSection } from "@/components/HeroSection";
import { Icon } from "@/components/Icons";
import { SectionHeader } from "@/components/SectionHeader";
import { features } from "@/data/features";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/features");

export default function FeaturesPage() {
  return (
    <>
      <HeroSection eyebrow="Product features" title="AI task breakdown for" highlight="first moves.">
        <p>Gomentum focuses on the moment before action: brain dump, first move, short start, and gentle momentum. Feature status labels keep the beta experience honest.</p>
      </HeroSection>
      <section className="mx-auto max-w-site px-4 py-16 md:px-6">
        <SectionHeader eyebrow="Core features" title="Built to reduce the size of starting." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}
        </div>
      </section>
      <section id="not-task-manager" className="mx-auto max-w-site px-4 py-12 md:px-6">
        <div className="card-border rounded-panel bg-carddark p-6 md:p-10">
          <SectionHeader eyebrow="Positioning" title="Gomentum is not another task manager.">
            <p>It does not begin by asking you to organize everything. It begins by helping you move.</p>
          </SectionHeader>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Task managers", "Store and organize what you already plan to do."],
              ["Productivity methods", "Give frameworks that can still feel hard to start."],
              ["Gomentum", "Finds one first move and helps you begin gently."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-card bg-offblack/70 p-6">
                <Icon name={title === "Gomentum" ? "spark" : "document"} className="h-7 w-7 text-amber" />
                <h2 className="mt-4 text-xl font-bold text-warm">{title}</h2>
                <p className="mt-2 text-textgray">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Try the first-step demo before signing up." />
    </>
  );
}
