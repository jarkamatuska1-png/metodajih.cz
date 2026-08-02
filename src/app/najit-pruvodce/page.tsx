import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { uvod, sekce, type Terapeut } from "@/lib/terapeuti";

export const metadata: Metadata = {
  title: "Najít průvodce",
  description: "Terapie a koučink metodou JIH® — vyberte si terapeuta podle sympatií nebo místa působiště.",
};

function Kontakty({ t }: { t: Terapeut }) {
  const k = t.kontakt;
  const cls =
    "text-[13px] text-[var(--gold-dark)] hover:text-[var(--gold)] transition-colors";
  return (
    <div className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1">
      {k.tel && <a href={`tel:${k.tel.replace(/\s/g, "")}`} className={cls}>{k.tel}</a>}
      {k.email && <a href={`mailto:${k.email}`} className={cls}>E-mail</a>}
      {k.web && <a href={k.web} target="_blank" rel="noopener noreferrer" className={cls}>Web</a>}
      {k.video && <a href={k.video} target="_blank" rel="noopener noreferrer" className={cls}>Video</a>}
      {k.pdf && <a href={k.pdf} target="_blank" rel="noopener noreferrer" className={cls}>O mně</a>}
    </div>
  );
}

function Karta({ t }: { t: Terapeut }) {
  return (
    <div className="text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={t.photo}
        alt={t.name}
        loading="lazy"
        className="w-28 h-28 mx-auto rounded-full object-cover border border-[var(--gold-light)]"
      />
      <p className="mt-4 font-heading text-lg font-semibold">{t.name}</p>
      {t.role && <p className="text-[13px] text-[var(--gold-dark)]">{t.role}</p>}
      {t.misto && <p className="text-[13px] text-[var(--muted)] mt-1">{t.misto}</p>}
      <Kontakty t={t} />
    </div>
  );
}

export default function NajitPruvodce() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-[var(--cream)] pt-40 pb-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold leading-tight mb-6">
              {uvod.h1}
            </h1>
            {uvod.odstavce.map((o, i) => (
              <p key={i} className="text-[var(--muted)] leading-relaxed">
                {o}
              </p>
            ))}
          </div>
        </section>

        {sekce.map((s) => (
          <section key={s.title} className="py-16 px-6 border-b border-[var(--cream-dark)] last:border-0">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center">
                {s.title}
              </h2>
              {s.podtitul && (
                <p className="text-center text-[var(--gold-dark)] text-sm tracking-[0.1em] uppercase mt-2">
                  {s.podtitul}
                </p>
              )}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                {s.lide.map((t) => (
                  <Karta key={t.name} t={t} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
