import Link from "next/link";
import { ArrowRight, Phone, Home } from "lucide-react";
import { site } from "@/lib/content";
import { Container, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section bg="bg-ef-bg">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-6xl sm:text-8xl font-bold text-ef-accent/30 mb-4">404</p>
          <h1 className="heading-1 mb-4">Pagina non trovata</h1>
          <p className="lead mb-8">
            La pagina che stai cercando non esiste o è stata spostata. Torna alla homepage o contattaci
            per qualsiasi richiesta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/" className="btn-primary w-full sm:w-auto">
              <Home className="w-4 h-4" /> Torna alla home
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-secondary w-full sm:w-auto">
              <Phone className="w-4 h-4" /> {site.phone}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
