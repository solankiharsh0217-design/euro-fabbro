import type { Metadata } from "next";
import ContattiClient from "./ContattiClient";

export const metadata: Metadata = {
  title: "Contatti — Eurofabbro | Carpenteria metallica Bologna",
  description:
    "Contatta Eurofabbro per preventivi gratuiti su cancelli, inferriate, recinzioni e carpenteria metallica. Rispondiamo entro 24 ore. Telefono, WhatsApp, email.",
  openGraph: {
    title: "Contatti — Eurofabbro",
    description:
      "Contatta Eurofabbro per preventivi gratuiti su cancelli, inferriate, recinzioni e carpenteria metallica.",
    url: "https://euro-fabbro.vercel.app/contatti",
  },
  alternates: {
    canonical: "https://euro-fabbro.vercel.app/contatti",
  },
};

export default function ContattiPage() {
  return <ContattiClient />;
}
