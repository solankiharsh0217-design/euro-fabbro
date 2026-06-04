import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Dehor in ferro per locali — Ferioli Sergio",
  description:
    "Dehor e dehors in ferro su misura per bar, ristoranti e locali. Produzione e installazione. Bologna, San Giovanni in Persiceto.",
};

export default function Page() {
  return (
    <WPPage
      slug="dehor"
      preLabel="Dehor · Bologna, Modena, Ferrara"
      heroAccent="in ferro"
      related={[
        { href: "/arredi", label: "Arredi in ferro" },
        { href: "/balaustre", label: "Balaustre" },
      ]}
    />
  );
}
