import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SiteJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Allin Denim | Apparel Manufacturing Partner in Turkey",
    template: "%s | Allin Denim"
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/assets/logo/favicon/favicon.ico" },
      { url: "/assets/logo/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/assets/logo/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logo/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/assets/logo/favicon/favicon-180x180.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/assets/logo/favicon/site.webmanifest"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <SiteJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
