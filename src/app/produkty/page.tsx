import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Produkty" };

export default function Produkty() {
  return (
    <PageShell
      title="Produkty"
      lead="E-booky, pracovní materiály a další produkty metody JIH®."
    >
      <p className="text-[var(--muted)] leading-relaxed">
        Obsah produktů se přenese z původního webu. Doplníme v dalším kroku.
      </p>
    </PageShell>
  );
}
