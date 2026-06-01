"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { ContactForm } from "@/components/ContactForm";

export default function LavorazioniPage() {
  const { t } = useT();
  const c = t.lavorazioni;
  return (
    <>
      <SubpageHero
        preLabel={t.nav.label.lavorazioni}
        headlinePre={c.hero.headline}
        headlineAccent={c.hero.headlineAccent}
        subheadline={c.hero.subheadline}
        cta={c.hero.cta}
      />
      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="space-y-6">
            {c.sections.map((s) => (
              <div
                key={s.id}
                className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-center"
              >
                <div className="lg:col-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1" style={{ backgroundColor: "var(--color-bg-secondary)" }}>
                  <Image src={s.image} alt={s.name} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                </div>
                <div className="lg:col-span-3 order-1 lg:order-2">
                  <span className="label-eyebrow">{s.name}</span>
                  <h3 className="heading-3 mt-3 mb-4">{s.name}</h3>
                  <p className="text-body-lg" style={{ color: "var(--color-text-secondary)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "var(--color-surface-dark)", color: "var(--color-text-on-dark)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="label-eyebrow" style={{ color: "var(--color-accent)" }}>Contact</span>
              <h2 className="heading-2 mt-3" style={{ color: "var(--color-text-on-dark)" }}>
                Request your <span style={{ color: "var(--color-accent)" }}>free quote</span>
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
