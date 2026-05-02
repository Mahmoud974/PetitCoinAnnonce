"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CircleArrowUp } from "lucide-react";

const NAV_BG = "#1b3226";
const ACCENT = "#D4E84A";

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
      {/* Bande accent — même couleur que la navbar */}
      <div className="no-print h-1 w-full" style={{ background: ACCENT }} />

      <footer style={{ background: NAV_BG, color: "white", fontFamily: "'DM Sans', sans-serif" }}>
        <div className="mx-auto px-6 py-12 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* COL 1 : Marque */}
            <div className="space-y-5">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <span
                  className="text-3xl font-extrabold text-white"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.5px" }}
                >
                  kisiwa<span style={{ color: ACCENT }}>.</span>
                </span>
              </div>

              <p className="text-center text-sm md:text-left" style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.7" }}>
                Achetez et vendez facilement entre les îles de l{`'`}Océan Indien.
                Application mobile bientôt disponible sur iOS et Android.
              </p>

              <div className="flex flex-col items-center gap-3 md:items-start">
                <a
                  href="#"
                  className="inline-flex w-[220px] items-center justify-center text-sm font-medium transition"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                    padding: "10px 16px",
                    color: "rgba(255,255,255,0.85)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                >
                  Télécharger sur l{`'`}App Store
                </a>
                <a
                  href="#"
                  className="inline-flex w-[220px] items-center justify-center text-sm font-medium transition"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                    padding: "10px 16px",
                    color: "rgba(255,255,255,0.85)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                >
                  Disponible sur Google Play
                </a>
              </div>
            </div>

            {/* COL 2 : Informations */}
            <div className="text-center md:text-left">
              <h3
                className="mb-4 text-xs font-bold tracking-widest"
                style={{ color: ACCENT, fontFamily: "'Syne', sans-serif" }}
              >
                INFORMATIONS
              </h3>
              <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                {[
                  { href: "/a-propos",        label: "À propos de nous"            },
                  { href: "/applications-mobile", label: "Applications"            },
                  { href: "/conditions",      label: "Conditions d'utilisation"    },
                  { href: "/vie-privee",      label: "Politique de confidentialité"},
                  { href: "/contact-support", label: "Nous contacter"              },
                  { href: "/mentions-legales",label: "Mentions légales"            },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="transition-colors hover:text-white"
                      style={{ color: "inherit" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 3 : Sécurité */}
            <div className="text-center md:text-left">
              <h3
                className="mb-4 text-xs font-bold tracking-widest"
                style={{ color: ACCENT, fontFamily: "'Syne', sans-serif" }}
              >
                SÉCURITÉ
              </h3>
              <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                {[
                  { href: "/faq",                    label: "Questions fréquentes"  },
                  { href: "/centre-aide",             label: "Centre d'aide"         },
                  { href: "/conseils-anti-arnaques",  label: "Conseils anti-arnaques"},
                  { href: "/regles-de-publication",   label: "Règles de publication" },
                  { href: "/signaler-une-annonce",    label: "Signaler une annonce"  },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="transition-colors hover:text-white"
                      style={{ color: "inherit" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 4 : Newsletter */}
            <div className="text-center md:text-left">
              <h3
                className="mb-4 text-xs font-bold tracking-widest"
                style={{ color: ACCENT, fontFamily: "'Syne', sans-serif" }}
              >
                NEWSLETTER
              </h3>
              <p className="mb-5 text-sm" style={{ color: "rgba(255,255,255,0.55)", lineHeight: "1.6" }}>
                1 email par semaine max : nouveautés, actus et meilleures annonces.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="mx-auto flex max-w-md flex-col gap-3 md:mx-0">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="h-11 w-full px-4 text-sm text-white outline-none placeholder:text-white/40"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "6px",
                    }}
                    onFocus={e  => (e.currentTarget.style.borderColor = ACCENT)}
                    onBlur={e   => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                  <button
                    type="submit"
                    className="h-11 shrink-0 px-5 text-sm font-bold transition"
                    style={{
                      background: ACCENT,
                      color: NAV_BG,
                      borderRadius: "6px",
                      fontFamily: "'Syne', sans-serif",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >
                    S{`'`}abonner
                  </button>
                </div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Pas de spam. Désinscription à tout moment.{" "}
                  <Link href="/vie-privee" className="underline hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Politique de confidentialité
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-10 pt-6 text-center text-sm"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            © 2025 kisiwa.annonces — Tous droits réservés.{" "}
            {[
              { href: "/mentions-legales", label: "Mentions légales" },
              { href: "/vie-privee",       label: "Vie privée"       },
              { href: "/contact-support",  label: "Contact"          },
            ].map(({ href, label }, i) => (
              <span key={href}>
                {i > 0 && " · "}
                <Link
                  href={href}
                  className="transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {label}
                </Link>
              </span>
            ))}
          </div>
        </div>

        {/* Scroll to top */}
        {showButton && (
          <button
            onClick={scrollToTop}
            aria-label="Retour en haut"
            className="fixed bottom-6 right-6 grid h-12 w-12 place-items-center transition"
            style={{
              background: ACCENT,
              borderRadius: "8px",
              color: NAV_BG,
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <CircleArrowUp className="h-5 w-5" />
          </button>
        )}
      </footer>
    </>
  );
}