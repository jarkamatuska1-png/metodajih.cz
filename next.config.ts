import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Staré WordPress permalinky ?p=ID → kanonické cesty.
      // Doplní se kompletní mapa v Fázi 2 (obsah). Zatím reprezentativní vzorky:
      {
        source: "/",
        has: [{ type: "query", key: "p", value: "622" }],
        destination: "/kurzy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
