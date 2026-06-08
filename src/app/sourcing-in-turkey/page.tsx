import { AssetIcon } from "@/components/AssetIcon";
import { Button } from "@/components/Button";
import { CapabilityCard } from "@/components/cards";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeader } from "@/components/SectionHeader";
import { getVisualAsset } from "@/content/visual-assets";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Clothing Sourcing Turkey | Apparel Sourcing Partner",
  description:
    "Source apparel production in Turkey with Allin Denim, a Turkey-based partner supporting factory network coordination, fabric and trim sourcing, sampling, production management, quality control, and export coordination.",
  path: "/sourcing-in-turkey",
  keywords: [
    "clothing sourcing Turkey",
    "apparel sourcing agent Turkey",
    "Turkish textile manufacturer",
    "apparel manufacturer Turkey",
    "clothing manufacturer Turkey"
  ]
});

const sourcingSections = [
  {
    title: "Why Source Apparel from Turkey",
    description:
      "Turkey is a practical sourcing destination for international buyers looking for apparel production with strong supplier access, developed textile services, and export experience.",
    icon: <AssetIcon name="global-partner" />
  },
  {
    title: "Textile Ecosystem",
    description:
      "The ecosystem includes apparel production, fabric suppliers, trims, washing, printing, embroidery, packaging, logistics, and export-related services.",
    icon: <AssetIcon name="factory-network" />
  },
  {
    title: "Flexible Production Possibilities",
    description:
      "MOQ and production flexibility depend on category, fabric, supplier, season, and finishing needs, but Turkey can offer practical options for many B2B projects.",
    icon: <AssetIcon name="timeline-planning" />
  },
  {
    title: "Fabric and Trim Access",
    description:
      "Buyers can access denim, woven, knit fabrics, elastic trims, labels, hangtags, buttons, zippers, packaging, and category-specific accessories.",
    icon: <AssetIcon name="trims-accessories" />
  },
  {
    title: "Nearshore Advantage for Europe",
    description:
      "For European and nearby markets, Turkey can support shorter communication cycles and potentially faster lead times than distant sourcing regions.",
    icon: <AssetIcon name="fast-turnaround" />
  },
  {
    title: "Export-Oriented Coordination",
    description:
      "Allin Denim helps coordinate production follow-up, quality checks, packaging review, and export preparation with relevant partners.",
    icon: <AssetIcon name="export-logistics" />
  }
];

const helpItems = [
  "Reviewing the buyer's product brief and sourcing requirements",
  "Identifying suitable supplier and material directions",
  "Coordinating fabric, trim, label, and packaging options",
  "Managing sampling, revisions, and approval communication",
  "Following production planning and inline quality checkpoints",
  "Supporting packing review and export documentation coordination"
];

export default function SourcingInTurkeyPage() {
  const sourcingImage = getVisualAsset("fabric-trim-sourcing");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Sourcing in Turkey", path: "/sourcing-in-turkey" }
        ]}
      />
      <PageHero
        eyebrow="Sourcing in Turkey"
        title="Apparel sourcing in Turkey for international brands and buyers."
        description="Allin Denim helps foreign companies source and manage apparel production in Turkey through supplier coordination, fabric and trim sourcing, sampling, production management, quality control, and export support."
        primaryCta={{ label: "Start a Sourcing Inquiry", href: "/contact" }}
        secondaryCta={{ label: "View Product Categories", href: "/product-categories" }}
        imageLabel="Turkey textile sourcing"
        imageSrc={sourcingImage?.path}
        imageAlt={sourcingImage?.alt}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Why Turkey"
            title="A developed apparel sourcing base with strong category coverage."
            description="Turkey is known for textile and garment production capabilities across denim, woven apparel, knitwear, underwear, loungewear, ready-to-wear, and private label production."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sourcingSections.map((section) => (
              <CapabilityCard key={section.title} {...section} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cotton py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="How Allin Denim helps"
                title="Local coordination for buyers who need visibility and follow-through."
                description="Allin Denim supports the practical work between buyer expectations and production reality: sourcing, sampling, approvals, follow-up, quality control, packaging, and export coordination."
              />
              <div className="mt-8 grid gap-3">
                {helpItems.map((item) => (
                  <div key={item} className="rounded-panel border border-stone-200 bg-white p-4 text-sm font-medium leading-7 text-stone-700 shadow-line">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/production-process" variant="secondary">
                  View Process
                </Button>
                <Button href="/quality-control-compliance" variant="secondary">
                  Quality Control
                </Button>
              </div>
            </div>
            <PlaceholderImage
              label="Fabric and trim sourcing"
              ratio="portrait"
              src={sourcingImage?.path}
              altText={sourcingImage?.alt}
            />
          </div>
        </Container>
      </section>

      <CTASection
        title="Looking for apparel sourcing support in Turkey?"
        description="Send your product category, target quantities, market, timeline, and material requirements. Allin Denim can review suitable sourcing and production coordination options."
        ctaLabel="Contact Allin Denim"
        ctaHref="/contact"
      />
    </>
  );
}
