import { AssetIcon } from "@/components/AssetIcon";
import { CapabilityCard } from "@/components/cards";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ProcessStep } from "@/components/ProcessStep";
import { SectionHeader } from "@/components/SectionHeader";
import { getVisualAsset } from "@/content/visual-assets";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Apparel Production Process in Turkey | Allin Denim",
  description:
    "See how Allin Denim supports apparel production in Turkey, from initial inquiry and technical review to sourcing, sampling, costing, production planning, quality control, packing, and export coordination.",
  path: "/production-process",
  keywords: [
    "garment production Turkey",
    "apparel production Turkey",
    "private label clothing Turkey",
    "clothing sourcing Turkey"
  ]
});

const processSteps = [
  ["Initial Inquiry", "The buyer shares product category, quantity range, target market, timeline, and available documents."],
  ["Technical Details Review", "Tech packs, measurements, materials, construction details, trims, packaging needs, and buyer expectations are reviewed."],
  ["Fabric and Trim Sourcing", "Suitable fabrics, trims, labels, hangtags, packaging, washing, printing, or embroidery needs are coordinated."],
  ["Sampling", "Initial samples are arranged so the buyer can evaluate fit, workmanship, fabric direction, construction, and finishing."],
  ["Fit and Revision", "Fit comments, measurement changes, material changes, and revision requirements are coordinated before confirmation."],
  ["Costing", "Costs are reviewed according to product scope, material selection, quantity, finishing, packaging, and delivery requirements."],
  ["Production Planning", "Supplier responsibilities, production schedule, approval checkpoints, and communication rhythm are organized."],
  ["Bulk Production", "Approved products move into production with ongoing communication between buyer, supplier, and Allin Denim."],
  ["Inline Quality Control", "Production progress, workmanship, measurements, trims, labels, and potential issues are followed during production."],
  ["Final Inspection", "Final inspection coordination helps review measurements, workmanship, packing, labeling, and order readiness."],
  ["Packing", "Packaging, carton details, labeling requirements, and export-ready preparation are reviewed according to buyer needs."],
  ["Export Coordination", "Shipment preparation and documentation coordination are supported with the relevant logistics and export parties."]
];

const supportAreas = [
  {
    title: "Documentation Review",
    description: "Tech packs, measurement tables, labels, packing details, and approval comments are reviewed for production clarity.",
    icon: <AssetIcon name="contact-inquiry" />
  },
  {
    title: "Fit & Measurement Control",
    description: "Sampling and production checks focus on fit, size consistency, and measurement alignment against approved references.",
    icon: <AssetIcon name="pattern-development" />
  },
  {
    title: "Materials Coordination",
    description: "Fabric, trim, label, packaging, wash, print, and embroidery needs are coordinated according to the buyer brief.",
    icon: <AssetIcon name="fabric-sourcing" />
  },
  {
    title: "Export-Ready Follow-Up",
    description: "Packing review and export coordination help prepare approved production for international shipment steps.",
    icon: <AssetIcon name="export-logistics" />
  }
];

export default function ProductionProcessPage() {
  const samplingImage = getVisualAsset("sampling-tech-pack");
  const packagingImage = getVisualAsset("packaging-export");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Production Process", path: "/production-process" }
        ]}
      />
      <PageHero
        eyebrow="Production process"
        title="A structured apparel production process from inquiry to export coordination."
        description="Allin Denim helps international buyers manage apparel production in Turkey through clear review stages, sourcing coordination, sampling, costing, production planning, quality control, packing, and export support."
        primaryCta={{ label: "Send Your Product Brief", href: "/contact" }}
        secondaryCta={{ label: "View Capabilities", href: "/capabilities" }}
        imageLabel="Future production process or sampling visual"
        imageSrc={samplingImage?.path}
        imageAlt={samplingImage?.alt}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader
              eyebrow="Step by step"
              title="Clear checkpoints for international apparel production."
              description="The exact workflow can vary by category and product complexity, but the process below gives buyers a practical framework for working with Allin Denim."
            />
            <div className="grid gap-8">
              {processSteps.map(([title, description], index) => (
                <ProcessStep
                  key={title}
                  number={String(index + 1)}
                  title={title}
                  description={description}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cotton py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Process support"
                title="Built for controlled decisions, not guesswork."
                description="Each stage is designed to reduce confusion, document approvals, and keep production moving with realistic communication between the buyer and supplier network."
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {supportAreas.map((area) => (
                  <CapabilityCard key={area.title} {...area} />
                ))}
              </div>
            </div>
            <PlaceholderImage
              label="Sample approval and production planning"
              ratio="portrait"
              src={packagingImage?.path ?? samplingImage?.path}
              altText={packagingImage?.alt ?? samplingImage?.alt}
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <CapabilityCard
              title="Category Pages"
              description="Review denim, woven, knitwear, underwear, loungewear, and private label production categories."
              href="/product-categories"
              icon={<AssetIcon name="private-label" />}
            />
            <CapabilityCard
              title="Quality Control"
              description="See how supplier evaluation, material checks, inline inspection, final inspection, and packaging review are handled."
              href="/quality-control-compliance"
              icon={<AssetIcon name="quality-control" />}
            />
            <CapabilityCard
              title="Contact"
              description="Send product details, target quantities, and timeline to begin a production inquiry."
              href="/contact"
              icon={<AssetIcon name="contact-inquiry" />}
            />
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to start the production process?"
        description="Share your technical details, target quantity, timeline, and category. Allin Denim can review the next practical steps for production in Turkey."
        ctaLabel="Start a Production Inquiry"
        ctaHref="/contact"
      />
    </>
  );
}
