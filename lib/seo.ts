import { siteUrl } from "@/data/pages";

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path === "/" ? "" : path}`;
}
