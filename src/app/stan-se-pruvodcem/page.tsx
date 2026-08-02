import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Staň se průvodcem metody JIH®",
  description:
    "Roční online kurz metody JIH® — 10 měsíců vedené práce, po jejímž absolvování získáš certifikát Průvodce metodou JIH®.",
};

const seNaucis = [
  "Cítit a vnímat emoční základ života",
  "Reagovat na informace těla vlastním vnímáním",
  "Rozlišovat zdroje vnímaných energií",
  "Objevit veličiny těla, mysli, duše a celku",
  "Vnímat neviditelné a pojmenovat jemné emoční informace",
  "Zůstat v neutralitě při práci s metodou",
  "Pracovat s časovou osou — minulostí, přítomností i budoucností",
  "Určovat a měnit zdroj problémů v čase",
  "Rychle reagovat na emoční informaci",
  "Pomoci sobě i druhým",
];

const prubeh = [
  {
    title: "Online setkání (ZOOM)",
    text: "Pravidelná živá setkání v režimu konference — pro převedení informací do praxe.",
  },
  {
    title: "Workshopy naživo",
    text: "Čtyři čtyřdenní osobní setkání (čtvrtek–neděle) během roku. Termíny příštího běhu připravujeme.",
  },
  {
    title: "Osobní konzultace",
    text: "Čtyři osobní konzultace během roku (30–60 minut), zaměřené na tvůj aktuální stav.",
  },
  {
    title: "Uzavřená skupina",
    text: "Živé vstupy, podpůrné materiály a komunikace v uzavřené facebookové skupině s podporou autorky.",
  },
];

const ziskas = [
  "Certifikát Průvodce metodou JIH®",
  "Zázemí a profil na webu metody JIH®",
  "Propagaci tvých aktivit na webu metody",
  "Skupinu s podporou autorky a přednost konzultací",
  "Možnost vyučovat kurzy autorky (na základě licence)",
  "Sebedůvěru a schopnost pomáhat sobě i ostatním",
];

const ceny = [
  { title: "Jednorázová platba", price: "158 900 Kč", note: "cena s DPH, uhrazená před vstupem do kurzu" },
  { title: "5 splátek", price: "31 780 Kč", note: "za splátku, cena s DPH" },
  { title: "10 splátek", price: "15 890 Kč", note: "za splátku, cena s DPH" },
];

const reference = [
  {
    name: "Klára Mrazíková",
    role: "Specialista metody JIH®",
    text: "Prvních pár měsíců bylo plných aha momentů o těle a jeho moudrosti. Druhá část o mysli byla intenzivnější — ale práce s klienty, když vidíš jejich obnovu, za to stojí.",
  },
  {
    name: "Šárka Bohuslavová",
    role: "Specialista metody JIH®",
    text: "Nebyla to klasická výuka. Bylo to zaměřené na individualitu a vnímání. Postupem času se „nevím, ale musím“ změnilo na „mám záměr“.",
  },
];

export default function StanSePruvodcem() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--cream)] pt-40 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[var(--gold-dark)] mb-6">
              Roční online kurz · 10 měsíců
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-semibold leading-tight mb-8">
              Staň se průvodcem metody JIH<span className="align-super text-[0.5em]">®</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed mb-10">
              Deset měsíců vedené práce, po kterých rozumíš metodě JIH® v praxi a umíš ji předat dál.
              Osobní rozvoj postavený na vnímání, cítění a prožitku — ne na teorii.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-[var(--gold)] text-white px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-[var(--gold-dark)] transition-colors"
            >
              Mám zájem o kurz
            </Link>
          </div>
        </section>

        {/* O metodě */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-semibold mb-6">Základ metody JIH®</h2>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              Metoda JIH® je forma osobního rozvoje zaměřená na nalezení příčin nepohodlí a obnovu
              životní energie. Je postavená na pravdě a lásce, jednoduchosti a prožívání — není vázaná
              na konkrétní náboženství ani ezoteriku a vychází z více než patnácti let osobního objevování.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              Základem je vnímání a cítění: vlastní tělo a jeho pocity jsou jediná spolehlivá cesta,
              jak rozpoznat zdroj toho, co prožíváme, a vědomě s tím pracovat v čase — v minulosti,
              přítomnosti i budoucnosti.
            </p>
          </div>
        </section>

        {/* Co se naučíš */}
        <section className="bg-[var(--cream)] py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-semibold mb-8">Co se naučíš</h2>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {seNaucis.map((item) => (
                <li key={item} className="flex gap-3 text-[var(--muted)] leading-relaxed">
                  <span className="text-[var(--gold)]">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Jak kurz probíhá */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-semibold mb-10">Jak kurz probíhá</h2>
            <div className="grid sm:grid-cols-2 gap-10">
              {prubeh.map((p) => (
                <div key={p.title}>
                  <h3 className="font-heading text-lg font-semibold mb-3 text-[var(--gold-dark)]">
                    {p.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm text-[var(--muted)] italic">
              Konkrétní termíny nejbližšího běhu právě připravujeme — napiš nám a dáme ti vědět jako prvním.
            </p>
          </div>
        </section>

        {/* Co získáš */}
        <section className="bg-[var(--cream)] py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-semibold mb-8">Co získáš po ukončení</h2>
            <ul className="space-y-3">
              {ziskas.map((item) => (
                <li key={item} className="flex gap-3 text-[var(--muted)] leading-relaxed">
                  <span className="text-[var(--gold)]">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ceny */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-semibold mb-4">Cena kurzu</h2>
            <p className="text-[var(--muted)] leading-relaxed mb-10">
              Orientační ceny ročního kurzu. Rezervační poplatek 20 000 Kč se odečítá z konečné ceny.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {ceny.map((c) => (
                <div
                  key={c.title}
                  className="border border-[var(--gold-light)] rounded-xl p-6 text-center"
                >
                  <p className="text-xs tracking-[0.15em] uppercase text-[var(--muted)] mb-3">
                    {c.title}
                  </p>
                  <p className="font-heading text-2xl font-semibold text-[var(--gold-dark)] mb-3">
                    {c.price}
                  </p>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">{c.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reference */}
        <section className="bg-[var(--cream)] py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-semibold mb-10">Zkušenosti absolventek</h2>
            <div className="grid sm:grid-cols-2 gap-10">
              {reference.map((r) => (
                <figure key={r.name}>
                  <blockquote className="text-[var(--muted)] leading-relaxed italic mb-4">
                    „{r.text}“
                  </blockquote>
                  <figcaption className="text-sm">
                    <span className="font-semibold">{r.name}</span>
                    <span className="text-[var(--muted)]"> — {r.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Lektorka + CTA */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-semibold mb-6">Kurz vede Jarka Matušková</h2>
            <p className="text-[var(--muted)] leading-relaxed mb-10">
              Autorka metody JIH®, která se osobnímu rozvoji věnuje více než patnáct let. Metoda
              vznikala v letech 2010–2021 v součinnosti s Hankou Mokrou. Do kurzu předává vše, co ví —
              nic si nenechává na „dražší“ pokračování.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-[var(--gold)] text-white px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-[var(--gold-dark)] transition-colors"
            >
              Mám zájem o kurz
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
