import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Časté dotazy" };

export default function Faq() {
  return (
    <PageShell title="Časté dotazy" lead="Odpovědi na nejčastější otázky k metodě JIH® a kurzům.">
      <p className="text-[var(--muted)] leading-relaxed">
        Otázky a odpovědi se přenesou z původního webu. Doplníme v dalším kroku.
      </p>
    </PageShell>
  );
}
