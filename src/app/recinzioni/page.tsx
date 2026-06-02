"use client";
import { CheckCircle, Hammer, Layers } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { FaqSection } from "@/components/FaqSection";
import { ContactCta } from "@/components/ContactCta";

export default function RecinzioniPage() {
  const { t } = useT();
  const c = t.recinzioni;
  return (
    <>
      <SubpageHero
        preLabel={`${t.nav.label.recinzioni} · Bologna, Modena, Ferrara`}
        headlinePre={c.hero.headlinePre}
        headlineAccent={c.hero.headlineAccent}
        subheadline={c.hero.subheadline}
        cta={c.hero.cta}
      />
      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="label-eyebrow">{t.pageLabels.material}</span>
              <h2 className="heading-2 mt-3">
                {c.ironTitlePre}
                <span style={{ color: "var(--color-accent)" }}>{c.ironTitleAccent}</span>
              </h2>
              <p className="lead mt-5">{c.ironBody}</p>
            </div>
            <div>
              <span className="label-eyebrow">{t.pageLabels.modular}</span>
              <h2 className="heading-2 mt-3">
                {c.modularTitlePre}
                <span style={{ color: "var(--color-accent)" }}>{c.modularTitleAccent}</span>
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
      <FaqSection items={c.faq} />
      <ContactCta
        title={<>{t.cta.headlinePre}<span style={{ color: "var(--color-accent)" }}>{t.cta.headlineAccent}</span></>}
        subtitle={t.cta.subheadline}
      />
    </>
  );
}
