"use client";

import React, { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    civilite: "",
    nomComplet: "Mahamoud Moussa",
    genre: "Homme",
    naissance: "1992-05-28",
    adresse: "",
    vacances: false,
    fbConnected: true,
    googleConnected: true,
  });

  const [pwd, setPwd] = useState({ current: "", next: "", confirm: "" });
  const [pwdError, setPwdError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitProfile = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profil enregistré ✅");
    console.log("Profil:", form);

    // Password change logic
    if (pwd.current || pwd.next || pwd.confirm) {
      if (!pwd.current) return setPwdError("Ancien mot de passe requis.");
      if (pwd.next.length < 8)
        return setPwdError(
          "Le nouveau mot de passe doit contenir au moins 8 caractères."
        );
      if (pwd.next === pwd.current)
        return setPwdError("Le nouveau mot de passe doit être différent de l'ancien.");
      if (pwd.next !== pwd.confirm)
        return setPwdError("La confirmation ne correspond pas.");
      setPwdError(null);

      alert("Mot de passe mis à jour ✅");
      console.log("Password payload:", { ...pwd, next: "***", confirm: "***" });
      setPwd({ current: "", next: "", confirm: "" });
    }
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible."
      )
    ) {
      console.log("Compte supprimé (action placeholder)");
      alert("Votre compte a été supprimé avec succès.");
    }
  };

  const inputBase =
    "w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500";
  const labelBase = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <main className="min-h-screen bg-white flex items-start justify-center px-4 py-10">
      <div className="w-full max-w-xl space-y-10">
        {/* PROFIL */}
        <form
          onSubmit={handleSubmitProfile}
          className="space-y-6 text-left bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
        >
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
            <p className="text-sm text-gray-500">*Champs obligatoires</p>
          </div>

          {/* Nom complet */}
          <div>
            <label className={labelBase}>Nom complet *</label>
            <input
              name="nomComplet"
              value={form.nomComplet}
              onChange={handleChange}
              className={inputBase}
              required
            />
          </div>

          {/* Genre */}
          <div>
            <label className={labelBase}>Tu es</label>
            <select
              name="genre"
              value={form.genre}
              onChange={handleChange}
              className={inputBase}
            >
              <option>Homme</option>
              <option>Femme</option>
              <option>Non spécifié</option>
            </select>
          </div>

          {/* Date de naissance */}
          <div>
            <label className={labelBase}>Date de naissance *</label>
            <input
              type="date"
              name="naissance"
              value={form.naissance}
              onChange={handleChange}
              className={inputBase}
              required
            />
          </div>

          {/* Adresse */}
          <div>
            <label className={labelBase}>Adresse *</label>
            <input
              name="adresse"
              value={form.adresse}
              onChange={handleChange}
              className={inputBase}
              required
              placeholder="Ex: 10 rue du... / Ville"
            />
          </div>

          <hr className="border-gray-200" />

          {/* Mode vacances */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Mode vacances
              </h3>
              <p className="text-xs text-gray-500">
                Désactive temporairement ton activité.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setForm((f) => ({ ...f, vacances: !f.vacances }))}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                form.vacances ? "bg-green-600" : "bg-gray-300"
              }`}
              aria-pressed={form.vacances}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                  form.vacances ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          <hr className="border-gray-200" />

          {/* Réseaux sociaux */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-800">Facebook</span>
              <button
                type="button"
                onClick={() =>
                  setForm((f) => ({ ...f, fbConnected: !f.fbConnected }))
                }
                className={`text-sm px-3 py-1.5 rounded-lg border transition ${
                  form.fbConnected
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {form.fbConnected ? "Ajouté" : "Ajouter"}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-800">Google</span>
              <button
                type="button"
                onClick={() =>
                  setForm((f) => ({ ...f, googleConnected: !f.googleConnected }))
                }
                className={`text-sm px-3 py-1.5 rounded-lg border transition ${
                  form.googleConnected
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {form.googleConnected ? "Ajouté" : "Ajouter"}
              </button>
            </div>
          </div>

          {/* MOT DE PASSE */}
          <hr className="border-gray-200" />
          <h2 className="text-xl font-bold text-gray-900">
            Changer le mot de passe
          </h2>

          <div>
            <label className={labelBase}>Ancien mot de passe *</label>
            <input
              type="password"
              autoComplete="current-password"
              value={pwd.current}
              onChange={(e) => setPwd({ ...pwd, current: e.target.value })}
              className={inputBase}
            />
          </div>

          <div>
            <label className={labelBase}>Nouveau mot de passe *</label>
            <input
              type="password"
              autoComplete="new-password"
              value={pwd.next}
              onChange={(e) => setPwd({ ...pwd, next: e.target.value })}
              className={inputBase}
            />
            <p className="text-xs text-gray-500 mt-1">Minimum 8 caractères.</p>
          </div>

          <div>
            <label className={labelBase}>Confirmer le nouveau mot de passe *</label>
            <input
              type="password"
              autoComplete="new-password"
              value={pwd.confirm}
              onChange={(e) => setPwd({ ...pwd, confirm: e.target.value })}
              className={inputBase}
            />
          </div>

          {pwdError && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {pwdError}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2.5 transition"
          >
            Enregistrer les modifications
          </button>
        </form>

        {/* SUPPRIMER LE COMPTE */}
        <section className="space-y-4 text-left bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Supprimer le compte</h2>
          <p className="text-sm text-gray-600">
            Supprimer votre compte effacera toutes vos données et annonces de façon
            permanente.
          </p>
          <button
            type="button"
            onClick={handleDeleteAccount}
            className="w-full rounded-lg bg-red-50 hover:bg-red-100 text-red-700 font-semibold px-4 py-2.5 border border-red-200 transition"
          >
            Supprimer mon compte
          </button>
        </section>
      </div>
    </main>
  );
}
