import type { MetadataRoute } from "next";
import { programs } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hongcheon-yeolmokeo-village.geosangbruce.chatgpt.site";
  const routes = ["", "/village", "/programs", "/stay", "/group", "/guide", "/market", "/stories", "/contact", "/privacy", "/terms"];
  return [...routes.map(route => ({ url: `${base}${route}`, changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : .7 })), ...programs.map(program => ({ url: `${base}/programs/${program.slug}`, changeFrequency: "monthly" as const, priority: .8 }))];
}
