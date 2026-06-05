import {
  CheckCircle2,
  FileSearch,
  Ruler,
} from "lucide-react";
import { AssetIcon } from "@/components/AssetIcon";
import { Button } from "@/components/Button";
import { CapabilityCard, ProductCategoryCard, TrustBadge } from "@/components/cards";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ProcessStep } from "@/components/ProcessStep";
import { SectionHeader } from "@/components/SectionHeader";
import { getVisualAsset } from "@/content/visual-assets";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Apparel Manufacturer Turkey | Allin Denim",
  description:
    "Allin Denim helps international brands manage apparel manufacturing in Turkey, from denim and woven garments to knitwear, underwear, private label production, sourcing, QC, and export coordination.",
  path: "/"
});

const capabilities = [
  {
    title: "Denim & Jeans",
    description:
      "Jeans, denim jackets, skirts, washed denim, stretch denim, and private label denim programs.",
    href: "/denim-jeans-manufacturing",
    icon: <AssetIcon name="denim-jeans" />,
    tags: ["Jeans", "Jackets", "Washed denim"]
  },
  {
    title: "Woven Apparel",
    description:
      "Shirts, trousers, jackets, dresses, skirts, uniforms, and woven ready-to-wear collections.",
    href: "/woven-apparel-manufacturing",
    icon: <AssetIcon name="woven-apparel" />,
    tags: ["Shirts", "Dresses", "Trousers"]
  },
  {
    title: "Knitwear",
    description:
      "T-shirts, sweatshirts, hoodies, babywear basics, jersey sets, and knit private label collections.",
    href: "/knitwear-manufacturing",
    icon: <AssetIcon name="knitwear" />,
    tags: ["T-shirts", "Babywear", "Hoodies"]
  },
  {
    title: "Underwear & Loungewear",
    description:
      "Underwear, sleepwear, loungewear, baby bodywear, fit-sensitive products, and packaging support.",
    href: "/underwear-loungewear-manufacturing",
    icon: <AssetIcon name="underwear-loungewear" />,
    tags: ["Underwear", "Baby bodywear", "Pajamas"]
  },
  {
    title: "Ready-to-Wear",
    description:
      "Multi-category apparel collections including adult, baby, and kids' styles coordinated through sourcing, sampling, production, QC, and export steps.",
    href: "/ready-to-wear-private-label",
    icon: <AssetIcon name="ready-to-wear" />,
    tags: ["Collections", "Baby & kids", "Export"]
  },
  {
    title: "Private Label Production",
    description:
      "Brand-ready apparel programs with labeling, packaging, material coordination, and production follow-up.",
    href: "/ready-to-wear-private-label",
    icon: <AssetIcon name="private-label" />,
    tags: ["Labels", "Hangtags", "Retail packs"]
  }
];

const steps = [
  {
    number: "1",
    title: "Requirement Review",
    description:
      "Product category, target market, quantity range, timeline, tech pack status, and sourcing needs are reviewed."
  },
  {
    number: "2",
    title: "Fabric & Trim Sourcing",
    description:
      "Relevant fabrics, trims, labels, packaging, washes, embroidery, and printing options are coordinated."
  },
  {
    number: "3",
    title: "Sampling",
    description:
      "Fit, construction, material direction, finish details, and buyer feedback are handled through sampling rounds."
  },
  {
    number: "4",
    title: "Costing & Confirmation",
    description:
      "Costing, product scope, materials, quantities, delivery expectations, and approval details are confirmed."
  },
  {
    number: "5",
    title: "Production Planning",
    description:
      "Production schedule, supplier responsibilities, communication rhythm, and approval checkpoints are organized."
  },
  {
    number: "6",
    title: "Quality Control",
    description:
      "Inline checks, measurement control, workmanship review, and final inspection coordination support consistency."
  },
  {
    number: "7",
    title: "Packing & Export Coordination",
    description:
      "Packaging review, labeling details, shipment preparation, and export documentation coordination are supported."
  }
];

const turkeyAdvantages = [
  {
    title: "Strategic Location",
    description:
      "Turkey is well positioned for brands serving Europe, the UK, the Middle East, and nearby export markets.",
    icon: <AssetIcon name="global-partner" />
  },
  {
    title: "Textile Ecosystem",
    description:
      "The market offers access to fabrics, trims, washing, embroidery, printing, packaging, and specialist suppliers.",
    icon: <AssetIcon name="factory-network" />
  },
  {
    title: "Flexible Possibilities",
    description:
      "MOQ possibilities can be more flexible depending on the product, fabric, supplier, and production setup.",
    icon: <AssetIcon name="fabric-sourcing" />
  },
  {
    title: "Practical Lead Times",
    description:
      "For many brands, Turkey can support faster lead times than distant sourcing regions, depending on scope.",
    icon: <AssetIcon name="fast-turnaround" />
  }
];

const qualityItems = [
  "Supplier evaluation before production starts",
  "Inline checks during production",
  "Final inspection coordination",
  "Measurement control against approved specs",
  "Packaging and labeling review",
  "Testing and compliance documentation upon request",
  "Export documentation coordination"
];

const complianceStandards = [
  "OEKO-TEX Standard 100 and close-to-skin product testing support",
  "GOTS, OCS, GRS, or RCS documentation for organic or recycled material claims",
  "BSCI, Sedex/SMETA, or WRAP audit alignment depending on production partner scope",
  "EU and U.S. market labeling, fiber composition, REACH-related, and children's apparel requirements"
];

const buyerExpectations = [
  {
    title: "Clear Brief Handling",
    description:
      "Product details, target quantities, market requirements, timeline, and tech pack readiness are reviewed before supplier direction is suggested.",
    icon: <AssetIcon name="contact-inquiry" />
  },
  {
    title: "Supplier Fit Before Production",
    description:
      "Projects are matched with suitable production options based on category, material needs, quantity expectations, and operational fit.",
    icon: <AssetIcon name="factory-network" />
  },
  {
    title: "Visible Sampling Follow-Up",
    description:
      "Sampling, fit comments, material revisions, trims, labeling, and packaging details are kept organized before bulk production decisions.",
    icon: <AssetIcon name="sampling" />
  },
  {
    title: "Quality Checkpoints",
    description:
      "Inline checks, measurement control, packaging review, and final inspection coordination help buyers maintain visibility.",
    icon: <AssetIcon name="quality-control" />
  }
];

const denimItems = [
  "Jeans and five-pocket styles",
  "Denim jackets and overshirts",
  "Denim skirts, shorts, and casual pieces",
  "Washed denim and finish coordination",
  "Stretch denim and comfort fits",
  "Private label denim collections"
];

const faqs = [
  {
    question: "Can you produce private label collections?",
    answer:
      "Yes. Allin Denim can support private label apparel projects with sourcing, sampling, production follow-up, labeling, packaging, QC, and export coordination."
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes, when the product requirements, quantity expectations, and timeline are realistic for available suppliers and materials."
  },
  {
    question: "What product categories do you cover?",
    answer:
      "Core categories include denim and jeans, woven apparel, knitwear, underwear and loungewear, baby and children's apparel, ready-to-wear, activewear, and private label apparel."
  },
  {
    question: "Can you manage sourcing and quality control?",
    answer:
      "Yes. The service can include fabric and trim sourcing, supplier coordination, inline checks, final inspection coordination, and packaging review."
  }
];

export default function Home() {
  const homeHero = getVisualAsset("home-hero");
  const samplingImage = getVisualAsset("sampling-tech-pack");
  const denimImage = getVisualAsset("denim-jeans");

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <FAQJsonLd items={faqs} />
      <PageHero
        eyebrow="Turkey-based apparel production partner"
        title="Apparel Manufacturing in Turkey for Global Brands"
        description="From denim and woven garments to knitwear, underwear, and private label collections, Allin Denim helps international buyers coordinate dependable apparel production through Turkey-based sourcing, sampling, quality control, and export support."
        primaryCta={{ label: "Start a Production Inquiry", href: "/contact" }}
        secondaryCta={{ label: "Explore Capabilities", href: "/capabilities" }}
        imageLabel="Future apparel production visual"
        imageSrc={homeHero?.path}
        imageAlt={homeHero?.alt}
        imageRatio="wide"
      />

      <section className="bg-stone-50 py-14">
        <Container>
          <h2 className="sr-only">Allin Denim positioning</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <TrustBadge label="Turkey-Based Production Partner" />
            <TrustBadge label="Denim, Woven, Knit & Underwear" />
            <TrustBadge label="Sampling to Export Coordination" />
            <TrustBadge label="Quality Control Focused" />
            <TrustBadge label="Private Label Friendly" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Manufacturing capabilities"
              title="Production coordination across the categories sourcing teams ask for most."
              description="Allin Denim helps buyers coordinate suitable suppliers, materials, sampling, production follow-up, quality control, and export steps across key apparel categories without overstating factory ownership or unsupported claims."
            />
            <Button href="/capabilities" variant="secondary">
              Explore Capabilities
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability) => (
              <ProductCategoryCard key={capability.title} {...capability} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cotton py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Why Turkey / Why Allin Denim"
                title="A practical sourcing base for export-oriented apparel production."
                description="Turkey combines a developed textile ecosystem with access to suppliers, materials, finishing services, and export coordination. Allin Denim helps international buyers move through that ecosystem with structured communication and production follow-up."
              />
              <div className="mt-8">
                <Button href="/sourcing-in-turkey" variant="secondary">
                  Learn About Sourcing in Turkey
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {turkeyAdvantages.map((item) => (
                <CapabilityCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink-900 py-20 text-white sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-denim-100">
                What buyers can expect
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Structured production follow-up without unsupported claims.
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-200">
                Allin Denim is positioned as a Turkey-based apparel production and sourcing
                partner. The focus is practical coordination: clear information, suitable
                supplier direction, controlled sampling, quality checkpoints, and export-ready
                follow-up.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {buyerExpectations.map((item) => (
                <CapabilityCard
                  key={item.title}
                  {...item}
                  className="border-white/10 bg-white/[0.06] text-white shadow-none [&_h3]:text-white [&_p]:text-stone-200 [&>div]:text-denim-100"
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Quality standards"
                title="Compliance support for buyers with defined quality requirements."
                description="When buyers require specific testing, audit, labeling, or certification documentation, Allin Denim can coordinate the relevant review with suitable production partners, suppliers, and laboratories according to product type and target market."
              />
              <div className="mt-8">
                <Button href="/quality-control-compliance" variant="secondary">
                  View Quality & Compliance
                </Button>
              </div>
            </div>
            <div className="grid gap-3">
              {complianceStandards.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-panel border border-stone-200 bg-cotton p-5 shadow-line"
                >
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0 text-denim-700"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium leading-7 text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cotton py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Production process"
                title="A clear path from requirement review to export coordination."
                description="The process is designed for international clients who need organized communication, realistic sourcing options, controlled sampling, and structured production follow-up."
              />
              <div className="mt-10 grid gap-8">
                {steps.map((step) => (
                  <ProcessStep key={step.number} {...step} />
                ))}
              </div>
            </div>
            <PlaceholderImage
              label="Sampling and production planning"
              ratio="portrait"
              src={samplingImage?.path}
              altText={samplingImage?.alt}
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <SectionHeader
                eyebrow="Quality & production management"
                title="Focused follow-up for sourcing teams that need control."
                description="Allin Denim supports production with supplier coordination, quality checkpoints, measurement control, packaging review, and export documentation coordination."
              />
              <p className="mt-5 text-sm leading-7 text-stone-700">
                Product testing, inspection, labeling, and compliance documentation can be
                coordinated according to the buyer&apos;s destination market and technical
                requirements.
              </p>
            </div>
            <div className="grid gap-4 lg:col-span-2">
              {qualityItems.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-panel border border-stone-200 bg-white p-5 shadow-line"
                >
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0 text-denim-700"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium leading-7 text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Featured category"
                title="Denim & jeans are central to the Allin Denim identity."
                description="Allin Denim supports denim development and production coordination for brands that need jeans, denim jackets, denim skirts, washed denim, stretch denim, and private label denim programs in Turkey."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {denimItems.map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-medium text-stone-700">
                    <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-denim-700" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-9">
                <Button href="/denim-jeans-manufacturing">
                  Explore Denim Manufacturing
                </Button>
              </div>
            </div>
            <PlaceholderImage
              label="Denim product development"
              ratio="wide"
              src={denimImage?.path}
              altText={denimImage?.alt}
            />
          </div>
        </Container>
      </section>

      <CTASection
        title="Looking to manufacture apparel in Turkey?"
        description="Share your product category, quantity expectations, target market, timeline, and available tech packs. Allin Denim can help review the right sourcing and production management path."
        ctaLabel="Contact Allin Denim"
        ctaHref="/contact"
      />

      <section className="bg-stone-50 py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions before starting production."
              description="A quick preview for international clients evaluating apparel sourcing, private label production, and quality control support in Turkey."
            />
            <Button href="/faq" variant="secondary">
              View Full FAQ
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-panel border border-stone-200 bg-white p-6 shadow-line"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-panel bg-denim-100 text-denim-800">
                  <FileSearch className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-ink-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
