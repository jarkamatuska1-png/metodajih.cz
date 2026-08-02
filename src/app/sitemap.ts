import type { MetadataRoute } from "next";
import { getAllKurzy } from "@/lib/kurzy";

const BASE = "https://metodajih.cz";

const routes = [
  "",
  "/kurzy",
  "/stan-se-pruvodcem",
  "/produkty",
  "/aktualni-terminy-kurzu",
  "/najit-pruvodce",
  "/o-nas",
  "/kontakt",
  "/faq",
  "/gdpr",
  "/obchodni-podminky",
  ...getAllKurzy().map((k) => `/kurzy/${k.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
