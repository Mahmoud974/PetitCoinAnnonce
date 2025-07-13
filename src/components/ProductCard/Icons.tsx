// Icons.tsx
import React from "react";
import { InfoItem, vehicule } from "../../app/db/categories/icons";

export default function Icons() {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-xl font-bold mb-2">Informations clé</h2>
        <ul className="gap-9 grid grid-cols-4">
          {vehicule.map((item: InfoItem, idx: number) => (
            <li key={idx}>
              <div className="flex items-start">
                {item.icon}
                <div className="flex flex-col ml-2">
                  <p className="font-bold">{item.label}</p>
                  <p className="text-xs text-gray-300">
                    {item.value.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
