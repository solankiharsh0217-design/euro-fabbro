import { ReactNode } from "react";

export function Container({ children, className = "", as: As = "div" }: { children: ReactNode; className?: string; as?: any }) {
  return <As className={`container-ef ${className}`}>{children}</As>;
}

export function Section({
  children,
  bg = "var(--color-bg)",
  className = "",
  id,
}: {
  children: ReactNode;
  bg?: string;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={className}
      style={{
        backgroundColor: bg,
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
      }}
    >
      <div className="container-ef">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="label-eyebrow">{children}</span>;
}

export function H1({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h1 className={`heading-1 ${className}`}>{children}</h1>;
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`heading-2 ${className}`}>{children}</h2>;
}

export function H3({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h3 className={`heading-3 ${className}`}>{children}</h3>;
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`lead ${className}`}>{children}</p>;
}
