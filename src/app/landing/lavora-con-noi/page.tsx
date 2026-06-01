import Link from "next/link";
import Image from "next/image";
import {
  Briefcase,
  Wrench,
  HardHat,
  ArrowRight,
} from "lucide-react";
import { site, landingLavoraConNoi, footer } from "@/lib/content";
import { Container, Section, Eyebrow } from "@/components/ui";
import WorkForm from "./WorkForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lavora con Eurofabbro — Bologna, Modena, Ferrara",
  description:
    "Sei un rivenditore, un installatore o cerchi lavoro nel ferro lavorato? Unisciti alla rete Eurofabbro.",
  robots: { index: true, follow: true },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  Wrench,
  HardHat,
};

export default function LandingLavoraConNoiPage() {
  const l = landingLavoraConNoi;
  return (
    <div className="min-h-screen bg-ef-bg text-ef-text-primary font-sans">
      <header className="sticky top-0 z-50 w-full bg-ef-bg/95 backdrop-blur-md border-b border-ef-border-subtle">
        <div className="container-ef h-16 flex items-center justify-center">
          <Image
            src={site.logoLanding}
            alt="Ferioli Sergio SRL"
            width={160}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </div>
      </header>

      <section className="pt-12 sm:pt-16 pb-16 sm:pb-20 px-4">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Eyebrow>{l.badge}</Eyebrow>
            <h1 className="heading-1 mt-6 text-balance">
              {l.hero.headline}
              <br className="hidden md:block" />
              <span className="text-ef-accent italic font-light">{l.hero.headlineAccent}</span>
            </h1>
            <p className="lead mt-6 sm:mt-8 max-w-2xl mx-auto">{l.hero.subheadline}</p>
            <div className="mt-8 sm:mt-10">
              <a href="#contact-form" className="btn-primary w-full sm:w-auto text-base sm:text-lg py-4 px-6 sm:px-8">
                {l.hero.cta}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section bg="bg-ef-surface">
        <Container>
          <h2 className="heading-2 text-center mb-10 sm:mb-14">{l.pathsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {l.paths.map((p) => {
              const Icon = iconMap[p.icon] ?? Briefcase;
              return (
                <div
                  key={p.title}
                  className="bg-ef-bg p-6 sm:p-8 rounded-3xl border border-ef-border-subtle flex flex-col items-center text-center md:items-start md:text-left"
                >
                  <div className="w-14 h-14 rounded-2xl bg-ef-accent-subtle flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-ef-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-ef-surface-dark mb-3">{p.title}</h3>
                  <p className="text-ef-text-secondary leading-relaxed text-sm sm:text-base">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-surface-dark text-ef-text-on-dark">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="heading-2 text-ef-text-on-dark text-balance">{l.whyTitle}</h2>
              <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
                {l.whyItems.map((w) => (
                  <li key={w} className="flex items-start gap-3 sm:gap-4">
                    <span className="mt-1 bg-ef-accent/20 p-1 rounded-full shrink-0">
                      <svg className="w-5 h-5 text-ef-accent" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-base sm:text-lg leading-relaxed opacity-90">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10">
              <p className="text-lg sm:text-xl font-medium leading-relaxed italic opacity-90 text-center md:text-left">
                {l.quote}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <section id="contact-form" className="py-16 sm:py-24 px-4 bg-ef-bg scroll-mt-nav">
        <Container>
          <div className="container-ef max-w-3xl">
            <div className="bg-ef-surface rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-ef-border-subtle">
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-ef-surface-dark mb-3">{l.formTitle}</h2>
                <p className="text-ef-text-secondary text-base sm:text-lg">{l.formSubtitle}</p>
              </div>
              <WorkForm l={l} />
            </div>
          </div>
        </Container>
      </section>

      <footer className="bg-ef-surface-dark text-ef-text-on-dark py-10 sm:py-12 px-4 border-t border-white/10">
        <div className="container-ef text-center text-ef-text-on-dark/70 text-sm space-y-3">
          <div>
            <span className="font-bold text-ef-text-on-dark">{site.company}</span>
            <span className="mx-2 opacity-50">|</span>
            <span>{footer.piva}</span>
            <br className="sm:hidden" />
            <span className="mt-2 sm:mt-0 inline-block sm:ml-2">{footer.address}</span>
          </div>
          <div>
            <Link href="/" className="hover:text-ef-accent transition-colors inline-flex items-center gap-1">
              Torna al sito principale <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
