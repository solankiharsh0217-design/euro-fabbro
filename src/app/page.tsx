"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
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
import { useT } from "@/components/LanguageProvider";
import { ScrollReveal, ScrollRevealStagger } from "@/components/ScrollReveal";

const productIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  DoorOpen,
  Grid3x3,
  Fence,
  TrendingUp,
  Car,
  Settings,
};

const productImages: Record<string, string> = {
  DoorOpen: "https://eurofabbro.com/wp-content/uploads/slider2/1.jpeg",
  Grid3x3: "https://eurofabbro.com/wp-content/uploads/2023/04/Realizzazione-grate-in-ferro-bologna-480x360-1.jpg",
  Fence: "https://eurofabbro.com/wp-content/uploads/2023/04/Cancelli-in-ferro-cento-1-300x225.jpg",
  TrendingUp: "https://eurofabbro.com/wp-content/uploads/2023/04/Realizzazione-strutture-in-ferro-cento-480x360-1.jpg",
  Car: "https://media.base44.com/images/public/69baf22d9cc002736b6b7248/28f664fa9_generated_image.png",
  Settings: "https://media.base44.com/images/public/69baf22d9cc002736b6b7248/ff67b59d2_generated_image.png",
};

const processIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  Ruler,
  CheckCircle,
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

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 mb-4"
      style={{
        padding: "6px 14px",
        borderRadius: 999,
        backgroundColor: "var(--color-accent-subtle)",
        color: "var(--color-accent)",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
      }}
    >
      <Sparkles size={12} />
      {children}
    </div>
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
        minHeight: "min(820px, 95vh)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src="/images/hero-welding.jpg"
        alt="Artisan welder crafting custom ironwork in the Ferioli Sergio workshop"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={85}
        className="object-cover"
        style={{ objectPosition: "center 30%" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(28,23,18,0.95) 0%, rgba(28,23,18,0.82) 40%, rgba(62,40,18,0.55) 70%, rgba(184,149,106,0.20) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,23,18,0.35) 0%, transparent 25%, transparent 65%, rgba(28,23,18,0.85) 100%)",
        }}
      />

      {/* Decorative corner mark */}
      <div
        className="hidden md:block absolute top-1/2 -translate-y-1/2 right-12 z-10"
        style={{ writingMode: "vertical-rl", color: "var(--color-accent)", fontSize: 11, letterSpacing: "0.4em", fontWeight: 500, textTransform: "uppercase", opacity: 0.6 }}
      >
        Ferioli Sergio · Bologna · 1977
      </div>

      <div
        className="container-ef relative w-full"
        style={{ paddingTop: "calc(var(--section-padding-y) + 24px)", paddingBottom: "var(--section-padding-y)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
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
              }}
            >
              {t.hero.headlineLine1}
              <br />
              {t.hero.headlineLine2Pre}
              <span style={{ color: "var(--color-accent)", fontStyle: "italic", fontWeight: 400 }}>
                {t.hero.headlineLine2Accent}
              </span>
              {t.hero.headlineLine2Post}
            </h1>
            <p
              className="text-body-lg"
              style={{
                color: "rgba(245, 240, 232, 0.88)",
                maxWidth: 520,
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
          </div>
          <div className="lg:col-span-4">
            <div
              className="rounded-2xl p-5 sm:p-6"
              style={{
                backgroundColor: "rgba(245, 240, 232, 0.08)",
                border: "1px solid rgba(245, 240, 232, 0.18)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
              }}
            >
              <p
                className="text-body-sm"
                style={{
                  color: "var(--color-accent)",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Ferioli Sergio · since 1977
              </p>
              <p className="text-body" style={{ color: "rgba(245, 240, 232, 0.9)" }}>
                Every gate, bar and fence is handcrafted in our workshop near Bologna and installed by our own team — from the first spark to the final bolt.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-10 lg:mt-14">
          {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map((s, i) => (
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
        <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
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

function TurnkeySection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-bg)">
      <ScrollReveal>
        <div className="text-center mb-12 sm:mb-16" style={{ maxWidth: 720, margin: "0 auto 64px" }}>
          <SectionEyebrow>{t.turnkey.preLabel}</SectionEyebrow>
          <h2 className="heading-2">
            {t.turnkey.headlinePre}
            <span style={{ color: "var(--color-accent)" }}>{t.turnkey.headlineAccent}</span>
            {t.turnkey.headlinePost}
          </h2>
          <p className="lead mt-4">{t.turnkey.subheadline}</p>
        </div>
      </ScrollReveal>
      <ScrollRevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
        {t.turnkey.cards.map((c, idx) => (
          <div key={c.title} className="card-hover p-0 overflow-hidden group">
            <div
              className="relative aspect-[4/3] overflow-hidden"
              style={{ backgroundColor: "var(--color-bg-secondary)" }}
            >
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-slow ease-ease-out group-hover:scale-105"
              />
              <div
                className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-display"
                style={{
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-accent)",
                  fontSize: 18,
                  fontWeight: 600,
                  boxShadow: "0 4px 12px rgba(28, 23, 18, 0.15)",
                }}
              >
                {idx + 1}
              </div>
            </div>
            <div style={{ padding: "var(--component-padding)" }}>
              <h3 className="heading-3 mb-3">{c.title}</h3>
              <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
                {c.text}
              </p>
            </div>
          </div>
        ))}
      </ScrollRevealStagger>
      <ScrollReveal delay={0.15}>
        <p
          className="text-body-lg text-center mt-12 italic"
          style={{ color: "var(--color-text-secondary)", maxWidth: 640, margin: "48px auto 0" }}
        >
          {t.turnkey.closing}
        </p>
      </ScrollReveal>
    </Section>
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
      <ScrollRevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6" stagger={0.12}>
        {t.process.steps.map((s, i) => {
          const Icon = processIcons[s.icon] ?? CheckCircle;
          return (
            <div
              key={i}
              className="card group transition-all duration-300 hover:shadow-md"
              style={{ position: "relative" }}
            >
              <div
                className="inline-flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-accent-subtle)",
                }}
              >
                <Icon size={28} style={{ color: "var(--color-accent)" }} />
              </div>
              <div
                className="absolute top-5 right-5 font-display text-5xl"
                style={{ color: "var(--color-border-subtle)", fontWeight: 500, lineHeight: 1 }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="heading-3 mb-2">{s.title}</h3>
              <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
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
      <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" stagger={0.08}>
        {t.featuredProjects.projects.map((p) => (
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
              className="object-cover transition-transform duration-slow ease-ease-out group-hover:scale-110"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(28,23,18,0.92), rgba(28,23,18,0.15) 55%, transparent)" }}
            />
            <div
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "#FFFFFF",
              }}
            >
              <ArrowUpRight size={16} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5" style={{ color: "#FFFFFF" }}>
              <p className="text-lg font-semibold leading-tight">{p.name}</p>
              <p className="text-sm mt-0.5" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {p.location}
              </p>
            </div>
          </Link>
        ))}
      </ScrollRevealStagger>
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <ScrollReveal>
          <div>
            <SectionEyebrow>2026 Bonus</SectionEyebrow>
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
        <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4" stagger={0.1}>
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
      <ScrollRevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" stagger={0.12}>
        {t.testimonials.items.map((tm, i) => (
          <div
            key={i}
            className="card relative transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
      <ProductsSection />
      <TurnkeySection />
      <AuthoritySection />
      <ProcessSection />
      <FeaturedProjectsSection />
      <DeductionBannerSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
