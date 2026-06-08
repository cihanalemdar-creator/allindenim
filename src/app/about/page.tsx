import { CheckCircle2 } from "lucide-react";
import { AssetIcon } from "@/components/AssetIcon";
import { Button } from "@/components/Button";
import { CapabilityCard, ProductCategoryCard } from "@/components/cards";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeader } from "@/components/SectionHeader";
import { getVisualAsset } from "@/content/visual-assets";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "About Allin Denim | Apparel Sourcing Partner in Turkey",
  description:
    "Learn about Allin Denim, a Turkey-based apparel manufacturing and sourcing partner helping international clients manage denim, woven, knitwear, underwear, private label production, quality control, and export coordination.",
  path: "/about",
  keywords: [
    "apparel sourcing agent Turkey",
    "clothing manufacturer Turkey",
    "apparel manufacturer Turkey",
    "Turkish textile manufacturer"
  ]
});

const whatWeDo = [
  {
    title: "Sourcing & Supplier Coordination",
    description:
      "We help buyers review production needs, source suitable materials, and coordinate with relevant suppliers in Turkey.",
    icon: <AssetIcon name="fabric-sourcing" />
  },
  {
    title: "Sampling & Production Management",
    description:
      "From first samples to production follow-up, we support communication, approvals, timing, and practical execution.",
    icon: <AssetIcon name="timeline-planning" />
  },
  {
    title: "Quality & Export Support",
    description:
      "We coordinate quality checkpoints, packaging review, and export-related documentation support for finished orders.",
    icon: <AssetIcon name="export-logistics" />
  }
];

const focusAreas = [
  { title: "Denim & Jeans", href: "/denim-jeans-manufacturing", icon: <AssetIcon name="denim-jeans" /> },
  { title: "Woven Apparel", href: "/woven-apparel-manufacturing", icon: <AssetIcon name="woven-apparel" /> },
  { title: "Knitwear", href: "/knitwear-manufacturing", icon: <AssetIcon name="knitwear" /> },
  {
    title: "Underwear & Loungewear",
    href: "/underwear-loungewear-manufacturing",
    icon: <AssetIcon name="underwear-loungewear" />
  },
  {
    title: "Ready-to-Wear / Private Label",
    href: "/ready-to-wear-private-label",
    icon: <AssetIcon name="ready-to-wear" />
  }
];

const supportItems = [
  "Reviewing product briefs, quantities, target markets, and timelines",
  "Coordinating fabric, trim, label, and packaging sourcing",
  "Managing sampling, fit comments, revisions, and approvals",
  "Following production planning and buyer communication",
  "Coordinating inline checks, final inspection, and packaging review",
  "Supporting export documentation coordination with relevant parties"
];

export default function AboutPage() {
  const aboutImage = getVisualAsset("about-sourcing-partner");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About Allin Denim", path: "/about" }
        ]}
      />
      <PageHero
        eyebrow="About Allin Denim"
        title="A Turkey-based apparel manufacturing and sourcing partner for international clients."
        description="Allin Denim supports global brands, wholesalers, e-commerce companies, and sourcing teams that want structured apparel production management in Turkey without unnecessary claims or confusion."
        primaryCta={{ label: "Start a Production Inquiry", href: "/contact" }}
        secondaryCta={{ label: "View Capabilities", href: "/capabilities" }}
        imageLabel="Apparel sourcing workspace"
        imageSrc={aboutImage?.path}
        imageAlt={aboutImage?.alt}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionHeader
              eyebrow="Who we are"
              title="A serious production partner for export-oriented apparel projects."
              description="Allin Denim works as a Turkey-based apparel sourcing and manufacturing partner. The role is to help international clients navigate supplier options, materials, sampling, production follow-up, quality checkpoints, packaging, and export coordination."
            />
            <div className="rounded-panel border border-stone-200 bg-cotton p-8 shadow-line">
              <p className="text-lg leading-8 text-stone-700">
                We position Allin Denim around practical execution: clear communication,
                category knowledge, production coordination, and reliable follow-up. We do
                not present unsupported factory ownership, fake client lists, or unverified
                certification claims.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cotton py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="What we do"
            title="Sourcing, sampling, production management, quality control, and export coordination."
            description="The service is designed for B2B buyers who need a dependable local partner in Turkey for apparel development and production follow-up."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {whatWeDo.map((item) => (
              <CapabilityCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Our apparel focus"
              title="Denim expertise with wider apparel category coverage."
              description="Allin Denim is built around denim strength while also supporting woven apparel, knitwear, underwear, loungewear, baby and children's styles, ready-to-wear, and private label programs."
            />
            <Button href="/product-categories" variant="secondary">
              View Product Categories
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {focusAreas.map((area) => (
              <ProductCategoryCard
                key={area.title}
                title={area.title}
                description="Category-specific sourcing and production coordination support in Turkey."
                href={area.href}
                icon={area.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cotton py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Turkey manufacturing network"
                title="Access to a developed textile and apparel ecosystem."
                description="Turkey offers strong apparel manufacturing, fabric sourcing, trims, washing, printing, embroidery, packaging, and export infrastructure. Allin Denim helps buyers work through this ecosystem according to the needs of each project."
              />
              <div className="mt-8">
                <Button href="/sourcing-in-turkey" variant="secondary">
                  Learn About Sourcing in Turkey
                </Button>
              </div>
            </div>
            <PlaceholderImage
              label="Apparel sourcing workspace"
              ratio="wide"
              src={aboutImage?.path}
              altText={aboutImage?.alt}
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="International client support"
              title="Clear coordination for buyers working across borders."
              description="International production needs strong communication, realistic planning, and controlled approval steps. Allin Denim supports that workflow from initial inquiry to export coordination."
            />
            <div className="grid gap-3">
              {supportItems.map((item) => (
                <div key={item} className="flex gap-3 rounded-panel border border-stone-200 bg-white p-4 shadow-line">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-denim-700" aria-hidden="true" />
                  <p className="text-sm font-medium leading-7 text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Need a Turkey-based partner for apparel production?"
        description="Tell us about your product category, target quantity, timeline, market, and tech pack status. We can review the best production path."
        ctaLabel="Contact Allin Denim"
        ctaHref="/contact"
      />
    </>
  );
}
