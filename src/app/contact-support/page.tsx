"use client";

import { useMemo, useState } from "react";

const REASONS = ["Question", "Publicité", "Ajouter ma boutique"] as const;

export default function Page() {
  const [formData, setFormData] = useState({
    reason: "Question",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({ email: false, message: false });

  const emailError = useMemo(() => {
    if (!touched.email) return "";
    if (!formData.email.trim()) return "Ton email est requis.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Email invalide.";
    return "";
  }, [formData.email, touched.email]);

  const messageError = useMemo(() => {
    if (!touched.message) return "";
    const m = formData.message.trim();
    if (!m) return "Ton message est requis.";
    if (m.length < 10) return "Ajoute un peu plus de détail (10 caractères min).";
    return "";
  }, [formData.message, touched.message]);

  const isValid = !emailError && !messageError && !!formData.email.trim() && !!formData.message.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ email: true, message: true });
    if (!isValid) return;

    const subject = `Contact - ${formData.reason}`;
    const body = `Motif: ${formData.reason}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    window.location.href = `mailto:project-online@contact.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="min-h-screen bg-red-600 px-5 py-16">
      <div className="mx-auto w-full max-w-3xl">
        {/* Hero */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Contact & Support
          </h1>
          <p className="mx-auto max-w-2xl text-base text-white/90">
            Une question, une demande de publicité, ou envie d’ajouter votre boutique ?
            Remplissez le formulaire ci-dessous.
          </p>
        </div>

        {/* Single Card */}
        <div className="relative overflow-hidden  bg-white p-7 shadow-2xl sm:p-9">
          {/* deco */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-100 opacity-60" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-emerald-100 opacity-40" />

          <div className="relative">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Formulaire rapide
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Envoi via votre application mail (message pré-rempli).
                </p>
              </div>

              {/* Email inline */}
              <div className="rounded-2xl border-2 border-gray-100 bg-gray-50 px-4 py-3">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500">
                  Adresse email
                </p>
                <a
                  href="mailto:project-online@contact.com"
                  className="mt-1 block break-all text-sm font-extrabold text-red-600 hover:text-red-700"
                >
                  project-online@contact.com
                </a>
              </div>
            </div>

            {/* Chips reason */}
            <div className="mb-6">
              <p className="mb-2 text-sm font-bold text-gray-700">Motif</p>
              <div className="flex flex-wrap gap-2">
                {REASONS.map((r) => {
                  const active = formData.reason === r;
                  return (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setFormData((s) => ({ ...s, reason: r }))}
                      className={[
                        "rounded-full px-4 py-2 text-sm font-bold transition",
                        "border-2",
                        active
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
                      ].join(" ")}
                    >
                      {r}
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <Field label="Votre email" error={emailError}>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <AtIcon />
                  </span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((s) => ({ ...s, email: e.target.value }))}
                    onBlur={() => setTouched((s) => ({ ...s, email: true }))}
                    className={[
                      "w-full rounded-2xl border-2 bg-white px-11 py-3 text-sm outline-none transition",
                      emailError
                        ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                        : "border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10",
                    ].join(" ")}
                    placeholder="ex: nom@email.com"
                    required
                  />
                </div>
              </Field>

              {/* Message */}
              <Field label="Message" error={messageError}>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((s) => ({ ...s, message: e.target.value }))}
                  onBlur={() => setTouched((s) => ({ ...s, message: true }))}
                  className={[
                    "w-full resize-none rounded-2xl border-2 bg-white px-4 py-3 text-sm outline-none transition",
                    messageError
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                      : "border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10",
                  ].join(" ")}
                  placeholder="Expliquez votre demande en 2-3 lignes…"
                  required
                />
                <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                  <span>Minimum conseillé : 10 caractères</span>
                  <span>{formData.message.trim().length}/500</span>
                </div>
              </Field>

              <button
                type="submit"
                disabled={!isValid}
                className={[
                  "flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-extrabold shadow-lg transition active:scale-[0.99]",
                  isValid
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed",
                ].join(" ")}
              >
                Envoyer via email
                <SendIcon />
              </button>

              <p className="text-center text-xs text-gray-500">
                Temps de réponse habituel : 24–48h (jours ouvrés)
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-gray-700">{label}</label>
      {children}
      {error ? <p className="mt-2 text-xs font-bold text-red-600">{error}</p> : null}
    </div>
  );
}

function AtIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16 8.5v5a2.5 2.5 0 1 0 2.5-2.5H12a3.5 3.5 0 1 0 3.5 3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 20a8 8 0 1 1 8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12l16-8-7 16-2-7-7-1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
