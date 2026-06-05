"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Calendar,
  ChevronDown,
  Shield,
  Clock,
  CheckCircle,
  MessageCircle,
  Ruler,
  Star,
  Quote,
  Calculator,
  Phone,
  Mail,
  MapPin,
  DoorOpen,
  Grid3x3,
  Fence,
  TrendingUp,
  Car,
  Settings,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { useT } from "@/components/LanguageProvider";
import { ScrollReveal, ScrollRevealStagger } from "@/components/ScrollReveal";
import { SectionEyebrow } from "@/components/ui";

const productIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number; className?: string }>> = {
  DoorOpen,
  Grid3x3,
  Fence,
  TrendingUp,
  Car,
  Settings,
};

const productImages: Record<string, string> = {
  DoorOpen: "/images/1.jpeg",
  Grid3x3: "/images/Realizzazione-grate-in-ferro-bologna-480x360-1.jpg",
  Fence: "/images/Cancelli-in-ferro-cento-1-300x225.jpg",
  TrendingUp: "/images/Realizzazione-strutture-in-ferro-cento-480x360-1.jpg",
  CarFront: "/images/28f664fa9_generated_image.png",
  Settings: "/images/ff67b59d2_generated_image.png",
};

const processIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number; className?: string; style?: React.CSSProperties }>> = {
  MessageCircle,
  Ruler,
  CheckCircle,
};

const certificationIcons: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  BadgeCheck,
  Shield,
  Award,
  Calendar,
};

function Section({
  children,
  bg = "var(--color-bg)",
  className = "",
  id,
}: {
  children: React.ReactNode;
  bg?: string;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={className}
      style={{
        backgroundColor: bg,
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
        position: "relative",
      }}
    >
      <div className="container-ef">{children}</div>
    </section>
  );
}

function Hero() {
  const { t, site } = useT();
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-surface-dark)",
        color: "var(--color-text-on-dark)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src="/images/053701002_generated_image.png"
        alt="Custom ironwork in the Ferioli Sergio workshop"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={85}
        className="object-cover"
        style={{ objectPosition: "center 50%" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(28,23,18,0.92) 0%, rgba(28,23,18,0.75) 45%, rgba(28,23,18,0.35) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,23,18,0.45) 0%, transparent 30%, transparent 60%, rgba(28,23,18,0.85) 100%)",
        }}
      />

      <div
        className="container-ef relative w-full"
        style={{ paddingTop: "calc(var(--section-padding-y) + 24px)", paddingBottom: "var(--section-padding-y)" }}
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-body-sm"
          style={{
            backgroundColor: "rgba(184, 149, 106, 0.18)",
            color: "var(--color-accent)",
            fontWeight: 500,
            border: "1px solid rgba(184, 149, 106, 0.35)",
            marginBottom: 24,
            backdropFilter: "blur(6px)",
          }}
        >
          <Award size={14} /> {t.hero.badge}
        </div>
        <h1
          className="text-hero"
          style={{
            color: "#FFFFFF",
            fontWeight: 300,
            marginBottom: 24,
            textShadow: "0 2px 24px rgba(0,0,0,0.35)",
            maxWidth: 880,
          }}
        >
          {t.hero.headlinePre}
          <br />
          <span style={{ color: "var(--color-accent)", fontStyle: "italic", fontWeight: 400 }}>
            {t.hero.headlineAccent}
          </span>
          {t.hero.headlinePost}
        </h1>
        <p
          className="text-body-lg"
          style={{
            color: "rgba(245, 240, 232, 0.88)",
            maxWidth: 560,
            marginBottom: 36,
            textShadow: "0 1px 8px rgba(0,0,0,0.4)",
          }}
        >
          {t.hero.subheadline}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contatti" className="btn btn-primary">
            {t.hero.ctaPrimary} <ArrowRight size={16} />
          </Link>
          <Link href="#lavorazioni" className="btn btn-secondary-dark">
            {t.hero.ctaSecondary}
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 mt-10 lg:mt-14">
          {t.hero.stats.map((s, i) => (
            <span
              key={i}
              className="px-4 py-2 text-body-sm"
              style={{
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(28, 23, 18, 0.55)",
                color: "var(--color-text-on-dark)",
                border: "1px solid rgba(245, 240, 232, 0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10"
        style={{ color: "rgba(245, 240, 232, 0.5)" }}
      >
        <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}>{t.hero.scroll}</span>
        <div
          style={{
            width: 1,
            height: 32,
            background: "linear-gradient(to bottom, rgba(245, 240, 232, 0.5), transparent)",
          }}
        />
      </div>
    </section>
  );
}

function ProductsSection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-bg-secondary)" id="lavorazioni">
      <ScrollReveal>
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <SectionEyebrow>{t.products.preLabel}</SectionEyebrow>
          <h2 className="heading-2">
            {t.products.headlinePre}
            <span style={{ color: "var(--color-accent)" }}>{t.products.headlineAccent}</span>
          </h2>
          <p className="lead mt-4" style={{ maxWidth: "var(--content-narrow)" }}>
            {t.products.subheadline}
          </p>
        </div>
      </ScrollReveal>
      <ScrollRevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" stagger={0.08}>
        {t.products.items.map((p) => {
          const Icon = productIcons[p.icon];
          return (
            <Link
              key={p.name}
              href={p.link}
              className="card-hover group block p-0 overflow-hidden h-full"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ backgroundColor: "var(--color-bg)" }}
              >
                <Image
                  src={productImages[p.icon]}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-slow ease-ease-out group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(28,23,18,0.5), transparent 60%)" }}
                />
                <div
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "#FFFFFF",
                    boxShadow: "0 4px 12px rgba(184, 149, 106, 0.4)",
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div style={{ padding: "var(--component-padding)" }}>
                <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
                  {Icon && (
                    <span
                      className="inline-flex items-center justify-center"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "var(--radius-md)",
                        backgroundColor: "var(--color-accent-subtle)",
                      }}
                    >
                      <Icon
                        className="text-ef-accent"
                        style={{ color: "var(--color-accent)", width: 20, height: 20 }}
                      />
                    </span>
                  )}
                  <h3 className="text-h4" style={{ fontWeight: 500 }}>
                    {p.name}
                  </h3>
                </div>
                <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
                  {p.desc}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-body-sm mt-4"
                  style={{ color: "var(--color-accent)", fontWeight: 500 }}
                >
                  {t.products.learnMore}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          );
        })}
      </ScrollRevealStagger>
      <ScrollReveal delay={0.1}>
        <div className="text-center mt-10">
          <Link href="/lavorazioni" className="btn btn-secondary">
            {t.products.viewAll} <ArrowRight size={16} />
          </Link>
        </div>
      </ScrollReveal>
    </Section>
  );
}

function IstitutoGiordanoSeal({ size = 96 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Istituto Giordano seal"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="ig-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4B384" />
          <stop offset="50%" stopColor="#B8956A" />
          <stop offset="100%" stopColor="#8E6F4E" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="url(#ig-gold)" strokeWidth="2" />
      <circle cx="60" cy="60" r="48" fill="none" stroke="url(#ig-gold)" strokeWidth="0.7" />
      <circle cx="60" cy="60" r="36" fill="none" stroke="url(#ig-gold)" strokeWidth="0.5" strokeDasharray="1 2" />
      <path
        id="ig-arc-top"
        d="M 18 60 A 42 42 0 0 1 102 60"
        fill="none"
      />
      <text fontSize="8.5" fontWeight="600" letterSpacing="2.2" fill="#B8956A">
        <textPath href="#ig-arc-top" startOffset="50%" textAnchor="middle">
          ISTITUTO GIORDANO
        </textPath>
      </text>
      <path
        id="ig-arc-bot"
        d="M 22 60 A 38 38 0 0 0 98 60"
        fill="none"
      />
      <text fontSize="6" fontWeight="500" letterSpacing="2.5" fill="#B8956A">
        <textPath href="#ig-arc-bot" startOffset="50%" textAnchor="middle">
          · CERTIFIED · 1977 ·
        </textPath>
      </text>
      <g transform="translate(60 60)">
        <polygon
          points="0,-18 4.2,-5.6 17.6,-5.6 6.7,2.1 10.9,14.5 0,6.7 -10.9,14.5 -6.7,2.1 -17.6,-5.6 -4.2,-5.6"
          fill="url(#ig-gold)"
        />
        <text
          textAnchor="middle"
          y="3.4"
          fontSize="6"
          fontWeight="700"
          letterSpacing="0.5"
          fill="#1C1712"
        >
          IG
        </text>
      </g>
    </svg>
  );
}

function CEMark({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 100 75"
      role="img"
      aria-label="CE Marking"
      style={{ display: "block" }}
    >
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontFamily="Arial Black, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="68"
        fill="#1C1712"
        style={{ letterSpacing: "-2px" }}
      >
        CE
      </text>
      <line x1="14" y1="68" x2="86" y2="68" stroke="#B8956A" strokeWidth="2.2" />
    </svg>
  );
}

function QualitySeal({ label, sub, size = 96 }: { label: string; sub: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label={`${label} seal`}
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id={`qs-${label.replace(/\s/g, "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4B384" />
          <stop offset="100%" stopColor="#8E6F4E" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="55" fill="none" stroke={`url(#qs-${label.replace(/\s/g, "")})`} strokeWidth="1.5" />
      <circle cx="60" cy="60" r="46" fill="none" stroke={`url(#qs-${label.replace(/\s/g, "")})`} strokeWidth="0.5" strokeDasharray="2 3" />
      <text
        x="60"
        y="60"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="22"
        fontWeight="700"
        fill="#1C1712"
        style={{ letterSpacing: "-0.5px" }}
      >
        {label}
      </text>
      <text
        x="60"
        y="80"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="600"
        letterSpacing="2"
        fill="#B8956A"
      >
        {sub.toUpperCase()}
      </text>
    </svg>
  );
}

function ItalianFlagChip() {
  return (
    <svg
      width="44"
      height="30"
      viewBox="0 0 44 30"
      role="img"
      aria-label="Made in Italy"
      style={{ display: "block", borderRadius: 4, overflow: "hidden" }}
    >
      <rect x="0" y="0" width="14.67" height="30" fill="#009246" />
      <rect x="14.67" y="0" width="14.67" height="30" fill="#FFFFFF" />
      <rect x="29.33" y="0" width="14.67" height="30" fill="#CE2B37" />
    </svg>
  );
}

function CertificationsStrip() {
  const { t } = useT();
  return (
    <section
      aria-labelledby="certifications-heading"
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border-subtle)",
        borderBottom: "1px solid var(--color-border-subtle)",
        paddingTop: "calc(var(--section-padding-y) * 0.85)",
        paddingBottom: "calc(var(--section-padding-y) * 0.85)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 12% 30%, rgba(184,149,106,0.10), transparent 55%), radial-gradient(ellipse at 88% 70%, rgba(184,149,106,0.08), transparent 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.4  0 0 0 0 0.32  0 0 0 0 0.22  0 0 0 0.18 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div className="container-ef relative">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <SectionEyebrow>{t.certifications.eyebrow}</SectionEyebrow>
            <h2
              id="certifications-heading"
              className="heading-2 mt-3"
              style={{ fontWeight: 500 }}
            >
              {t.certifications.headline}
            </h2>
            <div
              className="mx-auto mt-5"
              style={{
                width: 56,
                height: 2,
                background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
              }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="mb-10 lg:mb-12 mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 lg:gap-10 items-stretch"
            style={{
              maxWidth: 1080,
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border-subtle)",
              borderRadius: "var(--radius-lg)",
              padding: 20,
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div
              className="relative mx-auto md:mx-0"
              style={{
                width: "100%",
                maxWidth: 360,
                aspectRatio: "3 / 4",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                backgroundColor: "var(--color-bg)",
                boxShadow: "inset 0 0 0 1px rgba(184,149,106,0.18)",
                flexShrink: 0,
              }}
            >
              <Image
                src="/images/Carpenteria-metallica-certificata-bologna-crevalcore.jpg"
                alt={t.certifications.brochureAlt}
                fill
                sizes="(min-width: 768px) 360px, 100vw"
                className="object-contain transition-transform duration-700 hover:scale-[1.02]"
                priority
              />
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  backgroundColor: "rgba(28, 23, 18, 0.88)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  color: "var(--color-text-on-dark)",
                  padding: "5px 10px",
                  borderRadius: "var(--radius-full)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(184,149,106,0.4)",
                }}
              >
                <BadgeCheck size={11} style={{ color: "var(--color-accent)" }} />
                {t.certifications.verified}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5">
              <div>
                <p
                  className="text-[10px] uppercase"
                  style={{
                    color: "var(--color-accent)",
                    letterSpacing: "0.18em",
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  {t.certifications.eyebrow}
                </p>
                <h3
                  className="font-display"
                  style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "var(--color-text-primary)",
                    fontSize: "clamp(28px, 3.6vw, 40px)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.01em",
                    marginBottom: 10,
                  }}
                >
                  {t.certifications.certLabel}
                </h3>
                <p
                  className="text-body"
                  style={{ color: "var(--color-text-secondary)", lineHeight: 1.5 }}
                >
                  {t.certifications.certCaption}
                </p>
              </div>
              <div
                className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4"
                style={{
                  padding: "16px 12px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border-subtle)",
                }}
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <IstitutoGiordanoSeal size={64} />
                  <p
                    className="text-[8px] uppercase text-center"
                    style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em", marginTop: 2 }}
                  >
                    {t.certifications.sealCaptions[0]}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <CEMark size={56} />
                  <p
                    className="text-[8px] uppercase text-center"
                    style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em", marginTop: 2 }}
                  >
                    {t.certifications.sealCaptions[1]}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <QualitySeal label="60K" sub="Tested" size={64} />
                  <p
                    className="text-[8px] uppercase text-center"
                    style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em", marginTop: 2 }}
                  >
                    {t.certifications.sealCaptions[2]}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <QualitySeal label="1977" sub="Est." size={64} />
                  <p
                    className="text-[8px] uppercase text-center"
                    style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em", marginTop: 2 }}
                  >
                    {t.certifications.sealCaptions[3]}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <QualitySeal label="100%" sub="Italian" size={64} />
                  <p
                    className="text-[8px] uppercase text-center"
                    style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em", marginTop: 2 }}
                  >
                    {t.certifications.sealCaptions[4]}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <QualitySeal label="100%" sub="In-house" size={64} />
                  <p
                    className="text-[8px] uppercase text-center"
                    style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em", marginTop: 2 }}
                  >
                    {t.certifications.sealCaptions[5]}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <ItalianFlagChip />
                <p
                  className="text-[10px] uppercase"
                  style={{ color: "var(--color-text-muted)", letterSpacing: "0.16em", fontWeight: 500 }}
                >
                  {t.certifications.footerLine}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollRevealStagger
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          stagger={0.08}
        >
          {t.certifications.items.map((item, idx) => {
            const Icon = certificationIcons[item.icon] ?? BadgeCheck;
            return (
              <div
                key={item.title}
                className="group transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  padding: "22px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  boxShadow: "var(--shadow-sm)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 14,
                    right: 18,
                    fontSize: 38,
                    lineHeight: 1,
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "var(--color-accent)",
                    opacity: 0.18,
                    letterSpacing: "-0.02em",
                  }}
                >
                  0{idx + 1}
                </span>
                <span
                  className="inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--color-accent-subtle)",
                    color: "var(--color-accent)",
                  }}
                >
                  <Icon size={24} />
                </span>
                <div>
                  <p
                    className="text-body-lg"
                    style={{
                      color: "var(--color-text-primary)",
                      fontWeight: 600,
                      lineHeight: 1.3,
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-body-sm"
                    style={{
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.sub}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
                    opacity: 0,
                    transition: "opacity 300ms var(--ease-out)",
                  }}
                  className="group-hover:opacity-100"
                />
              </div>
            );
          })}
        </ScrollRevealStagger>

        <ScrollReveal>
          <div
            className="mt-10 lg:mt-14 grid grid-cols-2 md:grid-cols-4 overflow-hidden"
            style={{
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border-subtle)",
              backgroundColor: "var(--color-surface-dark)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            {t.certifications.stats.map((stat, i) => (
              <div
                key={i}
                className="relative text-center px-4 py-7 sm:py-9"
                style={{
                  borderRight: i < t.certifications.stats.length - 1 ? "1px solid rgba(184,149,106,0.18)" : "none",
                }}
              >
                <p
                  className="leading-none"
                  style={{
                    fontSize: "clamp(36px, 5vw, 52px)",
                    color: "var(--color-accent)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-3 text-[10px] sm:text-xs uppercase"
                  style={{
                    color: "rgba(245, 240, 232, 0.7)",
                    letterSpacing: "0.18em",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TurnkeySection() {
  const { t } = useT();
  return (
    <section
      style={{
        backgroundColor: "var(--color-surface-dark)",
        color: "var(--color-text-on-dark)",
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 10%, rgba(184,149,106,0.10), transparent 55%), radial-gradient(ellipse at 20% 95%, rgba(184,149,106,0.08), transparent 55%)",
        }}
      />
      <div className="container-ef relative">
        <ScrollReveal>
          <div
            className="text-center"
            style={{ maxWidth: 720, margin: "0 auto 64px" }}
          >
            <SectionEyebrow onDark>{t.turnkey.preLabel}</SectionEyebrow>
            <h2
              className="heading-2"
              style={{ color: "var(--color-text-on-dark)" }}
            >
              {t.turnkey.headlinePre}
              <span style={{ color: "var(--color-accent)" }}>
                {t.turnkey.headlineAccent}
              </span>
              {t.turnkey.headlinePost}
            </h2>
            <p
              className="lead mt-4"
              style={{ color: "rgba(245, 240, 232, 0.8)" }}
            >
              {t.turnkey.subheadline}
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto py-4 md:py-8">
          {/* Vertical timeline line — left-aligned on sm/mobile */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 hidden sm:block md:hidden"
            style={{
              left: 32,
              width: 2,
              backgroundColor: "rgba(245, 240, 232, 0.12)",
              borderRadius: 999,
            }}
          />
          {/* Vertical timeline line — centered on md+ */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 hidden md:block"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              width: 2,
              backgroundColor: "rgba(245, 240, 232, 0.12)",
              borderRadius: 999,
            }}
          />

          {t.turnkey.cards.map((c, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={c.title}
                className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-28 last:mb-0 gap-8 md:gap-0"
              >
                {/* Timeline dot — left-aligned on sm/mobile */}
                <span
                  aria-hidden="true"
                  className="absolute hidden sm:block md:hidden z-10"
                  style={{
                    left: 32,
                    top: 12,
                    transform: "translateX(-50%)",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent)",
                    border: "4px solid #2C2419",
                    boxShadow: "0 0 0 1px rgba(184,149,106,0.5)",
                  }}
                />
                {/* Timeline dot — centered on md+ */}
                <span
                  aria-hidden="true"
                  className="absolute hidden md:block z-10"
                  style={{
                    left: "50%",
                    top: 12,
                    transform: "translateX(-50%)",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent)",
                    border: "4px solid #2C2419",
                    boxShadow: "0 0 0 1px rgba(184,149,106,0.5)",
                  }}
                />

                {/* Text column */}
                <ScrollReveal
                  as="div"
                  className={`w-full md:w-[45%] flex flex-col pl-16 sm:pl-20 md:pl-0 ${
                    isEven
                      ? "md:items-end md:text-right md:pr-12"
                      : "md:items-start md:text-left md:pl-12 md:order-2"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontSize: 80,
                      fontWeight: 800,
                      color: "rgba(245, 240, 232, 0.06)",
                      lineHeight: 0.8,
                      marginBottom: -8,
                      fontFamily: "var(--font-display)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="heading-3"
                    style={{
                      color: "var(--color-text-on-dark)",
                      marginBottom: 12,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="text-body-lg"
                    style={{
                      color: "rgba(245, 240, 232, 0.78)",
                      lineHeight: "var(--leading-body)",
                      maxWidth: 420,
                    }}
                  >
                    {c.text}
                  </p>
                </ScrollReveal>

                {/* Image column */}
                <ScrollReveal
                  as="div"
                  className={`w-full md:w-[45%] pl-16 sm:pl-20 md:pl-0 ${
                    isEven ? "md:pl-12" : "md:pr-12 md:order-1"
                  }`}
                  delay={0.1}
                >
                  <div
                    className="relative overflow-hidden group"
                    style={{
                      borderRadius: "var(--radius-xl)",
                      aspectRatio: "4 / 3",
                      boxShadow:
                        "0 20px 50px rgba(0,0,0,0.45), 0 0 0 1px rgba(245,240,232,0.05)",
                    }}
                  >
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 45vw"
                      className="object-cover transition-transform duration-slow ease-ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top right, rgba(0,0,0,0.55), transparent 55%)",
                      }}
                    />
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

        <ScrollReveal delay={0.15}>
          <p
            className="text-body-lg text-center italic"
            style={{
              color: "var(--color-accent)",
              maxWidth: 640,
              margin: "64px auto 0",
              fontWeight: 500,
            }}
          >
            {t.turnkey.closing}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function AuthoritySection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-surface-dark)">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <ScrollReveal>
          <div>
            <SectionEyebrow>{t.authority.preLabel}</SectionEyebrow>
            <h2 className="heading-2" style={{ color: "var(--color-text-on-dark)" }}>
              {t.authority.headlinePre}
              <span style={{ color: "var(--color-accent)" }}>{t.authority.headlineAccent}</span>
              {t.authority.headlinePost}
            </h2>
            <p className="text-body-lg mt-6" style={{ color: "rgba(245, 240, 232, 0.8)" }}>
              {t.authority.body}
            </p>
            <div
              className="inline-flex items-center gap-3 px-4 py-2 mt-8 rounded-full"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                fontSize: "var(--text-body-sm)",
                fontWeight: 500,
                color: "var(--color-text-on-dark)",
              }}
            >
              <Award size={16} style={{ color: "var(--color-accent)" }} />
              {t.authority.certBadge}
            </div>
          </div>
        </ScrollReveal>
        <ScrollRevealStagger className="grid grid-cols-2 gap-3 sm:gap-4" stagger={0.1}>
          {t.authority.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl text-center transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "28px 20px",
              }}
            >
              <p
                className="text-3xl sm:text-4xl font-display"
                style={{ color: "var(--color-accent)", fontWeight: 500, marginBottom: 8 }}
              >
                {s.number}
              </p>
              <p className="text-body-sm" style={{ color: "rgba(245, 240, 232, 0.7)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-12 lg:mt-16">
          {[
            { src: "/images/wp/Banchi-lavoro-officina-cento.jpg", alt: "Banchi di lavoro in officina" },
            { src: "/images/wp/Scaffalature-industriali-bologna.jpg", alt: "Scaffalature industriali" },
            { src: "/images/wp/Prodotti-in-ferro-palata-pepoli-di-crevalcore.jpg", alt: "Prodotti in ferro su misura" },
            { src: "/images/wp/Ferioli-sergio-sas-palata-pepoli-di-crevalcore-bologna.jpg", alt: "Sede Ferioli Sergio, Bologna" },
          ].map((img) => (
            <div
              key={img.alt}
              className="relative aspect-[4/3] rounded-xl overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}

function ProcessSection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-bg)">
      <ScrollReveal>
        <div className="text-center mb-12 sm:mb-16">
          <SectionEyebrow>{t.process.preLabel}</SectionEyebrow>
          <h2 className="heading-2">
            {t.process.headlinePre}
            <span style={{ color: "var(--color-accent)" }}>{t.process.headlineAccent}</span>
            {t.process.headlinePost}
          </h2>
        </div>
      </ScrollReveal>
      <ScrollRevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" stagger={0.1}>
        {t.process.steps.map((s, i) => {
          const Icon = processIcons[s.icon] ?? CheckCircle;
          return (
            <div
              key={i}
              className="text-center group h-full flex flex-col items-center"
              style={{ position: "relative" }}
            >
              <div
                className="inline-flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "var(--color-accent-subtle)",
                }}
              >
                <Icon size={28} style={{ color: "var(--color-accent)" }} />
              </div>
              <div
                className="font-display absolute"
                style={{
                  top: -8,
                  color: "var(--color-border-subtle)",
                  fontWeight: 500,
                  lineHeight: 1,
                  fontSize: 80,
                  zIndex: -1,
                  opacity: 0.6,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="heading-3 mb-3">{s.title}</h3>
              <p className="text-body" style={{ color: "var(--color-text-secondary)", maxWidth: 320 }}>
                {s.desc}
              </p>
            </div>
          );
        })}
      </ScrollRevealStagger>
    </Section>
  );
}

function FeaturedProjectsSection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-surface)">
      <ScrollReveal>
        <div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16"
        >
          <div>
            <SectionEyebrow>{t.featuredProjects.preLabel}</SectionEyebrow>
            <h2 className="heading-2">
              {t.featuredProjects.headlinePre}
              <span style={{ color: "var(--color-accent)" }}>{t.featuredProjects.headlineAccent}</span>
              {t.featuredProjects.headlinePost}
            </h2>
          </div>
          <Link
            href="/realizzazioni"
            className="hidden sm:inline-flex btn btn-secondary"
          >
            {t.featuredProjects.viewAll} <ArrowRight size={16} />
          </Link>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-[228px]">
        {t.featuredProjects.projects.map((p, idx) => (
          <Link
            key={p.name}
            href={p.link}
            className={`group block relative rounded-xl overflow-hidden ${
              idx === 0 ? "sm:row-span-2 sm:h-full" : ""
            }`}
            style={{
              backgroundColor: "var(--color-bg-secondary)",
              height: idx === 0 ? 480 : 228,
            }}
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
              style={{ background: "linear-gradient(to top, rgba(28,23,18,0.85) 0%, rgba(28,23,18,0.15) 50%, transparent)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5" style={{ color: "#FFFFFF" }}>
              <p className="text-lg font-semibold leading-tight">{p.name}</p>
              <p className="text-sm mt-0.5" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {p.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <ScrollReveal delay={0.1}>
        <div className="sm:hidden text-center mt-8">
          <Link href="/realizzazioni" className="btn btn-secondary">
            {t.featuredProjects.viewAll} <ArrowRight size={16} />
          </Link>
        </div>
      </ScrollReveal>
    </Section>
  );
}

function DeductionBannerSection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-bg-secondary)">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
        <ScrollReveal>
          <div>
            <SectionEyebrow>{t.deductionBanner.eyebrow}</SectionEyebrow>
            <h2 className="heading-2">
              {t.deductionBanner.headlinePre}
              <span style={{ color: "var(--color-accent)" }}>{t.deductionBanner.headlineAccent}</span>
              {t.deductionBanner.headlinePost}
            </h2>
            <p className="text-body-lg mt-5" style={{ color: "var(--color-text-secondary)" }}>
              {t.deductionBanner.body}
            </p>
            <Link href="/detrazioni" className="btn btn-primary mt-6 group">
              {t.deductionBanner.cta}
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <ScrollReveal className="sm:col-span-2 sm:row-span-2">
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/3", backgroundColor: "var(--color-surface)" }}
            >
              <Image
                src="/images/wp/Bonus-sicurezza-bologna-centro.jpg"
                alt="Bonus sicurezza — detrazioni fiscali per grate e inferriate"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(28,23,18,0.05), rgba(28,23,18,0.45))" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5" style={{ color: "#FFFFFF" }}>
                <p
                  className="text-[10px] uppercase"
                  style={{ letterSpacing: "0.18em", opacity: 0.85, marginBottom: 4 }}
                >
                  2026
                </p>
                <p style={{ fontWeight: 600, fontSize: 18, lineHeight: 1.2 }}>
                  Detrazioni fiscali
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollRevealStagger className="contents" stagger={0.1}>
            {t.deductionBanner.badges.map((b) => (
              <div
                key={b}
                className="rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border-subtle)",
                  padding: "24px 16px",
                }}
              >
                <p
                  className="font-display text-xl"
                  style={{ color: "var(--color-accent)", fontWeight: 500 }}
                >
                  {b.split(" ")[0]}
                </p>
                <p
                  className="text-body-sm"
                  style={{ color: "var(--color-text-secondary)", marginTop: 4 }}
                >
                  {b.split(" ").slice(1).join(" ")}
                </p>
              </div>
            ))}
          </ScrollRevealStagger>
        </div>
      </div>
    </Section>
  );
}

function TestimonialsSection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-bg)">
      <ScrollReveal>
        <div className="text-center mb-12 sm:mb-16">
          <SectionEyebrow>{t.testimonials.preLabel}</SectionEyebrow>
          <h2 className="heading-2">
            {t.testimonials.headlinePre}
            <span style={{ color: "var(--color-accent)" }}>{t.testimonials.headlineAccent}</span>
            {t.testimonials.headlinePost}
          </h2>
        </div>
      </ScrollReveal>
      <ScrollRevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch" stagger={0.12}>
        {t.testimonials.items.map((tm, i) => (
          <div
            key={i}
            className="card relative transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full flex flex-col"
          >
            <Quote
              className="absolute"
              style={{ top: 24, right: 24, width: 32, height: 32, color: "var(--color-accent-subtle)" }}
            />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: tm.rating }).map((_, k) => (
                <Star key={k} size={16} style={{ fill: "var(--color-accent)", color: "var(--color-accent)" }} />
              ))}
            </div>
            <p className="text-body mb-6" style={{ color: "var(--color-text-primary)" }}>
              &ldquo;{tm.quote}&rdquo;
            </p>
            <div
              className="pt-4"
              style={{ borderTop: "1px solid var(--color-border-subtle)" }}
            >
              <p style={{ fontWeight: 500, color: "var(--color-text-primary)" }}>{tm.name}</p>
              <p className="text-body-sm" style={{ color: "var(--color-text-muted)" }}>
                {tm.location}
              </p>
            </div>
          </div>
        ))}
      </ScrollRevealStagger>
    </Section>
  );
}

function WorkWithUsSection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-surface)">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <SectionEyebrow>{t.workWithUs.preLabel}</SectionEyebrow>
          <h2 className="heading-2 mt-3">
            {t.workWithUs.headlinePre}
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
              {t.workWithUs.headlineAccent}
            </span>
            {t.workWithUs.headlinePost}
          </h2>
          <p
            className="lead mt-4"
            style={{ color: "var(--color-text-secondary)", maxWidth: 520 }}
          >
            {t.workWithUs.subheadline}
          </p>
          <Link
            href={t.workWithUs.ctaHref}
            className="btn btn-primary mt-6 group"
          >
            {t.workWithUs.cta}
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div
          className="rounded-2xl p-8 sm:p-10"
          style={{
            backgroundColor: "var(--color-surface-dark)",
            color: "var(--color-text-on-dark)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background: "radial-gradient(circle at 80% 20%, rgba(184, 149, 106, 0.3), transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div className="relative flex items-start gap-4">
            <div
              className="shrink-0 inline-flex items-center justify-center"
              style={{
                width: 56,
                height: 56,
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--color-accent-subtle)",
              }}
            >
              <Sparkles size={26} style={{ color: "var(--color-accent)" }} />
            </div>
            <div>
              <p
                className="text-body-sm"
                style={{
                  color: "var(--color-accent)",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Installers · Resellers · Architects
              </p>
              <p
                className="text-body-lg"
                style={{ color: "rgba(245, 240, 232, 0.85)" }}
              >
                We&apos;re always looking for qualified partners. Join our network and grow with the Ferioli brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FaqSection() {
  const { t } = useT();
  const [open, setOpen] = useState(0);
  return (
    <Section bg="var(--color-bg-secondary)">
      <ScrollReveal>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-2">{t.faq.title}</h2>
        </div>
      </ScrollReveal>
      <div
        className="max-w-3xl mx-auto"
      >
        {t.faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="rounded-xl overflow-hidden mb-3 transition-all duration-300"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6"
                style={{ color: "var(--color-text-primary)" }}
              >
                <span className="text-lg font-medium pr-4">{item.q}</span>
                <ChevronDown
                  size={20}
                  className="transition-transform duration-300 shrink-0"
                  style={{
                    color: "var(--color-accent)",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div
                style={{
                  maxHeight: isOpen ? 400 : 0,
                  opacity: isOpen ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 400ms ease, opacity 300ms ease",
                }}
              >
                <p
                  className="text-body px-5 sm:px-6 pb-5 sm:pb-6"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function CtaSection() {
  const { t, site } = useT();
  return (
    <Section bg="var(--color-bg)">
      <ScrollReveal>
        <div
          className="rounded-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border-subtle)",
            maxWidth: 960,
            margin: "0 auto",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div
            className="absolute -top-32 -right-32 w-64 h-64 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(184, 149, 106, 0.15), transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(184, 149, 106, 0.12), transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />
          <div className="relative">
            <SectionEyebrow>{t.cta.preLabel}</SectionEyebrow>
            <h2 className="heading-2 mt-3">
              {t.cta.headlinePre}
              <span style={{ color: "var(--color-accent)", fontStyle: "italic", fontWeight: 300 }}>
                {t.cta.headlineAccent}
              </span>
            </h2>
            <p className="lead mt-4" style={{ maxWidth: 560, margin: "16px auto 0" }}>
              {t.cta.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <Link href="/contatti" className="btn btn-primary w-full sm:w-auto group">
                {t.cta.btnForm}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full sm:w-auto"
              >
                {t.cta.btnWhatsapp}
              </a>
            </div>
            <div
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-body-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              {t.cta.reassurance.map((r) => (
                <span key={r} className="inline-flex items-center gap-1.5">
                  <CheckCircle size={14} style={{ color: "var(--color-accent)" }} /> {r}
                </span>
              ))}
            </div>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-6 inline-flex items-center gap-2 text-base font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              <Phone size={16} style={{ color: "var(--color-accent)" }} /> {site.phone}
            </a>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TurnkeySection />
      <ProductsSection />
      <AuthoritySection />
      <ProcessSection />
      <FeaturedProjectsSection />
      <DeductionBannerSection />
      <WorkWithUsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
