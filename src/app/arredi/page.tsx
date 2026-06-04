import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Arredi in ferro di design — Ferioli Sergio",
  description:
    "Arredi e mobili in ferro di design per casa e contract. Produzione su misura, design moderno e classico. Bologna, Cento.",
};

export default function Page() {
  return (
    <WPPage
      slug="arredi"
      preLabel="Arredi in ferro · Bologna, Modena, Ferrara"
      heroAccent="di design"
      related={[
        { href: "/balaustre", label: "Balaustre" },
        { href: "/scale", label: "Scale in ferro" },
      ]}
    />
  );
}
