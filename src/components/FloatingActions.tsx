"use client";
import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { useT } from "@/components/LanguageProvider";

export function FloatingActions() {
  const { site } = useT();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div
      className="fixed right-4 sm:right-6 z-40 flex flex-col gap-3"
      style={{ bottom: 24 }}
    >
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="inline-flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          width: 52,
          height: 52,
          borderRadius: "var(--radius-full)",
          backgroundColor: "#25D366",
          color: "#FFFFFF",
          boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
        }}
      >
        <MessageCircle size={22} />
      </a>
      <button
        onClick={scrollTop}
        aria-label="Scroll to top"
        className="inline-flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          width: 48,
          height: 48,
          borderRadius: "var(--radius-full)",
          backgroundColor: "var(--color-surface)",
          color: "var(--color-accent)",
          border: "1px solid var(--color-border-subtle)",
          boxShadow: "0 4px 16px rgba(28, 23, 18, 0.12)",
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(20px)",
          pointerEvents: show ? "auto" : "none",
        }}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
