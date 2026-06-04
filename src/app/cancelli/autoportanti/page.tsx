import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Cancelli autoportanti sospesi — Ferioli Sergio",
  description:
    "Cancelli scorrevoli autoportanti senza guida a terra, in ferro battuto. Soluzione ideale per aziende e abitazioni. Bologna, Crevalcore.",
};

export default function Page() {
  return (
    <WPPage
      slug="cancelli-autoportanti"
      preLabel="Cancelli · Bologna, Modena, Ferrara"
      heroAccent="autoportanti"
      related={[
        { href: "/cancelli/scorrevoli", label: "Cancelli scorrevoli" },
        { href: "/cancelli/pedonali", label: "Cancelli pedonali" },
        { href: "/cancelli/battente", label: "Cancelli a battente" },
      ]}
    />
  );
}
