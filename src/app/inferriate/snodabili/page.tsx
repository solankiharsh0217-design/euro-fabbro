import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Inferriate snodabili moderne — Ferioli Sergio",
  description:
    "Inferriate snodabili moderne ed economiche in ferro, personalizzabili. Bologna, Cento.",
};

export default function Page() {
  return (
    <WPPage
      slug="inferriate-snodabili"
      preLabel="Inferriate · Bologna, Modena, Ferrara"
      heroAccent="snodabili"
      related={[
        { href: "/inferriate/fisse", label: "Inferriate fisse" },
        { href: "/inferriate/apribili", label: "Inferriate apribili" },
        { href: "/inferriate/due-ante", label: "Inferriate a due ante" },
      ]}
    />
  );
}
