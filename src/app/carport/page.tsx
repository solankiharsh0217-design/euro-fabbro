"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";

export default function CarportPage() {
  const { t } = useT();
  const c = t.carport;
  return (
    <>
      <SubpageHero
        preLabel={t.nav.label.carport}
        headlinePre={c.hero.headline}
        headlineAccent={c.hero.headlineAccent}
        subheadline={c.hero.subheadline}
        cta={c.hero.cta}
      />

      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="max-w-3xl">
            <span className="label-eyebrow">Intro</span>
            <h2 className="heading-2 mt-3">
              {c.introTitle}
              <span style={{ color: "var(--color-accent)" }}>{c.introAccent}</span>
            </h2>
            <p className="lead mt-5">{c.introBody}</p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-surface)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-eyebrow">Why</span>
            <h2 className="heading-2 mt-3">
              {c.featuresTitle}
              <span style={{ color: "var(--color-accent)" }}>{c.featuresAccent}</span>
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
            <span className="label-eyebrow">Catalog</span>
            <h2 className="heading-2 mt-3">
              {c.typesTitle}
              <span style={{ color: "var(--color-accent)" }}>{c.typesAccent}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {c.types.map((tp) => (
              <div key={tp.name} className="card p-0 overflow-hidden">
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
            <span className="label-eyebrow">Materials</span>
            <h2 className="heading-2 mt-3">
              {c.materialsTitle}
              <span style={{ color: "var(--color-accent)" }}>{c.materialsAccent}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {c.materials.map((m) => (
              <div key={m.name} className="card">
                <h3 className="text-h4 mb-2" style={{ fontWeight: 500 }}>{m.name}</h3>
                <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
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

      <section style={{ backgroundColor: "var(--color-surface-dark)", color: "var(--color-text-on-dark)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="label-eyebrow" style={{ color: "var(--color-accent)" }}>Contact</span>
              <h2 className="heading-2 mt-3" style={{ color: "var(--color-text-on-dark)" }}>
                Request your <span style={{ color: "var(--color-accent)" }}>free quote</span>
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
