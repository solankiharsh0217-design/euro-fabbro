import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Scale in ferro su misura — Ferioli Sergio",
  description:
    "Scale in ferro su misura per interni ed esterni, industriali e di design. Produzione propria, installazione. Bologna, Crevalcore.",
};

export default function Page() {
  return (
    <WPPage
      slug="scale"
      preLabel="Scale in ferro · Bologna, Modena, Ferrara"
      heroAccent="su misura"
      related={[
        { href: "/balaustre", label: "Balaustre e ringhiere" },
        { href: "/arredi", label: "Arredi in ferro" },
      ]}
    />
  );
}
