"use client";
import { useState } from "react";
import { Calculator, CheckCircle } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { FaqSection } from "@/components/FaqSection";

export default function DetrazioniPage() {
  const { t } = useT();
  const c = t.detrazioni;
  const [value, setValue] = useState<number | "">("");
  const num = typeof value === "number" ? value : 0;
  const save36 = num * 0.36;
  const save50 = num * 0.50;
  return (
    <>
      <SubpageHero
        preLabel={t.nav.label.detrazioni}
        headlinePre={c.hero.headline}
        headlineAccent={c.hero.headlineAccent}
        headlinePost={c.hero.headlinePost}
        subheadline={c.hero.subheadline}
        cta={c.hero.cta}
      />
      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="label-eyebrow">Bonus</span>
              <h2 className="heading-2 mt-3">
                {c.bonusTitle}
                <span style={{ color: "var(--color-accent)" }}>{c.bonusAccent}</span>
              </h2>
              <p className="lead mt-5">{c.bonusBody}</p>
            </div>
            <div>
              <span className="label-eyebrow">Eligible</span>
              <h2 className="heading-2 mt-3">
                Which work may be <span style={{ color: "var(--color-accent)" }}>deductible</span>
              </h2>
              <ul className="mt-6 space-y-3">
                {c.eligible.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
                    <span className="text-body-lg" style={{ color: "var(--color-text-primary)" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "var(--color-surface)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="label-eyebrow">Financing</span>
              <h2 className="heading-2 mt-3">
                {c.compassTitle}
                <span style={{ color: "var(--color-accent)" }}>{c.compassAccent}</span>
              </h2>
              <p className="lead mt-5">{c.compassBody}</p>
            </div>
            <div
              className="rounded-2xl"
              style={{ backgroundColor: "var(--color-accent-subtle)", border: "1px solid var(--color-border-subtle)", padding: 32 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Calculator size={28} style={{ color: "var(--color-accent)" }} />
                <h3 className="heading-3" style={{ fontWeight: 500 }}>
                  {c.calcTitle}
                  <span style={{ color: "var(--color-accent)" }}>{c.calcAccent}</span>
                </h3>
              </div>
              <label className="label-ef">{c.calcLabel}</label>
              <input
                type="number"
                inputMode="numeric"
                placeholder={c.calcPlaceholder}
                value={value}
                onChange={(e) => setValue(e.target.value === "" ? "" : Number(e.target.value))}
                className="input-ef mb-5"
                min={0}
              />
              <div className="space-y-3">
                <div className="flex justify-between items-center" style={{ padding: "12px 16px", backgroundColor: "var(--color-surface)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)" }}>
                  <span className="text-body" style={{ color: "var(--color-text-secondary)" }}>{c.calcResult36}</span>
                  <span className="font-semibold" style={{ color: "var(--color-accent)" }}>− € {save36.toLocaleString("it-IT", { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between items-center" style={{ padding: "12px 16px", backgroundColor: "var(--color-surface)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)" }}>
                  <span className="text-body" style={{ color: "var(--color-text-secondary)" }}>{c.calcResult50}</span>
                  <span className="font-semibold" style={{ color: "var(--color-accent)" }}>− € {save50.toLocaleString("it-IT", { maximumFractionDigits: 0 })}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FaqSection items={c.faq} />
    </>
  );
}
