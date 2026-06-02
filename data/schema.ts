import { faqs } from "./faq";
import { siteUrl } from "./pages";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gomentum",
  url: siteUrl,
  logo: `${siteUrl}/icons/gomentum-icon.svg`,
  sameAs: []
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Gomentum",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Web",
  description: "Gomentum helps people start tasks when starting feels impossible by turning overwhelming tasks into one clear first move.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free beta access. No card required."
  },
  url: siteUrl
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export function articleSchema(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Organization",
      name: "Gomentum"
    },
    publisher: {
      "@type": "Organization",
      name: "Gomentum",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icons/gomentum-icon.svg`
      }
    },
    url: `${siteUrl}${path}`
  };
}
