import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/CategoryPage";
import { getCategoryBySlug } from "@/content/categories";
import { createMetadata } from "@/lib/site";

const category = getCategoryBySlug("ready-to-wear-private-label");

export const metadata = createMetadata({
  title: category?.seoTitle ?? "Ready-to-Wear & Private Label Apparel Production in Turkey",
  description:
    category?.metaDescription ??
    "Allin Denim supports ready-to-wear and private label apparel production in Turkey.",
  path: "/ready-to-wear-private-label",
  keywords: category?.keywords
});

export default function ReadyToWearPrivateLabelPage() {
  if (!category) {
    notFound();
  }

  return <CategoryPage category={category} />;
}
