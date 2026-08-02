import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PageShell({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-[var(--cream)] pt-40 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold leading-tight">
              {title}
            </h1>
            {lead && (
              <p className="mt-6 text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
                {lead}
              </p>
            )}
          </div>
        </section>
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose-content">{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
