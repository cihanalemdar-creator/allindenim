import Link from "next/link";
import { Menu } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
      <Container>
        <div className="flex min-h-[4.75rem] items-center justify-between gap-5">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 rounded-panel pr-2"
            aria-label="Allin Denim home"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-panel bg-ink-900 shadow-line">
              <BrandLogo variant="white" markOnly decorative priority className="h-8 w-8" />
            </span>
            <span className="hidden min-w-0 sm:block">
              <BrandLogo decorative priority className="w-[146px] md:w-[164px]" />
            </span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex xl:gap-7" aria-label="Main navigation">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-stone-700 transition-colors hover:text-denim-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button href="/contact" className="min-h-10 px-4 py-2 text-xs">
              Start Inquiry
            </Button>
          </div>
          <details className="group relative lg:hidden">
            <summary className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-panel border border-stone-300 bg-white text-ink-900 marker:hidden">
              <span className="sr-only">Open navigation menu</span>
              <Menu aria-hidden="true" className="h-5 w-5" />
            </summary>
            <nav
              className="absolute right-0 top-14 w-[min(20rem,calc(100vw-2.5rem))] rounded-panel border border-stone-200 bg-white p-3 shadow-soft"
              aria-label="Mobile navigation"
            >
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-panel px-3 py-3 text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-denim-700"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 block rounded-panel bg-ink-900 px-3 py-3 text-sm font-semibold text-white"
              >
                Start Production Inquiry
              </Link>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
