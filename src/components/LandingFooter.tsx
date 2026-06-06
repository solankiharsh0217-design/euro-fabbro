"use client";
import Link from "next/link";
import { useT } from "./LanguageProvider";

export function LandingFooter() {
  const { t, site } = useT();
  return (
    <footer
      className="py-12 px-4"
      style={{
        backgroundColor: "var(--color-surface-dark)",
        color: "var(--color-text-on-dark)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container-ef max-w-4xl mx-auto text-center text-sm" style={{ color: "rgba(245, 240, 232, 0.7)" }}>
        <div className="mb-4">
          <span className="font-bold" style={{ color: "var(--color-text-on-dark)" }}>
            {site.company}
          </span>
          <span className="mx-2 opacity-50">|</span>
          <span>{site.vat}</span>
          <span className="mx-2 opacity-50 hidden sm:inline">|</span>
          <br className="sm:hidden" />
          <span className="mt-2 sm:mt-0 inline-block">{site.address}</span>
        </div>
        <div>
          <Link
            href="/privacy-policy"
            className="hover:underline"
            style={{ color: "var(--color-accent)" }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
