"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CircleArrowUp } from "lucide-react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="no-print h-2 w-full bg-red-600" />

      <footer className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* COL 1 : Marque */}
            <div className="space-y-5">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <div className="place-items-center">
                  <span className="text-3xl font-bold">Project-online</span>
                </div>

                <div className="leading-tight">
                  <p className="text-xl font-semibold tracking-tight">
                    <span className="text-white/70"> </span>
                  </p>
                </div>
              </div>

              {/* ✅ Texte plus cohérent si tes boutons sont placeholders */}
              <p className="text-center text-sm text-white/70 md:text-left">
                Achetez et vendez facilement près de chez vous. Application mobile :
                bientôt disponible sur iOS et Android.
              </p>

              <div className="flex flex-col items-center gap-3 md:items-start">
                <a
                  href="#"
                  className="inline-flex w-[220px] items-center justify-center rounded-xl border border-white/15 bg-black/35 px-4 py-3 text-sm font-medium hover:bg-black/45 transition"
                >
                  Télécharger sur l’App Store
                </a>

                <a
                  href="#"
                  className="inline-flex w-[220px] items-center justify-center rounded-xl border border-white/15 bg-black/35 px-4 py-3 text-sm font-medium hover:bg-black/45 transition"
                >
                  Disponible sur Google Play
                </a>
              </div>
            </div>

            {/* COL 2 : Informations */}
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-lg font-semibold tracking-wide text-white/80">
                INFORMATIONS
              </h3>

              <ul className="space-y-3 text-sm text-white/60">
                <li>
                  <Link className="cursor-pointer hover:text-white transition" href="/a-propos">
                    À propos de nous
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer hover:text-white transition" href="/applications-mobile">
                    Applications
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer hover:text-white transition" href="/conditions">
                    Conditions d’utilisation
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer hover:text-white transition" href="/vie-privee">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer hover:text-white transition" href="/contact-support">
                    Nous contacter
                  </Link>
                </li>

                {/* ✅ Ajout important */}
                <li>
                  <Link className="cursor-pointer hover:text-white transition" href="/mentions-legales">
                    Mentions légales
                  </Link>
                </li>
              </ul>
            </div>

            {/* COL 3 : Sécurité (plus pertinent pour une marketplace) */}
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-lg font-semibold tracking-wide text-white/80">
                SÉCURITÉ
              </h3>

              <ul className="space-y-3 text-sm text-white/60">
                <li>
                  <Link className="hover:text-white transition" href="/faq">
                    Questions fréquentes
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition" href="/centre-aide">
                    Centre d’aide
                  </Link>
                </li>

                {/* ✅ Ajouts “confiance” */}
                <li>
                  <Link className="hover:text-white transition" href="/conseils-anti-arnaques">
                    Conseils anti-arnaques
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition" href="/regles-de-publication">
                    Règles de publication
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition" href="/signaler-une-annonce">
                    Signaler une annonce
                  </Link>
                </li>
              </ul>
            </div>

            {/* COL 4 : Newsletter */}
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-lg font-semibold tracking-wide text-white/80">
                NEWSLETTER
              </h3>

              {/* ✅ Promesse plus claire */}
              <p className="mb-5 text-sm text-white/60">
                1 email par semaine max : nouveautés, actus et meilleures annonces.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mx-auto flex max-w-md flex-col gap-3 md:mx-0"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="h-12 w-full rounded-xl border border-white/15 bg-[#3a4048] px-4 text-sm text-white placeholder:text-white/45 outline-none focus:border-orange-400"
                  />
                  <button
                    type="submit"
                    className="h-12 shrink-0 rounded-xl bg-red-700 px-6 text-sm font-semibold text-white hover:bg-orange-600 transition"
                  >
                    S’abonner
                  </button>
                </div>

                {/* ✅ Mini mention “privacy” */}
                <p className="text-xs text-white/45">
                  Pas de spam. Désinscription à tout moment. Voir notre{" "}
                  <Link className="underline hover:text-white" href="/vie-privee">
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>

          {/* bottom bar */}
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
            © 2025 Project-online — Tous droits réservés.{" "}
            <Link className="text-white/70 hover:text-white" href="/mentions-legales">
              Mentions légales
            </Link>{" "}
            ·{" "}
            <Link className="text-white/70 hover:text-white" href="/vie-privee">
              Vie privée
            </Link>{" "}
            ·{" "}
            <Link className="text-white/70 hover:text-white" href="/contact-support">
              Contact
            </Link>
          </div>
        </div>

        {showButton && (
          <button
            onClick={scrollToTop}
            aria-label="Retour en haut"
            className="fixed bottom-6 right-6 grid h-12 w-12 place-items-center bg-black/40 backdrop-blur border border-white/10 hover:bg-black/55 transition"
          >
            <CircleArrowUp className="h-6 w-6 text-white" />
          </button>
        )}
      </footer>
    </>
  );
}
