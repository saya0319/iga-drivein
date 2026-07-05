import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "伊賀ドライブイン | 300席の大食堂・大型バス歓迎・伊賀ICすぐ",
    template: "%s | 伊賀ドライブイン"
  },
  description: siteConfig.description,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "伊賀ドライブイン",
    description: siteConfig.description,
    images: [siteConfig.images.hero],
    type: "website",
    locale: "ja_JP"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ScrollReveal />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
