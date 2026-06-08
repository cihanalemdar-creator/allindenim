import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { CapabilityCard, ProductCategoryCard } from "@/components/cards";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeader } from "@/components/SectionHeader";
import { categoryPages, getRelatedCategories, type CategoryPageData } from "@/content/categories";
import { getVisualAsset } from "@/content/visual-assets";

type CategoryPageProps = {
  category: CategoryPageData;
};

function Checklist({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex gap-3 rounded-panel border border-stone-200 bg-white p-4 shadow-line">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-denim-700" aria-hidden="true" />
          <p className="text-sm font-medium leading-7 text-stone-700">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function CategoryPage({ category }: CategoryPageProps) {
  const related = getRelatedCategories(category);
  const categoryImage = getVisualAsset(category.slug.replace("-manufacturing", ""));
  const privateLabelImage =
    category.slug === "ready-to-wear-private-label" ? getVisualAsset("private-label") : undefined;
  const image = categoryImage ?? privateLabelImage;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Product Categories", path: "/product-categories" },
          { name: category.title, path: `/${category.slug}` }
        ]}
      />
      <PageHero
        eyebrow={category.eyebrow}
        title={category.h1}
        description={category.description}
        primaryCta={{ label: "Start a Production Inquiry", href: "/contact" }}
        secondaryCta={{ label: "View All Categories", href: "/product-categories" }}
        imageLabel={category.imageLabel}
        imageSrc={image?.path}
        imageAlt={image?.alt}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <SectionHeader
              eyebrow="Capabilities"
              title={`Focused production support for ${category.navTitle.toLowerCase()}.`}
              description="Each inquiry is evaluated by product type, quantity expectations, material direction, target market, timeline, technical readiness, and supplier fit."
            />
            <Checklist items={category.capabilities} />
          </div>
        </Container>
      </section>

      <section className="bg-cotton py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Product examples"
                title="Product directions buyers commonly request."
                description="These examples show common category directions. Final feasibility depends on specifications, quantities, materials, finishing requirements, and supplier availability."
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {category.products.map((product) => (
                  <CapabilityCard
                    key={product}
                    title={product}
                    description={`Sourcing, sampling, production follow-up, and QC coordination can be reviewed for ${product.toLowerCase()}.`}
                    icon={category.icon}
                  />
                ))}
              </div>
            </div>
            <PlaceholderImage
              label={image?.label ?? category.imageLabel}
              ratio="portrait"
              src={image?.path}
              altText={image?.alt}
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Materials"
                title="Material, trim, and finishing directions."
                description="Allin Denim can coordinate material and trim sourcing through suitable suppliers based on the product brief and buyer expectations."
              />
              <div className="mt-10">
                <Checklist items={category.materials} />
              </div>
            </div>
            <div>
              <SectionHeader
                eyebrow="Production support"
                title="From technical brief to export-ready preparation."
                description="Support can cover development, sourcing, supplier communication, production follow-up, packaging review, and export coordination."
              />
              <div className="mt-10">
                <Checklist items={category.support} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cotton py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="Quality control"
              title="Quality checkpoints that keep production visible."
              description="Quality control is handled through sample review, inline follow-up, measurement checks, workmanship review, packaging checks, and final inspection coordination."
            />
            <Checklist items={category.quality} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Related categories"
              title="Explore other apparel production categories."
              description="Many international brands combine denim, woven, knitwear, underwear, loungewear, baby and children's apparel, and private label production in one sourcing program."
            />
            <Button href="/product-categories" variant="secondary">
              All Categories
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <ProductCategoryCard
                key={item.slug}
                title={item.title}
                description={item.description}
                href={`/${item.slug}`}
                icon={item.icon}
                tags={item.products.slice(0, 3)}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title={`Planning ${category.navTitle.toLowerCase()} production in Turkey?`}
        description="Send your product brief, tech pack status, target quantities, market, and timeline. Allin Denim can review the sourcing, sampling, quality, and export coordination path."
        ctaLabel="Start a Production Inquiry"
        ctaHref="/contact"
      />
    </>
  );
}

export function CategoryOverviewPage() {
  const overviewImage = getVisualAsset("product-categories-overview");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Product Categories", path: "/product-categories" }
        ]}
      />
      <PageHero
        eyebrow="Product categories"
        title="Apparel Product Categories Manufactured and Sourced in Turkey"
        description="Allin Denim supports international brands across denim, woven apparel, knitwear, underwear, loungewear, baby and children's apparel, ready-to-wear, and private label apparel through sourcing, sampling, production management, QC, and export coordination."
        primaryCta={{ label: "Start a Production Inquiry", href: "/contact" }}
        secondaryCta={{ label: "Explore Capabilities", href: "/capabilities" }}
        imageLabel={overviewImage?.label ?? "Apparel category overview"}
        imageSrc={overviewImage?.path}
        imageAlt={overviewImage?.alt}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Categories"
            title="Choose the apparel category that matches your production brief."
            description="Each category page explains product examples, material possibilities, production support, quality control, and related internal links for sourcing teams."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categoryPages.map((category) => (
              <ProductCategoryCard
                key={category.slug}
                title={category.title}
                description={category.description}
                href={`/${category.slug}`}
                icon={category.icon}
                tags={category.products.slice(0, 3)}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cotton py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="How categories are managed"
              title="One structured process across different apparel products."
              description="Allin Denim reviews product requirements, coordinates sourcing and sampling, supports production planning, follows quality checkpoints, and helps with export-ready coordination."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Fabric and trim sourcing",
                "Sampling and fit development",
                "Supplier and production coordination",
                "Quality control checkpoints",
                "Packaging and labeling review",
                "Export documentation coordination"
              ].map((item) => (
                <CapabilityCard
                  key={item}
                  title={item}
                  description="A practical support area that can be adapted to the selected product category and project scope."
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Need help choosing the right production category?"
        description="Share your product idea, tech pack, or collection plan. Allin Denim can review the best category path and sourcing requirements for production in Turkey."
        ctaLabel="Contact Allin Denim"
        ctaHref="/contact"
      />
    </>
  );
}
