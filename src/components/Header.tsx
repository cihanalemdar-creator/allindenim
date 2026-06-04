import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/quality-control-compliance", label: "Quality" },
  { href: "/sourcing-in-turkey", label: "Sourcing" },
  { href: "/faq", label: "FAQ" }
];

const categoryNav = [
  {
    href: "/product-categories",
    label: "Category Overview",
    description: "All apparel categories"
  },
  {
    href: "/denim-jeans-manufacturing",
    label: "Denim & Jeans",
    description: "Jeans, jackets, washed denim"
  },
  {
    href: "/woven-apparel-manufacturing",
    label: "Woven Apparel",
    description: "Shirts, dresses, trousers"
  },
  {
    href: "/knitwear-manufacturing",
    label: "Knitwear",
    description: "T-shirts, hoodies, jersey basics"
  },
  {
    href: "/underwear-loungewear-manufacturing",
    label: "Underwear & Loungewear",
    description: "Underwear, pajamas, baby bodywear"
  },
  {
    href: "/ready-to-wear-private-label",
    label: "Private Label Apparel",
    description: "Adult, baby, and kids' collections"
  }
];

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
            {mainNav.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-stone-700 transition-colors hover:text-denim-700"
              >
                {item.label}
              </Link>
            ))}
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-700 transition-colors hover:text-denim-700 focus-visible:text-denim-700 focus-visible:outline-none"
                aria-haspopup="true"
              >
                Product Categories
                <ChevronDown
                  className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                  aria-hidden="true"
                />
              </button>
              <div className="invisible absolute left-1/2 top-8 w-[34rem] -translate-x-1/2 pt-5 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="grid gap-2 rounded-panel border border-stone-200 bg-white p-3 shadow-soft">
                  {categoryNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="grid gap-1 rounded-panel px-4 py-3 transition-colors hover:bg-stone-100 focus-visible:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-700/20"
                    >
                      <span className="text-sm font-semibold text-ink-900">{item.label}</span>
                      <span className="text-xs leading-5 text-stone-600">{item.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {mainNav.slice(3).map((item) => (
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
            <summary
              className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-panel border border-stone-300 bg-white text-ink-900 shadow-line marker:hidden"
              aria-label="Open navigation menu"
            >
              <span className="sr-only">Open navigation menu</span>
              <Menu aria-hidden="true" className="h-5 w-5 group-open:hidden" />
              <X aria-hidden="true" className="hidden h-5 w-5 group-open:block" />
            </summary>
            <nav
              id="mobile-navigation"
              className="absolute right-0 top-14 max-h-[calc(100vh-6rem)] w-[min(23rem,calc(100vw-2rem))] overflow-y-auto rounded-panel border border-stone-200 bg-white p-3 shadow-soft"
              aria-label="Mobile navigation"
            >
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-panel px-3 py-3 text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-denim-700"
                >
                  {item.label}
                </Link>
              ))}
              <details className="mt-2 rounded-panel border border-stone-200 bg-stone-50 p-2">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-panel px-3 py-3 text-sm font-semibold text-ink-900 marker:hidden">
                  Product Categories
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </summary>
                <div className="grid gap-1 pb-1">
                  {categoryNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="grid gap-0.5 rounded-panel px-3 py-3 text-sm font-medium text-stone-700 hover:bg-white hover:text-denim-700"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs font-normal leading-5 text-stone-500">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </details>
              <Link
                href="/contact"
                className="mt-3 block rounded-panel bg-ink-900 px-3 py-3 text-center text-sm font-semibold text-white"
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
