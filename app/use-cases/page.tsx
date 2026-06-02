import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { UseCaseCard } from "@/components/UseCaseCard";
import { getPageMetadata } from "@/data/metadata";
import { useCases } from "@/data/useCases";

export const metadata: Metadata = getPageMetadata("/use-cases");

export default function UseCasesPage() {
  return (
    <>
      <HeroSection eyebrow="For work, study, and life" title="Choose the task you need to" highlight="enter.">
        <p>Different tasks create different kinds of resistance. Gomentum keeps the same promise: one small first move.</p>
      </HeroSection>
      <section className="mx-auto max-w-site px-4 py-16 md:px-6">
        <SectionHeader eyebrow="Use cases" title="Realistic examples, not generic productivity advice." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => <UseCaseCard key={useCase.title} {...useCase} />)}
        </div>
      </section>
      <section className="mx-auto max-w-site px-4 py-12 md:px-6">
        <div className="card-border rounded-panel bg-carddark p-6 md:p-10">
          <SectionHeader eyebrow="How to choose" title="Start with the task that is emotionally loudest." />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Urgent", "A deadline or message is creating pressure."],
              ["Avoided", "You keep thinking about it but not opening it."],
              ["Small enough", "It can be entered with one clear physical action."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-card bg-white/[0.04] p-5">
                <h2 className="text-xl font-bold text-warm">{title}</h2>
                <p className="mt-2 text-textgray">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Pick one task. We will start there." />
    </>
  );
}
