import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Kurzy" };

export default function Kurzy() {
  return (
    <PageShell
      title="Kurzy metody JIH®"
      lead="Vzdělávací programy metody JIH® — od úvodu do metody až po přípravu průvodců a specialistů."
    >
      <Link
        href="/stan-se-pruvodcem"
        className="block border border-[var(--gold-light)] rounded-xl p-8 hover:border-[var(--gold)] transition-colors group"
      >
        <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--gold-dark)] mb-3">
          Roční online kurz
        </p>
        <h2 className="font-heading text-2xl font-semibold mb-3 group-hover:text-[var(--gold-dark)] transition-colors">
          Staň se průvodcem metody JIH®
        </h2>
        <p className="text-[var(--muted)] leading-relaxed">
          Deset měsíců vedené práce, po kterých rozumíš metodě v praxi a získáš certifikát
          Průvodce metodou JIH®.
        </p>
      </Link>

      <p className="mt-10 text-[var(--muted)] leading-relaxed">
        Další kurzy (Škola života, Automatická kresba diagnostická, Vědomé tvoření vlastní
        reality, Škola channelingu a další) sem přeneseme z původního webu v dalším kroku.
      </p>
    </PageShell>
  );
}
