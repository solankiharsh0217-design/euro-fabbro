import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Cancelli pedonali su misura — Ferioli Sergio",
  description:
    "Cancelli pedonali in ferro su misura, moderni e classici. Produzione propria e installazione. Bologna, Cento.",
};

export default function Page() {
  return (
    <WPPage
      slug="cancelli-pedonali"
      preLabel="Cancelli · Bologna, Modena, Ferrara"
      heroAccent="pedonali"
      related={[
        { href: "/cancelli/scorrevoli", label: "Cancelli scorrevoli" },
        { href: "/cancelli/autoportanti", label: "Cancelli autoportanti" },
        { href: "/cancelli/battente", label: "Cancelli a battente" },
      ]}
    />
  );
}
