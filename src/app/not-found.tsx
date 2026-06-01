"use client";
import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { useT } from "@/components/LanguageProvider";

export default function NotFound() {
  const { site } = useT();
  return (
    <section
      style={{
        backgroundColor: "var(--color-bg)",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        padding: "var(--section-padding-y) 0",
      }}
    >
      <div className="container-ef text-center">
        <p
          style={{
            fontSize: "clamp(80px, 14vw, 180px)",
            fontWeight: 300,
            color: "var(--color-accent)",
            fontFamily: "var(--font-body)",
            lineHeight: 1,
            marginBottom: 16,
          }}
        >
          404
        </p>
        <h1 className="heading-1">Page not found</h1>
        <p className="lead mt-4" style={{ maxWidth: 520, margin: "16px auto 0" }}>
          The page you are looking for doesn&apos;t exist or has been moved. Get back on track from here.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <Link href="/" className="btn btn-primary w-full sm:w-auto">
            <Home size={16} /> Back to home
          </Link>
          <a href={`tel:${site.phoneTel}`} className="btn btn-secondary w-full sm:w-auto">
            <Phone size={16} /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
