import type { MetadataRoute } from "next";

const BASE = "https://metodajih.cz";

const routes = [
  "",
  "/kurzy",
  "/stan-se-pruvodcem",
  "/produkty",
  "/aktualni-terminy-kurzu",
  "/najit-pruvodce",
  "/kontakt",
  "/faq",
  "/gdpr",
  "/obchodni-podminky",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
