"use client";

import FadeUp from "../FadeUp";

const rows = [
  {
    feature: "Monteringstid",
    sdBold: "~15 min.",
    sdReg: "Trinnløs justering i alle retninger.",
    trBold: "30\u2013120 min.",
    trReg: "Krever millimeterpresisjon.",
  },
  {
    feature: "Høydejustering",
    sdBold: "40 mm integrert.",
    sdReg: "Trinnløs teleskopfunksjon.",
    trBold: "0 mm.",
    trReg: "Forhøyningsringer med fastsatte høyder.",
  },
  {
    feature: "Vannskaderisiko",
    sdBold: "Minimal.",
    sdReg: "2+ deler og skrueløst med integrert mansjett.",
    trBold: "Høy.",
    trReg: "5\u20138+ deler med kritiske skruekoblinger.",
  },
  {
    feature: "Vedlikehold",
    sdBold: "2\u20136 ganger/år.",
    sdReg: "Stor vannlås som sjelden tettes.",
    trBold: "26\u201352 ganger/år.",
    trReg: "Smal vannlås som tettes raskt.",
  },
  {
    feature: "Fleksibilitet",
    sdBold: "Full.",
    sdReg: "Designvalg kan endres frem til tynnavretting.",
    trBold: "Låst.",
    trReg: "Design kan ikke endres etter prosjektering.",
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 px-6 bg-navy text-white" id="sammenligning">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Slidedrain vs.{" "}
            <span className="text-orange">tradisjonelle løsninger</span>
          </h2>
        </FadeUp>
        <FadeUp className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/15">
                <th className="py-4 px-4 font-semibold text-white/50 w-1/5">
                  Funksjon
                </th>
                <th className="py-4 px-4 font-semibold text-orange w-2/5">
                  Slidedrain Sluksystem
                </th>
                <th className="py-4 px-4 font-semibold text-white/50 w-2/5">
                  Tradisjonelt linjesluk
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  className="border-b border-white/8 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-4 font-semibold text-white">
                    {r.feature}
                  </td>
                  <td className="py-4 px-4 text-green">
                    <span className="font-bold">{r.sdBold}</span>{" "}
                    <span className="font-normal opacity-80">{r.sdReg}</span>
                  </td>
                  <td className="py-4 px-4 text-white/50">
                    <span className="font-bold text-white/70">{r.trBold}</span>{" "}
                    <span className="font-normal">{r.trReg}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeUp>
      </div>
    </section>
  );
}
