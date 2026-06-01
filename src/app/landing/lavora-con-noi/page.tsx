"use client";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { ContactForm } from "@/components/ContactForm";

export default function LavoraConNoiLanding() {
  const { t, site } = useT();
  return (
    <>
      <section
        style={{
          backgroundColor: "var(--color-surface-dark)",
          color: "var(--color-text-on-dark)",
          paddingTop: "calc(var(--section-padding-y) / 1.5)",
          paddingBottom: "calc(var(--section-padding-y) / 1.5)",
        }}
      >
        <div className="container-ef">
          <div className="max-w-3xl">
            <span className="label-eyebrow" style={{ color: "var(--color-accent)" }}>{t.workWithUs.preLabel}</span>
            <h1 className="text-hero mt-3" style={{ color: "#FFFFFF", fontWeight: 300 }}>
              {t.workWithUs.headlinePre}
              <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>{t.workWithUs.headlineAccent}</span>
              {t.workWithUs.headlinePost}
            </h1>
            <p className="text-body-lg mt-5" style={{ color: "rgba(245, 240, 232, 0.82)", maxWidth: 560 }}>
              {t.workWithUs.subheadline}
            </p>
            <a href="#form" className="btn btn-primary mt-7">
              {t.workWithUs.cta} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {[
              "Installers and fitters",
              "Resellers and showrooms",
              "Architects and engineers",
              "Construction companies",
            ].map((b) => (
              <li key={b} className="card flex items-start gap-3">
                <CheckCircle size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
                <span className="text-body-lg" style={{ color: "var(--color-text-primary)" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="form" style={{ backgroundColor: "var(--color-surface)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="label-eyebrow">Apply</span>
              <h2 className="heading-2 mt-3">Get in touch</h2>
              <p className="lead mt-4">Tell us about your background and we&apos;ll get back to you.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
