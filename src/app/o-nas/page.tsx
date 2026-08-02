import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "O nás" };

export default function ONas() {
  return (
    <PageShell
      title="O nás"
      lead="Tvoříme život krásnější i tam, kde to nikdo nečeká."
    >
      <div className="space-y-10">
        <div>
          <h2 className="font-heading text-2xl font-semibold mb-4">Metoda JIH®</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Metoda JIH® je přístup k osobnímu rozvoji 21. století. Byla pojmenována v roce 2015
            a do roku 2021 ji spoluvytvářela Hana Mokrá. Kurzy metody JIH® se vyznačují silnou
            energií úlevy a pomoci a jsou určené dospělým i dětem — vznikají s péčí a porozuměním
            pro toho, komu mají sloužit.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-semibold mb-4">Kdo za metodou stojí</h2>
          <ul className="space-y-4">
            <li>
              <p className="font-semibold">Jarka Matušková</p>
              <p className="text-[var(--muted)] leading-relaxed">
                Autorka metody JIH® a jednatelka. Vede kurzy a workshopy.
              </p>
            </li>
            <li>
              <p className="font-semibold">Ivan Matuška</p>
              <p className="text-[var(--muted)] leading-relaxed">
                Majitel — zajišťuje zázemí a péči během veřejných akcí.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-semibold mb-4">Kontakt</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            <a href="tel:+420774420251" className="text-[var(--gold-dark)] hover:text-[var(--gold)] transition-colors">
              +420 774 420 251
            </a>
            {" · "}
            <a href="mailto:matuskova@freli.cz" className="text-[var(--gold-dark)] hover:text-[var(--gold)] transition-colors">
              matuskova@freli.cz
            </a>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
