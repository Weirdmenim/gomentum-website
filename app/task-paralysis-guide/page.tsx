import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { getPageMetadata } from "@/data/metadata";
import { articleSchema } from "@/data/schema";

export const metadata: Metadata = getPageMetadata("/task-paralysis-guide");

const sections = [
  ["The task may not be the problem", "Sometimes the hard part is not doing the task. It is finding a small enough entrance into it."],
  ["A first move should be physical", "Good first moves are visible actions: open the document, write the title, pick up three things, read one heading."],
  ["Three minutes lowers the pressure", "A short start is easier to accept than a full work session. The aim is to begin, not to prove anything."],
  ["How Gomentum uses this idea", "Gomentum turns the task into a small first move, then supports a short start so momentum has a chance to appear."]
];

export default function TaskParalysisGuidePage() {
  return (
    <>
      <HeroSection eyebrow="Task paralysis guide" title="Why starting feels hard, and how to make it" highlight="smaller.">
        <p>A calm guide for people who know what to do but still cannot begin.</p>
      </HeroSection>

      <article className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14">
        <div className="mx-auto max-w-3xl space-y-7">
          {sections.map(([title, text]) => (
            <section key={title} className="rounded-2xl border border-softgray bg-white p-6">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-3 leading-8 text-[#55576A]">{text}</p>
            </section>
          ))}
        </div>
      </article>

      <CTASection title="Try one first move, then decide what comes next." />
      <JsonLd data={articleSchema("Task Paralysis Guide", "Learn why starting can feel difficult and how one clear first move can help you begin without pressure.", "/task-paralysis-guide")} />
    </>
  );
}
