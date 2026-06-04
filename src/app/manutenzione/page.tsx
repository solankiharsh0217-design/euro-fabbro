import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Carpenteria metallica certificata — Ferioli Sergio",
  description:
    "Carpenteria metallica certificata Istituto Giordano, manutenzione grate e inferriate. Interventi su strutture esistenti. Bologna, Crevalcore.",
};

export default function Page() {
  return (
    <WPPage
      slug="manutenzione"
      preLabel="Carpenteria certificata · Bologna, Modena, Ferrara"
      heroAccent="certificata"
      related={[
        { href: "/cancelli", label: "Cancelli" },
        { href: "/inferriate", label: "Inferriate" },
      ]}
    />
  );
}
