"use client";
import {
  ClipboardList,
  PenTool,
  Factory,
  Truck,
  ShieldCheck,
  Users,
  MapPin,
  CheckCircle,
  Phone,
  ChevronDown,
  Star,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList,
  PenTool,
  Factory,
  Truck,
  ShieldCheck,
  Users,
  MapPin,
};

export default function CancelliRecinzioniLanding() {
  const { t, site } = useT();
  const c = t.landings.cancelliRecinzioni;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", message: "", privacy: false });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.privacy) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "landing-cancelli-recinzioni" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", phone: "", message: "", privacy: false });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section
        style={{
          paddingTop: 80,
          paddingBottom: 80,
          textAlign: "center",
          backgroundColor: "var(--color-bg)",
        }}
      >
        <div className="container-ef" style={{ maxWidth: 900 }}>
          <span
            className="inline-block py-1.5 px-4 rounded-full text-sm font-medium uppercase mb-6"
            style={{
              backgroundColor: "var(--color-accent-subtle)",
              color: "var(--color-accent)",
              letterSpacing: "0.08em",
            }}
          >
            {c.heroBadge}
          </span>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: "var(--color-surface-dark)", fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            {c.heroTitlePre}
            <span style={{ color: "var(--color-accent)", fontStyle: "italic", fontWeight: 300 }}>
              {c.heroTitleAccent}
            </span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 mx-auto"
            style={{ color: "var(--color-text-secondary)", maxWidth: 720 }}
          >
            {c.heroSub}
          </p>
          <a href="#preventivo-form" className="btn btn-primary" style={{ minWidth: 220 }}>
            {c.heroCta}
          </a>
        </div>
      </section>

      <section style={{ paddingTop: 80, paddingBottom: 80, backgroundColor: "var(--color-surface)" }}>
        <div className="container-ef" style={{ maxWidth: 1100 }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {c.steps.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={s.title}
                  className="rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                  style={{
                    backgroundColor: "var(--color-bg)",
                    border: "1px solid var(--color-border-subtle)",
                    padding: "32px 16px",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: "var(--color-accent-subtle)" }}
                  >
                    {Icon && <Icon className="w-8 h-8" style={{ color: "var(--color-accent)" }} />}
                  </div>
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "var(--color-surface-dark)", fontWeight: 600 }}
                  >
                    {s.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        style={{
          paddingTop: 80,
          paddingBottom: 80,
          backgroundColor: "var(--color-surface-dark)",
          color: "var(--color-text-on-dark)",
        }}
      >
        <div className="container-ef text-center" style={{ maxWidth: 900 }}>
          <div className="flex justify-center gap-1 mb-8" style={{ color: "#FACC15" }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-8 h-8" style={{ fill: "currentColor", color: "currentColor" }} />
            ))}
          </div>
          <blockquote
            className="italic font-medium leading-relaxed mb-12 px-2"
            style={{
              color: "rgba(255, 255, 255, 0.92)",
              fontSize: "clamp(20px, 2.4vw, 30px)",
              fontWeight: 500,
            }}
          >
            &ldquo;Lavoro impeccabile sul nostro cancello. Professionali, puntuali e il risultato ha superato le aspettative.&rdquo;
          </blockquote>
          <div
            className="grid sm:grid-cols-3 gap-8 text-center pt-12"
            style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
          >
            {c.pillars.map((p) => {
              const Icon = iconMap[p.icon];
              return (
                <div key={p.title}>
                  {Icon && (
                    <Icon
                      className="w-10 h-10 mx-auto mb-4"
                      style={{ color: "var(--color-accent)" }}
                    />
                  )}
                  <p className="font-medium text-lg" style={{ color: "var(--color-text-on-dark)" }}>
                    {p.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="preventivo-form"
        style={{
          paddingTop: 96,
          paddingBottom: 96,
          backgroundColor: "var(--color-bg-secondary)",
        }}
      >
        <div className="container-ef" style={{ maxWidth: 760 }}>
          {status === "success" ? (
            <div
              className="text-center py-12 rounded-3xl shadow-xl"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              <CheckCircle
                className="mx-auto mb-6"
                style={{ width: 80, height: 80, color: "#22A05C" }}
              />
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--color-surface-dark)" }}
              >
                {c.formSuccessTitle}
              </h3>
              <p className="text-body-lg" style={{ color: "var(--color-text-secondary)" }}>
                {c.formSuccessBody}
              </p>
            </div>
          ) : (
            <div
              className="rounded-3xl shadow-xl"
              style={{
                backgroundColor: "var(--color-surface)",
                padding: "40px 32px",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              <div className="text-center mb-10">
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-4"
                  style={{ color: "var(--color-surface-dark)" }}
                >
                  {c.formTitle}
                </h2>
                <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
                  {c.formSub}
                </p>
              </div>
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label htmlFor="cr-name" className="label-ef" style={{ color: "var(--color-text-primary)" }}>
                    {c.formName}
                  </label>
                  <input
                    id="cr-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-ef"
                    style={{ height: 48, backgroundColor: "var(--color-bg)" }}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="cr-phone" className="label-ef" style={{ color: "var(--color-text-primary)" }}>
                    {c.formPhone}
                  </label>
                  <input
                    id="cr-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="input-ef"
                    style={{ height: 48, backgroundColor: "var(--color-bg)" }}
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="cr-message" className="label-ef" style={{ color: "var(--color-text-primary)" }}>
                    {c.formMessage}
                  </label>
                  <textarea
                    id="cr-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-ef"
                    style={{ minHeight: 120, backgroundColor: "var(--color-bg)", resize: "vertical" }}
                  />
                </div>
                <div className="flex items-start gap-3 py-2">
                  <input
                    id="cr-privacy"
                    type="checkbox"
                    required
                    checked={form.privacy}
                    onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                    className="mt-1"
                    style={{ width: 18, height: 18, accentColor: "var(--color-accent)" }}
                  />
                  <label
                    htmlFor="cr-privacy"
                    className="text-sm leading-snug cursor-pointer"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {c.formPrivacy}
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn btn-primary w-full"
                  style={{ opacity: status === "submitting" ? 0.7 : 1 }}
                >
                  {status === "submitting" ? "..." : c.formSubmit}
                </button>
                {status === "error" && (
                  <p className="text-sm" style={{ color: "#c0392b" }}>
                    {c.success}
                  </p>
                )}
                <div className="text-center pt-4">
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="inline-flex items-center gap-2 font-semibold hover:underline"
                    style={{ color: "var(--color-surface-dark)" }}
                  >
                    <Phone className="w-4 h-4" /> {c.phoneCta}
                  </a>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      <section style={{ paddingTop: 80, paddingBottom: 80, backgroundColor: "var(--color-bg)" }}>
        <div className="container-ef" style={{ maxWidth: 800 }}>
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--color-surface-dark)" }}
          >
            {c.faqTitle}
          </h2>
          <div
            className="rounded-xl shadow-sm border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border-subtle)",
              padding: 8,
            }}
          >
            {c.faq.map((item, idx) => {
              const open = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className={idx < c.faq.length - 1 ? "border-b" : ""}
                  style={{ borderColor: "var(--color-border-subtle)" }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-3 px-4 py-4"
                    style={{ color: "var(--color-surface-dark)" }}
                    aria-expanded={open}
                  >
                    <span className="text-lg font-semibold">{item.q}</span>
                    <ChevronDown
                      className="shrink-0 transition-transform"
                      style={{
                        width: 20,
                        height: 20,
                        color: "var(--color-accent)",
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  {open && (
                    <div
                      className="px-4 pb-4"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
