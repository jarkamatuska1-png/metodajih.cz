import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Najít průvodce" };

export default function NajitPruvodce() {
  return (
    <PageShell
      title="Najít průvodce metody JIH®"
      lead="Průvodci metody JIH® tě provedou metodou v praxi. Vyber si průvodce ve svém okolí."
    >
      <p className="text-[var(--muted)] leading-relaxed">
        Seznam průvodců, specialistů a lektorů metody JIH® doplníme v dalším kroku.
        Názvosloví odpovídá Etickému kodexu metody JIH® v2026: Průvodce → Specialista → Lektor.
      </p>
    </PageShell>
  );
}
