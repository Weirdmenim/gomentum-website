import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getPageMetadata } from "@/data/metadata";
import { resources } from "@/data/resources";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/data/schema";

export const metadata: Metadata = getPageMetadata("/resources");

export default function ResourcesPage() {
  return (
    <>
      <HeroSection eyebrow="Resources" title="Clarity, strategies, and support to help" highlight="you start.">
        <p>Practical guides, real examples, and calm explanations for task paralysis, brain dumps, and first moves.</p>
      </HeroSection>
      <section className="mx-auto max-w-site px-4 py-16 md:px-6">
        <SectionHeader eyebrow="Featured resources" title="Learn the idea before you try the product." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => <ResourceCard key={resource.title} resource={resource} />)}
        </div>
      </section>
      <section id="overthinking" className="mx-auto grid max-w-site gap-6 px-4 py-12 lg:grid-cols-[1.1fr_0.8fr] md:px-6">
        <div className="card-border rounded-panel bg-carddark p-6 md:p-8">
          <h2 className="text-3xl font-bold text-warm">Popular articles</h2>
          <div className="mt-6 divide-y divide-softgray/10">
            {resources.slice(0, 3).map((resource) => (
              <div key={resource.title} className="py-5 first:pt-0 last:pb-0">
                <p className="text-sm font-semibold text-teal">{resource.category}</p>
                <h3 className="mt-1 text-xl font-bold text-warm">{resource.title}</h3>
                <p className="mt-2 text-textgray">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
        <NewsletterForm />
      </section>
      <section id="questions" className="mx-auto max-w-site px-4 py-12 md:px-6">
        <div className="rounded-panel bg-cream p-6 text-charcoal md:p-10">
          <h2 className="text-3xl font-bold">10 questions to find your first move</h2>
          <ol className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              "What is the smallest visible part of this task?",
              "What app, page, object, or document needs to be opened first?",
              "What could I do for only three minutes?",
              "What part would make the next step easier?",
              "What does done-for-now look like?",
              "What can I write as a placeholder?",
              "What can I delete, move, or choose first?",
              "What would help me avoid deciding everything now?",
              "What can I do without finishing the whole task?",
              "What is the first physical action?"
            ].map((question) => <li key={question}>{question}</li>)}
          </ol>
        </div>
      </section>
      <CTASection title="Ready to turn what is on your mind into your first move?" />
      <JsonLd data={articleSchema("Task Initiation and Procrastination Resources", "Calm guides for task paralysis, procrastination, brain dumps, and focus.", "/resources")} />
    </>
  );
}
