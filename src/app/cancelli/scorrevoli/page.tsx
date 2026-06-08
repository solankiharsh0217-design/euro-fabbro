import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Cancelli scorrevoli su misura — Ferioli Sergio",
  description:
    "Realizziamo cancelli scorrevoli in ferro battuto su misura, zincati e verniciati. Produzione propria, sopralluogo e preventivo gratuiti. Bologna, Crevalcore.",
};

export default function Page() {
  return (
    <WPPage
      slug="cancelli-scorrevoli"
      preLabel="Cancelli · Bologna, Modena, Ferrara"
      heroAccent="su misura"
      related={[
        { href: "/cancelli/pedonali", label: "Cancelli pedonali" },
        { href: "/cancelli/battente", label: "Cancelli a battente" },
      ]}
    />
  );
}
