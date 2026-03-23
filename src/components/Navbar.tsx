"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#tilvalg", label: "Tilvalg" },
    { href: "#fordeler", label: "Fordeler" },
    { href: "#sikkerhet", label: "Sikkerhet" },
    { href: "#logistikk", label: "Logistikk" },
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
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-light hover:text-navy transition-colors font-medium"
            >
              {l.label}
            </a>
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
        <div className="md:hidden bg-white border-t border-navy/8 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-text-light hover:text-navy font-medium py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="block bg-orange text-white px-6 py-2.5 rounded-md font-medium text-sm text-center hover:bg-orange-dark transition-all"
          >
            Book et møte
          </a>
        </div>
      )}
    </nav>
  );
}
