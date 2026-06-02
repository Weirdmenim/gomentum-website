import type { MetadataRoute } from "next";
import { pages, siteUrl } from "@/data/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: new Date(),
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : page.path.includes("task-paralysis") ? 0.9 : 0.75
  }));
}
