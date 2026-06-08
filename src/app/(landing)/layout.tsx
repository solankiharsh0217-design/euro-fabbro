import "../globals.css";
import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import { site } from "@/lib/content";
import { LandingHeader } from "@/components/LandingHeader";
import { LandingFooter } from "@/components/LandingFooter";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Carpenteria metallica certificata dal 1977`,
    template: `%s | ${site.name}`,
  },
  description:
    "Carpenteria metallica certificata nella provincia di Bologna. Produzione interna, marcatura CE, qualità garantita su ogni installazione.",
  robots: { index: true, follow: true },
  icons: { icon: site.logo },
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
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
          <LandingHeader />
          <main>{children}</main>
          <LandingFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
