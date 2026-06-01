import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Shield } from "lucide-react";
import { site, inferriateContent } from "@/lib/content";
import { Container, Section, Eyebrow, H1, H2 } from "@/components/ui";
import { FAQ } from "@/components/FAQ";
import { ContactForm, WhatsAppButton } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inferriate su misura per sicurezza ed estetica",
  description:
    "Inferriate in ferro su misura a Bologna, Modena e Ferrara. Fisse, apribili, snodabili, a due ante. Produzione interna, detraibili fiscalmente.",
};

export default function InferriatePage() {
  const c = inferriateContent;
  return (
    <>
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 px-4 bg-gradient-to-b from-ef-bg to-ef-bg-secondary">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Inferriate · Bologna, Modena, Ferrara</Eyebrow>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {c.variants.map((v) => (
              <div key={v.name} className="card">
                <h3 className="text-xl sm:text-2xl font-bold text-ef-surface-dark mb-3">{v.name}</h3>
                <p className="text-ef-text-secondary leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-surface">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <Eyebrow>Perché sceglierci</Eyebrow>
            <H2 className="mt-4" pre={c.benefitsTitle} accent={c.benefitsAccent} post={c.benefitsPost} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {c.benefits.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 bg-ef-bg rounded-2xl p-5 border border-ef-border-subtle"
              >
                <Shield className="w-5 h-5 text-ef-accent shrink-0 mt-0.5" />
                <span className="text-ef-text-primary font-medium">{b}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-bg">
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
                Richiedi il tuo preventivo <span className="text-ef-accent italic font-light">gratuito</span>
              </H2>
              <p className="mt-5 text-white/80 text-lg">
                Sopralluogo gratuito, preventivo senza impegno. Rispondiamo entro 24 ore.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <WhatsAppButton phone={site.whatsapp} message="Ciao, vorrei un preventivo per inferriate" />
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
