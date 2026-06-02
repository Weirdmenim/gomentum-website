import type { Metadata } from "next";
import { pages, siteUrl } from "./pages";

export function getPageMetadata(path: string): Metadata {
  const page = pages.find((item) => item.path === path) || pages[0];
  const url = `${siteUrl}${page.path === "/" ? "" : page.path}`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "Gomentum",
      type: "website",
      images: [
        {
          url: `${siteUrl}/og/gomentum-og.svg`,
          width: 1200,
          height: 630,
          alt: "Gomentum preview: one small step to your first move."
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [`${siteUrl}/og/gomentum-og.svg`]
    }
  };
}
