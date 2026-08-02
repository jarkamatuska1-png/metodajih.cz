// Data přenesena 1:1 ze staré stránky „Najít terapeuta". Terminologie
// („terapeut") ponechána v původní podobě — přejmenuje se po setkání terapeutů.

export type Kontakt = {
  tel?: string;
  email?: string;
  web?: string;
  video?: string;
  pdf?: string;
};

export type Terapeut = {
  name: string;
  photo: string;
  role?: string;
  misto?: string;
  kontakt: Kontakt;
};

export type Sekce = {
  title: string;
  podtitul?: string;
  lide: Terapeut[];
};

export const uvod = {
  h1: "Terapie a koučink metodou JIH®",
  odstavce: [
    "Vyberte si podle svých sympatií nebo podle místa působiště. Domluvte si termín a preferovaný způsob komunikace.",
    "On-line přes Zoom, WhatsApp či Messenger, telefonicky nebo osobně v místě působiště terapeuta.",
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
    title: "Certifikovaní terapeuti a lektoři metodou JIH®",
    podtitul: "Terapeuti pro terapie úrovně 1, 2, 3",
    lide: [
      {
        name: "Ing. Jana Chyňava Urbanová",
        photo: "/images/terapeuti/jana-urbanova.png",
        misto: "Děčín",
        kontakt: { tel: "723 772 698", email: "ju.urbanova@gmail.com", web: "https://urbanovajana.cz/", video: "https://youtu.be/V1nRhXji9ws" },
      },
      {
        name: "Ing. Hana Mokrá, PhD., BCST",
        photo: "/images/terapeuti/hana-mokra.jpg",
        misto: "Brno",
        kontakt: { tel: "775 282 229", email: "mokra@freli.cz", web: "https://hankamokra.cz/", video: "https://www.youtube.com/watch?v=dWKDx5H5Kiw" },
      },
      {
        name: "Ing. Simona Vrabcová",
        photo: "/images/terapeuti/simona-vrabcova.jpg",
        role: "Terapeut profesionál",
        misto: "Děčín",
        kontakt: { tel: "777 096 100", email: "vrabcova.simona@seznam.cz", web: "https://vrabcovasimona.cz/", video: "https://www.youtube.com/watch?v=YuucpVAJDzU" },
      },
      {
        name: "Mgr. Barbora Benešová Maxová",
        photo: "/images/terapeuti/barbora-maxova.jpg",
        misto: "České Budějovice",
        kontakt: { tel: "725 234 321", email: "maxova.b@seznam.cz", web: "https://www.baramaxova.cz/", video: "https://www.youtube.com/watch?v=m_czR-NUNFE" },
      },
      {
        name: "Ing. Mária Vodvářková",
        photo: "/images/terapeuti/maria-vodvarkova.jpg",
        misto: "Ústí nad Labem, Praha",
        kontakt: { tel: "721 463 194", email: "vodvarkova@email.cz", web: "https://majavodvarkova.cz/", video: "https://youtube.com/shorts/Sc1Z21HXNzY" },
      },
      {
        name: "Anna Dlouhá",
        photo: "/images/terapeuti/anna-dlouha.jpg",
        misto: "Ústí nad Labem",
        kontakt: { tel: "723 074 749", email: "andlouha@seznam.cz", web: "http://anna-dlouha.cz/", video: "https://youtu.be/UrfCwZlcCzE" },
      },
      {
        name: "Pavli Hrdinová, DiS.",
        photo: "/images/terapeuti/pavli-hrdinova.jpg",
        misto: "Plzeň",
        kontakt: { tel: "777 832 218", email: "metodajih@pavlihrdinova.cz", web: "https://pavlihrdinova.cz/", video: "https://youtube.com/shorts/3Xi7BSrI7eU" },
      },
      {
        name: "Nikola Usvaldová",
        photo: "/images/terapeuti/nikola-usvaldova.jpg",
        misto: "Praha, Nový Jičín",
        kontakt: { tel: "732 529 437", email: "nikola.usvald@email.cz", web: "https://nikolausvaldova.cz/", video: "https://www.youtube.com/watch?v=0wR6Qw6EZ9c" },
      },
      {
        name: "MVDr. Alexandra Bulková",
        photo: "/images/terapeuti/alexandra-bulkova.png",
        misto: "Trenčín",
        kontakt: { tel: "+421 911 770 476", email: "bulkova.alexandra.terapie@gmail.com", web: "https://www.alexandrabulkova.cz/", video: "https://youtu.be/NY0Hf-QM-g8" },
      },
      {
        name: "Veronika Coufalová",
        photo: "/images/terapeuti/veronika-coufalova.jpg",
        role: "Terapeut metody JIH a stylistka",
        kontakt: { web: "https://plussizelife.cz/", video: "https://youtu.be/liXrmBtW6G4" },
      },
      {
        name: "Ing. Iva Zahran Kyselová",
        photo: "/images/terapeuti/iva-zahran-kyselova.jpg",
        kontakt: { web: "https://www.ivanaceste.cz/", video: "https://youtu.be/Xmf19MxJWa0" },
      },
      {
        name: "Bc. Eva Handzová",
        photo: "/images/terapeuti/eva-handzova.jpg",
        kontakt: {},
      },
      {
        name: "Petra Sochůrková",
        photo: "/images/terapeuti/petra-sochurkova.jpg",
        kontakt: { video: "https://youtu.be/VqnKUzmh7-0" },
      },
      {
        name: "Mgr. Magdaléna Mičková",
        photo: "/images/terapeuti/magdalena-mickova.jpeg",
        kontakt: { web: "http://www.magdalenamickova.cz" },
      },
      {
        name: "Bc. Monika Henzlová, DiS.",
        photo: "/images/terapeuti/monika-henzlova.jpg",
        misto: "Přibyslav",
        kontakt: { tel: "775 304 443", email: "monikahenzlova@seznam.cz", web: "https://www.monikahenzlova.cz/" },
      },
      {
        name: "Vlasta Maršálková",
        photo: "/images/terapeuti/vlasta-marsalkova.png",
        kontakt: { web: "http://www.vlastamarsalkova.cz", video: "https://youtu.be/W8bPSwILpmQ" },
      },
      {
        name: "Vendula Šnejdarová",
        photo: "/images/terapeuti/vendula-snejdarova.png",
        kontakt: {},
      },
    ],
  },
  {
    title: "Terapeuti pro terapie úrovně 1, 3",
    lide: [
      {
        name: "Lucka Kouparová",
        photo: "/images/terapeuti/lucie-kouparova.jpg",
        misto: "Polná u Jihlavy",
        kontakt: { tel: "602 201 165", email: "luciekouparova@gmail.com", web: "https://www.luciekouparova.cz/", video: "https://www.youtube.com/watch?v=TxymhLY3G_Y" },
      },
      {
        name: "Petra Bendičáková",
        photo: "/images/terapeuti/petra-bendicakova.jpg",
        kontakt: { web: "https://moje.flixy.cz/petrabendicakova" },
      },
      {
        name: "Ing. Jana Pospíšilová",
        photo: "/images/terapeuti/jana-pospisilova.jpg",
        misto: "Zlín",
        kontakt: { tel: "776 161 435", email: "posp.jana@volny.cz", web: "https://www.jana-pospisilova.cz/", video: "https://youtu.be/ZJdnB6lSuQI" },
      },
      {
        name: "Alena Urbánková",
        photo: "/images/terapeuti/alena-urbankova.jpg",
        kontakt: { pdf: "/dokumenty/alena-urbankova-o-mne.pdf" },
      },
      {
        name: "Ing. Hana Hrabalová",
        photo: "/images/terapeuti/hana-hrabalova.jpg",
        misto: "Poděbrady",
        kontakt: { tel: "777 907 705", email: "hrabalova.hana@centrum.cz", web: "https://hankahrabalova.cz/", video: "https://www.youtube.com/watch?v=znoQ-faTsVY" },
      },
      {
        name: "Bc. Martina Zelenická",
        photo: "/images/terapeuti/martina-zelenicka.jpg",
        role: "Terapeut profesionál",
        kontakt: { web: "https://www.martinazelenicka.cz/", video: "https://youtu.be/YweZjiM1EN0" },
      },
      {
        name: "Danuše Navrátilová",
        photo: "/images/terapeuti/danuse-navratilova.png",
        kontakt: { video: "https://www.youtube.com/watch?v=czzWkezWBSs" },
      },
      {
        name: "Jana Vinopalová, DiS.",
        photo: "/images/terapeuti/jana-vinopalova.jpg",
        kontakt: { video: "https://youtu.be/GkkNc7GFLZw" },
      },
      {
        name: "Mgr. Martina Fedák",
        photo: "/images/terapeuti/martina-fedak.jpg",
        kontakt: { video: "https://www.youtube.com/watch?v=p-sn68IRPes" },
      },
      {
        name: "Zuzana Ihnátková",
        photo: "/images/terapeuti/zuzana-ihnatkova.jpg",
        misto: "Čelákovice",
        kontakt: { tel: "776 138 742", email: "zuzanaihnatkova@gmail.com", web: "https://zuzanaihnatkova.cz", pdf: "/dokumenty/zuzana-ihnatkova-o-mne.pdf" },
      },
      {
        name: "Marcela Uhrová",
        photo: "/images/terapeuti/marcela-uhrova.jpg",
        kontakt: { video: "https://youtu.be/IQngAKIrdLY" },
      },
      {
        name: "Jana Javůrková",
        photo: "/images/terapeuti/jana-javurkova.jpg",
        misto: "Praha",
        kontakt: { tel: "737 549 976", email: "jana@janajavurkova.cz", web: "https://janajavurkova.cz/", video: "https://www.youtube.com/watch?v=rHqYkznT6Qc" },
      },
      {
        name: "Romana Vondrová",
        photo: "/images/terapeuti/romana-vondrova.jpg",
        misto: "Ústí nad Labem",
        kontakt: { tel: "723 390 589", email: "romivolfi@gmail.com", web: "https://www.romanavondrova.cz/" },
      },
      {
        name: "Ing. Klára Mrazíková",
        photo: "/images/terapeuti/klara-mrazikova.jpg",
        role: "Terapeut profesionál",
        misto: "Praha",
        kontakt: { tel: "728 470 089", email: "info@klaramrazikova.cz", web: "https://klaramrazikova.cz/", video: "https://www.youtube.com/watch?v=4gzR23Uf4Q8" },
      },
    ],
  },
];
