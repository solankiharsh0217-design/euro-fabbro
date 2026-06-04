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
  const image = images.length > 0 ? images[idx % images.length] : null;
  const hasImage = image != null;
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
          {hasImage && image && (
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden order-first lg:order-last">
              <Image
                src={image.local}
                alt={image.src.split("/").pop() || ""}
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
  const spareImages = galleryImages.slice(sections.length);
  return (
    <>
      <SubpageHero
        preLabel={preLabel}
        headlinePre={titlePre}
        headlineAccent={titleAccent}
        subheadline={sections[0]?.blocks[0]?.type === "p" ? (sections[0].blocks[0] as { type: "p"; text: string }).text : ""}
        cta={t.cta.headlineAccent}
        {...(heroImage && {
          heroImage: heroImage.local,
          heroImageAlt: page.title,
          heroImagePosition: "center 45%",
        })}
      />
      {sections.map((s, idx) =>
        renderSection(s, idx, galleryImages, idx % 2 === 0 ? "bg" : "bg-secondary")
      )}
      {spareImages.length > 0 && (
        <section style={{ backgroundColor: "var(--color-surface)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
          <div className="container-ef">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="label-eyebrow">Realizzazioni</span>
              <h2 className="heading-2 mt-3">
                Altre <span style={{ color: "var(--color-accent)" }}>lavorazioni</span> su misura
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {spareImages.slice(0, 8).map((img) => (
                <div
                  key={img.local}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden"
                  style={{ backgroundColor: "var(--color-bg)" }}
                >
                  <Image
                    src={img.local}
                    alt={page.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-slow ease-ease-out hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
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
