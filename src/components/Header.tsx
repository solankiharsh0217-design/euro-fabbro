"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useT } from "./LanguageProvider";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t, site } = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full backdrop-blur-md"
        style={{
          backgroundColor: "rgba(245, 240, 232, 0.9)",
          borderBottom: "1px solid var(--color-border-subtle)",
        }}
      >
        <div
          className="container-ef flex items-center justify-between"
          style={{ height: 72 }}
        >
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span
              className="text-xl font-display"
              style={{ color: "var(--color-text-primary)", fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              Euro<span style={{ color: "var(--color-accent)" }}>fabbro</span>
            </span>
            <span
              className="hidden md:inline text-caption uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)", marginLeft: 8, borderLeft: "1px solid var(--color-border)", paddingLeft: 12 }}
            >
              Digital Atelier
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {t.nav.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                style={{
                  fontWeight: isActive(item.href) ? 500 : 400,
                  color: isActive(item.href) ? "var(--color-accent)" : "var(--color-text-primary)",
                }}
              >
                {t.nav.label[item.key as keyof typeof t.nav.label]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
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
              style={{ color: "var(--color-text-primary)" }}
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
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[200] overflow-auto"
            style={{
              backgroundColor: "var(--color-bg)",
              padding: 24,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="flex justify-between items-center" style={{ marginBottom: 40 }}>
              <Link href="/" onClick={() => setOpen(false)} className="text-xl font-display" style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>
                Euro<span style={{ color: "var(--color-accent)" }}>fabbro</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                style={{ color: "var(--color-text-primary)" }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center gap-6 flex-1">
              {t.nav.items.map((item) => (
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
              <div className="mt-4">
                <LanguageToggle />
              </div>
              <Link
                href="/contatti"
                onClick={() => setOpen(false)}
                className="btn btn-primary"
                style={{ width: "100%", maxWidth: 320, marginTop: 16 }}
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
