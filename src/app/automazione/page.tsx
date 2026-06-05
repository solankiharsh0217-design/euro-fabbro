"use client";
import Image from "next/image";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { ContactCta } from "@/components/ContactCta";
import { SectionEyebrow } from "@/components/ui";

export default function AutomazionePage() {
  const { t } = useT();
  const c = t.automazione;
  return (
    <>
      <SubpageHero
        preLabel={t.nav.label.automazione}
        headlinePre={c.hero.headlinePre}
        headlineAccent={c.hero.headlineAccent}
        headlinePost={c.hero.headlinePost}
        subheadline={c.hero.subheadline}
        cta={c.hero.cta}
        heroImage="/images/1fd69a4bb_generated_image.png"
        heroImageAlt="Gate automation by Ferioli Sergio"
      />
      <section
        style={{
          backgroundColor: "var(--color-bg)",
          paddingTop: "var(--section-padding-y)",
          paddingBottom: "var(--section-padding-y)",
        }}
      >
        <div className="container-ef">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="label-eyebrow">{t.pageLabels.howItWorks}</span>
              <h2 className="heading-2 mt-3">
                {c.howTitlePre}
                <span style={{ color: "var(--color-accent)" }}>{c.howTitleAccent}</span>
                {c.howTitlePost}
              </h2>
              <p className="lead mt-5">{c.howBody}</p>
            </div>
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <Image
                src="/images/wp/Sistemi-di-automazione-bologna-crevalcore.jpg"
                alt="Sistemi di automazione per cancelli"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
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
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionEyebrow>{t.pageLabels.types}</SectionEyebrow>
            <h2 className="heading-2 mt-3">
              {c.typesTitlePre}
              <span style={{ color: "var(--color-accent)" }}>{c.typesTitleAccent}</span>
              {c.typesTitlePost ? ` ${c.typesTitlePost}` : ""}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {c.types.map((tp, idx) => {
              const imgs = [
                "/images/wp/Sistemi-di-automazione-barriere-bologna.jpg",
                "/images/wp/Sistemi-di-automazione-porte-crevalcore.jpg",
                "/images/wp/Sistemi-di-motorizzazione-serramenti-crevalcore.jpg",
                "/images/wp/Acquisire-segnali-da-fotocellule.jpg",
              ];
              const src = imgs[idx % imgs.length];
              return (
                <div
                  key={tp.name}
                  className="card overflow-hidden p-0 group"
                >
                  <div
                    className="relative aspect-[16/10] overflow-hidden"
                    style={{ backgroundColor: "var(--color-bg)" }}
                  >
                    <Image
                      src={src}
                      alt={tp.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-slow ease-ease-out group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(28,23,18,0.6), transparent 60%)" }}
                    />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <h3 className="text-h4 mb-2" style={{ fontWeight: 500 }}>{tp.name}</h3>
                    <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>{tp.desc}</p>
                  </div>
                </div>
              );
            })}
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
            <span className="label-eyebrow">{t.pageLabels.controls}</span>
            <h2 className="heading-2 mt-3">{c.controlsTitle}</h2>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {c.controls.map((ctrl) => (
              <li key={ctrl} className="card text-center" style={{ padding: 20 }}>{ctrl}</li>
            ))}
          </ul>
        </div>
      </section>
      <section
        style={{
          backgroundColor: "var(--color-bg-secondary)",
          paddingTop: "var(--section-padding-y)",
          paddingBottom: "var(--section-padding-y)",
        }}
      >
        <div className="container-ef">
          <div className="max-w-3xl mx-auto text-center">
            <span className="label-eyebrow">{t.pageLabels.service}</span>
            <h2 className="heading-2 mt-3">
              {c.serviceTitlePre}
              <span style={{ color: "var(--color-accent)" }}>{c.serviceTitleAccent}</span>
              {c.serviceTitlePost}
            </h2>
            <p className="lead mt-5">{c.serviceBody}</p>
          </div>
        </div>
      </section>
      <ContactCta
        title={<>{t.cta.headlinePre}<span style={{ color: "var(--color-accent)" }}>{t.cta.headlineAccent}</span></>}
        subtitle={t.cta.subheadline}
      />
    </>
  );
}
