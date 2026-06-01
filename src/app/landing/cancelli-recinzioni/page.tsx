import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Phone,
  Shield,
  CheckCircle,
  ArrowRight,
  Move,
  DoorOpen,
  Fence,
  Settings,
  Grid3x3,
  Car,
  Star,
} from "lucide-react";
import { site, landingCancelliRecinzioni, footer } from "@/lib/content";
import { Container, Section } from "@/components/ui";
import { FAQ } from "@/components/FAQ";
import LandingForm from "./LandingForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancelli e recinzioni su misura — Bologna, Modena, Ferrara",
  description:
    "Cancelli, recinzioni e lavori in ferro su misura. Produzione e installazione diretta. Certificazione CE. Preventivo gratuito in 24 ore.",
  robots: { index: true, follow: true },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Move,
  DoorOpen,
  Fence,
  Settings,
  Grid3x3,
  Car,
};

export default function LandingCancelliRecinzioniPage() {
  const l = landingCancelliRecinzioni;
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

      <section className="relative pt-12 pb-16 sm:pb-20 px-4">
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="heading-1 text-balance">
              {l.hero.headline}
              <br className="hidden md:block" />
              <span className="text-ef-accent italic">{l.hero.headlineAccent}</span>
            </h1>
            <p className="lead mt-6 sm:mt-8 max-w-2xl mx-auto">{l.hero.subheadline}</p>
            <div className="mt-8 sm:mt-10 flex flex-col items-center gap-6">
              <a href="#preventivo-form" className="btn-primary w-full sm:w-auto text-base sm:text-lg py-4 px-6 sm:px-8">
                {l.hero.cta}
              </a>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm font-medium text-ef-text-muted">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-ef-accent" /> CE Certified
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-ef-accent" /> Est. 1977
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-ef-accent" /> Bologna &amp; Modena
                </span>
              </div>
            </div>
          </div>
          <div className="container-ef max-w-6xl mt-12 sm:mt-16 relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video sm:aspect-[21/9] bg-ef-bg-secondary relative">
              <Image
                src={l.heroImage}
                alt="Cancelli su misura"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      <Section bg="bg-ef-surface">
        <Container>
          <div className="container-ef max-w-5xl grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-ef-surface-dark mb-4 sm:mb-6 leading-snug">
                {l.painTitle}
              </h2>
            </div>
            <div className="border-l-4 border-ef-accent pl-6">
              <p className="text-lg text-ef-text-secondary leading-relaxed">{l.painBody}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-bg">
        <Container>
          <h2 className="heading-2 text-center mb-10 sm:mb-14">{l.servicesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {l.services.map((s) => {
              const Icon = iconMap[s.icon] ?? Fence;
              return (
                <div
                  key={s.title}
                  className="bg-ef-surface p-6 sm:p-7 rounded-2xl border border-ef-border-subtle flex flex-col items-center text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-ef-accent-subtle flex items-center justify-center mb-4 sm:mb-5 text-ef-accent">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-ef-surface-dark">{s.title}</h3>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-surface-dark text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6 sm:mb-8 text-yellow-400">
              {Array.from({ length: l.testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed mb-10 sm:mb-12 italic opacity-90">
              &ldquo;{l.testimonial.quote}&rdquo;
            </blockquote>
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center border-t border-white/20 pt-10 sm:pt-12">
              {l.trust.map((t) => (
                <div key={t}>
                  <Shield className="w-9 h-9 sm:w-10 sm:h-10 mx-auto text-ef-accent mb-3 sm:mb-4" />
                  <p className="font-medium text-base sm:text-lg">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section id="preventivo-form" className="py-16 sm:py-24 px-4 bg-ef-bg-secondary scroll-mt-nav">
        <Container>
          <div className="container-ef max-w-3xl">
            <div className="bg-ef-surface p-6 sm:p-10 md:p-12 rounded-3xl shadow-xl">
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-ef-surface-dark mb-3">{l.formTitle}</h2>
                <p className="text-ef-text-secondary">{l.formSubtitle}</p>
              </div>
              <LandingForm
                successTitle={l.formSuccess}
                successBody={l.formSuccessBody}
                nameLabel={l.formName}
                phoneLabel={l.formPhone}
                messageLabel={l.formMessage}
                privacyLabel={l.formPrivacy}
                submitLabel={l.formSubmit}
                submittingLabel={l.formSubmitting}
              />
              <div className="text-center pt-4">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex items-center gap-2 font-semibold text-ef-surface-dark hover:text-ef-accent transition-colors"
                >
                  <Phone className="w-4 h-4" /> {footer.phone}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section bg="bg-ef-bg">
        <Container>
          <FAQ items={l.faq} title={l.faqTitle} />
        </Container>
      </Section>

      <footer className="bg-ef-surface-dark text-ef-text-on-dark py-10 sm:py-12 px-4 border-t border-white/10">
        <div className="container-ef text-center space-y-3">
          <p className="text-lg sm:text-xl font-bold">{site.company}</p>
          <p className="text-white/70 text-sm">
            {footer.piva}
            <br />
            {footer.address}
          </p>
          <div className="pt-6">
            <Link href="/" className="text-sm text-ef-accent hover:underline inline-flex items-center gap-1">
              Torna al sito principale <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
