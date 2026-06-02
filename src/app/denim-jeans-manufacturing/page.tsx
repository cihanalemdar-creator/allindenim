import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/CategoryPage";
import { getCategoryBySlug } from "@/content/categories";
import { createMetadata } from "@/lib/site";

const category = getCategoryBySlug("denim-jeans-manufacturing");

export const metadata = createMetadata({
  title: category?.seoTitle ?? "Denim & Jeans Manufacturing in Turkey",
  description:
    category?.metaDescription ??
    "Allin Denim supports denim and jeans manufacturing in Turkey for international brands.",
  path: "/denim-jeans-manufacturing",
  keywords: category?.keywords
});

export default function DenimJeansManufacturingPage() {
  if (!category) {
    notFound();
  }

  return <CategoryPage category={category} />;
}
