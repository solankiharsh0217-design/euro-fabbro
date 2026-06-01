"use client";

import { useState } from "react";
import { MessageCircle, CheckCircle2, Loader2, ArrowRight } from "lucide-react";

export type ContactFormPayload = {
  name: string;
  phone: string;
  email?: string;
  type?: string;
  message?: string;
  privacy: boolean;
};

export function ContactForm({
  fields = "standard",
  formCopy,
  submitLabel = "Invia richiesta",
  successMessage = "Richiesta inviata con successo! Ti contatteremo entro 24 ore.",
}: {
  fields?: "standard" | "minimal";
  formCopy?: {
    name?: string;
    phone?: string;
    email?: string;
    type?: string;
    message?: string;
    privacy?: string;
  };
  submitLabel?: string;
  successMessage?: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-ef-surface-dark mb-2">Richiesta inviata!</h3>
        <p className="text-ef-text-secondary">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="cf-name" className="label-ef block mb-1.5">
            {formCopy?.name ?? "Nome e cognome"} *
          </label>
          <input id="cf-name" name="name" required className="input-ef" placeholder="Mario Rossi" />
        </div>
        <div>
          <label htmlFor="cf-phone" className="label-ef block mb-1.5">
            {formCopy?.phone ?? "Telefono"} *
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            className="input-ef"
            placeholder="333 1234567"
          />
        </div>
      </div>
      {fields === "standard" && (
        <>
          <div>
            <label htmlFor="cf-email" className="label-ef block mb-1.5">
              {formCopy?.email ?? "Email"} *
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              className="input-ef"
              placeholder="mario@esempio.it"
            />
          </div>
          {formCopy?.type && (
            <div>
              <label htmlFor="cf-type" className="label-ef block mb-1.5">
                {formCopy.type}
              </label>
              <select id="cf-type" name="type" className="input-ef">
                <option value="">Seleziona...</option>
                <option value="cancello">Cancello</option>
                <option value="inferriata">Inferriata</option>
                <option value="recinzione">Recinzione</option>
                <option value="scala">Scala</option>
                <option value="allarme">Allarme</option>
                <option value="automazione">Automazione</option>
                <option value="altro">Altro</option>
              </select>
            </div>
          )}
        </>
      )}
      <div>
        <label htmlFor="cf-message" className="label-ef block mb-1.5">
          {formCopy?.message ?? "Messaggio"}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          className="input-ef h-auto py-3 resize-none"
          placeholder="Raccontaci il tuo progetto..."
        />
      </div>
      <div className="flex items-start gap-3 pt-1">
        <input
          id="cf-privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-1 w-5 h-5 rounded border-ef-border-subtle text-ef-accent focus:ring-ef-accent"
        />
        <label htmlFor="cf-privacy" className="text-sm text-ef-text-secondary leading-snug cursor-pointer">
          {formCopy?.privacy ?? (
            <>
              Ho letto e accetto la{" "}
              <a href="/privacy-policy" className="text-ef-accent hover:underline">
                Privacy Policy
              </a>{" "}
              per il trattamento dei dati personali. *
            </>
          )}
        </label>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" className="btn-primary w-full text-base" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Invio in corso...
          </>
        ) : (
          <>
            {submitLabel} <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

export function WhatsAppButton({
  phone,
  message = "Ciao, vorrei un preventivo per...",
  label = "Scrivici su WhatsApp",
  className = "btn-whatsapp",
}: {
  phone: string;
  message?: string;
  label?: string;
  className?: string;
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <MessageCircle className="w-4 h-4" /> {label}
    </a>
  );
}
