"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useT } from "./LanguageProvider";
import LanguageToggle from "./LanguageToggle";
import { useScrollPosition } from "@/lib/useScrollPosition";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const THRESHOLD = 32;
const TRANSPARENT_PATHS = new Set<string>(["/", "/contatti"]);

export default function Header() {
  const { t, site } = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrolled = useScrollPosition() > THRESHOLD;
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  const canBeTransparent = TRANSPARENT_PATHS.has(cleanPath);
  const transparent = canBeTransparent && !scrolled;

  const isActive = (href: string) => {
    const h = href.replace(/\/$/, "") || "/";
    return cleanPath === h || cleanPath.startsWith(h + "/");
  };
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

  const accent = "var(--color-accent)";
  const headerText = transparent ? "#FFFFFF" : "var(--color-text-primary)";
  const headerTextMuted = transparent ? "rgba(245, 240, 232, 0.75)" : "var(--color-text-muted)";

  return (
    <>
      <header
        data-transparent={transparent ? "true" : "false"}
        data-scrolled={scrolled ? "true" : "false"}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          width: "100%",
          height: scrolled ? 64 : 76,
          backgroundColor: transparent ? "transparent" : "rgba(245, 240, 232, 0.88)",
          borderBottom: transparent
            ? "1px solid transparent"
            : "1px solid var(--color-border-subtle)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(28, 23, 18, 0.06)"
            : "0 0 0 rgba(0, 0, 0, 0)",
          backdropFilter: transparent ? "none" : "blur(12px)",
          WebkitBackdropFilter: transparent ? "none" : "blur(12px)",
          transition:
            "background-color 300ms cubic-bezier(.25,.46,.45,.94), border-color 300ms cubic-bezier(.25,.46,.45,.94), box-shadow 300ms cubic-bezier(.25,.46,.45,.94), height 300ms cubic-bezier(.25,.46,.45,.94), backdrop-filter 300ms cubic-bezier(.25,.46,.45,.94)",
        }}
      >
        <div
          className="container-ef flex items-center justify-between gap-4 h-full"
        >
          <Link href="/" className="flex items-center shrink-0 group">
            <motion.span
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4, ease }}
              className="inline-flex"
              style={{
                filter: transparent ? "brightness(0) invert(1)" : "none",
                transition: "filter 300ms cubic-bezier(.25,.46,.45,.94)",
              }}
            >
              <Image
                src={site.logo}
                alt={`${site.name} logo`}
                width={140}
                height={70}
                className="w-[100px] sm:w-[120px] md:w-[140px] h-auto"
                priority
              />
            </motion.span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
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
                      className="relative inline-flex items-center gap-1.5 px-3 py-2"
                      style={{
                        fontWeight: isServicesActive || servicesOpen ? 500 : 400,
                        color: isServicesActive || servicesOpen ? accent : headerText,
                        fontSize: "var(--text-body-sm)",
                        transition: "color 300ms cubic-bezier(.25,.46,.45,.94)",
                      }}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {t.nav.label.servizi}
                      <ChevronDown
                        size={13}
                        style={{
                          transition: "transform 300ms cubic-bezier(.25,.46,.45,.94)",
                          transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                      <span
                        className="absolute left-3 right-3 bottom-1 h-px"
                        style={{
                          backgroundColor: accent,
                          transform: servicesOpen || isServicesActive ? "scaleX(1)" : "scaleX(0)",
                          transformOrigin: "left center",
                          transition: "transform 300ms cubic-bezier(.25,.46,.45,.94)",
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
                  className="relative px-3 py-2"
                  style={{
                    fontWeight: isActive(item.href) ? 500 : 400,
                    color: isActive(item.href) ? accent : headerText,
                    fontSize: "var(--text-body-sm)",
                    transition: "color 300ms cubic-bezier(.25,.46,.45,.94)",
                  }}
                >
                  {t.nav.label[item.key as keyof typeof t.nav.label]}
                  <span
                    className="absolute left-3 right-3 bottom-1 h-px"
                    style={{
                      backgroundColor: accent,
                      transform: isActive(item.href) ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left center",
                      transition: "transform 300ms cubic-bezier(.25,.46,.45,.94)",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle transparent={transparent} />
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
              style={{ color: headerText, transition: "color 300ms cubic-bezier(.25,.46,.45,.94)" }}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

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
                    transition: "transform 300ms cubic-bezier(.25,.46,.45,.94)",
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
