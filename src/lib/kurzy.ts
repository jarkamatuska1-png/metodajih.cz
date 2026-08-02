export type Kurz = {
  slug: string;
  title: string;
  tagline: string;
  perex: string[];
  naucite?: { heading: string; items: string[] };
  soucasti?: { heading: string; items: string[] };
  cena: string;
};

// Obsah přenesen ze statické zálohy metodajih.cz. Názvy a texty zatím
// ponechány v původní podobě — doladí se v dalším kroku.
export const kurzy: Kurz[] = [
  {
    slug: "sam-sobe-terapeutem",
    title: "Sám sobě terapeutem",
    tagline:
      "Osvoboďte se ze zajetí rozumu a ega a zbavte se tíhy života. Naučíme vás základní principy metody JIH® a to, jak je zařadit do svého každodenního života.",
    perex: [
      "Roční obsáhlý kurz osobního rozvoje metodou JIH® má stejnou hloubku jako kurz pro budoucí terapeuty, pouze bez terapeutického zaměření.",
    ],
    naucite: {
      heading: "Co se v kurzu naučíte?",
      items: [
        "Naučíme se vnímat a cítit energie (emoce, pocity, postoje, iluze i dogmata) i to, jak se vrátit do své vlastní energie a přestat odžívat to, co není vaše.",
        "Poznáte do hloubky sami sebe i souvislosti života, opustíte staré návyky a stanete se odolnějším vůči všemu, co život přináší.",
        "Získáváte obrovský potenciál díky obnově své energie a opravdového zapojení intuice, vnímání Boha v sobě, do svého života.",
      ],
    },
    soucasti: {
      heading: "Co je součástí kurzu?",
      items: [
        "4× čtyřdenní setkání naživo",
        "4× jednodenní online workshopy",
        "4× individuální konzultace",
        "závěrečné jednodenní setkání",
        "Škola channelingu — osmitýdenní kurz stahování informací ze zdroje",
        "uzavřené prostředí pro komunikaci po celou dobu kurzu",
      ],
    },
    cena: "Cena kurzu je 124 800 Kč s možností platby v předem dohodnutých splátkách.",
  },
  {
    slug: "skola-zivota",
    title: "Škola života",
    tagline: "Objevte sebe a naučte se používat svou intuici v každodenním životě",
    perex: [
      "Tento kurz je jedním ze základních stavebních kamenů metody JIH® a je rozložen do 10 měsíců.",
      "Budeme se setkávat vždy jednou měsíčně v rozsahu cca 3,5 hodiny. Postupně se tak budeme věnovat 10 základním oblastem života (vztah k sobě i okolí, ke zdraví, k práci, projdeme váš postoj k penězům a další).",
      "Všechna témata společně pročistíme jako při terapii metodou JIH®. Škola života je autorský projekt Jarky Matuškové, autorky metody JIH®.",
    ],
    naucite: {
      heading: "Co se v kurzu naučíte?",
      items: [
        "Získáte schopnost používat svou intuici jasně a bez pochybností.",
        "Najdete zdravé sebevědomí a pocit vlastní hodnoty ve vztazích i v práci.",
        "Naučíte se komunikovat otevřeně a upřímně.",
        "Pochopíte, proč zažíváte věci, které zažíváte, a nastavíte si nové cíle a záměry.",
        "Vaše energie se v každé oblasti života obnoví do svého plného potenciálu.",
      ],
    },
    cena: "Cena kurzu je 3 000 Kč za rezervaci místa a dále 2 000 Kč za každý měsíc trvání kurzu.",
  },
  {
    slug: "skola-zivota-pro-deti",
    title: "Škola života pro děti",
    tagline: "Co kdyby vaše děti měly poznání, které máte dnes vy?",
    perex: [
      "Škola života podporuje u dětí vnímání a cítění, učí je chápat svoje práva, ale i povinnosti. Zjednodušuje jim orientaci v „dospělém“ světě i v nich samotných.",
      "Pomáhá jim uvědomit si své sny, otevřeně komunikovat a se zdravým sebevědomím být zodpovědný za sebe sama.",
    ],
    naucite: {
      heading: "Co se vaše děti v kurzu naučí?",
      items: [
        "I děti potřebují znát zákonitosti světa energií, význam emocí a postojů v tvoření života.",
        "V kurzu objeví vnímání vlastní hodnoty a naučí se rozpoznávat, kdy je chytá do pasti ego.",
        "Chápání souvislostí vztahů i světa kolem se pro ně stane jednodušším.",
        "Dětem se otevře cesta k vnímání a rozvíjení vlastních talentů a dovedností.",
      ],
    },
    cena: "Cena kurzu je 5 990 Kč za cyklus 5 lekcí, včetně terapie pro rodiče.",
  },
  {
    slug: "andelske-uceni",
    title: "Andělské učení",
    tagline:
      "Nalaďte se na jemné andělské energie a přijměte je do svého života v podobě pocitů lásky, něhy a moudrosti",
    perex: [
      "Ucítíte laskavou péči těchto energií i vědomí, že nejste na život sami a s nimi i chuť do nového tvoření.",
      "Důvěrou v andělské energie získáváte postupně důvěru v sebe sama.",
      "Andělské učení je projekt Jarky Matuškové, kterému dala aktuální podobu Hana Mokrá.",
    ],
    naucite: {
      heading: "Co se v kurzu naučíte?",
      items: [
        "Naučíte se přijmout, že na život nemusíte být sami a že je v pořádku nechat si pomáhat.",
        "Důvěrou v andělské energie postupně získáte důvěru v sebe sama.",
        "Objevíte jemnost andělských energií jako vnějších činitelů i aspektů nás samotných.",
        "Získáte jistotu víry ve své vlastní vnímání, která vám pomůže tvořit vědomě svůj život.",
      ],
    },
    cena: "Andělské učení je rozděleno do dvou kurzů (I. a II. část). Cena každé z částí kurzu je 5 200 Kč.",
  },
  {
    slug: "automaticka-kresba-diagnosticka",
    title: "Automatická kresba diagnostická",
    tagline: "Rychlá pomoc, kterou máte vždy při ruce, v 7 pastelkách",
    perex: [
      "Rozklíčujte si sami jakékoliv trápení, problém či vztah a pociťte úlevu ve svém těle. Nepotřebujete žádné předchozí zkušenosti. Naučíme vás, jak používat celkem 7 barev a jak provádět diagnostiku obrázku.",
    ],
    naucite: {
      heading: "Co se v kurzu naučíte?",
      items: [
        "Úvod do samostatné práce s energiemi, vnímáním a cítěním.",
        "Naučíte se pracovat pomocí kresby se sedmi základními barvami, kterými budete schopni nejen rozklíčovat energii vztahů, postojů či situací, ale zároveň ji pročistit.",
        "Získáte nadhled i nové vnímání toho, co prožíváte, stejně jako možnost mít úlevu opravdu kdykoliv po ruce.",
        "Naučíte se vnímat svou boží podstatu a pracovat se svými záměry po vyčištění energie.",
      ],
    },
    cena: "Cena týdenního online kurzu je 4 990 Kč.",
  },
  {
    slug: "vedome-tvoreni-vlastni-reality",
    title: "Vědomé tvoření vlastní reality",
    tagline: "Připusťte nové možnosti do svého života a plňte si své sny",
    perex: [
      "Nevědomé aktivity přináší chaos a zklamání. Díky vědomému tvoření se stává život mnohem lehčí, krásnější a přirozenější.",
      "Společně odkryjeme důvody vašeho nepohodlí. Vybudujeme nový koncept vědomých záměrů pro váš úspěch a vaši radost.",
    ],
    naucite: {
      heading: "Co se v kurzu naučíte?",
      items: [
        "Objevíte šest zabijáků prosperity a naučíte se jich zbavit.",
        "Vysvětlení nepohodlí je jen začátek, máme pro vás jasné kroky v praxi, které opravdu fungují.",
        "Získáte sílu, odvahu, chuť objevovat a nacházet řešení tam, kde jste ho dosud nedokázali najít.",
        "Poznáte jednoduchá pravidla a souvislosti vědomého tvoření a určování i naplňování vašich záměrů.",
      ],
    },
    cena: "Cena šestidenního on-line kurzu je 5 990 Kč.",
  },
  {
    slug: "cviceni-cpt-m",
    title: "Cvičení CPT-M",
    tagline: "Objevte v sobě potenciál zdraví a vnímejte, co vaše tělo právě potřebuje",
    perex: [
      "CPT-M (Cvičení přirozeností těla a mysli) je terapeutické cvičení založené na vnímání hlubokých potřeb našeho těla. Díky tomu dokáže reagovat na aktuální stav organismu jak v rovině fyzické, tak energetické, a cvičení mu přizpůsobit.",
      "Obsahuje prvky SM-systému, jógy, pilates i rehabilitačního cvičení, jeho základem i spojovatelem všech prvků je energie metody JIH®. Jeho autorkou je Hana Mokrá, spoluautorka metody JIH®.",
    ],
    naucite: {
      heading: "Co se v kurzu naučíte?",
      items: [
        "Objevíte jednoduchou a neinvazivní cestu k hlubokému uvolnění i posílení těla.",
        "Uvolníte přetíženou psychiku a naučíte se jak přirozeně relaxovat.",
        "Naučíte se jednoduché principy, které dokážete aplikovat na jakýkoliv druh pohybu.",
        "Začnete vnímat pohyb v energetické i fyzické rovině zároveň.",
      ],
    },
    cena: "Cena sedmidenního on-line kurzu je 4 800 Kč.",
  },
  {
    slug: "skola-channelingu",
    title: "Škola channelingu",
    tagline: "Stahujte si s jistotou pravdivé informace přímo ze zdroje",
    perex: [
      "Osmitýdenní živý online kurz, kde se naučíte základy metody JIH®, zjednodušenou Automatickou kresbu diagnostickou, spolehlivé vnímání a cítění toho, co vám channeling přináší. Naučíte se přijímat pravdivé informace přímo ze zdroje a získáte stabilitu pro svůj život.",
    ],
    naucite: {
      heading: "Co se v kurzu naučíte?",
      items: [
        "Naučíte se přijímat informace přímo ze zdroje — ze své Boží podstaty, a to na základě záměru či požadavku.",
        "Povíme si, co je to neutralita a jak v ní přijímat informace, bez lpění, očekávání a předjímání o jejich obsahu a formě.",
        "Nahlédnete do budoucnosti a odkryjete souvislosti z minulosti.",
        "Pochopíte, jak nastavovat aktuální situace tak, aby vaše energie hmotnila to, co je pro vás přínosné.",
        "Během kurzu budete získávat rovnou praktické zkušenosti. Každý den má své téma, které rovnou procvičujete.",
      ],
    },
    cena: "Cena za každou část kurzu je 19 990 Kč. Kurz probíhá ve dvou čtyřtýdenních blocích s pauzou 14 dní mezi oběma částmi. Platbu je možno uhradit v jedné, dvou nebo deseti platbách po sobě jdoucích.",
  },
];

export function getAllKurzy(): Kurz[] {
  return kurzy;
}

export function getKurzBySlug(slug: string): Kurz | undefined {
  return kurzy.find((k) => k.slug === slug);
}
