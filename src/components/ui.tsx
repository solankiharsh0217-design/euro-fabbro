import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container-ef ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  bg = "bg-ef-bg",
}: {
  children: ReactNode;
  className?: string;
  bg?: string;
}) {
  return <section className={`section ${bg} ${className}`}>{children}</section>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function H1({ children, accent, className = "" }: { children: ReactNode; accent?: ReactNode; className?: string }) {
  return (
    <h1 className={`heading-1 text-balance ${className}`}>
      {children}
      {accent ? (
        <>
          {" "}
          <span className="text-ef-accent italic font-light">{accent}</span>
        </>
      ) : null}
    </h1>
  );
}

export function H2({ children, accent, post, pre, className = "" }: { children?: ReactNode; accent?: ReactNode; pre?: ReactNode; post?: ReactNode; className?: string }) {
  return (
    <h2 className={`heading-2 text-balance ${className}`}>
      {pre}
      {children}
      {accent ? (
        <>
          {" "}
          <span className="text-ef-accent italic font-light">{accent}</span>
        </>
      ) : null}
      {post}
    </h2>
  );
}
