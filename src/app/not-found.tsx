import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex-1 flex items-center justify-center px-6 py-40 text-center">
        <div className="max-w-lg">
          <p className="font-heading text-6xl font-semibold text-[var(--gold)] mb-6">404</p>
          <h1 className="font-heading text-2xl font-semibold mb-4">Stránka nenalezena</h1>
          <p className="text-[var(--muted)] leading-relaxed mb-8">
            Tuto stránku se nepodařilo najít. Možná byla přesunuta při přechodu na nový web.
          </p>
          <Link
            href="/"
            className="inline-block bg-[var(--gold)] text-white px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-[var(--gold-dark)] transition-colors"
          >
            Zpět na úvod
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
