"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { landingLavoraConNoi } from "@/lib/content";

export default function WorkForm({ l }: { l: typeof landingLavoraConNoi }) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [role, setRole] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="text-center py-10">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-ef-surface-dark mb-3">{l.formSuccess}</h3>
        <p className="text-ef-text-secondary text-base sm:text-lg mb-7">{l.formSuccessBody}</p>
        <button type="button" onClick={() => setDone(false)} className="btn-secondary">
          {l.formAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6">
      <div>
        <label htmlFor="wf-role" className="label-ef block mb-1.5">
          {l.formRole}
        </label>
        <select
          id="wf-role"
          name="role"
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="input-ef h-12"
        >
          <option value="">{l.formRolePlaceholder}</option>
          {l.formRoles.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label htmlFor="wf-name" className="label-ef block mb-1.5">
            {l.formName}
          </label>
          <input id="wf-name" name="name" required className="input-ef h-12" placeholder="Mario Rossi" />
        </div>
        <div>
          <label htmlFor="wf-company" className="label-ef block mb-1.5">
            {l.formCompany}
          </label>
          <input id="wf-company" name="company" className="input-ef h-12" placeholder="La tua azienda" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label htmlFor="wf-phone" className="label-ef block mb-1.5">
            {l.formPhone}
          </label>
          <input
            id="wf-phone"
            name="phone"
            type="tel"
            required
            className="input-ef h-12"
            placeholder="333 1234567"
          />
        </div>
        <div>
          <label htmlFor="wf-email" className="label-ef block mb-1.5">
            {l.formEmail}
          </label>
          <input
            id="wf-email"
            name="email"
            type="email"
            required
            className="input-ef h-12"
            placeholder="mario@esempio.it"
          />
        </div>
      </div>
      {role === "job_applicant" && (
        <div>
          <label htmlFor="wf-cv" className="label-ef block mb-1.5">
            {l.formCV}
          </label>
          <input
            id="wf-cv"
            name="cv"
            type="file"
            accept=".pdf,.doc,.docx"
            className="input-ef h-12 pt-2.5 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-ef-accent-subtle file:text-ef-accent hover:file:bg-ef-accent/20 cursor-pointer"
          />
          <p className="text-xs text-ef-text-muted mt-1.5">{l.formCVHint}</p>
        </div>
      )}
      <div>
        <label htmlFor="wf-message" className="label-ef block mb-1.5">
          {l.formMessage}
        </label>
        <textarea
          id="wf-message"
          name="message"
          rows={4}
          className="input-ef h-auto py-3 resize-none"
          placeholder="..."
        />
      </div>
      <div className="flex items-start gap-3 pt-1">
        <input
          id="wf-privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-1 w-5 h-5 rounded border-ef-border-subtle text-ef-accent focus:ring-ef-accent"
        />
        <label htmlFor="wf-privacy" className="text-sm text-ef-text-secondary leading-snug cursor-pointer">
          {l.formPrivacy}
        </label>
      </div>
      <button
        type="submit"
        className="btn-primary w-full h-auto py-4 text-base sm:text-lg"
        disabled={submitting}
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> {l.formSubmitting}
          </>
        ) : (
          l.formSubmit
        )}
      </button>
    </form>
  );
}
