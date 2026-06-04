import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Barriere parafiato su misura — Ferioli Sergio",
  description:
    "Barriere parafiato e pannelli parasputi su misura per uffici, negozi, studi medici. Produzione in ferro e plexiglass. Bologna, Cento.",
};

export default function Page() {
  return (
    <WPPage
      slug="barriere-parafiato"
      preLabel="Barriere parafiato · Bologna, Modena, Ferrara"
      heroAccent="su misura"
      related={[
        { href: "/allarmi", label: "Impianti di allarme" },
        { href: "/arredi", label: "Arredi in ferro" },
      ]}
    />
  );
}
