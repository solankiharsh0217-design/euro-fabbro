"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = { q: string; a: string };

export function FAQ({ items, title = "Domande frequenti" }: { items: FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="heading-2 text-center mb-8 sm:mb-12">{title}</h2>
      <div className="bg-ef-surface rounded-2xl border border-ef-border-subtle overflow-hidden divide-y divide-ef-border-subtle">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left flex items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 hover:bg-ef-bg-secondary/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-semibold text-ef-surface-dark">{it.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-ef-accent shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-ef-text-secondary leading-relaxed">{it.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
