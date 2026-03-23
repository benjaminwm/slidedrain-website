"use client";

import FadeUp from "../FadeUp";
import VideoEmbed from "../VideoEmbed";

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Slipp feilstøp og kostbar pigging",
    desc: "Unikt monteringsverktøy og trinnløs høydejustering sikrer eksakt plassering og korrekt høyde ved tynnavretting. Dette sørger for at sluket havner på badets laveste punkt, fjerner behovet for forhøyningsringer og eliminerer risiko for kostbar pigging.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Aldri mer tidstyver ved montasje",
    desc: "Den patenterte teknologien fjerner behovet for klemring ved folie- og banemembran, samt forhøyningsring, skruer og løse pakninger for alle membrantyper. Dette forenkler monteringen, reduserer installasjonstiden og senker materialkostnaden per sluk.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Montasje med mindre risiko for lekkasje",
    desc: "Ved å fjerne tradisjonelle feilkilder i overgangen mellom sluk og membran, settes en ny standard for lekkasjesikkerhet. Færre komponenter reduserer muligheten for feilmontering ved baderommets mest kritiske lekkasjepunkter.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Frihet fra låste systemløsninger",
    desc: "Systemet er kompatibelt med alle membraner, og Slidedrain slukrister og slukrenner passer til alle sirkulære gulvsluk i plast, stål eller støpejern. Dette muliggjør en identisk teknisk utførelse fra prosjektering til tynnavretting.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 3v18" />
      </svg>
    ),
    title: "Designendringer uten teknisk hodebry",
    desc: "Med Tile Insert integreres baderomsflisen direkte i sluket for et sømløst og moderne uttrykk. Sluttkunden får et sluttresultat som matcher deres valgte fliser, mens byggeprosessen blir forutsigbar med en standardisert teknisk utførelse.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: "Slutt på kundeservice for tette sluk",
    desc: "Slidedrain bygger på bruk av sirkulære sluk med store vannlåser som reduserer vedlikeholdsbehovet drastisk sammenlignet med tradisjonelle linjesluk. Dette gir færre servicehenvendelser og økt kundetilfredshet.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg" id="problemer">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Problemer Slidedrain løser{" "}
            <span className="text-orange">i byggeprosessen</span>
          </h2>
        </FadeUp>
        <VideoEmbed />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <FadeUp
              key={i}
              className="bg-white rounded-xl p-8 border border-navy/8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-orange/8 rounded-[10px] flex items-center justify-center mb-5">
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
              <p className="text-[15px] text-text-light leading-[1.7]">
                {p.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
