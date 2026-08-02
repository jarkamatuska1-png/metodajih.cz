import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Aktuální termíny kurzů" };

type Termin = { text: string; url?: string };
type Sekce = { title: string; label?: string; items: Termin[] };

const sekce: Sekce[] = [
  {
    title: "Automatická kresba diagnostická",
    label: "On-line kurz",
    items: [
      { text: "Stálý on-line kurz Automatické kresby diagnostické pro začátečníky v rámci členské sekce Nikoly Usvaldové", url: "https://nikolausvaldova.cz/automaticka-kresba-diagnosticka" },
      { text: "Stálý on-line kurz Automatické kresby diagnostické pro začátečníky s Bárou Maxovou", url: "https://www.baramaxova.cz/" },
      { text: "Stálý on-line kurz Automatické kresby diagnostické pro začátečníky s Jarkou Matuškovou", url: "https://jarkamatuskova.cz/projekty/automaticka-kresba/" },
    ],
  },
  {
    title: "Škola života",
    items: [
      { text: "On-line kurz — v tuto chvíli není vypsán žádný termín Školy života on-line." },
      { text: "Živý kurz — v tuto chvíli není vypsán žádný termín Školy života naživo." },
    ],
  },
  {
    title: "Andělské učení",
    label: "On-line kurz",
    items: [
      { text: "Stálý online kurz Andělského učení s Ivou Zahran Kyselovou", url: "https://ivanaceste.cz/andelske-uceni/" },
    ],
  },
  {
    title: "Další kurzy metodou JIH®",
    label: "On-line i živé kurzy a přednášky",
    items: [
      { text: "Sám sobě terapeutem — online kurz s navazující možností získat certifikát terapeuta metodou JIH, kurzem provází Bára Benešová Maxová a Hanka Mokrá, úvodní hodina 18. 3. 2026", url: "https://www.baramaxova.cz/sam-sobe-terapeutem" },
      { text: "Najdi svoji životní cestu — cyklus 10 živých workshopů s Majou Vodvářkovou v Litoměřicích, od 23. 4. 2026 do 27. 8. 2026 každé dva týdny, vždy od 17.00 do 19.00 hodin", url: "https://moje.flixy.cz/maja2/p/najdi-svoji-ivotn-cestu-6hjddkccg" },
    ],
  },
  {
    title: "Stálé on-line kurzy",
    items: [
      { text: "Aromaterapie políbená JIHem — série e-booků a minikurzu s Janou Chyňava Urbanovou", url: "https://klub.urbanovajana.cz/aromaterapie/" },
      { text: "Anglické konverzace s osobním rozvojem metodou JIH® — Finally speaking! s Martinou Zelenickou", url: "https://martinazelenicka.cz/speaking-group/" },
      { text: "Online klub Anglicky v lehkosti — propojení angličtiny s osobním rozvojem, s Martinou Zelenickou", url: "https://tinyurl.com/46a8a3u6" },
      { text: "Jak mít peníze s Monikou Henzlovou", url: "https://bymoni.cz/p/objednej-si-m-j-skv-l-kurz--bx78u93qq" },
      { text: "Kouzelná sestava pro ženy — cvičení s Janou Javůrkovou zaměřené na pánevní dno, střed těla a hormonální rovnováhu", url: "https://janajavurkova.cz/produkt/kouzelna-sestava-laskou-k-sobe-online" },
      { text: "Minikurz Cvičení přirozeností těla a mysli s Hankou Mokrou", url: "https://hankamokra.cz/cpt-m/cpt-m-mini-kurz/" },
      { text: "Tvořím si svůj život — online klub osobního rozvoje s Nikolou Usvaldovou", url: "https://nikolausvaldova.cz/klub-tvorim-si-svuj-zivot/" },
      { text: "Vědomý život s Jarkou — online klub osobního rozvoje s Jarkou Matuškovou", url: "https://vedomyzivotsjarkou.cz/" },
      { text: "Podnikání v lehkosti a radosti — online klub s Ivou Zahran Kyselovou", url: "https://tinyurl.com/ynmjjfdm" },
      { text: "Online KLUB POKOJÍČEK Jany Javůrkové — (nejen) poporodní cvičení a cvičení pánevního dna pro ženy", url: "https://moje.flixy.cz/janajavurkova" },
    ],
  },
];

export default function AktualniTerminy() {
  return (
    <PageShell
      title="Aktuální termíny kurzů metodou JIH®"
      lead="Přehled aktuálně vypsaných a stálých kurzů metody JIH®."
    >
      <div className="space-y-12">
        {sekce.map((s) => (
          <div key={s.title}>
            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)]">{s.title}</h2>
            {s.label && (
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--gold-dark)] mt-1 mb-4">
                {s.label}
              </p>
            )}
            <ul className="space-y-4 mt-4">
              {s.items.map((it, i) => (
                <li key={i} className="text-[var(--muted)] leading-relaxed flex gap-3">
                  <span className="text-[var(--gold)]">—</span>
                  <span>
                    {it.text}
                    {it.url && (
                      <>
                        {" "}
                        <a
                          href={it.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--gold-dark)] hover:text-[var(--gold)] transition-colors whitespace-nowrap"
                        >
                          → více info
                        </a>
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
