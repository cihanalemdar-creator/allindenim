import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

type CTASectionProps = {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CTASection({
  title,
  description,
  ctaLabel = "Start Your Production Inquiry",
  ctaHref = "/contact"
}: CTASectionProps) {
  return (
    <section className="bg-ink-900 py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-8 text-stone-200">{description}</p>
          </div>
          <Button href={ctaHref} variant="secondary" className="bg-white">
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
