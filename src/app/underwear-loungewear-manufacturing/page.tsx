import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/CategoryPage";
import { getCategoryBySlug } from "@/content/categories";
import { createMetadata } from "@/lib/site";

const category = getCategoryBySlug("underwear-loungewear-manufacturing");

export const metadata = createMetadata({
  title: category?.seoTitle ?? "Underwear & Loungewear Manufacturing in Turkey",
  description:
    category?.metaDescription ??
    "Allin Denim supports underwear and loungewear manufacturing in Turkey for international brands.",
  path: "/underwear-loungewear-manufacturing",
  keywords: category?.keywords
});

export default function UnderwearLoungewearManufacturingPage() {
  if (!category) {
    notFound();
  }

  return <CategoryPage category={category} />;
}
