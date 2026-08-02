import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Obchodní podmínky" };

export default function ObchodniPodminky() {
  return (
    <PageShell title="Obchodní podmínky">
      <div className="space-y-8 text-[var(--muted)] leading-relaxed">
        <p>
          Tyto obchodní podmínky se použijí pro poskytování produktů v digitální podobě (online
          kurzy, webináře, e-booky a jiné produkty s digitálním obsahem) prostřednictvím webového
          rozhraní www.metodajih.cz.
        </p>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            I. Důležité pojmy
          </h2>
          <ul className="space-y-2">
            <li><strong>Poskytovatel</strong> — freli s.r.o., IČO 03927385, DIČ CZ03927385, se sídlem Jimlín č.p. 230, 440 01 Jimlín. E-mail: matuskova@freli.cz, telefon: +420 774 420 251.</li>
            <li><strong>Uživatel</strong> — ten, kdo s Poskytovatelem uzavře ohledně Produktu Smlouvu. Může jím být podnikatel nebo spotřebitel.</li>
            <li><strong>Spotřebitel</strong> — fyzická osoba, která při uzavírání Smlouvy jedná mimo rámec své podnikatelské činnosti.</li>
            <li><strong>Smlouva</strong> — smlouva o poskytování digitálního obsahu uzavíraná mezi Poskytovatelem a Uživatelem. Tvoří ji Objednávka, potvrzení Objednávky a tyto obchodní podmínky.</li>
            <li><strong>Produkt</strong> — online kurz, webinář, e-book či jiný produkt s digitálním obsahem.</li>
            <li><strong>Objednávka</strong> — řádně vyplněný a odeslaný elektronický objednávkový formulář.</li>
            <li><strong>Cena</strong> — odměna Poskytovatele za zpřístupnění Produktu, uvedená v korunách českých včetně DPH.</li>
            <li><strong>Web</strong> — internetové stránky www.metodajih.cz.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            II. Odpovědnost
          </h2>
          <p>
            Uživatel bere na vědomí, že digitální obsah Produktů užívá na vlastní riziko a že
            závisí jen na něm, jakým způsobem informace využije a jakých výsledků dosáhne.
            Poskytovatel neodpovídá za výsledky Uživatele. Digitální obsah Produktů nenahrazuje
            zdravotní péči.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            III. Recenze na webu
          </h2>
          <p>
            Případná hodnocení Produktů uvedená na webu pocházejí od osob, kterým byl digitální
            obsah Produktu skutečně zpřístupněn. Poskytovatel ověřuje důvěryhodnost recenzí podle
            evidence potvrzených objednávek.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            IV. Objednávka a uzavření smlouvy
          </h2>
          <p>
            Uživatel objednává Produkt odesláním řádně vyplněného objednávkového formuláře.
            Odesláním formuláře činí závaznou objednávku. Přijetí Objednávky Poskytovatel potvrdí
            e-mailem na adresu uvedenou v Objednávce; doručením tohoto potvrzení je Smlouva
            uzavřena.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            V. Cena a způsob platby
          </h2>
          <p>
            Na webu jsou uvedeny aktuální ceny Produktů včetně DPH. Pro Uživatele platí vždy cena
            aktuální v okamžiku objednání. Cena se hradí <strong>bankovním převodem</strong> na
            účet Poskytovatele; platební údaje obdrží Uživatel v e-mailu potvrzujícím přijetí
            Objednávky. Cena je splatná do 3 dnů od uzavření Smlouvy a je zaplacena okamžikem
            připsání částky na účet Poskytovatele. Ke zpřístupnění placeného Produktu dojde po
            úplném zaplacení Ceny, u splátek po zaplacení první splátky. Po přijetí platby
            Poskytovatel vystaví a zašle daňový doklad. Umožňuje-li web u konkrétního Produktu
            platbu ve splátkách, hradí se rovněž bankovním převodem a Uživatel se objednávkou
            zavazuje uhradit všechny splátky.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            VI. Zpřístupnění digitálního obsahu
          </h2>
          <p>
            Digitální obsah bude Uživateli zpřístupněn zasláním přístupových údajů nebo odkazu na
            e-mail uvedený v Objednávce, případně jiným způsobem uvedeným u konkrétního Produktu
            (např. přístup do uzavřené skupiny). Není-li uveden konkrétní den zpřístupnění, bude
            obsah zpřístupněn bez zbytečného odkladu po připsání platby. Není-li uvedeno jinak, má
            Uživatel k obsahu přístup po dobu uvedenou u Produktu.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            VII. Autorská práva a mlčenlivost
          </h2>
          <p>
            Digitální obsah Produktu je autorským dílem. Poskytovatel jej zpřístupňuje Uživateli
            pro jeho osobní potřebu; bez předchozího písemného souhlasu Poskytovatele jej nelze
            dále šířit ani zpřístupnit dalším osobám. Uživatel je povinen zachovávat mlčenlivost o
            přístupových údajích. Metoda JIH® je chráněna ochrannou známkou.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            VIII. Odstoupení od smlouvy
          </h2>
          <p>
            Je-li Uživatel spotřebitelem, má právo odstoupit od Smlouvy bez udání důvodu do 14 dnů
            ode dne jejího uzavření. Udělením souhlasu se započetím plnění (zpřístupněním
            digitálního obsahu) před uplynutím této lhůty právo na odstoupení bez udání důvodu
            zaniká. Odstoupení lze zaslat na kontaktní adresy Poskytovatele; byla-li již Cena
            uhrazena, vrátí ji Poskytovatel nejpozději do 30 dnů na účet, ze kterého byla zaplacena.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            IX. Reklamace
          </h2>
          <p>
            Po zpřístupnění Produktu si co nejdříve zkontrolujte funkčnost a dostupnost digitálního
            obsahu. Zjistíte-li vadu, kontaktujte Poskytovatele, aby mohl provést nápravu. Práva z
            vadného plnění se řídí příslušnými ustanoveními občanského zákoníku.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            X. Řešení sporů
          </h2>
          <p>
            Případný spor bude řešen přednostně smírnou cestou. Je-li Uživatel spotřebitelem, má
            právo na mimosoudní řešení sporu, jehož subjektem je Česká obchodní inspekce
            (www.coi.cz).
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
            XI. Závěrečná ustanovení
          </h2>
          <p>
            Odesláním objednávkového formuláře Uživatel stvrzuje, že se s obsahem těchto obchodních
            podmínek seznámil a souhlasí s ním. Smluvní vztah se řídí právním řádem České
            republiky, zejména občanským zákoníkem a — je-li Uživatel spotřebitelem — zákonem o
            ochraně spotřebitele. Tyto obchodní podmínky jsou účinné od 2. 8. 2026.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
