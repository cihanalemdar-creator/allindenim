import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/CategoryPage";
import { getCategoryBySlug } from "@/content/categories";
import { createMetadata } from "@/lib/site";

const category = getCategoryBySlug("woven-apparel-manufacturing");

export const metadata = createMetadata({
  title: category?.seoTitle ?? "Woven Apparel Manufacturing in Turkey",
  description:
    category?.metaDescription ??
    "Allin Denim supports woven apparel manufacturing in Turkey for international brands.",
  path: "/woven-apparel-manufacturing",
  keywords: category?.keywords
});

export default function WovenApparelManufacturingPage() {
  if (!category) {
    notFound();
  }

  return <CategoryPage category={category} />;
}
