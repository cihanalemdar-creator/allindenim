import { CategoryOverviewPage } from "@/components/CategoryPage";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Apparel Product Categories Manufactured in Turkey",
  description:
    "Explore apparel production categories supported by Allin Denim in Turkey, including denim, woven apparel, knitwear, underwear, loungewear, ready-to-wear, and private label apparel.",
  path: "/product-categories",
  keywords: [
    "apparel manufacturer Turkey",
    "clothing manufacturer Turkey",
    "garment production Turkey",
    "private label clothing Turkey",
    "denim manufacturer Turkey",
    "knitwear manufacturer Turkey",
    "underwear manufacturer Turkey"
  ]
});

export default function ProductCategoriesPage() {
  return <CategoryOverviewPage />;
}
