/**
 * JSON-LD-byggere for strukturerte data (schema.org).
 *
 * Brukes i server components via:
 *   <script type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
 */

import { getProductImageUrl } from "@/data/products";
import type { Product, ProductCategory } from "@/data/products";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://slidedrain.no";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Slidedrain",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-slidedrain.webp`,
    description:
      "Norskprodusert gulvsluk i resirkulert plast med patentert, skruefri overgang mot membran og 40 mm høydejustering.",
  };
}

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    url: `${SITE_URL}/produkter/${product.slug}`,
    image: getProductImageUrl(product.imageId),
    description:
      product.description ||
      `${product.name} – ${product.dimensions}. NOBB ${product.nobbNr}, NRF ${product.nrfNr}.`,
    brand: { "@type": "Brand", name: "Slidedrain" },
    sku: product.nrfNr,
    mpn: product.nobbNr,
    ...(product.finish && {
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Finish",
          value: product.finish,
        },
      ],
    }),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function productBreadcrumb(
  product: Product,
  category: ProductCategory
) {
  return breadcrumbSchema([
    { name: "Produkter", path: "/produkter" },
    { name: category.title, path: `/produkter#${category.id}` },
    { name: product.name, path: `/produkter/${product.slug}` },
  ]);
}
