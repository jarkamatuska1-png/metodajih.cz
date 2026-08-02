import Link from "next/link";

const footerLinks = [
  { href: "/kurzy", label: "Kurzy" },
  { href: "/najit-pruvodce", label: "Najít průvodce" },
  { href: "/o-nas", label: "O nás" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/gdpr", label: "Ochrana údajů" },
  { href: "/obchodni-podminky", label: "Obchodní podmínky" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--cream)] border-t border-[var(--gold-light)] py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-heading text-base font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
            Metoda JIH<span className="align-super text-[0.6em]">®</span>
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs tracking-[0.2em] uppercase">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--gold-light)] flex flex-col items-center gap-4 text-xs text-[var(--muted)]">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a href="mailto:matuskova@freli.cz" className="hover:text-[var(--gold)] transition-colors">
              matuskova@freli.cz
            </a>
            <span className="text-[var(--gold-light)]">·</span>
            <a href="tel:+420774420251" className="hover:text-[var(--gold)] transition-colors">
              +420 774 420 251
            </a>
          </div>
          <p className="text-center">
            © {new Date().getFullYear()} freli s.r.o. · Autorská metoda Jarky Matuškové.
            Všechna práva vyhrazena.
          </p>
          <p className="text-center text-[var(--muted)]">
            Terapeutická metoda JIH® a logo JIH® jsou chráněny ochrannou známkou.
          </p>
        </div>
      </div>
    </footer>
  );
}
