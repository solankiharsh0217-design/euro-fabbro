import Link from "next/link";
import { CheckCircle, Phone, Mail } from "lucide-react";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Grazie — Ferioli Sergio",
  description: "Grazie per averci contattato. Ti ricontatteremo al più presto.",
};

export default function Page() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-surface-dark)",
        color: "var(--color-text-on-dark)",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "calc(var(--section-padding-y) * 1.5)",
        paddingBottom: "calc(var(--section-padding-y) * 1.5)",
      }}
    >
      <div className="container-ef">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="inline-flex items-center justify-center mb-6"
            style={{
              width: 80,
              height: 80,
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--color-accent-subtle)",
            }}
          >
            <CheckCircle size={40} style={{ color: "var(--color-accent)" }} />
          </div>
          <span className="label-eyebrow" style={{ color: "var(--color-accent)" }}>
            Messaggio ricevuto
          </span>
          <h1
            className="text-hero mt-4"
            style={{ color: "#FFFFFF", fontWeight: 300 }}
          >
            Grazie per averci
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}> contattato</span>
          </h1>
          <p
            className="text-body-lg mt-6"
            style={{ color: "rgba(245, 240, 232, 0.82)" }}
          >
            Abbiamo ricevuto la tua richiesta. Il nostro staff ti ricontatterà al più presto per fornirti tutte le informazioni di cui hai bisogno.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link href="/" className="btn btn-primary">
              Torna alla home <ArrowRight size={16} />
            </Link>
            <a href="tel:+39051985300" className="btn btn-secondary-dark">
              <Phone size={16} /> 051 985300
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
