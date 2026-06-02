"use client";
import Link from "next/link";
import Image from "next/image";
import { useT } from "@/components/LanguageProvider";
import { SubpageHero } from "@/components/Subpage";
import { ContactCta } from "@/components/ContactCta";

export default function RealizzazioniPage() {
  const { t } = useT();
  const c = t.realizzazioni;
  return (
    <>
      <SubpageHero
        preLabel={t.nav.label.realizzazioni}
        headlinePre={c.hero.headlinePre}
        headlineAccent={c.hero.headlineAccent}
        subheadline={c.hero.subheadline}
        cta={c.hero.cta}
      />
      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {c.projects.map((p) => (
              <Link
                key={p.name}
                href={p.link}
                className="group block relative aspect-[4/3] rounded-xl overflow-hidden"
                style={{ backgroundColor: "var(--color-bg-secondary)" }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-slow ease-ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(28,23,18,0.9), rgba(28,23,18,0.1) 50%, transparent)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5" style={{ color: "#FFFFFF" }}>
                  <p className="text-lg font-semibold leading-tight">{p.name}</p>
                  <p className="text-sm mt-0.5" style={{ color: "rgba(255, 255, 255, 0.8)" }}>{p.location}</p>
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
