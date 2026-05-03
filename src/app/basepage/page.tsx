'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight,  LayoutGrid, 
  MessageCircle, Minus, Plus, ChevronDown 
} from "lucide-react";

export default function KisiwaHomePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment puis-je créer un compte sur kisiwa.com ?",
      answer: "Cliquez sur l'icône 'Compte' en haut à droite, puis suivez les instructions. Vous pouvez vous inscrire avec un email ou un numéro de téléphone en quelques secondes."
    },
    {
      question: "Comment puis-je augmenter la visibilité de mes produits ?",
      answer: "Utilisez nos options 'Mise en avant' lors du dépôt pour que votre annonce apparaisse en priorité dans les résultats de recherche et touche plus d'acheteurs."
    },
    {
      question: "Est-ce que kisiwa.com est sécurisé ?",
      answer: "Absolument. Nous modérons manuellement chaque annonce publiée et nous sécurisons vos échanges via notre système de messagerie interne protégé."
    },
    {
      question: "Comment puis-je contacter le service client ?",
      answer: "Notre équipe est à votre écoute. Vous pouvez nous contacter via le formulaire de contact du site ou directement par WhatsApp pour une réponse rapide 7j/7."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      
      {/* 1. HERO SECTION PREMIUM */}
      <section className="relative bg-[#1b3226] text-white px-6 md:px-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 z-10">
            <h1 className="text-6xl md:text-8xl font-serif leading-none" style={{ fontFamily: "'Syne', sans-serif" }}>
              Tout se trouve 
              <span className="italic font-serif font-light text-[#D4E84A]"> sur l{`'`}île </span>   
              et au-delà.
            </h1>
            <p className="text-gray-300 max-w-lg leading-relaxed text-xl font-light ">
              La plateforme de confiance pour la communauté comorienne. 
              Vendez aux Comores, achetez depuis la France, restez connectés.
            </p>
            <Link href="/how-it-works" className="inline-block">
              <button className="text-[#D4E84A] font-medium flex items-center gap-3 hover:underline group text-lg">
                Comment ça marche ? 
                <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Link>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-tl-[150px] rounded-br-[60px] overflow-hidden border-[12px] border-white/5 shadow-2xl aspect-[4/5] md:aspect-square">
              <Image src="/images/hero-kisiwa.jpg" alt="Kisiwa Life" fill className="object-cover" priority />
            </div>
          </div>
        </div>
        {/* Transition SVG Courbe */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="#FDFBF7"></path>
          </svg>
        </div>
      </section>

      {/* 2. SECTION PRÉSENTATION INNOVANTE (COLLAGE) */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative mb-24">
            <span className="text-[#1b3226]/40 font-bold tracking-[0.4em] uppercase text-xs text-center mx-auto">Innovation & Proximité</span>
            <h2 className="text-5xl md:text-7xl font-bold text-center mx-auto text-[#1b3226] mt-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              La plateforme <br /> <span className="italic font-serif font-light">qu{`'`}il vous faut.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <div className="relative h-80 rounded-[2rem] overflow-hidden shadow-2xl rotate-[-3deg] hover:rotate-0 transition-all duration-500">
                    <Image src="/images/varied-products.jpg" alt="Produits" fill className="object-cover" />
                  </div>
                  <div className="bg-[#1b3226] p-10 rounded-[2rem] text-[#D4E84A] shadow-xl rotate-[2deg]">
                     <LayoutGrid size={32} className="mb-4" />
                     <p className="font-bold text-2xl leading-tight">Sections spécialisées pour tous vos besoins.</p>
                  </div>
                </div>
                <div className="space-y-6">
                   <div className="bg-[#D4E84A] p-10 rounded-[2rem] text-[#1b3226] shadow-xl">
                     <MessageCircle size={32} className="mb-4" />
                     <p className="font-bold text-2xl leading-tight tracking-tighter">Échanges directs et sécurisés.</p>
                  </div>
                  <div className="relative h-96 rounded-[2rem] overflow-hidden shadow-2xl rotate-[3deg] hover:rotate-0 transition-all duration-500">
                    <Image src="/images/direct-exchange.jpg" alt="Vente" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-12 order-1 lg:order-2">
              {[
                { title: "Découverte variée", text: "Parcourez des milliers d'annonces : emploi, logement, véhicules ou objets du quotidien.", num: "01" },
                { title: "Direct & Humain", text: "Discutez directement avec les vendeurs et organisez vos rencontres en toute simplicité.", num: "02" },
                { title: "Spécial Diaspora", text: "Un pont unique entre la France et les Comores pour vos envois de fret et investissements.", num: "03" }
              ].map((item, i) => (
                <div key={i} className="group">
                  <h4 className="text-2xl font-bold text-[#1b3226] flex items-center gap-5 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                    <span className="w-12 h-12 rounded-full bg-[#1b3226] text-[#D4E84A]  flex items-center justify-center font-bold">{item.num}</span>
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-lg leading-relaxed border-l-2 border-gray-100 pl-8  text-left group-hover:border-[#D4E84A] transition-colors">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* SECTION AVIS UTILISATEURS */}
<section className="py-32 px-6 bg-[#1b3226] relative overflow-hidden">
  {/* Cercles décoratifs en arrière-plan */}
  <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none" />
  <div className="absolute bottom-[-120px] left-[-60px] w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />

  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-20">
      <span className="text-[#D4E84A]/60 font-bold tracking-[0.4em] uppercase text-xs">
        Témoignages
      </span>
      <h2
        className="text-4xl md:text-6xl font-bold text-white mt-4"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        Ce qu{`'`}ils{" "}
        <span className="italic font-serif font-light text-[#D4E84A]">
          en disent.
        </span>
      </h2>
    </div>

    {/* Grille d'avis */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          name: "Fatima A.",
          location: "Moroni, Grande Comore",
          avatar: "FA",
          rating: 5,
          text: "J'ai vendu mon scooter en moins de 48h ! La plateforme est simple, les acheteurs sérieux. Je ne passe plus par autre chose.",
          tag: "Vente rapide",
        },
        {
          name: "Youssouf M.",
          location: "Paris, France",
          avatar: "YM",
          rating: 5,
          text: "Enfin un site qui comprend nos besoins. J'envoie du fret depuis la France régulièrement, et kisiwa m'a mis en contact avec le bon prestataire en quelques minutes.",
          tag: "Diaspora",
          featured: true,
        },
        {
          name: "Raïssa H.",
          location: "Marseille, France",
          avatar: "RH",
          rating: 5,
          text: "Le système de messagerie est top, on se sent protégé. J'ai trouvé un logement pour mes vacances aux Comores sans stress.",
          tag: "Immobilier",
        },
        {
          name: "Ibrahim S.",
          location: "Mutsamudu, Anjouan",
          avatar: "IS",
          rating: 5,
          text: "Les annonces d'emploi sont vraiment localisées. J'ai décroché un entretien en une semaine. Très bonne expérience.",
          tag: "Emploi",
        },
        {
          name: "Nassur D.",
          location: "Lyon, France",
          avatar: "ND",
          rating: 5,
          text: "Interface propre, rapide. On sent que c'est fait pour nous. J'ai recommandé à toute ma famille restée aux Comores.",
          tag: "Communauté",
        },
        {
          name: "Zalia O.",
          location: "Fomboni, Mohéli",
          avatar: "ZO",
          rating: 4,
          text: "Très pratique pour acheter et vendre localement. J'espère voir encore plus de catégories à l'avenir, mais déjà très satisfaite !",
          tag: "Achats",
        },
      ].map((review, i) => (
        <div
          key={i}
          className={`relative rounded-[2rem] p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 ${
            review.featured
              ? "bg-[#D4E84A] text-[#1b3226]"
              : "bg-white/5 border border-white/10 text-white"
          }`}
        >
          {/* Tag */}
          <span
            className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit ${
              review.featured
                ? "bg-[#1b3226]/15 text-[#1b3226]"
                : "bg-white/10 text-[#D4E84A]"
            }`}
          >
            {review.tag}
          </span>

          {/* Étoiles */}
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, s) => (
              <svg
                key={s}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill={s < review.rating ? (review.featured ? "#1b3226" : "#D4E84A") : "transparent"}
                stroke={s < review.rating ? (review.featured ? "#1b3226" : "#D4E84A") : (review.featured ? "#1b3226/40" : "rgba(255,255,255,0.2)")}
                strokeWidth="1.5"
              >
                <polygon points="8,1 10,6 15,6 11,9.5 12.5,15 8,12 3.5,15 5,9.5 1,6 6,6" />
              </svg>
            ))}
          </div>

          {/* Citation */}
          <p
            className={`text-lg leading-relaxed flex-1 ${
              review.featured ? "text-[#1b3226]" : "text-white/80"
            }`}
          >
            "{review.text}"
          </p>

          {/* Auteur */}
          <div className="flex items-center gap-4 pt-2 border-t border-white/10">
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                review.featured
                  ? "bg-[#1b3226] text-[#D4E84A]"
                  : "bg-[#D4E84A]/20 text-[#D4E84A]"
              }`}
            >
              {review.avatar}
            </div>
            <div>
              <p className={`font-bold text-sm ${review.featured ? "text-[#1b3226]" : "text-white"}`}>
                {review.name}
              </p>
              <p className={`text-xs ${review.featured ? "text-[#1b3226]/60" : "text-white/40"}`}>
                {review.location}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Score global */}
    <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
      <div className="flex items-baseline gap-3">
        <span className="text-6xl font-bold text-[#D4E84A]" style={{ fontFamily: "'Syne', sans-serif" }}>4.9</span>
        <span className="text-white/40 text-lg">/5</span>
      </div>
      <div className="hidden md:block w-px h-12 bg-white/10" />
      <div>
        <p className="text-white font-medium text-lg">Note moyenne</p>
        <p className="text-white/40 text-sm mt-1">Basée sur +2 400 avis vérifiés</p>
      </div>
    </div>
  </div>
</section>


      {/* 3. SECTION FAQ SIMPLE & MODERNE */}
      <section className="  text-[#1b3226] py-32 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Questions fréquentes
            </h2>
            <div className="w-20 h-1 bg-[#D4E84A] mx-auto opacity-80"></div>
          </div>

          <div className="divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between w-full py-6 text-left group"
                >
                  <span className={`text-xl md:text-2xl font-medium transition-all ${openIndex === index ? 'text-[#D4E84A] pl-2' : 'text-[#1b3226] group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-[#D4E84A]' : 'text-white/20'}`}>
                    <ChevronDown size={28} strokeWidth={1.5} />
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[#1b3226]  text-lg leading-relaxed pb-8 pl-2 max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] text-center">
             <p className="text-[#1b3226] ">
               Vous avez une autre question ? 
               <Link href="/contact" className="text-[#D4E84A] font-bold ml-2 hover:underline">
                 Contactez notre support →
               </Link>
             </p>
          </div>
        </div>
      </section>

    
      
    </div>
  );
}