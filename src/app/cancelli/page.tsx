import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Award, Phone } from "lucide-react";
import { site, cancelliContent } from "@/lib/content";
import { Container, Section, Eyebrow, H1, H2 } from "@/components/ui";
import { FAQ } from "@/components/FAQ";
import { ContactForm, WhatsAppButton } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancelli su misura e pronta consegna — Carpenteria certificata",
  description:
    "Cancelli in ferro su misura a Bologna, Modena e Ferrara. Scorrevoli, a battente, pedonali, autoportanti. Produzione interna, marcatura CE, pronta consegna.",
};

export default function CancelliPage() {
  const c = cancelliContent;
  return (
    <>
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 px-4 bg-gradient-to-b from-ef-bg to-ef-bg-secondary">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Cancelli · Bologna, Modena, Ferrara</Eyebrow>
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
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <H2 pre={c.variantsTitle} accent={c.variantsTitleAccent} post={c.variantsTitlePost} />
          </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Eyebrow>Vantaggi</Eyebrow>
              <H2 className="mt-4" pre={c.whyIronTitle} accent={c.whyIronAccent} />
              <ul className="mt-6 space-y-3 sm:space-y-4">
                {c.whyIronBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ef-accent shrink-0 mt-0.5" />
                    <span className="text-ef-text-primary text-base sm:text-lg">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-ef-accent-subtle p-6 sm:p-10 border border-ef-border-subtle">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-7 h-7 text-ef-accent" />
                <h3 className="text-xl sm:text-2xl font-bold text-ef-surface-dark">
                  {c.prontaConsegnaTitle}
                  <span className="text-ef-accent italic">{c.prontaConsegnaAccent}</span>
                </h3>
              </div>
              <p className="text-ef-text-primary leading-relaxed">{c.prontaConsegnaBody}</p>
            </div>
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
                <WhatsAppButton phone={site.whatsapp} message="Ciao, vorrei un preventivo per un cancello" />
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
