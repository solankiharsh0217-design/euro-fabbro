"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { ContactCta } from "@/components/ContactCta";

export default function LavorazioniPage() {
  const { t } = useT();
  const c = t.lavorazioni;
  return (
    <>
      <SubpageHero
        preLabel={`${t.nav.label.lavorazioni} · Bologna, Modena, Ferrara`}
        headlinePre={c.hero.headlinePre}
        headlineAccent={c.hero.headlineAccent}
        subheadline={c.hero.subheadline}
        cta={c.hero.cta}
      />
      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="space-y-6">
            {c.sections.map((s) => (
              <Link
                key={s.id}
                href={s.href ?? "#"}
                className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-center group"
                style={{ textDecoration: "none" }}
              >
                <div className="lg:col-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1" style={{ backgroundColor: "var(--color-bg-secondary)" }}>
                  <Image src={s.image} alt={s.name} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="lg:col-span-3 order-1 lg:order-2">
                  <h3 className="heading-3 mb-4" style={{ color: "var(--color-text-primary)" }}>{s.name}</h3>
                  <p className="text-body-lg" style={{ color: "var(--color-text-secondary)" }}>{s.desc}</p>
                  <span
                    className="inline-flex items-center gap-2 mt-4 text-body-sm"
                    style={{ color: "var(--color-accent)", fontWeight: 500 }}
                  >
                    {t.lavorazioni.hero.cta} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
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
