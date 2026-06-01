"use client";
import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useT } from "./LanguageProvider";

export function ContactForm() {
  const { t, site } = useT();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const labels = t.form;

  return (
    <form onSubmit={onSubmit} className="card" style={{ padding: "var(--component-padding)" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label-ef">{labels.name}</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="input-ef"
            autoComplete="name"
          />
        </div>
        <div>
          <label className="label-ef">{labels.email}</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="input-ef"
            autoComplete="email"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="label-ef">{labels.phone}</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="input-ef"
            autoComplete="tel"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="label-ef">{labels.message}</label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="input-ef"
            style={{ resize: "vertical", minHeight: 120 }}
          />
        </div>
      </div>
      <p className="text-body-sm mt-4" style={{ color: "var(--color-text-muted)" }}>
        {labels.privacy}{" "}
        <a href="/privacy" className="underline" style={{ color: "var(--color-accent)" }}>
          {labels.privacyLink}
        </a>
        .
      </p>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary w-full sm:w-auto mt-4"
        style={{ opacity: status === "submitting" ? 0.7 : 1 }}
      >
        {status === "submitting" ? (
          <Loader2 size={16} className="animate-spin" />
        ) : status === "success" ? (
          <CheckCircle size={16} />
        ) : (
          <Send size={16} />
        )}
        {status === "success" ? labels.sent : labels.send}
      </button>
      {status === "error" && (
        <p className="text-body-sm mt-3" style={{ color: "#c0392b" }}>
          {labels.error}
        </p>
      )}
      {status === "success" && (
        <p className="text-body-sm mt-3" style={{ color: "var(--color-accent)" }}>
          {labels.success}
        </p>
      )}
    </form>
  );
}
