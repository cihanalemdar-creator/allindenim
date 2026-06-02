import type { Metadata } from "next";

export const siteConfig = {
  name: "Allin Denim",
  url: "https://allindenim.com",
  description:
    "Turkey-based apparel sourcing and manufacturing partner for denim, woven apparel, knitwear, underwear, ready-to-wear, private label production, quality control, and export coordination.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/capabilities", label: "Capabilities" },
    { href: "/product-categories", label: "Categories" },
    { href: "/quality-control-compliance", label: "Quality" },
    { href: "/sourcing-in-turkey", label: "Sourcing" },
    { href: "/faq", label: "FAQ" }
  ]
};

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords
}: SeoInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
