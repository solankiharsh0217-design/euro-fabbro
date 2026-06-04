"use client";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, Shield, ArrowRight } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { FaqSection } from "@/components/FaqSection";
import { ContactCta } from "@/components/ContactCta";
import { SubpageHero } from "@/components/Subpage";
import { SectionEyebrow } from "@/components/ui";

export default function CancelliPage() {
  const { t, site } = useT();
  const c = t.cancelli;
  return (
    <>
      <SubpageHero
        preLabel={`${t.nav.label.cancelli} · Bologna, Modena, Ferrara`}
        headlinePre={c.hero.headlinePre}
        headlineAccent={c.hero.headlineAccent}
        subheadline={c.hero.subheadline}
        cta={c.hero.cta}
        heroImage="/images/wp/Cancelli-scorrevoli-zincati-di-design-bologna.jpg"
        heroImageAlt="Cancello scorrevole zincato di design — Ferioli Sergio, Bologna"
        heroImagePosition="center 45%"
      />

      <section
        style={{
          backgroundColor: "var(--color-bg-secondary)",
          paddingTop: "var(--section-padding-y)",
          paddingBottom: "var(--section-padding-y)",
        }}
      >
        <div className="container-ef">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <SectionEyebrow>{t.pageLabels.tipologie}</SectionEyebrow>
            <h2 className="heading-2 mt-3">
              {c.variantsTitlePre}
              <span style={{ color: "var(--color-accent)" }}>{c.variantsTitleAccent}</span>
              {c.variantsTitlePost}
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
              Ogni <span style={{ color: "var(--color-accent)" }}>apertura</span>, una soluzione
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { src: "/images/wp/Cancelli-scorrevoli-zincati-di-design-bologna.jpg", alt: "Cancelli scorrevoli zincati", label: "Scorrevoli" },
              { src: "/images/wp/Cancelli-a-battente-bologna-san-giovanni-in-persiceto.jpg", alt: "Cancelli a battente", label: "Battente" },
              { src: "/images/wp/Cancelli-pedonali-per-ingresso-bologna.jpg", alt: "Cancelli pedonali", label: "Pedonali" },
              { src: "/images/wp/Cancelli-basamenti-autoportanti-per-privati-crevalcore.jpg", alt: "Cancelli autoportanti", label: "Autoportanti" },
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
              <SectionEyebrow>{t.pageLabels.benefici}</SectionEyebrow>
              <h2 className="heading-2 mt-3">
                {c.whyTitlePre}
                <span style={{ color: "var(--color-accent)" }}>{c.whyTitleAccent}</span>
              </h2>
              <ul className="mt-6 space-y-3">
                {c.whyBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
                    <span className="text-body-lg" style={{ color: "var(--color-text-primary)" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl"
              style={{
                backgroundColor: "var(--color-accent-subtle)",
                padding: "32px",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Award size={28} style={{ color: "var(--color-accent)" }} />
                <h3 className="heading-3" style={{ fontWeight: 500 }}>
                  {c.prontaTitlePre}
                  <span style={{ color: "var(--color-accent)" }}>{c.prontaTitleAccent}</span>
                </h3>
              </div>
              <p className="text-body" style={{ color: "var(--color-text-primary)" }}>{c.prontaBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "var(--color-surface-dark)",
          paddingTop: "var(--section-padding-y)",
          paddingBottom: "var(--section-padding-y)",
        }}
      >
        <div className="container-ef">
          <div
            className="rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            style={{
              background: "linear-gradient(135deg, rgba(184, 149, 106, 0.16) 0%, rgba(184, 149, 106, 0.05) 100%)",
              border: "1px solid rgba(184, 149, 106, 0.25)",
            }}
          >
            <div
              className="inline-flex items-center justify-center shrink-0"
              style={{
                width: 64, height: 64, borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-accent-subtle)",
              }}
            >
              <Shield size={28} style={{ color: "var(--color-accent)" }} />
            </div>
            <div className="flex-1">
              <h3 className="text-h4" style={{ color: "var(--color-text-on-dark)", fontWeight: 500 }}>Istituto Giordano Certified</h3>
              <p className="text-body mt-1" style={{ color: "rgba(245, 240, 232, 0.7)" }}>
                CE Marking · Tested for 60,000 openings
              </p>
            </div>
            <a href={`tel:${site.phoneTel}`} className="btn btn-primary">Call {site.phone}</a>
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
