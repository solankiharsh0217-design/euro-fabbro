"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, site, type Lang, type T } from "@/lib/content";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: T;
  site: typeof site;
};

const STORAGE_KEY = "eurofabbro_lang";

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "it") {
      setLangState(stored);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  };

  const value: LangContextValue = {
    lang,
    setLang,
    t: translations[lang],
    site,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useT() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useT must be used within LanguageProvider");
  }
  return ctx;
}
