"use client";
import { Store, Handshake, Briefcase, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useT } from "@/components/LanguageProvider";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Store,
  Handshake,
  Briefcase,
};

export default function LavoraConNoiLanding() {
  const { t } = useT();
  const c = t.landings.lavoraConNoi;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({
    role: "",
    name: "",
    company: "",
    phone: "",
    email: "",
    cv: null as File | null,
    message: "",
    privacy: false,
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.privacy) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: form.role,
          name: form.name,
          company: form.company,
          phone: form.phone,
          email: form.email,
          hasCv: form.cv !== null,
          message: form.message,
          source: "landing-lavora-con-noi",
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ role: "", name: "", company: "", phone: "", email: "", cv: null, message: "", privacy: false });
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
            style={{ color: "var(--color-surface-dark)", fontWeight: 700, letterSpacing: "-0.02em" }}
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
          <a href="#contact-form" className="btn btn-primary" style={{ minWidth: 220 }}>
            {c.heroCta}
          </a>
        </div>
      </section>

      <section style={{ paddingTop: 80, paddingBottom: 80, backgroundColor: "var(--color-surface)" }}>
        <div className="container-ef" style={{ maxWidth: 1100 }}>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16"
            style={{ color: "var(--color-surface-dark)" }}
          >
            {c.pathsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {c.paths.map((p) => {
              const Icon = iconMap[p.icon];
              return (
                <div
                  key={p.title}
                  className="rounded-3xl flex flex-col items-center md:items-start text-center md:text-left"
                  style={{
                    backgroundColor: "var(--color-bg)",
                    border: "1px solid var(--color-border-subtle)",
                    padding: 32,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: "var(--color-accent-subtle)" }}
                  >
                    {Icon && (
                      <Icon
                        className="w-7 h-7"
                        style={{ color: "var(--color-accent)" }}
                      />
                    )}
                  </div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: "var(--color-surface-dark)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {p.desc}
                  </p>
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
        <div className="container-ef" style={{ maxWidth: 1100 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
                style={{ color: "var(--color-text-on-dark)" }}
              >
                {c.whyTitle}
              </h2>
              <ul className="space-y-6">
                {c.whyBullets.map((b) => (
                  <li key={b} className="flex items-start gap-4">
                    <CheckCircle
                      className="shrink-0 mt-1"
                      style={{ width: 20, height: 20, color: "var(--color-accent)" }}
                    />
                    <span
                      className="text-lg leading-relaxed"
                      style={{ color: "rgba(245, 240, 232, 0.92)" }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-3xl p-8 text-center md:text-left"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p
                className="text-xl font-medium leading-relaxed italic"
                style={{ color: "rgba(245, 240, 232, 0.92)" }}
              >
                {c.whyQuote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact-form"
        style={{
          paddingTop: 96,
          paddingBottom: 96,
          backgroundColor: "var(--color-bg)",
        }}
      >
        <div className="container-ef" style={{ maxWidth: 800 }}>
          <div
            className="rounded-3xl shadow-xl"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border-subtle)",
              padding: "48px 32px",
            }}
          >
            <div className="text-center mb-10">
              <h2
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ color: "var(--color-surface-dark)" }}
              >
                {c.formTitle}
              </h2>
              <p className="text-body-lg" style={{ color: "var(--color-text-secondary)" }}>
                {c.formSub}
              </p>
            </div>

            {status === "success" ? (
              <div className="text-center py-12">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "rgba(34,160,92,0.12)" }}
                >
                  <CheckCircle
                    style={{ width: 40, height: 40, color: "#22A05C" }}
                  />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--color-surface-dark)" }}
                >
                  {c.formSuccessTitle}
                </h3>
                <p
                  className="text-body-lg mb-8"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {c.formSuccessBody}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn btn-secondary"
                >
                  {c.formSuccessCta}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label className="label-ef" style={{ color: "var(--color-text-primary)" }}>
                    {c.formRoleLabel}
                  </label>
                  <select
                    required
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="input-ef"
                    style={{ height: 56, backgroundColor: "var(--color-bg)" }}
                  >
                    <option value="" disabled>
                      {c.formRolePlaceholder}
                    </option>
                    <option value="reseller">{c.formRoleReseller}</option>
                    <option value="partner">{c.formRolePartner}</option>
                    <option value="job">{c.formRoleJob}</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="lcn-name" className="label-ef" style={{ color: "var(--color-text-primary)" }}>
                      {c.formName}
                    </label>
                    <input
                      id="lcn-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-ef"
                      style={{ height: 56, backgroundColor: "var(--color-bg)" }}
                      placeholder="Mario Rossi"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lcn-company" className="label-ef" style={{ color: "var(--color-text-primary)" }}>
                      {c.formCompany}
                    </label>
                    <input
                      id="lcn-company"
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="input-ef"
                      style={{ height: 56, backgroundColor: "var(--color-bg)" }}
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="lcn-phone" className="label-ef" style={{ color: "var(--color-text-primary)" }}>
                      {c.formPhone}
                    </label>
                    <input
                      id="lcn-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input-ef"
                      style={{ height: 56, backgroundColor: "var(--color-bg)" }}
                      placeholder="333 1234567"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label htmlFor="lcn-email" className="label-ef" style={{ color: "var(--color-text-primary)" }}>
                      {c.formEmail}
                    </label>
                    <input
                      id="lcn-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-ef"
                      style={{ height: 56, backgroundColor: "var(--color-bg)" }}
                      placeholder="mario@esempio.it"
                      autoComplete="email"
                    />
                  </div>
                </div>
                {form.role === "job" && (
                  <div>
                    <label htmlFor="lcn-cv" className="label-ef" style={{ color: "var(--color-text-primary)" }}>
                      {c.formCv}
                    </label>
                    <input
                      id="lcn-cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setForm({ ...form, cv: e.target.files?.[0] ?? null })}
                      className="input-ef"
                      style={{
                        height: 56,
                        backgroundColor: "var(--color-bg)",
                        paddingTop: 8,
                      }}
                    />
                    <p
                      className="text-xs mt-1"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {c.formCvHint}
                    </p>
                  </div>
                )}
                <div>
                  <label htmlFor="lcn-message" className="label-ef" style={{ color: "var(--color-text-primary)" }}>
                    {c.formMessage}
                  </label>
                  <textarea
                    id="lcn-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-ef"
                    style={{ minHeight: 120, backgroundColor: "var(--color-bg)", resize: "vertical" }}
                  />
                </div>
                <div className="flex items-start gap-3 pt-2">
                  <input
                    id="lcn-privacy"
                    type="checkbox"
                    required
                    checked={form.privacy}
                    onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                    className="mt-1"
                    style={{ width: 18, height: 18, accentColor: "var(--color-accent)" }}
                  />
                  <label
                    htmlFor="lcn-privacy"
                    className="text-sm leading-snug"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {c.formPrivacy}
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn btn-primary w-full"
                  style={{
                    opacity: status === "submitting" ? 0.7 : 1,
                    padding: "16px 24px",
                    fontSize: 17,
                  }}
                >
                  {status === "submitting" ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    c.formSubmit
                  )}
                </button>
                {status === "error" && (
                  <p className="text-sm" style={{ color: "#c0392b" }}>
                    {c.success}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
