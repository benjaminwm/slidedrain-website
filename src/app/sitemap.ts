import type { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/data/products";
import { landingCategories } from "@/data/landingCategories";
import {
  CATEGORY_PAGES_UPDATED,
  PRODUCT_PAGES_UPDATED,
  updatedAt,
} from "@/data/pageUpdated";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://slidedrain.no";

/**
 * Statisk + dynamisk sitemap.
 *
 * Statiske ruter genereres manuelt med relevante prioriteter/freq.
 * Produktsider genereres fra products.ts.
 *
 * `lastModified` hentes fra src/data/pageUpdated.ts — reelle datoer, ikke
 * build-tidspunktet. Husk å oppdatere datoen der når innhold endres.
 *
 * Next.js eksponerer dette automatisk på /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/sluttkunde", changeFrequency: "monthly", priority: 0.9 },
    { path: "/rorlegger", changeFrequency: "monthly", priority: 0.9 },
    { path: "/tilvalg", changeFrequency: "monthly", priority: 0.9 },
    { path: "/installasjon", changeFrequency: "monthly", priority: 0.9 },
    {
      path: "/installasjon/montere-slukrenne",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      path: "/installasjon/ofte-stilte-sporsmal",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { path: "/produkter", changeFrequency: "weekly", priority: 0.9 },
    { path: "/kundehistorier", changeFrequency: "monthly", priority: 0.7 },
    {
      path: "/kundehistorier/rosendal-bygg",
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      path: "/kundehistorier/total-teknisk",
      changeFrequency: "yearly",
      priority: 0.6,
    },
    { path: "/kundehistorier/muribo", changeFrequency: "yearly", priority: 0.6 },
    { path: "/om-oss", changeFrequency: "monthly", priority: 0.6 },
    { path: "/personvern", changeFrequency: "yearly", priority: 0.3 },
    { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "/" : r.path}`,
    lastModified: updatedAt(r.path),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = landingCategories.map(
    (l) => ({
      url: `${SITE_URL}/produkter/${l.slug}`,
      lastModified: new Date(CATEGORY_PAGES_UPDATED),
      changeFrequency: "weekly",
      priority: 0.85,
    })
  );

  const productRoutes: MetadataRoute.Sitemap = getAllProductSlugs().map(
    (slug) => ({
      url: `${SITE_URL}/produkter/${slug}`,
      lastModified: new Date(PRODUCT_PAGES_UPDATED),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
