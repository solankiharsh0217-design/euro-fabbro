"use client";
import Image from "next/image";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { FaqSection } from "@/components/FaqSection";
import { ContactCta } from "@/components/ContactCta";
import { SectionEyebrow } from "@/components/ui";

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
        heroImage="/images/wp/Recinzioni-in-ferro-bologna-cento.jpg"
        heroImageAlt="Recinzioni in ferro modulari — Ferioli Sergio, Bologna"
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
              <span className="label-eyebrow">{t.pageLabels.material}</span>
              <h2 className="heading-2 mt-3">
                {c.ironTitlePre}
                <span style={{ color: "var(--color-accent)" }}>{c.ironTitleAccent}</span>
              </h2>
              <p className="lead mt-5">{c.ironBody}</p>
            </div>
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <Image
                src="/images/wp/Recinzioni-in-ferro-a-doghe-modulari-bologna.jpg"
                alt="Recinzione in ferro a doghe modulari"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
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

      <section
        style={{
          backgroundColor: "var(--color-surface)",
          paddingTop: "var(--section-padding-y)",
          paddingBottom: "var(--section-padding-y)",
        }}
      >
        <div className="container-ef">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionEyebrow>Tipologie in officina</SectionEyebrow>
            <h2 className="heading-2 mt-3">
              <span style={{ color: "var(--color-accent)" }}>Doghe, reti</span> e moduli su misura
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { src: "/images/wp/Recinzioni-in-ferro-bologna-cento.jpg", alt: "Recinzioni in ferro", label: "Ferro modulare" },
              { src: "/images/wp/Reti-metalliche-bologna-crevalcore.jpg", alt: "Reti metalliche", label: "Reti metalliche" },
              { src: "/images/wp/Recinzioni-in-rete-metallica.jpg", alt: "Rete metallica decorativa", label: "Rete decorativa" },
              { src: "/images/wp/Reti-metalliche-decorative-crevalcore.jpg", alt: "Reti decorative", label: "Decorativa" },
            ].map((img) => (
              <Link
                key={img.label}
                href="/recinzioni/reti-metalliche"
                className="group block relative aspect-[4/3] rounded-xl overflow-hidden"
                style={{ backgroundColor: "var(--color-bg)" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-slow ease-ease-out group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(28,23,18,0.85), rgba(28,23,18,0.1) 55%, transparent)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4" style={{ color: "#FFFFFF" }}>
                  <p className="text-sm font-semibold leading-tight">{img.label}</p>
                </div>
              </Link>
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
