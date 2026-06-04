import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Chi siamo — Ferioli Sergio SRL",
  description:
    "Ferioli Sergio SRL: esperti in prodotti in ferro dal 1977. Produzione propria, certificazione Istituto Giordano. Bologna, Crevalcore.",
};

export default function Page() {
  return (
    <WPPage
      slug="chi-siamo"
      preLabel="Ferioli Sergio SRL · dal 1977"
      heroAccent="in ferro"
      related={[
        { href: "/manutenzione", label: "Carpenteria certificata" },
        { href: "/realizzazioni", label: "Realizzazioni" },
      ]}
    />
  );
}
