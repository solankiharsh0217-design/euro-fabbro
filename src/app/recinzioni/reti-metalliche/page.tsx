import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Reti metalliche decorative — Ferioli Sergio",
  description:
    "Reti metalliche decorative a maglia piccola o larga per recinzioni esterne. Bologna, Crevalcore.",
};

export default function Page() {
  return (
    <WPPage
      slug="reti-metalliche"
      preLabel="Recinzioni · Bologna, Modena, Ferrara"
      heroAccent="reti metalliche"
      related={[
        { href: "/recinzioni", label: "Tutte le recinzioni" },
      ]}
    />
  );
}
