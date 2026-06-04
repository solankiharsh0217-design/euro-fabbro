"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { useT } from "./LanguageProvider";

export function SubpageHero({
  preLabel,
  headlinePre,
  headlineAccent,
  headlinePost,
  subheadline,
  cta,
  heroImage,
  heroImageAlt,
  heroImagePosition,
}: {
  preLabel: string;
  headlinePre: string;
  headlineAccent: string;
  headlinePost?: string;
  subheadline: string;
  cta: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroImagePosition?: string;
}) {
  const { site } = useT();
  return (
    <section
      style={{
        backgroundColor: "var(--color-surface-dark)",
        color: "var(--color-text-on-dark)",
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
        position: "relative",
        overflow: "hidden",
        minHeight: heroImage ? "min(560px, 60vh)" : undefined,
        display: heroImage ? "flex" : undefined,
        alignItems: heroImage ? "center" : undefined,
      }}
    >
      {heroImage ? (
        <>
          <Image
            src={heroImage}
            alt={heroImageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover"
            style={{ objectPosition: heroImagePosition ?? "center 50%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, rgba(28,23,18,0.92) 0%, rgba(28,23,18,0.78) 45%, rgba(62,40,18,0.45) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(28,23,18,0.25) 0%, transparent 30%, transparent 65%, rgba(28,23,18,0.7) 100%)",
            }}
          />
        </>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 30%, rgba(184,149,106,0.18) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(184,149,106,0.12) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
      )}
      <div className="container-ef relative">
        <div className="max-w-3xl">
          <span className="label-eyebrow" style={{ color: "var(--color-accent)" }}>
            {preLabel}
          </span>
          <h1
            className="text-hero mt-4"
            style={{ color: "#FFFFFF", fontWeight: 300, textShadow: "0 2px 20px rgba(0,0,0,0.35)" }}
          >
            {headlinePre}
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>{headlineAccent}</span>
            {headlinePost ?? ""}
          </h1>
          <p
            className="text-body-lg mt-6"
            style={{ color: "rgba(245, 240, 232, 0.88)", maxWidth: 560, textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
          >
            {subheadline}
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/contatti" className="btn btn-primary">
              {cta} <ArrowRight size={16} />
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn btn-secondary-dark">
              <Phone size={16} /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ contextKey }: { contextKey: "cancelli" | "inferriate" | "recinzioni" | "carport" | "automazione" | "percheNoi" | "realizzazioni" | "detrazioni" | "lavorazioni" }) {
  const { t, site } = useT();
  return (
    <section
      style={{
        backgroundColor: "var(--color-surface-dark)",
        color: "var(--color-text-on-dark)",
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
      }}
    >
      <div className="container-ef">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="label-eyebrow" style={{ color: "var(--color-accent)" }}>
              {t.cta.preLabel}
            </span>
            <h2 className="heading-2 mt-3" style={{ color: "var(--color-text-on-dark)" }}>
              {t.cta.headlinePre}
              <span style={{ color: "var(--color-accent)", fontStyle: "italic", fontWeight: 300 }}>{t.cta.headlineAccent}</span>
            </h2>
            <p className="text-body-lg mt-5" style={{ color: "rgba(245, 240, 232, 0.8)" }}>
              {t.cta.subheadline}
            </p>
            <div className="space-y-3 mt-6 text-body" style={{ color: "rgba(245, 240, 232, 0.85)" }}>
              <a href={`tel:${site.phoneTel}`} className="flex items-center gap-3 hover:opacity-80">
                <Phone size={18} style={{ color: "var(--color-accent)" }} />
                <span>{site.phone}</span>
              </a>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80">
                <MessageCircle size={18} style={{ color: "var(--color-accent)" }} />
                <span>WhatsApp: {site.whatsappDisplay}</span>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:opacity-80">
                <Mail size={18} style={{ color: "var(--color-accent)" }} />
                <span>{site.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} style={{ color: "var(--color-accent)", marginTop: 2, flexShrink: 0 }} />
                <span>{site.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} style={{ color: "var(--color-accent)" }} />
                <span>{site.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
