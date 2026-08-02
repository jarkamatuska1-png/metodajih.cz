import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Kontakt" };

export default function Kontakt() {
  return (
    <PageShell title="Kontakt" lead="Ozvi se nám s dotazem ke kurzům nebo metodě JIH®.">
      <p className="text-[var(--muted)] leading-relaxed">
        Kontaktní údaje se přenesou z původního webu. Doplníme v dalším kroku.
      </p>
    </PageShell>
  );
}
