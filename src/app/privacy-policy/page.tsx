import { getWpPage } from "@/lib/wp-content";

export const metadata = {
  title: "Privacy Policy — Ferioli Sergio",
  description:
    "Informativa completa privacy in conformità al Regolamento Generale Europeo 679/16 (GDPR).",
};

function renderBlock(b: { type: string; text?: string; items?: string[] }, key: number) {
  if (b.type === "p" && b.text) {
    return (
      <p key={key} className="text-body" style={{ color: "var(--color-text-secondary)" }}>
        {b.text}
      </p>
    );
  }
  if (b.type === "ul" && b.items) {
    return (
      <ul key={key} className="list-disc pl-6 space-y-1.5">
        {b.items.map((it, i) => (
          <li key={i} className="text-body" style={{ color: "var(--color-text-secondary)" }}>
            {it}
          </li>
        ))}
      </ul>
    );
  }
  return null;
}

export default function Page() {
  const page = getWpPage("privacy-policy");
  if (!page) {
    return (
      <div className="container-ef py-32 text-center">
        <h1 className="heading-2">Pagina non disponibile</h1>
      </div>
    );
  }
  return (
    <article
      style={{
        backgroundColor: "var(--color-bg)",
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
      }}
    >
      <div className="container-ef">
        <div className="max-w-3xl mx-auto">
          <span className="label-eyebrow" style={{ color: "var(--color-accent)" }}>
            Informativa legale
          </span>
          <h1 className="heading-1 mt-3" style={{ fontWeight: 400 }}>
            {page.title.replace(/<[^>]+>/g, "")}
          </h1>
          <div className="mt-10 space-y-10">
            {page.sections.map((s, idx) => (
              <section key={idx}>
                <h2
                  className="heading-3 mb-3"
                  style={{ fontWeight: 500, color: "var(--color-text-primary)" }}
                >
                  {s.heading}
                </h2>
                <div className="space-y-4">{s.blocks.map((b, i) => renderBlock(b, i))}</div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
