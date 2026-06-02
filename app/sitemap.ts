import type { MetadataRoute } from "next";
import { allRoutes, SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date("2026-06-02"),
    changeFrequency: route.startsWith("/resources") ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/resources") ? 0.75 : 0.8
  }));
}
