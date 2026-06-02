import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PlaceholderImage } from "@/components/PlaceholderImage";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  imageLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageRatio?: "wide" | "square" | "portrait";
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  imageLabel = "Production visual",
  imageSrc,
  imageAlt,
  imageRatio = "portrait"
}: PageHeroProps) {
  return (
    <section className="border-b border-stone-200 bg-cotton py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            {eyebrow ? (
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-denim-700">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-ink-950 sm:text-5xl lg:text-[4rem]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
              {description}
            </p>
            {(primaryCta || secondaryCta) ? (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {primaryCta ? <Button href={primaryCta.href}>{primaryCta.label}</Button> : null}
                {secondaryCta ? (
                  <Button href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
          {/* TODO: Replace placeholder visuals with verified logo, factory, product, team, certification, client reference, or case study assets when available. */}
          <PlaceholderImage
            label={imageLabel}
            ratio={imageRatio}
            src={imageSrc}
            altText={imageAlt}
          />
        </div>
      </Container>
    </section>
  );
}
