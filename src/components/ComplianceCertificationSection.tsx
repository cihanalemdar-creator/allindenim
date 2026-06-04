import Image from "next/image";
import { ClipboardCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

const complianceCards = [
  {
    title: "OEKO-TEX Standard 100",
    description:
      "For textile products tested for harmful substances. Especially relevant for apparel, underwear, babywear, socks, and close-to-skin products.",
    placeholder: "OEKO-TEX Standard 100 documentation support visual",
    placeholderImage: "/assets/compliance/oeko-tex-placeholder.svg"
  },
  {
    title: "Organic & Recycled Material Standards",
    description:
      "GOTS, OCS, GRS, or RCS documentation can be supported where organic cotton or recycled material claims are required.",
    placeholder: "Organic and recycled material documentation support visual",
    placeholderImage: "/assets/compliance/organic-recycled-placeholder.svg"
  },
  {
    title: "Social Compliance Audits",
    description:
      "Production can be aligned with buyer-requested social compliance frameworks such as BSCI, Sedex/SMETA, or WRAP, depending on factory availability and audit requirements.",
    placeholder: "Social compliance audit support visual",
    placeholderImage: "/assets/compliance/social-compliance-placeholder.svg"
  },
  {
    title: "EU & US Market Compliance",
    description:
      "Support can be provided for REACH-related chemical restrictions, textile labeling, fiber composition, country of origin marking, and product-specific requirements for European and U.S. markets.",
    placeholder: "EU and US market compliance support visual",
    placeholderImage: "/assets/compliance/market-compliance-placeholder.svg"
  },
  {
    title: "Children's Apparel Requirements",
    description:
      "For baby and children's clothing, additional requirements such as OEKO-TEX Class I, CPSIA/CPSC-related testing, flammability checks, tracking labels, and drawstring safety standards can be considered according to the destination market.",
    placeholder: "Children's apparel testing support visual",
    placeholderImage: "/assets/compliance/childrens-apparel-placeholder.svg"
  },
  {
    title: "Chemical & Environmental Management",
    description:
      "For dyeing, washing, printing, and finishing processes, additional documentation related to chemical management, wastewater, and environmental performance can be reviewed when required by the buyer.",
    placeholder: "Chemical and environmental management support visual",
    placeholderImage: "/assets/compliance/chemical-environmental-placeholder.svg"
  }
];

const supportNotes = [
  "Available upon request",
  "Arranged according to product scope",
  "Documentation reviewed by target market"
];

type ComplianceCertificationSectionProps = {
  className?: string;
};

export function ComplianceCertificationSection({
  className
}: ComplianceCertificationSectionProps) {
  return (
    <section className={cn("bg-cotton py-20 sm:py-24", className)}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Compliance support"
              title="Compliance & Certification Support"
              description="We understand that international apparel buyers require more than competitive production. Depending on the product category, target market, and buyer requirements, we can support production with relevant compliance documentation, product testing, and certification processes through qualified suppliers, laboratories, and production partners."
            />
            <div className="mt-8 grid gap-3">
              {supportNotes.map((note) => (
                <div
                  key={note}
                  className="flex items-center gap-3 rounded-panel border border-stone-200 bg-white px-4 py-3 shadow-line"
                >
                  <ShieldCheck className="h-5 w-5 shrink-0 text-denim-700" aria-hidden="true" />
                  <p className="text-sm font-semibold text-stone-700">{note}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact">Discuss Compliance Requirements</Button>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {complianceCards.map((card, index) => (
              <article
                key={card.title}
                className="rounded-panel border border-stone-200 bg-white p-5 shadow-line"
              >
                {/* Replace this visual only with verified official certification logo files. */}
                <div className="relative flex min-h-32 items-center justify-center overflow-hidden rounded-panel border border-dashed border-stone-300 bg-stone-50 px-4 text-center">
                  <Image
                    src={card.placeholderImage}
                    alt={card.placeholder}
                    width={320}
                    height={160}
                    className="h-full max-h-32 w-full object-contain"
                  />
                </div>
                <p className="mt-3 text-xs font-medium leading-5 text-stone-500">
                  Documentation can be provided upon request where applicable. Official logos are
                  displayed only after certificate verification.
                </p>
                <div className="mt-5 flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-panel bg-denim-100 text-denim-800">
                    {index % 2 === 0 ? (
                      <FileCheck2 className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900">{card.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-stone-600">{card.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-panel border border-stone-200 bg-white p-5 shadow-line">
          <p className="text-sm leading-7 text-stone-700">
            Certification availability may vary depending on the selected factory, product type,
            material composition, order volume, and buyer-specific compliance requirements. Final
            documentation should be confirmed during the quotation and production planning stage.
          </p>
        </div>
      </Container>
    </section>
  );
}
