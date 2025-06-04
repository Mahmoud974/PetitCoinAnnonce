import Navbar from "@/components/Navbar";
import React from "react";

import Footer from "@/components/Footer";
import AppPromo from "@/components/AppPromo";

import Steps from "@/components/Add/Steps";

export default function Page() {
  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <Steps />
      <div className="container mx-auto mt-12 max-w-3xl px-4">
        <h2 className="text-3xl font-bold mb-6">Déposer une petite annonce</h2>
        <form className="space-y-6 bg-gray-800 p-6 rounded-2xl shadow-lg">
          <div>
            <label htmlFor="titre" className="block text-sm font-medium">
              Titre de l'annonce
            </label>
            <input
              type="text"
              id="titre"
              name="titre"
              className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-700 p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-700 p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="prix" className="block text-sm font-medium">
              Prix (€)
            </label>
            <input
              type="number"
              id="prix"
              name="prix"
              className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-700 p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email de contact
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-700 p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Publier l'annonce
          </button>
        </form>
      </div>
      <div className="container mx-auto mt-24 max-w-7xl">
        <AppPromo />
      </div>
      <Footer />
    </div>
  );
}
