import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { site, realizzazioniContent } from "@/lib/content";
import { Container, Section, Eyebrow, H1 } from "@/components/ui";
import { CtaSection } from "@/components/Sections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realizzazioni — Cancelli, inferriate, recinzioni e strutture",
  description:
    "Le nostre realizzazioni: cancelli, inferriate, recinzioni, scale, balaustre, arredi e dehor. Progetti su misura a Bologna, Modena e Ferrara.",
};

export default function RealizzazioniPage() {
  const c = realizzazioniContent;
  return (
    <>
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 px-4 bg-gradient-to-b from-ef-bg to-ef-bg-secondary">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Portfolio</Eyebrow>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {c.projects.map((p, i) => (
              <Link
                key={i}
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
                <div className="absolute inset-0 bg-gradient-to-t from-ef-surface-dark/85 via-ef-surface-dark/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-ef-accent text-white text-xs font-semibold tracking-wide">
                    {p.type}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="font-bold text-lg leading-tight">{p.name}</p>
                  <p className="text-sm text-white/80 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {p.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
