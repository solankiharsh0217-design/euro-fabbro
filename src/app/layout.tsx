import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { MainWrapper } from "@/components/MainWrapper";
import { FloatingActions } from "@/components/FloatingActions";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://euro-fabbro.vercel.app"),
  title: {
    default: `${site.name} — Carpenteria metallica certificata dal 1977`,
    template: `%s | ${site.name}`,
  },
  description:
    "Carpenteria metallica certificata nella provincia di Bologna. Produzione interna, marcatura CE, qualità garantita su ogni installazione. Cancelli, inferriate, recinzioni, carport, automazione.",
  keywords: [
    "carpenteria metallica",
    "cancelli in ferro",
    "inferriate di sicurezza",
    "recinzioni",
    "carport",
    "automazione cancelli",
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
    locale: "it_IT",
    siteName: site.name,
    title: `${site.name} — Carpenteria metallica certificata dal 1977`,
    description:
      "Carpenteria metallica certificata nella provincia di Bologna. Produzione interna, marcatura CE, qualità garantita su ogni installazione.",
    images: [{ url: site.logo, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "Carpenteria metallica certificata nella provincia di Bologna.",
    images: [site.logo],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://euro-fabbro.vercel.app" },
  icons: { icon: site.logo },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="scroll-smooth">
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
