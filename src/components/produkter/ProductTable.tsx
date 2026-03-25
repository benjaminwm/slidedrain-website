"use client";

import FadeUp from "../FadeUp";
import { productCategories } from "@/data/products";

function DimensionBadge({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs bg-navy/6 text-navy px-2 py-1 rounded font-medium">
      <span className="text-text-light font-normal">{label}</span> {value}
    </span>
  );
}

export default function ProductTable() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[1200px] mx-auto space-y-16">
        {productCategories.map((cat) => (
          <div key={cat.id} id={cat.id} className="scroll-mt-[100px]">
            <FadeUp>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-navy mb-2">
                  {cat.title}
                </h2>
                <p className="text-[15px] text-text-light leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Desktop table */}
              <div className="max-md:hidden overflow-x-auto rounded-xl border border-navy/10">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="px-5 py-3 font-semibold">Produktnavn</th>
                      <th className="px-5 py-3 font-semibold">NOBBnr</th>
                      <th className="px-5 py-3 font-semibold">NRFnr</th>
                      <th className="px-5 py-3 font-semibold">Mål (mm)</th>
                      {cat.products.some((p) => p.finish) && (
                        <th className="px-5 py-3 font-semibold">Utførelse</th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {cat.products.map((p, i) => (
                      <tr
                        key={p.nobbNr}
                        className={`border-t border-navy/8 hover:bg-orange/4 transition-colors ${
                          i % 2 === 0 ? "bg-white" : "bg-gray-bg/50"
                        }`}
                      >
                        <td className="px-5 py-3.5 font-medium text-navy">
                          {p.name}
                        </td>
                        <td className="px-5 py-3.5 font-mono text-[13px] text-text-light">
                          {p.nobbNr}
                        </td>
                        <td className="px-5 py-3.5 font-mono text-[13px] text-text-light">
                          {p.nrfNr}
                        </td>
                        <td className="px-5 py-3.5">
                          <div className="flex flex-wrap gap-1.5">
                            {p.lengthMm && (
                              <DimensionBadge
                                label="L"
                                value={`${p.lengthMm}`}
                              />
                            )}
                            {p.widthMm && (
                              <DimensionBadge
                                label="B"
                                value={`${p.widthMm}`}
                              />
                            )}
                            {p.heightMm && (
                              <DimensionBadge
                                label="H"
                                value={`${p.heightMm}`}
                              />
                            )}
                            {p.diameterMm && (
                              <DimensionBadge
                                label="&Oslash;"
                                value={`${p.diameterMm}`}
                              />
                            )}
                            {!p.lengthMm &&
                              !p.widthMm &&
                              !p.heightMm &&
                              !p.diameterMm && (
                                <span className="text-text-light text-xs">
                                  {p.dimensions}
                                </span>
                              )}
                          </div>
                        </td>
                        {cat.products.some((pr) => pr.finish) && (
                          <td className="px-5 py-3.5 text-text-light">
                            {p.finish || "\u2013"}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-3">
                {cat.products.map((p) => (
                  <div
                    key={p.nobbNr}
                    className="bg-white rounded-xl border border-navy/10 p-4"
                  >
                    <h3 className="font-semibold text-navy text-[15px] mb-2">
                      {p.name}
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-text-light text-xs block">
                          NOBBnr
                        </span>
                        <span className="font-mono text-[13px]">
                          {p.nobbNr}
                        </span>
                      </div>
                      <div>
                        <span className="text-text-light text-xs block">
                          NRFnr
                        </span>
                        <span className="font-mono text-[13px]">
                          {p.nrfNr}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {p.lengthMm && (
                        <DimensionBadge label="L" value={`${p.lengthMm}`} />
                      )}
                      {p.widthMm && (
                        <DimensionBadge label="B" value={`${p.widthMm}`} />
                      )}
                      {p.heightMm && (
                        <DimensionBadge label="H" value={`${p.heightMm}`} />
                      )}
                      {p.diameterMm && (
                        <DimensionBadge
                          label="&Oslash;"
                          value={`${p.diameterMm}`}
                        />
                      )}
                    </div>
                    {p.finish && (
                      <span className="text-xs text-text-light mt-2 block">
                        Utførelse: {p.finish}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        ))}
      </div>
    </section>
  );
}
