import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { site, contattiContent, footer } from "@/lib/content";
import { Container, Section, Eyebrow, H1, H2 } from "@/components/ui";
import { ContactForm, WhatsAppButton } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti — Parla con noi",
  description:
    "Contatta Ferioli Sergio SRL. Telefono, email, WhatsApp. Sopralluogo gratuito, preventivo entro 24 ore. Via Galileo Galilei 140, Palata Pepoli di Crevalcore (BO).",
};

export default function ContattiPage() {
  const c = contattiContent;
  return (
    <>
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 px-4 bg-gradient-to-b from-ef-bg to-ef-bg-secondary">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Contatti · Bologna, Modena, Ferrara</Eyebrow>
            <h1 className="heading-1 mt-4 text-balance">
              {c.headlinePre}
              <span className="text-ef-accent italic font-light">{c.headlineAccent}</span>
              {c.headlinePost}
            </h1>
            <p className="lead mt-5 text-pretty">
              Scrivici, chiamaci o compila il form: ti rispondiamo entro 24 ore con un preventivo
              gratuito e senza impegno.
            </p>
          </div>
        </Container>
      </section>

      <Section bg="bg-ef-bg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="heading-2 mb-6 sm:mb-8">{c.processTitle}</h2>
              <ol className="space-y-4 sm:space-y-5">
                {c.processSteps.map((s, i) => (
                  <li key={s} className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-ef-accent text-white font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-ef-surface-dark text-base sm:text-lg">{s}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ContactCard
                icon={Phone}
                title="Telefono"
                primary={footer.phone}
                href={`tel:${site.phoneTel}`}
                secondary={footer.mobile}
                secondaryHref={`tel:${site.mobileTel}`}
              />
              <ContactCard
                icon={MessageCircle}
                title="WhatsApp"
                primary={footer.mobile}
                href={`https://wa.me/${site.whatsapp}`}
                external
                accent
              />
              <ContactCard
                icon={Mail}
                title="Email"
                primary={footer.email}
                href={`mailto:${footer.email}`}
              />
              <ContactCard
                icon={MapPin}
                title="Sede"
                primary="Palata Pepoli"
                secondary={footer.address}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="bg-ef-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="heading-2">
                Vieni a trovarci <span className="text-ef-accent italic font-light">nella nostra sede</span>
              </h2>
              <p className="lead mt-5 text-pretty">
                Mostriamo la gamma di cancelli in pronta consegna e i nostri lavori nel nostro
                laboratorio a Palata Pepoli di Crevalcore (BO).
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footer.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MapPin className="w-4 h-4" /> Apri in Google Maps
                </a>
                <WhatsAppButton phone={site.whatsapp} message="Ciao, vorrei venire a trovarvi" />
              </div>
              <div className="mt-8 aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden bg-ef-bg-secondary border border-ef-border-subtle">
                <iframe
                  title="Mappa sede Eurofabbro"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(footer.address)}&output=embed`}
                />
              </div>
            </div>
            <div>
              <h2 className="heading-2 mb-6">
                Scrivici <span className="text-ef-accent italic font-light">ora</span>
              </h2>
              <div className="bg-ef-bg rounded-3xl p-6 sm:p-8 border border-ef-border-subtle">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  primary,
  href,
  secondary,
  secondaryHref,
  external,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  primary: string;
  href?: string;
  secondary?: string;
  secondaryHref?: string;
  external?: boolean;
  accent?: boolean;
}) {
  const cardClass = `block card hover:shadow-md transition-shadow ${accent ? "bg-[#25D366]/10 border-[#25D366]/30" : ""}`;
  const content = (
    <>
      <div className={`w-10 h-10 rounded-xl ${accent ? "bg-[#25D366] text-white" : "bg-ef-accent-subtle text-ef-accent"} flex items-center justify-center mb-3`}>
        <Icon className="w-5 h-5" />
      </div>
      <p className="text-xs uppercase tracking-wider text-ef-text-muted font-semibold mb-1">{title}</p>
      <p className="font-bold text-ef-surface-dark break-words">{primary}</p>
      {secondary && <p className="text-sm text-ef-text-secondary mt-1">{secondary}</p>}
    </>
  );
  if (!href) return <div className={cardClass}>{content}</div>;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cardClass}
    >
      {content}
    </a>
  );
}
