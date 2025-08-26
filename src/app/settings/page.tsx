"use client";

import React, { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    civilite: "",
    nomComplet: "Mahamoud Moussa",
    genre: "Homme", // "Femme" | "Non spécifié"
    naissance: "1992-05-28",
    adresse: "",
    vacances: false,
    fbConnected: true,
    googleConnected: true,
  });

  const [pwd, setPwd] = useState({ current: "", next: "", confirm: "" });
  const [pwdError, setPwdError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitProfile = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profil enregistré ✅");
    console.log("Profil:", form);

    // Password change logic
    if (pwd.current || pwd.next || pwd.confirm) {
      if (!pwd.current) return setPwdError("Ancien mot de passe requis.");
      if (pwd.next.length < 8) return setPwdError("Le nouveau mot de passe doit contenir au moins 8 caractères.");
      if (pwd.next === pwd.current) return setPwdError("Le nouveau mot de passe doit être différent de l'ancien.");
      if (pwd.next !== pwd.confirm) return setPwdError("La confirmation ne correspond pas.");
      setPwdError(null);

      alert("Mot de passe mis à jour ✅");
      console.log("Password payload:", { ...pwd, next: "***", confirm: "***" });
      setPwd({ current: "", next: "", confirm: "" });
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")) {
      console.log("Compte supprimé (action placeholder)");
      alert("Votre compte a été supprimé avec succès.");
      // TODO: Implement actual API call to delete the account
      // Redirect to home or login page after deletion
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-950 text-white">
      <div className="w-full max-w-xl p-6 space-y-10">
        {/* PROFIL */}
        <form onSubmit={handleSubmitProfile} className="space-y-6 text-left">
          <h1 className="text-2xl font-bold">Paramètres</h1>
          <p className="text-sm text-gray-400">*Champs obligatoires</p>

          {/* Nom complet */}
          <div>
            <label className="block text-sm mb-1">Nom complet *</label>
            <input
              name="nomComplet"
              value={form.nomComplet}
              onChange={handleChange}
              className="w-full p-2 rounded bg-neutral-800"
              required
            />
          </div>

          {/* Genre */}
          <div>
            <label className="block text-sm mb-1">Tu es</label>
            <select
              name="genre"
              value={form.genre}
              onChange={handleChange}
              className="w-full p-2 rounded bg-neutral-800"
            >
              <option>Homme</option>
              <option>Femme</option>
              <option>Non spécifié</option>
            </select>
          </div>

          {/* Date de naissance */}
          <div>
            <label className="block text-sm mb-1">Date de naissance *</label>
            <input
              type="date"
              name="naissance"
              value={form.naissance}
              onChange={handleChange}
              className="w-full p-2 rounded bg-neutral-800"
              required
            />
          </div>

          {/* Adresse */}
          <div>
            <label className="block text-sm mb-1">Adresse *</label>
            <input
              name="adresse"
              value={form.adresse}
              onChange={handleChange}
              className="w-full p-2 rounded bg-neutral-800"
              required
            />
          </div>

          <hr className="border-white/10" />

          {/* Mode vacances */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium">Mode vacances</h3>
              <p className="text-xs text-gray-400">Désactive temporairement ton activité.</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={form.vacances}
                onChange={(e) => setForm({ ...form, vacances: e.target.checked })}
              />
              {/* simple switch minimal */}
              <span
                className={`h-6 w-11 rounded-full relative transition ${
                  form.vacances ? "bg-green-600" : "bg-neutral-700"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                    form.vacances ? "left-5" : "left-0.5"
                  }`}
                />
              </span>
            </label>
          </div>

          <hr className="border-white/10" />

          {/* Réseaux sociaux */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Facebook</span>
              <button
                type="button"
                onClick={() => setForm((f) => ({ ...f, fbConnected: !f.fbConnected }))}
                className="text-sm px-3 py-1 rounded border border-white/20"
              >
                {form.fbConnected ? "Ajouté" : "Ajouter"}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span>Google</span>
              <button
                type="button"
                onClick={() => setForm((f) => ({ ...f, googleConnected: !f.googleConnected }))}
                className="text-sm px-3 py-1 rounded border border-white/20"
              >
                {form.googleConnected ? "Ajouté" : "Ajouter"}
              </button>
            </div>
          </div>

          {/* MOT DE PASSE */}
          <hr className="border-white/10" />
          <h2 className="text-xl font-semibold">Changer le mot de passe</h2>

          <div>
            <label className="block text-sm mb-1">Ancien mot de passe *</label>
            <input
              type="password"
              autoComplete="current-password"
              value={pwd.current}
              onChange={(e) => setPwd({ ...pwd, current: e.target.value })}
              className="w-full p-2 rounded bg-neutral-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Nouveau mot de passe *</label>
            <input
              type="password"
              autoComplete="new-password"
              value={pwd.next}
              onChange={(e) => setPwd({ ...pwd, next: e.target.value })}
              className="w-full p-2 rounded bg-neutral-800"
              required
            />
            <p className="text-xs text-gray-400 mt-1">Minimum 8 caractères.</p>
          </div>

          <div>
            <label className="block text-sm mb-1">Confirmer le nouveau mot de passe *</label>
            <input
              type="password"
              autoComplete="new-password"
              value={pwd.confirm}
              onChange={(e) => setPwd({ ...pwd, confirm: e.target.value })}
              className="w-full p-2 rounded bg-neutral-800"
              required
            />
          </div>

          {pwdError && <p className="text-sm text-red-400">{pwdError}</p>}

          <button type="submit" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded w-full">
            Enregistrer les modifications
          </button>
        </form>

        {/* SUPPRIMER LE COMPTE */}
        <section className="space-y-6 text-left">
          <h2 className="text-xl font-semibold">Supprimer le compte</h2>
          <p className="text-sm text-gray-400">Supprimer votre compte effacera toutes vos données et annonces de façon permanente.</p>
          <button
            type="button"
            onClick={handleDeleteAccount}
            className="bg-red-800 hover:bg-red-900 px-4 py-2 rounded w-full"
          >
            Supprimer mon compte
          </button>
        </section>
      </div>
    </main>
  );
}
