import Link from "next/link";
import { ArrowRight, Phone, Smartphone, KeyRound, Cpu, CheckCircle } from "lucide-react";
import { site, automazioneContent } from "@/lib/content";
import { Container, Section, Eyebrow, H1, H2 } from "@/components/ui";
import { ContactForm, WhatsAppButton } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistemi di automazione per cancelli",
  description:
    "Automazione cancelli a Bologna, Modena e Ferrara. Telecomando, smartphone, domotica. Installazione professionale e assistenza post-vendita.",
};

const controlIcons = [Smartphone, KeyRound, Cpu, null];

export default function AutomazionePage() {
  const c = automazioneContent;
  return (
    <>
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 px-4 bg-gradient-to-b from-ef-bg to-ef-bg-secondary">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Automazione · Bologna, Modena, Ferrara</Eyebrow>
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
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-balance">
              {c.howTitle}
              <span className="text-ef-accent italic font-light">{c.howAccent}</span>
            </h2>
            <p className="lead mt-5 text-pretty">{c.howBody}</p>
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
            {c.types.map((t) => (
              <div key={t.name} className="card">
                <h3 className="text-xl sm:text-2xl font-bold text-ef-surface-dark mb-3">{t.name}</h3>
                <p className="text-ef-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-bg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Eyebrow>Comandi</Eyebrow>
              <h2 className="heading-2 mt-4">Sistemi di comando disponibili</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {c.controls.map((ctrl, i) => {
                const Icon = controlIcons[i] ?? Cpu;
                return (
                  <div
                    key={ctrl}
                    className="flex items-center gap-3 bg-ef-surface rounded-2xl p-4 sm:p-5 border border-ef-border-subtle"
                  >
                    <span className="w-10 h-10 rounded-xl bg-ef-accent-subtle flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-ef-accent" />
                    </span>
                    <span className="font-medium text-ef-text-primary">{ctrl}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-surface">
        <Container>
          <div className="max-w-3xl mx-auto bg-ef-accent-subtle rounded-3xl p-8 sm:p-12 border border-ef-accent/20">
            <h2 className="heading-2 text-balance">
              {c.serviceTitle}
              <span className="text-ef-accent italic font-light">{c.serviceAccent}</span>
            </h2>
            <p className="lead mt-5 text-pretty">{c.serviceBody}</p>
            <ul className="mt-6 space-y-2">
              {["Consulenza tecnica", "Scelta del sistema più adatto", "Installazione professionale", "Verifiche di sicurezza", "Assistenza post installazione"].map((x) => (
                <li key={x} className="flex items-center gap-2 text-ef-text-primary">
                  <CheckCircle className="w-5 h-5 text-ef-accent" /> {x}
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
                <WhatsAppButton phone={site.whatsapp} message="Ciao, vorrei un preventivo per automazione cancelli" />
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
