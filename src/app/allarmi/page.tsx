import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Impianti di allarme e videosorveglianza — Ferioli Sergio",
  description:
    "Impianti di allarme e videosorveglianza a 360° per casa e azienda. Antifurto, TVCC, controllo accessi. Installazione certificata. Bologna, San Giovanni in Persiceto.",
};

export default function Page() {
  return (
    <WPPage
      slug="allarmi"
      preLabel="Allarmi e videosorveglianza · Bologna, Modena, Ferrara"
      heroAccent="a 360°"
      related={[
        { href: "/automazione", label: "Domotica e automazione" },
        { href: "/barriere-parafiato", label: "Barriere parafiato" },
      ]}
    />
  );
}
