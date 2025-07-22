'use client';

import React from "react";
import { InfoItem } from "../../app/db/categories/icons";

export default function Icons({ vehicule }: { vehicule: InfoItem[] }) {
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-4 text-white">Informations clés</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
        {vehicule.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <div className="mt-1">{item.icon}</div>
            <div className="ml-3">
              <p className="font-semibold text-sm capitalize">{item.label}</p>
              <p className="text-sm text-gray-300 leading-snug">
                {item.value?.toString().split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
