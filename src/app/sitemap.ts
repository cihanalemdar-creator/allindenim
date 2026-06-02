import type { MetadataRoute } from "next";
import { categoryPages } from "@/content/categories";
import { siteConfig } from "@/lib/site";

const staticRoutes = [
  "",
  "/about",
  "/capabilities",
  "/product-categories",
  "/production-process",
  "/quality-control-compliance",
  "/sourcing-in-turkey",
  "/faq",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const categoryRoutes = categoryPages.map((category) => `/${category.slug}`);

  return [...staticRoutes, ...categoryRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.75
  }));
}
