"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const HIDDEN_PATHS = ["/personvern", "/cookies"];
const SCROLL_THRESHOLD = 120;
const TIME_DELAY_MS = 25_000;
const COUNTDOWN_SECONDS = 3 * 60;
const STORAGE_KEY = "slidedrain:meetings-slidein-minimized";

const HOST = {
  name: "Stian Bjørnstad",
  role: "Daglig leder, Slidedrain",
  photo: "/images/team-1.jpg",
  pitch:
    "Vi tar gjerne en uforpliktende prat om hvordan Slidedrain kan passe i ditt prosjekt.",
};

const WEEKDAY_LABELS = ["Man", "Tir", "Ons", "Tor", "Fre"];

function getNextWeekdays(count: number) {
  const out: { date: Date; label: string; day: number }[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let d = new Date(today);
  while (out.length < count) {
    const dow = d.getDay();
    if (dow >= 1 && dow <= 5) {
      out.push({
        date: new Date(d),
        label: WEEKDAY_LABELS[dow - 1],
        day: d.getDate(),
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return out;
}

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
  const [selectedDay, setSelectedDay] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);

  const weekdays = useMemo(() => getNextWeekdays(5), []);
  const isHidden = HIDDEN_PATHS.some((p) => pathname === p || pathname?.startsWith(p + "/"));

  // Mount + restore minimized state from sessionStorage
  useEffect(() => {
    setMounted(true);
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored === "1") setMinimized(true);
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

  // Countdown — only runs when popup is open (not minimized)
  useEffect(() => {
    if (!visible || minimized) return;
    if (secondsLeft <= 0) return;
    const id = window.setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [visible, minimized, secondsLeft]);

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

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");
  const countdownPct = (secondsLeft / COUNTDOWN_SECONDS) * 100;

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
          src={HOST.photo}
          alt={HOST.name}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-navy leading-tight">
            {HOST.name}
          </p>
          <p className="text-[11px] text-text-light leading-tight">
            {HOST.role}
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
          {HOST.pitch}
        </p>

        {/* Weekday selector (visual) */}
        <div className="flex gap-1.5 mb-3">
          {weekdays.map((d, i) => {
            const active = selectedDay === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedDay(i)}
                className={`flex-1 flex flex-col items-center py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
                  active
                    ? "bg-orange text-white"
                    : "bg-gray-bg text-text-light hover:bg-navy/8 hover:text-navy"
                }`}
              >
                <span className="uppercase tracking-wide">{d.label}</span>
                <span className="text-[14px] font-bold leading-tight">
                  {d.day}
                </span>
              </button>
            );
          })}
        </div>

        {/* Limited slots + countdown */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] text-text-light">
              Begrenset antall plasser denne uken
            </span>
            <span className="text-[11px] font-mono font-semibold text-orange tabular-nums">
              {mm}:{ss}
            </span>
          </div>
          <div className="h-1 bg-gray-bg rounded-full overflow-hidden">
            <div
              className="h-full bg-orange transition-all duration-1000 ease-linear"
              style={{ width: `${countdownPct}%` }}
            />
          </div>
        </div>

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
