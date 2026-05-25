"use client";

import { useMemo, useState } from "react";

const REASONS = ["Question", "Publicité", "Ajouter ma boutique"] as const;

export default function Page() {
  const [formData, setFormData] = useState({
    reason: "Question" as (typeof REASONS)[number],
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({ email: false, message: false });

  const emailError = useMemo(() => {
    if (!touched.email) return "";
    if (!formData.email.trim()) return "Ton email est requis.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Email invalide.";
    return "";
  }, [formData.email, touched.email]);

  const messageError = useMemo(() => {
    if (!touched.message) return "";
    const m = formData.message.trim();
    if (!m) return "Ton message est requis.";
    if (m.length < 10)
      return "Ajoute un peu plus de détail (10 caractères min).";
    return "";
  }, [formData.message, touched.message]);

  const isValid =
    !emailError &&
    !messageError &&
    !!formData.email.trim() &&
    !!formData.message.trim();

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
    <main className="min-h-screen bg-[#f5f3ee] px-5 py-16 font-sans">
      <div className="mx-auto w-full max-w-2xl">

        {/* Hero */}
        <div className="mb-10">
        
          <h1
            className="text-4xl md:text-5xl font-bold text-[#1b3226] mt-3 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Contactez{" "}
            <span className="italic font-serif font-light">notre équipe</span>
          </h1>
          <p className="text-sm text-[#6b8a7a]">
            Une question, une demande de publicité, ou envie  {`d'ajouter`} votre
            boutique ? Remplissez le formulaire ci-dessous.
          </p>
        </div>

        {/* Motif */}
        <div className="mb-5 rounded-2xl border border-[#1a3327]/10 bg-white p-7">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[2px] text-[#6b8a7a]">
            Votre demande
          </p>

          <p className="mb-4 text-sm font-medium text-[#1a3327]">
            Motif <span className="text-[#a07c00]">*</span>
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {REASONS.map((r) => {
              const active = formData.reason === r;
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => setFormData((s) => ({ ...s, reason: r }))}
                  className={[
                    "rounded-xl border-[1.5px] px-4 py-3 text-left text-sm font-bold transition-all",
                    active
                      ? "border-[#1a3327] bg-[#1a3327] text-white"
                      : "border-[#1a3327]/15 bg-white text-[#1a3327] hover:border-[#1a3327]/40",
                  ].join(" ")}
                >
                  {r}
                </button>
              );
            })}
          </div>
        </div>

        {/* Form card */}
        <div className="rounded-2xl border border-[#1a3327]/10 bg-white p-7">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#6b8a7a]">
                Coordonnées
              </p>
              <p className="mt-1 text-xs text-[#6b8a7a]">
                Envoi via votre application mail (message pré-rempli).
              </p>
            </div>

            {/* Adresse directe */}
            <div className="rounded-xl border border-[#1a3327]/10 bg-[#f5f3ee] px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#6b8a7a]">
                Email direct
              </p>
              <a
                href="mailto:project-online@contact.com"
                className="mt-1 block text-sm font-bold text-[#1a3327] hover:underline"
              >
                project-online@contact.com
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <Field label="Votre email" error={emailError}>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#6b8a7a]">
                  <AtIcon />
                </span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((s) => ({ ...s, email: e.target.value }))
                  }
                  onBlur={() => setTouched((s) => ({ ...s, email: true }))}
                  className={[
                    "w-full rounded-xl border-[1.5px] bg-white py-3 pl-11 pr-4 text-sm text-[#1a3327] outline-none transition placeholder:text-[#b0c4bb]",
                    emailError
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                      : "border-[#1a3327]/15 focus:border-[#1a3327] focus:ring-4 focus:ring-[#1a3327]/8",
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
                onChange={(e) =>
                  setFormData((s) => ({ ...s, message: e.target.value }))
                }
                onBlur={() => setTouched((s) => ({ ...s, message: true }))}
                className={[
                  "w-full resize-none rounded-xl border-[1.5px] bg-white px-4 py-3 text-sm text-[#1a3327] outline-none transition placeholder:text-[#b0c4bb]",
                  messageError
                    ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                    : "border-[#1a3327]/15 focus:border-[#1a3327] focus:ring-4 focus:ring-[#1a3327]/8",
                ].join(" ")}
                placeholder="Expliquez votre demande en 2-3 lignes…"
                required
              />
              <div className="mt-2 flex items-center justify-between text-xs text-[#6b8a7a]">
                <span>Minimum conseillé : 10 caractères</span>
                <span>{formData.message.trim().length}/500</span>
              </div>
            </Field>

            <button
              type="submit"
              disabled={!isValid}
              className={[
                "flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-base font-extrabold transition active:scale-[0.99]",
                isValid
                  ? "bg-[#c8f135] text-[#1a3327] hover:brightness-95"
                  : "cursor-not-allowed bg-[#1a3327]/10 text-[#1a3327]/30",
              ].join(" ")}
            >
              Envoyer
              <SendIcon />
            </button>

            <p className="text-center text-xs text-[#6b8a7a]">
              Temps de réponse habituel : 24–48h (jours ouvrés)
            </p>
          </form>
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
      <label className="mb-2 block text-sm font-medium text-[#1a3327]">
        {label} <span className="text-[#a07c00]">*</span>
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-xs font-bold text-red-600">{error}</p>
      ) : null}
    </div>
  );
}

function AtIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12l16-8-7 16-2-7-7-1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}