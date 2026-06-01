"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const TRANSPARENT_PATHS = new Set(["/", "/contatti"]);

export function MainWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  const transparent = TRANSPARENT_PATHS.has(cleanPath);
  return (
    <main
      className="min-h-[60vh]"
      style={{ paddingTop: transparent ? 0 : 76 }}
    >
      {children}
    </main>
  );
}
