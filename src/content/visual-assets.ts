export type VisualAsset = {
  id: string;
  label: string;
  path: string;
  ratio: "portrait" | "wide";
  usedFor: string[];
  alt: string;
};

export const visualAssets: VisualAsset[] = [
  {
    id: "home-hero",
    label: "Homepage Hero",
    path: "/assets/images/preview/home-hero-apparel-production.webp",
    ratio: "portrait",
    usedFor: ["Home hero"],
    alt: "Premium apparel production workspace with garments, fabric swatches, trims, and sourcing documents"
  },
  {
    id: "denim-jeans",
    label: "Denim & Jeans",
    path: "/assets/images/preview/category-denim-jeans.webp",
    ratio: "portrait",
    usedFor: ["Home denim feature", "Denim & Jeans category page"],
    alt: "Denim jeans samples, washed denim fabrics, trims, and stitching details"
  },
  {
    id: "woven-apparel",
    label: "Woven Apparel",
    path: "/assets/images/preview/category-woven-apparel.webp",
    ratio: "portrait",
    usedFor: ["Woven Apparel category page"],
    alt: "Woven shirts, blouses, trousers, jackets, fabric swatches, and pattern materials"
  },
  {
    id: "knitwear",
    label: "Knitwear",
    path: "/assets/images/preview/category-knitwear.webp",
    ratio: "portrait",
    usedFor: ["Knitwear category page"],
    alt: "Knitwear samples including t-shirts, hoodies, sweatshirts, jersey, fleece, rib, and pique fabrics"
  },
  {
    id: "underwear-loungewear",
    label: "Underwear & Loungewear",
    path: "/assets/images/preview/category-underwear-loungewear.webp",
    ratio: "portrait",
    usedFor: ["Underwear & Loungewear category page"],
    alt: "Soft underwear, loungewear, pajamas, elastic trims, and comfort-focused fabrics"
  },
  {
    id: "private-label",
    label: "Private Label",
    path: "/assets/images/preview/category-private-label.webp",
    ratio: "portrait",
    usedFor: ["Ready-to-Wear / Private Label category page"],
    alt: "Private label apparel collection samples, fabric swatches, hangtags, packaging, and production notes"
  },
  {
    id: "fabric-trim-sourcing",
    label: "Fabric & Trim Sourcing",
    path: "/assets/images/preview/section-fabric-trim-sourcing.webp",
    ratio: "wide",
    usedFor: ["Sourcing in Turkey", "Capabilities"],
    alt: "Fabric rolls, denim swatches, woven fabrics, knit fabrics, buttons, zippers, labels, and trims"
  },
  {
    id: "sampling-tech-pack",
    label: "Sampling / Tech Pack",
    path: "/assets/images/preview/section-sampling-tech-pack.webp",
    ratio: "wide",
    usedFor: ["Production Process", "About"],
    alt: "Sample garment, measuring tape, pattern paper, fabric swatches, trims, and technical development documents"
  },
  {
    id: "quality-control",
    label: "Quality Control",
    path: "/assets/images/preview/section-quality-control.webp",
    ratio: "wide",
    usedFor: ["Quality Control & Compliance"],
    alt: "Garment measurement and quality control setup on a clean inspection table"
  },
  {
    id: "quality-control-hero",
    label: "Quality Control Hero",
    path: "/assets/images/preview/quality-control-hero.webp",
    ratio: "wide",
    usedFor: ["Quality Control & Compliance hero"],
    alt: "Folded apparel, denim samples, fabric swatches, measuring tools, and quality control checklist on a clean inspection table"
  },
  {
    id: "compliance-documentation",
    label: "Compliance Documentation",
    path: "/assets/images/preview/compliance-documentation.webp",
    ratio: "wide",
    usedFor: ["Quality Control & Compliance documentation section"],
    alt: "Fabric swatches, generic laboratory reports, fiber composition documents, trims, labels, and compliance documentation folder"
  },
  {
    id: "product-testing-inspection",
    label: "Product Testing & Inspection",
    path: "/assets/images/preview/product-testing-inspection.webp",
    ratio: "wide",
    usedFor: ["Quality Control & Compliance testing section"],
    alt: "Garment sample, denim and knit swatches, measuring tools, sample vials, care labels, and inspection checklist"
  },
  {
    id: "packaging-export",
    label: "Packaging & Export",
    path: "/assets/images/preview/section-packaging-export.webp",
    ratio: "wide",
    usedFor: ["Production Process", "Quality Control & Compliance"],
    alt: "Folded apparel, neutral packaging, cartons, labels, and export preparation materials"
  },
  {
    id: "about-sourcing-partner",
    label: "About / Sourcing Partner",
    path: "/assets/images/preview/about-sourcing-partner.webp",
    ratio: "wide",
    usedFor: ["About Allin Denim"],
    alt: "Apparel sourcing workspace with fabric swatches, denim samples, garment sketches, and production planning materials"
  },
  {
    id: "contact-production-inquiry",
    label: "Contact Production Inquiry",
    path: "/assets/images/preview/contact-production-inquiry.webp",
    ratio: "wide",
    usedFor: ["Contact page"],
    alt: "Production inquiry desk with garment samples, fabric swatches, trims, measuring tape, and sourcing documents"
  }
];

export function getVisualAsset(id: string) {
  return visualAssets.find((asset) => asset.id === id);
}
