import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Inferriate a due ante in ferro battuto — Ferioli Sergio",
  description:
    "Inferriate a due ante in ferro battuto, su misura. Produzione propria, design classico e moderno. Bologna, San Giovanni in Persiceto.",
};

export default function Page() {
  return (
    <WPPage
      slug="inferriate-due-ante"
      preLabel="Inferriate · Bologna, Modena, Ferrara"
      heroAccent="due ante"
      related={[
        { href: "/inferriate/fisse", label: "Inferriate fisse" },
        { href: "/inferriate/apribili", label: "Inferriate apribili" },
        { href: "/inferriate/snodabili", label: "Inferriate snodabili" },
      ]}
    />
  );
}
