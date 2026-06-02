import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { getPageMetadata } from "@/data/metadata";
import { articleSchema } from "@/data/schema";

export const metadata: Metadata = getPageMetadata("/task-paralysis-guide");

export default function TaskParalysisGuidePage() {
  return (
    <>
      <HeroSection eyebrow="Task paralysis guide" title="Why starting feels hard, and how to make it" highlight="smaller.">
        <p>A calm guide for the moment when you know what you need to do, but cannot begin.</p>
      </HeroSection>
      <article className="mx-auto max-w-3xl px-4 py-16 text-lg text-textgray md:px-6">
        <p className="text-xl leading-relaxed text-warm">Task paralysis is the stuck feeling that appears before action. You may understand the task, care about the outcome, and still feel unable to begin.</p>
        <h2 className="mt-10 text-3xl font-bold text-warm">The problem is often the entrance, not the task.</h2>
        <p className="mt-4">Many productivity tools ask you to organize, prioritize, tag, sort, and schedule. That can help later. But when you are frozen at the starting line, more organization can feel like another task.</p>
        <h2 className="mt-10 text-3xl font-bold text-warm">A first move should be physical and tiny.</h2>
        <p className="mt-4">A useful first move is not “work on the report.” It is something your body can do now: open the document, write the title, read the first heading, pick up three things, or reply to one message.</p>
        <div className="my-10 rounded-panel bg-cream p-6 text-charcoal">
          <h3 className="text-2xl font-bold">First move formula</h3>
          <p className="mt-3">Verb + object + tiny limit.</p>
          <p className="mt-3 font-semibold">Example: Open the document and write only the title.</p>
        </div>
        <h2 className="mt-10 text-3xl font-bold text-warm">Why three minutes can help</h2>
        <p className="mt-4">Three minutes is not a promise to finish. It is a small agreement to begin. Once the task has been entered, continuing often feels less impossible.</p>
        <h2 className="mt-10 text-3xl font-bold text-warm">How Gomentum uses this idea</h2>
        <p className="mt-4">Gomentum is designed to collect what is on your mind, suggest one clear first move, and help you start with a short focus session. It is built around task initiation, not a full task management system.</p>
        <p className="mt-6">You can also read more about <Link href="/adhd-task-initiation" className="text-teal hover:text-amber">ADHD-style task initiation support</Link> or explore the <Link href="/features" className="text-teal hover:text-amber">feature status page</Link>.</p>
      </article>
      <section className="mx-auto max-w-site px-4 py-12 md:px-6">
        <SectionHeader eyebrow="Try it now" title="Turn one avoided task into a first move." align="center" />
      </section>
      <CTASection title="Try one first move, then decide what comes next." />
      <JsonLd data={articleSchema("Task Paralysis Guide | Why Starting Feels Hard", "Learn why starting can feel difficult and how one clear first move can help you begin without pressure.", "/task-paralysis-guide")} />
    </>
  );
}
