"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle, Calculator } from "lucide-react";
import { site, detrazioniContent } from "@/lib/content";
import { Container, Section, Eyebrow, H2 } from "@/components/ui";
import { FAQ } from "@/components/FAQ";
import { ContactForm, WhatsAppButton } from "@/components/ContactForm";

export default function DetrazioniPage() {
  const c = detrazioniContent;
  const [amount, setAmount] = useState<number>(5000);
  const [percentage, setPercentage] = useState<36 | 50>(50);

  const savings = useMemo(() => (amount * percentage) / 100, [amount, percentage]);

  return (
    <>
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 px-4 bg-gradient-to-b from-ef-bg to-ef-bg-secondary">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Detrazioni fiscali · 2026</Eyebrow>
            <h1 className="heading-1 mt-4 text-balance">
              {c.hero.headline}
              <span className="text-ef-accent italic font-light">{c.hero.headlineAccent}</span>
              {c.hero.headlinePost}
            </h1>
            <p className="lead mt-5 text-pretty">{c.hero.subheadline}</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href="/contatti" className="btn-primary text-base">
                {c.hero.cta} <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:${site.phoneTel}`} className="btn-secondary text-base">
                <Phone className="w-4 h-4" /> {site.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section bg="bg-ef-bg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="heading-2 text-balance">
                {c.bonusTitle}
                <span className="text-ef-accent italic font-light">{c.bonusAccent}</span>
              </h2>
              <p className="lead mt-5 text-pretty">{c.bonusBody}</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-ef-surface-dark mb-4">
                {c.eligibleTitle}
                <span className="text-ef-accent italic">{c.eligibleAccent}</span>
              </h3>
              <ul className="space-y-3">
                {c.eligible.map((e) => (
                  <li key={e} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ef-accent shrink-0 mt-0.5" />
                    <span className="text-ef-text-primary">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-surface">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-balance">
              {c.calcTitle}
              <span className="text-ef-accent italic font-light">{c.calcAccent}</span>
            </h2>
            <div className="mt-8 card bg-ef-bg">
              <label htmlFor="det-amt" className="label-ef block mb-2">
                {c.calcLabel}
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="det-amt"
                  type="number"
                  min={0}
                  step={500}
                  value={amount}
                  onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))}
                  className="input-ef flex-1"
                  placeholder={c.calcPlaceholder}
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPercentage(36)}
                    className={`px-4 py-3 rounded-full text-sm font-semibold transition-colors ${
                      percentage === 36
                        ? "bg-ef-accent text-white"
                        : "bg-ef-surface border border-ef-border-subtle text-ef-text-primary"
                    }`}
                  >
                    36%
                  </button>
                  <button
                    type="button"
                    onClick={() => setPercentage(50)}
                    className={`px-4 py-3 rounded-full text-sm font-semibold transition-colors ${
                      percentage === 50
                        ? "bg-ef-accent text-white"
                        : "bg-ef-surface border border-ef-border-subtle text-ef-text-primary"
                    }`}
                  >
                    50%
                  </button>
                </div>
              </div>
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-ef-accent-subtle border border-ef-accent/20">
                <div className="flex items-center gap-2 text-sm text-ef-text-primary mb-2">
                  <Calculator className="w-4 h-4 text-ef-accent" />
                  {percentage === 36 ? c.calcResult36 : c.calcResult50}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <p className="text-3xl sm:text-4xl font-bold text-ef-accent">
                    € {savings.toLocaleString("it-IT", { maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-sm text-ef-text-secondary">
                    {c.calcSave} {percentage}% su € {amount.toLocaleString("it-IT")}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-ef-text-muted">
                *Calcolo indicativo. Per una consulenza personalizzata contattaci: le detrazioni
                effettive dipendono dalla situazione fiscale e dalle normative vigenti.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-bg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-balance">
              {c.compassTitle}
              <span className="text-ef-accent italic font-light">{c.compassAccent}</span>
            </h2>
            <p className="lead mt-5 text-pretty">{c.compassBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["24 mesi", "36 mesi", "48 mesi"].map((m) => (
                <span
                  key={m}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-ef-surface border border-ef-border-subtle text-sm font-semibold"
                >
                  Compass {m}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-surface">
        <Container>
          <FAQ items={c.faq} />
        </Container>
      </Section>

      <Section bg="bg-ef-surface-dark text-ef-text-on-dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <Eyebrow>Parla con noi</Eyebrow>
              <H2 className="mt-4 text-ef-text-on-dark">
                Richiedi informazioni <span className="text-ef-accent italic font-light">gratuite</span>
              </H2>
              <p className="mt-5 text-white/80 text-lg">
                Ti guidiamo nella scelta della soluzione migliore e sulle detrazioni fiscali applicabili.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <WhatsAppButton phone={site.whatsapp} message="Ciao, vorrei informazioni sulle detrazioni fiscali" />
                <a href={`tel:${site.phoneTel}`} className="btn-outline-white">
                  <Phone className="w-4 h-4" /> {site.phone}
                </a>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-ef-text-primary shadow-xl">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
