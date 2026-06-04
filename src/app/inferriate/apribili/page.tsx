import { WPPage } from "@/components/WPPage";

export const metadata = {
  title: "Inferriate apribili su misura — Ferioli Sergio",
  description:
    "Inferriate apribili su misura in ferro, design moderno. Detrazioni fiscali disponibili. Bologna, Crevalcore.",
};

export default function Page() {
  return (
    <WPPage
      slug="inferriate-apribili"
      preLabel="Inferriate · Bologna, Modena, Ferrara"
      heroAccent="apribili"
      related={[
        { href: "/inferriate/fisse", label: "Inferriate fisse" },
        { href: "/inferriate/snodabili", label: "Inferriate snodabili" },
        { href: "/inferriate/due-ante", label: "Inferriate a due ante" },
      ]}
    />
  );
}
