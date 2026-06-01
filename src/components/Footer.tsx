import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { site, footer, nav } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ef-surface-dark text-ef-text-on-dark">
      <div className="container-ef py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold mb-3">
              Euro<span className="text-ef-accent">fabbro</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-5">{footer.tagline}</p>
            <div className="flex items-center gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-ef-accent transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-ef-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white/90 mb-4">
              {footer.colLavorazioni}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cancelli" className="text-white/70 hover:text-ef-accent transition-colors">
                  {nav.cancelli}
                </Link>
              </li>
              <li>
                <Link href="/inferriate" className="text-white/70 hover:text-ef-accent transition-colors">
                  {nav.inferriate}
                </Link>
              </li>
              <li>
                <Link href="/recinzioni" className="text-white/70 hover:text-ef-accent transition-colors">
                  {nav.recinzioni}
                </Link>
              </li>
              <li>
                <Link href="/lavorazioni" className="text-white/70 hover:text-ef-accent transition-colors">
                  Scale e strutture
                </Link>
              </li>
              <li>
                <Link href="/carport" className="text-white/70 hover:text-ef-accent transition-colors">
                  {nav.carport}
                </Link>
              </li>
              <li>
                <Link href="/automazione" className="text-white/70 hover:text-ef-accent transition-colors">
                  {nav.automazione}
                </Link>
              </li>
              <li>
                <Link href="/realizzazioni" className="text-white/70 hover:text-ef-accent transition-colors">
                  {nav.realizzazioni}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white/90 mb-4">
              {footer.colContatti}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-ef-accent shrink-0" />
                <a href={`tel:${site.phoneTel}`} className="text-white/80 hover:text-ef-accent transition-colors">
                  {footer.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-ef-accent shrink-0" />
                <a href={`tel:${site.mobileTel}`} className="text-white/80 hover:text-ef-accent transition-colors">
                  {footer.mobile}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-ef-accent shrink-0" />
                <a
                  href={`mailto:${footer.email}`}
                  className="text-white/80 hover:text-ef-accent transition-colors break-all"
                >
                  {footer.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-ef-accent shrink-0" />
                <span className="text-white/70">{footer.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white/90 mb-4">
              {footer.colCertificazioni}
            </h3>
            <p className="text-sm text-white/70 mb-3 leading-relaxed">{footer.certText}</p>
            <p className="text-sm text-white/70 mb-6">{footer.compassText}</p>
            <Link
              href="/detrazioni"
              className="inline-flex items-center text-sm font-semibold text-ef-accent hover:underline"
            >
              Scopri le detrazioni →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-ef py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>
            © {year} Ferioli Sergio SRL · {footer.piva}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-ef-accent transition-colors">
              {footer.privacy}
            </Link>
            <Link href="/cookie-policy" className="hover:text-ef-accent transition-colors">
              {footer.cookie}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
