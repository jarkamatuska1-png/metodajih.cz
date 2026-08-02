import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { getAllKurzy } from "@/lib/kurzy";

export const metadata: Metadata = { title: "Kurzy" };

export default function Kurzy() {
  const kurzy = getAllKurzy();

  return (
    <PageShell
      title="Kurzy metody JIH®"
      lead="Vzdělávací programy metody JIH® — od úvodu do metody až po přípravu průvodců a specialistů."
    >
      {/* Roční kurz — flagship */}
      <Link
        href="/stan-se-pruvodcem"
        className="block border-2 border-[var(--gold)] rounded-xl p-8 hover:bg-[var(--cream)] transition-colors group mb-12"
      >
        <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--gold-dark)] mb-3">
          Roční online kurz · TOP kurz
        </p>
        <h2 className="font-heading text-2xl font-semibold mb-3">
          Staň se průvodcem metody JIH®
        </h2>
        <p className="text-[var(--muted)] leading-relaxed">
          Deset měsíců vedené práce, po kterých rozumíš metodě v praxi a získáš certifikát
          Průvodce metodou JIH® (dříve „Škola pro terapeuty“).
        </p>
      </Link>

      {/* Ostatní kurzy */}
      <div className="grid sm:grid-cols-2 gap-6">
        {kurzy.map((k) => (
          <Link
            key={k.slug}
            href={`/kurzy/${k.slug}`}
            className="block border border-[var(--gold-light)] rounded-xl p-6 hover:border-[var(--gold)] transition-colors group"
          >
            <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-[var(--gold-dark)] transition-colors">
              {k.title}
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-3">
              {k.tagline}
            </p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
