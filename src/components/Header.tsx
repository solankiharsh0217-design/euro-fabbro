"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Phone } from "lucide-react";
import { useT } from "./LanguageProvider";
import LanguageToggle from "./LanguageToggle";
import { useScrollPosition } from "@/lib/useScrollPosition";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const THRESHOLD = 32;

export default function Header() {
  const { t, site } = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrolled = useScrollPosition() > THRESHOLD;
  const onHero = pathname === "/";

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const isServicesActive = t.nav.services.some((s) => isActive(s.href));

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const transparent = onHero && !scrolled;
  const headerBg = transparent
    ? "transparent"
    : "rgba(245, 240, 232, 0.85)";
  const headerBorder = transparent ? "transparent" : "var(--color-border-subtle)";
  const headerText = transparent ? "#FFFFFF" : "var(--color-text-primary)";
  const headerTextMuted = transparent ? "rgba(245, 240, 232, 0.75)" : "var(--color-text-muted)";
  const accent = "var(--color-accent)";

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: headerBg,
          borderBottomColor: headerBorder,
          height: scrolled ? 64 : 76,
          boxShadow: scrolled
            ? "0 4px 24px rgba(28, 23, 18, 0.06)"
            : "0 0 0 rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.3, ease }}
        className="sticky top-0 z-50 w-full backdrop-blur-md"
        style={{ borderBottomWidth: 1, borderBottomStyle: "solid" }}
      >
        <div
          className="container-ef flex items-center justify-between gap-4 h-full"
        >
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <motion.span
              whileHover={{ rotate: -6, scale: 1.05 }}
              transition={{ duration: 0.4, ease }}
              className="inline-flex"
            >
              <Image
                src={site.logo}
                alt={`${site.name} logo`}
                width={44}
                height={44}
                className="w-9 h-9 sm:w-11 sm:h-11"
                priority
              />
            </motion.span>
            <div className="flex flex-col leading-none">
              <span
                className="text-lg sm:text-xl font-display"
                style={{
                  color: headerText,
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                  transition: "color var(--duration-base) var(--ease-out)",
                }}
              >
                Euro<span style={{ color: accent }}>fabbro</span>
              </span>
              <span
                className="hidden md:inline text-[10px] uppercase"
                style={{
                  color: headerTextMuted,
                  letterSpacing: "0.22em",
                  marginTop: 4,
                  transition: "color var(--duration-base) var(--ease-out)",
                }}
              >
                Digital Atelier
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {t.nav.items.map((item) => {
              if (item.key === "servizi") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      className="nav-link relative inline-flex items-center gap-1.5 px-3 py-2"
                      style={{
                        fontWeight: isServicesActive || servicesOpen ? 500 : 400,
                        color: isServicesActive || servicesOpen ? accent : headerText,
                        fontSize: "var(--text-body-sm)",
                        transition: "color var(--duration-base) var(--ease-out)",
                      }}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {t.nav.label.servizi}
                      <ChevronDown
                        size={13}
                        style={{
                          transition: "transform var(--duration-base) var(--ease-out)",
                          transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                      <span
                        className="absolute left-3 right-3 bottom-1 h-px"
                        style={{
                          backgroundColor: accent,
                          transform: servicesOpen || isServicesActive ? "scaleX(1)" : "scaleX(0)",
                          transformOrigin: "left center",
                          transition: "transform var(--duration-base) var(--ease-out)",
                        }}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2, ease }}
                          onMouseEnter={openServices}
                          onMouseLeave={scheduleClose}
                          className="absolute left-1/2 -translate-x-1/2 top-full"
                          style={{
                            marginTop: 12,
                            width: 600,
                            backgroundColor: "var(--color-surface)",
                            border: "1px solid var(--color-border-subtle)",
                            borderRadius: "var(--radius-lg)",
                            boxShadow: "var(--shadow-lg)",
                            padding: 12,
                          }}
                        >
                          <div
                            className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
                            style={{
                              backgroundColor: "var(--color-surface)",
                              borderLeft: "1px solid var(--color-border-subtle)",
                              borderTop: "1px solid var(--color-border-subtle)",
                            }}
                          />
                          <div className="grid grid-cols-2 gap-1">
                            {t.nav.services.map((s, idx) => {
                              const active = isActive(s.href);
                              return (
                                <motion.div
                                  key={s.href}
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.25, delay: idx * 0.03, ease }}
                                >
                                  <Link
                                    href={s.href}
                                    onClick={() => setServicesOpen(false)}
                                    className="group flex flex-col gap-1 rounded-lg p-3 transition-colors"
                                    style={{
                                      backgroundColor: active ? "var(--color-accent-subtle)" : "transparent",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-accent-subtle)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = active ? "var(--color-accent-subtle)" : "transparent")}
                                  >
                                    <span
                                      className="inline-flex items-center gap-1.5 text-body"
                                      style={{
                                        fontWeight: 500,
                                        color: active ? accent : "var(--color-text-primary)",
                                      }}
                                    >
                                      {t.nav.label[s.key as keyof typeof t.nav.label]}
                                      <ArrowRight
                                        size={12}
                                        className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                        style={{ color: accent }}
                                      />
                                    </span>
                                    <span
                                      className="text-body-sm"
                                      style={{ color: "var(--color-text-muted)", lineHeight: 1.4 }}
                                    >
                                      {t.nav.label[s.descKey as keyof typeof t.nav.label]}
                                    </span>
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                          <div
                            className="mt-1 pt-3 px-3 pb-1 flex items-center justify-between"
                            style={{ borderTop: "1px solid var(--color-border-subtle)" }}
                          >
                            <span
                              className="text-[11px] uppercase"
                              style={{ color: "var(--color-text-muted)", letterSpacing: "0.18em" }}
                            >
                              Ferioli Sergio · dal 1977
                            </span>
                            <Link
                              href="/lavorazioni"
                              onClick={() => setServicesOpen(false)}
                              className="inline-flex items-center gap-1.5 text-body-sm"
                              style={{ color: accent, fontWeight: 500 }}
                            >
                              {t.nav.label.viewAllServices} <ArrowRight size={14} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link relative px-3 py-2"
                  style={{
                    fontWeight: isActive(item.href) ? 500 : 400,
                    color: isActive(item.href) ? accent : headerText,
                    fontSize: "var(--text-body-sm)",
                    transition: "color var(--duration-base) var(--ease-out)",
                  }}
                >
                  {t.nav.label[item.key as keyof typeof t.nav.label]}
                  <span
                    className="absolute left-3 right-3 bottom-1 h-px"
                    style={{
                      backgroundColor: accent,
                      transform: isActive(item.href) ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left center",
                      transition: "transform var(--duration-base) var(--ease-out)",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="hidden xl:inline-flex items-center gap-2 text-body-sm"
              style={{
                color: transparent ? "rgba(255, 255, 255, 0.85)" : "var(--color-text-secondary)",
                transition: "color var(--duration-base) var(--ease-out)",
              }}
            >
              <Phone size={14} style={{ color: accent }} /> {site.phone}
            </a>
            <LanguageToggle />
            <Link
              href="/contatti"
              className="hidden lg:inline-flex btn btn-primary"
              style={{ padding: "10px 20px", fontSize: "var(--text-body-sm)" }}
            >
              {t.nav.label.cta}
            </Link>
            <button
              className="lg:hidden p-2"
              onClick={() => setOpen(true)}
              style={{ color: headerText, transition: "color var(--duration-base) var(--ease-out)" }}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease }}
            className="fixed inset-0 z-[200] overflow-auto"
            style={{
              backgroundColor: "var(--color-bg)",
              padding: 24,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="flex justify-between items-center" style={{ marginBottom: 40 }}>
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                <Image src={site.logo} alt={`${site.name} logo`} width={36} height={36} className="w-9 h-9" />
                <span className="text-xl font-display" style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>
                  Euro<span style={{ color: accent }}>fabbro</span>
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                style={{ color: "var(--color-text-primary)" }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center gap-5 flex-1">
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="inline-flex items-center gap-2"
                style={{
                  fontSize: "var(--text-h3)",
                  fontWeight: 500,
                  color: "var(--color-text-primary)",
                }}
                aria-expanded={mobileServicesOpen}
              >
                {t.nav.label.servizi}
                <ChevronDown
                  size={20}
                  style={{
                    transition: "transform var(--duration-base) var(--ease-out)",
                    transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="w-full max-w-sm overflow-hidden"
                  >
                    <div className="flex flex-col items-center gap-3 pb-2">
                      {t.nav.services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setOpen(false)}
                          className="text-center"
                        >
                          <span
                            className="block text-lg font-medium"
                            style={{ color: "var(--color-text-primary)" }}
                          >
                            {t.nav.label[s.key as keyof typeof t.nav.label]}
                          </span>
                          <span
                            className="block text-sm mt-0.5"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            {t.nav.label[s.descKey as keyof typeof t.nav.label]}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {t.nav.items
                .filter((i) => i.key !== "servizi")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{
                      fontSize: "var(--text-h3)",
                      fontWeight: 500,
                      color: "var(--color-text-primary)",
                      textDecoration: "none",
                    }}
                  >
                    {t.nav.label[item.key as keyof typeof t.nav.label]}
                  </Link>
                ))}
              <div className="mt-2">
                <LanguageToggle />
              </div>
              <Link
                href="/contatti"
                onClick={() => setOpen(false)}
                className="btn btn-primary"
                style={{ width: "100%", maxWidth: 320, marginTop: 12 }}
              >
                {t.nav.label.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
