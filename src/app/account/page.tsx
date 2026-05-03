'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter()

  return (
    <div className="flex h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Colonne formulaire ── */}
      <div className="w-full lg:w-1/2 bg-[#FDFBF7] flex flex-col justify-center px-8 md:px-16 xl:px-24 relative">

        {/* Retour */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-8 left-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1b3226]/40 hover:text-[#1b3226] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </button>

        {/* Logo */}
        <div className="mb-10">
          <span
            className="text-2xl font-extrabold text-[#1b3226]"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.5px" }}
          >
            kisiwa<span className="text-[#D4E84A]">.</span>
          </span>
        </div>

        {/* Titre */}
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#1b3226]/30">
            {isLogin ? "Connexion" : "Inscription"}
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-[#1b3226] mt-2 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {isLogin ? (
              <>Bon retour <span className="italic font-serif font-light">sur l{"'"}île.</span></>
            ) : (
              <>Rejoignez <span className="italic font-serif font-light">la communauté.</span></>
            )}
          </h1>
        </div>

        {/* Formulaire */}
        <form className="flex flex-col gap-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#1b3226]/40 mb-2">
                Nom <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Votre nom complet"
                className="w-full px-4 py-3 bg-white border border-[#1b3226]/15 rounded-xl text-[#1b3226] placeholder:text-[#1b3226]/25 focus:outline-none focus:ring-2 focus:ring-[#D4E84A] focus:border-transparent transition"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#1b3226]/40 mb-2">
              Adresse e-mail <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              placeholder="vous@exemple.com"
              className="w-full px-4 py-3 bg-white border border-[#1b3226]/15 rounded-xl text-[#1b3226] placeholder:text-[#1b3226]/25 focus:outline-none focus:ring-2 focus:ring-[#D4E84A] focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#1b3226]/40 mb-2">
              Mot de passe <span className="text-red-400">*</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white border border-[#1b3226]/15 rounded-xl text-[#1b3226] placeholder:text-[#1b3226]/25 focus:outline-none focus:ring-2 focus:ring-[#D4E84A] focus:border-transparent transition"
              required
            />
          </div>

          {isLogin && (
            <Link
              href="#"
              className="text-xs font-medium text-[#1b3226]/40 hover:text-[#1b3226] transition-colors self-end"
            >
              Mot de passe oublié ?
            </Link>
          )}

          <button
            type="submit"
            className="mt-2 w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest bg-[#1b3226] text-white hover:bg-[#D4E84A] hover:text-[#1b3226] transition-all duration-200 active:scale-[0.99]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {isLogin ? 'Se connecter' : "S'inscrire"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-sm text-[#1b3226]/40 mt-6">
          {isLogin ? "Vous êtes nouveau ?" : "Déjà un compte ?"}
          {' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-bold text-[#1b3226] hover:underline underline-offset-2 transition-colors"
          >
            {isLogin ? 'Créer un compte' : 'Se connecter'}
          </button>
        </p>
      </div>

      {/* ── Colonne image ── */}
      <div className="hidden lg:block w-1/2 relative">
        <Image
          src="/login.jpg"
          alt="Kisiwa"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay + citation */}
        <div className="absolute inset-0 bg-[#1b3226]/40" />
        <div className="absolute bottom-12 left-10 right-10">
          <p
            className="text-white text-3xl font-bold leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Tout se trouve{' '}
            <span className="italic font-serif font-light text-[#D4E84A]">
              sur l{"'"}île
            </span>{' '}
            et au-delà.
          </p>
          <p className="text-white/50 text-sm mt-3">
            La plateforme de confiance pour la communauté comorienne.
          </p>
        </div>
      </div>

    </div>
  )
}