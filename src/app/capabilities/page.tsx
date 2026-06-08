import { AssetIcon } from "@/components/AssetIcon";
import { CapabilityCard } from "@/components/cards";
import { ComplianceCertificationSection } from "@/components/ComplianceCertificationSection";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeader } from "@/components/SectionHeader";
import { getVisualAsset } from "@/content/visual-assets";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Apparel Manufacturing Capabilities in Turkey",
  description:
    "Explore Allin Denim's apparel manufacturing capabilities in Turkey, including sourcing, sampling, private label production, quality control, compliance documentation, packaging, and export coordination.",
  path: "/capabilities",
  keywords: [
    "apparel manufacturer Turkey",
    "clothing production Turkey",
    "private label clothing manufacturer Turkey",
    "apparel sourcing Turkey",
    "certified garment production",
    "OEKO-TEX apparel supplier",
    "organic cotton clothing manufacturer",
    "recycled textile production"
  ]
});

const capabilities = [
  {
    title: "Product Brief Review",
    description:
      "Product category, target market, quantities, timeline, tech pack status, and buyer requirements are reviewed first.",
    icon: <AssetIcon name="contact-inquiry" />
  },
  {
    title: "Fabric & Trim Sourcing",
    description:
      "Fabrics, trims, labels, packaging, washes, printing, and embroidery options are coordinated according to the brief.",
    icon: <AssetIcon name="fabric-sourcing" />
  },
  {
    title: "Sampling",
    description:
      "Sampling support covers fit, construction, material direction, finish details, revisions, and buyer approvals.",
    icon: <AssetIcon name="sampling" />
  },
  {
    title: "Production Management",
    description:
      "Supplier coordination, production planning, timeline follow-up, and communication support help keep projects organized.",
    icon: <AssetIcon name="manufacturing" />
  },
  {
    title: "Quality Control",
    description:
      "Sample approval, measurement control, inline checks, final inspection, and packaging review are coordinated.",
    icon: <AssetIcon name="quality-control" />
  },
  {
    title: "Export Coordination",
    description:
      "Packing, labeling, shipment preparation, and export documentation coordination are supported with relevant parties.",
    icon: <AssetIcon name="export-logistics" />
  }
];

const categoryCoverage = [
  { label: "Denim & jeans", icon: <AssetIcon name="denim-jeans" size="sm" /> },
  { label: "Woven apparel", icon: <AssetIcon name="woven-apparel" size="sm" /> },
  { label: "Knitwear and jersey basics", icon: <AssetIcon name="knitwear" size="sm" /> },
  { label: "Underwear and loungewear", icon: <AssetIcon name="underwear-loungewear" size="sm" /> },
  { label: "Babywear and children's apparel", icon: <AssetIcon name="babywear-children" size="sm" /> },
  {
    label: "Ready-to-wear and private label collections",
    icon: <AssetIcon name="ready-to-wear" size="sm" />
  }
];

export default function CapabilitiesPage() {
  const sourcingImage = getVisualAsset("fabric-trim-sourcing");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Manufacturing Capabilities", path: "/capabilities" }
        ]}
      />
      <PageHero
        eyebrow="Manufacturing capabilities"
        title="Apparel sourcing, production management, and export coordination in Turkey."
        description="Allin Denim supports international buyers with a structured capability set across product development, sourcing, sampling, production follow-up, quality control, packaging, and export coordination."
        primaryCta={{ label: "Start a Production Inquiry", href: "/contact" }}
        secondaryCta={{ label: "View Product Categories", href: "/product-categories" }}
        imageLabel="Fabric and trim sourcing"
        imageSrc={sourcingImage?.path}
        imageAlt={sourcingImage?.alt}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Capability areas"
            title="A practical operating model for international apparel buyers."
            description="The exact scope depends on product category, quantity, material requirements, supplier availability, and buyer expectations."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <CapabilityCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cotton py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader
              eyebrow="Category coverage"
              title="Production support across adult, baby, and children's apparel categories."
              description="Allin Denim can review category-specific production routes according to product type, material requirements, target market, order volume, compliance needs, and available supplier fit."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {categoryCoverage.map((item) => (
                <div
                  key={item.label}
                  className="flex min-h-20 items-center gap-4 rounded-panel border border-stone-200 bg-white p-5 shadow-line"
                >
                  {item.icon}
                  <p className="text-sm font-semibold leading-6 text-ink-900">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ComplianceCertificationSection />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <SectionHeader
              eyebrow="Built for B2B production"
              title="Clear coordination from sourcing to shipment preparation."
              description="The goal is not to overpromise. It is to give buyers a reliable Turkey-based coordination layer for apparel projects that need serious production follow-up."
            />
            <PlaceholderImage
              label="Sourcing and production management"
              altText="Placeholder for future apparel sourcing and production management photography"
              src={sourcingImage?.path}
            />
          </div>
        </Container>
      </section>

      <CTASection
        title="Need support across multiple production steps?"
        description="Send your product brief and production goals. Allin Denim can review the right sourcing, sampling, quality, and export coordination path."
        ctaLabel="Contact Allin Denim"
        ctaHref="/contact"
      />
    </>
  );
}
