"use client";

export default function ProductHero() {
  return (
    <section className="pt-[140px] pb-16 px-6 bg-gradient-to-br from-white to-[#fef7f3]">
      <div className="max-w-[1200px] mx-auto text-center">
        <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
          Komplett produktoversikt
        </span>
        <h1 className="text-[46px] max-lg:text-[36px] max-sm:text-[28px] font-bold leading-[1.15] mb-5 text-navy">
          Alle produkter med{" "}
          <span className="text-orange">NOBB &amp; NRF</span>
        </h1>
        <p className="text-lg text-text-light leading-[1.7] font-light max-w-[700px] mx-auto">
          37 produkter fordelt på 7 kategorier. Alle varer er lagerført hos
          Brødrene Dahl og Flisekompaniet med NOBB- og NRF-nummer for
          enkel bestilling.
        </p>

        {/* Category quick links */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            { id: "slukpotter", label: "Slukpotter" },
            { id: "slukoverdeler", label: "Slukoverdeler" },
            { id: "monteringsverktoy", label: "Monteringsverktøy" },
            { id: "slukrister", label: "Slukrister" },
            { id: "hjornerister", label: "Hjørnerister" },
            { id: "slukrenner", label: "Slukrenner Rist" },
            { id: "slukrenner-tile", label: "Slukrenner Tile Insert" },
            { id: "slukrenner-eksentrisk", label: "Eksentriske" },
          ].map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="px-4 py-2 rounded-full bg-navy/6 text-navy text-sm font-medium hover:bg-navy/12 transition-colors"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
