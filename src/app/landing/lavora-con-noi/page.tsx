"use client";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { ContactForm } from "@/components/ContactForm";

export default function LavoraConNoiLanding() {
  const { t } = useT();
  const c = t.landings.lavoraConNoi;
  return (
    <>
      <section
        style={{
          backgroundColor: "var(--color-surface-dark)",
          color: "var(--color-text-on-dark)",
          paddingTop: "calc(var(--section-padding-y) / 1.5)",
          paddingBottom: "calc(var(--section-padding-y) / 1.5)",
          position: "relative",
          overflow: "hidden",
          minHeight: "min(440px, 55vh)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/wp/Banchi-lavoro-officina-cento.jpg"
          alt="Officina Ferioli Sergio — banchi di lavoro"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover"
          style={{ objectPosition: "center 55%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(28,23,18,0.92) 0%, rgba(28,23,18,0.78) 45%, rgba(62,40,18,0.45) 100%)",
          }}
        />
        <div className="container-ef relative">
          <div className="max-w-3xl">
            <span className="label-eyebrow" style={{ color: "var(--color-accent)" }}>{c.heroEyebrow}</span>
            <h1 className="text-hero mt-3" style={{ color: "#FFFFFF", fontWeight: 300, textShadow: "0 2px 20px rgba(0,0,0,0.35)" }}>
              {c.heroTitlePre}
              <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>{c.heroTitleAccent}</span>
            </h1>
            <p className="text-body-lg mt-5" style={{ color: "rgba(245, 240, 232, 0.88)", maxWidth: 560, textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
              {c.heroSub}
            </p>
            <a href="#form" className="btn btn-primary mt-7">
              {c.heroCta} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">{c.benefitsTitle}</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {c.benefits.map((b) => (
              <li key={b} className="card flex items-start gap-3">
                <CheckCircle size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
                <span className="text-body-lg" style={{ color: "var(--color-text-primary)" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="form" style={{ backgroundColor: "var(--color-surface)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="label-eyebrow">{c.requestEyebrow}</span>
              <h2 className="heading-2 mt-3">{t.pageLabels.getInTouch}</h2>
              <p className="lead mt-4">{t.pageLabels.partners}</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
