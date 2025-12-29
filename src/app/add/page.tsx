"use client";
import { useMemo, useState } from "react";
import { Upload, CheckCircle } from "lucide-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CATEGORIES, CATEGORY_FIELDS, CategoryValue, FieldDef, FormValues } from '../config/categories';


function ListingType({
  value,
  onChange,
}: {
  value: "offre" | "demande";
  onChange: (val: "offre" | "demande") => void;
}) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        Type d’annonce <span className="text-red-500">*</span>
      </label>

      <div className="flex items-center space-x-7">
        <label className="flex items-start gap-4 cursor-pointer">
          <input
            type="radio"
            name="typeAnnonce"
            value="offre"
            checked={value === "offre"}
            onChange={() => onChange("offre")}
            className="mt-1 w-6 h-6 accent-blue-900"
          />
          <div>
            <p className="text-lg font-semibold text-gray-900">Offre</p>
            <p className="text-gray-500">Vous vendez</p>
          </div>
        </label>

        <label className="flex items-start gap-4 cursor-pointer">
          <input
            type="radio"
            name="typeAnnonce"
            value="demande"
            checked={value === "demande"}
            onChange={() => onChange("demande")}
            className="mt-1 w-6 h-6 accent-blue-900"
          />
          <div>
            <p className="text-lg font-semibold text-gray-900">Demande</p>
            <p className="text-gray-500">Vous recherchez</p>
          </div>
        </label>
      </div>
    </div>
  );
}

function DynamicField({
  fieldDef,
  control,
  name,
}: {
  fieldDef: FieldDef;
  control: any;
  name: `caracteristiques.${string}`;
}) {
  const base =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none";

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={fieldDef.type === "number" ? "" : ""}
      render={({ field }) => {
        if (fieldDef.type === "select") {
          return (
            <select className={base} value={(field.value as string) ?? ""} onChange={field.onChange}>
              <option value="">Sélectionner...</option>
              {fieldDef.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          );
        }

        return (
          <input
            className={base}
            type={fieldDef.type}
            value={(field.value as any) ?? ""}
            placeholder={fieldDef.placeholder ?? ""}
            onChange={(e) => {
              if (fieldDef.type === "number") {
                // garder vide si vide, sinon convertir en nombre
                const v = e.target.value;
                field.onChange(v === "" ? "" : Number(v));
              } else {
                field.onChange(e.target.value);
              }
            }}
          />
        );
      }}
    />
  );
}

export default function AnnonceForm() {
  const [fileName, setFileName] = useState("");

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: {
      typeAnnonce: "offre",
      nom: "",
      categorie: "",
      professionnel: "",
      lieu: "",
      contact: "",
      clientContact: "",
      prix: "",
      description: "",
      infosSupp: "",
      photo: null,
      caracteristiques: {},
    },
    mode: "onSubmit",
  });

  const categorie = watch("categorie");
  const categoryFields = useMemo(() => CATEGORY_FIELDS[categorie] || [], [categorie]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
  
    console.log("FORM DATA:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <h1 className="text-2xl ml-8 text-black font-black">Déposez une annonce</h1>

          <div className="px-8 py-10 space-y-6">
            {/* Type d'annonce */}
            <Controller
              control={control}
              name="typeAnnonce"
              rules={{ required: true }}
              render={({ field }) => <ListingType value={field.value} onChange={field.onChange} />}
            />

            {/* Nom */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom ou Nom de l&apos;entreprise <span className="text-red-500">*</span>
              </label>
              <input
                {...register("nom", { required: "Le nom est obligatoire" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none"
                placeholder="Votre nom complet ou entreprise"
              />
              {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>}
            </div>

            {/* Catégorie */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Catégorie <span className="text-red-500">*</span>
              </label>

              <Controller
                control={control}
                name="categorie"
                rules={{ required: "La catégorie est obligatoire" }}
                render={({ field }) => (
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none"
                    value={field.value}
                    onChange={(e) => {
                      const v = e.target.value as CategoryValue;
                      field.onChange(v);
                      // reset dynamique quand on change de catégorie
                      setValue("caracteristiques", {});
                    }}
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.categorie && <p className="text-red-500 text-sm mt-1">{errors.categorie.message}</p>}
            </div>

            {/* Champs dynamiques */}
            {categorie && categoryFields.length > 0 && (
              <div className="rounded-lg border border-gray-200 p-5 space-y-4">
                <p className="font-semibold text-gray-800">Caractéristiques</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {categoryFields.map((fd) => (
                    <div key={fd.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{fd.label}</label>
                      <DynamicField control={control} fieldDef={fd} name={`caracteristiques.${fd.name}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pro */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Êtes vous professionnel ?</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    value="oui"
                    {...register("professionnel")}
                    className="w-5 h-5 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-700 select-none">Oui</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    value="non"
                    {...register("professionnel")}
                    className="w-5 h-5 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-700 select-none">Non</span>
                </label>
              </div>
            </div>

            {/* Lieu */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Lieu</label>
              <input
                type="text"
                {...register("lieu")}
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
                {...register("contact", { required: "Le contact est obligatoire" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none"
                placeholder="Téléphone, mail, réseau social"
              />
              {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
            </div>

            {/* Comment contacter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comment voulez-vous que les clients vous contactent?
              </label>
              <input
                type="text"
                {...register("clientContact")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none"
                placeholder="Par téléphone, mail, WhatsApp..."
              />
            </div>

            {/* Prix */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Prix demandé</label>
              <input
                type="text"
                {...register("prix")}
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
                {...register("description")}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 resize-none outline-none"
                placeholder="Décrivez votre annonce en détail..."
              />
            </div>

            {/* Infos supplémentaires */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Informations complémentaires</label>
              <textarea
                {...register("infosSupp")}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 resize-none outline-none"
                placeholder="Ajoutez des informations supplémentaires si nécessaire..."
              />
            </div>

            {/* Upload photo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ajoutez une photo</label>
              <div className="mt-2">
                <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition duration-200">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 text-gray-400 mb-3" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Cliquez pour télécharger</span> ou glissez-déposez
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, JPEG (MAX. 5MB)</p>
                    {fileName && <p className="mt-2 text-sm text-purple-600 font-medium">{fileName}</p>}
                  </div>

                  {/* IMPORTANT: input file doit rester un vrai input */}
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      const files = e.target.files;
                      setValue("photo", files && files.length > 0 ? files : null, { shouldValidate: true });
                      setFileName(files?.[0]?.name ?? "");
                    }}
                  />
                </label>
              </div>
            </div>

 
            <div className="pt-6">
              <input
                type="submit"
                value={isSubmitting ? "Publication..." : "Publier l'annonce"}
                disabled={isSubmitting}
                className="w-full bg-red-600 cursor-pointer text-white py-4 px-6 rounded-lg font-semibold text-lg transform hover:scale-[1.02] transition duration-200 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>

            {/* Success */}
            {isSubmitSuccessful && (
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="text-green-600" size={24} />
                <p className="text-green-800 font-medium">Votre annonce a été soumise avec succès !</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
