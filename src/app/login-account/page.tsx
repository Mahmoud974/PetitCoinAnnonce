"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const COUNTRIES: Record<string, string[]> = {
  France: ["Paris", "Lyon", "Marseille"],
  Belgique: ["Bruxelles", "Liège", "Anvers"],
  Canada: ["Montréal", "Toronto", "Québec"],
};

const LANGUAGES = ["Français", "Anglais", "Espagnol", "Arabe"];

export default function Page() {
  const [form, setForm] = useState({
    name: "lenovoo",
    bio: "Dev & graphiste",
    country: "France",
    city: "Paris",
    language: "Français",
    darkMode: true,
    emailNotif: true,
    smsNotif: false,
    vacationMode: false, // Switch
  });

  const [passwords, setPasswords] = useState({
    current: "",
    next: "",
    confirm: "",
  });

  const [error, setError] = useState<string | null>(null);

  const cities = useMemo(() => COUNTRIES[form.country] ?? [], [form.country]);

  function setCountry(country: string) {
    setForm((f) => ({ ...f, country, city: (COUNTRIES[country] ?? [])[0] || "" }));
  }

  function handlePasswordUpdate() {
    if (!passwords.current) return setError("Ancien mot de passe requis");
    if (passwords.next.length < 8) return setError("Nouveau mot de passe trop court");
    if (passwords.next !== passwords.confirm) return setError("Les mots de passe ne correspondent pas");

    setError(null);
    alert("Mot de passe mis à jour ✅");
    console.log("Password payload:", { ...passwords, next: "***", confirm: "***" });
    setPasswords({ current: "", next: "", confirm: "" });
  }

  return (
    <main className="min-h-screen py-10 px-4 text-white bg-neutral-950">
      <div className="mx-auto w-full max-w-3xl space-y-8">
           {/* Mode Vacances en switch */}
           <div className="space-y-2">
          <h2 className="text-lg font-semibold">Mode vacances</h2>
          <div className="flex items-center justify-between">
            <span>{form.vacationMode ? "Activé" : "Désactivé"}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={form.vacationMode}
                onChange={(e) => setForm({ ...form, vacationMode: e.target.checked })}
                className="sr-only"
              />
              <div
                className={`w-11 h-6 rounded-full transition ${
                  form.vacationMode ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition ${
                    form.vacationMode ? "translate-x-5" : ""
                  }`}
                />
              </div>
            </label>
          </div>
        </div>
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 overflow-hidden rounded-full ring-1 ring-white/20">
                <Image src="/2.webp" alt="Avatar" width={84} height={84} className="h-full w-full object-cover" />
              </div>
              <Button className="shrink-0 mt-3">Changer la photo</Button>
            </div>
            <div className="flex-1">
              <input
                className="w-full rounded-md border p-2 bg-transparent border-white/30"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                aria-label="Nom"
              />
              <input
                className="mt-2 w-full rounded-md border p-2 bg-transparent border-white/30"
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
                aria-label="Bio"
              />
            </div>
          </div>
        </div>

        {/* Position */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Ma position</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1">
              <span className="text-sm text-white">Pays</span>
              <select
                className="w-full rounded-md border p-2 bg-transparent border-white/30"
                value={form.country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {Object.keys(COUNTRIES).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>

            <label className="space-y-1">
              <span className="text-sm text-white">Ville</span>
              <select
                className="w-full rounded-md border p-2 bg-transparent border-white/30"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              >
                {cities.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {/* Langue */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Langue</h2>
          <select
            className="w-full rounded-md border p-2 bg-transparent border-white/30 sm:w-1/2"
            value={form.language}
            onChange={(e) => setForm({ ...form, language: e.target.value })}
          >
            {LANGUAGES.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>

     

        

        {/* Notifications */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={form.emailNotif}
              onChange={(e) => setForm({ ...form, emailNotif: e.target.checked })}
            />
            <span>Email</span>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={form.smsNotif}
              onChange={(e) => setForm({ ...form, smsNotif: e.target.checked })}
            />
            <span>SMS</span>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={form.darkMode}
              onChange={(e) => setForm({ ...form, darkMode: e.target.checked })}
            />
            <span>Mode sombre</span>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <Button variant="secondary" type="button" onClick={() => location.reload()}>
            Annuler
          </Button>
          <Button
            type="button"
            onClick={() => {
              alert("Enregistré ✅");
              console.log("payload:", form);
            }}
          >
            Enregistrer
          </Button>
        </div>
      </div>
    </main>
  );
}
