'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter()

  const toggleForm = () => setIsLogin(!isLogin)

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#111] text-white flex flex-col justify-center px-20">
        <button
          onClick={() => router.push("/")}
          className="text-sm text-gray-400 mb-6 flex hover:underline hover:text-red-600"
        >
          ← Retour
        </button>

        <h1 className="text-3xl font-bold mb-2">
          {isLogin ? 'Se connecter' : 'Créer un compte'}
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          {`Les champs obligatoires sont marqués d'un astérisque*`}
        </p>

        <form className="flex flex-col gap-4">
          {!isLogin && (
            <div>
              <label className="text-sm text-gray-300 block mb-1">* Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full p-3 rounded bg-black border border-gray-600 text-white"
                required
              />
            </div>
          )}

          <div>
            <label className="text-sm text-gray-300 block mb-1">
              * Adresse courriel
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-black border border-gray-600 text-white"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 block mb-1">
              * Mot de passe
            </label>
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full p-3 rounded bg-black border border-gray-600 text-white"
              required
            />
          </div>

          {isLogin && (
            <Link href="#" className="text-red-600 text-sm hover:underline mt-1">
              Vous avez oublié votre mot de passe ?
            </Link>
          )}

          <button
            type="submit"
            className="mt-4 bg-red-600 hover:bg-red-800 text-white font-semibold py-3 rounded-full"
          >
            {isLogin ? 'Se connecter' : "S'inscrire"}
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6">
          {isLogin ? (
            <>
              Vous êtes nouveau chez nous ?{' '}
              <button
                onClick={toggleForm}
                className="text-red-600 hover:underline ml-1"
              >
                Créer un compte
              </button>
            </>
          ) : (
            <>
              Vous avez déjà un compte ?{' '}
              <button
                onClick={toggleForm}
                className="text-red-600 hover:underline ml-1"
              >
                Se connecter
              </button>
            </>
          )}
        </p>
      </div>

      <div className="w-1/2 relative -z-20">
        <Image
          src="/login.jpg"
          alt="Image d'authentification"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
