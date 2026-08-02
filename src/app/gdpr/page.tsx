import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Ochrana osobních údajů" };

export default function Gdpr() {
  return (
    <PageShell title="Ochrana osobních údajů a cookies">
      <div className="space-y-8 text-[var(--muted)] leading-relaxed">
        <p>
          Svěřujete-li nám jako zákazník, účastník kurzů nebo návštěvník těchto stránek své osobní
          údaje, přečtěte si, jak je chráníme a jaká máte práva podle nařízení GDPR. Děkujeme za
          vaši důvěru.
        </p>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            Kdo je správce
          </h2>
          <p>
            Správcem vašich osobních údajů je společnost <strong>freli s.r.o.</strong>, IČO
            03927385, DIČ CZ03927385, se sídlem Jimlín č.p. 230, 440 01 Jimlín (dále jen
            „Poskytovatel“). Poskytovatel provozuje web www.metodajih.cz a určuje, jak a za jakým
            účelem se osobní údaje zpracovávají a po jakou dobu.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            Jak nás můžete kontaktovat
          </h2>
          <p>
            S jakýmkoli dotazem či připomínkou nás kontaktujte na e-mailu{" "}
            <a href="mailto:matuskova@freli.cz" className="text-[var(--gold-dark)] hover:text-[var(--gold)]">
              matuskova@freli.cz
            </a>{" "}
            nebo na telefonu{" "}
            <a href="tel:+420774420251" className="text-[var(--gold-dark)] hover:text-[var(--gold)]">
              +420 774 420 251
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            Jaké údaje a proč zpracováváme
          </h2>
          <ul className="space-y-3">
            <li>
              <strong>Plnění smlouvy a poskytnutí služby.</strong> Vaše jméno a e-mail nezbytně
              potřebujeme k tomu, abychom vám mohli zpřístupnit objednané kurzy a produkty a
              komunikovat s vámi o jejich průběhu.
            </li>
            <li>
              <strong>Vedení účetnictví.</strong> Objednáte-li si placený produkt, potřebujeme
              vaše fakturační údaje, abychom splnili zákonnou povinnost vystavit a evidovat daňové
              doklady.
            </li>
            <li>
              <strong>E-mailová komunikace.</strong> Na základě vašeho souhlasu nebo oprávněného
              zájmu vám můžeme zasílat informace o kurzech a metodě JIH®. Ze zasílání se můžete
              kdykoli odhlásit odkazem v patičce každého e-mailu.
            </li>
          </ul>
          <p className="mt-3">
            Osobní údaje si ponecháváme po dobu nezbytně nutnou, nejdéle po dobu běhu promlčecích
            lhůt, pokud zákon nestanoví delší dobu jejich uchování.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            Předávání údajů dalším stranám
          </h2>
          <p>
            Zpracování osobních údajů zajišťuje Poskytovatel, freli s.r.o. Pro nezbytný technický
            provoz webu (hosting a měření návštěvnosti) využíváme poskytovatele s odpovídající
            úrovní zabezpečení a v souladu s GDPR. Vaše údaje nepředáváme dalším třetím stranám bez
            vašeho souhlasu, s výjimkou plnění zákonných povinností.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            Cookies
          </h2>
          <p>
            Web používá nezbytné cookies pro svůj provoz a cookies pro anonymní měření
            návštěvnosti. Používání cookies můžete ve svém prohlížeči kdykoli omezit nebo zakázat.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            Zabezpečení a předávání mimo EU
          </h2>
          <p>
            Osobní údaje chráníme moderními technickými a organizačními opatřeními proti zneužití,
            poškození či zničení. Data zpracováváme v Evropské unii nebo v zemích zajišťujících
            odpovídající úroveň ochrany.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            Vaše práva
          </h2>
          <p>
            V souvislosti s ochranou osobních údajů máte právo na přístup k údajům, jejich opravu
            a doplnění, výmaz („právo být zapomenut“), omezení zpracování, přenositelnost údajů a
            právo vznést námitku. Kterékoli z těchto práv můžete uplatnit na e-mailu{" "}
            <a href="mailto:matuskova@freli.cz" className="text-[var(--gold-dark)] hover:text-[var(--gold)]">
              matuskova@freli.cz
            </a>
            ; vyřídíme je nejpozději do 30 dnů. Pokud se domníváte, že s vašimi údaji nezacházíme
            v souladu se zákonem, máte právo obrátit se se stížností na Úřad pro ochranu osobních
            údajů.
          </p>
        </section>

        <p className="text-sm">Tyto zásady jsou účinné od 2. 8. 2026.</p>
      </div>
    </PageShell>
  );
}
