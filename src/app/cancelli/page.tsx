"use client";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Award } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";

export default function CancelliPage() {
  const { t } = useT();
  const c = t.cancelli;
  return (
    <>
      <SubpageHero
        preLabel={`${t.nav.label.cancelli} · Bologna, Modena, Ferrara`}
        headlinePre={c.hero.headline}
        headlineAccent={c.hero.headlineAccent}
        subheadline={c.hero.subheadline}
        cta={c.hero.cta}
      />

      <section
        style={{
          backgroundColor: "var(--color-bg)",
          paddingTop: "var(--section-padding-y)",
          paddingBottom: "var(--section-padding-y)",
        }}
      >
        <div className="container-ef">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="label-eyebrow">{c.variantsTitle}</span>
            <h2 className="heading-2 mt-3">
              {c.variantsTitle.replace(/\.$/, "")}
              <span style={{ color: "var(--color-accent)" }}>{c.variantsTitleAccent}</span>
              {c.variantsTitlePost}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {c.variants.map((v) => (
              <div key={v.name} className="card">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
                  <h3 className="text-h4" style={{ fontWeight: 500, color: "var(--color-text-primary)" }}>{v.name}</h3>
                </div>
                <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "var(--color-surface)",
          paddingTop: "var(--section-padding-y)",
          paddingBottom: "var(--section-padding-y)",
        }}
      >
        <div className="container-ef">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="label-eyebrow">Vantaggi</span>
              <h2 className="heading-2 mt-3">
                {c.whyIronTitle}
                <span style={{ color: "var(--color-accent)" }}>{c.whyIronAccent}</span>
              </h2>
              <ul className="mt-6 space-y-3">
                {c.whyIronBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
                    <span className="text-body-lg" style={{ color: "var(--color-text-primary)" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl"
              style={{
                backgroundColor: "var(--color-accent-subtle)",
                padding: "32px",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Award size={28} style={{ color: "var(--color-accent)" }} />
                <h3 className="heading-3" style={{ fontWeight: 500 }}>
                  {c.prontaConsegnaTitle}
                  <span style={{ color: "var(--color-accent)" }}>{c.prontaConsegnaAccent}</span>
                </h3>
              </div>
              <p className="text-body" style={{ color: "var(--color-text-primary)" }}>{c.prontaConsegnaBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "var(--color-bg)",
          paddingTop: "var(--section-padding-y)",
          paddingBottom: "var(--section-padding-y)",
        }}
      >
        <div className="container-ef">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">FAQ</span>
            <h2 className="heading-2 mt-3">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ items={c.faq} />
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "var(--color-surface-dark)",
          color: "var(--color-text-on-dark)",
          paddingTop: "var(--section-padding-y)",
          paddingBottom: "var(--section-padding-y)",
        }}
      >
        <div className="container-ef">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="label-eyebrow" style={{ color: "var(--color-accent)" }}>Contact</span>
              <h2 className="heading-2 mt-3" style={{ color: "var(--color-text-on-dark)" }}>
                Request your <span style={{ color: "var(--color-accent)" }}>free quote</span>
              </h2>
              <p className="text-body-lg mt-5" style={{ color: "rgba(245, 240, 232, 0.8)" }}>
                Free site visit, no-obligation quote. We respond within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
