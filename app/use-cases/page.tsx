import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { useCases } from "@/data/useCases";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/use-cases");

export default function UseCasesPage() {
  return (
    <>
      <HeroSection eyebrow="Use cases" title="Use Gomentum for the task you need to" highlight="enter.">
        <p>Work, study, life admin, and avoided tasks can all start with one smaller move.</p>
      </HeroSection>

      <section className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">Examples, kept simple</h2>
          <div className="mt-7 space-y-3">
            {useCases.map((item) => (
              <article key={item.title} className="rounded-2xl border border-softgray bg-white p-5">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-[#55576A]">{item.problem}</p>
                <p className="mt-3 rounded-xl bg-cream p-4 text-sm text-charcoal"><strong>First move:</strong> {item.firstMove}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Pick one task. Start there." />
    </>
  );
}
