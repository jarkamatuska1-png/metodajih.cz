// Data přenesena 1:1 ze staré stránky „Produkty metody JIH®".

export type Produkt = {
  name: string;
  autor: string;
  popis: string;
  foto: string;
  odkaz: string;
};

export const produkty: Produkt[] = [
  {
    name: "Andělka v obraze",
    autor: "Pavli Hrdinová",
    popis: "Jedinečná Andělka tvořená na míru v sobě nese opravdovou andělskou energii.",
    foto: "/images/produkty/andelka-v-obraze.jpg",
    odkaz: "https://pavlihrdinova.cz/macrame-andelka-nejen-v-obraze/",
  },
  {
    name: "Energetické náramky",
    autor: "Iva Zahran Kyselová",
    popis: "Náramky z pravých kamenů poskládané jen a jen pro vás.",
    foto: "/images/produkty/energeticke-naramky.jpg",
    odkaz: "https://ivanaceste.cz/naramky-s-poselstvim/",
  },
  {
    name: "Šperky Be beauty",
    autor: "Martina Zelenická",
    popis: "Náušnice a náhrdelníky s poselstvím pro svou majitelku vznikají technikou akrylového lití.",
    foto: "/images/produkty/sperky-be-beauty.png",
    odkaz: "https://www.martinazelenicka.cz/shop",
  },
  {
    name: "Harmonizační obrazy",
    autor: "Anna Dlouhá",
    popis: "Obrazy plné energie podpoří váš záměr a naladí energii prostoru i osob.",
    foto: "/images/produkty/harmonizacni-obrazy.jpg",
    odkaz: "https://anna-dlouha.cz/co-nabizim",
  },
  {
    name: "Kouzelný slon",
    autor: "Vlasta Maršálková",
    popis: "Kouzelný plyšový slon, který vnáší do života klid a novou energii.",
    foto: "/images/produkty/kouzelny-slon.jpg",
    odkaz: "https://vlastamarsalkova.cz/",
  },
  {
    name: "Peněženky na podporu hojnosti",
    autor: "Maja Vodvářková",
    popis: "Designové peněženky a tašky z luxusních látek a kůže.",
    foto: "/images/produkty/penezenky-hojnost.jpg",
    odkaz: "https://www.facebook.com/maria.vodvarkova",
  },
  {
    name: "Kožené peněženky hojnosti",
    autor: "Alena Urbánková Vokounová",
    popis: "Ručně šité kožené peněženky pro podporu energie hojnosti.",
    foto: "/images/produkty/kozene-penezenky.jpg",
    odkaz: "https://www.facebook.com/alena.vokounova.1",
  },
  {
    name: "Trojcípý šátek pro ženy",
    autor: "Jana Javůrková",
    popis: "Lněný šátek určený k odlehčení těhotenského bříška či podpoře břišní stěny po porodu.",
    foto: "/images/produkty/trojcipy-satek.jpg",
    odkaz: "https://laskouksobe.cz/obchod/",
  },
  {
    name: "Šité šperky na míru",
    autor: "Lucie Kouparová",
    popis: "Unikátní šperky vyrobené vždy jen na objednávku podpoří vaši energii i záměry.",
    foto: "/images/produkty/site-sperky.jpg",
    odkaz: "https://www.luciekouparova.cz/jedinecne-sperky",
  },
  {
    name: "Intuitivní obrazy s poselstvím",
    autor: "Jana Pospíšilová",
    popis: "Harmonizující akrylové či akvarelové obrazy s poselstvím přímo pro vás.",
    foto: "/images/produkty/intuitivni-obrazy.jpg",
    odkaz: "https://www.jana-pospisilova.cz/",
  },
  {
    name: "Kabelka se záměrem",
    autor: "Nikola Usvaldová",
    popis: "Háčkované kabelky vás podpoří v každé situaci.",
    foto: "/images/produkty/kabelka-se-zamerem.jpg",
    odkaz: "https://nikolausvaldova.cz/kabelka-se-zamerem",
  },
  {
    name: "Aromaterapie na míru",
    autor: "Jana Urbanová",
    popis: "Aromaterapie pro tělo i duši, vaší energii na míru.",
    foto: "/images/produkty/aromaterapie.png",
    odkaz: "https://urbanovajana.cz/aromaterapie-2/",
  },
];
