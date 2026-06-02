import { CheckCircle2 } from "lucide-react";
import { AssetIcon } from "@/components/AssetIcon";
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
  title: "Quality Control for Apparel Production in Turkey",
  description:
    "Allin Denim supports apparel quality control in Turkey through supplier evaluation, material checks, sample approval, measurement control, inline inspection, final inspection, packaging review, and documentation coordination.",
  path: "/quality-control-compliance",
  keywords: [
    "quality control apparel Turkey",
    "garment production Turkey",
    "apparel sourcing agent Turkey",
    "clothing manufacturer Turkey"
  ]
});

const qualityBlocks = [
  {
    title: "Supplier Evaluation",
    description:
      "Supplier suitability is reviewed according to product category, production scope, timing, communication, and buyer requirements.",
    icon: <AssetIcon name="manufacturing" />
  },
  {
    title: "Material Checks",
    description:
      "Fabric, trim, label, packaging, and finishing details are checked against the approved direction before and during production.",
    icon: <AssetIcon name="fabric-sourcing" />
  },
  {
    title: "Sample Approval",
    description:
      "Samples are reviewed for fit, measurements, construction, fabric, trims, finish, labeling, and buyer comments.",
    icon: <AssetIcon name="sampling" />
  },
  {
    title: "Measurement Control",
    description:
      "Measurement checks are coordinated against approved specs, size sets, and buyer tolerances where provided.",
    icon: <AssetIcon name="pattern-development" />
  },
  {
    title: "Inline Inspection",
    description:
      "Inline checks help identify production issues while there is still time to communicate corrections or adjustments.",
    icon: <AssetIcon name="quality-control" />
  },
  {
    title: "Final Inspection",
    description:
      "Final inspection coordination reviews finished goods, workmanship, measurements, labeling, packing, and readiness.",
    icon: <AssetIcon name="packaging" />
  }
];

const reviewItems = [
  "Packaging and labeling review before shipment preparation",
  "Documentation coordination with suppliers, buyers, and logistics parties",
  "Certification requirements can be reviewed according to the buyer's needs",
  "No certification claims are listed unless they are provided and verified for a specific project"
];

export default function QualityControlCompliancePage() {
  const qualityImage = getVisualAsset("quality-control");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Quality Control & Compliance", path: "/quality-control-compliance" }
        ]}
      />
      <PageHero
        eyebrow="Quality control & compliance"
        title="Quality-focused apparel production management in Turkey."
        description="Allin Denim supports international buyers with supplier evaluation, material checks, sample approval, measurement control, inline inspection, final inspection, packaging review, and documentation coordination."
        primaryCta={{ label: "Discuss Quality Requirements", href: "/contact" }}
        secondaryCta={{ label: "View Production Process", href: "/production-process" }}
        imageLabel="Future inspection, measurement, or packaging review image"
        imageSrc={qualityImage?.path}
        imageAlt={qualityImage?.alt}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Quality checkpoints"
            title="Practical controls across sampling and production."
            description="Quality support is adapted to the product category, buyer requirements, supplier setup, and approved samples. The focus is clear documentation, timely communication, and production visibility."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {qualityBlocks.map((block) => (
              <CapabilityCard key={block.title} {...block} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cotton py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <PlaceholderImage
              label="Quality control inspection"
              ratio="wide"
              src={qualityImage?.path}
              altText={qualityImage?.alt}
            />
            <div>
              <SectionHeader
                eyebrow="Compliance-aware coordination"
                title="Documentation and buyer requirements are reviewed project by project."
                description="Allin Denim does not list unsupported certifications. If a buyer has certification, documentation, testing, labeling, or compliance requirements, those requirements can be reviewed according to the product and supplier options."
              />
              <div className="mt-8 grid gap-3">
                {reviewItems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-panel border border-stone-200 bg-white p-4 shadow-line">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-denim-700" aria-hidden="true" />
                    <p className="text-sm font-medium leading-7 text-stone-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <CapabilityCard
              title="Production Process"
              description="See how quality checkpoints fit into sourcing, sampling, planning, bulk production, packing, and export coordination."
              href="/production-process"
            />
            <CapabilityCard
              title="Product Categories"
              description="Review category-specific production support for denim, woven, knitwear, underwear, loungewear, and private label apparel."
              href="/product-categories"
            />
            <CapabilityCard
              title="Sourcing in Turkey"
              description="Understand the textile ecosystem and how Allin Denim helps international buyers source apparel production in Turkey."
              href="/sourcing-in-turkey"
            />
          </div>
        </Container>
      </section>

      <CTASection
        title="Have specific quality or documentation requirements?"
        description="Send your product details, standards, labeling needs, and inspection expectations. Allin Denim can review how they fit into the production plan."
        ctaLabel="Contact Allin Denim"
        ctaHref="/contact"
      />
    </>
  );
}
