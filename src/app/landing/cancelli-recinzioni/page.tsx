"use client";
import Image from "next/image";
import { ArrowRight, CheckCircle, Award } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { ContactForm } from "@/components/ContactForm";

export default function CancelliRecinzioniLanding() {
  const { t, site } = useT();
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
          minHeight: "min(480px, 55vh)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/wp/Installazione-cancelli-bologna.jpg"
          alt="Installazione cancelli in ferro su misura — Bologna"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover"
          style={{ objectPosition: "center 50%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(28,23,18,0.92) 0%, rgba(28,23,18,0.72) 45%, rgba(62,40,18,0.40) 100%)",
          }}
        />
        <div className="container-ef relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="label-eyebrow" style={{ color: "var(--color-accent)" }}>{t.pageLabels.gutters[0]}</span>
              <h1 className="text-hero mt-3" style={{ color: "#FFFFFF", fontWeight: 300, textShadow: "0 2px 20px rgba(0,0,0,0.35)" }}>
                Custom iron <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>gates & fencing</span>
              </h1>
              <p className="text-body-lg mt-5" style={{ color: "rgba(245, 240, 232, 0.88)", maxWidth: 520, textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
                Production and installation of custom iron gates and fencing. 49 years of experience, CE marked, free site visit in Bologna and Modena.
              </p>
              <div className="flex flex-wrap gap-3 mt-7">
                <a href="#form" className="btn btn-primary">
                  Request quote <ArrowRight size={16} />
                </a>
                <a href={`tel:${site.phoneTel}`} className="btn btn-secondary-dark">
                  {site.phone}
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <div
                className="rounded-2xl"
                style={{ backgroundColor: "rgba(28,23,18,0.7)", border: "1px solid rgba(255,255,255,0.15)", padding: 24, maxWidth: 320, backdropFilter: "blur(8px)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Award size={20} style={{ color: "var(--color-accent)" }} />
                  <span className="font-semibold" style={{ color: "var(--color-text-on-dark)" }}>Certified First in Italy</span>
                </div>
                <p className="text-body-sm" style={{ color: "rgba(245, 240, 232, 0.85)" }}>
                  Istituto Giordano certification, CE marking on every installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {[
              "Free site visit within 24h",
              "Custom design, in-house production",
              "Galvanised and paintable on request",
              "CE marking and technical documentation",
              "Direct installation by our team",
              "Tax deductible under Security Bonus",
            ].map((b) => (
              <li key={b} className="card flex items-start gap-3">
                <CheckCircle size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
                <span className="text-body" style={{ color: "var(--color-text-primary)" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="form" style={{ backgroundColor: "var(--color-surface)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="label-eyebrow">Request</span>
              <h2 className="heading-2 mt-3">{t.pageLabels.project}</h2>
              <p className="lead mt-4">{t.pageLabels.quote24}</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
