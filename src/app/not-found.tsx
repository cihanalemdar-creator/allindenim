import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="bg-cotton py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-denim-700">
            Page not found
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-ink-950">
            This page is not available.
          </h1>
          <p className="mt-5 text-base leading-8 text-stone-700">
            Return to the homepage or contact Allin Denim to discuss apparel production in Turkey.
          </p>
          <div className="mt-8">
            <Button href="/">Back to Home</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
