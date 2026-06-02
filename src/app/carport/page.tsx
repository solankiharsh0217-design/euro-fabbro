"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { FaqSection } from "@/components/FaqSection";
import { ContactCta } from "@/components/ContactCta";

export default function CarportPage() {
  const { t } = useT();
  const c = t.carport;
  return (
    <>
      <SubpageHero
        preLabel={`${t.nav.label.carport} · Bologna, Modena, Ferrara`}
        headlinePre={c.hero.headlinePre}
        headlineAccent={c.hero.headlineAccent}
        subheadline={c.hero.subheadline}
        cta={c.hero.cta}
      />

      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="max-w-3xl">
            <span className="label-eyebrow">{t.pageLabels.intro}</span>
            <h2 className="heading-2 mt-3">
              {c.introTitlePre}
              <span style={{ color: "var(--color-accent)" }}>{c.introTitleAccent}</span>
            </h2>
            <p className="lead mt-5">{c.introBody}</p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-surface)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-eyebrow">{t.pageLabels.why}</span>
            <h2 className="heading-2 mt-3">
              {c.featuresTitlePre}
              <span style={{ color: "var(--color-accent)" }}>{c.featuresTitleAccent}</span>
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {c.features.map((f) => (
              <li key={f} className="card flex items-start gap-3">
                <CheckCircle size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
                <span className="text-body" style={{ color: "var(--color-text-primary)" }}>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-eyebrow">{t.pageLabels.catalog}</span>
            <h2 className="heading-2 mt-3">
              {c.typesTitlePre}
              <span style={{ color: "var(--color-accent)" }}>{c.typesTitleAccent}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {c.types.map((tp) => (
              <div key={tp.name} className="card p-0 overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: "var(--color-bg-secondary)" }}>
                  <Image src={tp.image} alt={tp.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div style={{ padding: "var(--component-padding)" }}>
                  <h3 className="text-h4 mb-2" style={{ fontWeight: 500 }}>{tp.name}</h3>
                  <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>{tp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-surface)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-eyebrow">{t.pageLabels.materials}</span>
            <h2 className="heading-2 mt-3">
              {c.materialsTitlePre}
              <span style={{ color: "var(--color-accent)" }}>{c.materialsTitleAccent}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {c.materials.map((m) => (
              <div key={m.name} className="card h-full flex flex-col">
                <h3 className="text-h4 mb-2" style={{ fontWeight: 500 }}>{m.name}</h3>
                <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={c.faq} />
      <ContactCta
        title={<>{t.cta.headlinePre}<span style={{ color: "var(--color-accent)" }}>{t.cta.headlineAccent}</span></>}
        subtitle={t.cta.subheadline}
      />
    </>
  );
}
