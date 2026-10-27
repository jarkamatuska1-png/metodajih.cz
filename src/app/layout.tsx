import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Terapeutická metoda JIH® | Autorská metoda Jarky Matuškové",
    template: "%s | Metoda JIH®",
  },
  description:
    "Metoda JIH® je autorská metoda vědomého vnímání emocí, postojů a souvislostí života. Kurzy, certifikovaní specialisté metody a cesta k vědomějšímu životu.",
  keywords: ["metoda JIH", "terapeutická metoda JIH", "specialista metody JIH", "vědomé vnímání", "kurzy JIH", "Jarka Matušková"],
  // Web běží na www (holá doména metodajih.cz přesměrovává na www na Vercelu).
  // Kanonické adresy, sitemap i náhledy pro sdílení proto míří rovnou na www.
  metadataBase: new URL("https://www.metodajih.cz"),
  authors: [{ name: "Jarka Matušková", url: "https://jarkamatuskova.cz" }],
  openGraph: {
    title: "Terapeutická metoda JIH®",
    description: "Autorská metoda vědomého vnímání emocí, postojů a souvislostí života.",
    url: "/",
    siteName: "Metoda JIH®",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Metoda JIH® — autorská metoda Jarky Matuškové" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapeutická metoda JIH®",
    description: "Autorská metoda vědomého vnímání emocí, postojů a souvislostí života.",
    images: ["/og-image.png"],
  },
};

// Strukturovaná data pro vyhledávače — kdo web provozuje a kdo je autorkou metody.
const organizace = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Metoda JIH®",
  url: "https://www.metodajih.cz",
  logo: "https://www.metodajih.cz/images/logo-jih.png",
  description:
    "Autorská metoda vědomého vnímání emocí, postojů a souvislostí života. Kurzy a certifikovaní specialisté metody JIH®.",
  founder: { "@type": "Person", name: "Jarka Matušková", url: "https://jarkamatuskova.cz" },
  parentOrganization: { "@type": "Organization", name: "freli s.r.o." },
  email: "matuskova@freli.cz",
  telephone: "+420774420251",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizace) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
