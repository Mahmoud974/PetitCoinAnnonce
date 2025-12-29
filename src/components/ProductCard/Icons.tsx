"use client";
 

type Informations = Record<string, any>;

const isUseless = (value: any) =>
  value === undefined ||
  value === null ||
  value === "" ||
  value === "-" ||
  value === "Non concerné";

const formatLabel = (key: string): string => {
  const labels: Record<string, string> = {
    transaction: "Transaction",
    type: "Bien",
    surface: "Surface",
    pieces: "Pièces",
    chambres: "Chambres",
    etage: "Étage",
    chauffage: "Chauffage",
    annee_construction: "Année",
    terrain: "Terrain",
    piscine: "Piscine",
    jardin: "Jardin",
    parking: "Parking",
    box: "Box",
    dpe: "DPE",
    ges: "GES",
  };

  return labels[key] || key;
};

export default function Icons({ informations }: { informations: Informations }) {
  if (!informations) return null;

  return (
    <section className="my-6 px-2">
      <h2 className="text-base font-bold mb-3">Caractéristiques</h2>

     
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-2">
        {Object.entries(informations).map(([key, value]) => {
          if (isUseless(value)) return null;

          const displayValue =
            typeof value === "boolean" ? (value ? "Oui" : "Non") : String(value);

          return (
            <li
            key={key}
            className="
              flex items-center justify-between
              border-b pb-2
              last:border-b-0 last:pb-0
              sm:border-none sm:pb-0 sm:flex-col sm:items-start
            "
          >
          
              <span className="text-xs text-gray-500 leading-tight">
                {formatLabel(key)}
              </span>

              <span className="text-sm font-semibold text-black sm:text-center">
                {displayValue}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
