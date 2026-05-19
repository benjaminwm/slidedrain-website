"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const HIDDEN_PATHS = ["/personvern", "/cookies"];
const SCROLL_THRESHOLD = 120;
const TIME_DELAY_MS = 25_000;
const STORAGE_KEY = "slidedrain:meetings-slidein-minimized";
const HOST_INDEX_KEY = "slidedrain:meetings-host-index";

const HOSTS = [
  {
    name: "Joakim Delebekk",
    role: "Salgsansvarlig, Slidedrain",
    photo: "/images/team-2.jpg",
    pitch:
      "Jeg tar gjerne et lite kvarter med deg på telefon eller meets hvis du lurer på hvordan Slidedrain kan passe inn i ditt prosjekt!",
  },
  {
    name: "Fredrik Fretheim",
    role: "Salgsansvarlig, Slidedrain",
    photo: "/images/team-1.jpg",
    pitch:
      "Jeg tar gjerne et lite kvarter med deg på telefon eller meets hvis du lurer på hvordan Slidedrain kan passe inn i ditt prosjekt!",
  },
];

function CalendarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function CloseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function MeetingsSlideIn() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [hostIdx, setHostIdx] = useState(0);

  const isHidden = HIDDEN_PATHS.some((p) => pathname === p || pathname?.startsWith(p + "/"));

  // Mount: restore minimized state, pick host for this visit, bump index for next
  useEffect(() => {
    setMounted(true);
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored === "1") setMinimized(true);

      const raw = parseInt(localStorage.getItem(HOST_INDEX_KEY) || "0", 10);
      const idx = ((Number.isNaN(raw) ? 0 : raw) % HOSTS.length + HOSTS.length) % HOSTS.length;
      setHostIdx(idx);
      localStorage.setItem(HOST_INDEX_KEY, String((idx + 1) % HOSTS.length));
    } catch {}
  }, []);

  // Trigger: 25s OR 120px scroll, whichever first
  useEffect(() => {
    if (!mounted || isHidden) return;
    if (visible) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setVisible(true);
    };

    const t = window.setTimeout(trigger, TIME_DELAY_MS);
    const onScroll = () => {
      if (window.scrollY >= SCROLL_THRESHOLD) trigger();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, [mounted, isHidden, visible]);

  const minimize = useCallback(() => {
    setMinimized(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }, []);

  const expand = useCallback(() => {
    setMinimized(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "0");
    } catch {}
  }, []);

  const goToContact = useCallback(() => {
    minimize();
    const el = document.getElementById("kontakt");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#kontakt";
    }
  }, [minimize]);

  if (!mounted || !visible || isHidden) return null;

  // Minimized: floating action button
  if (minimized) {
    return (
      <button
        type="button"
        onClick={expand}
        aria-label="Åpne kontakt-widget"
        className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-orange text-white shadow-[0_8px_24px_rgba(251,92,19,0.4)] items-center justify-center hover:bg-orange-dark hover:scale-105 transition-all"
      >
        <CalendarIcon className="w-6 h-6" />
      </button>
    );
  }

  // Full slide-in popup
  return (
    <div
      className="hidden md:block fixed bottom-6 right-6 z-50 w-[360px] animate-[meetings-slide-in_400ms_ease-out] bg-white rounded-2xl border border-navy/10 shadow-[0_20px_60px_rgba(40,52,71,0.18)] overflow-hidden"
      role="complementary"
      aria-label="Book en prat med Slidedrain"
    >
      <style>{`
        @keyframes meetings-slide-in {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      {/* Header */}
      <div className="flex items-start gap-3 p-5 pb-3">
        <Image
          src={HOSTS[hostIdx].photo}
          alt={HOSTS[hostIdx].name}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-navy leading-tight">
            {HOSTS[hostIdx].name}
          </p>
          <p className="text-[11px] text-text-light leading-tight">
            {HOSTS[hostIdx].role}
          </p>
        </div>
        <button
          type="button"
          onClick={minimize}
          aria-label="Minimer widget"
          className="-mr-1 -mt-1 text-text-light hover:text-navy transition-colors p-1"
        >
          <CloseIcon />
        </button>
      </div>

      {/* Body */}
      <div className="px-5 pb-5">
        <h3 className="text-[18px] font-bold text-navy leading-tight mb-1.5">
          Slå av en prat om sluk?
        </h3>
        <p className="text-[13px] text-text-light leading-[1.5] mb-4">
          {HOSTS[hostIdx].pitch}
        </p>

        {/* CTA */}
        <button
          type="button"
          onClick={goToContact}
          className="shine-btn w-full inline-flex items-center justify-center gap-2 bg-orange text-white px-4 py-3 rounded-lg font-semibold text-[14px] hover:bg-orange-dark transition-colors shadow-[0_4px_14px_rgba(251,92,19,0.3)]"
        >
          <CalendarIcon className="w-4 h-4" />
          <span>Send oss en melding</span>
        </button>
      </div>
    </div>
  );
}
