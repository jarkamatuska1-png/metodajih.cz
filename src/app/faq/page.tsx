import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Časté dotazy",
  description:
    "Jak probíhá terapie metodou JIH®, kolik stojí, kde se konají setkání a co znamenají označení Specialista, Senior specialista a Garant metody JIH®.",
  alternates: { canonical: "/faq" },
};

const faq = [
  {
    q: "Jak dlouho trvá terapie metodou JIH®?",
    a: "Nabízíme terapie v délce 60 minut, nebo konzultace trvající 30 minut.",
  },
  {
    q: "Musím se na terapii nějak připravit?",
    a: "Není třeba. Stačí odhodlání ke změně, vše ostatní už bude na spolupráci se specialistou.",
  },
  {
    q: "Kde terapie probíhají?",
    a: "Naši specialisté jsou z různých koutů republiky. Každý z nich nabízí i terapie online nebo telefonicky, volba je jen na vás.",
  },
  {
    q: "Kolik terapií je zapotřebí a jak často?",
    a: "Terapie metodou JIH® plánujeme vždy podle vaší potřeby. Při jednom sezení pročistíme a obnovíme energii tak, že není nutné terapii opakovat s předem danou pravidelností.",
  },
  {
    q: "Kolik stojí terapie nebo konzultace metodou JIH®?",
    a: "Každý specialista má možnost mít svůj vlastní ceník. Minimální cena terapie je 2 000 Kč, konzultace pak 1 000 Kč.",
  },
  {
    q: "Je terapie nepříjemná, bolestivá?",
    a: "Při terapii odvádí hlavní práci specialista. Vše je nastaveno tak, aby cokoliv, co je zpracováváno, klient vnímal v maximální lehkosti. Pracujeme bez nutnosti regrese a znovuprožívání traumat.",
  },
  {
    q: "Mohu si být jistý diskrétností?",
    a: "Každý specialista je vázán Etickým kodexem metody JIH®. Informace, které jsou předávány během terapie, nikdy nesdílíme s třetí stranou.",
  },
  {
    q: "Co znamená Specialista, Senior specialista a Garant metody JIH®?",
    a: "Jsou to interní kvalifikační stupně, které uděluje autorka metody. Specialista metody JIH® absolvoval vzdělávací program a získal interní certifikaci. Senior specialista prošel rozšířeným vzděláváním a praxí. Garant metody JIH® je nejvyšší interní úroveň a odpovídá za celistvost metody a vzdělávání dalších specialistů. Od 1. 8. 2026 tato označení nahrazují dřívější „Terapeut“ a „Terapeut profesionál“.",
  },
  {
    q: "Nahradí terapie metodou JIH® lékaře nebo psychologa?",
    a: "Ne. Metoda JIH® je autorský vzdělávací a seberozvojový přístup. Není zdravotní službou, psychologickým poradenstvím ani psychoterapií a interní certifikace JIH® není státem uznaná odborná kvalifikace. Specialista nestanovuje diagnózu, neléčí a neslibuje léčebný výsledek. Když potřebujete lékaře, psychologa nebo psychoterapeuta, metoda JIH® jejich péči nenahrazuje, může ji jen doprovázet.",
  },
];

export default function Faq() {
  return (
    <PageShell title="Časté dotazy" lead="Co klienty nejvíce zajímá.">
      <div className="space-y-8">
        {faq.map((item) => (
          <div key={item.q}>
            <h2 className="font-heading text-xl font-semibold mb-2">{item.q}</h2>
            <p className="text-[var(--muted)] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
