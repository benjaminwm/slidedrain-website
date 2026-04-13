"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CaseStudyPopup() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("casestudy-dismissed")) return;

    const handleScroll = () => {
      if (!localStorage.getItem("cookie-consent")) return;
      const scrollPercent =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.45) {
        setOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    const timer = setTimeout(() => {
      if (
        !sessionStorage.getItem("casestudy-dismissed") &&
        localStorage.getItem("cookie-consent")
      ) {
        setOpen(true);
      }
    }, 30000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("casestudy-dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "casestudy-rosendal",
        }),
      });
    } catch {
      // Still show success
    }
    setSending(false);
    setSubmitted(true);
    sessionStorage.setItem("casestudy-dismissed", "true");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease]"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] max-w-[520px] w-full animate-[slideUp_0.4s_ease] overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-navy/5 transition-colors z-10 cursor-pointer"
          aria-label="Lukk"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-5 h-5 text-text-light"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Orange top accent */}
        <div className="h-1.5 bg-gradient-to-r from-orange to-orange-dark" />

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth={2}
                className="w-8 h-8"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">
              Kundehistorien er klar!
            </h3>
            <p className="text-sm text-text-light mb-6">
              Klikk knappen under for å laste ned PDF-en.
            </p>
            <a
              href="/downloads/slidedrain-kundehistorie-rosendal-bygg.pdf"
              download
              onClick={handleClose}
              className="inline-block bg-orange text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-orange-dark transition-all cursor-pointer"
            >
              Last ned PDF
            </a>
          </div>
        ) : (
          <div className="p-8">
            {/* Preview image */}
            <div className="rounded-xl overflow-hidden mb-5 aspect-[16/9]">
              <Image
                src="/images/kundehistorier/rosendal-2.jpg"
                alt="Rosendal Bygg – kundehistorie"
                width={520}
                height={293}
                className="w-full h-full object-cover"
              />
            </div>

            <span className="inline-block bg-orange/10 text-orange text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3 uppercase tracking-wide">
              Kundehistorie
            </span>

            <h3 className="text-xl font-bold text-navy mb-2 leading-tight">
              Rosendal Bygg &amp; Ole Olsen
            </h3>
            <p className="text-[14px] text-text-light leading-relaxed mb-5">
              Se hvordan en byggmesterbedrift i Trondheim bruker Slidedrain
              for enklere planlegging, raskere montasje og tryggere bad.
              Last ned kundehistorien som PDF.
            </p>

            {/* What's included */}
            <div className="bg-gray-bg rounded-lg p-4 mb-5">
              <ul className="space-y-1.5">
                {[
                  "Reelle sitater fra rørlegger Ole Olsen",
                  "Utfordringer med bjelkelag og linjesluk",
                  "Løsningen med Slidedrain og tile insert",
                  "Nøkkelpunkter og resultater fra prosjektet",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[13px] text-text-light"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth={2}
                      className="w-4 h-4 shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Ditt navn"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-lg border border-navy/15 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
              />
              <input
                type="email"
                required
                placeholder="Din e-postadresse"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-lg border border-navy/15 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
              />
              <input
                type="text"
                placeholder="Firma / prosjekt (valgfritt)"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-lg border border-navy/15 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-orange text-white py-3 rounded-lg font-semibold text-sm hover:bg-orange-dark transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(251,92,19,0.3)] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sending ? "Sender..." : "Last ned kundehistorie (PDF)"}
              </button>
              <p className="text-[11px] text-text-light/50 text-center">
                Ingen spam. Vi deler aldri din informasjon.
              </p>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
