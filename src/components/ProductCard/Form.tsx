"use client";
import { Phone } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa";

interface FormData {
  civility: "Madame" | "Monsieur";
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  contactMethod: "mail" | "phone";
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    civility: "Monsieur",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message:
      "Bonjour, je suis intéressé par votre véhicule NISSAN Note de 2012 à 3 200€, merci de me recontacter.",
    contactMethod: "phone",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? (value as "Madame" | "Monsieur") : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
    alert("Message envoyé !");
  };

  return (
    <>
      <div className="flex flex-row justify-between max-w-3xl  ">
        <p className="mb-3">Prendre contact par mail ou téléphone : </p>
        <div className="flex flex-row">
          <Phone className="  text-red-700" />
          <p className="ml-2 underline text-red-700">Contacter par téléphone</p>
        </div>
      </div>
      <div className="max-w-3xl   bg-[#121212] text-white p-8  ">
        <h2 className="text-2xl font-bold mb-6 text-center">Contactez-nous</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Civilité */}
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="civility"
                value="Madame"
                checked={formData.civility === "Madame"}
                onChange={handleChange}
                className="accent-red-500"
              />
              <span>Madame</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="civility"
                value="Monsieur"
                checked={formData.civility === "Monsieur"}
                onChange={handleChange}
                className="accent-red-500"
              />
              <span>Monsieur</span>
            </label>
          </div>

          {/* Nom et Prénom */}
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="lastName"
              placeholder="Nom"
              className="w-full p-3 bg-[#121212] text-white border border-gray-700   focus:ring-2 focus:ring-red-500 outline-none"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              className="w-full p-3 bg-[#121212] text-white border border-gray-700   focus:ring-2 focus:ring-red-500"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          {/* Téléphone et Email */}
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="phone"
              placeholder="Téléphone"
              className="w-full p-3 bg-[#121212] text-white border border-gray-700   focus:ring-2 focus:ring-red-500"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 bg-[#121212] text-white border border-gray-700   focus:ring-2 focus:ring-red-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Motif de contact */}
          <select
            name="subject"
            className="w-full p-3 bg-[#121212] text-white border border-gray-700   focus:ring-2 focus:ring-red-500"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="">Motif de contact</option>
            <option value="achat">Achat</option>
            <option value="info">Demande d’informations</option>
            <option value="essai">Demande d’essai</option>
            <option value="autre">Autre</option>
          </select>

          {/* Message */}
          <div>
            <label className="text-red-600 text-sm font-semibold">
              Votre message
            </label>
            <textarea
              name="message"
              className="w-full p-3 mt-2 bg-[#121212] text-white border border-gray-700   focus:ring-2 focus:ring-red-500"
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Préférence de contact */}
          <div className="flex items-center space-x-6">
            <p className="text-sm text-gray-400">Préférence de contact :</p>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contactMethod"
                value="mail"
                checked={formData.contactMethod === "mail"}
                onChange={handleChange}
                className="accent-red-500"
              />
              <span>Par mail</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={formData.contactMethod === "phone"}
                onChange={handleChange}
                className="accent-red-500"
              />
              <span>Par téléphone *</span>
            </label>
          </div>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            className="w-auto px-3 bg-red-600 text-white font-semibold py-3  mx-auto hover:bg-red-700 flex items-center justify-center gap-2 transition-all duration-300 mt-6"
          >
            <FaPaperPlane className="text-lg" />
            Envoyer le message
          </button>
        </form>
      </div>
    </>
  );
}
