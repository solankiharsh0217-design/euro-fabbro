"use client";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useT } from "@/components/LanguageProvider";

export default function Page() {
  const { t, site } = useT();
  const g = t.grazie;
  return (
    <section
      style={{
        backgroundColor: "var(--color-surface-dark)",
        color: "var(--color-text-on-dark)",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "calc(var(--section-padding-y) * 1.5)",
        paddingBottom: "calc(var(--section-padding-y) * 1.5)",
      }}
    >
      <div className="container-ef">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="inline-flex items-center justify-center mb-6"
            style={{
              width: 80,
              height: 80,
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--color-accent-subtle)",
            }}
          >
            <CheckCircle size={40} style={{ color: "var(--color-accent)" }} />
          </div>
          <span className="label-eyebrow" style={{ color: "var(--color-accent)" }}>
            {g.eyebrow}
          </span>
          <h1
            className="text-hero mt-4"
            style={{ color: "#FFFFFF", fontWeight: 300 }}
          >
            {g.titlePre}
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}> {g.titleAccent}</span>
          </h1>
          <p
            className="text-body-lg mt-6"
            style={{ color: "rgba(245, 240, 232, 0.82)" }}
          >
            {g.body}
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link href="/" className="btn btn-primary">
              {g.ctaHome} <ArrowRight size={16} />
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn btn-secondary-dark">
              <Phone size={16} /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
