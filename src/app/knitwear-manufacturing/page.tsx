import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/CategoryPage";
import { getCategoryBySlug } from "@/content/categories";
import { createMetadata } from "@/lib/site";

const category = getCategoryBySlug("knitwear-manufacturing");

export const metadata = createMetadata({
  title: category?.seoTitle ?? "Knitwear Manufacturing in Turkey",
  description:
    category?.metaDescription ??
    "Allin Denim supports knitwear manufacturing in Turkey for international brands.",
  path: "/knitwear-manufacturing",
  keywords: category?.keywords
});

export default function KnitwearManufacturingPage() {
  if (!category) {
    notFound();
  }

  return <CategoryPage category={category} />;
}
