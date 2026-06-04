"use client";
import Image from "next/image";
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
        headlinePre={c.hero.headlinePre}
        headlineAccent={c.hero.headlineAccent}
        headlinePost={c.hero.headlinePost}
        subheadline={c.hero.subheadline}
        cta={c.hero.cta}
        heroImage="/images/wp/Banchi-lavoro-officina-cento.jpg"
        heroImageAlt="Officina Ferioli Sergio — banchi di lavoro, Bologna"
        heroImagePosition="center 50%"
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
              <span className="label-eyebrow">{t.pageLabels.heritage}</span>
              <h2 className="heading-2 mt-3">
                {c.storyTitlePre}
                <span style={{ color: "var(--color-accent)" }}>{c.storyTitleAccent}</span>
                {c.storyTitlePost}
              </h2>
              <p className="lead mt-5">{c.storyBody}</p>
            </div>
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <Image
                src="/images/wp/Svolgere-la-propria-attivita-in-una-officina.jpg"
                alt="Officina Ferioli Sergio — artigiani al lavoro"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { src: "/images/wp/Banchi-lavoro-officina-cento.jpg", alt: "Banchi di lavoro in officina", label: "Officina" },
              { src: "/images/wp/Scaffalature-industriali-bologna.jpg", alt: "Scaffalature industriali", label: "Magazzino" },
              { src: "/images/wp/Prodotti-in-ferro-palata-pepoli-di-crevalcore.jpg", alt: "Prodotti in ferro su misura", label: "Produzione" },
            ].map((img) => (
              <div
                key={img.label}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                style={{ backgroundColor: "var(--color-bg)" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-slow ease-ease-out group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(28,23,18,0.75), rgba(28,23,18,0.1) 55%, transparent)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5" style={{ color: "#FFFFFF" }}>
                  <p className="text-base font-semibold leading-tight">{img.label}</p>
                </div>
              </div>
            ))}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck size={28} style={{ color: "var(--color-accent)" }} />
                <h2 className="heading-2" style={{ color: "var(--color-text-on-dark)" }}>
                  {c.guaranteeTitlePre}
                  <span style={{ color: "var(--color-accent)" }}>{c.guaranteeTitleAccent}</span>
                  {c.guaranteeTitlePost}
                </h2>
              </div>
              <p className="text-body-lg" style={{ color: "rgba(245, 240, 232, 0.85)" }}>{c.guaranteeBody}</p>
            </div>
            <ul className="space-y-3">
              <li
                className="card flex items-center gap-3"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Sparkles size={20} style={{ color: "var(--color-accent)" }} />
                <span style={{ color: "var(--color-text-on-dark)" }}>49 years of artisan experience</span>
              </li>
              <li
                className="card flex items-center gap-3"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Award size={20} style={{ color: "var(--color-accent)" }} />
                <span style={{ color: "var(--color-text-on-dark)" }}>First in Italy CE certified (Istituto Giordano)</span>
              </li>
              <li
                className="card flex items-center gap-3"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <ShieldCheck size={20} style={{ color: "var(--color-accent)" }} />
                <span style={{ color: "var(--color-text-on-dark)" }}>In-house production, direct installation</span>
              </li>
            </ul>
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
