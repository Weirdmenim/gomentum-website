import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { getPageMetadata } from "@/data/metadata";
import { resources } from "@/data/resources";

export const metadata: Metadata = getPageMetadata("/resources");

export default function ResourcesPage() {
  return (
    <>
      <HeroSection eyebrow="Resources" title="Short guides for getting" highlight="started.">
        <p>Simple reading for moments when you need less pressure and one clearer next step.</p>
      </HeroSection>

      <section className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">Start with one guide</h2>
          <div className="mt-7 space-y-3">
            {resources.slice(0, 5).map((resource) => (
              <Link key={resource.title} href={resource.href} className="block rounded-2xl border border-softgray bg-white p-5 transition hover:bg-cream">
                <p className="text-sm font-semibold text-[#0A6F62]">{resource.type} · {resource.readTime}</p>
                <h3 className="mt-2 text-xl font-bold">{resource.title}</h3>
                <p className="mt-2 text-[#55576A]">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to turn one task into a first move?" />
    </>
  );
}
