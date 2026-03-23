"use client";

import { useState } from "react";

export default function BookingWidget() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase / calendar API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-navy text-center">
        <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
        <h3 className="text-xl font-semibold mb-2">Takk for din henvendelse!</h3>
        <p className="text-text-light text-sm">
          Vi tar kontakt innen 24 timer for å avtale et møte.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 text-navy shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
      <h3 className="text-xl font-semibold mb-1">Book et 15-min møte</h3>
      <p className="text-sm text-text-light mb-6">
        Fyll inn skjemaet, så kontakter vi deg for å avtale et tidspunkt.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-text-light mb-1">
              Navn *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-lg border border-navy/15 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
              placeholder="Ditt navn"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-text-light mb-1">
              Telefon
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-lg border border-navy/15 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
              placeholder="+47"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-text-light mb-1">
            E-post *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-3.5 py-2.5 rounded-lg border border-navy/15 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
            placeholder="din@epost.no"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-text-light mb-1">
            Firma / Prosjekt
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            className="w-full px-3.5 py-2.5 rounded-lg border border-navy/15 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
            placeholder="Firmanavn eller prosjekt"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-text-light mb-1">
            Melding
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-3.5 py-2.5 rounded-lg border border-navy/15 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors resize-none"
            placeholder="Fortell oss litt om prosjektet..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange text-white py-3 rounded-lg font-semibold text-sm hover:bg-orange-dark transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(251,92,19,0.3)] cursor-pointer"
        >
          Send forespørsel
        </button>
        <p className="text-[11px] text-text-light/60 text-center">
          Vi svarer normalt innen 24 timer
        </p>
      </form>
    </div>
  );
}
