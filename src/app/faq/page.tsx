import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Časté dotazy" };

const faq = [
  {
    q: "Jak dlouho trvá terapie metodou JIH®?",
    a: "Nabízíme terapie v délce 60 minut, nebo konzultace trvající 30 minut.",
  },
  {
    q: "Musím se na terapii nějak připravit?",
    a: "Není třeba. Stačí odhodlání ke změně, vše ostatní už bude na spolupráci s průvodcem.",
  },
  {
    q: "Kde terapie probíhají?",
    a: "Naši průvodci jsou z různých koutů republiky. Každý z nich nabízí i terapie online nebo telefonicky, volba je jen na vás.",
  },
  {
    q: "Kolik terapií je zapotřebí a jak často?",
    a: "Terapie metodou JIH® plánujeme vždy podle vaší potřeby. Při jednom sezení pročistíme a obnovíme energii tak, že není nutné terapii opakovat s předem danou pravidelností.",
  },
  {
    q: "Kolik stojí terapie nebo konzultace metodou JIH®?",
    a: "Každý z průvodců má možnost mít svůj vlastní ceník. Minimální cena terapie je 2 000 Kč, konzultace pak 1 000 Kč.",
  },
  {
    q: "Je terapie nepříjemná, bolestivá?",
    a: "Při terapii odvádí hlavní práci průvodce. Vše je nastaveno tak, aby cokoliv, co je zpracováváno, klient vnímal v maximální lehkosti. Pracujeme bez nutnosti regrese a znovuprožívání traumat.",
  },
  {
    q: "Mohu si být jistý diskrétností?",
    a: "Každý průvodce je vázán etickým kodexem metody JIH®. Informace, které jsou předávány během terapie, nikdy nesdílíme s třetí stranou.",
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
