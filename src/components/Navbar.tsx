"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const mainLinks = [
    { href: "/produkter", label: "Produkter" },
  ];

  const projectLinks = [
    { href: "/sluttkunde", label: "Privatperson" },
    { href: "/rorlegger", label: "Rørlegger" },
    { href: "/tilvalg", label: "Entreprenør" },
  ];

  const rightLinks = [
    { href: "/kundehistorier", label: "Kundehistorier" },
    { href: "/installasjon", label: "Installasjon" },
    { href: "/om-oss", label: "Om oss" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-md border-b border-navy/8 transition-shadow ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="https://slidedrain.no/wp-content/uploads/2020/08/Full-logo_Orange.webp?x59798"
            alt="Slidedrain"
            width={160}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {mainLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-text-light hover:text-navy transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}

          {/* Dropdown: Ditt prosjekt */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm text-text-light hover:text-navy transition-colors font-medium cursor-pointer"
            >
              Ditt prosjekt
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-[0_10px_40px_rgba(40,52,71,0.12)] border border-navy/8 py-2 min-w-[180px] animate-[fadeIn_0.15s_ease]">
                {projectLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-text-light hover:text-navy hover:bg-gray-bg transition-colors font-medium"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {rightLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-text-light hover:text-navy transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}

          <a
            href="#kontakt"
            className="bg-orange text-white px-6 py-2.5 rounded-md font-medium text-sm hover:bg-orange-dark transition-all hover:-translate-y-0.5"
          >
            Book et møte
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-6 h-6 text-navy"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-navy/8 px-6 py-4 space-y-1">
          {mainLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-text-light hover:text-navy font-medium py-2"
            >
              {l.label}
            </Link>
          ))}

          {/* Mobile: Ditt prosjekt section */}
          <p className="text-xs text-text-light/50 uppercase tracking-wider pt-3 pb-1 font-semibold">
            Ditt prosjekt
          </p>
          {projectLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-text-light hover:text-navy font-medium py-2 pl-3"
            >
              {l.label}
            </Link>
          ))}

          <div className="border-t border-navy/8 my-2" />

          {rightLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-text-light hover:text-navy font-medium py-2"
            >
              {l.label}
            </Link>
          ))}

          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="block bg-orange text-white px-6 py-2.5 rounded-md font-medium text-sm text-center hover:bg-orange-dark transition-all mt-2"
          >
            Book et møte
          </a>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}
