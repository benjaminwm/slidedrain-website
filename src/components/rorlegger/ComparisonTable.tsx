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
    <section className="py-20 px-6 bg-white" id="sammenligning">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight text-navy">
            <span className="text-orange">Slidedrain</span> vs.
            tradisjonelle løsninger
          </h2>
        </FadeUp>
        <FadeUp className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-navy/15">
                <th className="py-4 px-4 font-semibold text-text-light text-left w-1/5">
                  Funksjon
                </th>
                <th className="py-4 px-4 font-semibold text-orange text-center w-2/5">
                  Slidedrain Sluksystem
                </th>
                <th className="py-4 px-4 font-semibold text-text-light text-center w-2/5">
                  Tradisjonelt linjesluk
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  className="border-b border-navy/8 hover:bg-gray-bg transition-colors"
                >
                  <td className="py-4 px-4 font-semibold text-navy">
                    {r.feature}
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-bold text-orange">{r.sdBold}</span>{" "}
                    <span className="font-normal text-text-light">{r.sdReg}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-bold text-navy">{r.trBold}</span>{" "}
                    <span className="font-normal text-text-light">{r.trReg}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeUp>

        <FadeUp className="md:hidden">
          <ul className="space-y-4">
            {rows.map((r, i) => (
              <li
                key={i}
                className="rounded-xl border border-navy/10 bg-white overflow-hidden"
              >
                <div className="px-4 py-2.5 bg-gray-bg font-semibold text-navy text-sm">
                  {r.feature}
                </div>
                <div className="grid grid-cols-2 divide-x divide-navy/10 text-[13px]">
                  <div className="p-4">
                    <div className="font-bold text-orange mb-1">{r.sdBold}</div>
                    <div className="text-text-light leading-snug">{r.sdReg}</div>
                  </div>
                  <div className="p-4">
                    <div className="font-bold text-navy mb-1">{r.trBold}</div>
                    <div className="text-text-light leading-snug">{r.trReg}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
