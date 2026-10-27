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
      // Staré WordPress permalinky ?p=ID → kanonické cesty.
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
    ];
  },
};

export default nextConfig;
