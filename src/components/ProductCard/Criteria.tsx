import {
  PackageSearch,
  Palette,
  SquareChartGantt,
  ThumbsUp,
} from "lucide-react";

export default function Criteria() {
  const criteria = [
    { icon: <Palette />, label: "Couleur", value: "Gris / Anthracite" },
    { icon: <ThumbsUp />, label: "Type", value: "Poussette" },
    { icon: <SquareChartGantt />, label: "Produit", value: "Cybex" },
    { icon: <PackageSearch />, label: "Couleur", value: "Très bon état" },
  ];

  return (
    <div>
      <h2 className="text-lg font-bold">Critères</h2>
      <div className="flex flex-wrap gap-8 py-2">
        {criteria.map((item, index) => (
          <div key={index} className="flex flex-col space-y-1">
            <div className="flex items-center justify-start  space-x-2 text-gray-600">
              <span className="text-lg bg-slate-700 rounded-full p-1">
                {item.icon}
              </span>
              <div>
                <p className="font-semibold text-xs">{item.label}</p>
                <p className="font-semibold text-sm text-white">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
