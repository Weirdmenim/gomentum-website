import { faqs } from "@/data/faq";

export function FAQAccordion({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <div className="space-y-3">
      {items.map((faq, index) => (
        <details key={faq.question} className="group rounded-2xl border border-softgray/15 bg-white/[0.04] p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-warm">
            <span>{faq.question}</span>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/5 text-teal transition group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="mt-4 text-textgray">{faq.answer}</p>
          {index === 3 ? <p className="mt-3 text-sm text-textgray">Gomentum is for support and productivity education. It is not a substitute for professional advice.</p> : null}
        </details>
      ))}
    </div>
  );
}
