"use client";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { ContactCta } from "@/components/ContactCta";

export default function AutomazionePage() {
  const { t } = useT();
  const c = t.automazione;
  return (
    <>
      <SubpageHero
        preLabel={t.nav.label.automazione}
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
              <span className="label-eyebrow">How it works</span>
              <h2 className="heading-2 mt-3">
                {c.howTitle}
                <span style={{ color: "var(--color-accent)" }}>{c.howAccent}</span>
              </h2>
              <p className="lead mt-5">{c.howBody}</p>
            </div>
            <div>
              <span className="label-eyebrow">Types</span>
              <div className="mt-4 space-y-4">
                {c.types.map((tp) => (
                  <div key={tp.name} className="card">
                    <h3 className="text-h4 mb-2" style={{ fontWeight: 500 }}>{tp.name}</h3>
                    <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>{tp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "var(--color-surface)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Controls</span>
            <h2 className="heading-2 mt-3">Ways to control your gate</h2>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {c.controls.map((c2) => (
              <li key={c2} className="card text-center" style={{ padding: 20 }}>{c2}</li>
            ))}
          </ul>
        </div>
      </section>
      <section style={{ backgroundColor: "var(--color-bg-secondary)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="max-w-3xl mx-auto text-center">
            <span className="label-eyebrow">Service</span>
            <h2 className="heading-2 mt-3">
              {c.serviceTitle}
              <span style={{ color: "var(--color-accent)" }}>{c.serviceAccent}</span>
            </h2>
            <p className="lead mt-5">{c.serviceBody}</p>
          </div>
        </div>
      </section>
      <ContactCta
        title={<>Request a <span style={{ color: "var(--color-accent)" }}>consultation</span></>}
      />
    </>
  );
}
