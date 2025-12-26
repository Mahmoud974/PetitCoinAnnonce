"use client"
import { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

export default function AnnonceForm() {
  const [formData, setFormData] = useState({
    nom: '',
    professionnel: '',
    contact: '',
    clientContact: '',
    prix: '',
    description: '',
    lieu: '',
    infosSupp: '',
    photo: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = () => {
    if (!formData.nom || !formData.contact) {
      alert('Veuillez remplir les champs obligatoires');
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen   py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="  overflow-hidden">
        <h1 className='text-2xl ml-8 text-black font-black'>Déposez une annonce</h1>
        

          {/* Form */}
          <div className="px-8 py-10 space-y-6">
            {/* Nom */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {`Nom et prénom ou Nom de l'entreprise `}<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none"
                placeholder="Votre nom complet ou entreprise"
              />
            </div>

 
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Êtes vous professionnel ?
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="professionnel"
                    value="oui"
                    checked={formData.professionnel === 'oui'}
                    onChange={handleChange}
                    className="w-5 h-5 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-700 select-none">Oui</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="professionnel"
                    value="non"
                    checked={formData.professionnel === 'non'}
                    onChange={handleChange}
                    className="w-5 h-5 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-700 select-none">Non</span>
                </label>
              </div>
            </div>

            {/* Lieu */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lieu
              </label>
              <input
                type="text"
                name="lieu"
                value={formData.lieu}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none"
                placeholder="Ville, région..."
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none"
                placeholder="Téléphone, mail, réseau social"
              />
            </div>

            {/* Comment contacter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comment voulez-vous que les clients vous contactent?
              </label>
              <input
                type="text"
                name="clientContact"
                value={formData.clientContact}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none"
                placeholder="Par téléphone, mail, WhatsApp..."
              />
            </div>

            {/* Prix */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prix demandé
              </label>
              <input
                type="text"
                name="prix"
                value={formData.prix}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none"
                placeholder="Ex: 50€, Gratuit, À négocier..."
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quelle est votre annonce ? Décrivez-la ici.
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 resize-none outline-none"
                placeholder="Décrivez votre annonce en détail..."
              />
            </div>


            {/* Infos supplémentaires */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Informations complémentaires
              </label>
              <textarea
                name="infosSupp"
                value={formData.infosSupp}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 resize-none outline-none"
                placeholder="Ajoutez des informations supplémentaires si nécessaire..."
              />
            </div>

            {/* Upload photo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ajoutez une photo
              </label>
              <div className="mt-2">
                <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition duration-200">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 text-gray-400 mb-3" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Cliquez pour télécharger</span> ou glissez-déposez
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, JPEG (MAX. 5MB)</p>
                    {fileName && (
                      <p className="mt-2 text-sm text-purple-600 font-medium">{fileName}</p>
                    )}
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>

           
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transform hover:scale-[1.02] transition duration-200 shadow-lg"
              >
                {`Publier l'annonce`}
              </button>
            </div>

    
            {submitted && (
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg animate-pulse">
                <CheckCircle className="text-green-600" size={24} />
                <p className="text-green-800 font-medium">Votre annonce a été soumise avec succès !</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}