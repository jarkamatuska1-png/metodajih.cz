import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const pilire = [
  {
    title: "Vědomé vnímání",
    text: "Metoda JIH® učí vnímat emoce, postoje a souvislosti života přímo tělem — ne přes teorii, ale přes vlastní prožitek.",
  },
  {
    title: "Autorský přístup",
    text: "Metoda vznikla jako autorský přístup Jarky Matuškové k vědomé práci se sebou. Není zdravotní službou ani psychoterapií.",
  },
  {
    title: "Cesta i pro tebe",
    text: "Kurzy jsou otevřené každému, kdo chce svému životu víc rozumět a dát to, co v sobě uvidí, do praxe.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--cream)] pt-40 pb-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[var(--gold-dark)] mb-6">
              Autorská metoda Jarky Matuškové
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-semibold leading-tight mb-8">
              Terapeutická metoda JIH<span className="align-super text-[0.5em]">®</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed mb-10">
              Vědomé vnímání emocí, postojů a souvislostí života. Cesta k tomu, abys
              rozuměl{" "}sám sobě a dokázal to dát do života.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kurzy"
                className="bg-[var(--gold)] text-white px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-[var(--gold-dark)] transition-colors"
              >
                Prohlédnout kurzy
              </Link>
              <Link
                href="/najit-pruvodce"
                className="border border-[var(--gold)] text-[var(--gold-dark)] px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-[var(--gold)] hover:text-white transition-colors"
              >
                Najít průvodce
              </Link>
            </div>
          </div>
        </section>

        {/* Pilíře */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            {pilire.map((p) => (
              <div key={p.title}>
                <h2 className="font-heading text-xl font-semibold mb-4 text-[var(--gold-dark)]">
                  {p.title}
                </h2>
                <p className="text-[var(--muted)] leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Najít průvodce CTA */}
        <section className="bg-[var(--cream)] py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-semibold mb-6">
              Chceš metodu JIH® zažít osobně?
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8">
              Průvodci metody JIH® tě provedou metodou v praxi. Najdi si průvodce ve svém okolí.
            </p>
            <Link
              href="/najit-pruvodce"
              className="inline-block bg-[var(--gold)] text-white px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-[var(--gold-dark)] transition-colors"
            >
              Najít průvodce
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
