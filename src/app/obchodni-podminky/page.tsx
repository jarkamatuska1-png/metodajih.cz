import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Obchodní podmínky" };

export default function ObchodniPodminky() {
  return (
    <PageShell title="Obchodní podmínky">
      <p className="text-[var(--muted)] leading-relaxed">
        Obchodní podmínky se přenesou z původního webu. Doplníme v dalším kroku.
      </p>
    </PageShell>
  );
}
