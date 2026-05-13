"use client";

import { useEffect, useState } from "react";

export default function LeadMagnetPopup() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed/submitted this session
    if (sessionStorage.getItem("leadmagnet-dismissed")) return;

    const handleScroll = () => {
      // Don't show if cookie banner is still visible
      if (!localStorage.getItem("cookie-consent")) return;
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.45) {
        setOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Also show after 30 seconds as fallback (after cookie banner is likely dismissed)
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("leadmagnet-dismissed") && localStorage.getItem("cookie-consent")) {
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
    sessionStorage.setItem("leadmagnet-dismissed", "true");
  };

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Still show success - PDF is available as direct download fallback
    }
    setSending(false);
    setSubmitted(true);
    sessionStorage.setItem("leadmagnet-dismissed", "true");
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
      <div className="relative bg-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] max-w-[520px] w-full animate-[slideUp_0.4s_ease] overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-navy/5 transition-colors z-10 cursor-pointer"
          aria-label="Lukk"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-text-light">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Orange top accent */}
        <div className="h-1.5 bg-gradient-to-r from-orange to-orange-dark" />

        {submitted ? (
          <div className="p-10 max-sm:p-6 text-center">
            <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth={2} className="w-8 h-8">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Prosjektmappen er på vei!</h3>
            <p className="text-sm text-text-light mb-6">
              Sjekk innboksen din for nedlastingslenken.
            </p>
            <button
              onClick={handleClose}
              className="bg-orange text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-orange-dark transition-all cursor-pointer"
            >
              Lukk
            </button>
          </div>
        ) : (
          <div className="p-8 max-sm:p-5">
            {/* Icon */}
            <div className="w-12 h-12 bg-orange/8 rounded-xl flex items-center justify-center mb-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-navy mb-2 leading-tight">
              Last ned Prosjektmappe (PDF)
            </h3>
            <p className="text-[14px] text-text-light leading-relaxed mb-6">
              Få komplett oversikt over tilvalgsnivåer, teknisk sammenligning og
              implementeringsguide for ditt neste prosjekt.
            </p>

            {/* What's included */}
            <div className="bg-gray-bg rounded-lg p-4 max-sm:p-3 mb-6 max-sm:mb-4">
              <p className="text-xs font-semibold text-navy mb-2 uppercase tracking-wide">Innholdet inkluderer:</p>
              <ul className="space-y-1.5">
                {[
                  "Tre tilvalgsnivåer med prisstrategier",
                  "Sammenligning: tradisjonell vs. Slidedrain",
                  "Logistikk- og fremdriftsplan",
                  "SINTEF-godkjenning og tekniske spesifikasjoner",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-text-light">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth={2} className="w-4 h-4 shrink-0 mt-0.5">
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
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-navy/15 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
              />
              <input
                type="email"
                required
                placeholder="Din e-postadresse"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-navy/15 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
              />
              <input
                type="text"
                placeholder="Firma / prosjekt (valgfritt)"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-navy/15 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-orange text-white py-3 rounded-lg font-semibold text-sm hover:bg-orange-dark transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(251,92,19,0.3)] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sending ? "Sender..." : "Last ned gratis prosjektmappe"}
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
