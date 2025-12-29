import CardPrincipal from '@/components/CardPrincipal'
import React from 'react'

// Local lightweight mock only; remove when real data is used

export default function page() {
  return (
    <div className="mt-12 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h1 className="text-2xl font-bold">Mes favorites (12)</h1>
      </div>

      <hr className="border-gray-300 my-4" />

      {/* ✅ Responsive grid */}
      <div className="grid gap-4
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      ">
        {[1, 2].map((i) => (
          <CardPrincipal
            key={i}
            posts={{
              id: i,
              title: 'Annonce favorite',
              price: 100 + i,
              category: 'Divers',
              images: [], // mets une URL si tu veux tester l’affichage photo
              likes: i,
              description: '',
              date: new Date().toISOString(),
              informations: {
                version: '',
                annee: '',
                kilometrage: '',
                energie: '',
                couleur: '',
                transmission: '',
                portes: '',
                consommation: '',
                puissance: '',
                nombre_de_places: '',
              },
            }}
          />
        ))}
      </div>
    </div>
  )
}
