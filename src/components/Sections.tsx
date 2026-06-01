import Link from "next/link";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials, featuredProjects, processSteps, authority, site } from "@/lib/content";
import { Container, Section, Eyebrow, H2 } from "@/components/ui";
import {
  MessageCircle,
  Ruler,
  CheckCircle,
  Award,
  Phone,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  Ruler,
  CheckCircle,
};

export function Testimonials() {
  return (
    <Section bg="bg-ef-bg">
      <Container>
        <div className="text-center mb-12 sm:mb-16">
          <Eyebrow>{testimonials.preLabel}</Eyebrow>
          <H2 className="mt-4" pre={testimonials.headlinePre} accent={testimonials.headlineAccent} post={testimonials.headlinePost} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.items.map((t, i) => (
            <div key={i} className="card-hover relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-ef-accent-subtle" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-ef-accent text-ef-accent" />
                ))}
              </div>
              <p className="text-ef-text-primary leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-bold text-ef-surface-dark">{t.name}</p>
                <p className="text-sm text-ef-text-muted">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function FeaturedProjectsSection() {
  return (
    <Section bg="bg-ef-surface">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <Eyebrow>{featuredProjects.preLabel}</Eyebrow>
            <H2 className="mt-4" pre={featuredProjects.headlinePre} accent={featuredProjects.headlineAccent} post={featuredProjects.headlinePost} />
          </div>
          <Link href="/realizzazioni" className="hidden sm:inline-flex btn-secondary">
            {featuredProjects.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredProjects.projects.map((p) => (
            <Link
              key={p.name}
              href={p.link}
              className="group block relative aspect-[4/3] rounded-2xl overflow-hidden bg-ef-bg-secondary"
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ef-surface-dark/80 via-ef-surface-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="font-bold text-lg leading-tight">{p.name}</p>
                <p className="text-sm text-white/80 mt-0.5">{p.location}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="sm:hidden mt-8 text-center">
          <Link href="/realizzazioni" className="btn-secondary">
            {featuredProjects.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export function ProcessSection() {
  return (
    <Section bg="bg-ef-bg">
      <Container>
        <div className="text-center mb-12 sm:mb-16">
          <Eyebrow>{processSteps.preLabel}</Eyebrow>
          <H2 className="mt-4" pre={processSteps.headlinePre} accent={processSteps.headlineAccent} post={processSteps.headlinePost} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {processSteps.steps.map((s, i) => {
            const Icon = iconMap[s.icon] ?? MessageCircle;
            return (
              <div key={i} className="relative">
                <div className="card text-center md:text-left">
                  <div className="w-14 h-14 rounded-2xl bg-ef-accent-subtle flex items-center justify-center mb-5 mx-auto md:mx-0">
                    <Icon className="w-7 h-7 text-ef-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-ef-surface-dark mb-2">{s.title}</h3>
                  <p className="text-ef-text-secondary leading-relaxed">{s.desc}</p>
                </div>
                {i < processSteps.steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-ef-accent-subtle -translate-y-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export function AuthoritySection() {
  return (
    <Section bg="bg-ef-surface-dark text-ef-text-on-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Eyebrow>{authority.preLabel}</Eyebrow>
            <H2 className="mt-4 text-ef-text-on-dark" pre={authority.headlinePre} accent={authority.headlineAccent} post={authority.headlinePost} />
            <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed">{authority.body}</p>
            <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-semibold">
              <Award className="w-4 h-4 text-ef-accent" />
              {authority.certBadge}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {authority.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-ef-accent mb-2">{s.number}</p>
                <p className="text-xs sm:text-sm text-white/70 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function DeductionBannerSection() {
  return (
    <Section bg="bg-ef-bg-secondary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <H2 pre="Risparmia fino al " accent="50%" post=" con le detrazioni fiscali" />
            <p className="mt-5 text-base sm:text-lg text-ef-text-secondary leading-relaxed">
              Il Bonus Sicurezza ti permette di detrarre il 36% delle spese per cancelli, inferriate e
              sistemi di sicurezza. Con le detrazioni fiscali si arriva al 50%. Finanziamento a tasso
              agevolato con Compass, rate da 24 a 48 mesi.
            </p>
            <Link href="/detrazioni" className="btn-primary mt-6">
              Scopri come risparmiare <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-2xl bg-ef-surface border border-ef-border-subtle p-5 sm:p-6 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-ef-accent mb-1">36%</p>
              <p className="text-sm font-medium">Bonus Sicurezza</p>
            </div>
            <div className="rounded-2xl bg-ef-surface border border-ef-border-subtle p-5 sm:p-6 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-ef-accent mb-1">50%</p>
              <p className="text-sm font-medium">Detrazione IRPEF</p>
            </div>
            <div className="rounded-2xl bg-ef-surface border border-ef-border-subtle p-5 sm:p-6 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-ef-accent mb-1">24-48</p>
              <p className="text-sm font-medium">Mesi Compass</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function CtaSection() {
  return (
    <Section bg="bg-ef-bg">
      <Container>
        <div className="rounded-3xl bg-ef-surface border border-ef-border-subtle p-8 sm:p-12 lg:p-16 text-center max-w-5xl mx-auto">
          <Eyebrow>Inizia oggi</Eyebrow>
          <H2 className="mt-4">Richiedi il tuo preventivo <span className="text-ef-accent italic font-light">gratuito</span></H2>
          <p className="lead mt-5 max-w-2xl mx-auto">
            Sopralluogo gratuito, preventivo senza impegno. Rispondiamo entro 24 ore.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/contatti" className="btn-primary w-full sm:w-auto">
              Compila il form <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              Scrivici su WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ef-text-muted">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-ef-accent" /> Risposta entro 24 ore
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-ef-accent" /> Sopralluogo gratuito
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-ef-accent" /> Preventivo senza impegno
            </span>
          </div>
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-ef-surface-dark hover:text-ef-accent transition-colors"
          >
            <Phone className="w-4 h-4 text-ef-accent" /> {site.phone}
          </a>
        </div>
      </Container>
    </Section>
  );
}
