import type { ReactNode } from "react";
import { AssetIcon } from "@/components/AssetIcon";

export type CategoryPageData = {
  slug: string;
  title: string;
  navTitle: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  description: string;
  imageLabel: string;
  icon: ReactNode;
  capabilities: string[];
  products: string[];
  materials: string[];
  support: string[];
  quality: string[];
  related: string[];
};

export const categoryPages: CategoryPageData[] = [
  {
    slug: "denim-jeans-manufacturing",
    title: "Denim & Jeans Manufacturing",
    navTitle: "Denim & Jeans",
    h1: "Denim & Jeans Manufacturing in Turkey",
    seoTitle: "Denim Manufacturer Turkey | Jeans Production Partner",
    metaDescription:
      "Allin Denim supports denim and jeans manufacturing in Turkey, including jeans, jackets, shirts, skirts, shorts, washed denim, stretch denim, sampling, trims, labels, packaging, and private label denim.",
    keywords: [
      "denim manufacturer Turkey",
      "jeans manufacturer Turkey",
      "private label jeans Turkey",
      "denim production Turkey"
    ],
    eyebrow: "Core category",
    description:
      "Allin Denim helps international brands manage denim production in Turkey, from sampling and fit development to wash direction, trims, labels, packaging, quality control, and export coordination.",
    imageLabel: "Future denim, wash, or jeans production image",
    icon: <AssetIcon name="denim-jeans" />,
    capabilities: [
      "Sampling and fit development for denim styles",
      "Wash direction coordination for selected denim products",
      "Trim, label, patch, rivet, button, and packaging support",
      "Private label denim production coordination",
      "Production follow-up and quality control checkpoints",
      "Export coordination for approved orders"
    ],
    products: [
      "Jeans",
      "Denim jackets",
      "Denim shirts",
      "Denim skirts",
      "Denim shorts",
      "Washed denim",
      "Stretch denim",
      "Private label denim"
    ],
    materials: [
      "Rigid denim",
      "Stretch denim",
      "Washed denim finishes",
      "Cotton-rich denim fabrics",
      "Metal trims and rivets",
      "Leather or jacron patches",
      "Labels, hangtags, and branded packaging"
    ],
    support: [
      "Tech pack and product requirement review",
      "Fabric and trim sourcing",
      "Sample coordination and fit comments",
      "Costing and confirmation support",
      "Production planning and buyer communication",
      "Packing and export coordination"
    ],
    quality: [
      "Measurement control against approved samples",
      "Wash, shade, and finish review where applicable",
      "Workmanship checks on seams, pockets, zippers, trims, and labels",
      "Packaging and labeling review",
      "Final inspection coordination"
    ],
    related: [
      "woven-apparel-manufacturing",
      "ready-to-wear-private-label",
      "product-categories"
    ]
  },
  {
    slug: "woven-apparel-manufacturing",
    title: "Woven Apparel Manufacturing",
    navTitle: "Woven Apparel",
    h1: "Woven Apparel Manufacturing in Turkey",
    seoTitle: "Woven Apparel Manufacturer Turkey | Shirt & Garment Production",
    metaDescription:
      "Allin Denim supports woven apparel manufacturing in Turkey for shirts, blouses, dresses, trousers, skirts, jackets, baby and kids' woven styles, and uniform-style products with sourcing, sampling, and production management.",
    keywords: [
      "woven apparel manufacturer Turkey",
      "woven garment production Turkey",
      "shirt manufacturer Turkey"
    ],
    eyebrow: "Woven category",
    description:
      "Allin Denim coordinates woven garment production for brands that need fabric sourcing, pattern and sampling support, supplier matching, production follow-up, and export-ready delivery.",
    imageLabel: "Future woven apparel or cutting table image",
    icon: <AssetIcon name="woven-apparel" />,
    capabilities: [
      "Fabric sourcing for woven apparel programs",
      "Pattern development and sampling coordination",
      "Production management across relevant suppliers",
      "Buyer communication and approval tracking",
      "Quality control and packaging review",
      "Export coordination support"
    ],
    products: [
      "Shirts",
      "Blouses",
      "Dresses",
      "Trousers",
      "Skirts",
      "Jackets",
      "Baby and kids' woven styles",
      "Uniform-style products"
    ],
    materials: [
      "Cotton poplin",
      "Twill",
      "Canvas",
      "Viscose blends",
      "Linen blends",
      "Polyester blends",
      "Buttons, zippers, labels, and packaging"
    ],
    support: [
      "Requirement and target price review",
      "Fabric and trim sourcing",
      "Pattern and sample coordination",
      "Supplier and production planning",
      "Production follow-up",
      "Packing and export coordination"
    ],
    quality: [
      "Measurement and fit checks",
      "Stitching and workmanship review",
      "Fabric, trim, and label verification",
      "Labeling and safety details reviewed for baby and kids' styles where required",
      "Inline production checks",
      "Final inspection coordination"
    ],
    related: ["denim-jeans-manufacturing", "knitwear-manufacturing", "ready-to-wear-private-label"]
  },
  {
    slug: "knitwear-manufacturing",
    title: "Knitwear Manufacturing",
    navTitle: "Knitwear",
    h1: "Knitwear Manufacturing in Turkey",
    seoTitle: "Knitwear Manufacturer Turkey | T-Shirt & Hoodie Production",
    metaDescription:
      "Allin Denim supports knitwear manufacturing in Turkey for t-shirts, sweatshirts, hoodies, polo shirts, joggers, casualwear, babywear basics, jersey, fleece, rib, interlock, and pique options.",
    keywords: [
      "knitwear manufacturer Turkey",
      "t-shirt manufacturer Turkey",
      "hoodie manufacturer Turkey"
    ],
    eyebrow: "Knit category",
    description:
      "Allin Denim supports knit apparel programs for brands seeking comfortable casualwear, jersey basics, babywear basics, sweatshirts, hoodies, and private label knit collections made through Turkish suppliers.",
    imageLabel: "Future knitwear, jersey, or casualwear image",
    icon: <AssetIcon name="knitwear" />,
    capabilities: [
      "Knit fabric sourcing and supplier coordination",
      "Sample, fit, and size set follow-up",
      "Private label knitwear production support",
      "Print, embroidery, label, and packaging coordination",
      "Production planning and buyer updates",
      "Quality control checkpoints"
    ],
    products: [
      "T-shirts",
      "Sweatshirts",
      "Hoodies",
      "Polo shirts",
      "Joggers",
      "Casualwear",
      "Babywear basics",
      "Kids' jersey sets"
    ],
    materials: [
      "Jersey",
      "Fleece",
      "Rib",
      "Interlock",
      "Pique",
      "Cotton and cotton blends",
      "Soft cotton fabrics for baby and kids' basics",
      "Elastic trims, drawcords, labels, and packaging"
    ],
    support: [
      "Product brief review",
      "Fabric and accessory sourcing",
      "Sample development and fit feedback",
      "Print or embroidery coordination where required",
      "Production follow-up",
      "Packing and shipment preparation support"
    ],
    quality: [
      "Shrinkage and measurement attention where applicable",
      "Print or embroidery placement checks",
      "Seam and finishing review",
      "Label and packaging verification",
      "Destination-market testing and labeling review for baby or children's apparel where required",
      "Final inspection coordination"
    ],
    related: [
      "underwear-loungewear-manufacturing",
      "ready-to-wear-private-label",
      "woven-apparel-manufacturing"
    ]
  },
  {
    slug: "underwear-loungewear-manufacturing",
    title: "Underwear & Loungewear Manufacturing",
    navTitle: "Underwear & Loungewear",
    h1: "Underwear & Loungewear Manufacturing in Turkey",
    seoTitle: "Underwear Manufacturer Turkey | Loungewear Production Partner",
    metaDescription:
      "Allin Denim supports underwear and loungewear manufacturing in Turkey for underwear, pajamas, baby bodywear, basic bodywear, soft fabrics, elastic trims, comfort-focused production, and private label underwear.",
    keywords: [
      "underwear manufacturer Turkey",
      "loungewear manufacturer Turkey",
      "private label underwear Turkey"
    ],
    eyebrow: "Comfort category",
    description:
      "Allin Denim helps brands coordinate comfort-focused underwear, loungewear, pajamas, baby bodywear, and basic bodywear production with attention to soft fabrics, elastic trims, fit, packaging, and quality control.",
    imageLabel: "Future underwear, loungewear, or soft fabric image",
    icon: <AssetIcon name="underwear-loungewear" />,
    capabilities: [
      "Supplier coordination for comfort-focused apparel",
      "Soft fabric and elastic trim sourcing",
      "Sampling and fit development support",
      "Labeling and packaging coordination",
      "Production follow-up",
      "Quality control and final inspection coordination"
    ],
    products: [
      "Underwear",
      "Loungewear",
      "Pajamas",
      "Baby bodywear",
      "Basic bodywear",
      "Comfort basics",
      "Private label underwear"
    ],
    materials: [
      "Cotton jersey",
      "Modal and viscose blends",
      "Rib fabrics",
      "Stretch fabrics",
      "Soft cotton fabrics for close-to-skin baby products",
      "Elastic trims",
      "Soft labels",
      "Retail-ready packaging"
    ],
    support: [
      "Fit and comfort requirement review",
      "Material and trim sourcing",
      "Sample development",
      "Size and measurement coordination",
      "Production monitoring",
      "Packaging and export coordination"
    ],
    quality: [
      "Measurement and fit control",
      "Elastic and trim placement checks",
      "Softness and comfort-focused review",
      "Close-to-skin testing and babywear labeling requirements reviewed when requested",
      "Packaging and label checks",
      "Final inspection coordination"
    ],
    related: ["knitwear-manufacturing", "ready-to-wear-private-label", "product-categories"]
  },
  {
    slug: "ready-to-wear-private-label",
    title: "Ready-to-Wear / Private Label Apparel",
    navTitle: "Private Label",
    h1: "Ready-to-Wear & Private Label Apparel Production in Turkey",
    seoTitle: "Private Label Clothing Turkey | Ready-to-Wear Manufacturer",
    metaDescription:
      "Allin Denim supports private label clothing and ready-to-wear apparel production in Turkey, including adult, baby, and kids' collection planning, sourcing, sampling, production coordination, packaging, and export support.",
    keywords: [
      "private label clothing Turkey",
      "ready to wear manufacturer Turkey",
      "apparel production Turkey"
    ],
    eyebrow: "Private label production",
    description:
      "Allin Denim helps brands build and manage private label apparel programs in Turkey, including adult, baby, and kids' ranges, from collection planning and sourcing to sampling, production coordination, packaging, quality control, and export support.",
    imageLabel: "Future private label collection or packaging image",
    icon: <AssetIcon name="private-label" />,
    capabilities: [
      "End-to-end private label apparel development",
      "Collection planning and category coordination",
      "Fabric, trim, label, and packaging sourcing",
      "Sampling and approval follow-up",
      "Production coordination",
      "Export support for finished orders"
    ],
    products: [
      "Ready-to-wear collections",
      "Private label denim",
      "Private label woven apparel",
      "Private label knitwear",
      "Private label underwear and loungewear",
      "Baby and kids' private label basics",
      "Multi-category apparel programs"
    ],
    materials: [
      "Denim, woven, and knit fabrics",
      "Category-specific trims",
      "Brand labels and hangtags",
      "Care labels",
      "Retail packaging",
      "Carton and shipment packaging"
    ],
    support: [
      "Collection scope and launch planning",
      "Supplier and material sourcing",
      "Sample coordination",
      "Costing and confirmation support",
      "Production management",
      "Packaging and export coordination"
    ],
    quality: [
      "Sample approval tracking",
      "Measurement and workmanship checks",
      "Label and packaging verification",
      "Testing, labeling, and documentation coordination for baby or children's styles where required",
      "Inline production follow-up",
      "Final inspection coordination"
    ],
    related: ["denim-jeans-manufacturing", "woven-apparel-manufacturing", "knitwear-manufacturing"]
  }
];

export function getCategoryBySlug(slug: string) {
  return categoryPages.find((category) => category.slug === slug);
}

export function getRelatedCategories(category: CategoryPageData) {
  return category.related
    .map((slug) => getCategoryBySlug(slug))
    .filter((item): item is CategoryPageData => Boolean(item));
}
