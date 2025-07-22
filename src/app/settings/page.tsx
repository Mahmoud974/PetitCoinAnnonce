"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const menuItems = [
  { key: "profile", label: "Informations personnelles" },
  { key: "security", label: "Sécurité" },
  { key: "preferences", label: "Préférences" },
  { key: "notifications", label: "Notifications" },
  { key: "mes produits", label: "Mes produits" },
];

// Données pour les pays/villes
const countries = {
  France: ["Paris", "Lyon", "Marseille"],
  Belgique: ["Bruxelles", "Liège", "Anvers"],
  Canada: ["Montréal", "Toronto", "Québec"],
};

const languages = ["Français", "Anglais", "Espagnol", "Arabe"];

export default function Page() {
  const [selectedSection, setSelectedSection] = useState("profile");

  const [country, setCountry] = useState("France");
  const [city, setCity] = useState("Paris");
  const [language, setLanguage] = useState("Français");

  const renderContent = () => {
    switch (selectedSection) {
      case "profile":
        return (
          <section className="bg-white p-6 rounded-xl shadow space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Informations personnelles</h3>

            <div className="flex items-start gap-6 border-b pb-6">
              <div className="flex flex-col items-center">
              <Image
                src="/2.webp"
                width={96}
                height={96}
                alt="Photo de profil"
                className="rounded-full object-cover w-24 h-24"
              />
              <Button className="mt-4">Changer la photo</Button>
              </div>
              <div className="flex-1">
                <h4 className="text-gray-700 font-medium mb-2">Photo de profil</h4>
                <textarea
                  id="story"
                  name="story"
                  rows={4}
                  className="w-full border rounded-md p-2 text-gray-800 resize-none"
                >
It was a dark and stormy night...
                </textarea>
              </div>
            </div>

            <div className="border-b pb-6 space-y-4">
              <h4 className="text-gray-700 font-medium">Ma position</h4>

              <div className="grid grid-cols-1   gap-4">
                <div>
                  <label className="block text-gray-600 mb-1">Pays</label>
                  <select
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                      setCity(countries[e.target.value][0]);
                    }}
                    className="w-full border rounded-md p-2 text-gray-800"
                  >
                    {Object.keys(countries).map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-600 mb-1">Ville</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full border rounded-md p-2 text-gray-800"
                  >
                    {countries[country].map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-gray-700 font-medium mb-2">Langue</h4>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full md:w-1/2 border rounded-md p-2 text-gray-800"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
          </section>
        );

 

      case "security":
        return (
          <section className="bg-white p-6 rounded-xl shadow space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Sécurité</h3>
            <p className="text-gray-700">Mot de passe : ********</p>
            <button className="text-blue-600 hover:underline">Modifier le mot de passe</button>
          </section>
        );

      case "preferences":
        return (
          <section className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Préférences</h3>
            <p className="text-gray-700">Mode sombre : Activé</p>
          </section>
        );

      case "notifications":
        return (
          <section className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Notifications</h3>
            <p className="text-gray-700">Email : Activé</p>
            <p className="text-gray-700">SMS : Désactivé</p>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen  py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        <aside className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Paramètres</h2>
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li
                key={item.key}
                onClick={() => setSelectedSection(item.key)}
                className={`cursor-pointer px-4 py-2 rounded-md transition-colors duration-200 ${
                  selectedSection === item.key
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1">{renderContent()}</main>
      </div>
    </div>
  );
}
