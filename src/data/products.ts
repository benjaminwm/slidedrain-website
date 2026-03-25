export interface Product {
  name: string;
  slug: string;
  nobbNr: string;
  nrfNr: string;
  dimensions: string;
  lengthMm?: number;
  widthMm?: number;
  heightMm?: number;
  diameterMm?: number;
  finish?: string;
  imageId: string;
  description?: string;
  dahlUrl?: string;
  flisekompanietUrl?: string;
}

export function getProductImageUrl(imageId: string): string {
  return `https://cdn.byggtjeneste.no/nobb/${imageId}/square`;
}

export function getProductBySlug(slug: string): { product: Product; category: ProductCategory } | null {
  for (const cat of productCategories) {
    const product = cat.products.find((p) => p.slug === slug);
    if (product) return { product, category: cat };
  }
  return null;
}

export function getAllProductSlugs(): string[] {
  return productCategories.flatMap((cat) => cat.products.map((p) => p.slug));
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

const BD = "https://www.dahl.no/teknisk-vvs/innomhus-avlop/sluk";
const FK = "https://www.flisekompaniet.no/produkt";

export const productCategories: ProductCategory[] = [
  {
    id: "slukpotter",
    title: "Slukpotter",
    description:
      "Slukpotten kobles til avløpsrøret og danner fundamentet i Slidedrain-systemet. Tilgjengelig med side-, bunn- og skrått utløp.",
    products: [
      {
        name: "Slukpotte Ø75 Sideutløp",
        slug: "slukpotte-75-sideutlop",
        nobbNr: "60159271",
        nrfNr: "3411004",
        dimensions: "214 × 120 mm, Ø75",
        widthMm: 214,
        heightMm: 120,
        diameterMm: 75,
        imageId: "45f4deba-9a2f-4d53-930a-f86f4da7195e",
        description:
          "Slukpotte med sideutløp Ø75 mm i resirkulert plast. Fundamentet i Slidedrain-systemet som kobles til avløpsrøret. Sideutløp gir fleksibel tilkobling der røret kommer fra siden.",
        dahlUrl: `${BD}/model-1-slukpotte-o75-mm-sideutlop-m3c_bd_p_101463741`,
      },
      {
        name: "Slukpotte Ø75 Bunnutløp",
        slug: "slukpotte-75-bunnutlop",
        nobbNr: "60159272",
        nrfNr: "3411005",
        dimensions: "214 × 120 mm, Ø75",
        widthMm: 214,
        heightMm: 120,
        diameterMm: 75,
        imageId: "07decb8c-c781-4d15-a9d3-99cf1203d253",
        description:
          "Slukpotte med bunnutløp Ø75 mm i resirkulert plast. Ideell for installasjoner der avløpsrøret kommer rett nedenfra. Sikrer enkel og presis tilkobling.",
        dahlUrl: `${BD}/model-1-slukpotte-o75-mm-bunnutlop-m3c_bd_p_101463742`,
      },
      {
        name: "Slukpotte Ø75 Skrått utløp",
        slug: "slukpotte-75-skratt-utlop",
        nobbNr: "60159273",
        nrfNr: "3411006",
        dimensions: "214 × 120 mm, Ø75",
        widthMm: 214,
        heightMm: 120,
        diameterMm: 75,
        imageId: "8ad5b7b6-8c9c-4e0f-9547-19e1532ddf5f",
        description:
          "Slukpotte med skrått utløp Ø75 mm i resirkulert plast. Gir ekstra fleksibilitet i rørtilkobling der røret kommer i vinkel.",
        dahlUrl: `${BD}/model-1-slukpotte-o75-skratt-utlop-m3c_bd_p_101463743`,
      },
    ],
  },
  {
    id: "slukoverdeler",
    title: "Slukoverdeler",
    description:
      "Slukoverdelen monteres på slukpotten og sikrer vanntett overgang til membran. Tilgjengelig med klemring eller integrert APEX-mansjett.",
    products: [
      {
        name: "Slukoverdel med Klemring",
        slug: "slukoverdel-klemring",
        nobbNr: "60159268",
        nrfNr: "3411002",
        dimensions: "Vannlåshøyde 50 mm",
        heightMm: 50,
        imageId: "a6097e40-733a-4e5f-9a01-a7a6ac86691f",
        description:
          "Slukoverdel med klemring og vannlåshøyde 50 mm. Brukes med foliebaserte membraner der klemring er nødvendig. Trinnløs høydejustering 0–40 mm.",
        dahlUrl: `${BD}/slukoverdel-mklemring-m3c_bd_p_101884878`,
      },
      {
        name: "Slukoverdel APEX-mansjett",
        slug: "slukoverdel-apex-mansjett",
        nobbNr: "60795685",
        nrfNr: "1459485",
        dimensions: "Vannlåshøyde 50 mm, 0–40 mm justering",
        heightMm: 50,
        imageId: "2b80cbbb-4a19-4b47-9867-a6aec78fa29a",
        description:
          "Slukoverdel med integrert APEX-mansjett for skrueløs montasje med smøremembran. Eliminerer behovet for klemring og forenkler installasjonen. Trinnløs 0–40 mm høydejustering.",
        dahlUrl: `${BD}/slukoverdel-apex-slukmansjett-m3c_bd_p_101876167`,
      },
    ],
  },
  {
    id: "monteringsverktoy",
    title: "Monteringsverktøy",
    description:
      "Gjenbrukbart verktøy for presis installasjon av slukoverdelen på badets laveste punkt.",
    products: [
      {
        name: "Monteringsverktøy, gjenbrukbart",
        slug: "monteringsverktoy",
        nobbNr: "60159259",
        nrfNr: "3411001",
        dimensions: "Ø175 mm",
        diameterMm: 175,
        imageId: "75c2e557-067a-4daa-8dc1-ac1c3983dfea",
        description:
          "Gjenbrukbart monteringsverktøy Ø175 mm for presis installasjon av Slidedrain slukoverdel. Sikrer nøyaktig plassering på badets laveste punkt og forenkler støping av fall.",
        dahlUrl: `${BD}/model-1-monteringsverktoy-m3c_bd_p_101463739`,
      },
    ],
  },
  {
    id: "slukrister",
    title: "Slukrister",
    description:
      "Kvadratiske rister i børstet stål eller matt sort – med eller uten Tile Insert. Inkludert sirkulær slukrist.",
    products: [
      {
        name: "Slukrist Kvadrat Børstet Stål",
        slug: "slukrist-kvadrat-borstet-stal",
        nobbNr: "60159275",
        nrfNr: "3406116",
        dimensions: "197 × 197 × 9 mm",
        lengthMm: 197,
        widthMm: 197,
        heightMm: 9,
        finish: "Børstet stål",
        imageId: "426ca516-7f7e-4e06-b695-a36ff88015c1",
        description:
          "Kvadratisk slukrist 197 × 197 mm i børstet rustfritt stål. Tidløst og robust design som passer i ethvert baderom. Monteres enkelt ved flislegging.",
        dahlUrl: `${BD}/slidedrain-slukrist-kvadrat-200-m3c_bd_6569f1427bcb06547c1336d4`,
        flisekompanietUrl: `${FK}/slidedrain-slukrist-20x20-kvadrat-mattborstet/`,
      },
      {
        name: "Slukrist Kvadrat Matt Sort",
        slug: "slukrist-kvadrat-matt-sort",
        nobbNr: "60159276",
        nrfNr: "3406117",
        dimensions: "197 × 197 × 9 mm",
        lengthMm: 197,
        widthMm: 197,
        heightMm: 9,
        finish: "Matt sort",
        imageId: "8a022f8a-fe6e-44f3-9a4c-915ef26be446",
        description:
          "Kvadratisk slukrist 197 × 197 mm i matt sort. Moderne uttrykk som harmonerer med mørke interiørvalg. Monteres enkelt ved flislegging.",
        dahlUrl: `${BD}/slidedrain-slukrist-kvadrat-200-m3c_bd_6569f1427bcb06547c1336d4`,
        flisekompanietUrl: `${FK}/slidedrain-slukrist-20x20-kvadrat-sort-matt/`,
      },
      {
        name: "Slukrist Kv Tile Insert RF Stål",
        slug: "slukrist-tile-insert-rf-stal",
        nobbNr: "60159277",
        nrfNr: "3406118",
        dimensions: "197 × 197 × 15 mm",
        lengthMm: 197,
        widthMm: 197,
        heightMm: 15,
        finish: "Rustfritt stål",
        imageId: "54597543-1629-4bb3-9a79-37e8931ec41d",
        description:
          "Kvadratisk slukrist med Tile Insert i rustfritt stål. Flis legges direkte i rammen slik at sluket blir tilnærmet usynlig. 197 × 197 × 15 mm.",
        dahlUrl: `${BD}/slidedrain-slukrist-kvadrat-tile-insert-200-m3c_bd_6569f203af228202c4880959`,
        flisekompanietUrl: `${FK}/slidedrain-slukrist-20x20-kvadrat-tile-insert-rustfritt-stal/`,
      },
      {
        name: "Slukrist Kv Tile Insert Matt Sort",
        slug: "slukrist-tile-insert-matt-sort",
        nobbNr: "60159278",
        nrfNr: "3406119",
        dimensions: "197 × 197 × 15 mm",
        lengthMm: 197,
        widthMm: 197,
        heightMm: 15,
        finish: "Matt sort",
        imageId: "aee4bbd0-be9a-464f-8d27-e0c8a0e12ebd",
        description:
          "Kvadratisk slukrist med Tile Insert i matt sort. Flis legges direkte i rammen for et nesten usynlig sluk. 197 × 197 × 15 mm.",
        dahlUrl: `${BD}/slidedrain-slukrist-kvadrat-tile-insert-200-m3c_bd_6569f203af228202c4880959`,
        flisekompanietUrl: `${FK}/slidedrain-slukrist-20x20-kvadrat-tile-insert-sort-matt/`,
      },
      {
        name: "Sirkulær Slukrist Børstet Stål",
        slug: "sirkulaer-slukrist-borstet-stal",
        nobbNr: "60615860",
        nrfNr: "3406115",
        dimensions: "Ø172 mm",
        diameterMm: 172,
        finish: "Børstet stål",
        imageId: "ce9bbc28-f1a1-45fd-b7d4-6bbb294f42c3",
        description:
          "Sirkulær slukrist Ø172 mm i børstet rustfritt stål. Klassisk rundt design med moderne finish.",
        dahlUrl: `${BD}/slukrist-sirkular-borstet-stal-m3c_bd_p_101924169`,
      },
    ],
  },
  {
    id: "hjornerister",
    title: "Hjørnerister",
    description:
      "Hjørnerister med Tile Insert 297 × 297 mm. Plasseres i hjørnet for å maksimere bruken av storformat-fliser.",
    products: [
      {
        name: "Hjørnerist Tile Insert RF Stål",
        slug: "hjornerist-tile-insert-rf-stal",
        nobbNr: "60657701",
        nrfNr: "1382608",
        dimensions: "297 × 297 × 15 mm",
        lengthMm: 297,
        widthMm: 297,
        heightMm: 15,
        finish: "Rustfritt stål",
        imageId: "356ad341-895f-46ea-919a-7910d7126651",
        description:
          "Hjørnerist med Tile Insert 297 × 297 mm i rustfritt stål. Plasseres i hjørnet for å maksimere bruken av storformat-fliser. Tilnærmet usynlig resultat.",
        dahlUrl: `${BD}/slidedrain-hjornerist-tile-insert-30x30-cm-m3c_bd_66b1dec205943a3ea8b4745c`,
        flisekompanietUrl: `${FK}/slidedrain-hjorneslukrist-30x30-tile-insert-rustfritt-stal/`,
      },
      {
        name: "Hjørnerist Tile Insert Matt Sort",
        slug: "hjornerist-tile-insert-matt-sort",
        nobbNr: "60657704",
        nrfNr: "1382611",
        dimensions: "297 × 297 × 15 mm",
        lengthMm: 297,
        widthMm: 297,
        heightMm: 15,
        finish: "Matt sort",
        imageId: "e9fc71bb-b8d8-420c-816b-b4c12535f08b",
        description:
          "Hjørnerist med Tile Insert 297 × 297 mm i matt sort. Plasseres i hjørnet for et elegant og uforstyrret baderomsgulv.",
        dahlUrl: `${BD}/slidedrain-hjornerist-tile-insert-30x30-cm-m3c_bd_66b1dec205943a3ea8b4745c`,
        flisekompanietUrl: `${FK}/slidedrain-hjorneslukrist-30x30-tile-insert-sort-matt/`,
      },
    ],
  },
  {
    id: "slukrenner",
    title: "Slukrenner med Rist",
    description:
      "Langsgående slukrenner med rist i børstet stål eller matt sort.",
    products: [
      {
        name: "Slukrenne Rist 800 Børstet Stål",
        slug: "slukrenne-rist-800-borstet-stal",
        nobbNr: "60159280",
        nrfNr: "3406121",
        dimensions: "797 × 197 × 9 mm",
        lengthMm: 797,
        widthMm: 197,
        heightMm: 9,
        finish: "Børstet stål",
        imageId: "ec9e04c6-976c-4613-bb65-6f7927aac975",
        description:
          "Slukrenne 797 mm med rist i børstet stål. Elegant linjedesign for et moderne baderom. Limes fast ved flislegging.",
        dahlUrl: `${BD}/slidedrain-slukrenne-rist-800-m3c_bd_6569f2bf7bcb06547c1336db`,
        flisekompanietUrl: `${FK}/slidedrain-slukrenne-80x20-mrist-mattborstet/`,
      },
      {
        name: "Slukrenne Rist 800 Matt Sort",
        slug: "slukrenne-rist-800-matt-sort",
        nobbNr: "60159281",
        nrfNr: "3406122",
        dimensions: "797 × 197 × 9 mm",
        lengthMm: 797,
        widthMm: 197,
        heightMm: 9,
        finish: "Matt sort",
        imageId: "41fd9019-a8cd-47e6-9b18-7cc6f3244520",
        description:
          "Slukrenne 797 mm med rist i matt sort. Moderne mørkt uttrykk som passer til moderne interiørtrender.",
        dahlUrl: `${BD}/slidedrain-slukrenne-rist-800-m3c_bd_6569f2bf7bcb06547c1336db`,
        flisekompanietUrl: `${FK}/slidedrain-slukrenne-80x20-mrist-sort-matt/`,
      },
    ],
  },
  {
    id: "slukrenner-tile",
    title: "Slukrenner med Tile Insert",
    description:
      "Slukrenner med Tile Insert for usynlig integrering med baderommets fliser. Tilgjengelig i 600–1200 mm.",
    products: [
      {
        name: "Slukrenne Tile Insert 600 RF Stål",
        slug: "slukrenne-tile-insert-600-rf-stal",
        nobbNr: "60657681",
        nrfNr: "1382595",
        dimensions: "597 × 197 × 15 mm",
        lengthMm: 597,
        widthMm: 197,
        heightMm: 15,
        finish: "Rustfritt stål",
        imageId: "c8a4aea6-2ad4-4a36-890c-d893335e7ccd",
        description:
          "Slukrenne 597 mm med Tile Insert i rustfritt stål. Kompakt løsning for mindre baderom der flisen legges direkte i rammen.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-600-m3c_bd_66b1e1bd8364723d97f405a1`,
        flisekompanietUrl: `${FK}/slidedrain-slukrenne-60x20-tile-insert-rustfritt-stal/`,
      },
      {
        name: "Slukrenne Tile Insert 600 Matt Sort",
        slug: "slukrenne-tile-insert-600-matt-sort",
        nobbNr: "60657688",
        nrfNr: "1382596",
        dimensions: "597 × 197 × 15 mm",
        lengthMm: 597,
        widthMm: 197,
        heightMm: 15,
        finish: "Matt sort",
        imageId: "0a73c5f1-6f8d-42b7-952a-64f3e7e32e80",
        description:
          "Slukrenne 597 mm med Tile Insert i matt sort. Kompakt løsning for mindre baderom med elegant mørk ramme.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-600-m3c_bd_66b1e1bd8364723d97f405a1`,
        flisekompanietUrl: `${FK}/slidedrain-slukrenne-60x20-tile-insert-sort-matt/`,
      },
      {
        name: "Slukrenne Tile Insert 700 RF Stål",
        slug: "slukrenne-tile-insert-700-rf-stal",
        nobbNr: "60657691",
        nrfNr: "1382598",
        dimensions: "697 × 197 × 15 mm",
        lengthMm: 697,
        widthMm: 197,
        heightMm: 15,
        finish: "Rustfritt stål",
        imageId: "e97ccbd0-6b67-4876-b656-9be88c563087",
        description:
          "Slukrenne 697 mm med Tile Insert i rustfritt stål. Populær lengde for mellomstore baderom.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-700-m3c_bd_66b1e0de756d264bc300dd9d`,
        flisekompanietUrl: `${FK}/slidedrain-slukrenne-70x20-tile-insert-rustfritt-stal/`,
      },
      {
        name: "Slukrenne Tile Insert 700 Matt Sort",
        slug: "slukrenne-tile-insert-700-matt-sort",
        nobbNr: "60657692",
        nrfNr: "1382599",
        dimensions: "697 × 197 × 15 mm",
        lengthMm: 697,
        widthMm: 197,
        heightMm: 15,
        finish: "Matt sort",
        imageId: "d407f2c4-f81c-4ff9-84a8-b2c6c5f34415",
        description:
          "Slukrenne 697 mm med Tile Insert i matt sort. Populær lengde med moderne mørk profil.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-700-m3c_bd_66b1e0de756d264bc300dd9d`,
        flisekompanietUrl: `${FK}/slidedrain-slukrenne-70x20-tile-insert-sort-matt/`,
      },
      {
        name: "Slukrenne Tile Insert 800 RF Stål",
        slug: "slukrenne-tile-insert-800-rf-stal",
        nobbNr: "60159282",
        nrfNr: "3406123",
        dimensions: "797 × 197 × 15 mm",
        lengthMm: 797,
        widthMm: 197,
        heightMm: 15,
        finish: "Rustfritt stål",
        imageId: "1728db8c-b489-4797-86de-a2133072cc06",
        description:
          "Slukrenne 797 mm med Tile Insert i rustfritt stål. Standard lengde som passer de fleste baderom.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-800-m3c_bd_6569f326125cb272c8eafc40`,
        flisekompanietUrl: `${FK}/slidedrain-slukrenne-80x20-tile-insert-rustfritt-stal/`,
      },
      {
        name: "Slukrenne Tile Insert 800 Matt Sort",
        slug: "slukrenne-tile-insert-800-matt-sort",
        nobbNr: "60159283",
        nrfNr: "3406124",
        dimensions: "797 × 197 × 15 mm",
        lengthMm: 797,
        widthMm: 197,
        heightMm: 15,
        finish: "Matt sort",
        imageId: "cde5683d-04e6-492e-9d9a-1396c8a87f26",
        description:
          "Slukrenne 797 mm med Tile Insert i matt sort. Standard lengde med mørk profil.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-800-m3c_bd_6569f326125cb272c8eafc40`,
        flisekompanietUrl: `${FK}/slidedrain-slukrenne-80x20-tile-insert-sort-matt/`,
      },
      {
        name: "Slukrenne Tile Insert 900 RF Stål",
        slug: "slukrenne-tile-insert-900-rf-stal",
        nobbNr: "60657693",
        nrfNr: "1382600",
        dimensions: "897 × 197 × 15 mm",
        lengthMm: 897,
        widthMm: 197,
        heightMm: 15,
        finish: "Rustfritt stål",
        imageId: "77b9e3de-84af-43f2-bb6d-b7716c886569",
        description:
          "Slukrenne 897 mm med Tile Insert i rustfritt stål. For større baderom med bredere dusjareal.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-900-m3c_bd_66b1e05005943a3ea8b47464`,
        flisekompanietUrl: `${FK}/slidedrain-slukrenne-90x20-tile-insert-rustfritt-stal/`,
      },
      {
        name: "Slukrenne Tile Insert 900 Matt Sort",
        slug: "slukrenne-tile-insert-900-matt-sort",
        nobbNr: "60657694",
        nrfNr: "1382601",
        dimensions: "897 × 197 × 15 mm",
        lengthMm: 897,
        widthMm: 197,
        heightMm: 15,
        finish: "Matt sort",
        imageId: "4e37f8d7-0c02-445a-88e9-f06a6d8cada2",
        description:
          "Slukrenne 897 mm med Tile Insert i matt sort. For større baderom med moderne mørk profil.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-900-m3c_bd_66b1e05005943a3ea8b47464`,
        flisekompanietUrl: `${FK}/slidedrain-slukrenne-90x20-tile-insert-sort-matt/`,
      },
      {
        name: "Slukrenne Tile Insert 1000 RF Stål",
        slug: "slukrenne-tile-insert-1000-rf-stal",
        nobbNr: "60657695",
        nrfNr: "1382602",
        dimensions: "997 × 197 × 15 mm",
        lengthMm: 997,
        widthMm: 197,
        heightMm: 15,
        finish: "Rustfritt stål",
        imageId: "0125862a-3d56-4c40-a738-e23769ca5391",
        description:
          "Slukrenne 997 mm med Tile Insert i rustfritt stål. Lang renne for romslige dusjanlegg med ensidig fall.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-1000-m3c_bd_66b1df988364723d97f40598`,
        flisekompanietUrl: `${FK}/slidedrain-slukrenne-100x20-tile-insert-rustfritt-stal/`,
      },
      {
        name: "Slukrenne Tile Insert 1000 Sort",
        slug: "slukrenne-tile-insert-1000-matt-sort",
        nobbNr: "60657696",
        nrfNr: "1382603",
        dimensions: "997 × 197 × 15 mm",
        lengthMm: 997,
        widthMm: 197,
        heightMm: 15,
        finish: "Matt sort",
        imageId: "01548960-cae4-43a2-b744-51d2c6bcf6dc",
        description:
          "Slukrenne 997 mm med Tile Insert i matt sort. Lang renne for romslige dusjanlegg med elegant mørk profil.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-1000-m3c_bd_66b1df988364723d97f40598`,
        flisekompanietUrl: `${FK}/slidedrain-slukrenne-100x20-tile-insert-sort-matt/`,
      },
      {
        name: "Slukrenne Tile Insert 1200 RF Stål",
        slug: "slukrenne-tile-insert-1200-rf-stal",
        nobbNr: "60795654",
        nrfNr: "1459481",
        dimensions: "1197 × 197 × 15 mm",
        lengthMm: 1197,
        widthMm: 197,
        heightMm: 15,
        finish: "Rustfritt stål",
        imageId: "0125862a-3d56-4c40-a738-e23769ca5391",
        description:
          "Slukrenne 1197 mm med Tile Insert i rustfritt stål. Den lengste varianten for ekstra brede dusjanlegg og walk-in-løsninger.",
      },
      {
        name: "Slukrenne Tile Insert 1200 Sort",
        slug: "slukrenne-tile-insert-1200-matt-sort",
        nobbNr: "60795673",
        nrfNr: "1459482",
        dimensions: "1197 × 197 × 15 mm",
        lengthMm: 1197,
        widthMm: 197,
        heightMm: 15,
        finish: "Matt sort",
        imageId: "01548960-cae4-43a2-b744-51d2c6bcf6dc",
        description:
          "Slukrenne 1197 mm med Tile Insert i matt sort. Lengste variant med mørk profil for store, moderne baderom.",
      },
    ],
  },
  {
    id: "slukrenner-eksentrisk",
    title: "Eksentriske Slukrenner med Tile Insert",
    description:
      "Premium slukrenner med eksentrisk hull for ensidig fall mot vegg. Perfekt for moderne storformat-fliser.",
    products: [
      {
        name: "Slukrenne Eksentrisk Tile 700 Stål",
        slug: "slukrenne-eksentrisk-tile-700-stal",
        nobbNr: "60795570",
        nrfNr: "1459464",
        dimensions: "697 × 197 × 15 mm",
        lengthMm: 697,
        widthMm: 197,
        heightMm: 15,
        finish: "Rustfritt stål",
        imageId: "e97ccbd0-6b67-4876-b656-9be88c563087",
        description:
          "Eksentrisk slukrenne 697 mm med Tile Insert i rustfritt stål. Ensidig fall mot vegg muliggjør bruk av storformat-fliser.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-eksentrisk-m3c_bd_68c150e2fd18130a69f8a3d4`,
      },
      {
        name: "Slukrenne Eksentrisk Tile 700 Sort",
        slug: "slukrenne-eksentrisk-tile-700-sort",
        nobbNr: "60795571",
        nrfNr: "1459465",
        dimensions: "697 × 197 × 15 mm",
        lengthMm: 697,
        widthMm: 197,
        heightMm: 15,
        finish: "Matt sort",
        imageId: "d407f2c4-f81c-4ff9-84a8-b2c6c5f34415",
        description:
          "Eksentrisk slukrenne 697 mm med Tile Insert i matt sort. Ensidig fall mot vegg med moderne mørk profil.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-eksentrisk-m3c_bd_68c150e2fd18130a69f8a3d4`,
      },
      {
        name: "Slukrenne Eksentrisk Tile 800 Stål",
        slug: "slukrenne-eksentrisk-tile-800-stal",
        nobbNr: "60657699",
        nrfNr: "1382606",
        dimensions: "797 × 197 × 15 mm",
        lengthMm: 797,
        widthMm: 197,
        heightMm: 15,
        finish: "Rustfritt stål",
        imageId: "1728db8c-b489-4797-86de-a2133072cc06",
        description:
          "Eksentrisk slukrenne 797 mm med Tile Insert i rustfritt stål. Standardlengde med ensidig fall mot vegg.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-eksentrisk-m3c_bd_68c150e2fd18130a69f8a3d4`,
        flisekompanietUrl: `${FK}/slidedrain-slukrenne-80x20-eksentrisk-tile-insert-rustfritt-stal/`,
      },
      {
        name: "Slukrenne Eksentrisk Tile 800 Sort",
        slug: "slukrenne-eksentrisk-tile-800-sort",
        nobbNr: "60657700",
        nrfNr: "1382607",
        dimensions: "797 × 197 × 15 mm",
        lengthMm: 797,
        widthMm: 197,
        heightMm: 15,
        finish: "Matt sort",
        imageId: "cde5683d-04e6-492e-9d9a-1396c8a87f26",
        description:
          "Eksentrisk slukrenne 797 mm med Tile Insert i matt sort. Standardlengde med ensidig fall og moderne mørk profil.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-eksentrisk-m3c_bd_68c150e2fd18130a69f8a3d4`,
        flisekompanietUrl: `${FK}/slidedrain-slukrenne-80x20-eksentrisk-tile-insert-sort-matt/`,
      },
      {
        name: "Slukrenne Eksentrisk Tile 900 Stål",
        slug: "slukrenne-eksentrisk-tile-900-stal",
        nobbNr: "60795572",
        nrfNr: "1459466",
        dimensions: "897 × 197 × 15 mm",
        lengthMm: 897,
        widthMm: 197,
        heightMm: 15,
        finish: "Rustfritt stål",
        imageId: "77b9e3de-84af-43f2-bb6d-b7716c886569",
        description:
          "Eksentrisk slukrenne 897 mm med Tile Insert i rustfritt stål. For større dusjareal med ensidig fall.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-eksentrisk-m3c_bd_68c150e2fd18130a69f8a3d4`,
      },
      {
        name: "Slukrenne Eksentrisk Tile 900 Sort",
        slug: "slukrenne-eksentrisk-tile-900-sort",
        nobbNr: "60795573",
        nrfNr: "1459467",
        dimensions: "897 × 197 × 15 mm",
        lengthMm: 897,
        widthMm: 197,
        heightMm: 15,
        finish: "Matt sort",
        imageId: "4e37f8d7-0c02-445a-88e9-f06a6d8cada2",
        description:
          "Eksentrisk slukrenne 897 mm med Tile Insert i matt sort. For større dusjareal med mørk profil.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-eksentrisk-m3c_bd_68c150e2fd18130a69f8a3d4`,
      },
      {
        name: "Slukrenne Eksentrisk Tile 1000 Stål",
        slug: "slukrenne-eksentrisk-tile-1000-stal",
        nobbNr: "60795649",
        nrfNr: "1459475",
        dimensions: "997 × 197 × 15 mm",
        lengthMm: 997,
        widthMm: 197,
        heightMm: 15,
        finish: "Rustfritt stål",
        imageId: "0125862a-3d56-4c40-a738-e23769ca5391",
        description:
          "Eksentrisk slukrenne 997 mm med Tile Insert i rustfritt stål. Lang renne for romslige walk-in-dusjer.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-eksentrisk-m3c_bd_68c150e2fd18130a69f8a3d4`,
      },
      {
        name: "Slukrenne Eksentrisk Tile 1000 Sort",
        slug: "slukrenne-eksentrisk-tile-1000-sort",
        nobbNr: "60795650",
        nrfNr: "1459476",
        dimensions: "997 × 197 × 15 mm",
        lengthMm: 997,
        widthMm: 197,
        heightMm: 15,
        finish: "Matt sort",
        imageId: "01548960-cae4-43a2-b744-51d2c6bcf6dc",
        description:
          "Eksentrisk slukrenne 997 mm med Tile Insert i matt sort. Lang renne med mørk profil for store baderom.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-eksentrisk-m3c_bd_68c150e2fd18130a69f8a3d4`,
      },
      {
        name: "Slukrenne Eksentrisk Tile 1200 Stål",
        slug: "slukrenne-eksentrisk-tile-1200-stal",
        nobbNr: "60795683",
        nrfNr: "1459483",
        dimensions: "1197 × 197 × 15 mm",
        lengthMm: 1197,
        widthMm: 197,
        heightMm: 15,
        finish: "Rustfritt stål",
        imageId: "0125862a-3d56-4c40-a738-e23769ca5391",
        description:
          "Eksentrisk slukrenne 1197 mm med Tile Insert i rustfritt stål. Lengste variant for ekstra brede dusjareal.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-eksentrisk-m3c_bd_68c150e2fd18130a69f8a3d4`,
      },
      {
        name: "Slukrenne Eksentrisk Tile 1200 Sort",
        slug: "slukrenne-eksentrisk-tile-1200-sort",
        nobbNr: "60795684",
        nrfNr: "1459484",
        dimensions: "1197 × 197 × 15 mm",
        lengthMm: 1197,
        widthMm: 197,
        heightMm: 15,
        finish: "Matt sort",
        imageId: "01548960-cae4-43a2-b744-51d2c6bcf6dc",
        description:
          "Eksentrisk slukrenne 1197 mm med Tile Insert i matt sort. Lengste variant med mørk profil.",
        dahlUrl: `${BD}/slidedrain-slukrenne-tile-insert-eksentrisk-m3c_bd_68c150e2fd18130a69f8a3d4`,
      },
    ],
  },
];
