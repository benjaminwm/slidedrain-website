import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyPopup from "@/components/CaseStudyPopup";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Kundehistorier – rørleggere og entreprenører | Slidedrain",
  description:
    "Se hvordan norske byggeprosjekter bruker Slidedrain Sluksystem for tryggere bad, enklere montasje og økt fleksibilitet.",
  alternates: { canonical: "/kundehistorier" },
};

// Nyeste først
const stories = [
  {
    slug: "muribo",
    title: "Muribø",
    subtitle: "Totalrenoverer bad uten fallgruver",
    image: "/images/kundehistorier/muribo-1.jpg",
    tags: ["Rehabilitering", "Eksentrisk Slukrenne"],
    date: "August 2026",
  },
  {
    slug: "total-teknisk",
    title: "Total Teknisk",
    subtitle: "Sparer tid og oppmøter med Slidedrain",
    image: "/images/kundehistorier/total-teknisk-1.jpg",
    tags: ["Nybyggprosjekt", "Slidedrain Gulvsluk"],
    date: "Juli 2026",
  },
  {
    slug: "rosendal-bygg",
    title: "Rosendal Bygg",
    subtitle: "Fra planlegging til ferdig bad",
    image: "/images/kundehistorier/rosendal-2.jpg",
    tags: ["Boligprosjekt", "Slidedrain Sluksystem"],
    date: "April 2026",
  },
];

export default function KundehistorierPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-[140px] pb-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-15">
              <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
                Kundehistorier
              </span>
              <h1 className="text-[42px] max-lg:text-[34px] max-sm:text-[28px] font-bold leading-[1.15] mb-5 text-navy">
                Se Slidedrain{" "}
                <span className="text-orange">i praksis</span>
              </h1>
              <p className="text-lg text-text-light leading-[1.7] font-light">
                Les hvordan norske byggherrer, entreprenører og rørleggere
                bruker Slidedrain Sluksystem i sine prosjekter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((s) => (
                <Link
                  key={s.slug}
                  href={`/kundehistorier/${s.slug}`}
                  className="group bg-white rounded-xl border border-navy/8 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={600}
                      height={338}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] bg-orange/8 text-orange px-2 py-0.5 rounded font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold text-navy mb-1">
                      {s.title}
                    </h2>
                    <p className="text-[15px] text-text-light">{s.subtitle}</p>
                    <p className="text-[12px] text-text-light/60 mt-3">
                      {s.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CaseStudyPopup />
    </>
  );
}
