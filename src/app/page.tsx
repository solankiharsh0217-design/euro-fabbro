"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
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
} from "lucide-react";
import { useT } from "@/components/LanguageProvider";

const productIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  DoorOpen: require("lucide-react").DoorOpen,
  Grid3x3: require("lucide-react").Grid3x3,
  Fence: require("lucide-react").Fence,
  TrendingUp: require("lucide-react").TrendingUp,
  Car: require("lucide-react").Car,
  Settings: require("lucide-react").Settings,
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
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
      }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(https://media.base44.com/images/public/69baf22d9cc002736b6b7248/cfd8c4396_generated_image.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(28, 23, 18, 0.7), rgba(28, 23, 18, 0.95))",
        }}
      />
      <div className="container-ef">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-body-sm"
            style={{
              backgroundColor: "rgba(184, 149, 106, 0.15)",
              color: "var(--color-accent)",
              fontWeight: 500,
              marginBottom: 24,
            }}
          >
            <Award size={14} /> {t.hero.badge}
          </div>
          <h1
            className="text-hero"
            style={{
              color: "#FFFFFF",
              fontWeight: 300,
              marginBottom: 20,
            }}
          >
            {t.hero.headlineLine1}
            <br />
            {t.hero.headlineLine2Pre}
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>{t.hero.headlineLine2Accent}</span>
            {t.hero.headlineLine2Post}
          </h1>
          <p
            className="text-body-lg"
            style={{ color: "rgba(245, 240, 232, 0.82)", maxWidth: 480, marginBottom: 36 }}
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
          <div className="flex flex-wrap gap-3 mt-10">
            {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map((s, i) => (
              <span
                key={i}
                className="px-4 py-2 text-body-sm"
                style={{
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(28, 23, 18, 0.5)",
                  color: "var(--color-text-on-dark)",
                  backdropFilter: "blur(4px)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-bg-secondary)" id="lavorazioni">
      <div className="mb-12 sm:mb-14">
        <span className="label-eyebrow">{t.products.preLabel}</span>
        <h2 className="heading-2">
          {t.products.headlinePre}
          <span style={{ color: "var(--color-accent)" }}>{t.products.headlineAccent}</span>
        </h2>
        <p className="lead mt-3" style={{ maxWidth: "var(--content-narrow)" }}>
          {t.products.subheadline}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.products.items.map((p) => {
          const Icon = productIcons[p.icon];
          return (
            <Link
              key={p.name}
              href={p.link}
              className="card-hover block p-0 overflow-hidden h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: "var(--color-bg)" }}>
                <Image
                  src={p.icon === "DoorOpen" ? "https://eurofabbro.com/wp-content/uploads/slider2/1.jpeg" :
                        p.icon === "Grid3x3" ? "https://eurofabbro.com/wp-content/uploads/2023/04/Realizzazione-grate-in-ferro-bologna-480x360-1.jpg" :
                        p.icon === "Fence" ? "https://eurofabbro.com/wp-content/uploads/2023/04/Cancelli-in-ferro-cento-1-300x225.jpg" :
                        p.icon === "TrendingUp" ? "https://eurofabbro.com/wp-content/uploads/2023/04/Realizzazione-strutture-in-ferro-cento-480x360-1.jpg" :
                        p.icon === "Car" ? "https://media.base44.com/images/public/69baf22d9cc002736b6b7248/28f664fa9_generated_image.png" :
                        "https://media.base44.com/images/public/69baf22d9cc002736b6b7248/ff67b59d2_generated_image.png"}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-slow ease-ease-out hover:scale-105"
                />
              </div>
              <div style={{ padding: "var(--component-padding)" }}>
                <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
                  {Icon && (
                    <span
                      className="inline-flex items-center justify-center"
                      style={{
                        width: 40, height: 40, borderRadius: "var(--radius-md)",
                        backgroundColor: "var(--color-accent-subtle)",
                      }}
                    >
                      <Icon className="text-ef-accent" style={{ color: "var(--color-accent)", width: 20, height: 20 }} />
                    </span>
                  )}
                  <h3 className="text-h4" style={{ fontWeight: 500 }}>{p.name}</h3>
                </div>
                <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>{p.desc}</p>
                <span
                  className="inline-flex items-center gap-1.5 text-body-sm mt-4"
                  style={{ color: "var(--color-accent)", fontWeight: 500 }}
                >
                  {t.products.learnMore} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="text-center mt-10">
        <Link href="/lavorazioni" className="btn btn-secondary">
          {t.products.viewAll} <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}

function TurnkeySection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-bg)">
      <div className="text-center mb-12 sm:mb-16" style={{ maxWidth: 720, margin: "0 auto 64px" }}>
        <span className="label-eyebrow">{t.turnkey.preLabel}</span>
        <h2 className="heading-2">
          {t.turnkey.headlinePre}
          <span style={{ color: "var(--color-accent)" }}>{t.turnkey.headlineAccent}</span>
          {t.turnkey.headlinePost}
        </h2>
        <p className="lead mt-3">{t.turnkey.subheadline}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.turnkey.cards.map((c) => (
          <div key={c.title} className="card-hover p-0 overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: "var(--color-bg-secondary)" }}>
              <Image src={c.image} alt={c.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <div style={{ padding: "var(--component-padding)" }}>
              <h3 className="heading-3 mb-3">{c.title}</h3>
              <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>{c.text}</p>
            </div>
          </div>
        ))}
      </div>
      <p
        className="text-body-lg text-center mt-12 italic"
        style={{ color: "var(--color-text-secondary)", maxWidth: 640, margin: "48px auto 0" }}
      >
        {t.turnkey.closing}
      </p>
    </Section>
  );
}

function AuthoritySection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-surface-dark)">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <span className="label-eyebrow">{t.authority.preLabel}</span>
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
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {t.authority.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl text-center"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "24px 20px",
              }}
            >
              <p className="text-3xl sm:text-4xl font-display" style={{ color: "var(--color-accent)", fontWeight: 500, marginBottom: 8 }}>
                {s.number}
              </p>
              <p className="text-body-sm" style={{ color: "rgba(245, 240, 232, 0.7)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProcessSection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-bg)">
      <div className="text-center mb-12 sm:mb-16">
        <span className="label-eyebrow">{t.process.preLabel}</span>
        <h2 className="heading-2">
          {t.process.headlinePre}
          <span style={{ color: "var(--color-accent)" }}>{t.process.headlineAccent}</span>
          {t.process.headlinePost}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {t.process.steps.map((s, i) => {
          const Icon = processIcons[s.icon] ?? CheckCircle;
          return (
            <div key={i} className="card">
              <div
                className="inline-flex items-center justify-center mb-5"
                style={{
                  width: 56, height: 56, borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-accent-subtle)",
                }}
              >
                <Icon size={28} style={{ color: "var(--color-accent)" }} />
              </div>
              <h3 className="heading-3 mb-2">{s.title}</h3>
              <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>{s.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function FeaturedProjectsSection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-surface)">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
        <div>
          <span className="label-eyebrow">{t.featuredProjects.preLabel}</span>
          <h2 className="heading-2">
            {t.featuredProjects.headlinePre}
            <span style={{ color: "var(--color-accent)" }}>{t.featuredProjects.headlineAccent}</span>
            {t.featuredProjects.headlinePost}
          </h2>
        </div>
        <Link href="/realizzazioni" className="hidden sm:inline-flex btn btn-secondary">
          {t.featuredProjects.viewAll} <ArrowRight size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
              className="object-cover transition-transform duration-slow ease-ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(28,23,18,0.85), rgba(28,23,18,0.1) 50%, transparent)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5" style={{ color: "#FFFFFF" }}>
              <p className="text-lg font-semibold leading-tight">{p.name}</p>
              <p className="text-sm mt-0.5" style={{ color: "rgba(255, 255, 255, 0.8)" }}>{p.location}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="sm:hidden text-center mt-8">
        <Link href="/realizzazioni" className="btn btn-secondary">
          {t.featuredProjects.viewAll} <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}

function DeductionBannerSection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-bg-secondary)">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h2 className="heading-2">
            {t.deductionBanner.headlinePre}
            <span style={{ color: "var(--color-accent)" }}>{t.deductionBanner.headlineAccent}</span>
            {t.deductionBanner.headlinePost}
          </h2>
          <p className="text-body-lg mt-5" style={{ color: "var(--color-text-secondary)" }}>
            {t.deductionBanner.body}
          </p>
          <Link href="/detrazioni" className="btn btn-primary mt-6">
            {t.deductionBanner.cta} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {t.deductionBanner.badges.map((b) => (
            <div
              key={b}
              className="rounded-xl text-center"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border-subtle)",
                padding: "24px 16px",
              }}
            >
              <p className="font-display text-xl" style={{ color: "var(--color-accent)", fontWeight: 500 }}>
                {b.split(" ")[0]}
              </p>
              <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", marginTop: 4 }}>
                {b.split(" ").slice(1).join(" ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function TestimonialsSection() {
  const { t } = useT();
  return (
    <Section bg="var(--color-bg)">
      <div className="text-center mb-12 sm:mb-16">
        <span className="label-eyebrow">{t.testimonials.preLabel}</span>
        <h2 className="heading-2">
          {t.testimonials.headlinePre}
          <span style={{ color: "var(--color-accent)" }}>{t.testimonials.headlineAccent}</span>
          {t.testimonials.headlinePost}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {t.testimonials.items.map((tm, i) => (
          <div key={i} className="card relative">
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
            <div>
              <p style={{ fontWeight: 500, color: "var(--color-text-primary)" }}>{tm.name}</p>
              <p className="text-body-sm" style={{ color: "var(--color-text-muted)" }}>{tm.location}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CtaSection() {
  const { t, site } = useT();
  return (
    <Section bg="var(--color-bg)">
      <div
        className="rounded-2xl p-8 sm:p-12 lg:p-16 text-center"
        style={{
          backgroundColor: "var(--color-surface)",
          border: "1px solid var(--color-border-subtle)",
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        <span className="label-eyebrow">{t.cta.preLabel}</span>
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
          <Link href="/contatti" className="btn btn-primary w-full sm:w-auto">
            {t.cta.btnForm} <ArrowRight size={16} />
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
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-body-sm" style={{ color: "var(--color-text-muted)" }}>
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
