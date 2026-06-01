"use client";
import { Award, ShieldCheck, Sparkles } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { ContactCta } from "@/components/ContactCta";

export default function PercheNoiPage() {
  const { t } = useT();
  const c = t.percheNoi;
  return (
    <>
      <SubpageHero
        preLabel={t.nav.label.percheNoi}
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
              <span className="label-eyebrow">Heritage</span>
              <h2 className="heading-2 mt-3">
                {c.storyTitle}
                <span style={{ color: "var(--color-accent)" }}>{c.storyAccent}</span>
              </h2>
              <p className="lead mt-5">{c.storyBody}</p>
            </div>
            <div
              className="rounded-2xl"
              style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border-subtle)", padding: 32 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Award size={28} style={{ color: "var(--color-accent)" }} />
                <h3 className="heading-3" style={{ fontWeight: 500 }}>
                  {c.certTitle}
                  <span style={{ color: "var(--color-accent)" }}>{c.certAccent}</span>
                </h3>
              </div>
              <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>{c.certBody}</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "var(--color-surface-dark)", color: "var(--color-text-on-dark)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck size={28} style={{ color: "var(--color-accent)" }} />
                <h2 className="heading-2" style={{ color: "var(--color-text-on-dark)" }}>
                  {c.guaranteeTitle}
                  <span style={{ color: "var(--color-accent)" }}>{c.guaranteeAccent}</span>
                </h2>
              </div>
              <p className="text-body-lg" style={{ color: "rgba(245, 240, 232, 0.85)" }}>{c.guaranteeBody}</p>
            </div>
            <ul className="space-y-3">
              <li className="card flex items-center gap-3" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <Sparkles size={20} style={{ color: "var(--color-accent)" }} />
                <span style={{ color: "var(--color-text-on-dark)" }}>49 years of artisan experience</span>
              </li>
              <li className="card flex items-center gap-3" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <Award size={20} style={{ color: "var(--color-accent)" }} />
                <span style={{ color: "var(--color-text-on-dark)" }}>First in Italy CE certified (Istituto Giordano)</span>
              </li>
              <li className="card flex items-center gap-3" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <ShieldCheck size={20} style={{ color: "var(--color-accent)" }} />
                <span style={{ color: "var(--color-text-on-dark)" }}>In-house production, direct installation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ContactCta
        title={<>Request your <span style={{ color: "var(--color-accent)" }}>free quote</span></>}
      />
    </>
  );
}
