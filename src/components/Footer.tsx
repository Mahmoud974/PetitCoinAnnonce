"use client";
import { useEffect, useState } from "react";
import { Clock10, Mail, MapPinned, Phone, CircleArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-red-600 w-auto h-6"></div>
      <footer className="bg-black text-white py-10 px-6 lg:px-20 relative mt-auto">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 text-center lg:text-left max-w-7xl">
          {/* SERVICES */}
          <div>
            <h3 className="text-red-600 font-semibold mb-4">NOS SERVICES</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Installation de plomberie",
                "Réparation de fuites",
                "Chauffage central & chaudières",
                "Entretien et dépannage",
                "Installation de climatisation",
                "Pompes à chaleur",
                "Débouchage et assainissement",
                "Installation de sanitaires",
                "Ventilation & VMC",
                "Traitement de l’eau",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SECTEURS D’ACTIVITÉ */}
          <div>
            <h3 className="text-red-600 font-semibold mb-4">
              SECTEURS D’ACTIVITÉ
            </h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Résidentiel & Particuliers",
                "Commerces & Bureaux",
                "Industrie & Usines",
                "Hôpitaux & Cliniques",
                "Écoles & Universités",
                "Restaurants & Hôtels",
                "Bâtiments publics",
                "Centres commerciaux",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT & LIENS UTILES */}
          <div>
            <h3 className="text-red-600 font-semibold mb-4">CONTACT</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-center lg:justify-start items-center">
                <MapPinned className="mr-2" />
                <p>123 rue des Artisans, 26000 Valence</p>
              </li>
              <li className="flex justify-center lg:justify-start items-center">
                <Phone className="mr-2" />
                <p>01 23 45 67 89</p>
              </li>
              <li className="flex justify-center lg:justify-start items-center">
                <Mail className="mr-2" />
                <p>contact@svb-presta.fr</p>
              </li>
              <li className="flex justify-center lg:justify-start items-center">
                <Clock10 className="mr-2" />
                <p>Lundi - Vendredi : 8h - 18h</p>
              </li>
            </ul>

            <h3 className="text-red-600 font-semibold mt-6 mb-4">
              LIENS UTILES
            </h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Demande de devis",
                "Nos réalisations",
                "Certifications & Garanties",
                "FAQ - Questions fréquentes",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="text-center lg:text-left">
            <h3 className="text-red-600 font-semibold mb-4">
              RECEVEZ NOS CONSEILS
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Inscrivez-vous pour recevoir nos astuces, offres et nouveautés.
            </p>
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full p-2 mb-3 bg-gray-800 text-white border border-gray-600 focus:border-yellow-500 outline-none text-center lg:text-left"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-3 bg-gray-800 text-white border border-gray-600 focus:border-yellow-500 outline-none text-center lg:text-left"
            />
            <button className="w-full bg-red-600 text-black font-semibold py-2 hover:bg-yellow-600 transition">
              {`S'INSCRIRE`}
            </button>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-sm">
          &copy; 2025 SVB PRESTA - Plomberie, Chauffage & Climatisation. Tous
          droits réservés.
          <br />
          <Link
            href="/mentions-legals"
            className="text-red-600 hover:underline"
          >
            Mentions légales
          </Link>{" "}
          |
          <Link href="/vie-privee" className="text-red-600 hover:underline">
            {" "}
            Vie privée
          </Link>
        </div>

        {/* BOUTON RETOUR EN HAUT */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6  text-white p-3 rounded-full   hover:bg-[#0A2A3D] transition transform hover:scale-110"
          >
            <CircleArrowUp className="w-14 h-14 text-red-600" />
          </button>
        )}
      </footer>
    </>
  );
}
