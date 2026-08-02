import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllKurzy, getKurzBySlug, getBanner } from "@/lib/kurzy";

export function generateStaticParams() {
  return getAllKurzy().map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kurz = getKurzBySlug(slug);
  if (!kurz) return { title: "Kurz nenalezen" };
  return { title: kurz.title, description: kurz.tagline };
}

export default async function KurzDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kurz = getKurzBySlug(slug);
  if (!kurz) notFound();
  const banner = getBanner(slug);

  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--cream)] pt-40 pb-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--gold-dark)] mb-6">
              Kurz metody JIH®
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-6">
              {kurz.title}
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed italic">
              {kurz.tagline}
            </p>
          </div>
        </section>

        {banner && (
          <div className="max-w-3xl mx-auto px-6 -mt-8 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={banner}
              alt={kurz.title}
              className="w-full rounded-xl border border-[var(--gold-light)] shadow-sm"
            />
          </div>
        )}

        {/* Perex */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {kurz.perex.map((p, i) => (
              <p key={i} className="text-[var(--muted)] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Co se naučíte */}
        {kurz.naucite && (
          <section className="bg-[var(--cream)] py-16 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl font-semibold mb-6">{kurz.naucite.heading}</h2>
              <ul className="space-y-3">
                {kurz.naucite.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[var(--muted)] leading-relaxed">
                    <span className="text-[var(--gold)]">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Co je součástí */}
        {kurz.soucasti && (
          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl font-semibold mb-6">{kurz.soucasti.heading}</h2>
              <ul className="space-y-3">
                {kurz.soucasti.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[var(--muted)] leading-relaxed">
                    <span className="text-[var(--gold)]">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Cena + CTA */}
        <section className="bg-[var(--cream)] py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl font-semibold mb-4">Cena kurzu</h2>
            <p className="text-[var(--muted)] leading-relaxed mb-10">{kurz.cena}</p>
            <Link
              href="/kontakt"
              className="inline-block bg-[var(--gold)] text-white px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-[var(--gold-dark)] transition-colors"
            >
              Mám zájem o kurz
            </Link>
            <p className="mt-10">
              <Link href="/kurzy" className="text-sm text-[var(--gold-dark)] hover:text-[var(--gold)] transition-colors">
                ← Zpět na všechny kurzy
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
