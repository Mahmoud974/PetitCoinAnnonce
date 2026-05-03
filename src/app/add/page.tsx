"use client";
import { useMemo, useState } from "react";
import { Upload, CheckCircle } from "lucide-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  CATEGORIES,
  CATEGORY_FIELDS,
  CategoryValue,
  FieldDef,
  FormValues,
} from "../config/categories";

/* ─── Styles partagés ─────────────────────────────────────── */
const inputBase =
  "w-full px-4 py-3 bg-white border border-[#1b3226]/15 rounded-xl text-[#1b3226] placeholder:text-[#1b3226]/30 focus:outline-none focus:ring-2 focus:ring-[#D4E84A] focus:border-transparent transition duration-200";

const labelBase = "block text-sm font-medium text-[#1b3226]/70 mb-2";

/* ─── ListingType ─────────────────────────────────────────── */
function ListingType({
  value,
  onChange,
}: {
  value: "offre" | "demande";
  onChange: (val: "offre" | "demande") => void;
}) {
  return (
    <div className="space-y-3">
      <label className={labelBase}>
        Type d'annonce <span className="text-red-400">*</span>
      </label>
      <div className="grid grid-cols-2 gap-3">
        {(["offre", "demande"] as const).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => onChange(type)}
            className={`py-4 px-5 rounded-xl border-2 text-left transition-all duration-200 ${
              value === type
                ? "border-[#1b3226] bg-[#1b3226] text-white"
                : "border-[#1b3226]/15 bg-white text-[#1b3226] hover:border-[#1b3226]/40"
            }`}
          >
            <p className="font-bold text-base capitalize">{type}</p>
            <p className={`text-sm mt-0.5 ${value === type ? "text-white/60" : "text-[#1b3226]/40"}`}>
              {type === "offre" ? "Vous vendez" : "Vous recherchez"}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── DynamicField ────────────────────────────────────────── */
function DynamicField({
  fieldDef,
  control,
  name,
}: {
  fieldDef: FieldDef;
  control: any;
  name: `caracteristiques.${string}`;
}) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => {
        if (fieldDef.type === "select") {
          return (
            <select
              className={inputBase}
              value={(field.value as string) ?? ""}
              onChange={field.onChange}
            >
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
            className={inputBase}
            type={fieldDef.type}
            value={(field.value as any) ?? ""}
            placeholder={fieldDef.placeholder ?? ""}
            onChange={(e) =>
              field.onChange(
                fieldDef.type === "number" && e.target.value !== ""
                  ? Number(e.target.value)
                  : e.target.value
              )
            }
          />
        );
      }}
    />
  );
}

/* ─── Section wrapper ─────────────────────────────────────── */
function FormSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#1b3226]/10 p-6 space-y-5">
      <p
        className="text-xs font-bold tracking-[0.15em] uppercase text-[#1b3226]/40"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

/* ─── Field wrapper ───────────────────────────────────────── */
function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelBase}>
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
    </div>
  );
}

/* ─── Main form ───────────────────────────────────────────── */
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
    <div className="min-h-screen bg-[#FDFBF7] py-16 px-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-10">
          <span className="text-[#1b3226]/40 font-bold tracking-[0.3em] uppercase text-xs">
            Kisiwa
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-[#1b3226] mt-3 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Déposez une{" "}
            <span className="italic font-serif font-light">annonce</span>
          </h1>
          <p className="text-[#1b3226]/50 mt-3 text-base">
            Remplissez les informations ci-dessous pour publier votre annonce.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Bloc 1 — Type & Identité */}
          <FormSection title="Votre annonce">
            <Controller
              control={control}
              name="typeAnnonce"
              render={({ field }) => (
                <ListingType value={field.value} onChange={field.onChange} />
              )}
            />
            <Field label="Nom ou nom de l'entreprise" required error={errors.nom?.message}>
              <input
                {...register("nom", { required: "Le nom est obligatoire" })}
                className={inputBase}
                placeholder="Votre nom complet ou entreprise"
              />
            </Field>
          </FormSection>

          {/* Bloc 2 — Catégorie */}
          <FormSection title="Catégorie">
            <Field label="Catégorie" required error={errors.categorie?.message}>
              <Controller
                control={control}
                name="categorie"
                rules={{ required: "La catégorie est obligatoire" }}
                render={({ field }) => (
                  <select
                    className={inputBase}
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.value as CategoryValue);
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
            </Field>

            {/* Champs dynamiques */}
            {categorie && categoryFields.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {categoryFields.map((fd) => (
                  <Field key={fd.name} label={fd.label}>
                    <DynamicField
                      control={control}
                      fieldDef={fd}
                      name={`caracteristiques.${fd.name}`}
                    />
                  </Field>
                ))}
              </div>
            )}
          </FormSection>

          {/* Bloc 3 — Localisation & Contact */}
          <FormSection title="Localisation & contact">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Lieu">
                <input
                  type="text"
                  {...register("lieu")}
                  className={inputBase}
                  placeholder="Ville, région…"
                />
              </Field>
              <Field label="Êtes-vous professionnel ?">
                <div className="flex gap-4 h-[50px] items-center">
                  {["oui", "non"].map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value={v}
                        {...register("professionnel")}
                        className="w-4 h-4 accent-[#1b3226]"
                      />
                      <span className="text-[#1b3226] capitalize text-sm">{v}</span>
                    </label>
                  ))}
                </div>
              </Field>
            </div>
            <Field label="Contact" required error={errors.contact?.message}>
              <input
                type="text"
                {...register("contact", { required: "Le contact est obligatoire" })}
                className={inputBase}
                placeholder="Téléphone, email, réseau social…"
              />
            </Field>
            <Field label="Comment souhaitez-vous être contacté ?">
              <input
                type="text"
                {...register("clientContact")}
                className={inputBase}
                placeholder="WhatsApp, appel, email…"
              />
            </Field>
          </FormSection>

          {/* Bloc 4 — Annonce */}
          <FormSection title="Détails de l'annonce">
            <Field label="Prix demandé">
              <input
                type="text"
                {...register("prix")}
                className={inputBase}
                placeholder="Ex : 50 €, Gratuit, À négocier…"
              />
            </Field>
            <Field label="Description">
              <textarea
                {...register("description")}
                rows={5}
                className={`${inputBase} resize-none`}
                placeholder="Décrivez votre annonce en détail…"
              />
            </Field>
            <Field label="Informations complémentaires">
              <textarea
                {...register("infosSupp")}
                rows={3}
                className={`${inputBase} resize-none`}
                placeholder="Ajoutez des précisions si nécessaire…"
              />
            </Field>
          </FormSection>

          {/* Bloc 5 — Photo */}
          <FormSection title="Photo">
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-[#1b3226]/20 rounded-xl cursor-pointer hover:border-[#D4E84A] hover:bg-[#D4E84A]/5 transition duration-200 group">
              <Upload className="w-8 h-8 text-[#1b3226]/30 group-hover:text-[#1b3226]/60 mb-3 transition-colors" />
              <p className="text-sm text-[#1b3226]/50 group-hover:text-[#1b3226]/70 transition-colors">
                <span className="font-semibold">Cliquez</span> ou glissez-déposez
              </p>
              <p className="text-xs text-[#1b3226]/30 mt-1">PNG, JPG, JPEG — max. 5 MB</p>
              {fileName && (
                <p className="mt-2 text-sm text-[#1b3226] font-medium break-all px-4 text-center">
                  {fileName}
                </p>
              )}
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const files = e.target.files;
                  setValue("photo", files?.length ? files : null, { shouldValidate: true });
                  setFileName(files?.[0]?.name ?? "");
                }}
              />
            </label>
          </FormSection>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-xl font-bold text-base bg-[#1b3226] text-white hover:bg-[#D4E84A] hover:text-[#1b3226] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {isSubmitting ? "Publication en cours…" : "Publier l'annonce →"}
          </button>

          {/* Success */}
          {isSubmitSuccessful && (
            <div className="flex items-center gap-3 p-4 bg-[#D4E84A]/20 border border-[#D4E84A] rounded-xl">
              <CheckCircle className="text-[#1b3226] shrink-0" size={20} />
              <p className="text-[#1b3226] font-medium text-sm">
                Votre annonce a été soumise avec succès !
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}