"use client";

import { useState } from "react";
import { trackConversion, trackEvent } from "@/lib/analytics";

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  company_url: string; // honeypot
};

type FieldErrors = Partial<Record<keyof FormData, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 8+ siffer, valgfri + foran, mellomrom og bindestreker tillatt
const PHONE_RE = /^\+?[\d\s-]{8,}$/;

function validate(form: FormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Vennligst fyll inn navn";
  if (!form.email.trim()) {
    errors.email = "Vennligst fyll inn e-post";
  } else if (!EMAIL_RE.test(form.email.trim())) {
    errors.email = "Ugyldig e-postadresse";
  }
  if (!form.phone.trim()) {
    errors.phone = "Vennligst fyll inn telefonnummer";
  } else if (!PHONE_RE.test(form.phone.trim())) {
    errors.phone = "Ugyldig telefonnummer";
  }
  if (!form.company.trim()) errors.company = "Vennligst fyll inn firma eller prosjekt";
  if (!form.message.trim()) errors.message = "Vennligst skriv en kort melding";
  return errors;
}

export default function BookingWidget() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    company_url: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const setField = (key: keyof FormData, value: string) => {
    setFormData((f) => ({ ...f, [key]: value }));
    if (errors[key]) {
      // Clear the field error as soon as user starts editing
      setErrors((e) => {
        const next = { ...e };
        delete next[key];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate(formData);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      setSubmitError(null);
      // Fokus første felt med feil
      const firstKey = Object.keys(v)[0];
      const el = document.querySelector<HTMLInputElement>(
        `[data-field="${firstKey}"]`
      );
      el?.focus();
      return;
    }
    setSending(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "booking-widget",
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Kunne ikke sende meldingen");
      }
      trackEvent("contact_form_submit", {
        lead_source: "booking-widget",
        value: 100,
        currency: "NOK",
      });
      trackConversion("contact_submit", { lead_source: "booking-widget" });
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Noe gikk galt. Prøv igjen."
      );
    } finally {
      setSending(false);
    }
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

  const errorCount = Object.keys(errors).length;
  const fieldClass = (key: keyof FormData) =>
    `w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-1 transition-colors ${
      errors[key]
        ? "border-red focus:border-red focus:ring-red"
        : "border-navy/15 focus:border-orange focus:ring-orange"
    }`;

  return (
    <div className="bg-white rounded-2xl p-8 text-navy shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
      <h3 className="text-xl font-semibold mb-1">Book et 15-min møte</h3>
      <p className="text-sm text-text-light mb-6">
        Fyll inn skjemaet, så kontakter vi deg for å avtale et tidspunkt. Alle
        felter er obligatoriske.
      </p>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Honeypot — skjult fra ekte brukere */}
        <input
          type="text"
          name="company_url"
          tabIndex={-1}
          autoComplete="off"
          value={formData.company_url}
          onChange={(e) => setField("company_url", e.target.value)}
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-10000px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-text-light mb-1">
              Navn <span className="text-orange">*</span>
            </label>
            <input
              data-field="name"
              type="text"
              value={formData.name}
              onChange={(e) => setField("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "err-name" : undefined}
              className={fieldClass("name")}
              placeholder="Ditt navn"
            />
            {errors.name && (
              <p id="err-name" className="mt-1 text-[12px] text-red">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-text-light mb-1">
              Telefon <span className="text-orange">*</span>
            </label>
            <input
              data-field="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setField("phone", e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "err-phone" : undefined}
              className={fieldClass("phone")}
              placeholder="+47 …"
            />
            {errors.phone && (
              <p id="err-phone" className="mt-1 text-[12px] text-red">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-text-light mb-1">
            E-post <span className="text-orange">*</span>
          </label>
          <input
            data-field="email"
            type="email"
            value={formData.email}
            onChange={(e) => setField("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
            className={fieldClass("email")}
            placeholder="din@epost.no"
          />
          {errors.email && (
            <p id="err-email" className="mt-1 text-[12px] text-red">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-text-light mb-1">
            Firma / Prosjekt <span className="text-orange">*</span>
          </label>
          <input
            data-field="company"
            type="text"
            value={formData.company}
            onChange={(e) => setField("company", e.target.value)}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "err-company" : undefined}
            className={fieldClass("company")}
            placeholder="Firmanavn eller prosjekt"
          />
          {errors.company && (
            <p id="err-company" className="mt-1 text-[12px] text-red">
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-text-light mb-1">
            Melding <span className="text-orange">*</span>
          </label>
          <textarea
            data-field="message"
            rows={3}
            value={formData.message}
            onChange={(e) => setField("message", e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "err-message" : undefined}
            className={`${fieldClass("message")} resize-none`}
            placeholder="Fortell oss litt om prosjektet..."
          />
          {errors.message && (
            <p id="err-message" className="mt-1 text-[12px] text-red">
              {errors.message}
            </p>
          )}
        </div>

        {errorCount > 0 && (
          <div className="bg-red/8 border-l-4 border-red rounded-r-lg p-3">
            <p className="text-[13px] text-red font-medium">
              {errorCount === 1
                ? "Ett felt mangler eller har feil."
                : `${errorCount} felter mangler eller har feil.`}{" "}
              Fyll inn det som mangler og prøv igjen.
            </p>
          </div>
        )}

        {submitError && (
          <p className="text-[13px] text-red font-medium">{submitError}</p>
        )}

        <button
          type="submit"
          disabled={sending}
          className="w-full bg-orange text-white py-3 rounded-lg font-semibold text-sm hover:bg-orange-dark transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(251,92,19,0.3)] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {sending ? "Sender..." : "Send forespørsel"}
        </button>
        <p className="text-[11px] text-text-light/60 text-center">
          Vi svarer normalt innen 24 timer
        </p>
      </form>
    </div>
  );
}
