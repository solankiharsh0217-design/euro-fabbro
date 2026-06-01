import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { site, recinzioniContent } from "@/lib/content";
import { Container, Section, Eyebrow, H1, H2 } from "@/components/ui";
import { ContactForm, WhatsAppButton } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recinzioni in ferro su misura",
  description:
    "Recinzioni in ferro su misura a Bologna, Modena e Ferrara. Moduli in doghe e reti metalliche. Produzione interna, installazione diretta.",
};

export default function RecinzioniPage() {
  const c = recinzioniContent;
  return (
    <>
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 px-4 bg-gradient-to-b from-ef-bg to-ef-bg-secondary">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Recinzioni · Bologna, Modena, Ferrara</Eyebrow>
            <h1 className="heading-1 mt-4 text-balance">
              {c.hero.headline}
              <span className="text-ef-accent italic font-light">{c.hero.headlineAccent}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <div className="card">
              <h3 className="text-2xl sm:text-3xl font-bold text-ef-surface-dark mb-4">
                {c.ironTitle}
                <span className="text-ef-accent italic">{c.ironAccent}</span>
              </h3>
              <p className="text-ef-text-secondary leading-relaxed text-base sm:text-lg">{c.ironBody}</p>
            </div>
            <div className="card bg-ef-accent-subtle border-ef-accent/20">
              <h3 className="text-2xl sm:text-3xl font-bold text-ef-surface-dark mb-4">
                {c.modularTitle}
                <span className="text-ef-accent italic">{c.modularAccent}</span>
              </h3>
              <p className="text-ef-text-primary leading-relaxed text-base sm:text-lg">{c.modularBody}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-surface">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Eyebrow>Vantaggi</Eyebrow>
            </div>
            <ul className="space-y-4 sm:space-y-5">
              {c.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-ef-accent shrink-0 mt-0.5" />
                  <span className="text-ef-text-primary text-base sm:text-lg">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-surface-dark text-ef-text-on-dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <Eyebrow>Parla con noi</Eyebrow>
              <H2 className="mt-4 text-ef-text-on-dark">
                Richiedi il tuo preventivo <span className="text-ef-accent italic font-light">gratuito</span>
              </H2>
              <p className="mt-5 text-white/80 text-lg">
                Sopralluogo gratuito, preventivo senza impegno. Rispondiamo entro 24 ore.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <WhatsAppButton phone={site.whatsapp} message="Ciao, vorrei un preventivo per recinzioni" />
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
