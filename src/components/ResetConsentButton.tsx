"use client";

import { CONSENT_COOKIE } from "@/lib/analytics";

export default function ResetConsentButton() {
  const reset = () => {
    try {
      localStorage.removeItem("cookie-consent");
      document.cookie = `${CONSENT_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
    } catch {}
    // Reload så CookieBanner kommer opp igjen
    window.location.reload();
  };

  return (
    <button
      type="button"
      onClick={reset}
      className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-orange-dark transition-all shadow-[0_4px_14px_rgba(251,92,19,0.3)]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-4 h-4"
      >
        <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
        <polyline points="3 3 3 8 8 8" />
      </svg>
      Endre cookie-valg
    </button>
  );
}
