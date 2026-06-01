"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useT } from "./LanguageProvider";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const { t } = useT();
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="card"
            style={{ padding: 0, overflow: "hidden" }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left flex items-center justify-between gap-4"
              style={{ padding: "20px 24px" }}
              aria-expanded={isOpen}
            >
              <span className="font-medium" style={{ color: "var(--color-text-primary)", fontSize: "var(--text-h4)" }}>
                {it.q}
              </span>
              <ChevronDown
                size={20}
                style={{
                  color: "var(--color-accent)",
                  flexShrink: 0,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform var(--duration-base) var(--ease-out)",
                }}
              />
            </button>
            {isOpen && (
              <div
                style={{
                  padding: "0 24px 20px 24px",
                  color: "var(--color-text-secondary)",
                  fontSize: "var(--text-body)",
                  lineHeight: "var(--leading-body)",
                }}
              >
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
