import Link from "next/link";
import { Award, ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { site, percheNoiContent, authority } from "@/lib/content";
import { Container, Section, Eyebrow, H1, H2 } from "@/components/ui";
import { Testimonials } from "@/components/Sections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perché noi — 49 anni di carpenteria metallica certificata",
  description:
    "Ferioli Sergio SRL: 49 anni di esperienza, certificati Istituto Giordano, primi in Italia per cancelli marcati CE. Produzione interna a Crevalcore (BO).",
};

export default function PercheNoiPage() {
  const c = percheNoiContent;
  return (
    <>
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 px-4 bg-gradient-to-b from-ef-bg to-ef-bg-secondary">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Chi siamo</Eyebrow>
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
              {c.storyTitle}
              <span className="text-ef-accent italic font-light">{c.storyAccent}</span>
            </h2>
            <p className="lead mt-5 text-pretty">{c.storyBody}</p>
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-surface">
        <Container>
          <div className="max-w-4xl mx-auto bg-ef-surface-dark text-ef-text-on-dark rounded-3xl p-8 sm:p-12 border border-ef-border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <Award className="w-7 h-7 text-ef-accent" />
              <h2 className="heading-2 text-ef-text-on-dark text-balance">
                {c.certTitle}
                <span className="text-ef-accent italic font-light">{c.certAccent}</span>
              </h2>
            </div>
            <p className="text-white/80 leading-relaxed text-base sm:text-lg">{c.certBody}</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {authority.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 text-center"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-ef-accent mb-1">{s.number}</p>
                  <p className="text-xs sm:text-sm text-white/70 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-bg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-balance">
              {c.guaranteeTitle}
              <span className="text-ef-accent italic font-light">{c.guaranteeAccent}</span>
            </h2>
            <p className="lead mt-5 text-pretty">{c.guaranteeBody}</p>
            <div className="mt-8 flex items-start gap-3 bg-ef-accent-subtle rounded-2xl p-5 sm:p-6 border border-ef-accent/20">
              <ShieldCheck className="w-6 h-6 text-ef-accent shrink-0 mt-0.5" />
              <p className="text-ef-text-primary text-base sm:text-lg">
                Ogni installazione è accompagnata da documentazione tecnica e certificazione Istituto
                Giordano.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Testimonials />
    </>
  );
}
