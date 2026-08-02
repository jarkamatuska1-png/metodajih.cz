import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Kontakt" };

export default function Kontakt() {
  return (
    <PageShell title="Kontakt" lead="Ozvi se nám s dotazem ke kurzům nebo metodě JIH®.">
      <div className="text-center">
        <p className="font-heading text-2xl font-semibold mb-2">Jarka Matušková</p>
        <p className="text-[var(--muted)] mb-8">Autorka metody JIH®</p>

        <div className="space-y-3">
          <p>
            <a
              href="tel:+420774420251"
              className="text-[var(--gold-dark)] hover:text-[var(--gold)] transition-colors"
            >
              +420 774 420 251
            </a>
          </p>
          <p>
            <a
              href="mailto:matuskova@freli.cz"
              className="text-[var(--gold-dark)] hover:text-[var(--gold)] transition-colors"
            >
              matuskova@freli.cz
            </a>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
