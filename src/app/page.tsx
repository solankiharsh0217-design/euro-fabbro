import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Eurofabbro — Carpenteria metallica certificata dal 1977 | Bologna",
  description:
    "Carpenteria metallica certificata nella provincia di Bologna. Produzione interna, marcatura CE, qualità garantita su ogni installazione. Cancelli, inferriate, recinzioni, carport, automazione.",
  openGraph: {
    title: "Eurofabbro — Carpenteria metallica certificata dal 1977",
    description:
      "Carpenteria metallica certificata nella provincia di Bologna. Produzione interna, marcatura CE, qualità garantita su ogni installazione.",
    url: "https://euro-fabbro.vercel.app",
  },
  alternates: {
    canonical: "https://euro-fabbro.vercel.app",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
