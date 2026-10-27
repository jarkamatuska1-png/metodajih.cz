// Data přenesena ze staré stránky „Najít terapeuta". Postavení podle Etického
// kodexu metody JIH® 2026.2 (čl. 3, 25–27), v ženském tvaru:
// Terapeut → Specialistka, Terapeut profesionál → Senior specialistka,
// Garantka (Hana Mokrá, Barbora Benešová — určila Jarka 27. 10. 2026).
// Lektorka = funkční oprávnění u konkrétní osoby.

export type Kontakt = {
  tel?: string;
  email?: string;
  web?: string;
  video?: string;
  pdf?: string;
};

export type Specialista = {
  name: string;
  photo: string;
  role?: string;
  misto?: string;
  kontakt: Kontakt;
};

export type Sekce = {
  title: string;
  podtitul?: string;
  lide: Specialista[];
};

export const uvod = {
  h1: "Najít specialistu metody JIH®",
  odstavce: [
    "Vyberte si podle svých sympatií nebo podle místa působiště. Domluvte si termín a preferovaný způsob komunikace.",
    "On-line přes Zoom, WhatsApp či Messenger, telefonicky nebo osobně v místě působiště specialisty.",
  ],
};

export const sekce: Sekce[] = [
  {
    title: "Autorka metody JIH®",
    lide: [
      {
        name: "Jarka Matušková",
        photo: "/images/terapeuti/jarka-matuskova.png",
        misto: "Praha, Jimlín u Loun",
        kontakt: { tel: "774 420 251", email: "matuskova@freli.cz", web: "https://jarkamatuskova.cz/" },
      },
    ],
  },
  {
    title: "Garantky, specialistky a lektorky metody JIH®",
    podtitul: "Pro terapie úrovně 1, 2, 3",
    lide: [
      {
        name: "Ing. Jana Chyňava Urbanová",
        photo: "/images/terapeuti/jana-urbanova.png",
        role: "Specialistka metody JIH®",
        misto: "Děčín",
        kontakt: { tel: "723 772 698", email: "ju.urbanova@gmail.com", web: "https://urbanovajana.cz/", video: "https://youtu.be/V1nRhXji9ws" },
      },
      {
        name: "Ing. Hana Mokrá, PhD., BCST",
        photo: "/images/terapeuti/hana-mokra.jpg",
        role: "Garantka metody JIH®",
        misto: "Brno",
        kontakt: { tel: "775 282 229", email: "mokra@freli.cz", web: "https://hankamokra.cz/", video: "https://www.youtube.com/watch?v=dWKDx5H5Kiw" },
      },
      {
        name: "Ing. Simona Vrabcová",
        photo: "/images/terapeuti/simona-vrabcova.jpg",
        role: "Senior specialistka metody JIH®",
        misto: "Děčín",
        kontakt: { tel: "777 096 100", email: "vrabcova.simona@seznam.cz", web: "https://vrabcovasimona.cz/", video: "https://www.youtube.com/watch?v=YuucpVAJDzU" },
      },
      {
        name: "Mgr. Barbora Benešová",
        photo: "/images/terapeuti/barbora-maxova.jpg",
        role: "Garantka metody JIH®",
        misto: "České Budějovice",
        kontakt: { tel: "725 234 321", email: "maxova.b@seznam.cz", web: "https://www.baramaxova.cz/", video: "https://www.youtube.com/watch?v=m_czR-NUNFE" },
      },
      {
        name: "Ing. Mária Vodvářková",
        photo: "/images/terapeuti/maria-vodvarkova.jpg",
        role: "Specialistka metody JIH®",
        misto: "Ústí nad Labem, Praha",
        kontakt: { tel: "721 463 194", email: "vodvarkova@email.cz", web: "https://majavodvarkova.cz/", video: "https://youtube.com/shorts/Sc1Z21HXNzY" },
      },
      {
        name: "Anna Dlouhá",
        photo: "/images/terapeuti/anna-dlouha.jpg",
        role: "Specialistka metody JIH®",
        misto: "Ústí nad Labem",
        kontakt: { tel: "723 074 749", email: "andlouha@seznam.cz", web: "http://anna-dlouha.cz/", video: "https://youtu.be/UrfCwZlcCzE" },
      },
      {
        name: "Pavli Hrdinová, DiS.",
        photo: "/images/terapeuti/pavli-hrdinova.jpg",
        role: "Specialistka metody JIH®",
        misto: "Plzeň",
        kontakt: { tel: "777 832 218", email: "metodajih@pavlihrdinova.cz", web: "https://pavlihrdinova.cz/", video: "https://youtube.com/shorts/3Xi7BSrI7eU" },
      },
      {
        name: "Nikola Usvaldová",
        photo: "/images/terapeuti/nikola-usvaldova.jpg",
        role: "Specialistka a lektorka metody JIH®",
        misto: "Praha, Nový Jičín",
        kontakt: { tel: "732 529 437", email: "nikola.usvald@email.cz", web: "https://nikolausvaldova.cz/", video: "https://www.youtube.com/watch?v=0wR6Qw6EZ9c" },
      },
      {
        name: "MVDr. Alexandra Bulková",
        photo: "/images/terapeuti/alexandra-bulkova.png",
        role: "Specialistka metody JIH®",
        misto: "Trenčín",
        kontakt: { tel: "+421 911 770 476", email: "bulkova.alexandra.terapie@gmail.com", web: "https://www.alexandrabulkova.cz/", video: "https://youtu.be/NY0Hf-QM-g8" },
      },
      {
        name: "Veronika Coufalová",
        photo: "/images/terapeuti/veronika-coufalova.jpg",
        role: "Specialistka metody JIH® a stylistka",
        kontakt: { web: "https://plussizelife.cz/", video: "https://youtu.be/liXrmBtW6G4" },
      },
      {
        name: "Ing. Iva Zahran Kyselová",
        photo: "/images/terapeuti/iva-zahran-kyselova.jpg",
        role: "Specialistka a lektorka metody JIH®",
        kontakt: { web: "https://www.ivanaceste.cz/", video: "https://youtu.be/Xmf19MxJWa0" },
      },
      {
        name: "Bc. Eva Handzová",
        photo: "/images/terapeuti/eva-handzova.jpg",
        role: "Specialistka metody JIH®",
        kontakt: {},
      },
      {
        name: "Petra Sochůrková",
        photo: "/images/terapeuti/petra-sochurkova.jpg",
        role: "Specialistka metody JIH®",
        kontakt: { video: "https://youtu.be/VqnKUzmh7-0" },
      },
      {
        name: "Mgr. Magdaléna Mičková",
        photo: "/images/terapeuti/magdalena-mickova.jpeg",
        role: "Specialistka metody JIH®",
        kontakt: { web: "http://www.magdalenamickova.cz" },
      },
      {
        name: "Bc. Monika Henzlová, DiS.",
        photo: "/images/terapeuti/monika-henzlova.jpg",
        role: "Specialistka a lektorka metody JIH®",
        misto: "Přibyslav",
        kontakt: { tel: "775 304 443", email: "monikahenzlova@seznam.cz", web: "https://www.monikahenzlova.cz/" },
      },
      {
        name: "Vlasta Maršálková",
        photo: "/images/terapeuti/vlasta-marsalkova.png",
        role: "Specialistka metody JIH®",
        kontakt: { web: "http://www.vlastamarsalkova.cz", video: "https://youtu.be/W8bPSwILpmQ" },
      },
      {
        name: "Vendula Šnejdarová",
        photo: "/images/terapeuti/vendula-snejdarova.png",
        role: "Specialistka metody JIH®",
        kontakt: {},
      },
    ],
  },
  {
    title: "Specialistky pro terapie úrovně 1, 3",
    lide: [
      {
        name: "Lucka Kouparová",
        photo: "/images/terapeuti/lucie-kouparova.jpg",
        role: "Specialistka metody JIH®",
        misto: "Polná u Jihlavy",
        kontakt: { tel: "602 201 165", email: "luciekouparova@gmail.com", web: "https://www.luciekouparova.cz/", video: "https://www.youtube.com/watch?v=TxymhLY3G_Y" },
      },
      {
        name: "Petra Bendičáková",
        photo: "/images/terapeuti/petra-bendicakova.jpg",
        role: "Specialistka metody JIH®",
        kontakt: { web: "https://moje.flixy.cz/petrabendicakova" },
      },
      {
        name: "Ing. Jana Pospíšilová",
        photo: "/images/terapeuti/jana-pospisilova.jpg",
        role: "Specialistka metody JIH®",
        misto: "Zlín",
        kontakt: { tel: "776 161 435", email: "posp.jana@volny.cz", web: "https://www.jana-pospisilova.cz/", video: "https://youtu.be/ZJdnB6lSuQI" },
      },
      {
        name: "Alena Urbánková",
        photo: "/images/terapeuti/alena-urbankova.jpg",
        role: "Specialistka metody JIH®",
        kontakt: { pdf: "/dokumenty/alena-urbankova-o-mne.pdf" },
      },
      {
        name: "Ing. Hana Hrabalová",
        photo: "/images/terapeuti/hana-hrabalova.jpg",
        role: "Specialistka metody JIH®",
        misto: "Poděbrady",
        kontakt: { tel: "777 907 705", email: "hrabalova.hana@centrum.cz", web: "https://hankahrabalova.cz/", video: "https://www.youtube.com/watch?v=znoQ-faTsVY" },
      },
      {
        name: "Bc. Martina Zelenická",
        photo: "/images/terapeuti/martina-zelenicka.jpg",
        role: "Senior specialistka metody JIH®",
        kontakt: { web: "https://www.martinazelenicka.cz/", video: "https://youtu.be/YweZjiM1EN0" },
      },
      {
        name: "Danuše Navrátilová",
        photo: "/images/terapeuti/danuse-navratilova.png",
        role: "Specialistka metody JIH®",
        kontakt: { video: "https://www.youtube.com/watch?v=czzWkezWBSs" },
      },
      {
        name: "Jana Vinopalová, DiS.",
        photo: "/images/terapeuti/jana-vinopalova.jpg",
        role: "Specialistka metody JIH®",
        kontakt: { video: "https://youtu.be/GkkNc7GFLZw" },
      },
      {
        name: "Mgr. Martina Fedák",
        photo: "/images/terapeuti/martina-fedak.jpg",
        role: "Specialistka metody JIH®",
        kontakt: { video: "https://www.youtube.com/watch?v=p-sn68IRPes" },
      },
      {
        name: "Zuzana Ihnátková",
        photo: "/images/terapeuti/zuzana-ihnatkova.jpg",
        role: "Specialistka metody JIH®",
        misto: "Čelákovice",
        kontakt: { tel: "776 138 742", email: "zuzanaihnatkova@gmail.com", web: "https://zuzanaihnatkova.cz", pdf: "/dokumenty/zuzana-ihnatkova-o-mne.pdf" },
      },
      {
        name: "Marcela Uhrová",
        photo: "/images/terapeuti/marcela-uhrova.jpg",
        role: "Specialistka metody JIH®",
        kontakt: { video: "https://youtu.be/IQngAKIrdLY" },
      },
      {
        name: "Jana Javůrková",
        photo: "/images/terapeuti/jana-javurkova.jpg",
        role: "Specialistka metody JIH®",
        misto: "Praha",
        kontakt: { tel: "737 549 976", email: "jana@janajavurkova.cz", web: "https://janajavurkova.cz/", video: "https://www.youtube.com/watch?v=rHqYkznT6Qc" },
      },
      {
        name: "Romana Vondrová",
        photo: "/images/terapeuti/romana-vondrova.jpg",
        role: "Specialistka metody JIH®",
        misto: "Ústí nad Labem",
        kontakt: { tel: "723 390 589", email: "romivolfi@gmail.com", web: "https://www.romanavondrova.cz/" },
      },
      {
        name: "Ing. Klára Mrazíková",
        photo: "/images/terapeuti/klara-mrazikova.jpg",
        role: "Senior specialistka metody JIH®",
        misto: "Praha",
        kontakt: { tel: "728 470 089", email: "info@klaramrazikova.cz", web: "https://klaramrazikova.cz/", video: "https://www.youtube.com/watch?v=4gzR23Uf4Q8" },
      },
    ],
  },
];
