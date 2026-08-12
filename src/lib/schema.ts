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

/**
 * HowTo for installasjonsguidene. Hvert steg får egen URL-fragment slik
 * at assistenter og søkemotorer kan referere til enkeltsteg.
 */
export function howToSchema({
  name,
  description,
  path,
  steps,
  anchorPrefix = "steg",
}: {
  name: string;
  description: string;
  path: string;
  steps: { step: number; title: string; desc: string; image: string }[];
  /** Må matche `idPrefix` på StepCard-ene, ellers peker ankrene i tomme luften. */
  anchorPrefix?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.desc,
      image: `${SITE_URL}${s.image}`,
      url: `${SITE_URL}${path}#${anchorPrefix}-${s.step}`,
    })),
  };
}

export function faqPageSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function videoObjectSchema({
  name,
  description,
  embedUrl,
  thumbnailUrl,
  uploadDate,
}: {
  name: string;
  description: string;
  embedUrl: string;
  thumbnailUrl: string;
  uploadDate: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    embedUrl,
    thumbnailUrl,
    uploadDate,
    publisher: {
      "@type": "Organization",
      name: "Slidedrain",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo-slidedrain.webp`,
      },
    },
  };
}

/** Article for kundehistoriene, som er redaksjonelt innhold og ikke produktsider. */
export function articleSchema({
  headline,
  description,
  path,
  image,
  datePublished,
}: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
    datePublished,
    author: { "@type": "Organization", name: "Slidedrain" },
    publisher: {
      "@type": "Organization",
      name: "Slidedrain",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo-slidedrain.webp`,
      },
    },
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
