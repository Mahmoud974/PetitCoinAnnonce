"use client";

import Image from "next/image";
import { useState } from "react";

export default function FormulaireAnnonce() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    spot: "",
    phone: "",
    version: "",
    year: "",
    kilometrage: "",
    energie: "",
    transmission: "",
  });

  const [images, setImages] = useState<File[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files).slice(0, 4);
    setImages(files);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...form, images });
    alert("Annonce envoyée !");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-lg text-white"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Déposer une annonce</h2>

        {/* Champs principaux */}
        <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="Titre de l’annonce"
            value={form.title}
            onChange={handleChange}
            className="w-full bg-transparent text-white placeholder-gray-400 border-b border-white focus:border-blue-400 outline-none py-2"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="number"
            name="price"
            placeholder="Prix (€)"
            value={form.price}
            onChange={handleChange}
            className="w-full bg-transparent text-white placeholder-gray-400 border-b border-white focus:border-blue-400 outline-none py-2"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="spot"
            placeholder="Ville / Lieu"
            value={form.spot}
            onChange={handleChange}
            className="w-full bg-transparent text-white placeholder-gray-400 border-b border-white focus:border-blue-400 outline-none py-2"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="phone"
            placeholder="Téléphone"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-transparent text-white placeholder-gray-400 border-b border-white focus:border-blue-400 outline-none py-2"
            required
          />
        </div>

        <div className="mb-6">
          <textarea
            name="description"
            placeholder="Description de l’annonce"
            value={form.description}
            onChange={handleChange}
            className="w-full bg-transparent text-white placeholder-gray-400 border-b border-white focus:border-blue-400 outline-none py-2 resize-none"
            rows={4}
            required
          />
        </div>

        {/* Informations clés simplifiées */}
        <div className="mb-6 space-y-4">
          <h3 className="text-lg font-semibold text-white mb-2">Informations clés</h3>

          <input
            type="text"
            name="version"
            placeholder="Version"
            value={form.version}
            onChange={handleChange}
            className="w-full bg-transparent text-white placeholder-gray-400 border-b border-white focus:border-blue-400 outline-none py-2"
          />

          <input
            type="text"
            name="year"
            placeholder="Année (ex: 2012)"
            value={form.year}
            onChange={handleChange}
            className="w-full bg-transparent text-white placeholder-gray-400 border-b border-white focus:border-blue-400 outline-none py-2"
          />

          <input
            type="number"
            name="kilometrage"
            placeholder="Kilométrage"
            value={form.kilometrage}
            onChange={handleChange}
            className="w-full bg-transparent text-white placeholder-gray-400 border-b border-white focus:border-blue-400 outline-none py-2"
          />

          <select
            name="energie"
            value={form.energie}
            onChange={handleChange}
            className="w-full bg-transparent text-white border-b border-white focus:border-blue-400 outline-none py-2"
          >
            <option value="">Énergie</option>
            <option value="Diesel">Diesel</option>
            <option value="Essence">Essence</option>
            <option value="Hybride">Hybride</option>
            <option value="Électrique">Électrique</option>
          </select>

          <input
            type="text"
            name="transmission"
            placeholder="Transmission (ex: Manuelle)"
            value={form.transmission}
            onChange={handleChange}
            className="w-full bg-transparent text-white placeholder-gray-400 border-b border-white focus:border-blue-400 outline-none py-2"
          />
        </div>

        {/* Upload d'images */}
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-400">
            Ajouter jusqu'à 4 images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-200"
          />
          <div className="flex flex-wrap gap-2 mt-4">
            {images.map((img, index) => (
              <Image
                key={index}
                src={URL.createObjectURL(img)}
                alt={`image-${index}`}
                width={80}
                height={80}
                className="rounded object-cover"
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
        >
          Publier l’annonce
        </button>
      </form>
    </div>
  );
}
