"use client";

import { useT } from "./LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useT();
  return (
    <div
      className="hidden lg:inline-flex items-center gap-1 text-body-sm"
      style={{ color: "var(--color-text-secondary)" }}
    >
      <button
        onClick={() => setLang("en")}
        className="px-2 py-1 rounded-md transition-colors duration-fast ease-ease-out"
        style={{
          fontWeight: lang === "en" ? 600 : 400,
          color: lang === "en" ? "var(--color-accent)" : "var(--color-text-secondary)",
        }}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span style={{ color: "var(--color-border)" }}>|</span>
      <button
        onClick={() => setLang("it")}
        className="px-2 py-1 rounded-md transition-colors duration-fast ease-ease-out"
        style={{
          fontWeight: lang === "it" ? 600 : 400,
          color: lang === "it" ? "var(--color-accent)" : "var(--color-text-secondary)",
        }}
        aria-pressed={lang === "it"}
      >
        IT
      </button>
    </div>
  );
}
