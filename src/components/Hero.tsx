import Image from "next/image";
import { ArrowRight } from "./icons";

export default function Hero() {
  return (
    <section className="pt-[140px] pb-20 px-6 bg-gradient-to-br from-white to-[#fef7f3] overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
        <div>
          <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            For byggherrer & entreprenører
          </span>
          <h1 className="text-[42px] max-lg:text-[34px] max-sm:text-[28px] font-bold leading-[1.2] mb-5 text-navy">
            Sluksystemet som øker{" "}
            <span className="text-orange">prosjektets lønnsomhet</span>
          </h1>
          <p className="text-lg text-text-light leading-[1.7] mb-8 font-light">
            Forleng tilvalgsperioden og maksimer mersalget uten
            omprosjektering. Slidedrain sin patenterte teknologi forenkler
            utførelsen og reduserer risikoen for vannskader i prosjektet.
          </p>
          <a
            href="#kontakt"
            className="shine-btn inline-flex items-center gap-2.5 bg-orange text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-orange-dark transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(251,92,19,0.3)] hover:shadow-[0_6px_20px_rgba(251,92,19,0.4)]"
          >
            <span>Book et 15-min møte for ditt neste prosjekt</span>
            <ArrowRight />
          </a>
        </div>
        <div className="flex justify-center items-center max-lg:order-first">
          <Image
            src="/images/hero-render.png"
            alt="Slidedrain slukrenne installert på dusjgulv"
            width={1301}
            height={731}
            className="w-full rounded-2xl shadow-[0_20px_60px_rgba(40,52,71,0.12)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
