import { ClipboardCheck } from "lucide-react";
import { AssetIcon } from "@/components/AssetIcon";
import { CapabilityCard } from "@/components/cards";
import { Container } from "@/components/Container";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { OfficeLocations } from "@/components/OfficeLocations";
import { PageHero } from "@/components/PageHero";
import { ProductionInquiryForm } from "@/components/ProductionInquiryForm";
import { SectionHeader } from "@/components/SectionHeader";
import { getVisualAsset } from "@/content/visual-assets";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact Allin Denim | Apparel Manufacturing Partner in Turkey",
  description:
    "Contact Allin Denim to discuss apparel manufacturing, sourcing, private label production, denim, woven apparel, knitwear, underwear, quality control, and export coordination in Turkey.",
  path: "/contact",
  keywords: [
    "apparel manufacturer Turkey contact",
    "clothing manufacturer Turkey",
    "private label clothing Turkey",
    "apparel sourcing agent Turkey"
  ]
});

const contactBlocks = [
  {
    title: "Production Inquiries",
    description:
      "Share product category, target quantity, timeline, tech pack status, and production expectations.",
    icon: <AssetIcon name="manufacturing" />
  },
  {
    title: "Sourcing Requests",
    description:
      "Ask about fabric, trim, supplier, sampling, and Turkey-based apparel sourcing coordination.",
    icon: <AssetIcon name="fabric-sourcing" />
  },
  {
    title: "Private Label Projects",
    description:
      "Discuss ready-to-wear, denim, woven, knitwear, underwear, loungewear, labels, and packaging.",
    icon: <AssetIcon name="private-label" />
  },
  {
    title: "Export Coordination",
    description:
      "Review packing, labeling, shipment preparation, and export documentation coordination needs.",
    icon: <AssetIcon name="export-logistics" />
  }
];

const nextSteps = [
  {
    title: "Brief Review",
    description:
      "We review your product category, quantity range, timeline, market, material direction, and tech pack status."
  },
  {
    title: "Feasibility Direction",
    description:
      "The project is evaluated against suitable supplier options, material availability, sampling needs, and production expectations."
  },
  {
    title: "Next-Step Questions",
    description:
      "If the project is a good fit, we follow up with the details needed for sampling, costing, supplier coordination, or production planning."
  }
];

export default function ContactPage() {
  const contactImage = getVisualAsset("contact-production-inquiry");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ]}
      />
      <PageHero
        eyebrow="Production inquiry"
        title="Tell us what you want to produce in Turkey."
        description="The more technical details you share, the faster we can evaluate feasibility, pricing, sampling, and production options."
        primaryCta={{ label: "Complete the Inquiry Form", href: "#inquiry-form" }}
        secondaryCta={{ label: "View Production Process", href: "/production-process" }}
        imageLabel="Production inquiry desk"
        imageSrc={contactImage?.path}
        imageAlt={contactImage?.alt}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="How we can help"
            title="Choose the right conversation for your apparel project."
            description="Use the inquiry form for production, sourcing, private label, quality control, and export coordination requests. If you have a tech pack, include its details in the message until file upload integration is connected."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {contactBlocks.map((block) => (
              <CapabilityCard key={block.title} {...block} />
            ))}
          </div>
        </Container>
      </section>

      <section id="inquiry-form" className="bg-cotton py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Inquiry form"
                title="Start with the details sourcing teams need first."
                description="Clear product information helps Allin Denim review the right supplier direction, material options, sampling path, pricing feasibility, and production timeline."
              />
              <div className="mt-8 rounded-panel border border-stone-200 bg-white p-6 shadow-line">
                <div className="flex gap-4">
                  <ClipboardCheck className="mt-1 h-5 w-5 shrink-0 text-denim-700" aria-hidden="true" />
                  <p className="text-sm leading-7 text-stone-700">
                    This form is currently a safe front-end inquiry UI. Backend form
                    delivery, CRM routing, and file uploads should be integrated with a
                    verified form service or server action before production use.
                  </p>
                </div>
              </div>
            </div>

            <ProductionInquiryForm />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeader
              eyebrow="After you submit"
              title="A clearer first response starts with a stronger production brief."
              description="International apparel projects move faster when the first message includes product scope, materials, quantities, fit expectations, packaging needs, and timing. The response can then focus on feasibility instead of basic clarification."
            />
            <div className="grid gap-4">
              {nextSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="grid gap-4 rounded-panel border border-stone-200 bg-cotton p-6 shadow-line sm:grid-cols-[auto_1fr]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-stone-700">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cotton py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Offices and contact details"
            title="International office network for apparel sourcing and production coordination."
            description="Use the inquiry form for project details, or contact the relevant office for production, sourcing, private label, and export coordination conversations."
          />
          <div className="mt-10">
            <OfficeLocations />
          </div>
        </Container>
      </section>
    </>
  );
}
