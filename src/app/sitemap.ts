import type { MetadataRoute } from "next";
import { getAllKurzy } from "@/lib/kurzy";

const BASE = "https://www.metodajih.cz";

const routes = [
  "",
  "/kurzy",
  "/stan-se-specialistou",
  "/produkty",
  "/aktualni-terminy-kurzu",
  "/najit-specialistu",
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
