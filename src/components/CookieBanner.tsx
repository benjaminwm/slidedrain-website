"use client";

import { useEffect, useState } from "react";

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) {
      // Small delay to not flash on load
      const timer = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (c: CookieConsent) => {
    localStorage.setItem("cookie-consent", JSON.stringify(c));
    setShow(false);
    // TODO: Initialize analytics/marketing scripts based on consent
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const acceptNecessary = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  const saveSelected = () => {
    saveConsent(consent);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[150] p-4 animate-[slideUp_0.4s_ease]">
      <div className="max-w-[640px] mx-auto bg-white rounded-2xl shadow-[0_-4px_30px_rgba(0,0,0,0.12)] border border-navy/8 overflow-hidden">
        <div className="p-6">
          <h3 className="text-base font-semibold text-navy mb-2">
            Vi bruker informasjonskapsler
          </h3>
          <p className="text-sm text-text-light leading-relaxed mb-4">
            Vi bruker informasjonskapsler for å sikre at nettsiden fungerer
            optimalt. I tillegg bruker vi cookies for analyse og
            markedsføring, men kun med ditt samtykke.
          </p>

          {showDetails && (
            <div className="space-y-3 mb-4 p-4 bg-gray-bg rounded-lg">
              <label className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-navy">
                    Nødvendige
                  </span>
                  <p className="text-xs text-text-light">
                    Påkrevd for at nettsiden skal fungere
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="w-4 h-4 accent-orange"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <span className="text-sm font-medium text-navy">
                    Analyse
                  </span>
                  <p className="text-xs text-text-light">
                    Hjelper oss å forstå bruksmønstre
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) =>
                    setConsent({ ...consent, analytics: e.target.checked })
                  }
                  className="w-4 h-4 accent-orange cursor-pointer"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <span className="text-sm font-medium text-navy">
                    Markedsføring
                  </span>
                  <p className="text-xs text-text-light">
                    Brukes for å vise relevante annonser
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.marketing}
                  onChange={(e) =>
                    setConsent({ ...consent, marketing: e.target.checked })
                  }
                  className="w-4 h-4 accent-orange cursor-pointer"
                />
              </label>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={acceptAll}
              className="flex-1 bg-orange text-white py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-orange-dark transition-all cursor-pointer"
            >
              Godta alle
            </button>
            {showDetails ? (
              <button
                onClick={saveSelected}
                className="flex-1 bg-navy/8 text-navy py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-navy/15 transition-all cursor-pointer"
              >
                Lagre valg
              </button>
            ) : (
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 bg-navy/8 text-navy py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-navy/15 transition-all cursor-pointer"
              >
                Tilpass
              </button>
            )}
            <button
              onClick={acceptNecessary}
              className="flex-1 text-text-light py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-navy/5 transition-all cursor-pointer"
            >
              Kun nødvendige
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
