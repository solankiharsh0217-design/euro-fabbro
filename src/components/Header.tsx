"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site, nav } from "@/lib/content";

const items = [
  { label: nav.lavorazioni, href: "/lavorazioni" },
  { label: nav.cancelli, href: "/cancelli" },
  { label: nav.inferriate, href: "/inferriate" },
  { label: nav.recinzioni, href: "/recinzioni" },
  { label: nav.carport, href: "/carport" },
  { label: nav.automazione, href: "/automazione" },
  { label: nav.percheNoi, href: "/perche-noi" },
  { label: nav.realizzazioni, href: "/realizzazioni" },
  { label: nav.detrazioni, href: "/detrazioni" },
  { label: nav.contatti, href: "/contatti" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? "bg-ef-bg/95 backdrop-blur-md border-b border-ef-border-subtle shadow-sm"
          : "bg-ef-bg/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container-ef flex h-16 sm:h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={site.name}>
          <span className="font-serif text-2xl sm:text-3xl font-bold text-ef-surface-dark tracking-tight">
            Euro<span className="text-ef-accent">fabbro</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
          {items.map((it) => {
            const active = pathname === it.href || pathname?.startsWith(it.href + "/");
            return (
              <Link
                key={it.href}
                href={it.href}
                className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                  active
                    ? "text-ef-accent bg-ef-accent-subtle"
                    : "text-ef-text-primary hover:text-ef-accent hover:bg-ef-bg-secondary"
                }`}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-ef-surface-dark hover:text-ef-accent transition-colors"
          >
            <Phone className="w-4 h-4 text-ef-accent" />
            <span>{site.phone}</span>
          </a>
          <Link href="/contatti" className="hidden md:inline-flex btn-primary text-xs sm:text-sm">
            {nav.cta}
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-ef-border-subtle text-ef-surface-dark hover:bg-ef-bg-secondary transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ef-border-subtle bg-ef-bg max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="container-ef py-4 flex flex-col gap-1" aria-label="Menu mobile">
            {items.map((it) => {
              const active = pathname === it.href || pathname?.startsWith(it.href + "/");
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className={`px-4 py-3 rounded-2xl text-base font-medium ${
                    active
                      ? "bg-ef-accent-subtle text-ef-accent"
                      : "text-ef-text-primary hover:bg-ef-bg-secondary"
                  }`}
                >
                  {it.label}
                </Link>
              );
            })}
            <div className="pt-3 flex flex-col gap-2">
              <a href={`tel:${site.phoneTel}`} className="btn-secondary">
                <Phone className="w-4 h-4" />
                {site.phone}
              </a>
              <Link href="/contatti" className="btn-primary">
                {nav.cta}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
