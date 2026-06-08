import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Cancelli a battente a due ante — Ferioli Sergio",
  description:
    "Cancelli a battente a due ante in ferro, su misura e su disegno del cliente. Produzione e installazione. Bologna, San Giovanni in Persiceto.",
};

export default function Page() {
  return (
    <WPPage
      slug="cancelli-battente"
      preLabel="Cancelli · Bologna, Modena, Ferrara"
      heroAccent="a battente"
      related={[
        { href: "/cancelli/scorrevoli", label: "Cancelli scorrevoli" },
        { href: "/cancelli/pedonali", label: "Cancelli pedonali" },
      ]}
    />
  );
}
