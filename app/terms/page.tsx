import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/terms");

const terms = [
  ["Use of the website", "The public website explains Gomentum and includes a lightweight demo for product understanding."],
  ["Beta product status", "Gomentum is improving. Some features are live, some are being refined, and some are planned."],
  ["No medical claims", "Gomentum is productivity support, not diagnosis, treatment, therapy, or professional medical advice."],
  ["Future updates", "Pricing, features, and product terms may change. Users should be told clearly before major changes."]
];

export default function TermsPage() {
  return (
    <>
      <HeroSection eyebrow="Terms" title="Basic terms for the" highlight="Gomentum beta.">
        <p>Short, plain-language terms for the current website and beta positioning.</p>
      </HeroSection>

      <section className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14">
        <div className="mx-auto max-w-3xl space-y-4">
          {terms.map(([title, text]) => (
            <section key={title} className="rounded-2xl border border-softgray bg-white p-5">
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="mt-2 text-[#55576A]">{text}</p>
            </section>
          ))}
          <p className="rounded-2xl bg-cream p-5 text-sm text-[#55576A]">
            Placeholder note: this page should be reviewed before a full public launch.
          </p>
        </div>
      </section>
    </>
  );
}
