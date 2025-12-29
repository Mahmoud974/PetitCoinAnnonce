"use client";

import { useState } from "react";

const FAQ = [
    {
      q: "Comment publier une annonce ?",
      a: "Cliquez sur « Déposer une annonce », choisissez une catégorie, ajoutez un titre, une description, le prix, la ville et des photos. Puis validez la publication.",
    },
    {
      q: "Est-ce que la publication est gratuite ?",
      a: "Oui, la publication est gratuite. Certaines options (mise en avant) peuvent être proposées plus tard.",
    },
    {
      q: "Comment contacter un vendeur ?",
      a: "Ouvrez une annonce puis cliquez sur « Contacter ». Vous pourrez envoyer un message ou utiliser les informations de contact si elles sont affichées.",
    },
    {
      q: "Puis-je modifier ou supprimer mon annonce ?",
      a: "Oui. Depuis votre compte (ou votre espace annonces), vous pouvez modifier le texte, les photos, le prix ou supprimer l’annonce à tout moment.",
    },
    {
      q: "Que faire si je vois une annonce suspecte ?",
      a: "Utilisez le bouton « Signaler » sur l’annonce (arnaque, contenu interdit, doublon…). Notre équipe pourra la vérifier.",
    },
    {
      q: "Quels types d’annonces sont interdits ?",
      a: "Tout contenu illégal, dangereux, trompeur, ou non conforme aux règles du site. Exemples : arnaques, contrefaçons, contenus haineux, objets interdits.",
    },
    {
      q: "Conseils pour éviter les arnaques ?",
      a: "Ne payez jamais à l’avance sans garantie, privilégiez la remise en main propre, vérifiez le produit, et méfiez-vous des prix trop bas.",
    },
    {
      q: "Comment améliorer la visibilité de mon annonce ?",
      a: "Ajoutez plusieurs photos nettes, un titre précis, une description complète, un prix cohérent et une localisation exacte. Mettez à jour l’annonce si besoin.",
    },
    {
      q: "Pourquoi mon annonce n’apparaît pas ?",
      a: "Elle peut être en cours de vérification, incomplète, ou retirée si elle ne respecte pas les règles. Essayez aussi de rafraîchir la page ou de vérifier la catégorie.",
    },
    {
      q: "Comment vous contacter ?",
      a: "Rendez-vous sur la page Contact et envoyez-nous votre demande (problème technique, demande pro, suggestion…).",
    },
  ];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-red-600 px-5 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-extrabold text-white">FAQ</h1>
          <p className="mt-2 text-white/90">
            Retrouvez ici les réponses aux questions les plus fréquentes.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {FAQ.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-white/30 bg-black/40 backdrop-blur-sm"
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-bold text-white">
                    {item.q}
                  </span>

                  <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full border border-white text-white">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="border-t border-white/20 px-6 py-5">
                    <p className="text-sm leading-relaxed text-white/90">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
