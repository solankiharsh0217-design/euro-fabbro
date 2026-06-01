import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { site, carportContent } from "@/lib/content";
import { Container, Section, Eyebrow, H1, H2 } from "@/components/ui";
import { FAQ } from "@/components/FAQ";
import { ContactForm, WhatsAppButton } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carport e tettoie in ferro su misura",
  description:
    "Carport, tettoie e pensiline in ferro su misura a Bologna, Modena e Ferrara. Strutture autoportanti, zincate e verniciabili.",
};

export default function CarportPage() {
  const c = carportContent;
  return (
    <>
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 px-4 bg-gradient-to-b from-ef-bg to-ef-bg-secondary">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Carport · Bologna, Modena, Ferrara</Eyebrow>
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
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-balance">
              {c.introTitle}
              <span className="text-ef-accent italic font-light">{c.introAccent}</span>
            </h2>
            <p className="lead mt-5 text-pretty">{c.introBody}</p>
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-surface">
        <Container>
          <div className="max-w-3xl mx-auto mb-10">
            <Eyebrow>Vantaggi</Eyebrow>
            <h2 className="heading-2 mt-4 text-balance">
              {c.featuresTitle}
              <span className="text-ef-accent italic font-light">{c.featuresAccent}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {c.features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 bg-ef-bg rounded-2xl p-4 sm:p-5 border border-ef-border-subtle"
              >
                <CheckCircle className="w-5 h-5 text-ef-accent shrink-0 mt-0.5" />
                <span className="text-ef-text-primary text-sm sm:text-base">{f}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-bg">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="heading-2 text-balance">
              {c.typesTitle}
              <span className="text-ef-accent italic font-light">{c.typesAccent}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {c.types.map((t) => (
              <div key={t.name} className="card overflow-hidden p-0">
                <div className="relative aspect-[16/9] overflow-hidden bg-ef-bg-secondary">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-ef-surface-dark mb-2">{t.name}</h3>
                  <p className="text-ef-text-secondary leading-relaxed text-sm sm:text-base">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-surface">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="heading-2 text-balance">
              {c.materialsTitle}
              <span className="text-ef-accent italic font-light">{c.materialsAccent}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
            {c.materials.map((m) => (
              <div key={m.name} className="card">
                <h3 className="text-lg sm:text-xl font-bold text-ef-surface-dark mb-2">{m.name}</h3>
                <p className="text-ef-text-secondary leading-relaxed text-sm sm:text-base">{m.desc}</p>
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
                <WhatsAppButton phone={site.whatsapp} message="Ciao, vorrei un preventivo per un carport" />
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
