import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://eurofabbro-v1.base44.app"),
  title: {
    default: `${site.name} — Carpenteria metallica certificata`,
    template: `%s | ${site.name}`,
  },
  description:
    "Carpenteria metallica certificata a Bologna, Modena e Ferrara. Cancelli, inferriate, recinzioni, carport, scale e automazioni su misura. Produzione interna, marcatura CE.",
  keywords: [
    "carpenteria metallica",
    "cancelli su misura",
    "inferriate",
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
    title: `${site.name} — Carpenteria metallica certificata`,
    description:
      "Cancelli, inferriate, recinzioni, carport, scale e automazioni su misura. Produzione interna, marcatura CE, garanzia su ogni installazione.",
    images: [{ url: site.logo, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Carpenteria metallica certificata`,
    description:
      "Carpenteria metallica certificata a Bologna, Modena e Ferrara. Produzione interna, marcatura CE.",
    images: [site.logo],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap"
        />
      </head>
      <body className="min-h-screen bg-ef-bg text-ef-text-primary antialiased font-sans">
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
