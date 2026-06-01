"use client";
import { FAQ } from "./FAQ";

export function FaqSection({ items, title = "Frequently Asked Questions" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <section
      style={{
        backgroundColor: "var(--color-bg)",
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
      }}
    >
      <div className="container-ef">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span
            className="inline-flex items-center gap-2 mb-4"
            style={{
              padding: "6px 14px",
              borderRadius: 999,
              backgroundColor: "var(--color-accent-subtle)",
              color: "var(--color-accent)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            FAQ
          </span>
          <h2 className="heading-2 mt-2">{title}</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQ items={items} />
        </div>
      </div>
    </section>
  );
}
