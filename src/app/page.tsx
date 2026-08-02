import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const claimy = [
  "JIH® je 15 let objevování v jednoduché, rychlé a efektivní pomoci.",
  "JIH® je vnímání života skrze intuici a její postavení jako hlavní zdroj informací.",
  "JIH® je nástroj pro úlevu a znovunalezení radosti ze života.",
  "JIH® je jasná informace od Boha pro člověka, který chce poznat sebe sama.",
];

const urovne = [
  {
    title: "Úroveň 1",
    text: "Je určena všem klientům, kteří přichází na terapii poprvé nebo opakovaně. Z pozice kouče/terapeuta se stáváme neutrální k tomu, co vnímáme a cítíme ve své energii od okamžiku, kdy se rozhodneme cítit a vnímat energii klienta. K tomu je potřeba jeho svolení, a to je splněno jeho žádostí o setkání. Úkolem terapeuta je najít zdroj – začátek nepohodlného stavu, který může mít svůj začátek i v minulých životech. Jakmile je zdroj pochopen v neutrálním vnímání duše klienta, zaznamenává se úleva – a tím pádem není důvod k opakování situace. Skrze energii klienta je rovnána energie všech jeho vztahů, vždy pro nejvyšší dobro všech vazeb.",
  },
  {
    title: "Úroveň 2",
    text: "Je určena všem klientům, kteří již mají zkušenosti, umí pracovat se svou vlastní energií a vnímat sebe sama. Při terapii jsou vedeni koučem/terapeutem do stavu napojení na své vyšší Já, na své vědomí i nevědomí. Díky tomu jsou zpřístupněny i ty oblasti, které by se jinak při terapii neodkryly. Klient je veden tak, aby dokázal zodpovědět otázky směřující k prvopočátku omezení a bloků ve své energii, a to v celé linii času – bez potřeby prožívat regresí nepříjemné zážitky znovu.",
  },
  {
    title: "Úroveň 3",
    text: "Je určena všem klientům. Obdobně jako v úrovni 2 je klient veden do napojení na sebe sama a své nevědomí tak, aby se bez znovuprožívání starých a bolestivých zkušeností dostal ke zdroji nepohodlí. Narozdíl od úrovně 2 se pohybujeme jen v časové ose tohoto života. Je to proto, aby se každý z klientů učil pracovat na sobě a svém životě vědomě a účinně. Úroveň 3 je obvykle součástí terapie 1 i 2.",
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
              Osobní rozvoj — terapeutický koučink
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-semibold leading-tight mb-8">
              Terapeutická metoda JIH<span className="align-super text-[0.5em]">®</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed mb-10">
              Vyzkoušejte individuální terapie pro duši i tělo. Pořádáme pro vás také on-line a
              živé kurzy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/najit-pruvodce"
                className="bg-[var(--gold)] text-white px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-[var(--gold-dark)] transition-colors"
              >
                Najít průvodce
              </Link>
              <Link
                href="/kurzy"
                className="border border-[var(--gold)] text-[var(--gold-dark)] px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-[var(--gold)] hover:text-white transition-colors"
              >
                Prohlédnout kurzy
              </Link>
            </div>
          </div>
        </section>

        {/* Vítejte + claimy */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--gold-dark)] mb-4">
              Vítejte ve světě nových možností a radosti ze života
            </p>
            <h2 className="font-heading text-3xl font-semibold mb-6">
              Metoda JIH® — osobní rozvoj 21. století
            </h2>
            <p className="text-[var(--muted)] leading-relaxed max-w-2xl mx-auto mb-12">
              JIH® je zázemí pro všechny, kteří se chtějí vědomě setkávat s Bohem — Bohem, kterého
              mají uvnitř sebe, jen nevěří, že s ním dokážou být ve spojení.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 text-left">
              {claimy.map((c) => (
                <p key={c} className="text-[var(--muted)] leading-relaxed flex gap-3">
                  <span className="text-[var(--gold)]">—</span>
                  {c}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* CTA koučink */}
        <section className="bg-[var(--cream)] py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-semibold mb-4">
              Terapeutický koučink metodou JIH® je tu pro vás
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8">
              Požádejte o pomoc — nebuďte na život sami.
            </p>
            <Link
              href="/najit-pruvodce"
              className="inline-block bg-[var(--gold)] text-white px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-[var(--gold-dark)] transition-colors"
            >
              Najít průvodce
            </Link>
          </div>
        </section>

        {/* Tři úrovně terapie */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-semibold text-center mb-12">
              Tři úrovně terapie metodou JIH®
            </h2>
            <div className="space-y-10">
              {urovne.map((u) => (
                <div key={u.title}>
                  <h3 className="font-heading text-xl font-semibold mb-3 text-[var(--gold-dark)]">
                    {u.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">{u.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kurzy teaser */}
        <section className="bg-[var(--cream)] py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-semibold mb-4">
              Vydejte se na cestu osobního rozvoje
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8">
              Nabízíme kurzy, ze kterých si vybere každý. Ať už svět energií teprve objevujete,
              nebo už máte své zkušenosti.
            </p>
            <Link
              href="/kurzy"
              className="inline-block border border-[var(--gold)] text-[var(--gold-dark)] px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-[var(--gold)] hover:text-white transition-colors"
            >
              Prohlédnout kurzy
            </Link>
          </div>
        </section>

        {/* Historie */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-semibold mb-6 text-center">
              Jak vznikla metoda JIH®?
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-6">
              V prvních deseti letech existence metody JIH® spolupracovaly na jejím vývoji Jarka
              Matušková a Hanka Mokrá. Od roku 2021 Jarka Matušková dále rozvíjí metodu JIH® jako
              takovou; Hana Mokrá kromě terapií rozvíjí a uplatňuje své znalosti z oblasti zdraví
              a regenerace těla.
            </p>
            <blockquote className="border-l-2 border-[var(--gold)] pl-6 italic text-[var(--muted)] leading-relaxed">
              „Vznik metody JIH® je výsledek hledání řešení pro naše vlastní životní problémy.
              Naše schopnosti se rozšiřovaly a život, který jsme žily, se nám měnil pod rukama.
              Lidé začali přicházet s prosbami o pomoc, a tak jsme se rozhodly předat vše, co známe
              a používáme, dál. Vznikl název JIH — Jasné Informace Hned vnímáním emocí, který
              získal ochrannou známku. Od roku 2015 jsme schopnost pracovat s metodou JIH®
              profesionálně předaly více než sedmdesáti lidem."
            </blockquote>
            <p className="text-[var(--muted)] leading-relaxed mt-6 text-center">
              V roce 2015 metoda JIH® získala svou ochrannou známku.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
