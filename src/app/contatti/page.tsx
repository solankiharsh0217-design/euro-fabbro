"use client";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { useT } from "@/components/LanguageProvider";
import { ContactForm } from "@/components/ContactForm";

export default function ContattiPage() {
  const { t, site } = useT();
  const c = t.contatti;
  return (
    <>
      <section
        style={{
          backgroundColor: "var(--color-surface-dark)",
          color: "var(--color-text-on-dark)",
          paddingTop: "var(--section-padding-y)",
          paddingBottom: "var(--section-padding-y)",
        }}
      >
        <div className="container-ef">
          <div className="max-w-3xl">
            <span className="label-eyebrow" style={{ color: "var(--color-accent)" }}>{t.nav.label.contatti}</span>
            <h1 className="text-hero mt-3" style={{ color: "#FFFFFF", fontWeight: 300 }}>
              {c.headlinePre}
              <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>{c.headlineAccent}</span>
            </h1>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bg)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-eyebrow">{t.pageLabels.process}</span>
            <h2 className="heading-2 mt-3">{c.processTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {c.processSteps.map((s, i) => (
              <div key={s} className="card text-center">
                <div
                  className="mx-auto mb-3 inline-flex items-center justify-center"
                  style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", backgroundColor: "var(--color-accent-subtle)" }}
                >
                  <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>{i + 1}</span>
                </div>
                <p className="font-medium" style={{ color: "var(--color-text-primary)" }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-surface)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}>
        <div className="container-ef">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="label-eyebrow">{t.pageLabels.reach}</span>
              <h2 className="heading-2 mt-3">Our details</h2>
              <div className="mt-6 space-y-4">
                <a href={`tel:${site.phoneTel}`} className="card flex items-center gap-3 hover:shadow-md">
                  <Phone size={20} style={{ color: "var(--color-accent)" }} />
                  <div>
                    <p className="text-body-sm" style={{ color: "var(--color-text-muted)" }}>Phone</p>
                    <p className="font-medium" style={{ color: "var(--color-text-primary)" }}>{site.phone}</p>
                  </div>
                </a>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-3 hover:shadow-md">
                  <MessageCircle size={20} style={{ color: "var(--color-accent)" }} />
                  <div>
                    <p className="text-body-sm" style={{ color: "var(--color-text-muted)" }}>WhatsApp</p>
                    <p className="font-medium" style={{ color: "var(--color-text-primary)" }}>{site.whatsappDisplay}</p>
                  </div>
                </a>
                <a href={`mailto:${site.email}`} className="card flex items-center gap-3 hover:shadow-md">
                  <Mail size={20} style={{ color: "var(--color-accent)" }} />
                  <div>
                    <p className="text-body-sm" style={{ color: "var(--color-text-muted)" }}>Email</p>
                    <p className="font-medium" style={{ color: "var(--color-text-primary)" }}>{site.email}</p>
                  </div>
                </a>
                <div className="card flex items-start gap-3">
                  <MapPin size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p className="text-body-sm" style={{ color: "var(--color-text-muted)" }}>Address</p>
                    <p className="font-medium" style={{ color: "var(--color-text-primary)" }}>{site.address}</p>
                  </div>
                </div>
                <div className="card flex items-center gap-3">
                  <Clock size={20} style={{ color: "var(--color-accent)" }} />
                  <div>
                    <p className="text-body-sm" style={{ color: "var(--color-text-muted)" }}>Hours</p>
                    <p className="font-medium" style={{ color: "var(--color-text-primary)" }}>{site.hours}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="label-eyebrow">{t.pageLabels.write}</span>
              <h2 className="heading-2 mt-3">Send a request</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
