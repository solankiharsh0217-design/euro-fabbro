import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { MainWrapper } from "@/components/MainWrapper";
import { FloatingActions } from "@/components/FloatingActions";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://eurofabbro-v1.base44.app"),
  title: {
    default: `${site.name} Digital Atelier — Certified metalwork since 1984`,
    template: `%s | ${site.name} Digital Atelier`,
  },
  description:
    "Custom metalwork in the Bologna province. In-house production, CE marking, guaranteed quality on every installation. Gates, security bars, fencing, carports, automation.",
  keywords: [
    "custom metalwork",
    "iron gates",
    "security bars",
    "fencing",
    "carports",
    "gate automation",
    "Bologna",
    "Modena",
    "Ferrara",
    "Cento",
    "Crevalcore",
    "Ferioli Sergio",
  ],
  authors: [{ name: site.company }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: `${site.name} Digital Atelier`,
    title: `${site.name} Digital Atelier — Certified metalwork since 1984`,
    description:
      "Custom metalwork in the Bologna province. In-house production, CE marking, guaranteed quality on every installation.",
    images: [{ url: site.logo, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} Digital Atelier`,
    description: "Custom metalwork in the Bologna province.",
    images: [site.logo],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: site.logo },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-screen antialiased">
        <LanguageProvider>
          <Header />
          <MainWrapper>{children}</MainWrapper>
          <Footer />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
