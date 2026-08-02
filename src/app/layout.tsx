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
    "Metoda JIH® je autorská metoda vědomého vnímání emocí, postojů a souvislostí života. Kurzy, průvodci metody a cesta k vědomějšímu životu.",
  keywords: ["metoda JIH", "terapeutická metoda JIH", "vědomé vnímání", "kurzy JIH", "Jarka Matušková"],
  metadataBase: new URL("https://metodajih.cz"),
  openGraph: {
    title: "Terapeutická metoda JIH®",
    description: "Autorská metoda vědomého vnímání emocí, postojů a souvislostí života.",
    url: "https://metodajih.cz",
    siteName: "Metoda JIH®",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapeutická metoda JIH®",
    description: "Autorská metoda vědomého vnímání emocí, postojů a souvislostí života.",
  },
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
