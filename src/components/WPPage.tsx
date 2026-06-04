"use client";
import Image from "next/image";
import Link from "next/link";
import { useT } from "./LanguageProvider";
import { SubpageHero } from "./Subpage";
import { ContactCta } from "./ContactCta";
import { CheckCircle, ArrowRight, ChevronRight, Award, Phone, MessageCircle, Mail, MapPin, Clock, Shield } from "lucide-react";
import { getWpPage } from "@/lib/wp-content";
import type { WpPage, WpBlock, WpSection } from "@/lib/wp-content";

type Props = {
  slug: string;
  preLabel: string;
  heroAccent?: string;
  ctaLabel?: string;
  related?: { href: string; label: string }[];
};

function renderBlock(b: WpBlock, key: number) {
  if (b.type === "p") {
    return (
      <p key={key} className="text-body" style={{ color: "var(--color-text-secondary)" }}>
        {b.text}
      </p>
    );
  }
  if (b.type === "ul") {
    return (
      <ul key={key} className="space-y-2.5">
        {b.items.map((it, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle
              size={18}
              style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 3 }}
            />
            <span className="text-body" style={{ color: "var(--color-text-secondary)" }}>
              {it}
            </span>
          </li>
        ))}
      </ul>
    );
  }
  if (b.type === "img") {
    return null;
  }
  return null;
}

function renderSection(
  s: WpSection,
  idx: number,
  images: { src: string; local: string }[],
  bg: "bg" | "bg-secondary"
) {
  const headingId = `wp-section-${idx}`;
  const HeadingTag = (s.level === 1 ? "h2" : s.level === 2 ? "h2" : "h3") as "h2" | "h3";
  const headingClass = s.level === 3 ? "heading-3" : "heading-2";
  const hasImage = idx < images.length;
  const sectionBg = bg === "bg" ? "var(--color-bg)" : "var(--color-bg-secondary)";
  return (
    <section
      key={idx}
      style={{
        backgroundColor: sectionBg,
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
      }}
    >
      <div className="container-ef">
        <div className={hasImage ? "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center" : ""}>
          <div className={hasImage ? "" : "max-w-3xl"}>
            {HeadingTag === "h2" ? (
              <h2 id={headingId} className={`${headingClass} mt-1`} style={{ fontWeight: 500 }}>
                {s.heading}
              </h2>
            ) : (
              <h3 id={headingId} className={headingClass} style={{ fontWeight: 500 }}>
                {s.heading}
              </h3>
            )}
            <div className="mt-5 space-y-4">
              {s.blocks.map((b, i) => renderBlock(b, i))}
            </div>
          </div>
          {hasImage && (
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden order-first lg:order-last">
              <Image
                src={images[idx].local}
                alt={images[idx].src.split("/").pop() || ""}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function WPPage({ slug, preLabel, heroAccent, related }: Props) {
  const { t, site } = useT();
  const page = getWpPage(slug);
  if (!page) {
    return (
      <div className="container-ef py-32 text-center">
        <h1 className="heading-2">Pagina non disponibile</h1>
        <p className="text-body mt-3">Contenuto non trovato per: {slug}</p>
      </div>
    );
  }
  const titleWords = page.title.split(" ");
  const titlePre = titleWords.slice(0, Math.max(1, titleWords.length - 1)).join(" ");
  const titleAccent = heroAccent ?? titleWords[titleWords.length - 1];
  const heroImage = page.pageImages.find((i) => i.local) ?? null;
  const sections = page.sections;
  const galleryImages = page.pageImages.filter((i) => i.local);
  const showCertStrip = page.slug === "manutenzione" || page.slug === "cancelli";
  return (
    <>
      <SubpageHero
        preLabel={preLabel}
        headlinePre={titlePre}
        headlineAccent={titleAccent}
        subheadline={sections[0]?.blocks[0]?.type === "p" ? (sections[0].blocks[0] as { type: "p"; text: string }).text : ""}
        cta={t.cta.headlineAccent}
      />
      {heroImage && (
        <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "calc(var(--section-padding-y) / 2)" }}>
          <div className="container-ef">
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden">
              <Image
                src={heroImage.local}
                alt={page.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}
      {sections.map((s, idx) =>
        renderSection(s, idx, galleryImages, idx % 2 === 0 ? "bg" : "bg-secondary")
      )}
      {related && related.length > 0 && (
        <section style={{ backgroundColor: "var(--color-bg-secondary)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
          <div className="container-ef">
            <h2 className="heading-2 mb-6" style={{ fontWeight: 500 }}>
              Approfondimenti
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="card flex items-center justify-between gap-3 group"
                >
                  <span className="text-body-lg" style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>
                    {r.label}
                  </span>
                  <ChevronRight
                    size={18}
                    style={{ color: "var(--color-accent)", flexShrink: 0 }}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <ContactCta
        title={
          <>
            {t.cta.headlinePre}
            <span style={{ color: "var(--color-accent)" }}>{t.cta.headlineAccent}</span>
          </>
        }
        subtitle={t.cta.subheadline}
      />
    </>
  );
}
