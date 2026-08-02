import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Ochrana osobních údajů" };

export default function Gdpr() {
  return (
    <PageShell title="Ochrana osobních údajů a cookies">
      <p className="text-[var(--muted)] leading-relaxed">
        Zásady ochrany osobních údajů a používání cookies se přenesou z původního webu.
        Doplníme v dalším kroku.
      </p>
    </PageShell>
  );
}
