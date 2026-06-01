import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Phone,
  Award,
  Clock,
} from "lucide-react";
import { site, hero, products, turnkey, deductionBanner } from "@/lib/content";
import { Container, Section, Eyebrow, H2 } from "@/components/ui";
import {
  AuthoritySection,
  CtaSection,
  DeductionBannerSection,
  FeaturedProjectsSection,
  ProcessSection,
  Testimonials,
} from "@/components/Sections";

const productIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  DoorOpen: require("lucide-react").DoorOpen,
  Grid3x3: require("lucide-react").Grid3x3,
  Fence: require("lucide-react").Fence,
  TrendingUp: require("lucide-react").TrendingUp,
  Car: require("lucide-react").Car,
  Settings: require("lucide-react").Settings,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <TurnkeySection />
      <AuthoritySection />
      <ProcessSection />
      <FeaturedProjectsSection />
      <DeductionBannerSection />
      <Testimonials />
      <CtaSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ef-bg via-ef-bg to-ef-bg-secondary" />
      <div className="absolute -top-20 right-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-ef-accent-subtle/60 blur-3xl -z-10" />
      <Container>
        <div className="max-w-3xl mx-auto text-center relative">
          <Eyebrow>{hero.badge}</Eyebrow>
          <h1 className="heading-1 mt-6 text-balance">
            {hero.headlineLine1}
            <br className="hidden sm:block" />
            <span className="text-ef-accent italic font-light">{hero.headlineLine2Accent}</span>
            {hero.headlineLine2Post}
          </h1>
          <p className="lead mt-6 text-pretty">{hero.subheadline}</p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contatti" className="btn-primary w-full sm:w-auto text-base">
              {hero.ctaPrimary} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/lavorazioni" className="btn-secondary w-full sm:w-auto">
              {hero.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
          <Stat icon={Award} text={hero.stat1} />
          <Stat icon={Shield} text={hero.stat2} />
          <Stat icon={Clock} text={hero.stat3} />
        </div>
      </Container>
    </section>
  );
}

function Stat({ icon: Icon, text }: { icon: React.ComponentType<{ className?: string }>; text: string }) {
  return (
    <div className="flex items-center justify-center gap-3 bg-ef-surface/80 backdrop-blur-sm border border-ef-border-subtle rounded-2xl px-4 py-3 text-sm sm:text-base font-medium text-ef-surface-dark">
      <Icon className="w-5 h-5 text-ef-accent shrink-0" />
      <span className="text-center sm:text-left">{text}</span>
    </div>
  );
}

function ProductsSection() {
  return (
    <Section bg="bg-ef-surface">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Eyebrow>{products.preLabel}</Eyebrow>
          <H2 className="mt-4" pre={products.headlinePre} accent={products.headlineAccent} />
          <p className="lead mt-5">{products.subheadline}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.items.map((p) => {
            const Icon = productIcons[p.icon];
            return (
              <Link
                key={p.name}
                href={p.link}
                className="group block card-hover overflow-hidden p-0 h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ef-bg-secondary">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {Icon && (
                      <span className="w-10 h-10 rounded-xl bg-ef-accent-subtle flex items-center justify-center">
                        <Icon className="w-5 h-5 text-ef-accent" />
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-ef-surface-dark">{p.name}</h3>
                  </div>
                  <p className="text-ef-text-secondary leading-relaxed text-sm sm:text-base">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ef-accent group-hover:gap-2.5 transition-all">
                    {products.learnMore} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link href="/lavorazioni" className="btn-secondary">
            {products.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

function TurnkeySection() {
  return (
    <Section bg="bg-ef-bg">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Eyebrow>{turnkey.preLabel}</Eyebrow>
          <H2 className="mt-4" pre={turnkey.headlinePre} accent={turnkey.headlineAccent} post={turnkey.headlinePost} />
          <p className="lead mt-5">{turnkey.subheadline}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {turnkey.cards.map((c) => (
            <div key={c.title} className="card-hover overflow-hidden p-0">
              <div className="relative aspect-[4/3] overflow-hidden bg-ef-bg-secondary">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-bold text-ef-surface-dark mb-3">{c.title}</h3>
                <p className="text-ef-text-secondary leading-relaxed text-sm sm:text-base">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-base sm:text-lg italic text-ef-text-secondary mt-10 sm:mt-12 max-w-2xl mx-auto">
          {turnkey.closing}
        </p>
      </Container>
    </Section>
  );
}
