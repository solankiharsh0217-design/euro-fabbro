import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Inferriate fisse per finestre — Ferioli Sergio",
  description:
    "Inferriate fisse per finestre in ferro, su misura. Produzione propria, certificazione Istituto Giordano. Bologna, San Giovanni in Persiceto.",
};

export default function Page() {
  return (
    <WPPage
      slug="inferriate-fisse"
      preLabel="Inferriate · Bologna, Modena, Ferrara"
      heroAccent="fisse"
      related={[
        { href: "/inferriate/apribili", label: "Inferriate apribili" },
        { href: "/inferriate/snodabili", label: "Inferriate snodabili" },
        { href: "/inferriate/due-ante", label: "Inferriate a due ante" },
      ]}
    />
  );
}
