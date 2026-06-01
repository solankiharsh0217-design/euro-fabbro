"use client";
import { CheckCircle } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { FaqSection } from "@/components/FaqSection";
import { ContactCta } from "@/components/ContactCta";

export default function InferriatePage() {
  const { t } = useT();
  const c = t.inferriate;
  return (
    <>
      <SubpageHero
        preLabel={t.nav.label.inferriate}
        headlinePre={c.hero.headline}
        headlineAccent={c.hero.headlineAccent}
        subheadline={c.hero.subheadline}
        cta={c.hero.cta}
      />

      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="label-eyebrow">Tipologie</span>
            <h2 className="heading-2 mt-3">
              <span style={{ color: "var(--color-accent)" }}>Every type</span> for every opening
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {c.variants.map((v) => (
              <div key={v.name} className="card">
                <h3 className="text-h4 mb-3" style={{ fontWeight: 500, color: "var(--color-text-primary)" }}>{v.name}</h3>
                <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-surface)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="max-w-3xl mx-auto text-center">
            <span className="label-eyebrow">Benefici</span>
            <h2 className="heading-2 mt-3">
              {c.benefitsTitle}
              <span style={{ color: "var(--color-accent)" }}>{c.benefitsAccent}</span>
              {c.benefitsPost}
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto mt-10">
            {c.benefits.map((b) => (
              <li key={b} className="card flex items-start gap-3">
                <CheckCircle size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
                <span className="text-body-lg" style={{ color: "var(--color-text-primary)" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection items={c.faq} />
      <ContactCta
        title={<>Request your <span style={{ color: "var(--color-accent)" }}>free quote</span></>}
      />
    </>
  );
}
