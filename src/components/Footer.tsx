import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { Container } from "@/components/Container";
import { contactEmail, phoneNumbers } from "@/content/contact";

const footerGroups = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Allin Denim" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" }
    ]
  },
  {
    title: "Capabilities",
    links: [
      { href: "/capabilities", label: "Manufacturing Capabilities" },
      { href: "/production-process", label: "Production Process" },
      { href: "/quality-control-compliance", label: "Quality Control" },
      { href: "/sourcing-in-turkey", label: "Sourcing in Turkey" }
    ]
  },
  {
    title: "Product Categories",
    links: [
      { href: "/denim-jeans-manufacturing", label: "Denim & Jeans" },
      { href: "/woven-apparel-manufacturing", label: "Woven Apparel" },
      { href: "/knitwear-manufacturing", label: "Knitwear" },
      {
        href: "/underwear-loungewear-manufacturing",
        label: "Underwear & Loungewear"
      },
      { href: "/ready-to-wear-private-label", label: "Private Label Apparel" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-ink-900 text-white">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-[1.05fr_2fr] lg:gap-16">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="Allin Denim home">
              <BrandLogo variant="white" decorative className="w-[178px]" />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-stone-200">
              Turkey-based apparel manufacturing and sourcing partner for global
              brands managing denim, woven, knitwear, underwear, ready-to-wear,
              and private label production.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-denim-100"
            >
              Start a production inquiry
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-semibold text-white">{group.title}</p>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-stone-300 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-sm font-semibold text-white">Contact</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-sm text-stone-300 transition-colors hover:text-white"
                  >
                    {contactEmail}
                  </a>
                </li>
                {phoneNumbers.slice(0, 2).map((phone) => (
                  <li key={phone.value}>
                    <a
                      href={phone.href}
                      className="text-sm text-stone-300 transition-colors hover:text-white"
                    >
                      {phone.value}
                    </a>
                  </li>
                ))}
                <li className="text-sm leading-6 text-stone-300">
                  Head Office: Istanbul, Turkey
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-stone-300 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Allin Denim. All rights reserved.</p>
          <p>Apparel sourcing and production coordination in Turkey.</p>
        </div>
      </Container>
    </footer>
  );
}
