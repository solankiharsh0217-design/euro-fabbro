import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Balaustre e ringhiere in ferro — Ferioli Sergio",
  description:
    "Balaustre, ringhiere, parapetti e corrimano in ferro per interni ed esterni. Su misura, certificati, installazione. Bologna, San Giovanni in Persiceto.",
};

export default function Page() {
  return (
    <WPPage
      slug="balaustre"
      preLabel="Balaustre e ringhiere · Bologna, Modena, Ferrara"
      heroAccent="in ferro"
      related={[
        { href: "/scale", label: "Scale in ferro" },
        { href: "/arredi", label: "Arredi in ferro" },
      ]}
    />
  );
}
