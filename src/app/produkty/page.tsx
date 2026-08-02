import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { produkty } from "@/lib/produkty";

export const metadata: Metadata = {
  title: "Produkty",
  description: "Ruční díla našich terapeutů nesou energii metody JIH® — pro prosperitu, zdraví, vztahy i vaše záměry.",
};

export default function Produkty() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-[var(--cream)] pt-40 pb-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold leading-tight mb-6">
              Prohlédněte si výrobky našich terapeutů
            </h1>
            <p className="text-[var(--muted)] leading-relaxed">
              Všechna díla nesou energii metody JIH®, která podporuje prosperitu vašeho života,
              zdraví, vztahů i vašich záměrů. Potěšte krásným dárkem sebe i své blízké.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {produkty.map((p) => (
              <div key={p.name} className="flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.foto}
                  alt={p.name}
                  loading="lazy"
                  className="w-full aspect-square object-cover rounded-xl border border-[var(--gold-light)]"
                />
                <h2 className="mt-5 font-heading text-lg font-semibold">{p.name}</h2>
                <p className="text-[13px] text-[var(--gold-dark)] mb-2">{p.autor}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">{p.popis}</p>
                <a
                  href={p.odkaz}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm tracking-[0.1em] uppercase text-[var(--gold-dark)] hover:text-[var(--gold)] transition-colors"
                >
                  Více informací →
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
