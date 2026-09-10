import type { MetadataRoute } from "next";
import { programs } from "@/data/site";
import { stories } from "@/data/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hongcheon-yeolmokeo.vercel.app";
  const routes = ["", "/village", "/village/greeting", "/village/vision", "/village/yeolmokeo", "/village/facilities", "/village/location", "/programs", "/stay", "/group", "/guide", "/travel", "/market", "/stories", "/contact", "/privacy", "/terms"];
  return [...routes.map(route => ({ url: `${base}${route}`, changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : .7 })), ...programs.map(program => ({ url: `${base}/programs/${program.slug}`, changeFrequency: "monthly" as const, priority: .8 })), ...stories.map(story => ({ url: `${base}/stories/${story.slug}`, lastModified: new Date(`${story.updatedAt ?? story.publishedAt}T00:00:00+09:00`), changeFrequency: "monthly" as const, priority: story.featured ? .85 : .7 }))];
}
