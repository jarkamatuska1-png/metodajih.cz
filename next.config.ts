import type { NextConfig } from "next";

// Content-Security-Policy – ze kterých domén se smí načítat skripty, styly,
// obrázky a rámy. Web nemá formuláře ani vložená videa; Vercel Analytics
// běží z vlastní domény (/_vercel/insights). vercel.live je lišta pro
// komentáře na náhledech Vercelu — na ostrém webu se nenačítá.
// 'unsafe-inline' u skriptů je nutný kvůli statickému generování Next.js
// (stejně jako na jarkamatuskova.cz).
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://vercel.live https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://vercel.live wss://ws-us3.pusher.com",
  "frame-src https://vercel.live",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

// Bezpečnostní HTTP hlavičky ke každé odpovědi — stejné jako na jarkamatuskova.cz.
const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  // Web se nesmí vkládat do cizích iframů (ochrana proti clickjackingu).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Prohlížeč nesmí "hádat" typ souboru.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Kolik informací o odkazu se posílá na cizí weby (co nejméně).
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Vynutí HTTPS na rok dopředu.
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  // Web nepotřebuje kameru, mikrofon ani polohu.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

// Adresy článků ze starého WordPressu (větev static-archive), které nemají
// na novém webu obdobu.
const staryBlog = [
  "andele-a-andelske-energie",
  "andelky",
  "barvy",
  "bozi-babicka",
  "bude-nebude-aneb-co-vam-kartarka-nerekla",
  "cestovani-napric-zivoty",
  "cibule-myslenek-diamant-duse",
  "co-je-pro-me-metoda-j-i-h",
  "co-je-rozum",
  "dokonala-zena",
  "druhy-breh",
  "e-book-metoda-j-i-h",
  "emoce",
  "hodnoceni",
  "ja-a-duch-svaty",
  "jak-funguji-navyky",
  "jak-si-spravne-prat",
  "jak-si-spravne-prat-2",
  "jak-to-vlastne-chci",
  "je-moje-cesta-pro-me-ta-spravna",
  "jiny-uhel-pohledu",
  "jonas-velryba-a-my-2-cast",
  "jonas-velryba-a-my-prvni-cast",
  "kdo-je-buh",
  "kdyz-vis",
  "koucink-metoda-jih",
  "laska",
  "medicina",
  "metoda-jih-vs-esoterie-vs-klasicka-medicina",
  "mluvim-o-energiich",
  "moc-nasich-myslenek",
  "moj-zivot-je-len-o-mne",
  "moje-cesta-k-bohu",
  "moje-mama-byla-andel",
  "moje-mila-maminka",
  "mojecesta",
  "muj-rok-2021",
  "nalevate-si-cisteho-vina",
  "nekonecno-ja",
  "od-boha",
  "osm-kroku-na-jih",
  "pobidnout-zivot-do-cvalu",
  "pohadka-o-popelce",
  "pohadka-o-strachu-ktery-se-naucil-bat",
  "pomoc-nebo-sluzba",
  "prace-versus-duchovni-zivot",
  "prekvapeni",
  "pro-sebe",
  "problemy-nebo-reseni",
  "protoze-to-nevzdam",
  "prvni-setkani-s-metodou-jih",
  "sebelitost",
  "sen-realita",
  "skola-zivota",
  "skvosty-zivota",
  "strach",
  "system-hlasi-chybu",
  "vedome-leceni-s-andely",
  "verim-v-boha",
  "vidis-reseni",
  "vnitrni-svet",
  "vypnuti-versus-aktivni-klid",
  "vznik-metody-jih-rozhovor",
  "zatocte-s-unavou",
  "zivot-jako-vnimani-a-pocity",
  "zivot-v-kostce",
  "zmena-jak-na-to",
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Staré WordPress permalinky a adresy starého webu → nové stránky.
      {
        source: "/",
        has: [{ type: "query", key: "p", value: "622" }],
        destination: "/kurzy",
        permanent: true,
      },
      // Názvosloví podle Etického kodexu 2026.2 (rozhodnuto 23. 9. 2026):
      // „průvodce" → „specialista". Staré adresy musí dál fungovat — specialistky
      // si odkazy na seznam daly na své weby a profily.
      { source: "/najit-pruvodce", destination: "/najit-specialistu", permanent: true },
      { source: "/stan-se-pruvodcem", destination: "/stan-se-specialistou", permanent: true },
      { source: "/najit-terapeuta", destination: "/najit-specialistu", permanent: true },
      { source: "/produkty-metoda-jih", destination: "/produkty", permanent: true },
      { source: "/kurzy/cpt-m", destination: "/kurzy/cviceni-cpt-m", permanent: true },
      { source: "/kurzy/vedome-tvoreni", destination: "/kurzy/vedome-tvoreni-vlastni-reality", permanent: true },
      { source: "/kurzy/skola-pro-budouci-kouce", destination: "/stan-se-specialistou", permanent: true },
      { source: "/vedome-tvoreni-vlastni-reality", destination: "/kurzy/vedome-tvoreni-vlastni-reality", permanent: true },
      { source: "/andele-andelske-uceni", destination: "/kurzy/andelske-uceni", permanent: true },
      // Archivy WordPressu (autoři, rubriky, štítky, výpis blogu, RSS) → úvod.
      { source: "/:typ(author|category|tag)/:path*", destination: "/", permanent: true },
      { source: "/blog-2/:path*", destination: "/", permanent: true },
      { source: "/blog-2", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/:path*/feed", destination: "/", permanent: true },
      // Články starého blogu na nový web nepřešly. Zatím vedou na úvod DOČASNĚ
      // (307), aby šly kdykoli obnovit — trvalé přesměrování si prohlížeče
      // pamatují. Rozhodne Jarka (Trello karta k webu, 27. 10. 2026).
      ...staryBlog.map((slug) => ({ source: `/${slug}`, destination: "/", permanent: false })),
    ];
  },
};

export default nextConfig;
