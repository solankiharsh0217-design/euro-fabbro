"use client";
import { motion } from "framer-motion";
import { useT } from "./LanguageProvider";
import type { Lang } from "@/lib/content";

export default function LanguageToggle() {
  const { lang, setLang } = useT();
  return (
    <div
      role="tablist"
      aria-label="Language"
      className="relative inline-flex items-center rounded-full"
      style={{
        backgroundColor: "rgba(28, 23, 18, 0.06)",
        border: "1px solid var(--color-border-subtle)",
        padding: 3,
        height: 32,
      }}
    >
      {(["en", "it"] as Lang[]).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            role="tab"
            aria-selected={active}
            onClick={() => setLang(code)}
            className="relative z-10 inline-flex items-center justify-center text-[11px] font-semibold uppercase tracking-wider transition-colors"
            style={{
              width: 36,
              height: 24,
              borderRadius: 999,
              color: active ? "#FFFFFF" : "var(--color-text-secondary)",
              letterSpacing: "0.08em",
            }}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)",
                  boxShadow: "0 2px 8px rgba(184, 149, 106, 0.35)",
                }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {code}
          </button>
        );
      })}
    </div>
  );
}
