import { siteConfig } from "@/lib/site";
import { contactEmail, officeLocations, phoneNumbers } from "@/content/contact";

type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c")
      }}
    />
  );
}

export function SiteJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/logo/png/allindenim-primary-960.png`,
    email: contactEmail,
    telephone: phoneNumbers.map((phone) => phone.value),
    address: officeLocations.map((office) => ({
      "@type": "PostalAddress",
      ...office.schema
    })),
    contactPoint: phoneNumbers.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone.value,
      contactType: phone.label,
      email: contactEmail,
      availableLanguage: ["English", "Turkish"]
    })),
    description: siteConfig.description,
    areaServed: ["Europe", "United Kingdom", "United States", "Middle East", "Turkey"],
    knowsAbout: [
      "Apparel manufacturing",
      "Clothing production in Turkey",
      "Denim manufacturing",
      "Private label clothing",
      "Apparel sourcing"
    ]
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: contactEmail,
    telephone: phoneNumbers[0]?.value,
    address: {
      "@type": "PostalAddress",
      ...officeLocations[0]?.schema
    },
    description:
      "Turkey-based apparel sourcing and production coordination service for international brands.",
    provider: {
      "@id": `${siteConfig.url}/#organization`
    },
    areaServed: ["Turkey", "Europe", "United Kingdom", "United States", "Middle East"],
    serviceType: [
      "Apparel sourcing",
      "Production management",
      "Private label apparel production",
      "Quality control coordination",
      "Export coordination"
    ]
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    }
  };

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={professionalService} />
      <JsonLd data={website} />
    </>
  );
}

export function BreadcrumbJsonLd({
  items
}: {
  items: Array<{ name: string; path: string }>;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: new URL(item.path, siteConfig.url).toString()
        }))
      }}
    />
  );
}

export function FAQJsonLd({
  items
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }}
    />
  );
}
