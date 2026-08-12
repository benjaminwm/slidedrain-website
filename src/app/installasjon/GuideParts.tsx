import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import DownloadLink from "@/components/DownloadLink";
import type { Download, Faq, Step } from "./installasjonData";
import { installGuides } from "./installasjonData";

/**
 * Delte, server-rendrede byggeklosser for installasjonsguidene.
 * Ingen klientstate — alt innhold havner i HTML og er synlig for
 * søkemotorer og AI-crawlere.
 */

/** Undermeny mellom de tre guidene. Erstatter den gamle fane-bryteren. */
export function GuideNav({ active }: { active: string }) {
  return (
    <nav
      aria-label="Installasjonsguider"
      className="flex flex-wrap justify-center gap-2 mb-12"
    >
      {installGuides.map((g) => (
        <Link
          key={g.href}
          href={g.href}
          aria-current={g.href === active ? "page" : undefined}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
            g.href === active
              ? "bg-orange text-white"
              : "bg-gray-bg text-text-light hover:text-navy"
          }`}
        >
          {g.label}
        </Link>
      ))}
    </nav>
  );
}

export function GuideHero({
  title,
  intro,
  active,
}: {
  title: React.ReactNode;
  intro: string;
  active: string;
}) {
  return (
    <section className="pt-[140px] pb-12 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
          Installasjonsveiledning
        </span>
        <h1 className="text-[42px] max-lg:text-[34px] max-sm:text-[28px] font-bold leading-[1.15] mb-5 text-navy">
          {title}
        </h1>
        <p className="text-lg text-text-light leading-[1.7] font-light max-w-[700px] mx-auto mb-10">
          {intro}
        </p>
        <GuideNav active={active} />
      </div>
    </section>
  );
}

export function StepCard({
  step,
  altPrefix,
  imageHeight,
  delayIndex = 0,
  idPrefix = "steg",
}: {
  step: Step;
  altPrefix: string;
  imageHeight: number;
  delayIndex?: number;
  /** Gir stegene egne anker-IDer, referert fra HowTo-schema. */
  idPrefix?: string;
}) {
  return (
    <FadeUp
      className="mb-8 scroll-mt-28"
      style={{ transitionDelay: `${delayIndex * 80}ms` }}
      id={`${idPrefix}-${step.step}`}
    >
      <div className="bg-white rounded-xl overflow-hidden border border-navy/10 shadow-[0_4px_20px_rgba(40,52,71,0.06)]">
        <div className="bg-white border-b border-navy/5">
          <Image
            src={step.image}
            alt={`${altPrefix} ${step.step}: ${step.title}`}
            width={1024}
            height={imageHeight}
            className="w-full h-auto"
          />
        </div>
        <div className="p-6 flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">
            {step.step}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-navy text-[16px] mb-2">
              {step.title}
            </h3>
            <p className="text-[14px] text-text-light leading-[1.7]">
              {step.desc}
            </p>
            {step.note && (
              <p className="text-[13px] text-orange mt-2 font-medium">
                {step.note}
              </p>
            )}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export function DownloadRow({
  downloads,
  heading,
  className = "mb-10",
}: {
  downloads: Download[];
  heading?: string;
  className?: string;
}) {
  return (
    <FadeUp className={className}>
      {heading && (
        <p className="text-xs font-semibold text-text-light uppercase tracking-wider mb-3">
          {heading}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {downloads.map((d) => (
          <DownloadLink key={d.href + d.label} href={d.href} label={d.label} />
        ))}
      </div>
    </FadeUp>
  );
}

/** FAQ-liste med <details> — åpner/lukker uten JS, og teksten er i HTML. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <>
      {items.map((f, i) => (
        <FadeUp
          key={f.q}
          className="mb-4"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <details className="bg-gray-bg rounded-xl p-5 group">
            <summary className="font-semibold text-navy text-[15px] cursor-pointer list-none flex items-center justify-between">
              {f.q}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-4 h-4 shrink-0 ml-3 transition-transform group-open:rotate-180"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <div className="text-[14px] text-text-light leading-[1.7] mt-3 space-y-3">
              {(Array.isArray(f.a) ? f.a : [f.a]).map((para, j) => {
                const parts = para.split(/(https?:\/\/[^\s]+)/g);
                return (
                  <p key={j}>
                    {parts.map((part, k) =>
                      part.startsWith("http") ? (
                        <a
                          key={k}
                          href={part}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange hover:text-orange-dark underline break-all"
                        >
                          {part}
                        </a>
                      ) : (
                        <span key={k}>{part}</span>
                      )
                    )}
                  </p>
                );
              })}
            </div>
          </details>
        </FadeUp>
      ))}
    </>
  );
}

/**
 * Kontekstuelle lenker videre fra en guide — til de andre guidene og til
 * relevante produkt-/kategorisider. Gir innholdssidene intern autoritet
 * og hjelper leseren videre i trakten.
 */
export function GuideCrossLinks({
  active,
  productLinks,
}: {
  active: string;
  productLinks: { href: string; label: string }[];
}) {
  const others = installGuides.filter((g) => g.href !== active);
  return (
    <FadeUp className="mt-14 border-t border-navy/10 pt-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-bold text-navy mb-3">
            Andre installasjonsguider
          </h2>
          <ul className="space-y-2">
            {others.map((g) => (
              <li key={g.href}>
                <Link
                  href={g.href}
                  className="text-[14px] text-orange hover:text-orange-dark font-medium"
                >
                  {g.navLabel} →
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/kundehistorier"
                className="text-[14px] text-orange hover:text-orange-dark font-medium"
              >
                Se hvordan fagfolk bruker Slidedrain →
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold text-navy mb-3">
            Produktene i denne guiden
          </h2>
          <ul className="space-y-2">
            {productLinks.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-[14px] text-orange hover:text-orange-dark font-medium"
                >
                  {p.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeUp>
  );
}
