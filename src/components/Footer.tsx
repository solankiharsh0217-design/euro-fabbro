"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { useT } from "./LanguageProvider";

export default function Footer() {
  const { t, site } = useT();
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        backgroundColor: "var(--color-surface-dark)",
        color: "var(--color-text-on-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(184, 149, 106, 0.12), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div className="container-ef relative" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div
          className="rounded-2xl p-8 sm:p-10 mb-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(184, 149, 106, 0.16) 0%, rgba(184, 149, 106, 0.05) 100%)",
            border: "1px solid rgba(184, 149, 106, 0.25)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <p
              className="text-body-sm"
              style={{
                color: "var(--color-accent)",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              {t.cta.preLabel}
            </p>
            <h3 className="text-h3" style={{ color: "var(--color-text-on-dark)", fontWeight: 400 }}>
              {t.cta.headlinePre}
              <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>{t.cta.headlineAccent}</span>
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contatti" className="btn btn-primary">
              {t.cta.btnForm} <ArrowUpRight size={16} />
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary-dark"
            >
              <MessageCircle size={16} /> {t.cta.btnWhatsapp}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center mb-5">
              <Image
                src={site.logo}
                alt={`${site.name} logo`}
                width={160}
                height={80}
                className="w-[140px] md:w-[160px] h-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-body-sm" style={{ color: "rgba(245, 240, 232, 0.7)", lineHeight: 1.7, marginBottom: 24, maxWidth: 320 }}>
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                aria-label={t.footer.socialAria.facebook}
              >
                <Facebook size={16} />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                aria-label={t.footer.socialAria.instagram}
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4
              className="text-body-sm"
              style={{
                fontWeight: 600,
                color: "var(--color-text-on-dark)",
                marginBottom: 20,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {t.nav.label.lavorazioni}
            </h4>
            <ul className="space-y-2.5">
              {t.nav.services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-body-sm inline-flex items-center gap-1 group"
                    style={{ color: "rgba(245, 240, 232, 0.7)", textDecoration: "none" }}
                  >
                    {t.nav.label[s.key as keyof typeof t.nav.label]}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                      style={{ color: "var(--color-accent)" }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4
              className="text-body-sm"
              style={{
                fontWeight: 600,
                color: "var(--color-text-on-dark)",
                marginBottom: 20,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {t.footer.colContatti}
            </h4>
            <ul className="space-y-3 text-body-sm" style={{ color: "rgba(245, 240, 232, 0.7)" }}>
              <li>
                <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2 transition-colors duration-200 hover:text-ef-accent">
                  <Phone size={14} style={{ color: "var(--color-accent)" }} /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors duration-200 hover:text-ef-accent">
                  <MessageCircle size={14} style={{ color: "var(--color-accent)" }} /> {site.mobile}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors duration-200 hover:text-ef-accent">
                  <Mail size={14} style={{ color: "var(--color-accent)" }} /> {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} style={{ marginTop: 2, flexShrink: 0, color: "var(--color-accent)" }} />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4
              className="text-body-sm"
              style={{
                fontWeight: 600,
                color: "var(--color-text-on-dark)",
                marginBottom: 20,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {t.footer.colCertificazioni}
            </h4>
            <div
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full"
              style={{
                backgroundColor: "var(--color-accent-subtle)",
                color: "var(--color-accent)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              CE Marked
            </div>
            <p className="text-body-sm" style={{ color: "rgba(245, 240, 232, 0.7)", marginTop: 8, lineHeight: 1.6 }}>
              {t.footer.compassText}
            </p>
          </div>
        </div>

        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(245, 240, 232, 0.1)" }}
        >
          <p className="text-body-sm" style={{ color: "rgba(245, 240, 232, 0.5)" }}>
            © {year} Ferioli Sergio SRL · {t.footer.piva}
          </p>
          <div
            className="flex items-center gap-5 text-body-sm"
            style={{ color: "rgba(245, 240, 232, 0.5)" }}
          >
            <a href="/privacy" style={{ textDecoration: "none" }} className="hover:text-ef-accent transition-colors">
              {t.footer.privacy}
            </a>
            <a href="/cookie" style={{ textDecoration: "none" }} className="hover:text-ef-accent transition-colors">
              {t.footer.cookie}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
