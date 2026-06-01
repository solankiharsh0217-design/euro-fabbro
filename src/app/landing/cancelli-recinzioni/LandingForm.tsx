"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function LandingForm({
  nameLabel,
  phoneLabel,
  messageLabel,
  privacyLabel,
  submitLabel,
  submittingLabel,
  successTitle,
  successBody,
}: {
  nameLabel: string;
  phoneLabel: string;
  messageLabel: string;
  privacyLabel: string;
  submitLabel: string;
  submittingLabel: string;
  successTitle: string;
  successBody: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setDone(true);
  }
  if (done) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-ef-surface-dark mb-2">{successTitle}</h3>
        <p className="text-ef-text-secondary">{successBody}</p>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
      <div>
        <label htmlFor="lf-name" className="label-ef block mb-1.5">
          {nameLabel}
        </label>
        <input id="lf-name" name="name" required className="input-ef h-12" placeholder="Mario Rossi" />
      </div>
      <div>
        <label htmlFor="lf-phone" className="label-ef block mb-1.5">
          {phoneLabel}
        </label>
        <input
          id="lf-phone"
          name="phone"
          type="tel"
          required
          className="input-ef h-12"
          placeholder="333 1234567"
        />
      </div>
      <div>
        <label htmlFor="lf-message" className="label-ef block mb-1.5">
          {messageLabel}
        </label>
        <textarea
          id="lf-message"
          name="message"
          rows={4}
          className="input-ef h-auto py-3 resize-none"
          placeholder="..."
        />
      </div>
      <div className="flex items-start gap-3 py-1">
        <input
          id="lf-privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-1 w-5 h-5 rounded border-ef-border-subtle text-ef-accent focus:ring-ef-accent"
        />
        <label htmlFor="lf-privacy" className="text-sm text-ef-text-secondary leading-snug cursor-pointer">
          {privacyLabel}
        </label>
      </div>
      <button
        type="submit"
        className="btn-primary w-full h-auto py-4 text-base sm:text-lg"
        disabled={submitting}
      >
        {submitting ? submittingLabel : submitLabel}
      </button>
    </form>
  );
}
