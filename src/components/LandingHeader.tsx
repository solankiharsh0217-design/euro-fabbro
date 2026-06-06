"use client";
import Link from "next/link";
import Image from "next/image";
import { useT } from "./LanguageProvider";
import LanguageToggle from "./LanguageToggle";

export function LandingHeader() {
  const { t, site } = useT();
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: "rgba(245, 240, 232, 0.92)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--color-border-subtle)",
        height: 64,
      }}
    >
      <div className="container-ef flex items-center justify-between h-full">
        <Link href="/" className="flex items-center" aria-label={t.nav.label.close ? `${site.name} home` : `${site.name} home`}>
          <Image
            src={site.logo}
            alt={`${site.name} logo`}
            width={140}
            height={70}
            className="w-[100px] sm:w-[120px] h-auto"
            priority
          />
        </Link>
        <div className="flex items-center gap-3">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
