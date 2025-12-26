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
      {/* petite barre colorée comme souvent en haut du footer */}
      <div className="h-2 w-full bg-red-600 mt-12" />

      <footer className="bg-[#2f343b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          {/* GRID */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* COL 1 : Logo + stores */}
            <div className="space-y-5">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                  {/* Remplace par ton logo */}
                  <span className="text-sm font-bold">SVB</span>
                </div>

                <div className="leading-tight">
                  <p className="text-xl font-semibold tracking-tight">
                    SVB<span className="text-white/70">PRESTA</span>
                  </p>
                </div>
              </div>

              <p className="text-center text-sm text-white/70 md:text-left">
                Téléchargez gratuitement l’application SVB PRESTA disponible sur
                Android et iOS.
              </p>

              <div className="flex flex-col items-center gap-3 md:items-start">
                {/* Bouton App Store (placeholder) */}
                <a
                  href="#"
                  className="inline-flex w-[220px] items-center justify-center rounded-xl border border-white/15 bg-black/35 px-4 py-3 text-sm font-medium hover:bg-black/45 transition"
                >
                  Télécharger sur l’App Store
                </a>

                {/* Bouton Google Play (placeholder) */}
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
                  <Link className="hover:text-white transition" href="/a-propos">
                    À propos de nous
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white transition"
                    href="/conditions"
                  >
                    Conditions d’utilisation
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white transition"
                    href="/vie-privee"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white transition"
                    href="/contact"
                  >
                    Nous contacter
                  </Link>
                </li>
              </ul>
            </div>

            {/* COL 3 : Ressources */}
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-lg font-semibold tracking-wide text-white/80">
                RESSOURCES
              </h3>

              <ul className="space-y-3 text-sm text-white/60">
                <li>
                  <Link className="hover:text-white transition" href="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition" href="/faq">
                    Questions-réponses
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white transition"
                    href="/comment-deposer-une-annonce"
                  >
                    Comment déposer une annonce ?
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white transition"
                    href="/comment-contacter-un-vendeur"
                  >
                    Comment contacter un vendeur ?
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white transition"
                    href="/centre-aide"
                  >
                    Centre d’aide
                  </Link>
                </li>
              </ul>
            </div>

            {/* COL 4 : Newsletter */}
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-lg font-semibold tracking-wide text-white/80">
                NEWSLETTER
              </h3>

              <p className="mb-5 text-sm text-white/60">
                Restez informé des actualités et des meilleures annonces en vous
                inscrivant à la newsletter !
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
                    className="h-12 shrink-0 rounded-xl bg-orange-500 px-6 text-sm font-semibold text-white hover:bg-orange-600 transition"
                  >
                    S’abonner
                  </button>
                </div>

                <p className="text-xs text-white/45">
                  Pas de spam. Vous pouvez vous désinscrire à tout moment.
                </p>
              </form>
            </div>
          </div>

          {/* bottom bar */}
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
            © 2025 SVB PRESTA — Tous droits réservés.{" "}
            <Link className="text-white/70 hover:text-white" href="/mentions-legals">
              Mentions légales
            </Link>{" "}
            ·{" "}
            <Link className="text-white/70 hover:text-white" href="/vie-privee">
              Vie privée
            </Link>
          </div>
        </div>

        {/* bouton retour en haut */}
        {showButton && (
          <button
            onClick={scrollToTop}
            aria-label="Retour en haut"
            className="fixed bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-black/40 backdrop-blur border border-white/10 hover:bg-black/55 transition"
          >
            <CircleArrowUp className="h-6 w-6 text-white" />
          </button>
        )}
      </footer>
    </>
  );
}
