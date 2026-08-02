import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Aktuální termíny kurzů" };

export default function AktualniTerminy() {
  return (
    <PageShell
      title="Aktuální termíny kurzů"
      lead="Nejbližší termíny kurzů a setkání metody JIH®."
    >
      <p className="text-[var(--muted)] leading-relaxed">
        Aktuální termíny doplníme v dalším kroku.
      </p>
    </PageShell>
  );
}
