"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { useT } from "./LanguageProvider";

export default function Footer() {
  const { t, site } = useT();
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: "var(--color-surface-dark)", color: "var(--color-text-on-dark)" }}>
      <div className="container-ef" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl sm:text-3xl font-display" style={{ fontWeight: 500, marginBottom: 16 }}>
              Euro<span style={{ color: "var(--color-accent)" }}>fabbro</span>
            </div>
            <p className="text-body-sm" style={{ color: "rgba(245, 240, 232, 0.7)", lineHeight: 1.7, marginBottom: 20 }}>
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
                style={{ width: 40, height: 40, borderRadius: "var(--radius-full)", backgroundColor: "rgba(255,255,255,0.08)" }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
                style={{ width: 40, height: 40, borderRadius: "var(--radius-full)", backgroundColor: "rgba(255,255,255,0.08)" }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-body" style={{ fontWeight: 500, color: "var(--color-text-on-dark)", marginBottom: 20 }}>
              {t.footer.colLavorazioni}
            </h4>
            <ul className="space-y-2.5">
              {t.nav.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-sm"
                    style={{ color: "rgba(245, 240, 232, 0.7)", textDecoration: "none", transition: "color var(--duration-fast)" }}
                  >
                    {t.nav.label[item.key as keyof typeof t.nav.label]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-body" style={{ fontWeight: 500, color: "var(--color-text-on-dark)", marginBottom: 20 }}>
              {t.footer.colContatti}
            </h4>
            <ul className="space-y-3 text-body-sm" style={{ color: "rgba(245, 240, 232, 0.7)" }}>
              <li>
                <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2 hover:text-ef-accent">
                  <Phone size={14} /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone size={14} /> {site.mobile}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2">
                  <Mail size={14} /> {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} style={{ marginTop: 2, flexShrink: 0 }} />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-body" style={{ fontWeight: 500, color: "var(--color-text-on-dark)", marginBottom: 20 }}>
              {t.footer.colCertificazioni}
            </h4>
            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full"
              style={{ backgroundColor: "var(--color-accent-subtle)", color: "var(--color-accent)", fontSize: "var(--text-body-sm)", fontWeight: 500 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {t.footer.certText}
            </div>
            <p className="text-body-sm" style={{ color: "rgba(245, 240, 232, 0.7)", marginTop: 16 }}>
              {t.footer.compassText}
            </p>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(245, 240, 232, 0.1)" }}
        >
          <p className="text-body-sm" style={{ color: "rgba(245, 240, 232, 0.5)" }}>
            © {year} Ferioli Sergio SRL · {t.footer.piva}
          </p>
          <div className="flex items-center gap-4 text-body-sm" style={{ color: "rgba(245, 240, 232, 0.5)" }}>
            <a href="/privacy" style={{ textDecoration: "none" }}>{t.footer.privacy}</a>
            <a href="/cookie" style={{ textDecoration: "none" }}>{t.footer.cookie}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
