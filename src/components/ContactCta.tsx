"use client";
import { useT } from "./LanguageProvider";
import { ContactForm } from "./ContactForm";

export function ContactCta({ title, subtitle }: { title: React.ReactNode; subtitle?: string }) {
  const { t } = useT();
  return (
    <section
      style={{
        backgroundColor: "var(--color-surface-dark)",
        color: "var(--color-text-on-dark)",
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(184, 149, 106, 0.12), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div className="container-ef relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <span
              className="inline-flex items-center gap-2 mb-4"
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(184, 149, 106, 0.18)",
                color: "var(--color-accent)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                border: "1px solid rgba(184, 149, 106, 0.3)",
              }}
            >
              {t.cta.chip}
            </span>
            <h2 className="heading-2 mt-2" style={{ color: "var(--color-text-on-dark)" }}>
              {title}
            </h2>
            {subtitle && (
              <p
                className="text-body-lg mt-5"
                style={{ color: "rgba(245, 240, 232, 0.8)", maxWidth: 480 }}
              >
                {subtitle}
              </p>
            )}
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
