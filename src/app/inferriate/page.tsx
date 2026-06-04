"use client";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { FaqSection } from "@/components/FaqSection";
import { ContactCta } from "@/components/ContactCta";
import { SectionEyebrow } from "@/components/ui";

export default function InferriatePage() {
  const { t } = useT();
  const c = t.inferriate;
  return (
    <>
      <SubpageHero
        preLabel={`${t.nav.label.inferriate} · Bologna, Modena, Ferrara`}
        headlinePre={c.hero.headlinePre}
        headlineAccent={c.hero.headlineAccent}
        subheadline={c.hero.subheadline}
        cta={c.hero.cta}
        heroImage="/images/wp/Grate-apribili-decorate-bologna.jpg"
        heroImageAlt="Inferriate apribili decorate — Ferioli Sergio, Bologna"
        heroImagePosition="center 50%"
      />

      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="label-eyebrow">{t.pageLabels.tipologie}</span>
            <h2 className="heading-2 mt-3">
              <span style={{ color: "var(--color-accent)" }}>Every type</span> for every opening
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {c.variants.map((v) => (
              <Link
                key={v.name}
                href={v.href ?? "#"}
                className="card flex flex-col group"
                style={{ textDecoration: "none" }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
                  <h3 className="text-h4" style={{ fontWeight: 500, color: "var(--color-text-primary)" }}>{v.name}</h3>
                </div>
                <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>{v.desc}</p>
                <span
                  className="inline-flex items-center gap-1.5 mt-4 text-body-sm"
                  style={{ color: "var(--color-accent)", fontWeight: 500 }}
                >
                  Scopri di più <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
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
            <SectionEyebrow>Tipologie in officina</SectionEyebrow>
            <h2 className="heading-2 mt-3">
              <span style={{ color: "var(--color-accent)" }}>Sicurezza</span> per ogni apertura
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { src: "/images/wp/Inferriate-fisse-per-finestre-giovanni-in-persiceto.jpg", alt: "Inferriate fisse", label: "Fisse" },
              { src: "/images/wp/Inferriate-apribili-a-due-ante-ferro-battuto-bologna.jpg", alt: "Inferriate apribili", label: "Apribili" },
              { src: "/images/wp/Inferriate-snodabili-personalizzate-bologna-cento.jpg", alt: "Inferriate snodabili", label: "Snodabili" },
              { src: "/images/wp/Inferriate-a-due-ante-bologna-san-giovanni-in-persiceto.jpg", alt: "Inferriate a due ante", label: "Due ante" },
            ].map((img) => (
              <Link
                key={img.label}
                href="/realizzazioni"
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

      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="max-w-3xl mx-auto text-center">
            <span className="label-eyebrow">{t.pageLabels.benefici}</span>
            <h2 className="heading-2 mt-3">
              {c.benefitsTitlePre}
              <span style={{ color: "var(--color-accent)" }}>{c.benefitsTitleAccent}</span>
              {c.benefitsTitlePost}
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto mt-10">
            {c.benefits.map((b) => (
              <li key={b} className="card flex items-start gap-3">
                <CheckCircle size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
                <span className="text-body-lg" style={{ color: "var(--color-text-primary)" }}>{b}</span>
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
