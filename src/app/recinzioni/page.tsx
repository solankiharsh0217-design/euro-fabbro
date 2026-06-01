"use client";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";

export default function RecinzioniPage() {
  const { t } = useT();
  const c = t.recinzioni;
  return (
    <>
      <SubpageHero
        preLabel={t.nav.label.recinzioni}
        headlinePre={c.hero.headline}
        headlineAccent={c.hero.headlineAccent}
        subheadline={c.hero.subheadline}
        cta={c.hero.cta}
      />
      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="label-eyebrow">Material</span>
              <h2 className="heading-2 mt-3">
                {c.ironTitle}
                <span style={{ color: "var(--color-accent)" }}>{c.ironAccent}</span>
              </h2>
              <p className="lead mt-5">{c.ironBody}</p>
            </div>
            <div>
              <span className="label-eyebrow">Modular</span>
              <h2 className="heading-2 mt-3">
                {c.modularTitle}
                <span style={{ color: "var(--color-accent)" }}>{c.modularAccent}</span>
              </h2>
              <p className="lead mt-5">{c.modularBody}</p>
            </div>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
            {c.benefits.map((b) => (
              <li key={b} className="card text-center" style={{ padding: 20 }}>
                <span className="text-body" style={{ color: "var(--color-text-primary)" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section style={{ backgroundColor: "var(--color-surface)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
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
