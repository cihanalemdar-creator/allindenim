import { FileSearch } from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Apparel Manufacturing in Turkey FAQ",
  description:
    "Answers to common questions about apparel manufacturing in Turkey, private label clothing, denim production, sampling, sourcing, quality control, and export coordination with Allin Denim.",
  path: "/faq",
  keywords: [
    "apparel manufacturer Turkey FAQ",
    "private label clothing Turkey",
    "denim manufacturer Turkey",
    "apparel sourcing Turkey"
  ]
});

const faqs = [
  {
    question: "Can Allin Denim produce private label collections?",
    answer:
      "Allin Denim can support private label apparel projects through sourcing, sampling, production coordination, labeling, packaging, quality control, and export coordination."
  },
  {
    question: "What product categories does Allin Denim cover?",
    answer:
      "Core categories include denim and jeans, woven apparel, knitwear, underwear and loungewear, baby and children's apparel, ready-to-wear, activewear, and private label apparel."
  },
  {
    question: "Do you work with startups?",
    answer:
      "Startup projects can be reviewed when product requirements, quantity expectations, target pricing, and timelines are realistic for available suppliers and materials."
  },
  {
    question: "Can you manage sourcing and quality control?",
    answer:
      "Yes. Support can include fabric and trim sourcing, supplier coordination, sample review, inline checks, final inspection coordination, and packaging review."
  },
  {
    question: "Do you own a factory?",
    answer:
      "Allin Denim is positioned as a Turkey-based apparel manufacturing and sourcing partner working through supplier and factory network coordination. Factory ownership is not claimed unless verified and provided."
  },
  {
    question: "Can certification requirements be reviewed?",
    answer:
      "Certification, documentation, testing, labeling, or compliance requirements can be reviewed according to the buyer's needs, product category, and available supplier options."
  }
];

export default function FAQPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" }
        ]}
      />
      <FAQJsonLd items={faqs} />
      <PageHero
        eyebrow="FAQ"
        title="Questions about apparel manufacturing and sourcing in Turkey."
        description="Find answers about private label production, product categories, sourcing, quality control, supplier coordination, and export support with Allin Denim."
        primaryCta={{ label: "Start a Production Inquiry", href: "/contact" }}
        secondaryCta={{ label: "View Production Process", href: "/production-process" }}
        imageLabel="Future FAQ or product brief visual"
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Buyer questions"
            title="Practical answers for international sourcing teams."
            description="These answers keep expectations clear before a production inquiry begins."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
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

      <CTASection
        title="Have a project-specific question?"
        description="Send your product details, target quantity, timeline, and tech pack status. Allin Denim can review the most relevant next step."
        ctaLabel="Contact Allin Denim"
        ctaHref="/contact"
      />
    </>
  );
}
